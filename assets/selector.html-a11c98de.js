import{_ as c,M as l,p as d,q as p,R as s,t as n,N as a,U as o,a1 as t}from"./framework-201fec1f.js";const r={},u=t(`<h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1><blockquote><p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。</p></blockquote><h2 id="速查表" tabindex="-1"><a class="header-anchor" href="#速查表" aria-hidden="true">#</a> 速查表</h2><table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:left;">示例</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#element_sel">类型选择器(元素选择器)</a></td><td style="text-align:left;"><code>h1 { }</code></td><td style="text-align:left;">通过 node 节点名称匹配元素</td></tr><tr><td style="text-align:left;"><a href="#common_sel">通配选择器</a></td><td style="text-align:left;"><code>* { }</code></td><td style="text-align:left;">匹配任意类型的 HTML 元素</td></tr><tr><td style="text-align:left;"><a href="#class_sel">类选择器</a></td><td style="text-align:left;"><code>.box { }</code></td><td style="text-align:left;">通过类名名称匹配元素</td></tr><tr><td style="text-align:left;"><a href="#id_sel">ID 选择器</a></td><td style="text-align:left;"><code>#unique { }</code></td><td style="text-align:left;">据该元素的 ID 属性中的内容匹配元素</td></tr><tr><td style="text-align:left;"><a href="#attr_sel">属性选择器</a></td><td style="text-align:left;"><code>a[title] { }</code></td><td style="text-align:left;">通过属性匹配元素</td></tr><tr><td style="text-align:left;"><a href="#fake_class_sel">伪类选择器</a></td><td style="text-align:left;"><code>p:first-child { }</code></td><td style="text-align:left;">要选择的元素的特殊状态</td></tr><tr><td style="text-align:left;"><a href="#fake_ele_sel">伪元素选择器</a></td><td style="text-align:left;"><code>p::first-line { }</code></td><td style="text-align:left;">被选择元素的特定部分修改样式</td></tr><tr><td style="text-align:left;"><a href="#future_sel">后代选择器</a></td><td style="text-align:left;"><code>article p</code></td><td style="text-align:left;">匹配第一个元素的后面元素</td></tr><tr><td style="text-align:left;"><a href="#child_sel">子代选择器</a></td><td style="text-align:left;"><code>article &gt; p</code></td><td style="text-align:left;">匹配那些作为第一个元素的直接后代(子元素)的第二元素</td></tr><tr><td style="text-align:left;"><a href="#adjacent_sibling_sel">相邻兄弟选择器</a></td><td style="text-align:left;"><code>h1 + p</code></td><td style="text-align:left;">第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中。</td></tr><tr><td style="text-align:left;"><a href="#general_sibling_sel">通用兄弟选择器</a></td><td style="text-align:left;"><code>h1 ~ p</code></td><td style="text-align:left;">位置无须紧邻，只须同层级</td></tr></tbody></table><h2 id="element_sel"> 类型选择器 </h2><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> DodgerBlue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="common_sel"> 通配选择器 </h2><p>在 CSS 中,一个星号(<code>*</code>)就是一个通配选择器.它可以匹配任意类型的 HTML 元素.在配合其他简单选择器的时候,省略掉通配选择器会有同样的效果.比如,<code>*</code>.warning 和.warning 的效果完全相同.</p><p>在 CSS3 中,星号(*)可以和命名空间组合使用:</p><p>ns|<code>*</code> - 会匹配 ns 命名空间下的所有元素 <code>*</code>|<code>*</code> - 会匹配所有命名空间下的所有元素 |<code>*</code> - 会匹配所有没有命名空间的元素</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*[lang^=&quot;en&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*.warning</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*#maincontent</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>不推荐使用通配选择器,因为它是性能最低的一个 CSS 选择器</p></div><h2 id="class_sel"> 类选择器 </h2><p>在一个 HTML 文档中，CSS 类选择器会根据元素的类属性中的内容匹配元素。类属性被定义为一个以空格分隔的列表项，在这组类名中，必须有一项与类选择器中的类名完全匹配，此条样式声明才会生效。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.类名 {样式声明 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>与下面的语句等价</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[class~=类名] {样式声明 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span.classy</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> DodgerBlue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="id_sel"> ID选择器 </h2><p>CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素,元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#id属性值 {样式声明 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>与下面的<strong>属性选择器</strong>语句等价</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[id=id属性值] {样式声明 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span#identified</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> DodgerBlue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="attr_sel"> 属性选择器 </h2><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><ul><li><strong>[attr]</strong></li></ul><p>表示带有以 attr 命名的属性的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 将所有包含 \`lang\` 属性的 &lt;div&gt; 元素的字重设为 bold */</span>
<span class="token selector">div[lang]</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr=value]</strong></li></ul><p>表示带有以 attr 命名的属性，且属性值为 value 的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 将所有语言为葡萄牙语的 &lt;div&gt; 元素的文本颜色设为绿色 */</span>
<span class="token selector">div[lang=&quot;pt&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr~=value]</strong></li></ul><p>表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 存在class属性并且属性值包含以空格分隔的&quot;logo&quot;的&lt;a&gt;元素 */</span>
<span class="token selector">a[class~=&quot;logo&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr|=value]</strong></li></ul><p>表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（&quot;-&quot;为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN，zh-TW 可以用 zh 作为 value）。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 将所有语言为中文的 &lt;div&gt; 元素的文本颜色设为红色
   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */</span>
<span class="token selector">div[lang|=&quot;zh&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr^=value]</strong></li></ul><p>表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 以 &quot;#&quot; 开头的页面本地链接 */</span>
<span class="token selector">a[href^=&quot;#&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr$=value]</strong></li></ul><p>表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 以 &quot;.org&quot; 结尾的链接 */</span>
<span class="token selector">a[href$=&quot;.org&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em><em>[attr</em>=value]</em>*</li></ul><p>表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 包含 &quot;example&quot; 的链接 */</span>
<span class="token selector">a[href*=&quot;example&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> silver<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr operator value i]</strong></li></ul><p>在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 包含 &quot;insensitive&quot; 的链接,不区分大小写 */</span>
<span class="token selector">a[href*=&quot;insensitive&quot; i]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>[attr operator value s]</strong> （实验）</li></ul><p>在属性选择器的右方括号前添加一个用空格隔开的字母 s（或 S），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 包含 &quot;cAsE&quot; 的链接，区分大小写 */</span>
<span class="token selector">a[href*=&quot;cAsE&quot; s]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fake_class_sel"> 伪类选择器 </h2><p>CSS 伪类 是添加到选择器的关键字，指定要选择的元素的特殊状态。</p><p>伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 <code>:visited</code>），同样的，可以根据内容的状态（例如在一些表单元素上的 <code>:checked</code>），或者鼠标的位置（例如 <code>:hover</code> 让你知道是否鼠标在一个元素上悬浮）来应用样式。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>与伪类相反，伪元素 可被用于为一个元素的 特定部分 应用样式。</p></div><h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>selector:pseudo-class {
  property: value;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/UcDDE5.png"></div>`,66),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#%E6%A0%87%E5%87%86%E4%BC%AA%E7%B1%BB%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="fake_ele_sel"> 伪元素选择器 </h2><p>伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 <code>::first-line</code> 伪元素可改变段落首行文字的样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 每一个 &lt;p&gt; 元素的第一行。 */</span>
<span class="token selector">p::first-line</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>与伪元素比较，pseudo-classes 能够根据状态改变元素样式。</p></div><h3 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>selector::pseudo-element {
  property: value;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。</p><p>注意：按照规范，应该使用双冒号（<code>::</code>）而不是单个冒号（<code>:</code>），以便区分伪类和伪元素。但是，<strong>由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素</strong>。</p></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/p6GB95.png"></div>`,8),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#%E6%A0%87%E5%87%86%E4%BC%AA%E5%85%83%E7%B4%A0%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="future_sel"> 后代选择器 </h2><p>后代组合器（通常用单个空格 \`\` 字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。</p><p>利用后代组合器的选择器称为后代选择器。</p><h3 id="语法-5" tabindex="-1"><a class="header-anchor" href="#语法-5" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>selector1 selector2 {
  /* property declarations */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="child_sel"> 子代选择器 </h2><p>当使用 <code>&gt;</code> 选择符分隔两个元素时,它只会匹配那些作为第一个元素的<strong>直接后代</strong>(子元素)的第二元素. 与之相比, 当两个元素由 后代选择器 相连时, 它表示匹配存在的所有由第一个元素作为祖先元素(但不一定是父元素)的第二个元素, 无论它在 DOM 中&quot;跳跃&quot; 多少次.</p><h3 id="语法-6" tabindex="-1"><a class="header-anchor" href="#语法-6" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素1 &gt; 元素2 {样式声明 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div &gt; span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>first word.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a second word!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/GuE5jk.png"></div><h2 id="adjacent_sibling_sel"> 相邻兄弟选择器 </h2><p>相邻兄弟选择器 (<code>+</code>) 介于两个选择器之间，当<strong>第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中</strong>。</p><h3 id="语法-7" tabindex="-1"><a class="header-anchor" href="#语法-7" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>former_element + target_element { style properties }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 图片后面紧跟着的段落将被选中 */</span>
<span class="token selector">img + p</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="general_sibling_sel"> 通用兄弟选择器 </h2><p>兄弟选择符，<strong>位置无须紧邻，只须同层级</strong>，A~B 选择 A 元素之后所有同层级 B 元素。</p><h3 id="语法-8" tabindex="-1"><a class="header-anchor" href="#语法-8" aria-hidden="true">#</a> 语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>former_element ~ target_element { style properties }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p ~ span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is not red.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here is a paragraph.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>Here is some code.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>And here is a span.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://github.com/sandlz/images/raw/master/uPic/JsGvxj.png"></div>`,26),k=s("h2",{id:"参考",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),n(" 参考")],-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors",target:"_blank",rel:"noopener noreferrer"};function x(f,_){const e=l("ExternalLinkIcon"),i=l("RouterLink");return d(),p("div",null,[u,s("p",null,[s("a",v,[n("标准伪类索引"),a(e)])]),g,s("p",null,[s("a",m,[n("标准伪元素索引"),a(e)])]),h,s("p",null,[a(i,{to:"/engineering/lan-enhancement/scss/scss.html"},{default:o(()=>[n("查看 Scss")]),_:1})]),k,s("p",null,[s("a",b,[n("MDN-CSS 选择器"),a(e)])])])}const q=c(r,[["render",x],["__file","selector.html.vue"]]);export{q as default};
