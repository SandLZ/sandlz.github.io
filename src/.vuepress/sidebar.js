const sideBar = {
  "/computer/os/linux/": [
    {
      title: "Linux",
      collapsable: true,
      children: ["/computer/os/linux/file", "/computer/os/linux/script"],
    },
  ],
  "/computer/algorithm/": [
    {
      title: "基础",
      collapsable: true,
      children: ["base/lru", "base/find", "base/sequence"],
    },
    {
      title: "进阶",
      collapsable: true,
      children: [
        "array/",
        "string/",
        "hash-table/",
        "linked-list/",
        "double-pointer/",
        "stack-queue/",
        "binary-tree/",
        "math/",
        "flash-back/",
        "greedy/",
        "dynamic-programming/",
      ],
    },
  ],
  "/base/html/": [
    {
      title: "HTML",
      collapsable: true,
      children: ["semantization", "canvas"],
    },
  ],
  "/base/css/": [
    {
      title: "基础",
      collapsable: true,
      children: [
        "base",
        "selector",
        "box",
        "bfc",
        "variable",
        "media",
        "center",
        "animation",
        "fake-class",
        "border",
      ],
    },
    {
      title: "布局",
      collapsable: true,
      children: ["flex", "layout", "responsive-layout", "qa"],
    },
    {
      title: "最佳实践",
      collapsable: true,
      children: ["practice/name", "practice/selector"],
    },
  ],
  "/base/javascript/": [
    {
      title: "JavaScript",
      collapsable: true,
      children: [
        "data-type",
        "number",
        "array",
        "map-set",
        "promise",
        "proxy",
        "reflect",
        "constructor",
        "prototype",
        "scope",
        "this",
        "closure",
        "strict",
        "regex",
      ],
    },
    {
      title: "手写系列",
      collapsable: true,
      children: ["practice/practice"],
    },
  ],
  "/base/browser/": [
    {
      title: "Browser",
      collapsable: true,
      children: [
        "storage",
        "cross-origin",
        "network",
        "https",
        "cache",
        "state-code",
        "load-flow",
        "event",
        "event-loop",
        "safe",
        "garbage-recycle",
        "performance",
        "other",
      ],
    },
  ],
  "/advance/design-patterns/": [
    {
      title: "设计模式",
      collapsable: true,
      children: [
        "design-principle",
        "uml",
        "",
        "creational-patterns",
        "structural-patterns",
        "behavioral-patterns",
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
      children: ["code-format", "code-js"],
    },
  ],
  "/engineering/build-tool/": [
    {
      title: "Webpack",
      collapsable: true,
      children: ["webpack/base", "webpack/advance"],
    },
    {
      title: "Rollup",
      collapsable: true,
      children: ["rollup"],
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
      children: ["scss"],
    },
  ],
  "/engineering/code-quality/": [
    {
      title: "代码质量",
      collapsable: true,
      children: ["unit-test", "e2e"],
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
        "vue/base",
        "vue/app",
        "vue/component",
        "vue/transition",
        "vue/multiplex-composition",
        "vue/watch",
        "vue/data-bind",
        "vue/ssr",
        "vue/qa",
      ],
    },
    {
      title: "Vuex",
      collapsable: true,
      children: ["vuex/vuex"],
    },
    {
      title: "Vue Router",
      collapsable: true,
      children: ["router/", "router/base", "router/advance"],
    },
    {
      title: "QA",
      collapsable: true,
      children: ["qa"],
    },
  ],
  "/framework/react/": [
    {
      title: "React",
      collapsable: true,
      children: ["", "react/base", "react/life-cycle", "react/hook"],
    },
    {
      title: "Redux",
      collapsable: true,
      children: [
        "redux/redux",
        "redux/redux-thunk",
        "redux/redux-persist",
        "redux/redux-logger",
      ],
    },
    {
      title: "React Router",
      collapsable: true,
      children: ["router/base"],
    },
    {
      title: "QA",
      collapsable: true,
      children: ["qa"],
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
      children: ["", "onion-model"],
    },
  ],
  "/tool/seo/": [
    {
      title: "SEO",
      collapsable: true,
      children: ["gtm"],
    },
  ],
  "/other/team/": [
    {
      title: "团队协作",
      collapsable: true,
      children: ["private-npm"],
    },
  ],
};

export default sideBar;
