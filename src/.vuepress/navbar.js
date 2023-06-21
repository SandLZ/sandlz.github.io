const navbar = [
  {
    text: "计算机",
    children: [
      {
        text: "操作系统",
        children: [{ text: "Linux", link: "/computer/os/linux/" }],
      },
      {
        text: "基础",
        children: [
          { text: "编译原理", link: "/computer/compile/" },
          { text: "通信协议", link: "/computer/communication-protocol/" },
        ],
      },
      {
        text: "进阶",
        children: [
          { text: "数据结构", link: "/computer/data-structure/" },
          { text: "算法", link: "/computer/algorithm/" },
        ],
      },
    ],
  },
  {
    text: "基础",
    children: [
      {
        text: "三剑客",
        children: [
          { text: "HTML", link: "/base/html/semantization" },
          { text: "CSS", link: "/base/css/base" },
          { text: "JavaScript", link: "/base/javascript/data-type" },
        ],
      },
      {
        text: "浏览器",
        children: [{ text: "Browser", link: "/base/browser/" }],
      },
    ],
  },
  {
    text: "进阶",
    children: [
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
    children: [
      { text: "CI/CD", link: "/engineering/ci-cd/" },
      {
        text: "代码规范",
        link: "/engineering/code-standard/code-format",
      },
      { text: "代码质量", link: "/engineering/code-quality/unit-test" },
      {
        text: "版本管理",
        link: "/engineering/version-manage/",
        children: [{ text: "Git", link: "/engineering/version-manage/git" }],
      },
      {
        text: "转换工具",
        children: [{ text: "Babel", link: "/engineering/trans-tool/babel" }],
      },
      {
        text: "构建工具",
        children: [
          { text: "Webpack", link: "/engineering/build-tool/webpack" },
          { text: "Rollup", link: "/engineering/build-tool/rollup" },
        ],
      },
      {
        text: "语言增强",
        children: [
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
    children: [
      {
        text: "FE",
        children: [
          { text: "Vue", link: "/framework/vue/" },
          { text: "React", link: "/framework/react/react/base" },
          { text: "Angular", link: "/framework/angular/" },
        ],
      },
      {
        text: "BE",
        children: [{ text: "Node.js", link: "/backend/nodejs/" }],
      },
    ],
  },
  {
    text: "客户端",
    children: [
      { text: "JSBridge", link: "/client/jsbridge/" },
      { text: "Electron", link: "/client/electron/" },
      { text: "React Native", link: "/client/react-native/" },
      { text: "Flutter", link: "/client/flutter/" },
      { text: "Cordova", link: "/client/cordova/" },
    ],
  },
  {
    text: "工具",
    children: [
      { text: "RxJS", link: "/tool/rxjs" },
    ],
  },
  {
    text: "前端发展",
    children: [
      { text: "SSR", link: "/frontend-development/ssr/" },
      { text: "微前端", link: "/frontend-development/micro-frontend/" },
    ],
  },
  {
    text: "其他",
    children: [
      { text: "团队协作", link: "/other/team/private-npm" },
      { text: "项目管理", link: "/other/project-manage/" },
      { text: "架构设计", link: "/other/design/" },
      { text: "SEO", children: [{ text: "GTM", link: "/tool/seo/gtm" }] },
    ],
  },
  {
    text: "Github",
    target: "_blank",
    link: "https://github.com/SandLZ",
  },
];

export default navbar;
