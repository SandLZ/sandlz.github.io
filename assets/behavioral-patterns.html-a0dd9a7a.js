import{_ as n,p as s,q as a,a1 as t}from"./framework-201fec1f.js";const p={},e=t(`<h1 id="行为模式" tabindex="-1"><a class="header-anchor" href="#行为模式" aria-hidden="true">#</a> 行为模式</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BaseHandler</span> <span class="token punctuation">{</span>
  <span class="token function">setNext</span><span class="token punctuation">(</span><span class="token parameter">nextHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> nextHandler<span class="token punctuation">;</span>
    <span class="token keyword">return</span> nextHandler<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;do some base logic...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HandlerA</span> <span class="token keyword">extends</span> <span class="token class-name">BaseHandler</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;【HandlerA】 do some logic...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HandlerB</span> <span class="token keyword">extends</span> <span class="token class-name">BaseHandler</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;【HandlerB】 do some logic...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HandlerC</span> <span class="token keyword">extends</span> <span class="token class-name">BaseHandler</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;【HandlerC】 do some logic...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ha <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> hb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> hc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HandlerC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


ha<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>hb<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>hc<span class="token punctuation">)</span>
    ha<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","behavioral-patterns.html.vue"]]);export{k as default};
