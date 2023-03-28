import{_ as e,p as a,q as n,a1 as o}from"./framework-201fec1f.js";const r={},d=o(`<h1 id="monorepo" tabindex="-1"><a class="header-anchor" href="#monorepo" aria-hidden="true">#</a> Monorepo</h1><p><code>yarn init -y</code></p><p><code>yarn add -D lerna &amp;&amp; lerna init</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># package.json
&quot;private&quot;: true, // root禁止发布
// 配置package目录
&quot;workspaces&quot;: [
  &quot;packages/*&quot;
] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lerna" tabindex="-1"><a class="header-anchor" href="#lerna" aria-hidden="true">#</a> Lerna</h2><p><code>independent</code> 独立的 版本控制模式</p>`,6),i=[d];function t(s,c){return a(),n("div",null,i)}const p=e(r,[["render",t],["__file","monorepo.html.vue"]]);export{p as default};
