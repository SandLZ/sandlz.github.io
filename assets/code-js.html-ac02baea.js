import{_ as p,M as o,p as c,q as l,R as n,t as s,N as t,a1 as a}from"./framework-201fec1f.js";const i={},u=n("h1",{id:"javascript-风格指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-风格指南","aria-hidden":"true"},"#"),s(" JavaScript 风格指南")],-1),r=n("p",null,"使用 JavaScript 最合理的方式(Airbnb)。",-1),d={href:"https://lin-123.github.io/javascript/#%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ol><li><a href="#%E7%B1%BB%E5%9E%8B">类型</a></li><li><a href="#%E5%BC%95%E7%94%A8">引用</a></li><li><a href="#%E5%AF%B9%E8%B1%A1">对象</a></li><li><a href="#%E6%95%B0%E7%BB%84">数组</a></li><li><a href="#%E8%A7%A3%E6%9E%84">解构</a></li><li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a></li><li><a href="#%E5%87%BD%E6%95%B0">函数</a></li><li><a href="#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0">箭头函数</a></li><li><a href="#%E7%B1%BB%E4%B8%8E%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">类与构造函数</a></li><li><a href="#%E6%A8%A1%E5%9D%97">模块</a></li><li><a href="#%E8%BF%AD%E4%BB%A3%E5%99%A8%E4%B8%8E%E7%94%9F%E6%88%90%E5%99%A8">迭代器与生成器</a></li><li><a href="#%E5%B1%9E%E6%80%A7">属性</a></li><li><a href="#%E5%8F%98%E9%87%8F">变量</a></li><li><a href="#%E6%8F%90%E5%8D%87">提升</a></li><li><a href="#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6%E4%B8%8E%E7%9B%B8%E7%AD%89">比较运算符与相等</a></li><li><a href="#%E5%9D%97">块</a></li><li><a href="#%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5">控制语句</a></li><li><a href="#%E6%B3%A8%E9%87%8A">注释</a></li><li><a href="#%E7%A9%BA%E6%A0%BC">空格</a></li><li><a href="#%E9%80%97%E5%8F%B7">逗号</a></li><li><a href="#%E5%88%86%E5%8F%B7">分号</a></li><li><a href="#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E4%B8%8E%E5%BC%BA%E5%88%B6%E8%BD%AC%E6%8D%A2">类型转换与强制转换</a></li><li><a href="#%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83">命名规范</a></li><li><a href="#get-set-%E8%AE%BF%E9%97%AE%E5%99%A8">Get-Set 访问器</a></li><li><a href="#%E4%BA%8B%E4%BB%B6">事件</a></li><li><a href="#jquery">jQuery</a></li><li><a href="#ecmascript-5-%E5%85%BC%E5%AE%B9%E6%80%A7">ECMAScript 5 兼容性</a></li><li><a href="#ecmascript-6-es-2015-%E9%A3%8E%E6%A0%BC">ECMAScript 6+ (ES 2015+) 风格</a></li><li><a href="#%E6%A0%87%E5%87%86%E5%BA%93">标准库</a></li></ol><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><p><a name="1.1"></a><a name="types--primitives"></a></p><ul><li><p><a href="#types--primitives">1.1</a> 基本类型: 你可以直接获取到基本类型的值</p><ul><li><code>string</code></li><li><code>number</code></li><li><code>boolean</code></li><li><code>null</code></li><li><code>undefined</code></li><li><code>symbol</code></li><li><code>bigint</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> foo

bar <span class="token operator">=</span> <span class="token number">9</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span> <span class="token comment">// =&gt; 1, 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>由于 Symbols 和 BigInts 不能被正确的 polyfill。所以不应在不能原生支持这些类型的环境或浏览器中使用他们。</li></ul></li></ul><p><a name="1.2"></a><a name="types--complex"></a></p><ul><li><p><a href="#types--complex">1.2</a> 复杂类型: 复杂类型赋值是获取到他的引用的值。</p><ul><li><code>object</code></li><li><code>array</code></li><li><code>function</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> foo

bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; 9, 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 回到顶部</a></strong></p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p><a name="2.1"></a><a name="references--prefer-const"></a></p>`,10),v=n("a",{href:"#references--prefer-const"},"2.1",-1),m=n("code",null,"const",-1),b=n("code",null,"var",-1),g={href:"http://eslint.org/docs/rules/prefer-const.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"prefer-const",-1),f={href:"http://eslint.org/docs/rules/no-const-assign.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"no-const-assign",-1),_=a(`<blockquote><p>为什么？因为这个能确保你不会改变你的初始值，重复引用会导致 bug 并且使代码变得难以理解。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w=n("p",null,[n("a",{name:"2.2"}),n("a",{name:"references--disallow-var"})],-1),j=n("a",{href:"#references--disallow-var"},"2.2",-1),x=n("code",null,"let",-1),E=n("code",null,"var",-1),q={href:"http://eslint.org/docs/rules/no-var.html",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"no-var",-1),B=a(`<blockquote><p>为什么？因为 <code>let</code> 是块级作用域，而 <code>var</code> 是函数级作用域。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">// good, use the let.</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S=a(`<p><a name="2.3"></a><a name="references--block-scope"></a></p><ul><li><p><a href="#references--block-scope">2.3</a> 注意：<code>let</code> 和 <code>const</code> 都是块级作用域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// const 和 let 都只存在于它被定义的那个块级作用域。</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p><a name="3.1"></a><a name="objects--no-new"></a></p>`,5),N=n("a",{href:"#objects--no-new"},"3.1",-1),D={href:"http://eslint.org/docs/rules/no-new-object.html",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"no-new-object",-1),O=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=a(`<p><a name="3.2"></a><a name="es6-computed-properties"></a></p><ul><li><p><a href="#es6-computed-properties">3.2</a> 使用计算属性名创建一个带有动态属性名的对象。</p><blockquote><p>为什么？因为这可以使你在同一个地方定义所有对象属性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a key named </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
  
<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="3.3"></a><a name="es6-object-shorthand"></a></p>`,3),T=n("a",{href:"#es6-object-shorthand"},"3.3",-1),F={href:"http://eslint.org/docs/rules/object-shorthand.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"object-shorthand",-1),z=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function-variable function">addValue</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token comment">// 对象的方法</span>
  <span class="token function">addValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L=n("p",null,[n("a",{name:"3.4"}),n("a",{name:"es6-object-concise"})],-1),J=n("a",{href:"#es6-object-concise"},"3.4",-1),$={href:"http://eslint.org/docs/rules/object-shorthand.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"object-shorthand",-1),R=a(`<blockquote><p>为什么？因为这样写的更少且可读性更高。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&quot;Luke Skywalker&quot;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lukeSkywalker</span><span class="token operator">:</span> lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G=a(`<p><a name="3.5"></a><a name="objects--grouped-shorthand"></a></p><ul><li><p><a href="#objects--grouped-shorthand">3.5</a> 将你的所有缩写放在对象声明的前面。</p><blockquote><p>为什么？因为这样能更方便地知道有哪些属性用了缩写。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> anakinSkywalker <span class="token operator">=</span> <span class="token string">&quot;Anakin Skywalker&quot;</span>
<span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&quot;Luke Skywalker&quot;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  lukeSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="3.6"></a><a name="objects--quoted-props"></a></p>`,3),H=n("a",{href:"#objects--quoted-props"},"3.6",-1),V=n("code",null,"''",-1),W={href:"http://eslint.org/docs/rules/quote-props.html",target:"_blank",rel:"noopener noreferrer"},Q=n("code",null,"quote-props",-1),U=a(`<blockquote><p>为什么？通常我们认为这种方式主观上更易读。不仅优化了代码高亮，而且也更容易被许多 JS 引擎优化。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> bad <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;foo&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;data-blah&#39;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> good <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;data-blah&#39;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Y=a(`<p><a name="3.7"></a><a name="objects--prototype-builtins"></a></p><ul><li><p><a href="#objects--prototype-builtins">3.7</a> 不要直接调用 <code>Object.prototype</code>上的方法，如 <code>hasOwnProperty</code>、<code>propertyIsEnumerable</code>、<code>isPrototypeOf</code>。</p><blockquote><p>为什么？在一些有问题的对象上，这些方法可能会被屏蔽掉，如：<code>{ hasOwnProperty: false }</code> 或空对象 <code>Object.create(null)</code></p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> has <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty <span class="token comment">// 在模块作用域内做一次缓存。</span>
<span class="token comment">/* or */</span>
<span class="token keyword">import</span> has <span class="token keyword">from</span> <span class="token string">&#39;has&#39;</span> <span class="token comment">// https://www.npmjs.com/package/has</span>
<span class="token comment">// ...</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">has</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="3.8"></a><a name="objects--rest-spread"></a></p>`,3),K=n("a",{href:"#objects--rest-spread"},"3.8",-1),X=n("code",null,"...",-1),Z={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"},nn=n("code",null,"Object.assign",-1),sn=n("code",null,"...",-1),an={href:"https://eslint.org/docs/rules/prefer-object-spread",target:"_blank",rel:"noopener noreferrer"},en=n("code",null,"prefer-object-spread",-1),tn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// very bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// this mutates \`original\` ಠ_ಠ</span>
<span class="token keyword">delete</span> copy<span class="token punctuation">.</span>a <span class="token comment">// so does this</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// good es6 扩展运算符 ...</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token comment">// 浅拷贝</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>original<span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// rest 解构运算符</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>noA <span class="token punctuation">}</span> <span class="token operator">=</span> copy <span class="token comment">// noA =&gt; { b: 2, c: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),pn=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p><a name="4.1"></a><a name="arrays--literals"></a></p>',3),on=n("a",{href:"#arrays--literals"},"4.1",-1),cn={href:"http://eslint.org/docs/rules/no-array-constructor.html",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"no-array-constructor",-1),un=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),rn=n("p",null,[n("a",{name:"4.2"}),n("a",{name:"arrays--push"})],-1),dn=n("a",{href:"#arrays--push"},"4.2",-1),kn={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push",target:"_blank",rel:"noopener noreferrer"},vn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> someStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// bad</span>
someStack<span class="token punctuation">[</span>someStack<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abracadabra&#39;</span>

<span class="token comment">// good</span>
someStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),mn=a(`<p><a name="4.3"></a><a name="es6-array-spreads"></a></p><ul><li><p><a href="#es6-array-spreads">4.3</a> 用扩展运算符做数组浅拷贝，类似上面的对象浅拷贝。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> i

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="4.4"></a><a name="arrays--from-iterable"></a></p>`,3),bn=n("a",{href:"#arrays--from-iterable"},"4.4",-1),gn=n("code",null,"...",-1),hn={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from",target:"_blank",rel:"noopener noreferrer"},fn=n("code",null,"Array.from",-1),yn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.foo&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> nodes <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>foo<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_n=n("p",null,[n("a",{name:"4.5"}),n("a",{name:"arrays--from-array-like"})],-1),wn=n("a",{href:"#arrays--from-array-like"},"4.5",-1),jn={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from",target:"_blank",rel:"noopener noreferrer"},xn=n("code",null,"Array.from",-1),En=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arrLike <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),qn=n("p",null,[n("a",{name:"4.6"}),n("a",{name:"arrays--mapping"})],-1),An=n("a",{href:"#arrays--mapping"},"4.6",-1),Bn={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from",target:"_blank",rel:"noopener noreferrer"},Sn=n("code",null,"Array.from",-1),Nn=n("code",null,"...",-1),Dn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>foo<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Cn=n("p",null,[n("a",{name:"4.7"}),n("a",{name:"arrays--callback-return"})],-1),On=n("a",{href:"#arrays--callback-return"},"4.7",-1),In=n("a",{href:"#arrows--implicit-return"},"8.2",-1),Tn={href:"http://eslint.org/docs/rules/array-callback-return",target:"_blank",rel:"noopener noreferrer"},Fn=n("code",null,"array-callback-return",-1),Pn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good 函数只有一个语句</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// bad - 没有返回值， 因为在第一次迭代后 acc 就变成 undefined 了</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flatten <span class="token operator">=</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flatten <span class="token operator">=</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> flatten<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
inbox<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> subject<span class="token punctuation">,</span> author <span class="token punctuation">}</span> <span class="token operator">=</span> msg
  <span class="token keyword">if</span> <span class="token punctuation">(</span>subject <span class="token operator">===</span> <span class="token string">&#39;Mockingbird&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> author <span class="token operator">===</span> <span class="token string">&#39;Harper Lee&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
inbox<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> subject<span class="token punctuation">,</span> author <span class="token punctuation">}</span> <span class="token operator">=</span> msg
  <span class="token keyword">if</span> <span class="token punctuation">(</span>subject <span class="token operator">===</span> <span class="token string">&#39;Mockingbird&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> author <span class="token operator">===</span> <span class="token string">&#39;Harper Lee&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),zn=a(`<p><a name="4.8"></a><a name="arrays--bracket-newline"></a></p><ul><li><p><a href="#arrays--bracket-newline">4.8</a> 如果一个数组有很多行，在数组的 <code>[</code> 后和 <code>]</code> 前断行。请看下面示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> objectInArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> numberInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
  <span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> objectInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> numberInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token number">1</span><span class="token punctuation">,</span> 
    <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="解构" tabindex="-1"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h2><p><a name="5.1"></a><a name="destructuring--object"></a></p>`,5),Ln=n("a",{href:"#destructuring--object"},"5.1",-1),Jn={href:"https://eslint.org/docs/rules/prefer-destructuring",target:"_blank",rel:"noopener noreferrer"},$n=n("code",null,"prefer-destructuring",-1),Mn=a(`<blockquote><p>为什么？解构使您不必为这些属性创建临时引用，并且避免重复引用对象。重复引用对象将造成代码重复、增加阅读次数、提高犯错概率。Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> user
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Rn=n("p",null,[n("a",{name:"5.2"}),n("a",{name:"destructuring--array"})],-1),Gn=n("a",{href:"#destructuring--array"},"5.2",-1),Hn={href:"https://eslint.org/docs/rules/prefer-destructuring",target:"_blank",rel:"noopener noreferrer"},Vn=n("code",null,"prefer-destructuring",-1),Wn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Qn=a(`<p><a name="5.3"></a><a name="destructuring--object-over-array"></a></p><ul><li><p><a href="#destructuring--object-over-array">5.3</a> 多个返回值用对象的解构，而不是数组解构。</p><blockquote><p>为什么？你可以在后期添加新的属性或者变换变量的顺序而不会破坏原有的引用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 然后就是见证奇迹的时刻</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者需要想一想返回值的顺序</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> __<span class="token punctuation">,</span> top<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// oops，奇迹又发生了</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者只需要选择他想用的值就好了</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> top <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ back to top</a></strong></p><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p><a name="6.1"></a><a name="strings--quotes"></a></p>`,5),Un=n("a",{href:"#strings--quotes"},"6.1",-1),Yn=n("code",null,"''",-1),Kn={href:"https://eslint.org/docs/rules/quotes.html",target:"_blank",rel:"noopener noreferrer"},Xn=n("code",null,"quotes",-1),Zn=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;Capt. Janeway&quot;</span>

<span class="token comment">// bad - 模板字符串应该包含插入文字或换行</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Capt. Janeway</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Capt. Janeway&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ns=a(`<p><a name="6.2"></a><a name="strings--line-length"></a></p><ul><li><p><a href="#strings--line-length">6.2</a> 超过 100 个字符的字符串不应该用字符串连接成多行。(???)</p><blockquote><p>为什么？字符串折行增加编写难度且不易被搜索。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because \\
of Batman. When you stop to think about how Batman had anything to do \\
with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because &#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;of Batman. When you stop to think about how Batman had anything to do &#39;</span> <span class="token operator">+</span>
    <span class="token string">&#39;with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="6.3"></a><a name="es6-template-literals"></a></p>`,3),ss=n("a",{href:"#es6-template-literals"},"6.3",-1),as={href:"https://eslint.org/docs/rules/prefer-template.html",target:"_blank",rel:"noopener noreferrer"},es=n("code",null,"prefer-template",-1),ts={href:"https://eslint.org/docs/rules/template-curly-spacing",target:"_blank",rel:"noopener noreferrer"},ps=n("code",null,"template-curly-spacing",-1),os=a(`<blockquote><p>为什么？模板字符串更具可读性、多行语法更简洁以及更方便插入变量到字符串里头。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;How are you, &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;?&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;How are you, &#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),cs=n("p",null,[n("a",{name:"6.4"}),n("a",{name:"strings--eval"})],-1),ls=n("a",{href:"#strings--eval"},"6.4",-1),is=n("code",null,"eval()",-1),us={href:"https://eslint.org/docs/rules/no-eval",target:"_blank",rel:"noopener noreferrer"},rs=n("code",null,"no-eval",-1),ds=n("p",null,[n("a",{name:"6.5"}),n("a",{name:"strings--escaping"})],-1),ks=n("a",{href:"#strings--escaping"},"6.5",-1),vs={href:"http://eslint.org/docs/rules/no-useless-escape",target:"_blank",rel:"noopener noreferrer"},ms=n("code",null,"no-useless-escape",-1),bs=a(`<blockquote><p>为什么？反斜线可读性差，因此仅当必要时才使用它。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;\\&#39;this\\&#39; \\i\\s \\&quot;quoted\\&quot;&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;\\&#39;this\\&#39; is &quot;quoted&quot;&#39;</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">my name is &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),gs=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p><a name="7.1"></a><a name="functions--declarations"></a></p>',3),hs=n("a",{href:"#functions--declarations"},"7.1",-1),fs={href:"http://eslint.org/docs/rules/func-style",target:"_blank",rel:"noopener noreferrer"},ys=n("code",null,"func-style",-1),_s=n("pre",null,[n("code",null,`> 函数表达式： const func = function () {}

> 函数声明： function func() {}

> 为什么？函数声明会发生提升，这意味着在一个文件里函数很容易在其被定义之前就被引用了。这样伤害了代码可读性和可维护性。如果你发现一个函数又大又复杂，且这个函数妨碍了这个文件其他部分的理解性，你应当单独把这个函数提取成一个单独的模块。不管这个名字是不是由一个确定的变量推断出来的，别忘了给表达式清晰的命名（这在现代浏览器和类似 babel 编译器中很常见）。这消除了由匿名函数在错误调用栈产生的所有假设。 ([讨论](https://github.com/airbnb/javascript/issues/794))
`)],-1),ws={href:"https://github.com/airbnb/javascript#functions",target:"_blank",rel:"noopener noreferrer"},js=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token comment">// lexical name distinguished from the variable-referenced invocation(s)</span>
<span class="token comment">// 函数表达式名和声明的函数名是不一样的</span>
<span class="token keyword">const</span> <span class="token function-variable function">short</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">longUniqueMoreDescriptiveLexicalFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),xs=n("p",null,[n("a",{name:"7.2"}),n("a",{name:"functions--iife"})],-1),Es=n("a",{href:"#functions--iife"},"7.2",-1),qs={href:"http://eslint.org/docs/rules/wrap-iife.html",target:"_blank",rel:"noopener noreferrer"},As=n("code",null,"wrap-iife",-1),Bs=a(`<blockquote><p>立即执行函数：Immediately Invoked Function expression = IIFE。 为什么？一个立即调用的函数表达式是一个单元 - 把它和它的调用者（圆括号）包裹起来，使代码读起来更清晰。 另外，在模块化世界里，你几乎用不着 IIFE。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// immediately-invoked function expression (IIFE)</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome to the Internet. Please follow me.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ss=n("p",null,[n("a",{name:"7.3"}),n("a",{name:"functions--in-blocks"})],-1),Ns=n("a",{href:"#functions--in-blocks"},"7.3",-1),Ds=n("code",null,"if",-1),Cs=n("code",null,"while",-1),Os={href:"http://eslint.org/docs/rules/no-loop-func.html",target:"_blank",rel:"noopener noreferrer"},Is=n("code",null,"no-loop-func",-1),Ts=a(`<p><a name="7.4"></a><a name="functions--note-on-blocks"></a></p><ul><li><p><a href="#functions--note-on-blocks">7.4</a> **注意：**ECMA-262 中对块（<code>block</code>）的定义是： 一系列的语句。但是函数声明不是一个语句， 函数表达式是一个语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>currentUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Nope.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> test
<span class="token keyword">if</span> <span class="token punctuation">(</span>currentUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Yup.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="7.5"></a><a name="functions--arguments-shadow"></a></p><ul><li><p><a href="#functions--arguments-shadow">7.5</a> 不要用 <code>arguments</code> 命名参数。他的优先级高于每个函数作用域自带的 <code>arguments</code> 对象，这会导致函数自带的 <code>arguments</code> 值被覆盖。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> arguments</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="7.6"></a><a name="es6-rest"></a></p>`,5),Fs=n("a",{href:"#es6-rest"},"7.6",-1),Ps=n("code",null,"arguments",-1),zs=n("code",null,"...",-1),Ls={href:"http://eslint.org/docs/rules/prefer-rest-params",target:"_blank",rel:"noopener noreferrer"},Js=n("code",null,"prefer-rest-params",-1),$s=a(`<blockquote><p>为什么？<code>...</code> 明确你想用哪个参数。而且收集参数是真数组，而不是类似数组的 <code>arguments</code>。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ms=a(`<p><a name="7.7"></a><a name="es6-default-parameters"></a></p><ul><li><p><a href="#es6-default-parameters">7.7</a> 用默认参数语法而不是在函数里对参数重新赋值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// really bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不！我们不该修改 arguments</span>
  <span class="token comment">// 第二：如果 opts 的值为 false, 它会被赋值为 {}</span>
  <span class="token comment">// 虽然你想这么写，但是这个会带来一些微妙的 bug。</span>
  opts <span class="token operator">=</span> opts <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// still bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="7.8"></a><a name="functions--default-side-effects"></a></p><ul><li><p><a href="#functions--default-side-effects">7.8</a> 避免默认参数的副作用。</p><blockquote><p>为什么？他会令人迷惑不解，比如下面这个，a 到底等于几，这个需要想一下。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> b<span class="token operator">++</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="7.9"></a><a name="functions--defaults-last"></a></p>`,5),Rs=n("a",{href:"#functions--defaults-last"},"7.9",-1),Gs={href:"https://eslint.org/docs/rules/default-param-last",target:"_blank",rel:"noopener noreferrer"},Hs=n("code",null,"default-param-last",-1),Vs=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ws=n("p",null,[n("a",{name:"7.10"}),n("a",{name:"functions--constructor"})],-1),Qs=n("a",{href:"#functions--constructor"},"7.10",-1),Us={href:"http://eslint.org/docs/rules/no-new-func",target:"_blank",rel:"noopener noreferrer"},Ys=n("code",null,"no-new-func",-1),Ks=a(`<blockquote><p>为什么？以这种方式创建函数将类似于字符串 eval()，存在漏洞。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return a + b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// still bad</span>
<span class="token keyword">var</span> subtract <span class="token operator">=</span> <span class="token function">Function</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return a - b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Xs=n("p",null,[n("a",{name:"7.11"}),n("a",{name:"functions--signature-spacing"})],-1),Zs=n("a",{href:"#functions--signature-spacing"},"7.11",-1),na={href:"http://eslint.org/docs/rules/space-before-function-paren",target:"_blank",rel:"noopener noreferrer"},sa=n("code",null,"space-before-function-paren",-1),aa={href:"http://eslint.org/docs/rules/space-before-blocks",target:"_blank",rel:"noopener noreferrer"},ea=n("code",null,"space-before-blocks",-1),ta=a(`<blockquote><p>为什么？统一性好，而且在你添加/删除一个名字的时候不需要添加/删除空格。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">h</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),pa=n("p",null,[n("a",{name:"7.12"}),n("a",{name:"functions--mutate-params"})],-1),oa=n("a",{href:"#functions--mutate-params"},"7.12",-1),ca={href:"http://eslint.org/docs/rules/no-param-reassign.html",target:"_blank",rel:"noopener noreferrer"},la=n("code",null,"no-param-reassign",-1),ia=a(`<blockquote><p>为什么？操作参数对象对原始调用者会导致意想不到的副作用。就是不要改参数的数据结构，保留参数原始值和数据结构。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> obj<span class="token punctuation">.</span>key <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ua=n("p",null,[n("a",{name:"7.13"}),n("a",{name:"functions--reassign-params"})],-1),ra=n("a",{href:"#functions--reassign-params"},"7.13",-1),da={href:"http://eslint.org/docs/rules/no-param-reassign.html",target:"_blank",rel:"noopener noreferrer"},ka=n("code",null,"no-param-reassign",-1),va=a(`<blockquote><p>为什么？参数重新赋值会导致意外行为，尤其是对 <code>arguments</code>。这也会导致优化问题，特别是在 V8 引擎里。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> a <span class="token operator">||</span> <span class="token number">1</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f4</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ma=n("p",null,[n("a",{name:"7.14"}),n("a",{name:"functions--spread-vs-apply"})],-1),ba=n("a",{href:"#functions--spread-vs-apply"},"7.14",-1),ga={href:"http://eslint.org/docs/rules/prefer-spread",target:"_blank",rel:"noopener noreferrer"},ha=n("code",null,"prefer-spread",-1),fa=a(`<blockquote><p>为什么？这样更清晰，你不必提供上下文（即指定 this 值），而且你不能轻易地用 <code>apply</code> 来组成 <code>new</code>。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>console<span class="token punctuation">,</span> x<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>x<span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Date<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ya=a(`<p><a name="7.15"></a><a name="functions--signature-invocation-indentation"></a></p><ul><li><p><a href="#functions--signature-invocation-indentation">7.15</a> 调用或者编写一个包含多个参数的函数的缩进，应该像这个指南里的其他多行代码写法一样——即每行只包含一个参数，每行逗号结尾。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">bar<span class="token punctuation">,</span> 
             baz<span class="token punctuation">,</span> 
             quux</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>
  <span class="token parameter">bar<span class="token punctuation">,</span> 
  baz<span class="token punctuation">,</span> 
  quux</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> 
  bar<span class="token punctuation">,</span> 
  baz<span class="token punctuation">)</span>

<span class="token comment">// good</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  foo<span class="token punctuation">,</span> 
  bar<span class="token punctuation">,</span> 
  baz
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2><p><a name="8.1"></a><a name="arrows--use-them"></a></p>`,5),_a=n("a",{href:"#arrows--use-them"},"8.1",-1),wa={href:"http://eslint.org/docs/rules/prefer-arrow-callback.html",target:"_blank",rel:"noopener noreferrer"},ja=n("code",null,"prefer-arrow-callback",-1),xa={href:"http://eslint.org/docs/rules/arrow-spacing.html",target:"_blank",rel:"noopener noreferrer"},Ea=n("code",null,"arrow-spacing",-1),qa=a(`<blockquote><p>为什么？箭头函数中的 <code>this</code> 与定义该函数的上下文中的 <code>this</code> 一致，这通常才是你想要的。而且箭头函数是更简洁的语法。</p></blockquote><blockquote><p>什么时候不用箭头函数：如果你的函数逻辑较复杂，你应该把它单独写入一个命名函数里头。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Aa=n("p",null,[n("a",{name:"8.2"}),n("a",{name:"arrows--implicit-return"})],-1),Ba=n("a",{href:"#arrows--implicit-return"},"8.2",-1),Sa={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",target:"_blank",rel:"noopener noreferrer"},Na=n("code",null,"return",-1),Da={href:"https://eslint.org/docs/rules/arrow-parens.html",target:"_blank",rel:"noopener noreferrer"},Ca=n("code",null,"arrow-parens",-1),Oa={href:"https://eslint.org/docs/rules/arrow-body-style.html",target:"_blank",rel:"noopener noreferrer"},Ia=n("code",null,"arrow-body-style",-1),Ta=a(`<blockquote><p>为什么？语法糖，当多个函数链在一起的时候好读。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 没有明显的 return 语句，可能存在副作用。</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当 callback 返回 true 时...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// bad</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  bool <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Fa=a(`<p><a name="8.3"></a><a name="arrows--paren-wrap"></a></p><ul><li><p><a href="#arrows--paren-wrap">8.3</a> 如果表达式涉及多行，把他包裹在圆括号里以提高可读性。</p><blockquote><p>为什么？这样能清晰地显示函数的开始位置和结束位置。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">httpMethod</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    httpMagicObjectWithAVeryLongName<span class="token punctuation">,</span>
    httpMethod<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">httpMethod</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
    httpMagicObjectWithAVeryLongName<span class="token punctuation">,</span>
    httpMethod<span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="8.4"></a><a name="arrows--one-arg-parens"></a></p>`,3),Pa=n("a",{href:"#arrows--one-arg-parens"},"8.4",-1),za={href:"https://eslint.org/docs/rules/arrow-parens.html",target:"_blank",rel:"noopener noreferrer"},La=n("code",null,"arrow-parens",-1),Ja=a(`<blockquote><p>为什么？当你想要添加或删除参数时能比较省事。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">number</span> <span class="token operator">=&gt;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A long string with the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. It’s so long that we don’t want it to take up space on the .map line!</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A long string with the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. It’s so long that we don’t want it to take up space on the .map line!</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$a=n("p",null,[n("a",{name:"8.5"}),n("a",{name:"arrows--confusing"})],-1),Ma=n("a",{href:"#arrows--confusing"},"8.5",-1),Ra=n("code",null,"=>",-1),Ga=n("code",null,"<=",-1),Ha=n("code",null,">=",-1),Va={href:"http://eslint.org/docs/rules/no-confusing-arrow",target:"_blank",rel:"noopener noreferrer"},Wa=n("code",null,"no-confusing-arrow",-1),Qa=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">256</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>largeSize <span class="token operator">:</span> item<span class="token punctuation">.</span>smallSize

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>height <span class="token operator">&gt;=</span> <span class="token number">256</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>largeSize <span class="token operator">:</span> item<span class="token punctuation">.</span>smallSize

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>height <span class="token operator">&lt;=</span> <span class="token number">256</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>largeSize <span class="token operator">:</span> item<span class="token punctuation">.</span>smallSize<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">itemHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> height<span class="token punctuation">,</span> largeSize<span class="token punctuation">,</span> smallSize <span class="token punctuation">}</span> <span class="token operator">=</span> item
  <span class="token keyword">return</span> height <span class="token operator">&lt;=</span> <span class="token number">256</span> <span class="token operator">?</span> largeSize <span class="token operator">:</span> smallSize
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ua=n("p",null,[n("a",{name:"8.6"}),n("a",{name:"whitespace--implicit-arrow-linebreak"})],-1),Ya=n("a",{href:"#whitespace--implicit-arrow-linebreak"},"8.6",-1),Ka={href:"https://eslint.org/docs/rules/implicit-arrow-linebreak",target:"_blank",rel:"noopener noreferrer"},Xa=n("code",null,"implicit-arrow-linebreak",-1),Za=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token function">bar</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token punctuation">(</span>bar<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">bar</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    bar
<span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ne=a(`<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="类与构造函数" tabindex="-1"><a class="header-anchor" href="#类与构造函数" aria-hidden="true">#</a> 类与构造函数</h2><p><a name="9.1"></a><a name="constructors--use-class"></a></p><ul><li><p><a href="#constructors--use-class">9.1</a> 使用 <code>class</code> 语法。避免直接操作 <code>prototype</code>。</p><blockquote><p>为什么？<code>class</code> 语法更简洁更易理解。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token class-name">Queue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="9.2"></a><a name="constructors--extends"></a></p><ul><li><p><a href="#constructors--extends">9.2</a> 用 <code>extends</code> 实现继承。</p><blockquote><p>为什么？它是一种内置的方法来继承原型功能而不破坏 <code>instanceof</code>。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inherits&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">PeekableQueue</span><span class="token punctuation">(</span><span class="token parameter">contents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Queue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> contents<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PeekableQueue<span class="token punctuation">,</span> Queue<span class="token punctuation">)</span>
<span class="token class-name">PeekableQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">PeekableQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="9.3"></a><a name="constructors--chaining"></a></p><ul><li><p><a href="#constructors--chaining">9.3</a> 方法可以返回 <code>this</code> 来实现链式调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
<span class="token punctuation">}</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
luke<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="9.4"></a><a name="constructors--tostring"></a></p><ul><li><p><a href="#constructors--tostring">9.4</a> 自己写 <code>toString()</code> 方法是可以的，但需要保证它可以正常工作且没有副作用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;no name&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>

  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Jedi - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="9.5"></a><a name="constructors--no-useless"></a></p>`,11),se=n("a",{href:"#constructors--no-useless"},"9.5",-1),ae={href:"http://eslint.org/docs/rules/no-useless-constructor",target:"_blank",rel:"noopener noreferrer"},ee=n("code",null,"no-useless-constructor",-1),te=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Rey</span> <span class="token keyword">extends</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这种构造函数是不需要写的</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Rey</span> <span class="token keyword">extends</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Rey&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),pe=n("p",null,[n("a",{name:"9.6"}),n("a",{name:"classes--no-duplicate-members"})],-1),oe=n("a",{href:"#classes--no-duplicate-members"},"9.6",-1),ce={href:"http://eslint.org/docs/rules/no-dupe-class-members",target:"_blank",rel:"noopener noreferrer"},le=n("code",null,"no-dupe-class-members",-1),ie=a(`<blockquote><p>为什么？重复定义类成员只会使用最后一个被定义的 —— 重复本身也是一个 bug.</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ue=n("p",null,[n("a",{name:"classes--methods-use-this"})],-1),re=n("a",{href:"#classes--methods-use-this"},"9.7",-1),de=n("code",null,"this",-1),ke={href:"https://eslint.org/docs/rules/class-methods-use-this",target:"_blank",rel:"noopener noreferrer"},ve=n("code",null,"class-methods-use-this",-1),me=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good - this 被使用了</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bar<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good - constructor 不一定要使用 this</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good - 静态方法不需要使用 this</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),be=a(`<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h2><p><a name="10.1"></a><a name="modules--use-them"></a></p><ul><li><p><a href="#modules--use-them">10.1</a> 使用（<code>import</code>/<code>export</code>）模块而不是非标准的模块系统。你可以随时转到你喜欢的模块系统。</p><blockquote><p>为什么？模块化是未来，让我们现在就开启未来吧。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> AirbnbStyleGuide <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6

<span class="token comment">// ok</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6

<span class="token comment">// best</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="10.2"></a><a name="modules--no-wildcard"></a></p><ul><li><p><a href="#modules--no-wildcard">10.2</a> 不要用 <code>import</code> 通配符， 即 <code>*</code> 这种方式。</p><blockquote><p>为什么？这确保你有单个默认的导出。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="10.3"></a><a name="modules--no-export-from-import"></a></p><ul><li><p><a href="#modules--no-export-from-import">10.3</a> 不要直接从 <code>import</code> 中直接 <code>export</code>。</p><blockquote><p>为什么？虽然只写一行很简洁，但是使用明确 <code>import</code> 和明确的 <code>export</code> 来保证一致性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// filename es6.js</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> es6 <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>

<span class="token comment">// good</span>
<span class="token comment">// filename es6.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./AirbnbStyleGuide&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="10.4"></a><a name="modules--no-duplicate-imports"></a></p>`,9),ge=n("a",{href:"#modules--no-duplicate-imports"},"10.4",-1),he=n("code",null,"import",-1),fe={href:"http://eslint.org/docs/rules/no-duplicate-imports",target:"_blank",rel:"noopener noreferrer"},ye=n("code",null,"no-duplicate-imports",-1),_e=a(`<blockquote><p>为什么？多行导入同一路径将使代码变得难以维护。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>
<span class="token comment">// … 其他导入 … //</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> named1<span class="token punctuation">,</span> named2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo<span class="token punctuation">,</span> <span class="token punctuation">{</span> named1<span class="token punctuation">,</span> named2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
  named1<span class="token punctuation">,</span> 
  named2 
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),we=n("p",null,[n("a",{name:"10.5"}),n("a",{name:"modules--no-mutable-exports"})],-1),je=n("a",{href:"#modules--no-mutable-exports"},"10.5",-1),xe={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md",target:"_blank",rel:"noopener noreferrer"},Ee=n("code",null,"import/no-mutable-exports",-1),qe=a(`<blockquote><p>为什么？变化通常都是需要避免，特别是当你要输出可变的绑定。虽然在某些场景下可能需要这种技术，但总的来说应该导出常量。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ae=n("p",null,[n("a",{name:"10.6"}),n("a",{name:"modules--prefer-default-export"})],-1),Be=n("a",{href:"#modules--prefer-default-export"},"10.6",-1),Se=n("code",null,"export default",-1),Ne={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md",target:"_blank",rel:"noopener noreferrer"},De=n("code",null,"import/prefer-default-export",-1),Ce=a(`<blockquote><p>为什么？鼓励使用更多文件，每个文件只导出一次，这样可读性和可维护性更好。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="10.7"></a><a name="modules--imports-first"></a></p>`,3),Oe=n("a",{href:"#modules--imports-first"},"10.7",-1),Ie=n("code",null,"import",-1),Te={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md",target:"_blank",rel:"noopener noreferrer"},Fe=n("code",null,"import/first",-1),Pe=a(`<blockquote><p>为什么？因为 <code>import</code> 会被提升到代码最前面运行，因此将他们放在最前面以防止发生意外行为。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>
foo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>
<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span>

foo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ze=a(`<p><a name="10.8"></a><a name="modules--multiline-imports-over-newlines"></a></p><ul><li><p><a href="#modules--multiline-imports-over-newlines">10.8</a> 多行 <code>import</code> 应该缩进，就像多行数组和对象字面量一样。</p><blockquote><p>为什么？花括号与样式指南中每个其他花括号块遵循相同的缩进规则，逗号也是。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> longNameA<span class="token punctuation">,</span> longNameB<span class="token punctuation">,</span> longNameC<span class="token punctuation">,</span> longNameD<span class="token punctuation">,</span> longNameE <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> 
    longNameA<span class="token punctuation">,</span> 
    longNameB<span class="token punctuation">,</span> 
    longNameC<span class="token punctuation">,</span> 
    longNameD<span class="token punctuation">,</span> 
    longNameE 
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="10.9"></a><a name="modules--no-webpack-loader-syntax"></a></p>`,3),Le=n("a",{href:"#modules--no-webpack-loader-syntax"},"10.9",-1),Je=n("code",null,"import",-1),$e={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md",target:"_blank",rel:"noopener noreferrer"},Me=n("code",null,"import/no-webpack-loader-syntax",-1),Re=a(`<blockquote><p>为什么？一旦用 Webpack 语法在 import 里会把代码耦合到模块绑定器。最好是在 <code>webpack.config.js</code> 里写 webpack loader 语法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> fooSass <span class="token keyword">from</span> <span class="token string">&#39;css!sass!foo.scss&#39;</span>
<span class="token keyword">import</span> barCss <span class="token keyword">from</span> <span class="token string">&#39;style!css!bar.css&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> fooSass <span class="token keyword">from</span> <span class="token string">&#39;foo.scss&#39;</span>
<span class="token keyword">import</span> barCss <span class="token keyword">from</span> <span class="token string">&#39;bar.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ge=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="迭代器与生成器" tabindex="-1"><a class="header-anchor" href="#迭代器与生成器" aria-hidden="true">#</a> 迭代器与生成器</h2><p><a name="11.1"></a><a name="iterators--nope"></a></p>',3),He=n("a",{href:"#iterators--nope"},"11.1",-1),Ve=n("code",null,"for-in",-1),We=n("code",null,"for-of",-1),Qe={href:"http://eslint.org/docs/rules/no-iterator.html",target:"_blank",rel:"noopener noreferrer"},Ue=n("code",null,"no-iterator",-1),Ye={href:"http://eslint.org/docs/rules/no-restricted-syntax",target:"_blank",rel:"noopener noreferrer"},Ke=n("code",null,"no-restricted-syntax",-1),Xe=a(`<blockquote><p>为什么？这强调了我们不可变的规则。 处理返回值的纯函数比处理副作用更容易。</p></blockquote><blockquote><p>用数组的这些迭代方法： <code>map()</code> / <code>every()</code> / <code>filter()</code> / <code>find()</code> / <code>findIndex()</code> / <code>reduce()</code> / <code>some()</code> / ... , 用对象的这些方法 <code>Object.keys()</code> / <code>Object.values()</code> / <code>Object.entries()</code> 去产生一个数组，这样你就能去遍历对象了。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token comment">// bad</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> num
<span class="token punctuation">}</span>
sum <span class="token operator">===</span> <span class="token number">15</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>sum <span class="token operator">+=</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span>
sum <span class="token operator">===</span> <span class="token number">15</span>

<span class="token comment">// best (use the functional force)</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
sum <span class="token operator">===</span> <span class="token number">15</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  increasedByOne<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> increasedByOne<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// best (keeping it functional)</span>
<span class="token keyword">const</span> increasedByOne <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Ze=a('<p><a name="11.2"></a><a name="generators--nope"></a></p><ul><li><p><a href="#generators--nope">11.2</a> 现在暂时不要使用生成器。</p><blockquote><p>为什么？生成器目前不能很好地转换为 ES5 语法。</p></blockquote></li></ul><p><a name="11.3"></a><a name="generators--spacing"></a></p>',3),nt=n("a",{href:"#generators--spacing"},"11.3",-1),st=n("a",{href:"#generators--nope"},"我们的建议",-1),at={href:"http://eslint.org/docs/rules/generator-star-spacing",target:"_blank",rel:"noopener noreferrer"},et=n("code",null,"generator-star-spacing",-1),tt=a(`<blockquote><p>为什么？<code>function</code> 和 <code>*</code> 是同一概念关键字 - <code>*</code>不是<code>function</code>的修饰符，<code>function*</code> 是一个和<code>function</code> 不一样的独特结构。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">baz</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">quux</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span><span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token operator">*</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// very bad</span>
<span class="token keyword">function</span> 
<span class="token operator">*</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// very bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">wat</span> <span class="token operator">=</span> <span class="token keyword">function</span>
<span class="token operator">*</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),pt=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p><a name="12.1"></a><a name="properties--dot"></a></p>',3),ot=n("a",{href:"#properties--dot"},"12.1",-1),ct={href:"http://eslint.org/docs/rules/dot-notation.html",target:"_blank",rel:"noopener noreferrer"},lt=n("code",null,"dot-notation",-1),it=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">[</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">.</span>jedi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ut=a(`<p><a name="12.2"></a><a name="properties--bracket"></a></p><ul><li><p><a href="#properties--bracket">12.2</a> 当使用变量获取属性时用方括号 <code>[]</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> luke<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isJedi <span class="token operator">=</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="12.3"></a><a name="es2016-properties--exponentiation-operator"></a></p>`,3),rt=n("a",{href:"#es2016-properties--exponentiation-operator"},"12.3",-1),dt=n("code",null,"**",-1),kt={href:"https://eslint.org/docs/rules/no-restricted-properties",target:"_blank",rel:"noopener noreferrer"},vt=n("code",null,"no-restricted-properties",-1),mt=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> binary <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> binary <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),bt=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p><a name="13.1"></a><a name="variables--const"></a></p>',3),gt=n("a",{href:"#variables--const"},"13.1",-1),ht=n("code",null,"const",-1),ft=n("code",null,"let",-1),yt={href:"http://eslint.org/docs/rules/no-undef",target:"_blank",rel:"noopener noreferrer"},_t=n("code",null,"no-undef",-1),wt={href:"http://eslint.org/docs/rules/prefer-const",target:"_blank",rel:"noopener noreferrer"},jt=n("code",null,"prefer-const",-1),xt=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
superPower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> superPower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Et=n("p",null,[n("a",{name:"13.2"}),n("a",{name:"variables--one-const"})],-1),qt=n("a",{href:"#variables--one-const"},"13.2",-1),At=n("code",null,"const",-1),Bt=n("code",null,"let",-1),St={href:"http://eslint.org/docs/rules/one-var.html",target:"_blank",rel:"noopener noreferrer"},Nt=n("code",null,"one-var",-1),Dt=a(`<blockquote><p>为什么？这种方式很容易去声明新的变量，你不用去考虑把 <code>;</code> 调换成 <code>,</code>，或者引入一个只有标点的不同的变化（译者注：这里说的应该是在 Git 提交代码时显示的变化）。这种做法也可以是你在调试的时候单步每个声明语句，而不是一下跳过所有声明。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span>

<span class="token comment">// bad</span>
<span class="token comment">// （与前面的比较，找一找错误）</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ct=a(`<p><a name="13.3"></a><a name="variables--const-let-group"></a></p><ul><li><p><a href="#variables--const-let-group">13.3</a> 把<code>const</code> 和 <code>let</code> 分别放一起。</p><blockquote><p>为什么？在你需要分配一个新的变量，而这个变量依赖之前分配过的变量的时候，这种做法是有帮助的。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> i<span class="token punctuation">,</span> len<span class="token punctuation">,</span> dragonball<span class="token punctuation">,</span>
  items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// bad</span>
<span class="token keyword">let</span> i
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> dragonball
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> len

<span class="token comment">// good</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> dragonball
<span class="token keyword">let</span> i
<span class="token keyword">let</span> length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="13.4"></a><a name="variables--define-where-used"></a></p>`,3),Ot=a(`<li><p><a href="#variables--define-where-used">13.4</a> 在你需要的地方声明变量，但是要放在合理的位置。</p><blockquote><p>为什么？<code>let</code> 和 <code>const</code> 都是块级作用域而不是函数级作用域。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad - 不必要的函数调用。</span>
<span class="token keyword">function</span> <span class="token function">checkName</span><span class="token punctuation">(</span><span class="token parameter">hasName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasName <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> name
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">checkName</span><span class="token punctuation">(</span><span class="token parameter">hasName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasName <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 在需要的时候分配</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="13.5"></a><a name="variables--no-chain-assignment"></a></p></li>`,1),It=n("a",{href:"#variables--no-chain-assignment"},"13.5",-1),Tt={href:"https://eslint.org/docs/rules/no-multi-assign",target:"_blank",rel:"noopener noreferrer"},Ft=n("code",null,"no-multi-assign",-1),Pt=a(`<blockquote><p>为什么？链式声明变量会创建隐式全局变量。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// JavaScript 将这一段解释为</span>
  <span class="token comment">// let a = ( b = ( c = 1 ) );</span>
  <span class="token comment">// let 只对变量 a 起作用; 变量 b 和 c 都变成了全局变量</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// throws ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 1</span>

<span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> a
  <span class="token keyword">let</span> c <span class="token operator">=</span> a
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// throws ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// throws ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// throws ReferenceError</span>

<span class="token comment">// \`const\` 也是如此</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),zt=n("p",null,[n("a",{name:"13.6"}),n("a",{name:"variables--unary-increment-decrement"})],-1),Lt=n("a",{href:"#variables--unary-increment-decrement"},"13.6",-1),Jt=n("code",null,"++",-1),$t=n("code",null,"--",-1),Mt={href:"http://eslint.org/docs/rules/no-plusplus",target:"_blank",rel:"noopener noreferrer"},Rt=n("code",null,"no-plusplus",-1),Gt=a(`<blockquote><p>为什么？根据 eslint 文档，一元增量和减量语句受到自动分号插入的影响，并且可能会导致应用程序中的值递增或递减的静默错误。 使用 <code>num + = 1</code> 而不是 <code>num ++</code> 或 <code>num ++</code> 语句也是含义清晰的。 禁止一元增量和减量语句还会阻止您无意地预增/预减值，这也会导致程序出现意外行为。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>

<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span>
num<span class="token operator">++</span>
<span class="token operator">--</span>num

<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> truthyCount <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  sum <span class="token operator">+=</span> value
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    truthyCount<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>

<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span>
num <span class="token operator">+=</span> <span class="token number">1</span>
num <span class="token operator">-=</span> <span class="token number">1</span>

<span class="token keyword">const</span> sum <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> truthyCount <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ht=n("p",null,[n("a",{name:"13.7"}),n("a",{name:"variables--linebreak"})],-1),Vt=n("a",{href:"#variables--linebreak"},"13.7",-1),Wt=n("code",null,"=",-1),Qt={href:"https://eslint.org/docs/rules/max-len.html",target:"_blank",rel:"noopener noreferrer"},Ut=n("code",null,"max-len",-1),Yt={href:"https://eslint.org/docs/rules/operator-linebreak.html",target:"_blank",rel:"noopener noreferrer"},Kt=n("code",null,"operator-linebreak",-1),Xt=a(`<blockquote><p>为什么？在 <code>=</code> 附近换行容易混淆这个赋值语句。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> 
  <span class="token function">superLongLongLongLongLongLongLongLongFunctionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> foo 
  <span class="token operator">=</span> <span class="token string">&#39;superLongLongLongLongLongLongLongLongString&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token function">superLongLongLongLongLongLongLongLongFunctionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;superLongLongLongLongLongLongLongLongString&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Zt=n("p",null,[n("a",{name:"13.8"}),n("a",{name:"variables--no-unused-vars"})],-1),np=n("a",{href:"#variables--no-unused-vars"},"13.8",-1),sp={href:"https://eslint.org/docs/rules/no-unused-vars",target:"_blank",rel:"noopener noreferrer"},ap=n("code",null,"no-unused-vars",-1),ep=a(`<blockquote><p>为什么？一个声明了但未使用的变量更像是由于重构未完成产生的错误。这种在代码中出现的变量会使阅读者迷惑。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>

<span class="token keyword">var</span> some_unused_var <span class="token operator">=</span> <span class="token number">42</span>

<span class="token comment">// 写了没用</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">10</span>
y <span class="token operator">=</span> <span class="token number">5</span>

<span class="token comment">// 变量改了自己的值，也没有用这个变量</span>
<span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token number">0</span>
z <span class="token operator">=</span> z <span class="token operator">+</span> <span class="token number">1</span>

<span class="token comment">// 参数定义了但未使用</span>
<span class="token keyword">function</span> <span class="token function">getX</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getXPlusY</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">2</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">getXPlusY</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// &#39;type&#39; 即使没有使用也可以可以被忽略， 因为这个有一个 rest 取值的属性。</span>
<span class="token comment">// 这是从对象中抽取一个忽略特殊字段的对象的一种形式</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> <span class="token operator">...</span>coords <span class="token punctuation">}</span> <span class="token operator">=</span> data
<span class="token comment">// &#39;coords&#39; 现在就是一个没有 &#39;type&#39; 属性的 &#39;data&#39; 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),tp=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="提升" tabindex="-1"><a class="header-anchor" href="#提升" aria-hidden="true">#</a> 提升</h2><p><a name="14.1"></a><a name="hoisting--about"></a></p>',3),pp=n("a",{href:"#hoisting--about"},"14.1",-1),op=n("code",null,"var",-1),cp=n("code",null,"const",-1),lp=n("code",null,"let",-1),ip={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let",target:"_blank",rel:"noopener noreferrer"},up={href:"http://es-discourse.com/t/why-typeof-is-no-longer-safe/15",target:"_blank",rel:"noopener noreferrer"},rp=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 我们知道这个不会工作，假设没有定义全局的 notDefined</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notDefined<span class="token punctuation">)</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在你引用的地方之后声明一个变量，他会正常输出是因为变量提升。</span>
<span class="token comment">// 注意： declaredButNotAssigned 的值 true 没有被提升。</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>
  <span class="token keyword">var</span> declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解释器把变量声明提升到作用域最前面，</span>
<span class="token comment">// 可以重写成如下例子， 二者意义相同。</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> declaredButNotAssigned
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>
  declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用 const，let就不一样了。</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> declaredButNotAssigned<span class="token punctuation">)</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
  <span class="token keyword">const</span> declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),dp=a(`<p><a name="14.2"></a><a name="hoisting--anon-expressions"></a></p><ul><li><p><a href="#hoisting--anon-expressions">14.2</a> 匿名函数表达式和 <code>var</code> 情况相同。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anonymous<span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; TypeError anonymous is not a function</span>

  <span class="token comment">// 译者注，不管后面是函数、数字还是字符串，都是一样的，总结就是实际代码中最好不要用 var。</span>
  <span class="token keyword">var</span> <span class="token function-variable function">anonymous</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;anonymous function expression&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="14.3"></a><a name="hoisting--named-expresions"></a></p><ul><li><p><a href="#hoisting--named-expresions">14.3</a> 已命名函数表达式提升他的变量名，不是函数名或函数体。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>named<span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; TypeError named is not a function</span>

  <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; ReferenceError superPower is not defined</span>

  <span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Flying&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数名和变量名一样是也如此。</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>named<span class="token punctuation">)</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; TypeError named is not a function</span>

  <span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;named&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="14.4"></a><a name="hoisting--declarations"></a></p>`,5),kp=a(`<li><p><a href="#hoisting--declarations">14.4</a> 函数声明则提升了函数名和函数体。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; Flying</span>

  <span class="token keyword">function</span> <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Flying&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),vp={href:"http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/",target:"_blank",rel:"noopener noreferrer"},mp={href:"http://www.adequatelygood.com/",target:"_blank",rel:"noopener noreferrer"},bp=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="比较运算符与相等" tabindex="-1"><a class="header-anchor" href="#比较运算符与相等" aria-hidden="true">#</a> 比较运算符与相等</h2><p><a name="15.1"></a><a name="comparison--eqeqeq"></a></p>',3),gp=n("a",{href:"#comparison--eqeqeq"},"15.1",-1),hp=n("code",null,"===",-1),fp=n("code",null,"!==",-1),yp=n("code",null,"==",-1),_p=n("code",null,"!=",-1),wp={href:"http://eslint.org/docs/rules/eqeqeq.html",target:"_blank",rel:"noopener noreferrer"},jp=n("code",null,"eqeqeq",-1),xp=a(`<p><a name="15.2"></a><a name="comparison--if"></a></p><ul><li><p><a href="#comparison--if">15.2</a> 条件语句如 <code>if</code> 语句使用强制 <code>ToBoolean</code> 抽象方法来计算它们的表达式，并且始终遵循以下简单规则：</p><ul><li><strong>Objects</strong> 计算成 <strong>true</strong></li><li><strong>Undefined</strong> 计算成 <strong>false</strong></li><li><strong>Null</strong> 计算成 <strong>false</strong></li><li><strong>Booleans</strong> 计算成 <strong>the value of the boolean</strong></li><li><strong>Numbers</strong><ul><li><strong>+0, -0, or NaN</strong> 计算成 <strong>false</strong></li><li>其他 <strong>true</strong></li></ul></li><li><strong>Strings</strong><ul><li><code>&#39;&#39;</code> 计算成 <strong>false</strong></li><li>其他 <strong>true</strong></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// true</span>
  <span class="token comment">// 数组（即使是空数组）是对象，对象会计算成 true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="15.3"></a><a name="comparison--shortcuts"></a></p><ul><li><p><a href="#comparison--shortcuts">15.3</a> 布尔值要用缩写，而字符串和数字要明确使用比较操作符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="15.4"></a><a name="comparison--moreinfo"></a></p>`,5),Ep=n("a",{href:"#comparison--moreinfo"},"15.4",-1),qp={href:"https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108",target:"_blank",rel:"noopener noreferrer"},Ap=n("p",null,[n("a",{name:"15.5"}),n("a",{name:"comparison--switch-blocks"})],-1),Bp=n("a",{href:"#comparison--switch-blocks"},"15.5",-1),Sp=n("code",null,"case",-1),Np=n("code",null,"default",-1),Dp=n("code",null,"let",-1),Cp=n("code",null,"const",-1),Op=n("code",null,"function",-1),Ip=n("code",null,"class",-1),Tp={href:"http://eslint.org/docs/rules/no-case-declarations.html",target:"_blank",rel:"noopener noreferrer"},Fp=n("code",null,"no-case-declarations",-1),Pp=a(`<blockquote><p>为什么？词法声明在整个 <code>switch</code> 的代码块里都可见，但是只有当其被分配后才会初始化，仅当这个 <code>case</code> 被执行时才被初始化。当多个 <code>case</code> 分句试图定义同一个对象时就会出现问题。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),zp=n("p",null,[n("a",{name:"15.6"}),n("a",{name:"comparison--nested-ternaries"})],-1),Lp=n("a",{href:"#comparison--nested-ternaries"},"15.6",-1),Jp={href:"http://eslint.org/docs/rules/no-nested-ternary.html",target:"_blank",rel:"noopener noreferrer"},$p=n("code",null,"no-nested-ternary",-1),Mp=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>

<span class="token comment">// better</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> maybeNull

<span class="token comment">// best</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> maybeNull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Rp=n("p",null,[n("a",{name:"15.7"}),n("a",{name:"comparison--unneeded-ternary"})],-1),Gp=n("a",{href:"#comparison--unneeded-ternary"},"15.7",-1),Hp={href:"http://eslint.org/docs/rules/no-unneeded-ternary.html",target:"_blank",rel:"noopener noreferrer"},Vp=n("code",null,"no-unneeded-ternary",-1),Wp=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">?</span> a <span class="token operator">:</span> b
<span class="token keyword">const</span> bar <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">||</span> b
<span class="token comment">// 0, null、undefined和&#39; &#39;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>c
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token operator">!</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Qp=n("p",null,[n("a",{name:"15.8"}),n("a",{name:"comparison--no-mixed-operators"})],-1),Up=n("a",{href:"#comparison--no-mixed-operators"},"15.8",-1),Yp=n("code",null,"+",-1),Kp=n("code",null,"-",-1),Xp=n("code",null,"*",-1),Zp=n("code",null,"/",-1),no={href:"https://eslint.org/docs/rules/no-mixed-operators.html",target:"_blank",rel:"noopener noreferrer"},so=n("code",null,"no-mixed-operators",-1),ao=a(`<blockquote><p>为什么？这提高了可读性，并且明确了开发者的意图。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> d <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> a <span class="token operator">**</span> b <span class="token operator">-</span> <span class="token number">5</span> <span class="token operator">%</span> d

<span class="token comment">// bad</span>
<span class="token comment">// 别人会陷入(a || b) &amp;&amp; c 的迷惑中</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> d
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> d <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> a <span class="token operator">**</span> b <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">%</span> d<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> d
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token punctuation">(</span>b <span class="token operator">/</span> c<span class="token punctuation">)</span> <span class="token operator">*</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),eo=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ back to top</a></strong></p><h2 id="块" tabindex="-1"><a class="header-anchor" href="#块" aria-hidden="true">#</a> 块</h2><p><a name="16.1"></a><a name="blocks--braces"></a></p>',3),to=n("a",{href:"#blocks--braces"},"16.1",-1),po={href:"https://eslint.org/docs/rules/nonblock-statement-body-position",target:"_blank",rel:"noopener noreferrer"},oo=n("code",null,"nonblock-statement-body-position",-1),co=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),lo=n("p",null,[n("a",{name:"16.2"}),n("a",{name:"blocks--cuddled-elses"})],-1),io=n("a",{href:"#blocks--cuddled-elses"},"16.2",-1),uo=n("code",null,"if",-1),ro=n("code",null,"else",-1),ko=n("code",null,"if",-1),vo={href:"http://eslint.org/docs/rules/brace-style.html",target:"_blank",rel:"noopener noreferrer"},mo=n("code",null,"brace-style",-1),bo=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">thing2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">thing3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">thing2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">thing3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),go=n("p",null,[n("a",{name:"16.3"}),n("a",{name:"blocks--no-else-return"})],-1),ho=n("a",{href:"#blocks--no-else-return"},"16.3",-1),fo=n("code",null,"if",-1),yo=n("code",null,"return",-1),_o=n("code",null,"else",-1),wo=n("code",null,"if",-1),jo=n("code",null,"return",-1),xo=n("code",null,"else if",-1),Eo=n("code",null,"return",-1),qo=n("code",null,"return",-1),Ao=n("code",null,"if",-1),Bo={href:"https://eslint.org/docs/rules/no-else-return",target:"_blank",rel:"noopener noreferrer"},So=n("code",null,"no-else-return",-1),No=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">cats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">dogs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> y
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> y
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">cats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">dogs</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> y
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> z
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Do=a(`<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句" aria-hidden="true">#</a> 控制语句</h2><p><a name="17.1"></a><a name="control-statements"></a></p><ul><li><p><a href="#control-statements">17.1</a> 当你的控制语句（<code>if</code>, <code>while</code> 等）太长或者超过最大长度限制的时候，把每一个（组）判断条件放在单独一行里。逻辑操作符放在行首。</p><blockquote><p>为什么？把逻辑操作符放在行首是让操作符的对齐方式和链式函数保持一致。这提高了可读性，也让复杂逻辑更清晰。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">||</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">doesItLookGoodWhenItBecomesThatLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isThisReallyHappening</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> 
  bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> 
  <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> 
  bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
    foo <span class="token operator">===</span> <span class="token number">123</span> 
    <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">||</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">doesItLookGoodWhenItBecomesThatLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">isThisReallyHappening</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="17.2"></a><a name="control-statements--value-selection"></a></p><ul><li><p><a href="#control-statements--value-selection">17.2</a> 不要用选择操作符代替控制语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">!</span>isRunning <span class="token operator">&amp;&amp;</span> <span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRunning<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p><a name="18.1"></a><a name="comments--multiline"></a></p><ul><li><p><a href="#comments--multiline">18.1</a> 多行注释用 <code>/** ... */</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// make() returns a new element</span>
<span class="token comment">// based on the passed in tag name</span>
<span class="token comment">//</span>
<span class="token comment">// @param {String} tag</span>
<span class="token comment">// @return {Element} element</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="18.2"></a><a name="comments--singleline"></a></p><ul><li><p><a href="#comments--singleline">18.2</a> 单行注释用 <code>//</code>，将单行注释放在被注释区域上面。如果注释不是在第一行，那么注释前面就空一行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// is current tab</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span>

  <span class="token keyword">return</span> type
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;fetching type...&quot;</span><span class="token punctuation">)</span>

  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span>

  <span class="token keyword">return</span> type
<span class="token punctuation">}</span>

<span class="token comment">// also good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span>

  <span class="token keyword">return</span> type
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="18.3"></a><a name="comments--spaces"></a></p>`,13),Co=n("a",{href:"#comments--spaces"},"18.3",-1),Oo={href:"http://eslint.org/docs/rules/spaced-comment",target:"_blank",rel:"noopener noreferrer"},Io=n("code",null,"spaced-comment",-1),To=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">//is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// bad</span>
<span class="token doc-comment comment">/**
 *make() returns a new element
 *based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Fo=a(`<p><a name="18.4"></a><a name="comments--actionitems"></a></p><ul><li><a href="#comments--actionitems">18.4</a> 在你的注释前使用 <code>FIXME</code> 或 <code>TODO</code> 前缀，这有助于其他开发人员快速理解你指出的需要修复的问题， 或者您建议需要实现的问题的解决方案。 这些不同于常规注释，它们是有明确含义的。<code>FIXME：需要修复这个问题</code>或<code>TODO：需要实现的功能</code>。</li></ul><p><a name="18.5"></a><a name="comments--fixme"></a></p><ul><li><p><a href="#comments--fixme">18.5</a> 用 <code>// FIXME:</code> 给问题做注释。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">Abacus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// FIXME: shouldn&#39;t use a global here</span>
    total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="18.6"></a><a name="comments--todo"></a></p><ul><li><p><a href="#comments--todo">18.6</a> 用 <code>// TODO:</code> 去注释问题的解决方案。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">Abacus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// TODO: total should be configurable by an options param</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h2><p><a name="19.1"></a><a name="whitespace--spaces"></a></p>`,9),Po=n("a",{href:"#whitespace--spaces"},"19.1",-1),zo={href:"http://eslint.org/docs/rules/indent.html",target:"_blank",rel:"noopener noreferrer"},Lo=n("code",null,"indent",-1),Jo=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙∙∙∙<span class="token keyword">const</span> name
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙<span class="token keyword">const</span> name
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙∙<span class="token keyword">const</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$o=n("p",null,[n("a",{name:"19.2"}),n("a",{name:"whitespace--before-blocks"})],-1),Mo=n("a",{href:"#whitespace--before-blocks"},"19.2",-1),Ro={href:"http://eslint.org/docs/rules/space-before-blocks.html",target:"_blank",rel:"noopener noreferrer"},Go=n("code",null,"space-before-blocks",-1),Ho=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Vo=n("p",null,[n("a",{name:"19.3"}),n("a",{name:"whitespace--around-keywords"})],-1),Wo=n("a",{href:"#whitespace--around-keywords"},"19.3",-1),Qo=n("code",null,"if",-1),Uo=n("code",null,"while",-1),Yo={href:"http://eslint.org/docs/rules/keyword-spacing.html",target:"_blank",rel:"noopener noreferrer"},Ko=n("code",null,"keyword-spacing",-1),Xo=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">fight</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Zo=n("p",null,[n("a",{name:"19.4"}),n("a",{name:"whitespace--infix-ops"})],-1),nc=n("a",{href:"#whitespace--infix-ops"},"19.4",-1),sc={href:"http://eslint.org/docs/rules/space-infix-ops.html",target:"_blank",rel:"noopener noreferrer"},ac=n("code",null,"space-infix-ops",-1),ec=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> x<span class="token operator">=</span>y <span class="token operator">+</span> <span class="token number">5</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),tc=n("p",null,[n("a",{name:"19.5"}),n("a",{name:"whitespace--newline-at-end"})],-1),pc=n("a",{href:"#whitespace--newline-at-end"},"19.5",-1),oc={href:"https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md",target:"_blank",rel:"noopener noreferrer"},cc=n("code",null,"eol-last",-1),lc=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span>
<span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>↵
↵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>↵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ic=n("p",null,[n("a",{name:"19.6"}),n("a",{name:"whitespace--chains"})],-1),uc=n("a",{href:"#whitespace--chains"},"19.6",-1),rc={href:"http://eslint.org/docs/rules/newline-per-chained-call",target:"_blank",rel:"noopener noreferrer"},dc=n("code",null,"newline-per-chained-call",-1),kc={href:"http://eslint.org/docs/rules/no-whitespace-before-property",target:"_blank",rel:"noopener noreferrer"},vc=n("code",null,"no-whitespace-before-property",-1),mc=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#items&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> svg <span class="token operator">=</span> leds<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
svg<span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> g <span class="token operator">=</span> svg<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>radius <span class="token operator">+</span> margin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),bc=a(`<p><a name="19.7"></a><a name="whitespace--after-blocks"></a></p><ul><li><p><a href="#whitespace--after-blocks">19.7</a> 在一个代码块后下一条语句前空一行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar
<span class="token punctuation">}</span>
<span class="token keyword">return</span> baz

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar
<span class="token punctuation">}</span>

<span class="token keyword">return</span> baz

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> obj

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> obj

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token keyword">return</span> arr

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>

<span class="token keyword">return</span> arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="19.8"></a><a name="whitespace--padded-blocks"></a></p>`,3),gc=n("a",{href:"#whitespace--padded-blocks"},"19.8",-1),hc={href:"http://eslint.org/docs/rules/padded-blocks.html",target:"_blank",rel:"noopener noreferrer"},fc=n("code",null,"padded-blocks",-1),yc=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// also bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>baz<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qux<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token operator">=</span> bar<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>baz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qux<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_c=n("p",null,[n("a",{name:"whitespace--no-multiple-blanks"})],-1),wc=n("a",{href:"#whitespace--no-multiple-blanks"},"19.9",-1),jc={href:"https://eslint.org/docs/rules/no-multiple-empty-lines",target:"_blank",rel:"noopener noreferrer"},xc=n("code",null,"no-multiple-empty-lines",-1),Ec=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fullName<span class="token punctuation">,</span> email<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName

    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span>today<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token parameter">today<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fullName<span class="token punctuation">,</span> email<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> fullName
    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">getAge</span><span class="token punctuation">(</span>today<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token parameter">today<span class="token punctuation">,</span> birthday</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="19.10"></a><a name="whitespace--in-parens"></a></p>`,2),qc=n("a",{href:"#whitespace--in-parens"},"19.10",-1),Ac={href:"http://eslint.org/docs/rules/space-in-parens.html",target:"_blank",rel:"noopener noreferrer"},Bc=n("code",null,"space-in-parens",-1),Sc=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span> <span class="token parameter">foo</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> foo <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Nc=n("p",null,[n("a",{name:"19.11"}),n("a",{name:"whitespace--in-brackets"})],-1),Dc=n("a",{href:"#whitespace--in-brackets"},"19.11",-1),Cc={href:"http://eslint.org/docs/rules/array-bracket-spacing.html",target:"_blank",rel:"noopener noreferrer"},Oc=n("code",null,"array-bracket-spacing",-1),Ic=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// good，逗号分隔符后还是要空格的。</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Tc=n("p",null,[n("a",{name:"19.12"}),n("a",{name:"whitespace--in-braces"})],-1),Fc=n("a",{href:"#whitespace--in-braces"},"19.12",-1),Pc={href:"http://eslint.org/docs/rules/object-curly-spacing.html",target:"_blank",rel:"noopener noreferrer"},zc=n("code",null,"object-curly-spacing",-1),Lc=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Jc=n("p",null,[n("a",{name:"19.13"}),n("a",{name:"whitespace--max-len"})],-1),$c=n("a",{href:"#whitespace--max-len"},"19.13",-1),Mc=n("a",{href:"#strings--line-length"},"上面",-1),Rc={href:"http://eslint.org/docs/rules/max-len.html",target:"_blank",rel:"noopener noreferrer"},Gc=n("code",null,"max-len",-1),Hc=a(`<blockquote><p>为什么？这样确保可读性和可维护性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> jsonData <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux<span class="token punctuation">.</span>xyzzy

<span class="token comment">// bad</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://airbnb.com/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Congratulations!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You have failed this city.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> jsonData 
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo 
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar 
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz 
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux 
  <span class="token operator">&amp;&amp;</span> jsonData<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>baz<span class="token punctuation">.</span>quux<span class="token punctuation">.</span>xyzzy

<span class="token comment">// good</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://airbnb.com/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Congratulations!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You have failed this city.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Vc=n("p",null,[n("a",{name:"19.14"}),n("a",{name:"whitespace--block-spacing"})],-1),Wc=n("a",{href:"#whitespace--block-spacing"},"19.14",-1),Qc=n("code",null,"{",-1),Uc=n("code",null,"}",-1),Yc={href:"https://eslint.org/docs/rules/block-spacing",target:"_blank",rel:"noopener noreferrer"},Kc=n("code",null,"block-spacing",-1),Xc=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span> bar <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span> bar <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Zc=n("p",null,[n("a",{name:"19.15"}),n("a",{name:"whitespace--comma-spacing"})],-1),nl=n("a",{href:"#whitespace--comma-spacing"},"19.15",-1),sl=n("code",null,",",-1),al=n("code",null,",",-1),el={href:"https://eslint.org/docs/rules/comma-spacing",target:"_blank",rel:"noopener noreferrer"},tl=n("code",null,"comma-spacing",-1),pl=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>bar <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> bar <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ol=n("p",null,[n("a",{name:"19.16"}),n("a",{name:"whitespace--computed-property-spacing"})],-1),cl=n("a",{href:"#whitespace--computed-property-spacing"},"19.16",-1),ll={href:"https://eslint.org/docs/rules/computed-property-spacing",target:"_blank",rel:"noopener noreferrer"},il=n("code",null,"computed-property-spacing",-1),ul=a(`<p>译者注：原文可能有误，说明和代码不一致，以代码为准。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">]</span>
obj<span class="token punctuation">[</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span> b <span class="token punctuation">]</span><span class="token operator">:</span> a <span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">[</span> bar <span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">]</span>
obj<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">:</span> a <span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">[</span>bar<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),rl=n("p",null,[n("a",{name:"19.17"}),n("a",{name:"whitespace--func-call-spacing"})],-1),dl=n("a",{href:"#whitespace--func-call-spacing"},"19.17",-1),kl={href:"https://eslint.org/docs/rules/func-call-spacing",target:"_blank",rel:"noopener noreferrer"},vl=n("code",null,"func-call-spacing",-1),ml=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">func</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),bl=n("p",null,[n("a",{name:"19.18"}),n("a",{name:"whitespace--key-spacing"})],-1),gl=n("a",{href:"#whitespace--key-spacing"},"19.18",-1),hl=n("code",null,"key",-1),fl=n("code",null,"value",-1),yl={href:"https://eslint.org/docs/rules/key-spacing",target:"_blank",rel:"noopener noreferrer"},_l=n("code",null,"key-spacing",-1),wl=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span> <span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token number">42</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),jl=n("p",null,[n("a",{name:"19.19"}),n("a",{name:"whitespace--no-trailing-spaces"})],-1),xl=n("a",{href:"#whitespace--no-trailing-spaces"},"19.19",-1),El={href:"https://eslint.org/docs/rules/no-trailing-spaces",target:"_blank",rel:"noopener noreferrer"},ql=n("code",null,"no-trailing-spaces",-1),Al=n("p",null,[n("a",{name:"19.20"}),n("a",{name:"whitespace--no-multiple-empty-lines"})],-1),Bl=n("a",{href:"#whitespace--no-multiple-empty-lines"},"19.20",-1),Sl={href:"https://eslint.org/docs/rules/no-multiple-empty-lines",target:"_blank",rel:"noopener noreferrer"},Nl=n("code",null,"no-multiple-empty-lines",-1),Dl=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad - multiple empty lines</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span>


<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// bad - 2+ newlines at end of file</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span>


<span class="token comment">// bad - 1+ newline(s) at beginning of file</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Cl=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="逗号" tabindex="-1"><a class="header-anchor" href="#逗号" aria-hidden="true">#</a> 逗号</h2><p><a name="20.1"></a><a name="commas--leading-trailing"></a></p>',3),Ol=n("a",{href:"#commas--leading-trailing"},"20.1",-1),Il={href:"http://eslint.org/docs/rules/comma-style.html",target:"_blank",rel:"noopener noreferrer"},Tl=n("code",null,"comma-style",-1),Fl=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> story <span class="token operator">=</span> <span class="token punctuation">[</span>once<span class="token punctuation">,</span> upon<span class="token punctuation">,</span> aTime<span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> story <span class="token operator">=</span> <span class="token punctuation">[</span>once<span class="token punctuation">,</span> upon<span class="token punctuation">,</span> aTime<span class="token punctuation">]</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Ada&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Lovelace&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">birthYear</span><span class="token operator">:</span> <span class="token number">1815</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">superPower</span><span class="token operator">:</span> <span class="token string">&#39;computers&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Ada&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Lovelace&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birthYear</span><span class="token operator">:</span> <span class="token number">1815</span><span class="token punctuation">,</span>
  <span class="token literal-property property">superPower</span><span class="token operator">:</span> <span class="token string">&#39;computers&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Pl=n("p",null,[n("a",{name:"20.2"}),n("a",{name:"commas--dangling"})],-1),zl=n("a",{href:"#commas--dangling"},"20.2",-1),Ll=n("strong",null,"要",-1),Jl={href:"http://eslint.org/docs/rules/comma-dangle.html",target:"_blank",rel:"noopener noreferrer"},$l=n("code",null,"comma-dangle",-1),Ml={href:"https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas",target:"_blank",rel:"noopener noreferrer"},Rl=a(`<div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>// bad - 没有结尾逗号的 git diff
const hero = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">    firstName: &#39;Florence&#39;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    lastName: &#39;Nightingale&#39;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    lastName: &#39;Nightingale&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">    inventorOf: [&#39;coxcomb chart&#39;, &#39;modern nursing&#39;]
</span></span>};

// good - 有结尾逗号的 git diff
const hero = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">    firstName: &#39;Florence&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">    lastName: &#39;Nightingale&#39;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    inventorOf: [&#39;coxcomb chart&#39;, &#39;modern nursing&#39;],
</span></span>};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Dana&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Scully&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Superman&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Dana&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Scully&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Superman&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span>
  <span class="token parameter">firstName<span class="token punctuation">,</span> 
  lastName<span class="token punctuation">,</span> 
  inventorOf</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span>
  <span class="token parameter">firstName<span class="token punctuation">,</span> 
  lastName<span class="token punctuation">,</span>
  inventorOf</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// good (注意，逗号不应出现在使用了 ... 操作符后的参数后面)</span>
<span class="token keyword">function</span> <span class="token function">createHero</span><span class="token punctuation">(</span>
  <span class="token parameter">firstName<span class="token punctuation">,</span> 
  lastName<span class="token punctuation">,</span> 
  inventorOf<span class="token punctuation">,</span> 
  <span class="token operator">...</span>heroArgs</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// does nothing</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token function">createHero</span><span class="token punctuation">(</span>
  firstName<span class="token punctuation">,</span> 
  lastName<span class="token punctuation">,</span> 
  inventorOf
<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">createHero</span><span class="token punctuation">(</span>
  firstName<span class="token punctuation">,</span> 
  lastName<span class="token punctuation">,</span> 
  inventorOf<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// good  (注意，逗号不应出现在使用了 ... 操作符后的参数后面)</span>
<span class="token function">createHero</span><span class="token punctuation">(</span>
  firstName<span class="token punctuation">,</span> 
  lastName<span class="token punctuation">,</span> 
  inventorOf<span class="token punctuation">,</span> 
  <span class="token operator">...</span>heroArgs
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Gl=n("p",null,[n("strong",null,[n("a",{href:"#%E7%9B%AE%E5%BD%95"},"⬆ 返回顶部")])],-1),Hl=n("h2",{id:"分号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分号","aria-hidden":"true"},"#"),s(" 分号")],-1),Vl=n("p",null,[n("a",{name:"21.1"})],-1),Wl=n("a",{href:"#21.1"},"21.1",-1),Ql=n("strong",null,"要分号！",-1),Ul={href:"http://eslint.org/docs/rules/semi.html",target:"_blank",rel:"noopener noreferrer"},Yl=n("code",null,"semi",-1),Kl={href:"https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion",target:"_blank",rel:"noopener noreferrer"},Xl=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad - 抛出异常</span>
<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> leia <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">(</span>luke<span class="token punctuation">,</span> leia<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jedi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>jedi<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token string">&#39;vader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// bad - 抛出异常</span>
<span class="token keyword">const</span> reaction <span class="token operator">=</span> <span class="token string">&#39;No! That’s impossible!&#39;</span><span class="token punctuation">(</span>
<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">meanwhileOnTheFalcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理 \`leia\`, \`lando\`, \`chewie\`, \`r2\`, \`c3p0\`</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// bad - 将返回 \`undefined\` 而不是下一行的值。由于 ASI，当 \`return\`单独出现在一行时，这种情况会一直出现。</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span>
    <span class="token string">&#39;search your feelings, you know it to be foo&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> leia <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>luke<span class="token punctuation">,</span> leia<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jedi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
jedi<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token string">&#39;vader&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> reaction <span class="token operator">=</span> <span class="token string">&#39;No! That’s impossible!&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">meanwhileOnTheFalcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// handle \`leia\`, \`lando\`, \`chewie\`, \`r2\`, \`c3p0\`</span>
<span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token string">&#39;search your feelings, you know it to be foo&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Zl={href:"https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214",target:"_blank",rel:"noopener noreferrer"},ni=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="类型转换与强制转换" tabindex="-1"><a class="header-anchor" href="#类型转换与强制转换" aria-hidden="true">#</a> 类型转换与强制转换</h2><p><a name="22.1"></a><a name="coercion--explicit"></a></p><ul><li><a href="#coercion--explicit">22.1</a> 在语句开始执行强制类型转换。</li></ul><p><a name="22.2"></a><a name="coercion--strings"></a></p>',5),si=n("a",{href:"#coercion--strings"},"22.2",-1),ai={href:"https://eslint.org/docs/rules/no-new-wrappers",target:"_blank",rel:"noopener noreferrer"},ei=n("code",null,"no-new-wrappers",-1),ti=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// =&gt; this.reviewScore = 9;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">)</span> <span class="token comment">// typeof totalScore is &quot;object&quot; not &quot;string&quot;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 将会执行 this.reviewScore.valueOf()</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不保证返回 string</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> totalScore <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),pi=n("p",null,[n("a",{name:"22.3"}),n("a",{name:"coercion--numbers"})],-1),oi=n("a",{href:"#coercion--numbers"},"22.3",-1),ci=n("code",null,"Number",-1),li=n("code",null,"parseInt",-1),ii=n("code",null,"string",-1),ui={href:"http://eslint.org/docs/rules/radix",target:"_blank",rel:"noopener noreferrer"},ri=n("code",null,"radix",-1),di=a(`<blockquote><p>为什么？函数 <code>parseInt</code> 会根据指定的基数将字符串转换为数字。字符串开头的空白字符将会被忽略，如果参数基数（第二个参数）为 <code>undefined</code> 或者 <code>0</code> ，除非字符串开头为 <code>0x</code> 或 <code>0X</code>（十六进制），会默认假设为 <code>10</code>。这个差异来自 ECMAScript 3，它不鼓励（但是允许）解释八进制。在 2013 年之前，一些实现不兼容这种行为。因为我们需要支持旧浏览器，所以应当始终指定进制。</p><p>译者注：翻译的可能不是很好，总之使用 <code>parseInt()</code> 时始终指定进制数（第二个参数）就可以了。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token operator">+</span>inputValue

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ki=n("p",null,[n("a",{name:"22.4"}),n("a",{name:"coercion--comment-deviations"})],-1),vi=n("a",{href:"#coercion--comment-deviations"},"22.4",-1),mi=n("code",null,"parseInt",-1),bi={href:"https://jsperf.com/coercion-vs-casting/3",target:"_blank",rel:"noopener noreferrer"},gi=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * parseInt 是代码运行慢的原因
 * 用 Bitshifting 将字符串转成数字使代码运行效率大幅提升
 */</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),hi=n("p",null,[n("a",{name:"22.5"}),n("a",{name:"coercion--bitwise"})],-1),fi=n("a",{href:"#coercion--bitwise"},"22.5",-1),yi=n("strong",null,"注意:",-1),_i={href:"https://es5.github.io/#x4.3.19",target:"_blank",rel:"noopener noreferrer"},wi={href:"https://es5.github.io/#x11.7",target:"_blank",rel:"noopener noreferrer"},ji={href:"https://github.com/airbnb/javascript/issues/109",target:"_blank",rel:"noopener noreferrer"},xi=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">2147483647</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; 2147483647</span>
<span class="token number">2147483648</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; -2147483648</span>
<span class="token number">2147483649</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; -2147483647</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ei=a(`<p><a name="22.6"></a><a name="coercion--booleans"></a></p><ul><li><p><a href="#coercion--booleans">22.6</a> 布尔:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> hasAge <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2><p><a name="23.1"></a><a name="naming--descriptive"></a></p>`,5),qi=n("a",{href:"#naming--descriptive"},"23.1",-1),Ai={href:"http://eslint.org/docs/rules/id-length",target:"_blank",rel:"noopener noreferrer"},Bi=n("code",null,"id-length",-1),Si=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ni=n("p",null,[n("a",{name:"23.2"}),n("a",{name:"naming--camelCase"})],-1),Di=n("a",{href:"#naming--camelCase"},"23.2",-1),Ci={href:"http://eslint.org/docs/rules/camelcase.html",target:"_blank",rel:"noopener noreferrer"},Oi=n("code",null,"camelcase",-1),Ii=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> OBJEcttsssss <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> this_is_my_object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> thisIsMyObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">thisIsMyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ti=n("p",null,[n("a",{name:"23.3"}),n("a",{name:"naming--PascalCase"})],-1),Fi=n("a",{href:"#naming--PascalCase"},"23.3",-1),Pi={href:"http://eslint.org/docs/rules/new-cap.html",target:"_blank",rel:"noopener noreferrer"},zi=n("code",null,"new-cap",-1),Li=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">user</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nope&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> good <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yup&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ji=n("p",null,[n("a",{name:"23.4"}),n("a",{name:"naming--leading-underscore"})],-1),$i=n("a",{href:"#naming--leading-underscore"},"23.4",-1),Mi={href:"http://eslint.org/docs/rules/no-underscore-dangle.html",target:"_blank",rel:"noopener noreferrer"},Ri=n("code",null,"no-underscore-dangle",-1),Gi=a(`<blockquote><p>为什么？JavaScript 没有私有属性或私有方法的概念。尽管前置下划线通常的概念上意味着私有，事实上，这些属性是完全公有的，因此这部分也是你的 API 的内容。这一概念可能会导致开发者误以为更改这个不会导致崩溃或者不需要测试。如果你想要什么东西变成私有，那就不要让它在这里出现。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>__firstName__ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName_ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hi=n("p",null,[n("a",{name:"23.5"}),n("a",{name:"naming--self-this"})],-1),Vi=n("a",{href:"#naming--self-this"},"23.5",-1),Wi=n("code",null,"this",-1),Qi={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},Ui=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Yi=a(`<p><a name="23.6"></a><a name="naming--filename-matches-export"></a></p><ul><li><p><a href="#naming--filename-matches-export">23.6</a> <code>export default</code> 导出模块 A，则这个文件名也叫 <code>A.*</code>， <code>import</code> 时候的参数也叫 <code>A</code>。 大小写完全一致。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// file 1 contents</span>
<span class="token keyword">class</span> <span class="token class-name">CheckBox</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> CheckBox

<span class="token comment">// file 2 contents</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">fortyTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">42</span>
<span class="token punctuation">}</span>

<span class="token comment">// file 3 contents</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">insideDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// in some other file</span>
<span class="token comment">// bad</span>
<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">&#39;./checkBox&#39;</span> <span class="token comment">// PascalCase import/export, camelCase filename</span>
<span class="token keyword">import</span> FortyTwo <span class="token keyword">from</span> <span class="token string">&#39;./FortyTwo&#39;</span> <span class="token comment">// PascalCase import/filename, camelCase export</span>
<span class="token keyword">import</span> InsideDirectory <span class="token keyword">from</span> <span class="token string">&#39;./InsideDirectory&#39;</span> <span class="token comment">// PascalCase import/filename, camelCase export</span>

<span class="token comment">// bad</span>
<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">&#39;./check_box&#39;</span> <span class="token comment">// PascalCase import/export, snake_case filename</span>
<span class="token keyword">import</span> forty_two <span class="token keyword">from</span> <span class="token string">&#39;./forty_two&#39;</span> <span class="token comment">// snake_case import/filename, camelCase export</span>
<span class="token keyword">import</span> inside_directory <span class="token keyword">from</span> <span class="token string">&#39;./inside_directory&#39;</span> <span class="token comment">// snake_case import, camelCase export</span>
<span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&#39;./inside_directory/index&#39;</span> <span class="token comment">// requiring the index file explicitly</span>
<span class="token keyword">import</span> insideDirectory <span class="token keyword">from</span> <span class="token string">&#39;./insideDirectory/index&#39;</span> <span class="token comment">// requiring the index file explicitly</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">&#39;./CheckBox&#39;</span> <span class="token comment">// PascalCase export/import/filename</span>
<span class="token keyword">import</span> fortyTwo <span class="token keyword">from</span> <span class="token string">&#39;./fortyTwo&#39;</span> <span class="token comment">// camelCase export/import/filename</span>
<span class="token keyword">import</span> insideDirectory <span class="token keyword">from</span> <span class="token string">&#39;./insideDirectory&#39;</span> <span class="token comment">// camelCase export/import/directory name/implicit &quot;index&quot;</span>
<span class="token comment">// ^ supports both insideDirectory.js and insideDirectory/index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="23.7"></a><a name="naming--camelCase-default-export"></a></p><ul><li><p><a href="#naming--camelCase-default-export">23.7</a> 当你 export-default 一个函数时，函数名用小驼峰，文件名需要和函数名一致。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeStyleGuide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> makeStyleGuide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="23.8"></a><a name="naming--PascalCase-singleton"></a></p><ul><li><p><a href="#naming--PascalCase-singleton">23.8</a> 当你 export 一个结构体/类/单例/函数库/对象 时用大驼峰。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> AirbnbStyleGuide <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AirbnbStyleGuide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="23.9"></a><a name="naming--Acronyms-and-Initialisms"></a></p><ul><li><p><a href="#naming--Acronyms-and-Initialisms">23.9</a> 简称和缩写应该全部大写或全部小写。</p><blockquote><p>为什么？名字都是给人读的，不是为了去适应计算机算法。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> SmsContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/SmsContainer&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> HttpRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> SMSContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/SMSContainer&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> HTTPRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>

<span class="token comment">// also good</span>
<span class="token keyword">const</span> httpRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>

<span class="token comment">// best</span>
<span class="token keyword">import</span> TextMessageContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/TextMessageContainer&#39;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="23.10"></a><a name="naming--uppercase"></a></p><ul><li><p><a href="#naming--uppercase">23.10</a> 你可以用全大写字母设置静态变量，他需要满足三个条件。</p><ol><li>导出变量；</li><li>是 <code>const</code> 定义的， 保证不能被改变；</li><li>这个变量是可信的，他的子属性都是不能被改变的。</li></ol><blockquote><p>为什么？这是一个附加工具，帮助开发者去辨识一个变量是不是不可变的。UPPERCASE_VARIABLES 能让开发者知道他能确信这个变量（以及他的属性）是不会变的。</p></blockquote><ul><li>对于所有的 <code>const</code> 变量呢？ —— 这个是不必要的。大写变量不应该在同一个文件里定义并使用， 它只能用来作为导出变量。</li><li>那导出的对象呢？ —— 大写变量处在 <code>export</code> 的最高级(例如：<code>EXPORTED_OBJECT.key</code>) 并且他包含的所有子属性都是不可变的。（译者注：即导出的变量是全大写的，但他的属性不用大写）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token constant">PRIVATE_VARIABLE</span> <span class="token operator">=</span> <span class="token string">&#39;should not be unnecessarily uppercased within a file&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">THING_TO_BE_CHANGED</span> <span class="token operator">=</span> <span class="token string">&#39;should obviously not be uppercased&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token constant">REASSIGNABLE_VARIABLE</span> <span class="token operator">=</span> <span class="token string">&#39;do not use let with uppercase variables&#39;</span>

<span class="token comment">// ---</span>

<span class="token comment">// 允许但不够语义化</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> apiKey <span class="token operator">=</span> <span class="token string">&#39;SOMEKEY&#39;</span>

<span class="token comment">// 在大多数情况下更好</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">API_KEY</span> <span class="token operator">=</span> <span class="token string">&#39;SOMEKEY&#39;</span>

<span class="token comment">// ---</span>

<span class="token comment">// bad - 不必要的大写键，没有增加任何语义</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">MAPPING</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">KEY</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">MAPPING</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="get-set-访问器" tabindex="-1"><a class="header-anchor" href="#get-set-访问器" aria-hidden="true">#</a> Get-Set 访问器</h2><p><a name="24.1"></a><a name="accessors--not-required"></a></p><ul><li><a href="#accessors--not-required">24.1</a> 不需要使用属性的访问器函数。</li></ul><p><a name="24.2"></a><a name="accessors--no-getters-setters"></a></p><ul><li><p><a href="#accessors--no-getters-setters">24.2</a> 不要使用 JavaScript 的 getters/setters，因为他们会产生副作用，并且难以测试、维护和理解。相反的，你可以用 <code>getVal()</code> 和 <code>setVal(&#39;hello&#39;)</code> 去创造你自己的访问器函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Dragon</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Dragon</span> <span class="token punctuation">{</span>
  <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="24.3"></a><a name="accessors--boolean-prefix"></a></p><ul><li><p><a href="#accessors--boolean-prefix">24.3</a> 如果属性/方法是 <code>boolean</code>， 用 <code>isVal()</code> 或 <code>hasVal()</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dragon<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dragon<span class="token punctuation">.</span><span class="token function">hasAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="24.4"></a><a name="accessors--consistent"></a></p><ul><li><p><a href="#accessors--consistent">24.4</a> 用 <code>get()</code> 和 <code>set()</code> 函数是可以的，但是要一起用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Jedi</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lightsaber <span class="token operator">=</span> options<span class="token punctuation">.</span>lightsaber <span class="token operator">||</span> <span class="token string">&#39;blue&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;lightsaber&#39;</span><span class="token punctuation">,</span> lightsaber<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p><a name="25.1"></a><a name="events--hash"></a></p><ul><li><p><a href="#events--hash">25.1</a> 当传递数据载荷给事件时（不论是 DOM 还是像 Backbone 这样有很多属性的事件）。这使得后续的贡献者（程序员）向这个事件添加更多的数据时不用去找或者更新每个处理器。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> listing<span class="token punctuation">.</span>id<span class="token punctuation">)</span>

<span class="token comment">// ...</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> listingID</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with listingID</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prefer:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">listingID</span><span class="token operator">:</span> listing<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ...</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with data.listingID</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h2><p><a name="26.1"></a><a name="jquery--dollar-prefix"></a></p><ul><li><p><a href="#jquery--dollar-prefix">26.1</a> jQuery 对象用<code>$</code>变量表示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> $sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> $sidebarBtn <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar-btn&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="26.2"></a><a name="jquery--cache"></a></p><ul><li><p><a href="#jquery--cache">26.2</a> 缓存 jQuery 查找。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">setSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// ...</span>

  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">setSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> $sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span>
  $sidebar<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// ...</span>

  $sidebar<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="26.3"></a><a name="jquery--queries"></a></p>`,31),Ki=n("a",{href:"#jquery--queries"},"26.3",-1),Xi=n("code",null,"$('.sidebar ul')",-1),Zi=n("code",null,"$('.sidebar > ul')",-1),nu={href:"http://jsperf.com/jquery-find-vs-context-sel/16",target:"_blank",rel:"noopener noreferrer"},su=a(`<p><a name="26.4"></a><a name="jquery--find"></a></p><ul><li><p><a href="#jquery--find">26.4</a> 用 jQuery 对象查询作用域的 <code>find</code> 方法查询。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar &gt; ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
$sidebar<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ back to top</a></strong></p><h2 id="ecmascript-5-兼容性" tabindex="-1"><a class="header-anchor" href="#ecmascript-5-兼容性" aria-hidden="true">#</a> ECMAScript 5 兼容性</h2><p><a name="27.1"></a><a name="es5-compat--kangax"></a></p>`,5),au=n("a",{href:"#es5-compat--kangax"},"27.1",-1),eu={href:"https://twitter.com/kangax/",target:"_blank",rel:"noopener noreferrer"},tu={href:"https://kangax.github.io/es5-compat-table/",target:"_blank",rel:"noopener noreferrer"},pu=a('<p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 返回顶部</a></strong></p><h2 id="ecmascript-6-es-2015-风格" tabindex="-1"><a class="header-anchor" href="#ecmascript-6-es-2015-风格" aria-hidden="true">#</a> ECMAScript 6+ (ES 2015+) 风格</h2><p><a name="28.1"></a><a name="es6-styles"></a></p><ul><li><a href="#es6-styles">28.1</a> 这是收集到的各种 ES6 特性的链接</li></ul><ol><li><a href="#arrow-functions">箭头函数——Arrow Functions</a></li><li><a href="#classes--constructors">类——Classes</a></li><li><a href="#es6-object-shorthand">对象缩写——Object Shorthand</a></li><li><a href="#es6-object-concise">对象简写——Object Concise</a></li><li><a href="#es6-computed-properties">对象计算属性——Object Computed Properties</a></li><li><a href="#es6-template-literals">模板字符串——Template Strings</a></li><li><a href="#destructuring">解构赋值——Destructuring</a></li><li><a href="#es6-default-parameters">默认参数——Default Parameters</a></li><li><a href="#es6-rest">剩余参数——Rest</a></li><li><a href="#es6-array-spreads">数组拓展——Array Spreads</a></li><li><a href="#references">Let and Const</a></li><li><a href="#es2016-properties--exponentiation-operator">幂操作符——Exponentiation Operator</a></li><li><a href="#iterators-and-generators">迭代器和生成器——Iterators and Generators</a></li><li><a href="#modules">模块——Modules</a></li></ol><p><a name="28.2"></a><a name="tc39-proposals"></a></p>',6),ou=n("a",{href:"#tc39-proposals"},"28.2",-1),cu={href:"https://github.com/tc39/proposals",target:"_blank",rel:"noopener noreferrer"},lu={href:"https://tc39.github.io/process-document/",target:"_blank",rel:"noopener noreferrer"},iu=n("p",null,[n("strong",null,[n("a",{href:"#%E7%9B%AE%E5%BD%95"},"⬆ 回到顶部")])],-1),uu=n("h2",{id:"标准库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标准库","aria-hidden":"true"},"#"),s(" 标准库")],-1),ru={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},du=n("p",null,[n("a",{name:"29.1"}),n("a",{name:"standard-library--isnan"})],-1),ku=n("a",{href:"#standard-library--isnan"},"29.1",-1),vu=n("code",null,"Number.isNaN",-1),mu=n("code",null,"isNaN",-1),bu={href:"https://eslint.org/docs/rules/no-restricted-globals",target:"_blank",rel:"noopener noreferrer"},gu=n("code",null,"no-restricted-globals",-1),hu=a(`<blockquote><p>为什么？全局 <code>isNaN</code> 强制把非数字转成数字， 然后对于任何强转后为 <code>NaN</code> 的变量都返回 <code>true</code> 如果你想用这个功能，就显式的用它。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;1.2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// good</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fu=n("p",null,[n("a",{name:"29.2"}),n("a",{name:"standard-library--isfinite"})],-1),yu=n("a",{href:"#standard-library--isfinite"},"29.2",-1),_u=n("code",null,"Number.isFinite",-1),wu=n("code",null,"isFinite",-1),ju={href:"https://eslint.org/docs/rules/no-restricted-globals",target:"_blank",rel:"noopener noreferrer"},xu=n("code",null,"no-restricted-globals",-1),Eu=a(`<blockquote><p>Why? 理由同上，会把一个非数字变量强转成数字，然后做判断。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;2e3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// good</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;2e3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;2e3&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function qu(Au,Bu){const e=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("p",null,[n("a",d,[s("原文链接"),t(e)])]),k,n("ul",null,[n("li",null,[n("p",null,[v,s(" 所有的赋值都用 "),m,s("，避免使用 "),b,s("。eslint: "),n("a",g,[h,t(e)]),s(", "),n("a",f,[y,t(e)])]),_])]),w,n("ul",null,[n("li",null,[n("p",null,[j,s(" 如果你一定要对参数重新赋值，使用 "),x,s("，而不是 "),E,s("。eslint: "),n("a",q,[A,t(e)])]),B])]),S,n("ul",null,[n("li",null,[n("p",null,[N,s(" 使用字面值创建对象。eslint: "),n("a",D,[C,t(e)])]),O])]),I,n("ul",null,[n("li",null,[n("p",null,[T,s(" 用对象方法简写。eslint: "),n("a",F,[P,t(e)])]),z])]),L,n("ul",null,[n("li",null,[n("p",null,[J,s(" 用属性值缩写。eslint: "),n("a",$,[M,t(e)])]),R])]),G,n("ul",null,[n("li",null,[n("p",null,[H,s(" 只对那些无效的标示使用引号 "),V,s("。eslint: "),n("a",W,[Q,t(e)])]),U])]),Y,n("ul",null,[n("li",null,[n("p",null,[K,s(" 对象浅拷贝时，更推荐使用扩展运算符（即 "),X,s(" 运算符），而不是 "),n("a",Z,[nn,t(e)]),s("。获取对象指定的几个属性时，用对象的 rest 解构运算符（即 "),sn,s(" 运算符）更好。eslint: "),n("a",an,[en,t(e)])]),tn])]),pn,n("ul",null,[n("li",null,[n("p",null,[on,s(" 用字面量创建数组。eslint: "),n("a",cn,[ln,t(e)])]),un])]),rn,n("ul",null,[n("li",null,[n("p",null,[dn,s(" 用 "),n("a",kn,[s("Array#push"),t(e)]),s(" 代替直接向数组中添加一个值。")]),vn])]),mn,n("ul",null,[n("li",null,[n("p",null,[bn,s(" 用 "),gn,s(" 运算符而不是 "),n("a",hn,[fn,t(e)]),s(" 来将一个可迭代的对象转换成数组。")]),yn])]),_n,n("ul",null,[n("li",null,[n("p",null,[wn,s(" 用 "),n("a",jn,[xn,t(e)]),s(" 将一个类数组对象转成一个数组。")]),En])]),qn,n("ul",null,[n("li",null,[n("p",null,[An,s(" 用 "),n("a",Bn,[Sn,t(e)]),s(" 而不是 "),Nn,s(" 运算符去做 map 遍历。 因为这样可以避免创建一个临时数组。")]),Dn])]),Cn,n("ul",null,[n("li",null,[n("p",null,[On,s(" 在数组方法的回调函数中使用 return 语句。如果函数体由一条返回一个表达式的语句组成，并且这个表达式没有副作用， 这个时候可以忽略 return，详见 "),In,s("。eslint: "),n("a",Tn,[Fn,t(e)])]),Pn])]),zn,n("ul",null,[n("li",null,[n("p",null,[Ln,s(" 用对象的解构赋值来获取和使用对象某个或多个属性值。eslint: "),n("a",Jn,[$n,t(e)])]),Mn])]),Rn,n("ul",null,[n("li",null,[n("p",null,[Gn,s(" 用数组解构。eslint: "),n("a",Hn,[Vn,t(e)])]),Wn])]),Qn,n("ul",null,[n("li",null,[n("p",null,[Un,s(" 字符串应使用单引号 "),Yn,s(" 。eslint: "),n("a",Kn,[Xn,t(e)])]),Zn])]),ns,n("ul",null,[n("li",null,[n("p",null,[ss,s(" 当需要动态生成字符串时，使用模板字符串而不是字符串拼接。eslint: "),n("a",as,[es,t(e)]),s(),n("a",ts,[ps,t(e)])]),os])]),cs,n("ul",null,[n("li",null,[ls,s(" 永远不要使用 "),is,s("，该方法有太多漏洞。eslint: "),n("a",us,[rs,t(e)])])]),ds,n("ul",null,[n("li",null,[n("p",null,[ks,s(" 不要使用不必要的转义字符。eslint: "),n("a",vs,[ms,t(e)])]),bs])]),gs,n("ul",null,[n("li",null,[n("p",null,[hs,s(" 使用命名函数表达式而不是函数声明。eslint: "),n("a",fs,[ys,t(e)])]),_s,n("blockquote",null,[n("p",null,[s("译者注：这一段可能不是很好理解，简单来说就是使用函数声明会发生提升（即在函数被声明之前就可以使用），使用匿名函数会导致难以追踪错误。"),n("a",ws,[s("这一段英文原文在这"),t(e)]),s("。")])]),js])]),xs,n("ul",null,[n("li",null,[n("p",null,[Es,s(" 把立即执行函数包裹在圆括号里。eslint: "),n("a",qs,[As,t(e)])]),Bs])]),Ss,n("ul",null,[n("li",null,[Ns,s(" 不要在非函数块（"),Ds,s("、"),Cs,s(" 等）内声明函数。把这个函数分配给一个变量。浏览器会允许你这样做，但不同浏览器的解析方式不同，这是一个坏消息。eslint: "),n("a",Os,[Is,t(e)])])]),Ts,n("ul",null,[n("li",null,[n("p",null,[Fs,s(" 不要使用 "),Ps,s("，用收集参数语法 "),zs,s(" 代替。eslint: "),n("a",Ls,[Js,t(e)])]),$s])]),Ms,n("ul",null,[n("li",null,[n("p",null,[Rs,s(" 把默认参数赋值放在最后。eslint: "),n("a",Gs,[Hs,t(e)])]),Vs])]),Ws,n("ul",null,[n("li",null,[n("p",null,[Qs,s(" 不要用函数构造器创建函数。eslint: "),n("a",Us,[Ys,t(e)])]),Ks])]),Xs,n("ul",null,[n("li",null,[n("p",null,[Zs,s(" 函数定义部分要有空格。eslint: "),n("a",na,[sa,t(e)]),s(),n("a",aa,[ea,t(e)])]),ta])]),pa,n("ul",null,[n("li",null,[n("p",null,[oa,s(" 不要修改参数. eslint: "),n("a",ca,[la,t(e)])]),ia])]),ua,n("ul",null,[n("li",null,[n("p",null,[ra,s(" 不要对参数重新赋值。eslint: "),n("a",da,[ka,t(e)])]),va])]),ma,n("ul",null,[n("li",null,[n("p",null,[ba,s(" 使用拓展运算符调用多参数的函数。eslint: "),n("a",ga,[ha,t(e)])]),fa])]),ya,n("ul",null,[n("li",null,[n("p",null,[_a,s(" 当你一定要用函数表达式（在回调函数里）的时候，使用箭头函数。 eslint: "),n("a",wa,[ja,t(e)]),s(", "),n("a",xa,[Ea,t(e)])]),qa])]),Aa,n("ul",null,[n("li",null,[n("p",null,[Ba,s(" 如果函数体由一个没有副作用的 "),n("a",Sa,[s("表达式"),t(e)]),s(" 语句组成，删除大括号和 return。否则，使用大括号和 "),Na,s(" 语句。 eslint: "),n("a",Da,[Ca,t(e)]),s(", "),n("a",Oa,[Ia,t(e)])]),Ta])]),Fa,n("ul",null,[n("li",null,[n("p",null,[Pa,s(" 在箭头函数参数两头，总是使用小括号包裹住参数，这样做使代码更清晰且一致. eslint: "),n("a",za,[La,t(e)])]),Ja])]),$a,n("ul",null,[n("li",null,[n("p",null,[Ma,s(" 避免箭头函数（"),Ra,s("）和比较操作符（"),Ga,s(", "),Ha,s("）混淆. eslint: "),n("a",Va,[Wa,t(e)])]),Qa])]),Ua,n("ul",null,[n("li",null,[n("p",null,[Ya,s(" 使箭头函数体有一个清晰的返回。 eslint: "),n("a",Ka,[Xa,t(e)])]),Za])]),ne,n("ul",null,[n("li",null,[n("p",null,[se,s(" 如果没有特别定义，类有默认的构造方法。一个空的构造函数或只是代表父类的构造函数是不需要写的。 eslint: "),n("a",ae,[ee,t(e)])]),te])]),pe,n("ul",null,[n("li",null,[n("p",null,[oe,s(" 避免重复定义类成员。eslint: "),n("a",ce,[le,t(e)])]),ie])]),ue,n("ul",null,[n("li",null,[n("p",null,[re,s(" 除非外部库或框架需要使用特定的非静态方法，否则类方法应该使用 "),de,s(" 或被写成静态方法。 作为一个实例方法表明它应该根据实例的属性有不同的行为。eslint: "),n("a",ke,[ve,t(e)])]),me])]),be,n("ul",null,[n("li",null,[n("p",null,[ge,s(" 一个路径只 "),he,s(" 一次。eslint: "),n("a",fe,[ye,t(e)])]),_e])]),we,n("ul",null,[n("li",null,[n("p",null,[je,s(" 不要导出可变的东西。eslint: "),n("a",xe,[Ee,t(e)])]),qe])]),Ae,n("ul",null,[n("li",null,[Be,s(" 在一个单一导出模块里，用 "),Se,s(" 更好。eslint: "),n("a",Ne,[De,t(e)])])]),Ce,n("ul",null,[n("li",null,[n("p",null,[Oe,s(" 把 "),Ie,s(" 放在其他所有语句之前。eslint: "),n("a",Te,[Fe,t(e)])]),Pe])]),ze,n("ul",null,[n("li",null,[n("p",null,[Le,s(" 在 "),Je,s(" 语句里不允许 Webpack loader 语法。eslint: "),n("a",$e,[Me,t(e)])]),Re])]),Ge,n("ul",null,[n("li",null,[n("p",null,[He,s(" 不要用迭代器。使用 JavaScript 高级函数代替 "),Ve,s("、 "),We,s("。eslint: "),n("a",Qe,[Ue,t(e)]),s(),n("a",Ye,[Ke,t(e)])]),Xe])]),Ze,n("ul",null,[n("li",null,[n("p",null,[nt,s(" 如果你一定要用生成器，或者你忽略 "),st,s("，请确保它们的函数标志空格是得当的。eslint: "),n("a",at,[et,t(e)])]),tt])]),pt,n("ul",null,[n("li",null,[n("p",null,[ot,s(" 访问属性时使用点符号。eslint: "),n("a",ct,[lt,t(e)])]),it])]),ut,n("ul",null,[n("li",null,[n("p",null,[rt,s(" 做幂运算时用幂操作符 "),dt,s(" 。eslint: "),n("a",kt,[vt,t(e)]),s(".")]),mt])]),bt,n("ul",null,[n("li",null,[n("p",null,[gt,s(" 使用 "),ht,s(" 或 "),ft,s(" 声明变量。不这样做会导致全局变量。我们想要避免污染全局命名空间。地球超人也这样警告我们（译者注：可能是一个冷笑话）。 eslint: "),n("a",yt,[_t,t(e)]),s(),n("a",wt,[jt,t(e)])]),xt])]),Et,n("ul",null,[n("li",null,[n("p",null,[qt,s(" 为每个变量声明都用一个 "),At,s(" 或 "),Bt,s("。eslint: "),n("a",St,[Nt,t(e)])]),Dt])]),Ct,n("ul",null,[Ot,n("li",null,[n("p",null,[It,s(" 不要使用链式声明变量。 eslint: "),n("a",Tt,[Ft,t(e)])]),Pt])]),zt,n("ul",null,[n("li",null,[n("p",null,[Lt,s(" 不要使用一元自增自减运算符（"),Jt,s("， "),$t,s("）. eslint "),n("a",Mt,[Rt,t(e)])]),Gt])]),Ht,n("ul",null,[n("li",null,[n("p",null,[Vt,s(" 在赋值的时候避免在 "),Wt,s(" 前/后换行。 如果你的赋值语句超出 "),n("a",Qt,[Ut,t(e)]),s("，那就用小括号把这个值包起来再换行。eslint "),n("a",Yt,[Kt,t(e)]),s(".")]),Xt])]),Zt,n("ul",null,[n("li",null,[n("p",null,[np,s(" 不允许有未使用的变量。eslint: "),n("a",sp,[ap,t(e)])]),ep])]),tp,n("ul",null,[n("li",null,[n("p",null,[pp,s(),op,s(" 声明会被提前到离他最近的作用域的最前面，但是它的赋值语句并没有提前。"),cp,s(" 和 "),lp,s(" 被赋予了新的概念 "),n("a",ip,[s("暂时性死区"),t(e)]),s("。 重要的是要知道为什么 "),n("a",up,[s("typeof 不再安全"),t(e)]),s(".")]),rp])]),dp,n("ul",null,[kp,n("li",null,[n("p",null,[s("详情请见 "),n("a",vp,[s("JavaScript Scoping & Hoisting"),t(e)]),s(" by "),n("a",mp,[s("Ben Cherry"),t(e)]),s(".")])])]),bp,n("ul",null,[n("li",null,[gp,s(" 用 "),hp,s(" 和 "),fp,s(" 而不是 "),yp,s(" 和 "),_p,s(". eslint: "),n("a",wp,[jp,t(e)])])]),xp,n("ul",null,[n("li",null,[Ep,s(" 更多信息请见 Angus Croll 的 "),n("a",qp,[s("Truth Equality and JavaScript"),t(e)]),s("。")])]),Ap,n("ul",null,[n("li",null,[n("p",null,[Bp,s(" 在 "),Sp,s(" 和 "),Np,s(" 分句里用大括号创建一块包含词法声明的区域（例如："),Dp,s("、"),Cp,s("、"),Op,s(" 和 "),Ip,s("）。eslint rules: "),n("a",Tp,[Fp,t(e)]),s(".")]),Pp])]),zp,n("ul",null,[n("li",null,[n("p",null,[Lp,s(" 三元表达式不应该嵌套，通常是单行表达式。eslint rules: "),n("a",Jp,[$p,t(e)])]),Mp])]),Rp,n("ul",null,[n("li",null,[n("p",null,[Gp,s(" 避免不必要的三元表达式。eslint rules: "),n("a",Hp,[Vp,t(e)])]),Wp])]),Qp,n("ul",null,[n("li",null,[n("p",null,[Up,s(" 用圆括号来组合操作符。 只有当标准的算术运算符（"),Yp,s(", "),Kp,s(", "),Xp,s(", 和 "),Zp,s("）， 并且它们的优先级显而易见时，才可以不用圆括号括起来。eslint: "),n("a",no,[so,t(e)])]),ao])]),eo,n("ul",null,[n("li",null,[n("p",null,[to,s(" 用大括号包裹多行代码块。 eslint: "),n("a",po,[oo,t(e)])]),co])]),lo,n("ul",null,[n("li",null,[n("p",null,[io,s(),uo,s(" 表达式的 "),ro,s("和 "),ko,s(" 的右大括号在一行。eslint: "),n("a",vo,[mo,t(e)])]),bo])]),go,n("ul",null,[n("li",null,[n("p",null,[ho,s(" 如果 "),fo,s(" 语句中总是需要用 "),yo,s(" 返回，那后续的 "),_o,s(" 就不需要写了。 "),wo,s(" 块中包含 "),jo,s("， 它后面的 "),xo,s(" 块中也包含了 "),Eo,s("， 这个时候就可以把 "),qo,s(" 分到多个 "),Ao,s(" 语句块中。 eslint: "),n("a",Bo,[So,t(e)])]),No])]),Do,n("ul",null,[n("li",null,[n("p",null,[Co,s(" 所有注释开头空一格，方便阅读。eslint: "),n("a",Oo,[Io,t(e)])]),To])]),Fo,n("ul",null,[n("li",null,[n("p",null,[Po,s(" 一个缩进使用两个空格。eslint: "),n("a",zo,[Lo,t(e)])]),Jo])]),$o,n("ul",null,[n("li",null,[n("p",null,[Mo,s(" 在大括号前空一格。eslint: "),n("a",Ro,[Go,t(e)])]),Ho])]),Vo,n("ul",null,[n("li",null,[n("p",null,[Wo,s(" 在控制语句（"),Qo,s(", "),Uo,s(" 等）的圆括号前空一格。在函数调用和定义时，参数列表和函数名之间不空格。 eslint: "),n("a",Yo,[Ko,t(e)])]),Xo])]),Zo,n("ul",null,[n("li",null,[n("p",null,[nc,s(" 用空格来隔开运算符。eslint: "),n("a",sc,[ac,t(e)])]),ec])]),tc,n("ul",null,[n("li",null,[n("p",null,[pc,s(" 文件结尾空一行。eslint: "),n("a",oc,[cc,t(e)])]),lc])]),ic,n("ul",null,[n("li",null,[n("p",null,[uc,s(" 当出现长的方法链式调用时（>2 个）用缩进。用点开头强调该行是一个方法调用，而不是一个新的语句。eslint: "),n("a",rc,[dc,t(e)]),s(),n("a",kc,[vc,t(e)])]),mc])]),bc,n("ul",null,[n("li",null,[n("p",null,[gc,s(" 不要用空白行填充块。eslint: "),n("a",hc,[fc,t(e)])]),yc])]),_c,n("ul",null,[n("li",null,[wc,s(" 不要在代码之间使用多个空白行填充。eslint: "),n("a",jc,[xc,t(e)])])]),Ec,n("ul",null,[n("li",null,[n("p",null,[qc,s(" 圆括号里不要加空格。eslint: "),n("a",Ac,[Bc,t(e)])]),Sc])]),Nc,n("ul",null,[n("li",null,[n("p",null,[Dc,s(" 方括号里不要加空格。 eslint: "),n("a",Cc,[Oc,t(e)])]),Ic])]),Tc,n("ul",null,[n("li",null,[n("p",null,[Fc,s(" 花括号里加空格 。eslint: "),n("a",Pc,[zc,t(e)])]),Lc])]),Jc,n("ul",null,[n("li",null,[n("p",null,[$c,s(" 避免一行代码超过 100 个字符（包含空格）。注意：对于 "),Mc,s("，长字符串不受此规则限制，不应换行。 eslint: "),n("a",Rc,[Gc,t(e)])]),Hc])]),Vc,n("ul",null,[n("li",null,[n("p",null,[Wc,s(" 作为语句的花括号内也要加空格 —— "),Qc,s(" 后和 "),Uc,s(" 前都需要空格。 eslint: "),n("a",Yc,[Kc,t(e)])]),Xc])]),Zc,n("ul",null,[n("li",null,[n("p",null,[nl,s(),sl,s(" 前不要空格， "),al,s(" 后需要空格。 eslint: "),n("a",el,[tl,t(e)])]),pl])]),ol,n("ul",null,[n("li",null,[n("p",null,[cl,s(" 强制计算特性括号内的间距（不要有空格）。 eslint: "),n("a",ll,[il,t(e)])]),ul])]),rl,n("ul",null,[n("li",null,[n("p",null,[dl,s(" 调用函数时，函数名和小括号之间不要空格。 eslint: "),n("a",kl,[vl,t(e)])]),ml])]),bl,n("ul",null,[n("li",null,[n("p",null,[gl,s(" 在对象的字面量属性中， "),hl,s(" 和 "),fl,s(" 之间要有空格。 eslint: "),n("a",yl,[_l,t(e)])]),wl])]),jl,n("ul",null,[n("li",null,[xl,s(" 行末不要空格。 eslint: "),n("a",El,[ql,t(e)])])]),Al,n("ul",null,[n("li",null,[n("p",null,[Bl,s(" 避免出现多个空行。 在文件末尾只允许空一行。避免在文件开始处出现空行。eslint: "),n("a",Sl,[Nl,t(e)])]),Dl])]),Cl,n("ul",null,[n("li",null,[n("p",null,[Ol,s(" 不要前置逗号。eslint: "),n("a",Il,[Tl,t(e)])]),Fl])]),Pl,n("ul",null,[n("li",null,[n("p",null,[zl,s(" 额外结尾逗号: "),Ll,s(" eslint: "),n("a",Jl,[$l,t(e)])]),n("blockquote",null,[n("p",null,[s("为什么？这使 git diffs 更简洁。此外，像 Babel 这样的转换器会删除转换代码中的额外的逗号，这意味着你不必担心旧版浏览器中的 "),n("a",Ml,[s("结尾逗号问题"),t(e)]),s("。")])]),Rl])]),Gl,Hl,Vl,n("ul",null,[n("li",null,[n("p",null,[Wl,s(),Ql,s(" eslint: "),n("a",Ul,[Yl,t(e)])]),n("blockquote",null,[n("p",null,[s("为什么？当 JavaScript 遇到没有分号结尾的一行，它会执行 "),n("a",Kl,[s("自动插入分号"),t(e)]),s(" 这一规则来决定行末是否加分号。如果 JavaScript 在你的断行里错误的插入了分号，就会出现一些古怪的行为。当新的功能加到 JavaScript 里后， 这些规则会变得更复杂难懂。清晰的结束语句，并通过配置代码检查去检查没有带分号的地方可以帮助你防止这种错误。")])]),Xl])]),n("p",null,[n("a",Zl,[s("更多"),t(e)]),s(".")]),ni,n("ul",null,[n("li",null,[n("p",null,[si,s(" 字符串: eslint: "),n("a",ai,[ei,t(e)])]),ti])]),pi,n("ul",null,[n("li",null,[n("p",null,[oi,s(" 数字: 用 "),ci,s(" 做类型转换，"),li,s(" 转换 "),ii,s(" 应总是带上基数。 eslint: "),n("a",ui,[ri,t(e)])]),di])]),ki,n("ul",null,[n("li",null,[n("p",null,[vi,s(" 请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事，比如由于 "),mi,s(" 是你的性能瓶颈导致你一定要用移位运算。说明这个是因为 "),n("a",bi,[s("性能原因"),t(e)]),s("。")]),gi])]),hi,n("ul",null,[n("li",null,[n("p",null,[fi,s(),yi,s(" 用移位运算要小心。数字是用 "),n("a",_i,[s("64-位"),t(e)]),s("表示的，但移位运算常常返回的是 32 为整形"),n("a",wi,[s("source"),t(e)]),s(")。移位运算对大于 32 位的整数会导致意外行为。"),n("a",ji,[s("Discussion"),t(e)]),s(". 最大的 32 位整数是 2,147,483,647:")]),xi])]),Ei,n("ul",null,[n("li",null,[n("p",null,[qi,s(" 避免用一个字母命名，让你的命名有意义。eslint: "),n("a",Ai,[Bi,t(e)])]),Si])]),Ni,n("ul",null,[n("li",null,[n("p",null,[Di,s(" 用小驼峰命名法来命名你的对象、函数、实例。eslint: "),n("a",Ci,[Oi,t(e)])]),Ii])]),Ti,n("ul",null,[n("li",null,[n("p",null,[Fi,s(" 用大驼峰命名法来命名类。eslint: "),n("a",Pi,[zi,t(e)])]),Li])]),Ji,n("ul",null,[n("li",null,[n("p",null,[$i,s(" 不要用前置或后置下划线。eslint: "),n("a",Mi,[Ri,t(e)])]),Gi])]),Hi,n("ul",null,[n("li",null,[n("p",null,[Vi,s(" 不要保存引用 "),Wi,s("，用箭头函数或 "),n("a",Qi,[s("函数绑定——Function#bind"),t(e)]),s("。")]),Ui])]),Yi,n("ul",null,[n("li",null,[Ki,s(" DOM 查找用层叠式"),Xi,s(" 或 父节点 > 子节点 "),Zi,s(". "),n("a",nu,[s("jsPerf"),t(e)])])]),su,n("ul",null,[n("li",null,[au,s(" 参考 "),n("a",eu,[s("Kangax"),t(e)]),s(" 的 ES5 "),n("a",tu,[s("兼容性列表"),t(e)]),s(".")])]),pu,n("ul",null,[n("li",null,[n("p",null,[ou,s(" 不要用 "),n("a",cu,[s("TC39 proposals"),t(e)]),s("， TC39 还没有到 stage 3。")]),n("blockquote",null,[n("p",null,[s("为什么？ "),n("a",lu,[s("它还不是最终版"),t(e)]),s(", 他可能还有很多变化，或者被撤销。我们想要用的是 JavaScript， 提议还不是 JavaScript。")])])])]),iu,uu,n("p",null,[n("a",ru,[s("标准库"),t(e)]),s("中包含一些功能受损但是由于历史原因遗留的工具类")]),du,n("ul",null,[n("li",null,[n("p",null,[ku,s(" 用 "),vu,s(" 代替全局的 "),mu,s("。 eslint: "),n("a",bu,[gu,t(e)])]),hu])]),fu,n("ul",null,[n("li",null,[n("p",null,[yu,s(" 用 "),_u,s(" 代替 "),wu,s(". eslint: "),n("a",ju,[xu,t(e)])]),Eu])])])}const Nu=p(i,[["render",qu],["__file","code-js.html.vue"]]);export{Nu as default};
