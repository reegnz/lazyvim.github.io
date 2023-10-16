# Formatting

**LazyVim** uses `conform.nvim` for formatting.

To make configuration easier, we added some extra options to `conform.nvim`:

- `opts.format`: extra options passed to `require("conform").format(options)`
- `opts.formatters`: instead of just adding new formatters, you can also override the default options for any formatter
- `opts.formatters[NAME].extra_args`: extra arguments passed to the formatter command.
  If you want to fully override the `args`, just use `args` instead of `extra_args`.

:::caution
Don't override `plugin.config` directly, since this **will** break LazyVim formatting.
:::

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [conform.nvim](https://github.com/stevearc/conform.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local plugin = require("lazy.core.config").plugins["conform.nvim"]
  if plugin.config ~= M.setup then
    Util.error({
      "Don't set `plugin.config` for `conform.nvim`.\n",
      "This will break **LazyVim** formatting.\n",
      "Please refer to the docs at https://www.lazyvim.org/plugins/formatting",
    }, { title = "LazyVim" })
  end
  ---@class ConformOpts
  local opts = {
    -- LazyVim will use these options when formatting with the conform.nvim formatter
    format = {
      timeout_ms = 3000,
      async = false, -- not recommended to change
      quiet = false, -- not recommended to change
    },
    ---@type table<string, conform.FormatterUnit[]>
    formatters_by_ft = {
      lua = { "stylua" },
      fish = { "fish_indent" },
      sh = { "shfmt" },
    },
    -- LazyVim will merge the options you set here with builtin formatters.
    -- You can also define any custom formatters here.
    ---@type table<string, conform.FormatterConfigOverride|fun(bufnr: integer): nil|conform.FormatterConfigOverride>
    formatters = {
      injected = { options = { ignore_errors = true } },
      -- # Example of using dprint only when a dprint.json file is present
      -- dprint = {
      --   condition = function(ctx)
      --     return vim.fs.find({ "dprint.json" }, { path = ctx.filename, upward = true })[1]
      --   end,
      -- },
      --
      -- # Example of using shfmt with extra args
      -- shfmt = {
      --   extra_args = { "-i", "2", "-ci" },
      -- },
    },
  }
  return opts
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/conform.nvim",
  dependencies = { "mason.nvim" },
  lazy = true,
  cmd = "ConformInfo",
  keys = {
    {
      "<leader>cF",
      function()
        require("conform").format({ formatters = { "injected" } })
      end,
      mode = { "n", "v" },
      desc = "Format Injected Langs",
    },
  },
  init = function()
    vim.o.formatexpr = "v:lua.require'conform'.formatexpr()"
    -- Install the conform formatter on VeryLazy
    require("lazyvim.util").on_very_lazy(function()
      require("lazyvim.util").format.register({
        name = "conform.nvim",
        priority = 100,
        primary = true,
        format = function(buf)
          require("conform").format(Util.merge({
            timeout_ms = conform_opts.format.timeout_ms,
            async = conform_opts.format.async,
            quiet = conform_opts.format.quiet,
          }, { bufnr = buf }))
        end,
        sources = function(buf)
          local ret = require("conform").list_formatters(buf)
          ---@param v conform.FormatterInfo
          return vim.tbl_map(function(v)
            return v.name
          end, ret)
        end,
      })
    end)
  end,
  opts = function()
    local plugin = require("lazy.core.config").plugins["conform.nvim"]
    if plugin.config ~= M.setup then
      Util.error({
        "Don't set `plugin.config` for `conform.nvim`.\n",
        "This will break **LazyVim** formatting.\n",
        "Please refer to the docs at https://www.lazyvim.org/plugins/formatting",
      }, { title = "LazyVim" })
    end
    ---@class ConformOpts
    local opts = {
      -- LazyVim will use these options when formatting with the conform.nvim formatter
      format = {
        timeout_ms = 3000,
        async = false, -- not recommended to change
        quiet = false, -- not recommended to change
      },
      ---@type table<string, conform.FormatterUnit[]>
      formatters_by_ft = {
        lua = { "stylua" },
        fish = { "fish_indent" },
        sh = { "shfmt" },
      },
      -- LazyVim will merge the options you set here with builtin formatters.
      -- You can also define any custom formatters here.
      ---@type table<string, conform.FormatterConfigOverride|fun(bufnr: integer): nil|conform.FormatterConfigOverride>
      formatters = {
        injected = { options = { ignore_errors = true } },
        -- # Example of using dprint only when a dprint.json file is present
        -- dprint = {
        --   condition = function(ctx)
        --     return vim.fs.find({ "dprint.json" }, { path = ctx.filename, upward = true })[1]
        --   end,
        -- },
        --
        -- # Example of using shfmt with extra args
        -- shfmt = {
        --   extra_args = { "-i", "2", "-ci" },
        -- },
      },
    }
    return opts
  end,
  config = M.setup,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->