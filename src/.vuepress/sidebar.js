const sideBar = {
  "/computer/os/linux/": [
    {
      title: "Linux",
      collapsable: true,
      children: [
        "/computer/os/linux/system",
        "/computer/os/linux/permission",
        "/computer/os/linux/script",
      ],
    },
  ],
  "/computer/algorithm/": [
    {
      title: "基础",
      collapsable: true,
      children: [
        "/computer/algorithm/base/lru",
        "/computer/algorithm/base/find",
        "/computer/algorithm/base/sequence",
      ],
    },
    {
      title: "进阶",
      collapsable: true,
      children: [
        "/computer/algorithm/array/",
        "/computer/algorithm/string/",
        "/computer/algorithm/hash-table/",
        "/computer/algorithm/linked-list/",
        "/computer/algorithm/double-pointer/",
        "/computer/algorithm/stack-queue/",
        "/computer/algorithm/binary-tree/",
        "/computer/algorithm/math/",
        "/computer/algorithm/flash-back/",
        "/computer/algorithm/greedy/",
        "/computer/algorithm/dynamic-programming/",
      ],
    },
  ],
  "/base/html/": [
    {
      title: "HTML",
      collapsable: true,
      children: ["/base/html/semantization", "/base/html/canvas"],
    },
  ],
  "/base/css/": [
    {
      title: "基础",
      collapsable: true,
      children: [
        "/base/css/base",
        "/base/css/selector",
        "/base/css/box",
        "/base/css/bfc",
        "/base/css/variable",
        "/base/css/media",
        "/base/css/center",
        "/base/css/animation",
        "/base/css/fake-class",
        "/base/css/border",
      ],
    },
    {
      title: "布局",
      collapsable: true,
      children: [
        "/base/css/flex",
        "/base/css/layout",
        "/base/css/responsive-layout",
        "/base/css/qa",
      ],
    },
    {
      title: "最佳实践",
      collapsable: true,
      children: ["/base/css/practice/name", "/base/css/practice/selector"],
    },
  ],
  "/base/javascript/": [
    {
      title: "JavaScript",
      collapsable: true,
      children: [
        "/base/javascript/data-type",
        "/base/javascript/number",
        "/base/javascript/array",
        "/base/javascript/map-set",
        "/base/javascript/promise",
        "/base/javascript/proxy",
        "/base/javascript/reflect",
        "/base/javascript/constructor",
        "/base/javascript/prototype",
        "/base/javascript/scope",
        "/base/javascript/this",
        "/base/javascript/closure",
        "/base/javascript/strict",
        "/base/javascript/regex",
      ],
    },
    {
      title: "手写系列",
      collapsable: true,
      children: ["/base/javascript/practice/practice"],
    },
  ],
  "/base/browser/": [
    {
      title: "Browser",
      collapsable: true,
      children: [
        "/base/browser/storage",
        "/base/browser/cross-origin",
        "/base/browser/network",
        "/base/browser/https",
        "/base/browser/cache",
        "/base/browser/state-code",
        "/base/browser/load-flow",
        "/base/browser/event",
        "/base/browser/event-loop",
        "/base/browser/safe",
        "/base/browser/garbage-recycle",
        "/base/browser/performance",
        "/base/browser/other",
      ],
    },
  ],
  "/advance/design-patterns/": [
    {
      title: "设计模式",
      collapsable: true,
      children: [
        "/advance/design-patterns/design-principle",
        "/advance/design-patterns/uml",
        "/advance/design-patterns/creational-patterns",
        "/advance/design-patterns/structural-patterns",
        "/advance/design-patterns/behavioral-patterns",
      ],
    },
  ],
  "/advance/architecture-mode": [
    {
      title: "架构模式",
      collapsable: true,
      children: [""],
    },
  ],
  "/advance/programe-paradigms": [
    {
      title: "架构模式",
      collapsable: true,
      children: [""],
    },
  ],
  "/advance/programe-design": [
    {
      title: "程序设计",
      collapsable: true,
      children: [""],
    },
  ],
  "/engineering/code-standard/": [
    {
      title: "代码规范",
      collapsable: true,
      children: [
        "/engineering/code-standard/code-format",
        "/engineering/code-standard/code-js",
      ],
    },
  ],
  "/engineering/build-tool/": [
    {
      title: "Webpack",
      collapsable: true,
      children: [
        "/engineering/build-tool/webpack/base",
        "/engineering/build-tool/webpack/advance",
      ],
    },
    {
      title: "Rollup",
      collapsable: true,
      children: ["/engineering/build-tool/rollup"],
    },
  ],
  "/engineering/version-manage/": [
    {
      title: "版本管理",
      collapsable: true,
      children: [""],
    },
  ],
  "/engineering/lan-enhancement/scss/": [
    {
      title: "Scss",
      collapsable: true,
      children: ["/engineering/lan-enhancement/scss/scss"],
    },
  ],
  "/engineering/code-quality/": [
    {
      title: "代码质量",
      collapsable: true,
      children: [
        "/engineering/code-quality/unit-test",
        "/engineering/code-quality/e2e",
      ],
    },
  ],
  "/engineering/ci-cd/": [
    {
      title: "CI/CD",
      collapsable: true,
      children: [""],
    },
  ],
  "/framework/vue/": [
    {
      title: "Vue",
      collapsable: true,
      children: [
        "",
        "/framework/vue/vue/base",
        "/framework/vue/vue/app",
        "/framework/vue/vue/component",
        "/framework/vue/vue/transition",
        "/framework/vue/vue/multiplex-composition",
        "/framework/vue/vue/watch",
        "/framework/vue/vue/data-bind",
        "/framework/vue/vue/ssr",
        "/framework/vue/vue/qa",
      ],
    },
    {
      title: "Vuex",
      collapsable: true,
      children: ["/framework/vue/vuex/vuex"],
    },
    {
      title: "Vue Router",
      collapsable: true,
      children: [
        "/framework/vue/router/",
        "/framework/vue/router/base",
        "/framework/vue/router/advance",
      ],
    },
    {
      title: "QA",
      collapsable: true,
      children: ["/framework/vue/qa"],
    },
  ],
  "/framework/react/": [
    {
      title: "React",
      collapsable: true,
      children: [
        "/framework/react/base",
        "/framework/react/life-cycle",
        "/framework/react/hook",
      ],
    },
    {
      title: "Redux",
      collapsable: true,
      children: [
        "/framework/react/redux",
        "/framework/react/redux-thunk",
        "/framework/react/redux-persist",
        "/framework/react/redux-logger",
      ],
    },
    {
      title: "React Router",
      collapsable: true,
      children: ["/framework/react/router/base"],
    },
    {
      title: "QA",
      collapsable: true,
      children: ["/framework/react/qa"],
    },
  ],
  "/client/jsbridge/": [
    {
      title: "JSBridge",
      collapsable: true,
      children: [""],
    },
  ],
  "/client/electron/": [
    {
      title: "Electron",
      collapsable: true,
      children: [""],
    },
  ],
  "/backend/nodejs/": [
    {
      title: "Node.js",
      collapsable: true,
      children: ["", "/backend/nodejs/onion-model"],
    },
  ],
  "/tool/seo/": [
    {
      title: "SEO",
      collapsable: true,
      children: ["/tool/seo/gtm"],
    },
  ],
  "/other/team/": [
    {
      title: "团队协作",
      collapsable: true,
      children: ["/other/team/private-npm"],
    },
  ],
};

export default sideBar;
