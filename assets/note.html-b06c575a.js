import{_ as n,p as s,q as a,a1 as e}from"./framework-201fec1f.js";const t={},o=e(`<h1 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h1><h2 id="选择器命名" tabindex="-1"><a class="header-anchor" href="#选择器命名" aria-hidden="true">#</a> 选择器命名</h2><p><strong>使用无嵌套的纯类名选择器</strong></p><ol><li>CSS选择器是从右向左进行匹配，如<code>.box &gt; div</code>是先匹配所有<code>&lt;div&gt;</code>元素，再匹配<code>.box</code>类名元素；</li><li>优先级混乱；</li><li>布局脆弱（修改时）；</li></ol><p><strong>面向属性的命名</strong></p><p>复用</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.dn</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.db</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","note.html.vue"]]);export{r as default};
