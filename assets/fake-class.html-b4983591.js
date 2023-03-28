import{_ as c,M as d,p as r,q as s,R as e,t as o,N as t,a1 as n}from"./framework-201fec1f.js";const i={},h=n('<h1 id="伪类和伪元素" tabindex="-1"><a class="header-anchor" href="#伪类和伪元素" aria-hidden="true">#</a> 伪类和伪元素</h1><h2 id="为什么-css-要引入伪元素和伪类" tabindex="-1"><a class="header-anchor" href="#为什么-css-要引入伪元素和伪类" aria-hidden="true">#</a> 为什么 <code>css</code> 要引入伪元素和伪类？</h2><p><code>css</code> 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。</p><p><strong>伪类</strong>用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过<code>:hover</code> 来描述这个元素的状态。虽然它和普通的 css 类相似，可以为已有的元素添加样式，但是它只有处于 dom 树无法描述的状态下才能为元素添加样式，所以将其称为伪类。</p><p><strong>伪元素</strong>用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过<code>:before</code> 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。</p><h2 id="伪元素是使用单冒号还是双冒号" tabindex="-1"><a class="header-anchor" href="#伪元素是使用单冒号还是双冒号" aria-hidden="true">#</a> 伪元素是使用单冒号还是双冒号？</h2><p>CSS3 规范中的要求使用双冒号 (<code>::</code>) 表示伪元素，以此来区分伪元素和伪类，比如<code>::before</code> 和<code>::after</code> 等伪元素使用双冒号 (<code>::</code>)，<code>:hover</code> 和<code>:active</code> 等伪类使用单冒号 (<code>:</code>)。除了一些低于 IE8 版本的浏览器外，大部分浏览器都支持伪元素的双冒号 (<code>::</code>) 表示方法。</p><p>然而，除了少部分伪元素，如<code>::backdrop</code> 必须使用双冒号，大部分伪元素都支持单冒号和双冒号的写法，比如<code>::after</code>，写成<code>:after</code> 也可以正确运行。</p><p>大概的意思就是：虽然 <code>CSS3</code> 标准要求伪元素使用双冒号的写法，但也依然支持单冒号的写法。为了向后兼容，我们建议你在目前还是使用单冒号的写法。</p><p>实际上，伪元素使用单冒号还是双冒号很难说得清谁对谁错，你可以按照个人的喜好来选择某一种写法。</p><h2 id="伪类与伪元素的具体用法" tabindex="-1"><a class="header-anchor" href="#伪类与伪元素的具体用法" aria-hidden="true">#</a> 伪类与伪元素的具体用法</h2><div><img src="https://github.com/sandlz/images/raw/master/uPic/wMWn2R.jpg"></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/Dgw6re.jpg"></div>',13),p={href:"http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/#prettyPhoto",target:"_blank",rel:"noopener noreferrer"};function l(m,f){const a=d("ExternalLinkIcon");return r(),s("div",null,[h,e("p",null,[o("转载于"),e("a",p,[o("伪类与伪元素"),t(a)])])])}const u=c(i,[["render",l],["__file","fake-class.html.vue"]]);export{u as default};
