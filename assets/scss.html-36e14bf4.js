import{_ as i,M as p,p as l,q as o,R as s,N as a,U as t,t as n,a1 as u}from"./framework-201fec1f.js";const d={},r=s("h1",{id:"scss",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#scss","aria-hidden":"true"},"#"),n(" Scss")],-1),v=s("blockquote",null,[s("p",null,"世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！")],-1),k={class:"table-of-contents"},m=u(`<h2 id="sass-与-scss-区别" tabindex="-1"><a class="header-anchor" href="#sass-与-scss-区别" aria-hidden="true">#</a> Sass 与 Scss 区别</h2><ul><li><strong>后缀名</strong></li></ul><p>sass（Syntactically Awesome StyleSheets）版本<strong>3.0</strong>之前的后缀名为<code>.sass</code>，</p><p>而版本<strong>3.0</strong>之后的后缀名<code>.scss</code></p><ul><li><strong>语法</strong></li></ul><p>sass 没有{}和; 有严格的缩进规范 ;</p><p>scss 和 css 的缩进规范是一致的</p><h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量" aria-hidden="true">#</a> 1. 变量</h2><p><strong>任何可以用作 css 属性值的赋值</strong>都 可以用作 sass 的变量值。</p><p>包括以空格分割的多个属性值，以逗号分割的多个属性值</p><p>如<code>$basic-border: 1px solid black;</code>，</p><p><code>$plain-font: &quot;Myriad Pro&quot;、Myriad、&quot;Helvetica Neue&quot;、Helvetica、&quot;Liberation Sans&quot;、Arial和sans-serif; sans-serif;</code>。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$highlight-color</span></span><span class="token punctuation">:</span> #f90<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-变量作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-变量作用域" aria-hidden="true">#</a> 1.1 变量作用域</h3><p>引用变量的 css 属性可以使用同级块、父级块、顶级块作用域下的变量。</p><h2 id="_2-嵌套-css-规则" tabindex="-1"><a class="header-anchor" href="#_2-嵌套-css-规则" aria-hidden="true">#</a> 2. 嵌套 CSS 规则</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#content </span><span class="token punctuation">{</span>
  <span class="token selector">article </span><span class="token punctuation">{</span>
    <span class="token selector">h1 </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">p </span><span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">aside </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">#content article h1 </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#content article p </span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#content aside </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于 <code>：hover</code> 的伪类。为了解决这种以及其他情况，sass 提供了一个特殊结 构 <strong>&amp;</strong>。</p></div><h3 id="_2-1-父选择器的标识符" tabindex="-1"><a class="header-anchor" href="#_2-1-父选择器的标识符" aria-hidden="true">#</a> 2.1 父选择器的标识符 &amp;</h3><p>当你为链接之类的元素写 <code>：hover</code> 这种伪类时，你并不希望以后代选择器的方式连接。比如说，下面这种情况 sass 就无法正常工作：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector">:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article a :hover </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决之道为使用一个特殊的 sass 选择器，即<strong>父选择器</strong>。</p><p>在使用嵌套规则时，父选择器能对于嵌套规则如何解开提供更好的控制。它就是一个简单的 <code>&amp;</code> 符号，且可以放在任何一个选择器可出现的地方.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">article a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article a:hover </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是 <code>&amp;</code> 被父选择器直接替换：</p></div><p><strong>还可以在父选择器之前添加选择器</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#content aside </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token selector">body.ie <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">#content aside </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body.ie #content aside </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-群组选择器的嵌套" tabindex="-1"><a class="header-anchor" href="#_2-2-群组选择器的嵌套" aria-hidden="true">#</a> 2-2. 群组选择器的嵌套</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token selector">h1,
  h2,
  h3 </span><span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">.container h1,
.container h2,
.container h3 </span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-子组合选择器和同层组合选择器-、-和" tabindex="-1"><a class="header-anchor" href="#_2-3-子组合选择器和同层组合选择器-、-和" aria-hidden="true">#</a> 2.3 子组合选择器和同层组合选择器：&gt;、+和~</h3><h4 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器" aria-hidden="true">#</a> 子代选择器 &gt;</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择article下的所有命中section选择器的元素 */</span>
<span class="token selector">article section</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 只会选择article下紧跟着的子元素中命中section选择器的元素 */</span>
<span class="token selector">article &gt; section</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="紧邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#紧邻兄弟选择器" aria-hidden="true">#</a> 紧邻兄弟选择器 +</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择header元素后紧跟的p元素 */</span>
<span class="token selector">header + p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器" aria-hidden="true">#</a> 通用兄弟选择器 ~</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素 */</span>
<span class="token selector">article ~ article</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">article </span><span class="token punctuation">{</span>
  <span class="token selector">~ article </span><span class="token punctuation">{</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&gt; section </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">dl &gt; </span><span class="token punctuation">{</span>
    <span class="token selector">dt </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">dd </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">nav + <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">article ~ article </span><span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dashed #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article &gt; footer </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article dl &gt; dt </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article dl &gt; dd </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav + article </span><span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-嵌套属性" tabindex="-1"><a class="header-anchor" href="#_2-4-嵌套属性" aria-hidden="true">#</a> 2.4 嵌套属性</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">border: </span><span class="token punctuation">{</span>
    <span class="token property">style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-导入-scss-文件" tabindex="-1"><a class="header-anchor" href="#_3-导入-scss-文件" aria-hidden="true">#</a> 3. 导入 SCSS 文件</h2><p>使用 sass 的 <code>@import</code> 规则并不需要指明被导入文件的全名。你可以省略 <code>.sass</code>或 <code>.scss</code> 文件后缀.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>css 有一个特别不常用的特性，即 <code>@import</code> 规则，它允许在一个 css 文件中导入其他 css 文件。然而，后果是只有执行到 <code>@import</code> 时，浏览器才会去下载其他 css 文件，这导致页面加载起来特别慢。</p></div><h3 id="_3-1-使用-sass-部分文件" tabindex="-1"><a class="header-anchor" href="#_3-1-使用-sass-部分文件" aria-hidden="true">#</a> 3.1 使用 SASS 部分文件</h3><p>那些专门为<code>@import</code>命令而编写的 sass 文件，并不需要生成对应的独立 css 文件，这样的 sass 文件称为<strong>局部文件</strong>。</p><p>对此，sass 有一个特殊的约定来命名这些文件。</p><p>此约定即，sass 局部文件的文件名以下划线开头。这样，sass 就不会在编译时单独编译这个文件输出 css，而只把这个文件用作导入。导入时, 还可以不写文件的全名，即省略文件名开头的下划线。</p><h3 id="_3-2-默认变量值" tabindex="-1"><a class="header-anchor" href="#_3-2-默认变量值" aria-hidden="true">#</a> 3.2 默认变量值</h3><p>你写了一个可被他人通过<code>@import</code>导入的 sass 库文件，你可能希望导入者可以定制修改 sass 库文件中的某些值。使用 sass 的<code>!default</code>标签可以实现这个目的。它很像 css 属性中<code>!important</code>标签的对立面，不同的是<code>!default</code>用于变量，含义是：<strong>如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fancybox-width</span></span><span class="token punctuation">:</span> 400px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token selector">.fancybox </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$fancybox-width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上例中，如果用户在导入你的 sass 局部文件之前声明了一个<code>$fancybox-width</code>变量，那么你的局部文件中对<code>$fancybox-width</code>赋值 400px 的操作就无效。如果用户没有做这样的声明，则<code>$fancybox-width</code>将默认为 400px。</p><h3 id="_3-2-嵌套导入" tabindex="-1"><a class="header-anchor" href="#_3-2-嵌套导入" aria-hidden="true">#</a> 3.2 嵌套导入</h3><p>跟原生的 css 不同，sass 允许 <code>@import</code> 命令写在 css 规则内。这种导入方式下，生成对应的 css 文件时，局部文件会被直接插入到 css 规则内导入它的地方。举例说明，有一个名为<code>_blue-theme.scss</code>的局部文件，内容如下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">aside </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.blue-theme </span><span class="token punctuation">{</span>
  <span class="token keyword">@import</span> <span class="token string">&quot;blue-theme&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。</span>

<span class="token selector">.blue-theme </span><span class="token punctuation">{</span>
  <span class="token selector">aside </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被导入的局部文件中定义的所有变量和混合器，也会在这个规则范围内生效。这些变量和混合器不会全局有效，这样我们就可以通过嵌套导入只对站点中某一特定区域运用某种颜色主题或其他通过变量配置的样式。</p><h2 id="_4-静默注释" tabindex="-1"><a class="header-anchor" href="#_4-静默注释" aria-hidden="true">#</a> 4. 静默注释</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span> <span class="token comment">// 这种注释内容不会出现在生成的css文件中</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 这种注释内容会出现在生成的css文件中 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-混合器-mixin" tabindex="-1"><a class="header-anchor" href="#_5-混合器-mixin" aria-hidden="true">#</a> 5. 混合器（@mixin）</h2><p>通过混合器实现大段样式的重用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">rounded-corners </span><span class="token punctuation">{</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.notice </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #00aa00<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> rounded-corners<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">.notice </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #00aa00<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-何时使用混合器" tabindex="-1"><a class="header-anchor" href="#_5-1-何时使用混合器" aria-hidden="true">#</a> 5.1 何时使用混合器？</h3><p>利用混合器，可以很容易地在样式表的不同地方共享样式。如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器，尤其是这段样式本身就是一个逻辑单元，比如说是一组放在一起有意义的属性。</p><p>判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式，比如 <code>rounded-cornersfancy-font</code> 或者 <code>no-bullets</code> ，那么往往能够构造一个合适的混合器。</p><h3 id="_5-2-混合器中的-css-规则" tabindex="-1"><a class="header-anchor" href="#_5-2-混合器中的-css-规则" aria-hidden="true">#</a> 5.2 混合器中的 CSS 规则</h3><p>混合器中不仅可以包含属性，也可以包含 css 规则，包含选择器和选择器中的属性，如下代码:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">no-bullets </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">list-style-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">ul.plain </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> no-bullets<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">ul.plain </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul.plain li </span><span class="token punctuation">{</span>
  <span class="token property">list-style-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-给混合器传参" tabindex="-1"><a class="header-anchor" href="#_5-3-给混合器传参" aria-hidden="true">#</a> 5.3 给混合器传参</h3><p>混合器并不一定总得生成相同的样式。可以通过在 <code>@include</code> 混合器时给混合器传参，来定制混合器生成的精确样式。当 <code>@include</code> 混合器时，参数其实就是可以赋值给 css 属性值的变量。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">link-colors</span><span class="token punctuation">(</span><span class="token variable">$normal</span><span class="token punctuation">,</span> <span class="token variable">$hover</span><span class="token punctuation">,</span> <span class="token variable">$visited</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$hover</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:visited </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$visited</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当混合器被@include 时，你可以把它当作一个 css 函数来传参。如果你像下边这样写：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 编译后 */</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:visited </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你 <code>@include</code> 混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，sass 允许通过语法 <code>$name: value</code> 的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">link-colors</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$normal</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$visited</span></span><span class="token punctuation">:</span> green<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$hover</span></span><span class="token punctuation">:</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-默认参数值" tabindex="-1"><a class="header-anchor" href="#_5-4-默认参数值" aria-hidden="true">#</a> 5.4. 默认参数值</h3><p>为了在 <code>@include</code> 混合器时不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值使用 <code>$name: default-value</code> 的声明形式，默认值可以是任何有效的 css 属性值，甚至是其他参数的引用，如下代码：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">link-colors</span><span class="token punctuation">(</span><span class="token variable">$normal</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$hover</span></span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$visited</span></span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$normal</span><span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$hover</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:visited </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$visited</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-继承-extend" tabindex="-1"><a class="header-anchor" href="#_6-继承-extend" aria-hidden="true">#</a> 6. 继承（@extend）</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.seriousError </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以 <code>class=&quot;seriousError&quot;</code> 修饰的 html 元素最终的展示效果就好像是 <code>class=&quot;seriousError error&quot;</code></p><p><code>.seriousError</code> 不仅会继承 <code>.error</code> 自身的所有样式，任何跟 <code>.error</code> 有关的组合选择器样式也会被 <code>.seriousError</code> 以组合选择器的形式继承，如下代码:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//.seriousError从.error继承样式</span>
<span class="token selector">.error a </span><span class="token punctuation">{</span>
  <span class="token comment">//应用到.seriousError a</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1.error </span><span class="token punctuation">{</span>
  <span class="token comment">//应用到h1.seriousError</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，在 <code>class=&quot;seriousError&quot;</code> 的html元素内的超链接也会变成红色和粗体。</p><h3 id="_6-1-何时使用继承" tabindex="-1"><a class="header-anchor" href="#_6-1-何时使用继承" aria-hidden="true">#</a> 6.1 何时使用继承?</h3><ul><li>混合器主要用于展示性样式的重用</li><li>类名用于语义化样式的重用</li></ul><h3 id="_6-2-继承的工作细节" tabindex="-1"><a class="header-anchor" href="#_6-2-继承的工作细节" aria-hidden="true">#</a> 6.2 继承的工作细节</h3><ul><li>跟混合器相比，继承生成的css代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小。如果你非常关心你站点的速度，请牢记这一点。</li><li>继承遵从css层叠的规则。当两个不同的css规则应用到同一个html元素上时，并且这两个不同的css规则对同一属性的修饰存在不同的值，css层叠规则会决定应用哪个样式。相当直观：通常权重更高的选择器胜出，如果权重相同，定义在后边的规则胜出。</li></ul><h3 id="_6-3-使用继承的最佳实践" tabindex="-1"><a class="header-anchor" href="#_6-3-使用继承的最佳实践" aria-hidden="true">#</a> 6.3 使用继承的最佳实践</h3><p>继承只会在生成css时复制选择器，而不会复制大段的css属性.</p><p>但是如果你不小心，可能会让生成的css中包含大量的选择器复制。</p><p>避免这种情况出现的最好方法就是不要在css规则中使用后代选择器（比如.foo .bar）去继承css规则。如果你这么做，同时被继承的css规则有通过后代选择器修饰的样式，生成css中的选择器的数量很快就会失控：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.foo .bar </span><span class="token punctuation">{</span> <span class="token keyword">@extend</span> .baz<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.bip .baz </span><span class="token punctuation">{</span> <span class="token property">a</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,94),b={href:"https://www.sass.hk/docs/",target:"_blank",rel:"noopener noreferrer"};function h(g,y){const e=p("router-link"),c=p("ExternalLinkIcon");return l(),o("div",null,[r,v,s("nav",k,[s("ul",null,[s("li",null,[a(e,{to:"#sass-与-scss-区别"},{default:t(()=>[n("Sass 与 Scss 区别")]),_:1})]),s("li",null,[a(e,{to:"#_1-变量"},{default:t(()=>[n("1. 变量")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_1-1-变量作用域"},{default:t(()=>[n("1.1 变量作用域")]),_:1})])])]),s("li",null,[a(e,{to:"#_2-嵌套-css-规则"},{default:t(()=>[n("2. 嵌套 CSS 规则")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_2-1-父选择器的标识符"},{default:t(()=>[n("2.1 父选择器的标识符 &")]),_:1})]),s("li",null,[a(e,{to:"#_2-2-群组选择器的嵌套"},{default:t(()=>[n("2-2. 群组选择器的嵌套")]),_:1})]),s("li",null,[a(e,{to:"#_2-3-子组合选择器和同层组合选择器-、-和"},{default:t(()=>[n("2.3 子组合选择器和同层组合选择器：>、+和~")]),_:1})]),s("li",null,[a(e,{to:"#_2-4-嵌套属性"},{default:t(()=>[n("2.4 嵌套属性")]),_:1})])])]),s("li",null,[a(e,{to:"#_3-导入-scss-文件"},{default:t(()=>[n("3. 导入 SCSS 文件")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_3-1-使用-sass-部分文件"},{default:t(()=>[n("3.1 使用 SASS 部分文件")]),_:1})]),s("li",null,[a(e,{to:"#_3-2-默认变量值"},{default:t(()=>[n("3.2 默认变量值")]),_:1})]),s("li",null,[a(e,{to:"#_3-2-嵌套导入"},{default:t(()=>[n("3.2 嵌套导入")]),_:1})])])]),s("li",null,[a(e,{to:"#_4-静默注释"},{default:t(()=>[n("4. 静默注释")]),_:1})]),s("li",null,[a(e,{to:"#_5-混合器-mixin"},{default:t(()=>[n("5. 混合器（@mixin）")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_5-1-何时使用混合器"},{default:t(()=>[n("5.1 何时使用混合器？")]),_:1})]),s("li",null,[a(e,{to:"#_5-2-混合器中的-css-规则"},{default:t(()=>[n("5.2 混合器中的 CSS 规则")]),_:1})]),s("li",null,[a(e,{to:"#_5-3-给混合器传参"},{default:t(()=>[n("5.3 给混合器传参")]),_:1})]),s("li",null,[a(e,{to:"#_5-4-默认参数值"},{default:t(()=>[n("5.4. 默认参数值")]),_:1})])])]),s("li",null,[a(e,{to:"#_6-继承-extend"},{default:t(()=>[n("6. 继承（@extend）")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_6-1-何时使用继承"},{default:t(()=>[n("6.1 何时使用继承?")]),_:1})]),s("li",null,[a(e,{to:"#_6-2-继承的工作细节"},{default:t(()=>[n("6.2 继承的工作细节")]),_:1})]),s("li",null,[a(e,{to:"#_6-3-使用继承的最佳实践"},{default:t(()=>[n("6.3 使用继承的最佳实践")]),_:1})])])]),s("li",null,[a(e,{to:"#参考"},{default:t(()=>[n("参考")]),_:1})])])]),m,s("p",null,[s("a",b,[n("Sass文档"),a(c)])])])}const x=i(d,[["render",h],["__file","scss.html.vue"]]);export{x as default};
