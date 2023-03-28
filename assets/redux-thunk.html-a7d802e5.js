import{_ as e,M as t,p as o,q as p,R as n,t as c,N as i,a1 as s}from"./framework-201fec1f.js";const d={},l=s('<h1 id="redux-thunk" tabindex="-1"><a class="header-anchor" href="#redux-thunk" aria-hidden="true">#</a> redux-thunk</h1><p><code>thunk</code> 一词是一个编程术语，意思是<strong>一段执行延迟工作的代码</strong>。我们可以编写一个函数体或代码，用于以后执行工作，而不是现在执行一些逻辑。</p><p>特别是对于<code>Redux</code>，<code>thunks</code> 是一种编写函数的模式，其中包含逻辑，可以与 <code>Redux</code> 存储的 <code>dispatch</code> 和 <code>getState</code> 方法交互。</p><p>Thunks是在 <code>Redux</code> 应用程序中编写异步逻辑的标准方法，通常用于数据获取。但是，它们可以用于各种任务，并且可以包含同步和异步逻辑。</p>',4),r={href:"https://github.com/reduxjs/redux-thunk",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="why-thunk" tabindex="-1"><a class="header-anchor" href="#why-thunk" aria-hidden="true">#</a> Why thunk?</h2><p>Thunks 允许我们独立于UI层编写额外的Redux相关逻辑。此逻辑可能包括副作用，例如异步请求或生成随机值，以及需要调度多个操作或访问Redux存储状态的逻辑。</p><p><code>Redux Reducer</code> 不能包含副作用，但实际应用程序需要具有副作用的逻辑。其中一些可能位于组件内部，但一些可能需要位于UI层之外。</p><p>Thunks（和其他Redux中间件）为我们提供了一个放置这些副作用的位置。</p><p>在组件中直接使用逻辑是很常见的，例如在 <code>click</code> 处理程序或 <code>useEffect</code> 挂钩中发出异步请求，然后处理结果。然而，通常需要将尽可能多的逻辑移到UI层之外。这样做可能是为了提高逻辑的可测试性，使UI层尽可能薄和“呈现”，或者改进代码重用和共享。</p><p>从某种意义上说，thunk是一个漏洞，您可以提前编写需要与 <code>Redux</code> 存储交互的任何代码，而无需知道将使用哪个 <code>Redux</code> 存储。这可以防止逻辑绑定到任何特定的 <code>Redux</code> 存储实例，并保持其可重用性。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>由于 thunks 是一种通用工具，可包含任意逻辑，因此可用于多种用途。最常见的用例是：</p><ul><li>将复杂逻辑移出组件</li><li>发出异步请求或其他异步逻辑</li><li>编写需要在一行或一段时间内分派多个操作的逻辑</li><li>编写需要访问getState才能做出决策或在操作中包含其他状态值的逻辑</li></ul><p>Thunk是“一次性”功能，没有生命周期的意义。他们也看不到其他已调度的操作。因此，它们通常不应用于初始化WebSocket之类的持久连接，也不能用于响应其他操作。</p><p><strong>Thunks最适合用于复杂的同步逻辑，以及简单到中等的异步逻辑，如发出标准AJAX请求并根据请求结果分派操作。</strong></p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>Redux Toolkit</p><p>如果您按照建议使用我们的官方Redux Toolkit包，则无需安装-RTK的configureStore API已默认添加thunk中间件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@reduxjs/toolkit&#39;</span>

<span class="token keyword">import</span> todosReducer <span class="token keyword">from</span> <span class="token string">&#39;./features/todos/todosSlice&#39;</span>
<span class="token keyword">import</span> filtersReducer <span class="token keyword">from</span> <span class="token string">&#39;./features/filters/filtersSlice&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">todos</span><span class="token operator">:</span> todosReducer<span class="token punctuation">,</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span> filtersReducer
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// The thunk middleware was automatically added</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> redux-thunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span>
<span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">&#39;./reducers/index&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件如何工作" tabindex="-1"><a class="header-anchor" href="#中间件如何工作" aria-hidden="true">#</a> 中间件如何工作？</h2><p>首先，让我们回顾一下Redux中间件通常是如何工作的。</p><p>Redux中间件都编写为一系列3个嵌套函数：</p><ul><li>外部函数接收带有{dispatch，getState}的“storeapi”对象</li><li>中间函数接收链中的下一个中间件（或实际的store.dispatch方法）</li><li>内部函数将在每个操作通过中间件链时被调用</li></ul><p>需要注意的是，可以使用中间件将非操作对象的值传递到存储中。dispatch（），只要中间件拦截这些值并且不让它们到达还原器。</p><p>考虑到这一点，我们可以了解thunk中间件的细节。</p><p><code>thunk</code> 中间件的实际实现非常短-只有大约10行。以下是代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 标准中间件定义, 3个嵌套函数</span>
<span class="token comment">// 1) 接收 \`{dispatch, getState}\`</span>
<span class="token comment">// 2) 接收 \`next\`</span>
<span class="token comment">// 3) 接收 \`action\`</span>
<span class="token keyword">const</span> <span class="token function-variable function">thunkMiddleware</span> <span class="token operator">=</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> getState <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token parameter">next</span> <span class="token operator">=&gt;</span>
  <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 \`action\` 是方法</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用 \`action\`方法并传递\`dispatch\`、\`getState\`参数</span>
      <span class="token keyword">return</span> <span class="token function">action</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 否则，这是正常的 \`action\`，继续发送</span>
    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换言之：</p><ul><li>如果将函数传递给 <code>dispatch</code>，<code>thunk</code> 中间件会发现它是一个函数而不是一个 <code>action</code> 对象，拦截它，并以 <code>（dispatch，getState）</code>作为参数调用该函数</li><li>如果它是一个普通操作对象（或其他任何对象），它将被转发到链中的下一个中间件</li></ul><p>再次看下React中redux工作流程：</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/react_redux.svg" alt="react-redux"></div>`,30);function k(v,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[n("a",r,[c("文档地址"),i(a)])]),u])}const b=e(d,[["render",k],["__file","redux-thunk.html.vue"]]);export{b as default};