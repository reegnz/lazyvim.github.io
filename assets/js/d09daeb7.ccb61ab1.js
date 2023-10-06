"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[8051],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7462),a=t(7294),o=t(6010),i=t(2466),l=t(6550),s=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[s,u]=f({queryString:t,groupId:r}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var y=t(2389);const h="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==l&&(d(n),s(r))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function T(e){const n=(0,y.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},6956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),i=t(5162);const l={},s="ui.dashboard",u={unversionedId:"extras/ui/dashboard",id:"extras/ui/dashboard",title:"ui.dashboard",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/extras/ui/dashboard.md",sourceDirName:"extras/ui",slug:"/extras/ui/dashboard",permalink:"/extras/ui/dashboard",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/ui/dashboard.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neotest",permalink:"/extras/test/core"},next:{title:"edgy.nvim",permalink:"/extras/ui/edgy"}},c={},d=[{value:"dashboard-nvim",id:"dashboard-nvim",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uidashboard"},(0,a.kt)("inlineCode",{parentName:"h1"},"ui.dashboard")),(0,a.kt)("p",null,"To use this, add it to your ",(0,a.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ui.dashboard" },\n    { import = "plugins" },\n  },\n})\n')),(0,a.kt)("h2",{id:"dashboard-nvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/glepnir/dashboard-nvim"},"dashboard-nvim")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local logo = [[\n       \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n       \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n  ]]\n\n  logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n  local opts = {\n    theme = "doom",\n    config = {\n      header = vim.split(logo, "\\n"),\n      center = {\n        { action = "Telescope find_files", desc = " Find file", icon = "\uf002 ", key = "f" },\n        { action = "ene | startinsert", desc = " New file", icon = "\uf15b ", key = "n" },\n        { action = "Telescope oldfiles", desc = " Recent files", icon = "\uf0c5 ", key = "r" },\n        { action = "Telescope live_grep", desc = " Find text", icon = "\uf022 ", key = "g" },\n        { action = "e $MYVIMRC", desc = " Config", icon = "\uf423 ", key = "c" },\n        { action = \'lua require("persistence").load()\', desc = " Restore Session", icon = "\ue348 ", key = "s" },\n        { action = "Lazy", desc = " Lazy", icon = "\udb81\udcb2 ", key = "l" },\n        { action = "qa", desc = " Quit", icon = "\uf426 ", key = "q" },\n      },\n      footer = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        return { "\u26a1 Neovim loaded " .. stats.count .. " plugins in " .. ms .. "ms" }\n      end,\n    },\n  }\n\n  for _, button in ipairs(opts.config.center) do\n    button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n  end\n\n  -- close Lazy and re-open when the dashboard is ready\n  if vim.o.filetype == "lazy" then\n    vim.cmd.close()\n    vim.api.nvim_create_autocmd("User", {\n      pattern = "DashboardLoaded",\n      callback = function()\n        require("lazy").show()\n      end,\n    })\n  end\n  return opts\nend\n'))),(0,a.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "glepnir/dashboard-nvim",\n  event = "VimEnter",\n  opts = function()\n    local logo = [[\n         \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n         \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n    ]]\n\n    logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n    local opts = {\n      theme = "doom",\n      config = {\n        header = vim.split(logo, "\\n"),\n        center = {\n          { action = "Telescope find_files", desc = " Find file", icon = "\uf002 ", key = "f" },\n          { action = "ene | startinsert", desc = " New file", icon = "\uf15b ", key = "n" },\n          { action = "Telescope oldfiles", desc = " Recent files", icon = "\uf0c5 ", key = "r" },\n          { action = "Telescope live_grep", desc = " Find text", icon = "\uf022 ", key = "g" },\n          { action = "e $MYVIMRC", desc = " Config", icon = "\uf423 ", key = "c" },\n          { action = \'lua require("persistence").load()\', desc = " Restore Session", icon = "\ue348 ", key = "s" },\n          { action = "Lazy", desc = " Lazy", icon = "\udb81\udcb2 ", key = "l" },\n          { action = "qa", desc = " Quit", icon = "\uf426 ", key = "q" },\n        },\n        footer = function()\n          local stats = require("lazy").stats()\n          local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n          return { "\u26a1 Neovim loaded " .. stats.count .. " plugins in " .. ms .. "ms" }\n        end,\n      },\n    }\n\n    for _, button in ipairs(opts.config.center) do\n      button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n    end\n\n    -- close Lazy and re-open when the dashboard is ready\n    if vim.o.filetype == "lazy" then\n      vim.cmd.close()\n      vim.api.nvim_create_autocmd("User", {\n        pattern = "DashboardLoaded",\n        callback = function()\n          require("lazy").show()\n        end,\n      })\n    end\n    return opts\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);