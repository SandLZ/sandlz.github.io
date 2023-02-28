(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{559:function(s,e,r){"use strict";r.r(e);var t=r(26),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssr"}},[s._v("#")]),s._v(" SSR")]),s._v(" "),r("h2",{attrs:{id:"什么是服务器端渲染-ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务器端渲染-ssr"}},[s._v("#")]),s._v(" 什么是服务器端渲染 (SSR)？")]),s._v(" "),r("p",[s._v('Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。')]),s._v(" "),r("p",[s._v('服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。')]),s._v(" "),r("h2",{attrs:{id:"为什么使用服务器端渲染-ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用服务器端渲染-ssr"}},[s._v("#")]),s._v(" 为什么使用服务器端渲染 (SSR)？")]),s._v(" "),r("p",[s._v("与传统 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势主要在于：")]),s._v(" "),r("ul",[r("li",[s._v("更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。")]),s._v(" "),r("li",[s._v("更快的内容到达时间 (time-to-content)")])]),s._v(" "),r("p",[s._v("使用服务器端渲染 (SSR) 时还需要有一些权衡之处：")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("开发条件所限。浏览器特定的代码，只能在某些生命周期钩子函数 (lifecycle hook) 中使用；一些外部扩展库 (external library) 可能需要特殊处理，才能在服务器渲染应用程序中运行。")])]),s._v(" "),r("li",[r("p",[s._v("涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。")])]),s._v(" "),r("li",[r("p",[s._v("更多的服务器端负载。在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 (high traffic) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。")])])]),s._v(" "),r("h2",{attrs:{id:"服务器端渲染-vs-预渲染-ssr-vs-prerendering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器端渲染-vs-预渲染-ssr-vs-prerendering"}},[s._v("#")]),s._v(" 服务器端渲染 vs 预渲染 (SSR vs Prerendering)")]),s._v(" "),r("p",[s._v("如果你调研服务器端渲染 (SSR) 只是用来改善少数营销页面（例如 /, /about, /contact 等）的 SEO，那么你可能需要预渲染。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点。")])])}),[],!1,null,null,null);e.default=a.exports}}]);