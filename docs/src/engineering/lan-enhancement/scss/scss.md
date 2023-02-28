# Scss

> 世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！

[[toc]]

## Sass 与 Scss 区别

- **后缀名**

sass（Syntactically Awesome StyleSheets）版本**3.0**之前的后缀名为`.sass`，

而版本**3.0**之后的后缀名`.scss`

- **语法**

sass 没有{}和; 有严格的缩进规范 ;

scss 和 css 的缩进规范是一致的

## 1. 变量

**任何可以用作 css 属性值的赋值**都 可以用作 sass 的变量值。

包括以空格分割的多个属性值，以逗号分割的多个属性值

如`$basic-border: 1px solid black;`，

`$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;`。

```scss
$highlight-color: #f90;
```

### 1.1 变量作用域

引用变量的 css 属性可以使用同级块、父级块、顶级块作用域下的变量。

## 2. 嵌套 CSS 规则

```scss
#content {
  article {
    h1 {
      color: #333;
    }
    p {
      margin-bottom: 1.4em;
    }
  }
  aside {
    background-color: #eee;
  }
}

/* 编译后 */
#content article h1 {
  color: #333;
}
#content article p {
  margin-bottom: 1.4em;
}
#content aside {
  background-color: #eee;
}
```

:::tip
大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于 `：hover` 的伪类。为了解决这种以及其他情况，sass 提供了一个特殊结 构 **&**。
:::

### 2.1 父选择器的标识符 &

当你为链接之类的元素写 `：hover` 这种伪类时，你并不希望以后代选择器的方式连接。比如说，下面这种情况 sass 就无法正常工作：

```scss
article a {
  color: blue;
  :hover {
    color: red;
  }
}

/* 编译后 */
article a {
  color: blue;
}
article a :hover {
  color: red;
}
```

解决之道为使用一个特殊的 sass 选择器，即**父选择器**。

在使用嵌套规则时，父选择器能对于嵌套规则如何解开提供更好的控制。它就是一个简单的 `&` 符号，且可以放在任何一个选择器可出现的地方.

```scss
article a {
  color: blue;
  &:hover {
    color: red;
  }
}

/* 编译后 */
article a {
  color: blue;
}
article a:hover {
  color: red;
}
```

:::tip
当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是 `&` 被父选择器直接替换：
:::

**还可以在父选择器之前添加选择器**

```scss
#content aside {
  color: red;
  body.ie & {
    color: green;
  }
}

/* 编译后 */
#content aside {
  color: red;
}
body.ie #content aside {
  color: green;
}
```

### 2-2. 群组选择器的嵌套

```scss
.container {
  h1,
  h2,
  h3 {
    margin-bottom: 0.8em;
  }
}

/* 编译后 */
.container h1,
.container h2,
.container h3 {
  margin-bottom: 0.8em;
}
```

### 2.3 子组合选择器和同层组合选择器：>、+和~

#### 子代选择器 >

```css
/* 选择article下的所有命中section选择器的元素 */
article section {
  margin: 5px;
}
/* 只会选择article下紧跟着的子元素中命中section选择器的元素 */
article > section {
  border: 1px solid #ccc;
}
```

#### 紧邻兄弟选择器 +

```css
/* 选择header元素后紧跟的p元素 */
header + p {
  font-size: 1.1em;
}
```

#### 通用兄弟选择器 ~

```css
/* 选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素 */
article ~ article {
  border-top: 1px dashed #ccc;
}
```

```scss
article {
  ~ article {
    border-top: 1px dashed #ccc;
  }
  > section {
    background: #eee;
  }
  dl > {
    dt {
      color: #333;
    }
    dd {
      color: #555;
    }
  }
  nav + & {
    margin-top: 0;
  }
}

/* 编译后 */
article ~ article {
  border-top: 1px dashed #ccc;
}
article > footer {
  background: #eee;
}
article dl > dt {
  color: #333;
}
article dl > dd {
  color: #555;
}
nav + article {
  margin-top: 0;
}
```

### 2.4 嵌套属性

```scss
nav {
  border: {
    style: solid;
    width: 1px;
    color: #ccc;
  }
}

/* 编译后 */
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
```

## 3. 导入 SCSS 文件

使用 sass 的 `@import` 规则并不需要指明被导入文件的全名。你可以省略 `.sass`或 `.scss` 文件后缀.

:::tip
css 有一个特别不常用的特性，即 `@import` 规则，它允许在一个 css 文件中导入其他 css 文件。然而，后果是只有执行到 `@import` 时，浏览器才会去下载其他 css 文件，这导致页面加载起来特别慢。
:::

### 3.1 使用 SASS 部分文件

那些专门为`@import`命令而编写的 sass 文件，并不需要生成对应的独立 css 文件，这样的 sass 文件称为**局部文件**。

对此，sass 有一个特殊的约定来命名这些文件。

此约定即，sass 局部文件的文件名以下划线开头。这样，sass 就不会在编译时单独编译这个文件输出 css，而只把这个文件用作导入。导入时, 还可以不写文件的全名，即省略文件名开头的下划线。

### 3.2 默认变量值

你写了一个可被他人通过`@import`导入的 sass 库文件，你可能希望导入者可以定制修改 sass 库文件中的某些值。使用 sass 的`!default`标签可以实现这个目的。它很像 css 属性中`!important`标签的对立面，不同的是`!default`用于变量，含义是：**如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。**

```scss
$fancybox-width: 400px !default;
.fancybox {
  width: $fancybox-width;
}
```

在上例中，如果用户在导入你的 sass 局部文件之前声明了一个`$fancybox-width`变量，那么你的局部文件中对`$fancybox-width`赋值 400px 的操作就无效。如果用户没有做这样的声明，则`$fancybox-width`将默认为 400px。

### 3.2 嵌套导入

跟原生的 css 不同，sass 允许 `@import` 命令写在 css 规则内。这种导入方式下，生成对应的 css 文件时，局部文件会被直接插入到 css 规则内导入它的地方。举例说明，有一个名为`_blue-theme.scss`的局部文件，内容如下：

```scss
aside {
  background: blue;
  color: white;
}
```

```scss
.blue-theme {
  @import "blue-theme";
}

//生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。

.blue-theme {
  aside {
    background: blue;
    color: #fff;
  }
}
```

被导入的局部文件中定义的所有变量和混合器，也会在这个规则范围内生效。这些变量和混合器不会全局有效，这样我们就可以通过嵌套导入只对站点中某一特定区域运用某种颜色主题或其他通过变量配置的样式。

## 4. 静默注释

```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```

## 5. 混合器（@mixin）

通过混合器实现大段样式的重用

```scss
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

```scss
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

/* 编译后 */
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

### 5.1 何时使用混合器？

利用混合器，可以很容易地在样式表的不同地方共享样式。如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器，尤其是这段样式本身就是一个逻辑单元，比如说是一组放在一起有意义的属性。

判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式，比如 `rounded-cornersfancy-font` 或者 `no-bullets` ，那么往往能够构造一个合适的混合器。

### 5.2 混合器中的 CSS 规则

混合器中不仅可以包含属性，也可以包含 css 规则，包含选择器和选择器中的属性，如下代码:

```scss
@mixin no-bullets {
  list-style: none;
  li {
    list-style-image: none;
    list-style-type: none;
    margin-left: 0px;
  }
}
```

```scss
ul.plain {
  color: #444;
  @include no-bullets;
}

/* 编译后 */
ul.plain {
  color: #444;
  list-style: none;
}
ul.plain li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0px;
}
```

### 5.3 给混合器传参

混合器并不一定总得生成相同的样式。可以通过在 `@include` 混合器时给混合器传参，来定制混合器生成的精确样式。当 `@include` 混合器时，参数其实就是可以赋值给 css 属性值的变量。

```scss
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover {
    color: $hover;
  }
  &:visited {
    color: $visited;
  }
}
```

当混合器被@include 时，你可以把它当作一个 css 函数来传参。如果你像下边这样写：

```scss
a {
  @include link-colors(blue, red, green);
}

/* 编译后 */
a {
  color: blue;
}
a:hover {
  color: red;
}
a:visited {
  color: green;
}
```

当你 `@include` 混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，sass 允许通过语法 `$name: value` 的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：

```scss
a {
  @include link-colors($normal: blue, $visited: green, $hover: red);
}
```

### 5.4. 默认参数值

为了在 `@include` 混合器时不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值使用 `$name: default-value` 的声明形式，默认值可以是任何有效的 css 属性值，甚至是其他参数的引用，如下代码：

```scss
@mixin link-colors($normal, $hover: $normal, $visited: $normal) {
  color: $normal;
  &:hover {
    color: $hover;
  }
  &:visited {
    color: $visited;
  }
}
```

## 6. 继承（@extend）

```scss
.error {
  border: 1px solid red;
  background-color: #fdd;
}

.seriousError {
  @extend .error;
  border-width: 3px;
}
```

以 `class="seriousError"` 修饰的 html 元素最终的展示效果就好像是 `class="seriousError error"`

`.seriousError` 不仅会继承 `.error` 自身的所有样式，任何跟 `.error` 有关的组合选择器样式也会被 `.seriousError` 以组合选择器的形式继承，如下代码:

```scss
//.seriousError从.error继承样式
.error a {
  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error {
  //应用到h1.seriousError
  font-size: 1.2rem;
}
```

如上所示，在 `class="seriousError"` 的html元素内的超链接也会变成红色和粗体。

### 6.1 何时使用继承?

- 混合器主要用于展示性样式的重用
- 类名用于语义化样式的重用

### 6.2 继承的工作细节

- 跟混合器相比，继承生成的css代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小。如果你非常关心你站点的速度，请牢记这一点。
- 继承遵从css层叠的规则。当两个不同的css规则应用到同一个html元素上时，并且这两个不同的css规则对同一属性的修饰存在不同的值，css层叠规则会决定应用哪个样式。相当直观：通常权重更高的选择器胜出，如果权重相同，定义在后边的规则胜出。


### 6.3 使用继承的最佳实践

继承只会在生成css时复制选择器，而不会复制大段的css属性.

但是如果你不小心，可能会让生成的css中包含大量的选择器复制。

避免这种情况出现的最好方法就是不要在css规则中使用后代选择器（比如.foo .bar）去继承css规则。如果你这么做，同时被继承的css规则有通过后代选择器修饰的样式，生成css中的选择器的数量很快就会失控：

```scss
.foo .bar { @extend .baz; }
.bip .baz { a: b; }
```

## 参考

[Sass文档](https://www.sass.hk/docs/)
