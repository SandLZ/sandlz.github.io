# 性能

- HTML 文档结构层次尽量少，最好不深于六层；
- 脚本尽量后放，放在 body 前即可；
- 少量首屏样式内联放在标签内；
- 样式结构层次尽量简单；
- 在脚本中尽量减少 DOM 操作，尽量缓存访问 DOM 的样式信息，避免过度触发回流；
- 减少通过 JavaScript 代码修改元素样式，尽量使用修改 class 名方式操作样式或动画；
- 动画尽量使用在绝对定位或固定定位的元素上；
- 隐藏在屏幕外，或在页面滚动时，尽量停止动画；
- 尽量缓存 DOM 查找，查找器尽量简洁；
- 涉及多域名的网站，可以开启域名预解析

## 回流、重绘、合成

### 回流（也叫重排）

触发条件：对 DOM 结构的修改引发 DOM 几何尺寸变化的时候

有以下的操作会触发回流:

1. 一个 DOM 元素的几何属性变化，常见的几何属性有 `width`、`height`、`padding`、`margin`、`left`、`top`、`border` 等等, 这个很好理解。
2. 使 DOM 节点发生增减或者移动。
3. 读写 `offset` 族、`scroll` 族和 `client` 族属性的时候，浏览器为了获取这些值，需要进行回流操作。
4. 调用 `window.getComputedStyle` 方法。

一些常用且会导致回流的属性和方法：

- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- scrollIntoView()、scrollIntoViewIfNeeded()
- getComputedStyle()
- getBoundingClientRect()
- scrollTo()

生成 Dom 树（若 Dom 结构改变） -> 计算样式 -> 生成布局树 -> 图层树 -> 绘制

### 重绘

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
根据概念，我们知道由于没有导致 DOM 几何属性的变化，因此元素的位置信息不需要更新，从而省去布局的过程，流程如下：

计算样式 -> 绘制

:::tip
重绘不一定导致回流

回流一定发生了重绘
:::

### 合成

更改了一个既不要布局也不要绘制的属性，那么渲染引擎会跳过布局和绘制，直接执行后续的合成操作，这个过程就叫合成

比如使用 CSS 的 `transform` 来实现动画效果，避免了回流跟重绘，直接在非主线程中执行合成动画操作。显然这样子的效率更高，毕竟这个是在非主线程上合成的，没有占用主线程资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。

### 相关最佳实践

- 使用 `createDocumentFragment` 进行批量的 DOM 操作
- 对于 `resize`、`scroll` 等进行防抖/节流处理。
- 动画使用 `transform` 或者 `opacity` 实现
- 将元素的 `will-change` 设置为 `opacity`、`transform`、`top`、`left`、`bottom`、`right` 。这样子渲染引擎会为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率。
- 对于不支持 `will-change` 属性的浏览器，使用一个 `3D transform` 属性来强制提升为合成 `transform: translateZ(0)`;
- `rAF` 优化等等
