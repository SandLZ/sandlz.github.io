(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{386:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),s("blockquote",[s("p",[t._v("CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。")])]),t._v(" "),s("h2",{attrs:{id:"速查表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#速查表"}},[t._v("#")]),t._v(" 速查表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#element_sel"}},[t._v("类型选择器(元素选择器)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("h1 { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("通过 node 节点名称匹配元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#common_sel"}},[t._v("通配选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("* { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配任意类型的 HTML 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#class_sel"}},[t._v("类选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(".box { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("通过类名名称匹配元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#id_sel"}},[t._v("ID 选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("#unique { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("据该元素的 ID 属性中的内容匹配元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#attr_sel"}},[t._v("属性选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a[title] { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("通过属性匹配元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#fake_class_sel"}},[t._v("伪类选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("p:first-child { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("要选择的元素的特殊状态")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#fake_ele_sel"}},[t._v("伪元素选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("p::first-line { }")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("被选择元素的特定部分修改样式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#future_sel"}},[t._v("后代选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("article p")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配第一个元素的后面元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#child_sel"}},[t._v("子代选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("article > p")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("匹配那些作为第一个元素的直接后代(子元素)的第二元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#adjacent_sibling_sel"}},[t._v("相邻兄弟选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("h1 + p")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"#general_sibling_sel"}},[t._v("通用兄弟选择器")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("h1 ~ p")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("位置无须紧邻，只须同层级")])])])]),t._v(" "),s("h2",{attrs:{id:"element_sel"}},[t._v(" 类型选择器 ")]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DodgerBlue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffffff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"common_sel"}},[t._v(" 通配选择器 ")]),t._v(" "),s("p",[t._v("在 CSS 中,一个星号("),s("code",[t._v("*")]),t._v(")就是一个通配选择器.它可以匹配任意类型的 HTML 元素.在配合其他简单选择器的时候,省略掉通配选择器会有同样的效果.比如,"),s("code",[t._v("*")]),t._v(".warning 和.warning 的效果完全相同.")]),t._v(" "),s("p",[t._v("在 CSS3 中,星号(*)可以和命名空间组合使用:")]),t._v(" "),s("p",[t._v("ns|"),s("code",[t._v("*")]),t._v(" - 会匹配 ns 命名空间下的所有元素\n"),s("code",[t._v("*")]),t._v("|"),s("code",[t._v("*")]),t._v(" - 会匹配所有命名空间下的所有元素\n|"),s("code",[t._v("*")]),t._v(" - 会匹配所有没有命名空间的元素")]),t._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('*[lang^="en"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*.warning")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*#maincontent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("不推荐使用通配选择器,因为它是性能最低的一个 CSS 选择器")])]),t._v(" "),s("h2",{attrs:{id:"class_sel"}},[t._v(" 类选择器 ")]),t._v(" "),s("p",[t._v("在一个 HTML 文档中，CSS 类选择器会根据元素的类属性中的内容匹配元素。类属性被定义为一个以空格分隔的列表项，在这组类名中，必须有一项与类选择器中的类名完全匹配，此条样式声明才会生效。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".类名 {样式声明 }\n")])])]),s("p",[t._v("与下面的语句等价")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[class~=类名] {样式声明 }\n")])])]),s("h3",{attrs:{id:"示例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span.classy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DodgerBlue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"id_sel"}},[t._v(" ID选择器 ")]),t._v(" "),s("p",[t._v("CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素,元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效")]),t._v(" "),s("h3",{attrs:{id:"语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#id属性值 {样式声明 }\n")])])]),s("p",[t._v("与下面的"),s("strong",[t._v("属性选择器")]),t._v("语句等价")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[id=id属性值] {样式声明 }\n")])])]),s("h3",{attrs:{id:"示例-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span#identified")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DodgerBlue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"attr_sel"}},[t._v(" 属性选择器 ")]),t._v(" "),s("h3",{attrs:{id:"语法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-3"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("[attr]")])])]),t._v(" "),s("p",[t._v("表示带有以 attr 命名的属性的元素。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将所有包含 `lang` 属性的 <div> 元素的字重设为 bold */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div[lang]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr=value]")])])]),t._v(" "),s("p",[t._v("表示带有以 attr 命名的属性，且属性值为 value 的元素。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('div[lang="pt"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr~=value]")])])]),t._v(" "),s("p",[t._v("表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 存在class属性并且属性值包含以空格分隔的"logo"的<a>元素 */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('a[class~="logo"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr|=value]")])])]),t._v(" "),s("p",[t._v('表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"-"为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN，zh-TW 可以用 zh 作为 value）。')]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将所有语言为中文的 <div> 元素的文本颜色设为红色\n   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('div[lang|="zh"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr^=value]")])])]),t._v(" "),s("p",[t._v("表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 以 "#" 开头的页面本地链接 */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('a[href^="#"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr$=value]")])])]),t._v(" "),s("p",[t._v("表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 以 ".org" 结尾的链接 */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('a[href$=".org"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("em",[s("em",[t._v("[attr")]),t._v("=value]")]),t._v("*")])]),t._v(" "),s("p",[t._v("表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 包含 "example" 的链接 */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('a[href*="example"]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" silver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr operator value i]")])])]),t._v(" "),s("p",[t._v("在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 包含 "insensitive" 的链接,不区分大小写 */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('a[href*="insensitive" i]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("[attr operator value s]")]),t._v(" （实验）")])]),t._v(" "),s("p",[t._v("在属性选择器的右方括号前添加一个用空格隔开的字母 s（或 S），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 包含 "cAsE" 的链接，区分大小写 */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('a[href*="cAsE" s]')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"fake_class_sel"}},[t._v(" 伪类选择器 ")]),t._v(" "),s("p",[t._v("CSS 伪类 是添加到选择器的关键字，指定要选择的元素的特殊状态。")]),t._v(" "),s("p",[t._v("伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 "),s("code",[t._v(":visited")]),t._v("），同样的，可以根据内容的状态（例如在一些表单元素上的 "),s("code",[t._v(":checked")]),t._v("），或者鼠标的位置（例如 "),s("code",[t._v(":hover")]),t._v(" 让你知道是否鼠标在一个元素上悬浮）来应用样式。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("与伪类相反，伪元素 可被用于为一个元素的 特定部分 应用样式。")])]),t._v(" "),s("h3",{attrs:{id:"语法-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-4"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("selector:pseudo-class {\n  property: value;\n}\n")])])]),s("div",[s("img",{attrs:{src:"https://gitee.com/sandlz/images/raw/master/uPic/UcDDE5.png"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#%E6%A0%87%E5%87%86%E4%BC%AA%E7%B1%BB%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准伪类索引"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"fake_ele_sel"}},[t._v(" 伪元素选择器 ")]),t._v(" "),s("p",[t._v("伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 "),s("code",[t._v("::first-line")]),t._v(" 伪元素可改变段落首行文字的样式。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 每一个 <p> 元素的第一行。 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p::first-line")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" uppercase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("与伪元素比较，pseudo-classes 能够根据状态改变元素样式。")])]),t._v(" "),s("h3",{attrs:{id:"语法-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-5"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("selector::pseudo-element {\n  property: value;\n}\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。")]),t._v(" "),s("p",[t._v("注意：按照规范，应该使用双冒号（"),s("code",[t._v("::")]),t._v("）而不是单个冒号（"),s("code",[t._v(":")]),t._v("），以便区分伪类和伪元素。但是，"),s("strong",[t._v("由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素")]),t._v("。")])]),t._v(" "),s("div",[s("img",{attrs:{src:"https://gitee.com/sandlz/images/raw/master/uPic/p6GB95.png"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#%E6%A0%87%E5%87%86%E4%BC%AA%E5%85%83%E7%B4%A0%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准伪元素索引"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"future_sel"}},[t._v(" 后代选择器 ")]),t._v(" "),s("p",[t._v("后代组合器（通常用单个空格 `` 字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。")]),t._v(" "),s("p",[t._v("利用后代组合器的选择器称为后代选择器。")]),t._v(" "),s("h3",{attrs:{id:"语法-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-6"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("selector1 selector2 {\n  /* property declarations */\n}\n")])])]),s("h2",{attrs:{id:"child_sel"}},[t._v(" 子代选择器 ")]),t._v(" "),s("p",[t._v("当使用 "),s("code",[t._v(">")]),t._v(" 选择符分隔两个元素时,它只会匹配那些作为第一个元素的"),s("strong",[t._v("直接后代")]),t._v('(子元素)的第二元素.\n与之相比, 当两个元素由 后代选择器 相连时, 它表示匹配存在的所有由第一个元素作为祖先元素(但不一定是父元素)的第二个元素, 无论它在 DOM 中"跳跃" 多少次.')]),t._v(" "),s("h3",{attrs:{id:"语法-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-7"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("元素1 > 元素2 {样式声明 }\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div > span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is a"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("first word."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is a second word!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",[s("img",{attrs:{src:"https://gitee.com/sandlz/images/raw/master/uPic/GuE5jk.png"}})]),t._v(" "),s("h2",{attrs:{id:"adjacent_sibling_sel"}},[t._v(" 相邻兄弟选择器 ")]),t._v(" "),s("p",[t._v("相邻兄弟选择器 ("),s("code",[t._v("+")]),t._v(") 介于两个选择器之间，当"),s("strong",[t._v("第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"语法-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-8"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("former_element + target_element { style properties }\n")])])]),s("h3",{attrs:{id:"示例-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-5"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 图片后面紧跟着的段落将被选中 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img + p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"general_sibling_sel"}},[t._v(" 通用兄弟选择器 ")]),t._v(" "),s("p",[t._v("兄弟选择符，"),s("strong",[t._v("位置无须紧邻，只须同层级")]),t._v("，A~B 选择 A 元素之后所有同层级 B 元素。")]),t._v(" "),s("h3",{attrs:{id:"语法-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-9"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("former_element ~ target_element { style properties }\n")])])]),s("h3",{attrs:{id:"示例-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-6"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p ~ span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is not red."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Here is a paragraph."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Here is some code."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("And here is a span."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",[s("img",{attrs:{src:"https://gitee.com/sandlz/images/raw/master/uPic/JsGvxj.png"}})]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/engineering/lan-enhancement/scss/scss.html"}},[t._v("查看 Scss")])],1),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN-CSS 选择器"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);