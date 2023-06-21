import{_ as s,p as a,q as n,a1 as e}from"./framework-201fec1f.js";const o={},t=e(`<h1 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> QA</h1><blockquote><p>Vue 常见问题汇总</p></blockquote><h2 id="v-if、v-show-区别" tabindex="-1"><a class="header-anchor" href="#v-if、v-show-区别" aria-hidden="true">#</a> <code>v-if</code>、<code>v-show</code> 区别</h2><details class="custom-container details"><summary>答案</summary><ul><li><code>v-if</code> 如果条件不成立不会渲染当前指令所在节点的DOM元素</li><li><code>v-show</code> 只是切换当前DOM的显示与隐藏(<code>dispaly:none</code>)</li></ul></details><h2 id="v-for-与-v-if-为什么不能一起使用" tabindex="-1"><a class="header-anchor" href="#v-for-与-v-if-为什么不能一起使用" aria-hidden="true">#</a> <code>v-for</code> 与 <code>v-if</code> 为什么不能一起使用</h2><details class="custom-container details"><summary>答案</summary><p><code>v-for</code> 具有更高的优先级，连用的话会把 v-if 的每个元素都添加一下，造成性能问题。</p></details><h2 id="computed-、watch-、method-作用及使用场景" tabindex="-1"><a class="header-anchor" href="#computed-、watch-、method-作用及使用场景" aria-hidden="true">#</a> <code>computed</code> 、<code>watch</code> 、<code>method</code> 作用及使用场景</h2><details class="custom-container details"><summary>答案</summary><ul><li><code>computed</code> 本质也是一个<code>watcher</code>,具备缓存，只有当依赖的数据变化时才会重新计算，否则使用缓存的数据</li><li><code>watch</code> 每次都需要执行函数。更适用于数据变化时的异步操作。</li><li><code>method</code> 只要把方法用到模板上了,每次一变化就会重新渲染视图，性能开销大</li></ul></details><h2 id="父子组件通信" tabindex="-1"><a class="header-anchor" href="#父子组件通信" aria-hidden="true">#</a> 父子组件通信</h2><details class="custom-container details"><summary>答案</summary><p>通信</p><ul><li><p><strong>父 --&gt; 子</strong> 参数传递：<code>props</code> 方法调用：<code>$ref</code></p></li><li><p><strong>子 --&gt; 父</strong> 参数传递：<code>$emit</code> 方法调用：<code>$parent</code></p></li></ul><p>获取组件实例</p><ul><li>依赖注入 父组件(provide),子组件(inject) (在开发高阶插件/组件库时推荐使用)</li><li>$ref 获取组件实例</li><li>Event-Bus</li><li>Vuex</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// provide-inject 示例</span>
<span class="token comment">// 父级组件提供 &#39;foo&#39;</span>
<span class="token keyword">var</span> Provider <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子组件注入 &#39;foo&#39;</span>
<span class="token keyword">var</span> Child <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// =&gt; &quot;bar&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10),c=[t];function i(l,p){return a(),n("div",null,c)}const r=s(o,[["render",i],["__file","qa.html.vue"]]);export{r as default};