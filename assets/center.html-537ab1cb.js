import{_ as c,M as i,p,q as o,R as n,N as e,U as t,t as s,a1 as l}from"./framework-201fec1f.js";const d={},u=n("h1",{id:"居中",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#居中","aria-hidden":"true"},"#"),s(" 居中")],-1),r={class:"table-of-contents"},v=l(`<h2 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h2><ol><li><code>text-align:center</code></li></ol><p>在父元素中设置<code>text-align:center</code>实现行内元素水平居中，将子元素的<code>display</code>设置为<code>inline-block</code>，使子元素变成行内元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent" style="background-color:gray;"><div class="child" style="background-color:lightblue;">水平居中: text-align</div></div><p>不足：子元素的<code>text-align</code>继承了父元素的<code>center</code>，文字也居中显示，所以需要在子元素中设置<code>text-align:left</code></p><ol start="2"><li><code>margin</code></li></ol><p>在本身元素设置<code>margin: 0 auto</code>实现块级元素水平居中</p><p>2.1 将子元素的<code>display</code>为<code>table</code>，使子元素成为块级元素，同时<code>table</code>还具有包裹性，宽度由内容撑开</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.child</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent" style="background-color:gray;"><div class="child" style="background-color:lightblue;">水平居中: margin</div></div><p>2.2 若子元素定宽，则可以使用绝对定位的盒模型属性，实现居中效果；若不设置宽度时，子元素被拉伸</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
 <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent" style="background-color:gray;height:20px;"><div class="child2" style="background-color:lightblue;">水平居中: margin</div></div><ol start="3"><li><code>absolute</code></li></ol><p>通过绝对定位的偏移属性实现水平居中</p><p>3.1 配合<code>translate()</code>位移函数</p><p><code>translate</code>函数的百分比是相对于自身宽度的，所以<code>left:50%</code>配合<code>translateX(-50%)</code>可实现居中效果</p><p><code>relative</code> 数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为 <code>absolute</code>，所以若使用 <code>relative</code>，则需要增加一层<code>&lt;div&gt;</code>结构，使其宽度与子元素宽度相同.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),k=l(`<div class="parent" style="background-color:gray;height:20px;"><div class="child3" style="background-color:lightblue;">水平居中: translate</div></div><p>3.2 配合<code>relative</code></p><p><code>relative</code>数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为<code>absolute</code>，所以若使用<code>relative</code>，则需要增加一层<code>&lt;div&gt;</code>结构，使其宽度与子元素宽度相同</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>该方法全兼容，但是增加了 html 结构</p></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.childWrap</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent" style="background-color:gray;height:20px;"><div class="childWrap"><div class="child4" style="background-color:lightblue;">水平居中: 配合relative</div></div></div><p>3.3 配合负<code>margin</code></p><p><code>relative</code>数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为<code>absolute</code>，所以若使用<code>relative</code>，则需要增加一层<code>&lt;div&gt;</code>结构，使其宽度与子元素宽度相同</p><p><code>margin</code>的百分比是相对于包含块的，所以需要增加一层<code>&lt;div&gt;</code>结构。由于宽度<code>width</code>的默认值是<code>auto</code>，当设置负<code>margin</code>时，<code>width</code>也会随着变大。所以此时需要<code>定宽</code>处理</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>虽然全兼容，但需要增加页面结构及定宽处理，所以限制了应用场景</p></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.childWrap</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span>-50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent" style="background-color:gray;height:20px;"><div class="childWrap5"><div class="child5" style="background-color:lightblue;">水平居中: 配合负margin</div></div></div><ol start="4"><li><code>flex</code></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent6</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 也可以使用margin */</span>
  <span class="token comment">/* margin: 0 auto */</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent6" style="background-color:gray;"><div class="child6" style="background-color:lightblue;">水平居中: flex</div></div><ol start="5"><li><code>grid</code></li></ol><p>使用栅格布局<code>grid</code>实现水平居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style &gt; .parent7</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/*justify-content:center;*/</span>
<span class="token punctuation">}</span>
&lt;/style&gt;

<span class="token comment">/* 或者 child */</span>
<span class="token selector">.child7</span> <span class="token punctuation">{</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/*margin: 0 auto;*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent7" style="background-color:gray;"><div class="child7" style="background-color:lightblue;">水平居中: grid</div></div><h2 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h2><ol><li><code>line-height</code></li></ol><p>行高<code>line-height</code>实现单行文本垂直居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.test</span><span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="test">测试文字</div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在不设置高度的情况下，行高撑开高度</p></div><ol start="2"><li><code>vertical-align</code></li></ol><p>设置<code>vertical-align:middle</code>实现垂直居中</p><p>通过为<code>table-cell</code>元素设置<code>vertical-align:middle</code>，可使其子元素均实现垂直居中。这和表格里单元格的垂直居中是类似的</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>设置为<code>table-cell</code>的<code>div</code>不能使用浮动或绝对定位，因为浮动或绝对定位会使元素具有块级元素特性，从而丧失了<code>table-cell</code>元素具有的垂直对齐的功能。若需要浮动或绝对定位处理，则需要外面再套一层<code>div</code></p></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent10" style="background-color:gray;height:100px;"><div class="child10" style="background-color:lightblue;">我是有点长的有点长的有点长的有点长的测试文字</div></div><p>特殊场景：子元素是图片</p><p>通过设置父元素的行高来代替高度，且设置父元素的<code>font-size</code>为 0</p><p><code>vertical-align:middle</code>的解释是元素的中垂点与父元素的基线加<code>1/2</code>父元素中字母<code>X</code>的高度对齐。由于字符<code>X</code>在<code>em</code>框中并不是垂直居中的，且各个字体的字符<code>X</code>的高低位置不一致。所以，当字体大小较大时，这种差异就更明显。当<code>font-size</code>为 0 时，相当于把字符<code>X</code>的字体大小设置为<code>0</code>，于是可以实现完全的垂直居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent11" style="background-color:lightgray;width:200px;"><img class="child11" src="https://github.com/sandlz/images/raw/master/uPic/lP5PqpRluKU.jpg" width="50%" alt="test"></div><ol start="3"><li><code>absolute</code></li></ol><p>通过绝对定位实现垂直居中</p><p>3.1 配合<code>translate()</code>位移函数, <code>translate</code>函数的百分比是相对于自身高度的，所以<code>top:50%</code>配合<code>translateY(-50%)</code>可实现居中效果</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>子元素的高度已知，<code>translate()</code>函数也可替换为<code>margin-top: 负的高度值</code></p></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent12" style="background-color:lightgray;height:100px;"><div class="child12" style="background-color:lightblue;">测试文字</div></div><p>3.2 若子元素定高，结合绝对定位的盒模型属性，实现居中效果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
 <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> auto 0<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent13" style="background-color:lightgray;height:100px;"><div class="child13" style="background-color:lightblue;">测试文字</div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>在水平居中对齐中，元素外层套一层<code>div</code>并设置<code>absolute</code>，元素设置负<code>margin-left</code>或者<code>relative</code>的负<code>left</code>属性，可以实现水平居中的效果。但由于<code>margin</code>是相对于包含块宽度的，这样<code>margin-top:-50%</code>得到的是宽度而不是高度的<code>-50%</code>，所以不可行； 对于<code>relative</code>的百分比取值而言，在包含块高度为 auto 的情况下，chrome、safari 和 IE8+浏览器都不支持设置元素的百分比 top 值，所以也不可行</p></div><ol start="4"><li><code>flex</code></li></ol><p>使用弹性盒模型 flex 实现垂直居中</p><p>4.1 在伸缩容器上设置侧轴对齐方式<code>align-items: center</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.2 在伸缩项目上设置<code>margin: auto 0</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><code>grid</code></li></ol><p>使用栅格布局<code>grid</code>实现垂直居中</p><p>5.1 在网格容器上设置<code>align-items</code>或<code>align-content</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
 <span class="token comment">/*align-content:center;*/</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2 在网格项目中设置<code>align-self</code>或者<code>margin: auto 0</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
 <span class="token comment">/*margin: auto 0;*/</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="水平-垂直居中" tabindex="-1"><a class="header-anchor" href="#水平-垂直居中" aria-hidden="true">#</a> 水平&amp;垂直居中</h2><ol><li>水平对齐 + 行高</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.test</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="test" style="background-color:lightblue;width:200px;">测试文字</div><ol start="2"><li>水平 + 垂直对齐</li></ol><p>2.1 父元素设置<code>text-align</code>和<code>vertical-align</code>，并将父元素设置为<code>table-cell</code>元素，子元素设置为<code>inline-block</code>元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent20" style="background-color:gray;width:200px;height:100px;"><div class="child20" style="background-color:lightblue;">测试文字</div></div><p>2.2 若子元素是图像，可不使用<code>table-cell</code>，而是其父元素用行高替代高度，且字体大小设为 0。子元素本身设置<code>vertical-align:middle</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent21" style="background-color:gray;width:200px;"><img class="child21" src="https://github.com/sandlz/images/raw/master/uPic/lP5PqpRluKU.jpg" width="50%" alt="test"></div><ol start="3"><li><code>margin</code> + 垂直对齐</li></ol><p>要想在父元素中设置<code>vertical-align</code>，须设置为<code>table-cell</code>元素；要想让<code>margin:0 auto</code>实现水平居中的块元素内容撑开宽度，须设置为<code>table</code>元素。而<code>table</code>元素是可以嵌套在<code>tabel-cell</code>元素里面的，就像一个单元格里可以嵌套一个表格</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>table-cell<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent22" style="background-color:lightgray;width:200px;height:100px;"><div class="child22" style="background-color:lightblue;">测试文字</div></div><ol start="4"><li><code>absolute</code></li></ol><p>4.1 利用绝对定位元素的盒模型特性，在偏移属性为确定值的基础上，设置<code>margin:auto</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent23" style="background-color:lightgray;width:200px;height:100px;"><div class="child23" style="background-color:lightblue;">测试文字</div></div><p>4.2 利用绝对定位元素的偏移属性和<code>translate()</code>函数的自身偏移达到水平垂直居中的效果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent24" style="background-color:lightgray;width:200px;height:100px;"><div class="child24" style="background-color:lightblue;">测试文字</div></div><p>4.3 在子元素宽高已知的情况下，可以配合<code>margin</code>负值达到水平垂直居中效果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -40px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="parent25" style="background-color:lightgray;width:200px;height:100px;"><div class="child25" style="background-color:lightblue;">测试文字</div></div><ol start="5"><li><code>flex</code></li></ol><p>5.1 在伸缩容器上使用主轴对齐 justify-content 和侧轴对齐 align-items</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2 在伸缩项目上使用 margin:auto</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><code>grid</code></li></ol><p>6.1 在网格容器上设置<code>justify-items</code>、<code>align-items</code>或<code>justify-content</code>、<code>align-content</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/* align-content: center; */</span>
    <span class="token comment">/* justify-content: center; */</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.2 在网格项目中设置<code>justify-self</code>、<code>align-self</code>或者<code>margin: auto</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
.parent</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span><span class="token punctuation">{</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token comment">/*     margin: auto; */</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,93);function m(b,g){const a=i("router-link");return p(),o("div",null,[u,n("nav",r,[n("ul",null,[n("li",null,[e(a,{to:"#水平居中"},{default:t(()=>[s("水平居中")]),_:1})]),n("li",null,[e(a,{to:"#垂直居中"},{default:t(()=>[s("垂直居中")]),_:1})]),n("li",null,[e(a,{to:"#水平-垂直居中"},{default:t(()=>[s("水平&垂直居中")]),_:1})])])]),v,s(),k])}const h=c(d,[["render",m],["__file","center.html.vue"]]);export{h as default};
