# BFC

> 在解释`BFC`之前，先说一下文档流。我们常说的文档流其实分为`定位流`、`浮动流`和`普通流`三种。而普通流其实就是指`BFC`中的`FC`。`FC`是`formatting context`的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的 FC 有`BFC`、`IFC`，还有`GFC`和`FFC`。BFC 是`block formatting context`，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域

## 触发条件

- 根元素，即`HTML`元素
- `float` 不是 `none`
- `overflow` 不是 `visible`
- `position`
  - `absolute`
  - `fixed`
- `display`值：
  - `inline-block`
  - `flex`
  - `inline-flex`
  - `grid`
  - `inline-grid`
  - `table-cell`
  - `table-caption`(表格标题)
  - `table`、`table-row`、 `table-row-group`、`table-header-group`、`table-footer-group`（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 `inline-table`）
- `flow-root`(新属性，专为触发 BFC)
- `column-count` 或 `column-width` 不为 `auto`，包括 `column-count` 为 `1`
- `column-span` 为 `all` 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中

## 作用

`BFC`是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:

1. 阻止元素被`浮动元素`覆盖

```html
<div
  style="
        height: 100px;
        width: 100px;
        float: left;
        background: rgb(153, 168, 173);
      "
>
  我是一个左浮动的元素
</div>
<div style="width: 200px; height: 200px; background: cadetblue">
  我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;
  background: #eee;
</div>
```

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/YPlqYA.png" style="width: 80%" />
</div>

这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 `display: flex`，就会变成：

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/je6klc.png" style="width: 80%" />
</div>

2. 包含浮动元素

浮动元素会脱离文档流，查看如下例子：

```html
<div style="border: 1px solid #000;">
  <div
    style="width: 100px;height: 100px;background: cadetblue;float: left;"
  ></div>
</div>
```

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/7sqxwA.png" style="width: 80%" />
</div>

由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度(高度坍塌)。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。

```html
<div id="container" style="border: 1px solid #000;overflow: hidden">
  <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

也可以使用`clearfix`方法

```css
#container::after {
  display: block;
  content: "";
  clear: left;
}
```

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/0qE5I2.png" style="width: 80%" />
</div>

3. 阻止`margin`重叠

同一个 `BFC` 下外边距会发生折叠, 同时会取 `margin` 的最大值做重叠部分；

放置在 2 个`BFC`中，即可避免重叠。

:::tip
计算 `BFC` 的高度时，浮动元素也参与计算
:::
