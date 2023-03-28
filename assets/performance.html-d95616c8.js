import{_ as e,p as o,q as i,a1 as c}from"./framework-201fec1f.js";const l={},d=c('<h1 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h1><ul><li>HTML 文档结构层次尽量少，最好不深于六层；</li><li>脚本尽量后放，放在 body 前即可；</li><li>少量首屏样式内联放在标签内；</li><li>样式结构层次尽量简单；</li><li>在脚本中尽量减少 DOM 操作，尽量缓存访问 DOM 的样式信息，避免过度触发回流；</li><li>减少通过 JavaScript 代码修改元素样式，尽量使用修改 class 名方式操作样式或动画；</li><li>动画尽量使用在绝对定位或固定定位的元素上；</li><li>隐藏在屏幕外，或在页面滚动时，尽量停止动画；</li><li>尽量缓存 DOM 查找，查找器尽量简洁；</li><li>涉及多域名的网站，可以开启域名预解析</li></ul><h2 id="回流、重绘、合成" tabindex="-1"><a class="header-anchor" href="#回流、重绘、合成" aria-hidden="true">#</a> 回流、重绘、合成</h2><h3 id="回流-也叫重排" tabindex="-1"><a class="header-anchor" href="#回流-也叫重排" aria-hidden="true">#</a> 回流（也叫重排）</h3><p>触发条件：对 DOM 结构的修改引发 DOM 几何尺寸变化的时候</p><p>有以下的操作会触发回流:</p><ol><li>一个 DOM 元素的几何属性变化，常见的几何属性有 <code>width</code>、<code>height</code>、<code>padding</code>、<code>margin</code>、<code>left</code>、<code>top</code>、<code>border</code> 等等, 这个很好理解。</li><li>使 DOM 节点发生增减或者移动。</li><li>读写 <code>offset</code> 族、<code>scroll</code> 族和 <code>client</code> 族属性的时候，浏览器为了获取这些值，需要进行回流操作。</li><li>调用 <code>window.getComputedStyle</code> 方法。</li></ol><p>一些常用且会导致回流的属性和方法：</p><ul><li>clientWidth、clientHeight、clientTop、clientLeft</li><li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li><li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li><li>scrollIntoView()、scrollIntoViewIfNeeded()</li><li>getComputedStyle()</li><li>getBoundingClientRect()</li><li>scrollTo()</li></ul><p>生成 Dom 树（若 Dom 结构改变） -&gt; 计算样式 -&gt; 生成布局树 -&gt; 图层树 -&gt; 绘制</p><h3 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘</h3><p>当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。 根据概念，我们知道由于没有导致 DOM 几何属性的变化，因此元素的位置信息不需要更新，从而省去布局的过程，流程如下：</p><p>计算样式 -&gt; 绘制</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>重绘不一定导致回流</p><p>回流一定发生了重绘</p></div><h3 id="合成" tabindex="-1"><a class="header-anchor" href="#合成" aria-hidden="true">#</a> 合成</h3><p>更改了一个既不要布局也不要绘制的属性，那么渲染引擎会跳过布局和绘制，直接执行后续的合成操作，这个过程就叫合成</p><p>比如使用 CSS 的 <code>transform</code> 来实现动画效果，避免了回流跟重绘，直接在非主线程中执行合成动画操作。显然这样子的效率更高，毕竟这个是在非主线程上合成的，没有占用主线程资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。</p><h3 id="相关最佳实践" tabindex="-1"><a class="header-anchor" href="#相关最佳实践" aria-hidden="true">#</a> 相关最佳实践</h3><ul><li>使用 <code>createDocumentFragment</code> 进行批量的 DOM 操作</li><li>对于 <code>resize</code>、<code>scroll</code> 等进行防抖/节流处理。</li><li>动画使用 <code>transform</code> 或者 <code>opacity</code> 实现</li><li>将元素的 <code>will-change</code> 设置为 <code>opacity</code>、<code>transform</code>、<code>top</code>、<code>left</code>、<code>bottom</code>、<code>right</code> 。这样子渲染引擎会为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率。</li><li>对于不支持 <code>will-change</code> 属性的浏览器，使用一个 <code>3D transform</code> 属性来强制提升为合成 <code>transform: translateZ(0)</code>;</li><li><code>rAF</code> 优化等等</li></ul>',19),t=[d];function a(r,n){return o(),i("div",null,t)}const h=e(l,[["render",a],["__file","performance.html.vue"]]);export{h as default};
