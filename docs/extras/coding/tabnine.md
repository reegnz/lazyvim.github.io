# `coding.tabnine`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

<details>
<summary>Alternatively, you can add it to your <code>lazy.nvim</code> imports</summary>

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.coding.tabnine" },
    { import = "plugins" },
  },
})
```

</details>

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [cmp-tabnine](https://github.com/tzachar/cmp-tabnine)

 Add TabNine support, make sure you run :CmpTabnineHub after installation.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  max_lines = 1000,
  max_num_results = 3,
  sort = true,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "tzachar/cmp-tabnine",
  build = "./install.sh",
  dependencies = "hrsh7th/nvim-cmp",
  opts = {
    max_lines = 1000,
    max_num_results = 3,
    sort = true,
  },
  config = function(_, opts)
    local tabnine = require("cmp_tabnine.config")
    tabnine:setup(opts)
  end,
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

 Show TabNine status in lualine


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local icon = require("lazyvim.config").icons.kinds.TabNine
  table.insert(opts.sections.lualine_x, 2, require("lazyvim.util").lualine.cmp_source("cmp_tabnine", icon))
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  optional = true,
  event = "VeryLazy",
  opts = function(_, opts)
    local icon = require("lazyvim.config").icons.kinds.TabNine
    table.insert(opts.sections.lualine_x, 2, require("lazyvim.util").lualine.cmp_source("cmp_tabnine", icon))
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->