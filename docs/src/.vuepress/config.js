const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "SandLZ",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/blog/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "favicon.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "计算机",
        ariaLabel: "计算机",
        items: [
          {
            text: "基础",
            items: [
              { text: "编译原理", link: "/computer/compile/" },
              { text: "通信协议", link: "/computer/communication-protocol/" },
            ],
          },
          {
            text: "进阶",
            items: [
              { text: "数据结构", link: "/computer/data-structure/" },
              { text: "算法", link: "/computer/algorithm/" },
            ],
          },
        ],
      },
      {
        text: "基础",
        ariaLabel: "基础",
        items: [
          {
            text: "三剑客",
            items: [
              { text: "HTML", link: "/base/html/semantization" },
              { text: "CSS", link: "/base/css/base" },
              { text: "JavaScript", link: "/base/javascript/data-type" },
            ],
          },
          {
            text: "浏览器",
            items: [{ text: "Browser", link: "/base/browser/" }],
          },
        ],
      },
      {
        text: "进阶",
        ariaLabel: "进阶",
        items: [
          {
            text: "设计模式",
            link: "/advance/design-patterns/",
          },
          {
            text: "架构模式",
            link: "/advance/architecture-mode/",
          },
          {
            text: "编程范型",
            link: "/advance/programe-paradigms/",
          },
          {
            text: "程序设计",
            link: "/advance/programe-design/",
          },
        ],
      },
      {
        text: "工程化",
        ariaLabel: "进阶",
        items: [
          { text: "CI/CD", link: "/engineering/ci-cd/" },
          {
            text: "代码规范",
            link: "/engineering/code-standard/code-format",
          },
          { text: "代码质量", link: "/engineering/code-quality/unit-test" },
          {
            text: "版本管理",
            link: "/engineering/version-manage/",
            items: [{ text: "Git", link: "/engineering/version-manage/git" }],
          },
          {
            text: "转换工具",
            items: [{ text: "Babel", link: "/engineering/trans-tool/babel" }],
          },
          {
            text: "构建工具",
            items: [
              { text: "Webpack", link: "/engineering/build-tool/webpack" },
              { text: "Rollup", link: "/engineering/build-tool/rollup" },
            ],
          },
          {
            text: "语言增强",
            items: [
              { text: "Scss", link: "/engineering/lan-enhancement/scss/scss" },
              {
                text: "TypeScript",
                link: "/engineering/lan-enhancement/typescript",
              },
            ],
          },
        ],
      },
      {
        text: "框架",
        ariaLabel: "框架",
        items: [
          {
            text: "FE",
            items: [
              { text: "Vue", link: "/framework/vue/" },
              { text: "React", link: "/framework/react/" },
              { text: "Angular", link: "/framework/angular/" },
            ],
          },
          {
            text: "BE",
            items: [
              { text: "Node.js", link: "/backend/nodejs/" },
              { text: "Express", link: "/backend/express/" },
              { text: "Koa", link: "/backend/koa/" },
            ],
          },
        ],
      },
      {
        text: "客户端",
        ariaLabel: "客户端",
        items: [
          { text: "JSBridge", link: "/client/jsbridge/" },
          { text: "Electron", link: "/client/electron/" },
          { text: "React Native", link: "/client/react-native/" },
          { text: "Flutter", link: "/client/flutter/" },
          { text: "Cordova", link: "/client/cordova/" },
        ],
      },
      {
        text: "前端发展",
        ariaLabel: "前端发展",
        items: [
          { text: "SSR", link: "/frontend-development/ssr/" },
          { text: "微前端", link: "/frontend-development/micro-frontend/" },
        ],
      },
      {
        text: "其他",
        ariaLabel: "其他",
        items: [
          { text: "团队协作", link: "/other/team/private-npm" },
          { text: "项目管理", link: "/other/project-manage/" },
          { text: "架构设计", link: "/other/design/" },
        ],
      },
      {
        text: "Github",
        target: "_blank",
        link: "https://github.com/SandLZ",
      },
    ],
    sidebar: {
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
      "/other/team/": [
        {
          title: "团队协作",
          collapsable: true,
          children: ["private-npm"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ["@vuepress/plugin-back-to-top"],
    [
      "@vuepress/plugin-medium-zoom",
      {
        selector: ".theme-default-content :not(a) > img",
        options: {
          margin: 16,
        },
      },
    ],
  ],
};
