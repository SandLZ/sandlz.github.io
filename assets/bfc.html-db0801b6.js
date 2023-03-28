import{_ as n,p as s,q as a,a1 as t}from"./framework-201fec1f.js";const e={},p=t(`<h1 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h1><blockquote><p>在解释<code>BFC</code>之前，先说一下文档流。我们常说的文档流其实分为<code>定位流</code>、<code>浮动流</code>和<code>普通流</code>三种。而普通流其实就是指<code>BFC</code>中的<code>FC</code>。<code>FC</code>是<code>formatting context</code>的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的 FC 有<code>BFC</code>、<code>IFC</code>，还有<code>GFC</code>和<code>FFC</code>。BFC 是<code>block formatting context</code>，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域</p></blockquote><h2 id="触发条件" tabindex="-1"><a class="header-anchor" href="#触发条件" aria-hidden="true">#</a> 触发条件</h2><ul><li>根元素，即<code>HTML</code>元素</li><li><code>float</code> 不是 <code>none</code></li><li><code>overflow</code> 不是 <code>visible</code></li><li><code>position</code><ul><li><code>absolute</code></li><li><code>fixed</code></li></ul></li><li><code>display</code>值： <ul><li><code>inline-block</code></li><li><code>flex</code></li><li><code>inline-flex</code></li><li><code>grid</code></li><li><code>inline-grid</code></li><li><code>table-cell</code></li><li><code>table-caption</code>(表格标题)</li><li><code>table</code>、<code>table-row</code>、 <code>table-row-group</code>、<code>table-header-group</code>、<code>table-footer-group</code>（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 <code>inline-table</code>）</li></ul></li><li><code>flow-root</code>(新属性，专为触发 BFC)</li><li><code>column-count</code> 或 <code>column-width</code> 不为 <code>auto</code>，包括 <code>column-count</code> 为 <code>1</code></li><li><code>column-span</code> 为 <code>all</code> 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中</li></ul><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p><code>BFC</code>是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:</p><ol><li>阻止元素被<code>浮动元素</code>覆盖</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
        height: 100px;
        width: 100px;
        float: left;
        background: rgb(153, 168, 173);
      <span class="token punctuation">&quot;</span></span></span>
<span class="token punctuation">&gt;</span></span>
  我是一个左浮动的元素
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> cadetblue</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;
  background: #eee;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/YPlqYA.png" style="width:80%;"></div><p>这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 <code>display: flex</code>，就会变成：</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/je6klc.png" style="width:80%;"></div><ol start="2"><li>包含浮动元素</li></ol><p>浮动元素会脱离文档流，查看如下例子：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/7sqxwA.png" style="width:80%;"></div><p>由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度(高度坍塌)。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> hidden</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用<code>clearfix</code>方法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#container::after</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/0qE5I2.png" style="width:80%;"></div><ol start="3"><li>阻止<code>margin</code>重叠</li></ol><p>同一个 <code>BFC</code> 下外边距会发生折叠, 同时会取 <code>margin</code> 的最大值做重叠部分；</p><p>放置在 2 个<code>BFC</code>中，即可避免重叠。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>计算 <code>BFC</code> 的高度时，浮动元素也参与计算</p></div>`,24),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","bfc.html.vue"]]);export{d as default};
