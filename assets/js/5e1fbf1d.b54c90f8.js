"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[9983],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(7462),a=t(7294),o=t(6010),i=t(2466),l=t(6550),s=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[s,u]=f({queryString:t,groupId:r}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),v=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var v=t(2389);const g="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==l&&(d(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",y,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function x(e){const n=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},4965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),i=t(5162);const l={},s="TreeSitter",u={unversionedId:"plugins/treesitter",id:"plugins/treesitter",title:"TreeSitter",description:"nvim-treesitter",source:"@site/docs/plugins/treesitter.md",sourceDirName:"plugins",slug:"/plugins/treesitter",permalink:"/plugins/treesitter",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/treesitter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LSP",permalink:"/plugins/lsp"},next:{title:"UI",permalink:"/plugins/ui"}},c={},d=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-treesitter-textobjects",id:"nvim-treesitter-textobjects",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"treesitter"},"TreeSitter"),(0,a.kt)("h2",{id:"nvim-treesitter"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,a.kt)("p",null," Treesitter is a new parser generator tool that we can\nuse in Neovim to power faster and more accurate\nsyntax highlighting."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  highlight = { enable = true },\n  indent = { enable = true },\n  ensure_installed = {\n    "bash",\n    "c",\n    "diff",\n    "html",\n    "javascript",\n    "jsdoc",\n    "json",\n    "jsonc",\n    "lua",\n    "luadoc",\n    "luap",\n    "markdown",\n    "markdown_inline",\n    "python",\n    "query",\n    "regex",\n    "toml",\n    "tsx",\n    "typescript",\n    "vim",\n    "vimdoc",\n    "yaml",\n  },\n  incremental_selection = {\n    enable = true,\n    keymaps = {\n      init_selection = "<C-space>",\n      node_incremental = "<C-space>",\n      scope_incremental = false,\n      node_decremental = "<bs>",\n    },\n  },\n  textobjects = {\n    move = {\n      enable = true,\n      goto_next_start = { ["]f"] = "@function.outer", ["]c"] = "@class.outer" },\n      goto_next_end = { ["]F"] = "@function.outer", ["]C"] = "@class.outer" },\n      goto_previous_start = { ["[f"] = "@function.outer", ["[c"] = "@class.outer" },\n      goto_previous_end = { ["[F"] = "@function.outer", ["[C"] = "@class.outer" },\n    },\n  },\n}\n'))),(0,a.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  version = false, -- last release is way too old and doesn\'t work on Windows\n  build = ":TSUpdate",\n  event = { "LazyFile", "VeryLazy" },\n  dependencies = {\n    {\n      "nvim-treesitter/nvim-treesitter-textobjects",\n      config = function()\n        -- When in diff mode, we want to use the default\n        -- vim text objects c & C instead of the treesitter ones.\n        local move = require("nvim-treesitter.textobjects.move") ---@type table<string,fun(...)>\n        local configs = require("nvim-treesitter.configs")\n        for name, fn in pairs(move) do\n          if name:find("goto") == 1 then\n            move[name] = function(q, ...)\n              if vim.wo.diff then\n                local config = configs.get_module("textobjects.move")[name] ---@type table<string,string>\n                for key, query in pairs(config or {}) do\n                  if q == query and key:find("[%]%[][cC]") then\n                    vim.cmd("normal! " .. key)\n                    return\n                  end\n                end\n              end\n              return fn(q, ...)\n            end\n          end\n        end\n      end,\n    },\n  },\n  cmd = { "TSUpdateSync", "TSUpdate", "TSInstall" },\n  keys = {\n    { "<c-space>", desc = "Increment selection" },\n    { "<bs>", desc = "Decrement selection", mode = "x" },\n  },\n  ---@type TSConfig\n  ---@diagnostic disable-next-line: missing-fields\n  opts = {\n    highlight = { enable = true },\n    indent = { enable = true },\n    ensure_installed = {\n      "bash",\n      "c",\n      "diff",\n      "html",\n      "javascript",\n      "jsdoc",\n      "json",\n      "jsonc",\n      "lua",\n      "luadoc",\n      "luap",\n      "markdown",\n      "markdown_inline",\n      "python",\n      "query",\n      "regex",\n      "toml",\n      "tsx",\n      "typescript",\n      "vim",\n      "vimdoc",\n      "yaml",\n    },\n    incremental_selection = {\n      enable = true,\n      keymaps = {\n        init_selection = "<C-space>",\n        node_incremental = "<C-space>",\n        scope_incremental = false,\n        node_decremental = "<bs>",\n      },\n    },\n    textobjects = {\n      move = {\n        enable = true,\n        goto_next_start = { ["]f"] = "@function.outer", ["]c"] = "@class.outer" },\n        goto_next_end = { ["]F"] = "@function.outer", ["]C"] = "@class.outer" },\n        goto_previous_start = { ["[f"] = "@function.outer", ["[c"] = "@class.outer" },\n        goto_previous_end = { ["[F"] = "@function.outer", ["[C"] = "@class.outer" },\n      },\n    },\n  },\n  ---@param opts TSConfig\n  config = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      ---@type table<string, boolean>\n      local added = {}\n      opts.ensure_installed = vim.tbl_filter(function(lang)\n        if added[lang] then\n          return false\n        end\n        added[lang] = true\n        return true\n      end, opts.ensure_installed)\n    end\n    require("nvim-treesitter.configs").setup(opts)\n  end,\n}\n')))),(0,a.kt)("h2",{id:"nvim-treesitter-textobjects"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects"},"nvim-treesitter-textobjects")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,a.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter-textobjects",\n  config = function()\n    -- When in diff mode, we want to use the default\n    -- vim text objects c & C instead of the treesitter ones.\n    local move = require("nvim-treesitter.textobjects.move") ---@type table<string,fun(...)>\n    local configs = require("nvim-treesitter.configs")\n    for name, fn in pairs(move) do\n      if name:find("goto") == 1 then\n        move[name] = function(q, ...)\n          if vim.wo.diff then\n            local config = configs.get_module("textobjects.move")[name] ---@type table<string,string>\n            for key, query in pairs(config or {}) do\n              if q == query and key:find("[%]%[][cC]") then\n                vim.cmd("normal! " .. key)\n                return\n              end\n            end\n          end\n          return fn(q, ...)\n        end\n      end\n    end\n  end,\n}\n')))))}p.isMDXComponent=!0}}]);