"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1478],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(7462),r=t(7294),o=t(6010),l=t(2466),s=t(6550),i=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[i,u]=g({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var f=t(2389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(h,(0,a.Z)({},e,n)))}function N(e){const n=(0,f.Z)();return r.createElement(T,(0,a.Z)({key:String(n)},e))}},6947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),o=t(4866),l=t(5162);const s={},i="Go",u={unversionedId:"extras/lang/go",id:"extras/lang/go",title:"Go",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/extras/lang/go.md",sourceDirName:"extras/lang",slug:"/extras/lang/go",permalink:"/extras/lang/go",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/lang/go.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elixir",permalink:"/extras/lang/elixir"},next:{title:"lang.java",permalink:"/extras/lang/java"}},c={},p=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"none-ls.nvim",id:"none-lsnvim",level:2},{value:"conform.nvim",id:"conformnvim",level:2},{value:"nvim-dap",id:"nvim-dap",level:2},{value:"nvim-dap-go",id:"nvim-dap-go",level:2},{value:"neotest",id:"neotest",level:2},{value:"neotest-go",id:"neotest-go",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go"},"Go"),(0,r.kt)("p",null,"To use this, add it to your ",(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.go" },\n    { import = "plugins" },\n  },\n})\n')),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  vim.list_extend(opts.ensure_installed, {\n    "go",\n    "gomod",\n    "gowork",\n    "gosum",\n  })\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    vim.list_extend(opts.ensure_installed, {\n      "go",\n      "gomod",\n      "gowork",\n      "gosum",\n    })\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  servers = {\n    gopls = {\n      keys = {\n        -- Workaround for the lack of a DAP strategy in neotest-go: https://github.com/nvim-neotest/neotest-go/issues/12\n        { "<leader>td", "<cmd>lua require(\'dap-go\').debug_test()<CR>", desc = "Debug Nearest (Go)" },\n      },\n      settings = {\n        gopls = {\n          gofumpt = true,\n          codelenses = {\n            gc_details = false,\n            generate = true,\n            regenerate_cgo = true,\n            run_govulncheck = true,\n            test = true,\n            tidy = true,\n            upgrade_dependency = true,\n            vendor = true,\n          },\n          hints = {\n            assignVariableTypes = true,\n            compositeLiteralFields = true,\n            compositeLiteralTypes = true,\n            constantValues = true,\n            functionTypeParameters = true,\n            parameterNames = true,\n            rangeVariableTypes = true,\n          },\n          analyses = {\n            fieldalignment = true,\n            nilness = true,\n            unusedparams = true,\n            unusedwrite = true,\n            useany = true,\n          },\n          usePlaceholders = true,\n          completeUnimported = true,\n          staticcheck = true,\n          directoryFilters = { "-.git", "-.vscode", "-.idea", "-.vscode-test", "-node_modules" },\n          semanticTokens = true,\n        },\n      },\n    },\n  },\n  setup = {\n    gopls = function(_, opts)\n      -- workaround for gopls not supporting semanticTokensProvider\n      -- https://github.com/golang/go/issues/54531#issuecomment-1464982242\n      require("lazyvim.util").on_attach(function(client, _)\n        if client.name == "gopls" then\n          if not client.server_capabilities.semanticTokensProvider then\n            local semantic = client.config.capabilities.textDocument.semanticTokens\n            client.server_capabilities.semanticTokensProvider = {\n              full = true,\n              legend = {\n                tokenTypes = semantic.tokenTypes,\n                tokenModifiers = semantic.tokenModifiers,\n              },\n              range = true,\n            }\n          end\n        end\n      end)\n      -- end workaround\n    end,\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    servers = {\n      gopls = {\n        keys = {\n          -- Workaround for the lack of a DAP strategy in neotest-go: https://github.com/nvim-neotest/neotest-go/issues/12\n          { "<leader>td", "<cmd>lua require(\'dap-go\').debug_test()<CR>", desc = "Debug Nearest (Go)" },\n        },\n        settings = {\n          gopls = {\n            gofumpt = true,\n            codelenses = {\n              gc_details = false,\n              generate = true,\n              regenerate_cgo = true,\n              run_govulncheck = true,\n              test = true,\n              tidy = true,\n              upgrade_dependency = true,\n              vendor = true,\n            },\n            hints = {\n              assignVariableTypes = true,\n              compositeLiteralFields = true,\n              compositeLiteralTypes = true,\n              constantValues = true,\n              functionTypeParameters = true,\n              parameterNames = true,\n              rangeVariableTypes = true,\n            },\n            analyses = {\n              fieldalignment = true,\n              nilness = true,\n              unusedparams = true,\n              unusedwrite = true,\n              useany = true,\n            },\n            usePlaceholders = true,\n            completeUnimported = true,\n            staticcheck = true,\n            directoryFilters = { "-.git", "-.vscode", "-.idea", "-.vscode-test", "-node_modules" },\n            semanticTokens = true,\n          },\n        },\n      },\n    },\n    setup = {\n      gopls = function(_, opts)\n        -- workaround for gopls not supporting semanticTokensProvider\n        -- https://github.com/golang/go/issues/54531#issuecomment-1464982242\n        require("lazyvim.util").on_attach(function(client, _)\n          if client.name == "gopls" then\n            if not client.server_capabilities.semanticTokensProvider then\n              local semantic = client.config.capabilities.textDocument.semanticTokens\n              client.server_capabilities.semanticTokensProvider = {\n                full = true,\n                legend = {\n                  tokenTypes = semantic.tokenTypes,\n                  tokenModifiers = semantic.tokenModifiers,\n                },\n                range = true,\n              }\n            end\n          end\n        end)\n        -- end workaround\n      end,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"none-lsnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvimtools/none-ls.nvim"},"none-ls.nvim")),(0,r.kt)("p",null," Ensure Go tools are installed"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.sources) == "table" then\n    local nls = require("null-ls")\n    vim.list_extend(opts.sources, {\n      nls.builtins.code_actions.gomodifytags,\n      nls.builtins.code_actions.impl,\n      nls.builtins.formatting.goimports,\n    })\n  end\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimtools/none-ls.nvim",\n  optional = true,\n  opts = function(_, opts)\n    if type(opts.sources) == "table" then\n      local nls = require("null-ls")\n      vim.list_extend(opts.sources, {\n        nls.builtins.code_actions.gomodifytags,\n        nls.builtins.code_actions.impl,\n        nls.builtins.formatting.goimports,\n      })\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"conformnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/conform.nvim"},"conform.nvim")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  formatters_by_ft = {\n    go = { "goimports" },\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/conform.nvim",\n  optional = true,\n  opts = {\n    formatters_by_ft = {\n      go = { "goimports" },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-dap"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        vim.list_extend(opts.ensure_installed, { "gomodifytags", "impl", "goimports", "delve" })\n      end,\n    },\n    {\n      "leoluz/nvim-dap-go",\n      config = true,\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-dap-go"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/leoluz/nvim-dap-go"},"nvim-dap-go")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "leoluz/nvim-dap-go",\n  config = true,\n}\n')))),(0,r.kt)("h2",{id:"neotest"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neotest/neotest"},"neotest")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  adapters = {\n    ["neotest-go"] = {\n      -- Here we can set options for neotest-go, e.g.\n      -- args = { "-tags=integration" }\n    },\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neotest/neotest",\n  optional = true,\n  dependencies = {\n    "nvim-neotest/neotest-go",\n  },\n  opts = {\n    adapters = {\n      ["neotest-go"] = {\n        -- Here we can set options for neotest-go, e.g.\n        -- args = { "-tags=integration" }\n      },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"neotest-go"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neotest/neotest-go"},"neotest-go")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neotest/neotest-go",\n}\n')))))}d.isMDXComponent=!0}}]);