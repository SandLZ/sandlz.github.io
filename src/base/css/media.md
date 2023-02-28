# 媒体查询

媒体查询（Media queries）非常实用，尤其是当你想要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器视窗宽度）来修改网站或应用程序时。

媒体查询常被用于以下目的：

- 有条件的通过 @media 和 @import at-rules 用 CSS 装饰样式。
- 用 media= 属性为`<style>`, `<link>`, `<source>`和其他 HTML 元素指定特定的媒体类型。如:

```html
<link rel="stylesheet" src="styles.css" media="screen" />
<link rel="stylesheet" src="styles.css" media="print" />
```

## 语法

每条媒体查询语句都**由一个可选的媒体类型和任意数量的媒体特性表达式构成**。可以使用多种逻辑操作符合并多条媒体查询语句。媒体查询语句不区分大小写。

### 媒体类型

媒体类型（Media types）描述设备的一般类别。除非使用 not 或 only 逻辑操作符，媒体类型是可选的，并且会（隐式地）应用 all 类型。

- **all**

适用于所有设备

- **print**

适用于在打印预览模式下在屏幕上查看的分页材料和文档

- **screen**

主要用于屏幕

- **speech**

主要用于语音合成器

### 媒体特性(媒体功能)

根据属性判断当前使用 css 所在的设备，或是浏览环境的具体特征。表达式是可选的，它负责判断这些特性或特征是否存在、值为多少。每条媒体特性表达式都必须用括号括起来。

常用媒体：

- `height` 输出设备中的页面可见区域高度
- `width` 输出设备中的页面可见区域宽度
- `max-aspect-ratio` 输出设备的屏幕可见宽度与高度的最大比率
- `max-device-aspect-ratio` 输出设备的屏幕可见宽度与高度的最大比率
- `max-device-height` 输出设备的屏幕可见的最大高度
- `max-device-width` 输出设备的屏幕最大可见宽度
- `max-height` 输出设备中的页面最大可见区域高度
- `max-width` 输出设备中的页面最大可见区域宽度
- `min-height` 输出设备中的页面最小可见区域高度
- `min-width` 输出设备中的页面最小可见区域宽度

### 逻辑运算符

逻辑运算符 `not`，`and`以及 `only` 可以被用于组成一个复杂的媒体查询。还可以通过用逗号分隔多个媒体查询来将它们合并为一个规则。

1. `not` 用于媒体查询取反值，如果媒体查询返回 false，则返回 true。如果出现在以逗号分隔的查询列表中，它只会在当前范围中取反。如果使用`not`运算符，还必须指定媒体类型。

```css
/* 在 screen 类型 加载  */
@media screen {
  .box {
    background-color: red;
  }
}
/* 取反 */
@media not screen {
  .box1 {
    background-color: red;
  }
}
```

2. `and` 用于将多个媒体特征组合到一个媒体查询中。它还用于将媒体功能与媒体类型连接起来。

```css
/* 在 screen 类型 大于960px 加载  */
@media screen and (min-width: 960px) {
  .box {
    background-color: red;
  }
}
/* 在 screen 类型 大于960px 小于 1200px 加载 */
@media screen and (min-width: 960px) and (max-width: 1200px) {
  .box1 {
    background-color: burlywood;
  }
}
```

3. `only` 是为了在不支持媒体查询的浏览器中不添加样式。浏览器处理以 `only` 开头的关键词时将会忽略 `only`。

```css
@media only screen {
  .box {
    background-color: red;
  }
}
// 浏览器中等同于
@media screen {
  .box {
    background-color: red;
  }
}
```

4. `, （逗号)` 逗号用于将多个媒体查询组合成一个规则。逗号分隔列表中的每个查询都与其他查询分开处理。因此，如果列表中的任何查询为真，则整个媒体语句返回真。换句话说，列表的行为就像一个逻辑 or 运算符。

```css
/* 在 screen 类型 小于240px 或 大于560px 加载  */
@media screen and (min-width: 560px), (max-width: 240px) {
  .box {
    background-color: red;
  }
}
/* 在 screen 类型 小于 240px 或 大于360px 小于 700px 加载 */
@media screen and (max-width: 240px),
  (min-width: 360px) and (max-width: 700px) {
  .box1 {
    background-color: burlywood;
  }
}
```

## 其他加载方式

### `style` 标签上加载

```css
<style media="(min-width: 500px)">
  .box {
    background-color: red;
  }
</style>
<style media="(max-width: 500px">
  .box {
    background-color: burlywood;
  }
</style>
```

### `@import` 使用时加载

```css
@import url(./index.css) (min-width: 350px);
@import url(./home.css) (max-width: 750px);
```

### `<picture>`标签

```html
<picture>
  <source media="(min-width: 650px)" srcset="demo1.jpg" />
  <source media="(min-width: 465px)" srcset="demo2.jpg" />
  <img src="img_girl.jpg" />
</picture>
```

## 断点

- 320px - 480px：移动设备
- 481px - 768px：iPad、平板电脑
- 769px - 1024px：小屏幕、笔记本电脑
- 1025px - 1200px：台式机、大屏幕
- 1201px 及以上：超大屏幕、电视
