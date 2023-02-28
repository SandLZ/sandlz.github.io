# 选择器

> CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

## 速查表

| 选择器                                  | 示例                | 说明                                                                                             |
| :-------------------------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| [类型选择器(元素选择器)](#element_sel)  | `h1 { }`            | 通过 node 节点名称匹配元素                                                                       |
| [通配选择器](#common_sel)               | `* { }`             | 匹配任意类型的 HTML 元素                                                                         |
| [类选择器](#class_sel)                  | `.box { }`          | 通过类名名称匹配元素                                                                             |
| [ID 选择器](#id_sel)                    | `#unique { }`       | 据该元素的 ID 属性中的内容匹配元素                                                               |
| [属性选择器](#attr_sel)                 | `a[title] { }`      | 通过属性匹配元素                                                                                 |
| [伪类选择器](#fake_class_sel)           | `p:first-child { }` | 要选择的元素的特殊状态                                                                           |
| [伪元素选择器](#fake_ele_sel)           | `p::first-line { }` | 被选择元素的特定部分修改样式                                                                     |
| [后代选择器](#future_sel)               | `article p`         | 匹配第一个元素的后面元素                                                                         |
| [子代选择器](#child_sel)                | `article > p`       | 匹配那些作为第一个元素的直接后代(子元素)的第二元素                                               |
| [相邻兄弟选择器](#adjacent_sibling_sel) | `h1 + p`            | 第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中。 |
| [通用兄弟选择器](#general_sibling_sel)  | `h1 ~ p`            | 位置无须紧邻，只须同层级                                                                         |

<h2 id="element_sel"> 类型选择器 </h2>

### 示例

```css
span {
  background-color: DodgerBlue;
  color: #ffffff;
}
```

<h2 id="common_sel"> 通配选择器 </h2>

在 CSS 中,一个星号(`*`)就是一个通配选择器.它可以匹配任意类型的 HTML 元素.在配合其他简单选择器的时候,省略掉通配选择器会有同样的效果.比如,`*`.warning 和.warning 的效果完全相同.

在 CSS3 中,星号(\*)可以和命名空间组合使用:

ns|`*` - 会匹配 ns 命名空间下的所有元素
`*`|`*` - 会匹配所有命名空间下的所有元素
|`*` - 会匹配所有没有命名空间的元素

### 示例

```css
*[lang^="en"] {
  color: green;
}
*.warning {
  color: red;
}
*#maincontent {
  border: 1px solid blue;
}
```

:::warning
不推荐使用通配选择器,因为它是性能最低的一个 CSS 选择器
:::

<h2 id="class_sel"> 类选择器 </h2>

在一个 HTML 文档中，CSS 类选择器会根据元素的类属性中的内容匹配元素。类属性被定义为一个以空格分隔的列表项，在这组类名中，必须有一项与类选择器中的类名完全匹配，此条样式声明才会生效。

### 语法

```
.类名 {样式声明 }
```

与下面的语句等价

```
[class~=类名] {样式声明 }
```

### 示例

```css
span.classy {
  background-color: DodgerBlue;
}
```

<h2 id="id_sel"> ID选择器 </h2>

CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素,元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效

### 语法

```
#id属性值 {样式声明 }
```

与下面的**属性选择器**语句等价

```
[id=id属性值] {样式声明 }
```

### 示例

```css
span#identified {
  background-color: DodgerBlue;
}
```

<h2 id="attr_sel"> 属性选择器 </h2>

### 语法

- **[attr]**

表示带有以 attr 命名的属性的元素。

```css
/* 将所有包含 `lang` 属性的 <div> 元素的字重设为 bold */
div[lang] {
  font-weight: bold;
}
```

- **[attr=value]**

表示带有以 attr 命名的属性，且属性值为 value 的元素。

```css
/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */
div[lang="pt"] {
  color: green;
}
```

- **[attr~=value]**

表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。

```css
/* 存在class属性并且属性值包含以空格分隔的"logo"的<a>元素 */
a[class~="logo"] {
  padding: 2px;
}
```

- **[attr|=value]**

表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"-"为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN，zh-TW 可以用 zh 作为 value）。

```css
/* 将所有语言为中文的 <div> 元素的文本颜色设为红色
   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */
div[lang|="zh"] {
  color: red;
}
```

- **[attr^=value]**

表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。

```css
/* 以 "#" 开头的页面本地链接 */
a[href^="#"] {
  background-color: gold;
}
```

- **[attr$=value]**

表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。

```css
/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}
```

- **[attr*=value]**

表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。

```css
/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}
```

- **[attr operator value i]**

在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。

```css
/* 包含 "insensitive" 的链接,不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}
```

- **[attr operator value s]** （实验）

在属性选择器的右方括号前添加一个用空格隔开的字母 s（或 S），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。

```css
/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}
```

<h2 id="fake_class_sel"> 伪类选择器 </h2>

CSS 伪类 是添加到选择器的关键字，指定要选择的元素的特殊状态。

伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 `:visited`），同样的，可以根据内容的状态（例如在一些表单元素上的 `:checked`），或者鼠标的位置（例如 `:hover` 让你知道是否鼠标在一个元素上悬浮）来应用样式。

:::tip
与伪类相反，伪元素 可被用于为一个元素的 特定部分 应用样式。
:::

### 语法

```
selector:pseudo-class {
  property: value;
}
```

<div>
    <img src="https://gitee.com/sandlz/images/raw/master/uPic/UcDDE5.png">
</div>

[标准伪类索引](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#%E6%A0%87%E5%87%86%E4%BC%AA%E7%B1%BB%E7%B4%A2%E5%BC%95)

<h2 id="fake_ele_sel"> 伪元素选择器 </h2>

伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 `::first-line` 伪元素可改变段落首行文字的样式。

```css
/* 每一个 <p> 元素的第一行。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

:::tip
与伪元素比较，pseudo-classes 能够根据状态改变元素样式。
:::

### 语法

```
selector::pseudo-element {
  property: value;
}
```

:::tip
一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。

注意：按照规范，应该使用双冒号（`::`）而不是单个冒号（`:`），以便区分伪类和伪元素。但是，**由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素**。
:::

<div>
    <img src="https://gitee.com/sandlz/images/raw/master/uPic/p6GB95.png">
</div>

[标准伪元素索引](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#%E6%A0%87%E5%87%86%E4%BC%AA%E5%85%83%E7%B4%A0%E7%B4%A2%E5%BC%95)

<h2 id="future_sel"> 后代选择器 </h2>

后代组合器（通常用单个空格 `` 字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。

利用后代组合器的选择器称为后代选择器。

### 语法

```
selector1 selector2 {
  /* property declarations */
}
```

<h2 id="child_sel"> 子代选择器 </h2>

当使用 `>` 选择符分隔两个元素时,它只会匹配那些作为第一个元素的**直接后代**(子元素)的第二元素.
与之相比, 当两个元素由 后代选择器 相连时, 它表示匹配存在的所有由第一个元素作为祖先元素(但不一定是父元素)的第二个元素, 无论它在 DOM 中"跳跃" 多少次.

### 语法

```
元素1 > 元素2 {样式声明 }
```

```css
span {
  color: blue;
}

div > span {
  color: red;
}
```

```html
<div>
  <span>This is a</span>
  <p>
    <span>first word.</span>
  </p>
  <span>This is a second word!</span>
</div>
```

<div>
    <img src="https://gitee.com/sandlz/images/raw/master/uPic/GuE5jk.png">
</div>

<h2 id="adjacent_sibling_sel"> 相邻兄弟选择器 </h2>

相邻兄弟选择器 (`+`) 介于两个选择器之间，当**第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中**。

### 语法

```
former_element + target_element { style properties }
```

### 示例

```css
/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-style: bold;
}
```

<h2 id="general_sibling_sel"> 通用兄弟选择器 </h2>

兄弟选择符，**位置无须紧邻，只须同层级**，A~B 选择 A 元素之后所有同层级 B 元素。

### 语法

```
former_element ~ target_element { style properties }
```

### 示例

```css
p ~ span {
  color: red;
}
```

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a span.</span>
```

<div>
    <img src="https://gitee.com/sandlz/images/raw/master/uPic/JsGvxj.png">
</div>

[查看 Scss](../../engineering/lan-enhancement/scss/scss.html)

## 参考

[MDN-CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)
