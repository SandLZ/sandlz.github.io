import{_ as e,M as t,p as o,q as c,R as n,t as s,N as p,a1 as r}from"./framework-201fec1f.js";const i={},l=n("h1",{id:"redux-logger",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redux-logger","aria-hidden":"true"},"#"),s(" redux-logger")],-1),d=n("blockquote",null,[n("p",null,[n("code",null,"redux-logger"),s(" 是一个生产Redux日志记录工具，可以让您重播问题，就像它们发生在您自己的浏览器中一样。让您可以重放Redux操作+状态、网络请求、控制台日志，并查看用户所看到的视频，而不是猜测错误发生的原因，或询问用户屏幕截图和日志转储。")])],-1),u={href:"https://github.com/LogRocket/redux-logger",target:"_blank",rel:"noopener noreferrer"},k=r(`<h2 id="控制台日志" tabindex="-1"><a class="header-anchor" href="#控制台日志" aria-hidden="true">#</a> 控制台日志</h2><div><img src="https://github.com/sandlz/images/raw/master/uPic/MX5TX5.png"></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> applyMiddleware<span class="token punctuation">,</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Logger with default options</span>
<span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">&#39;redux-logger&#39;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  reducer<span class="token punctuation">,</span>
  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> applyMiddleware<span class="token punctuation">,</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-logger&#39;</span>

<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...options</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  reducer<span class="token punctuation">,</span>
  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>logger</code> 必须是链中的<strong>最后一个中间件</strong>，否则它将记录 <code>thunk</code> 和 <code>promise</code>，而不是实际操作</p></div>`,7);function v(g,m){const a=t("ExternalLinkIcon");return o(),c("div",null,[l,d,n("p",null,[n("a",u,[s("文档地址"),p(a)])]),k])}const b=e(i,[["render",v],["__file","redux-logger.html.vue"]]);export{b as default};
