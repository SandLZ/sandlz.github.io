# Border

## 如何画一条 0.5px 的边框?

理论上 px 的最小单位是 1，但是会有几个特例，高清屏的显示就是一个特例。高清屏确实可以画 0.5px，对比效果如下：

## 方案 1

```css
.hr.scale-half {
  height: 1px;
  transform: scaleY(0.5);
  transform-origin: 50% 100%;
}
```

## 方案 2

使用 svg 的 line 元素画线，stroke 表示描边颜色，默认描边宽度 `stroke-width="1"`，由于 svg 的描边等属性的 1px 是物理像素的 1px，相当于高清屏的 0.5px，另外还可以使用 svg 的 rect 等元素进行绘制。

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1px">
  <line x1="0" y1="0" x2="100%" y2="0" stroke="#000"></line>
</svg>
```

[参考](https://juejin.cn/post/6844903582370643975)
