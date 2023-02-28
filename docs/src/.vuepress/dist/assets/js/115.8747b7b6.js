(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{529:function(t,s,e){"use strict";e.r(s);var a=e(26),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"代码格式化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码格式化"}},[t._v("#")]),t._v(" 代码格式化")]),t._v(" "),e("blockquote",[e("p",[t._v("统一团队代码风格。")])]),t._v(" "),e("p",[t._v("本文将使用"),e("code",[t._v("create-react-app")]),t._v(" 创建的React项目，说明相关概念及演示如何集成一些列格式化工具，覆盖开发部分开发过程。")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#概念"}},[t._v("概念")])]),e("li",[e("a",{attrs:{href:"#eslint"}},[t._v("ESLint")]),e("ul",[e("li",[e("a",{attrs:{href:"#安装"}},[t._v("安装")])]),e("li",[e("a",{attrs:{href:"#配置文件"}},[t._v("配置文件")])]),e("li",[e("a",{attrs:{href:"#示例"}},[t._v("示例")])])])]),e("li",[e("a",{attrs:{href:"#prettier"}},[t._v("Prettier")]),e("ul",[e("li",[e("a",{attrs:{href:"#推荐配置"}},[t._v("推荐配置")])])])]),e("li",[e("a",{attrs:{href:"#stylelint"}},[t._v("StyleLint")])]),e("li",[e("a",{attrs:{href:"#husky"}},[t._v("Husky")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("extends")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Plugins")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("命名")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("eslint-config-${name}")]),e("br"),e("code",[t._v("@scope/eslint-config${name}")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("eslint-plugin-${name}")]),t._v(" "),e("br"),e("code",[t._v("@scope/eslint-plugin-${name}")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("用途")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("扩展: 集成一个个配置方案的最佳实践，即别人配置好的.eslintrc.js")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("插件: 添加插件中的规则"),e("br"),t._v(" 必有：一堆自定义的规则的集合 "),e("br"),t._v("可能有：总结的最佳实践")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("配置")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("全称："),e("code",[t._v("eslint-config-prettier")]),t._v(" "),e("br"),t._v("缩写："),e("code",[t._v("prettier")]),t._v(" "),e("br"),t._v("插件中的config： "),e("code",[t._v("plugin:plugin-name/${configName}")]),t._v(" "),e("br"),t._v("如:"),e("code",[t._v("plugin:prettier/recommended")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("全称："),e("code",[t._v("eslint-plugin-prettier")]),t._v(" "),e("br"),t._v("缩写："),e("code",[t._v("prettier")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("用法")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("extends")]),t._v("中配置"),e("br"),t._v("后面的配置优先级更高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("- "),e("code",[t._v("extends")]),t._v('："plugin:prettier/recommended"'),e("br"),t._v("- "),e("code",[t._v("plugins")]),t._v(':"prettier", 具体使用哪些规则需在'),e("code",[t._v("rules")]),t._v("中配置")])])])]),t._v(" "),e("p",[t._v("下图展示 "),e("code",[t._v("eslint-plugin-react")]),t._v(" 支持的规则集合\n")]),e("div",[e("img",{attrs:{src:"https://gitee.com/sandlz/images/raw/master/uPic/k9gKeV.png",alt:"eslint-plugin-react 示例"}})]),e("p"),t._v(" "),e("h2",{attrs:{id:"eslint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESLint")]),t._v(" "),e("p",[e("strong",[t._v("Eslint")]),t._v(" 是一个可以检验代码，并给出报告的工具。它的目标是保证代码的一致性，避免错误。Eslint 为我们提供了 "),e("strong",[t._v("ECMAScript/JavaScript")]),t._v(" 规范的代码校验，我们可以根据个人/团队的代码风格进行配置，也可以使用开源的配置方案.")]),t._v(" "),e("blockquote",[e("p",[t._v("本文会采用 "),e("code",[t._v("eslint-config-airbnb")]),t._v(" 来配置。")])]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create-react-app 方式已安装ESLint")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D eslint\n")])])]),e("h3",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[t._v("可选的配置文件方式（已按优先级排序）")]),t._v(" "),e("ol",[e("li",[e("code",[t._v(".eslintrc.js")]),t._v("(优先使用此方式)")]),t._v(" "),e("li",[e("code",[t._v(".eslintrc.cjs")])]),t._v(" "),e("li",[e("code",[t._v(".eslintrc.yaml")])]),t._v(" "),e("li",[e("code",[t._v(".eslintrc.yml")])]),t._v(" "),e("li",[e("code",[t._v(".eslintrc.json")])]),t._v(" "),e("li",[e("code",[t._v("package.json")])])]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react-app配置")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'airbnb'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:react/jsx-runtime'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (Prevent missing React when using JSX (react/react-in-jsx-scope))")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:prettier/recommended'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prettier推荐配置")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"prettier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" Prettier")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prettier 与 eslint整合")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D eslint-plugin-prettier\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prettier(-E 指定版本)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D -E prettier\n")])])]),e("h3",{attrs:{id:"推荐配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐配置"}},[t._v("#")]),t._v(" 推荐配置")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("上述配置实际会生成如下配置：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/prettier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arrow-body-style"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prefer-arrow-callback"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("strong",[e("code",[t._v('"extends"：["prettier"]')])]),t._v(" 启用 "),e("code",[t._v("eslint config prettier")]),t._v(" 中的配置，这将关闭与prettier冲突的一些eslint规则")]),t._v(" "),e("li",[e("strong",[e("code",[t._v('"plugins"：["prettier"]')])]),t._v(" 注册此插件")]),t._v(" "),e("li",[e("strong",[e("code",[t._v('"prettier/prettier"："error"')])]),t._v(" 打开此插件提供的规则，该插件从ESLint中运行prettier")]),t._v(" "),e("li",[e("strong",[e("code",[t._v('"arrow-body-style": "off"')]),t._v(" & "),e("code",[t._v('"prefer-arrow-callback": "off"')])]),t._v("：关闭两条ESLint核心规则。")])]),t._v(" "),e("h2",{attrs:{id:"stylelint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylelint"}},[t._v("#")]),t._v(" StyleLint")]),t._v(" "),e("h2",{attrs:{id:"husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[t._v("#")]),t._v(" Husky")])])}),[],!1,null,null,null);s.default=r.exports}}]);