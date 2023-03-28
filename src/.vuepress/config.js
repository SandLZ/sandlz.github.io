import { defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import navbar from "./navbar";
import sideBar from "./sidebar";
const { description } = require("../../package");

export default {
  title: "sandlz",
  description: description,
  base: "/",
  head: [
    ["link", { rel: "icon", href: "favicon.png" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: defaultTheme({
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    contributorsText: "贡献者",
    lastUpdatedText: "上次更新",
    navbar: navbar,
    sidebar: sideBar,
  }),
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin({
      selector: ".theme-default-content :not(a) > img",
      options: {
        margin: 16,
      },
    }),
    googleAnalyticsPlugin({
      id: "G-HPPKCGZCZ5",
    }),
  ],
};
