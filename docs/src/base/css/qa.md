# QA

## 1. css 选择器优先级排序

::: details 答案

- 同一元素引用多个样式，排在后面的样式属性的优先级高
- 样式选择器的类型不同时候，id 选择器>class 选择器>标签选择器
- 标签之间存在层级包含关系时，后代元素会继承祖先元素的样式。如果后代元素定义了与祖先元素相同的样式，则祖先的相同的样式属性会被覆盖，继承的样式的优先级比较低
- 样式来源不同时，优先顺序为：内联样式>内部样式>外部样式>浏览器用户自定义样式>浏览器默认样式
- 三句话：越具体优先级越高，同样优先级的后面的覆盖前面的，带有!important 标记的样式属性的优先级最高，但是最好少用
  :::

## 2. css 开启硬件加速

```css
.some {
  transform: translateZ(0);
  transform: translate3d(0, 0, 0);
}
```

## 3. 如何实现固定长宽比的元素

使用长宽比的 CSS 属性: `aspect-ratio`

## 4. 如何设置多行超出显示省略号

使用 `-webkit-line-clamp` 来设置多行超出显示省略号

```css
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

## 5. 设置一行超出显示省略号

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

## 6. HTML 标签有哪些行内元素

常见的有：

- a
- img
- picture
- span
- input
- textarea
- select
- label

## 7. 网站设置字体时，如何设置优先使用系统默认字体

`system-ui` 将会自动选取系统默认字体作为字体
```css
font-family: system-ui;
```

## 8. 自定义滚动条的样式
滚动条相关样式都是伪元素，以 scrollbar 打头，有以下伪元素，从 -webkit 中可见兼容性一般，不过无所谓，现在 Chrome 浏览器占大头
- `::-webkit-scrollbar` — 整个滚动条.
- `::-webkit-scrollbar-button` — 滚动条上的按钮 (上下箭头).
- `::-webkit-scrollbar-thumb` — 滚动条上的滚动滑块.
- `::-webkit-scrollbar-track` — 滚动条轨道.
- `::-webkit-scrollbar-track-piece` — 滚动条没有滑块的轨道部分.
- `::-webkit-scrollbar-corner` — 当同时有垂直滚动条和水平滚动条时交汇的部分.
- `::-webkit-resizer` — 某些元素的 corner 部分的部分样式(例:textarea 的可拖动按钮).

## 9. 如何匹配前 N 个子元素及最后 N 个子元素

```css
如何匹配最前三个子元素: :nth-child(-n+3)
如何匹配最后三个子元素: :nth-last-child(-n+3)
```