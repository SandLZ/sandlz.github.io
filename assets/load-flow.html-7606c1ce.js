import{_ as s,M as i,p as d,q as c,R as a,t,N as n,a1 as r}from"./framework-201fec1f.js";const o={},l=r(`<h1 id="加载流程" tabindex="-1"><a class="header-anchor" href="#加载流程" aria-hidden="true">#</a> 加载流程</h1><blockquote><p>详细描述：从浏览器地址栏输入 url 到请求返回发生了什么？</p></blockquote><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>从以下几个阶段分析：</p><ol><li>DNS 解析</li><li>HTTP/HTTPS 握手、通信</li><li>缓存</li><li>渲染</li></ol><h3 id="dns-解析" tabindex="-1"><a class="header-anchor" href="#dns-解析" aria-hidden="true">#</a> DNS 解析</h3><ol><li>检查本地 hosts 文件</li><li>没有检查本地 DNS 缓存</li><li>没有请求计算机配置的 DNS 服务器(默认路由器设置)</li><li>没有会去查询运营商缓存</li><li>没有会去查根 DNS 缓存</li></ol><h3 id="http-https" tabindex="-1"><a class="header-anchor" href="#http-https" aria-hidden="true">#</a> HTTP/HTTPS</h3><h4 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h4><p><img src="https://github.com/sandlz/images/raw/master/uPic/16cff8d390722b79.jpg" alt=""></p><p>第一次：客户端向服务器发出连接请求报文，这时报文首部中的同部位 SYN=1，同时随机生成初始序列号 seq=x，此时，TCP 客户端进程进入了 SYN-SENT（同步已发送状态）状态。TCP 规定，SYN 报文段（SYN=1 的报文段）不能携带数据，但需要消耗掉一个序号。这个三次握手中的开始。表示客户端想要和服务端建立连接。 第二次：TCP 服务器收到请求报文后，如果同意连接，则发出确认报文。确认报文中应该 ACK=1，SYN=1，确认号是 ack=x+1，同时也要为自己随机初始化一个序列号 seq=y，此时，TCP 服务器进程进入了 SYN-RCVD（同步收到）状态。这个报文也不能携带数据，但是同样要消耗一个序号。这个报文带有 SYN(建立连接)和 ACK(确认)标志，询问客户端是否准备好。 第三次：TCP 客户进程收到确认后，还要向服务器给出确认。确认报文的 ACK=1，ack=y+1，此时，TCP 连接建立，客户端进入 ESTABLISHED（已建立连接）状态。TCP 规定，ACK 报文段可以携带数据，但是如果不携带数据则不消耗序号。这里客户端表示我已经准备好</p><p>链接：</p><p>为什么两次握手不行？</p><p>因为：第二次握手，主机 B 还不能确认主机 A 已经收到确认请求，也是说 B 认为建立好连接，开始发数据了，结果发出去的包一直 A 都没收到，那攻击 B 就很容易了，我专门发包不接收，服务器很容易就挂了</p><h4 id="通信" tabindex="-1"><a class="header-anchor" href="#通信" aria-hidden="true">#</a> 通信</h4><p>客户端与服务器建立连接后，便会开始进行通信，这里以客户端向服务器请求网页资源的过程为例：</p><p>浏览器向服务器发起一个请求网页资源的请求； 服务器返回对应网页资源； 浏览器渲染、构建网页，在构建网页的过程中，可能会继续请求 CSS、JavaScript 等资源</p><h4 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h4><p>客户端与服务器的相互通信完成后，便会断开连接，断开连接主要有四个步骤，一般称为客户端与服务器端的四次挥手：</p><p>浏览器向服务器发送想断开连接的请求「我要走啦」； 服务器向浏览器发送收到请求的响应「我知道啦」； 服务器向浏览器发送断开连接的请求「可以了」； 浏览器断开连接并向服务器发送一个反馈请求，服务器收到后断开连接「好的，拜拜」。</p><p>为什么客户端与服务器断开连接是四次挥手呢？主要是因为当客户端告诉服务器想断开连接的时候，服务器的数据不一定已处理完毕，所以服务器是先告诉客户端说已经收到了它想断开连接的请求，然后当服务器中数据处理完毕时，便通知客户端并请求断开连接，客户端收到后便断开连接并通知服务器，服务器收到后才断开连接。</p><h4 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h4><p>在三次握手的前提下</p><ol><li>如果客户端此前未与服务器建立会话，那么双方需要进行一次完整的 TLS 四次握手。客户端首先向服务器发送 Client Hello 报文，包含一个随机数、TLS 协议版本、按优先级排列的加密套件列表</li><li>服务器向客户端发送 Server Hello 报文，包含一个新的随机数、TLS 协议版本、经过选择后的一个加密套件。</li><li>服务器向客户端发送 Certificate 报文，包含服务器 X.509 证书链，其中，第一个为主证书，中间证书按照顺序跟在主证书之后，而根 CA 证书通常内置在操作系统或浏览器中，无需服务器发送。</li><li>如果密钥交换选择 DH 算法，服务器会向客户端发送 Server Key Exchange 报文，包含密钥交换所需的 DH 参数；如果密钥交换选择 RSA 算法，则跳过这一步。</li><li>服务器向客户端发送 Server Hello Done 报文，表明已经发送完所有握手消息。</li><li>客户端向服务器发送 Client Key Exchange 报文，如果密钥交换选择 RSA 算法，由客户端生成预主密钥，使用服务器证书中的公钥对其加密，包含在报文中，服务器只需使用自己的私钥解密就可以取出预主密钥；如果密钥交换选择 DH 算法，客户端会在报文中包含自己的 DH 参数，之后双方都根据 DH 算法计算出相同的预主密钥。需要注意的是，密钥交换的只是预主密钥，这个值还需进一步加工，结合客户端和服务器两个随机数种子，双方使用 PRF（pseudorandom function，伪随机函数）生成相同的主密钥。</li><li>客户端向服务器发送 Change Cipher Spec 报文，表明已经生成主密钥，在随后的传输过程都使用这个主密钥对消息进行对称加密。</li><li>客户端向服务器发送 Finished 报文，这条消息是经过加密的，因此在 Wireshark 中显示的是 Encrypted Handshake Message。如果服务器能解密出报文内容，则说明双方生成的主密钥是一致的。</li><li>服务器向客户端发送 New Session Ticket 报文，而这个 Session Ticket 只有服务器才能解密，客户端把它保存下来，在以后的 TLS 重新握手过程中带上它进行快速会话恢复，减少往返延迟。</li><li>服务器向客户端发送 Change Cipher Spec 报文，同样表明已经生成主密钥，在随后的传输过程都使用这个主密钥对消息进行对称加密。</li><li>服务器向客户端发送 Finished 报文，如果客户端能解密出报文内容，则说明双方生成的主密钥是一致的。至此，完成所有握手协商。</li></ol><h4 id="四次握手" tabindex="-1"><a class="header-anchor" href="#四次握手" aria-hidden="true">#</a> 四次握手</h4><p>1、客户端请求建立 SSL 链接，并向服务端发送一个随机数–Client random 和客户端支持的加密方法，比如 RSA 公钥加密，此时是明文传输。</p><ol start="2"><li>服务端回复一种客户端支持的加密方法、一个随机数–Server random、授信的服务器证书和非对称加密的公钥。</li><li>客户端收到服务端的回复后利用服务端的公钥，加上新的随机数–Premaster secret 通过服务端下发的公钥及加密方法进行加密，发送给服务器。</li><li>服务端收到客户端的回复，利用已知的加解密方式进行解密，同时利用 Client random、Server random 和 Premaster secret 通过一定的算法生成 HTTP 链接数据传输的对称加密 key – session key。</li></ol><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><p>详情请参考<a href="/base/browser/cache">缓存</a></p><h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3><p>当文档加载过程中遇到 js 文件，html 文档会挂起渲染（加载解析渲染同步）的线程，不仅要等待文档中 js 文件加载完毕，还要等待解析执行完毕，才可以恢复 html 文档的渲染线程。因为 JS 有可能会修改 DOM，最为经典的 document.write，这意味着，在 JS 执行完成前，后续所有资源的下载可能是没有必要的，这是 js 阻塞后续资源下载的根本原因。所以我明平时的代码中，js 是放在 html 文档末尾的。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="普通-script" tabindex="-1"><a class="header-anchor" href="#普通-script" aria-hidden="true">#</a> 普通 <code>script</code></h4><p>浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 <code>script</code> 标签，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析。</p><h4 id="async-script" tabindex="-1"><a class="header-anchor" href="#async-script" aria-hidden="true">#</a> <code>async script</code></h4><p>当浏览器遇到带有 <code>async</code> 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析.</p><p><code>async</code> 是不可控的，因为执行时间不确定，你如果在异步 JS 脚本中获取某个 DOM 元素，有可能获取到也有可能获取不到。而且如果存在多个 async 的时候，它们之间的执行顺序也不确定，完全依赖于网络传输结果，谁先到执行谁。</p><h4 id="defer-script" tabindex="-1"><a class="header-anchor" href="#defer-script" aria-hidden="true">#</a> <code>defer script</code></h4><p><code>defer</code> 表示延迟</p><p>当浏览器遇到带有 <code>defer</code> 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码</p><p>如果存在多个 defer script 标签，浏览器（IE9 及以下除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。</p><p>defer 是在 JS 加载完成后，整个文档解析完成后，触发 <code>DOMContentLoaded</code> 事件前执行</p><p>总结：</p><table><thead><tr><th>script 标签</th><th>JS 执行顺序</th><th>是否阻塞解析 HTML</th></tr></thead><tbody><tr><td><code>&lt;script&gt;</code></td><td>在 HTML 中的顺序</td><td>阻塞</td></tr><tr><td><code>&lt;script async&gt;</code></td><td>网络请求返回顺序</td><td>可能阻塞，也可能不阻塞</td></tr><tr><td><code>&lt;script defer&gt;</code></td><td>在 HTML 中的顺序</td><td>不阻塞</td></tr></tbody></table><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> <code>CSS</code></h3><ul><li><code>CSS</code> 不会阻塞 DOM 解析，但会阻塞 DOM 渲染</li><li><code>CSS</code> 不会阻塞 JS 文件下载, 但会阻塞 JS 执行</li></ul><p><code>CSSOM</code>作用:</p><ul><li>第一个是提供给 <code>JavaScript</code> 操作样式表的能力</li><li>第二个是为布局树的合成提供基础的样式信息</li><li>这个 <code>CSSOM</code> 体现在 DOM 中就是 <code>document.styleSheets</code></li></ul><p><code>DOM</code> 和 <code>CSSOM</code> 通常是并行构建的，所以 <code>CSS</code> 加载不会阻塞 <code>DOM</code> 的解析。 然而由于<code>Render Tree</code> 是依赖<code>DOM Tree</code>和 <code>CSSOM Tree</code>的，所以它必须等到两者都加载完毕后，完成相应的构建，才开始渲染，因此，<strong>CSS 加载会阻塞 DOM 渲染</strong>。</p><p>如果脚本的内容是获取元素的样式，宽高等<code>CSS</code>控制的属性，浏览器是需要计算的，也就是依赖于<code>CSS</code>。浏览器也无法感知脚本内容到底是什么，为避免样式获取，因而只好等前面所有的样式下载完后，再执行<code>JS</code></p><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><h4 id="domcontentloaded" tabindex="-1"><a class="header-anchor" href="#domcontentloaded" aria-hidden="true">#</a> <code>DOMContentLoaded</code></h4><p><strong>当 DOM 解析完成后，不包括样式表，图片等资源</strong></p><h4 id="onload" tabindex="-1"><a class="header-anchor" href="#onload" aria-hidden="true">#</a> <code>onload</code></h4><p><strong>所有的 DOM,样式表,脚本,图片等资源已经加载完毕</strong></p><p><code>async</code> 的脚本一定会在 <code>onload</code> 事件之前执行，可能会在 <code>DOMContentLoaded</code> 之前或之后执行。 <code>defer</code> 的脚本将不会影响 HTML 文档的解析，而是等到 HTML 解析完成后才会执行。而 <code>DOMContentLoaded</code> 只有在 defer 脚本执行结束后才会被触发。</p><h3 id="渲染" tabindex="-1"><a class="header-anchor" href="#渲染" aria-hidden="true">#</a> 渲染</h3><ol><li>构建 DOM 树：从上到下解析 HTML 文档生成 DOM 节点树（DOM tree），也叫内容树（content tree）</li><li>构建 CSSOM：CSS Object Model， 加载解析样式生成 CSSOM 树</li><li>执行 JavsScript：加载并执行 JavaScript 代码（包括内联代码或外联 JavaScript 文件）</li><li>构建布局树：根据 DOM 树和 CSSOM 树,生成渲染树(render tree), 按顺序展示在屏幕上的一系列矩形，这些矩形带有字体，颜色和尺寸等视觉属性</li><li>布局计算：根据渲染树将节点树的每一个节点计算在屏幕上的正确位置</li><li>分层，生成图层树</li><li>绘制：遍历渲染树绘制所有节点，为每一个节点适用对应的样式，这一过程是通过 UI 后端模块完成</li></ol><h3 id="构建-dom-树" tabindex="-1"><a class="header-anchor" href="#构建-dom-树" aria-hidden="true">#</a> 构建 DOM 树</h3><p><code>HTML</code> 内容转换为浏览器 <code>DOM</code> 树结构</p><p>字节 → 字符 → 令牌 → 节点 → 对象模型(DOM)</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/wX8pgK.png"></div><h3 id="构建-cssom" tabindex="-1"><a class="header-anchor" href="#构建-cssom" aria-hidden="true">#</a> 构建 CSSOM</h3><ol><li>标准化样式</li></ol><p>如 em-&gt;px,red-&gt;rgba(255,0,0,0),bold-&gt;700 等等。</p><ol start="2"><li>计算每个 DOM 节点具体样式</li></ol><p>计算规则：继承和层叠</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/1eEWa6.png"></div><h3 id="layout-tree-布局树-之前叫渲染树" tabindex="-1"><a class="header-anchor" href="#layout-tree-布局树-之前叫渲染树" aria-hidden="true">#</a> Layout Tree 布局树（之前叫渲染树）</h3><ul><li>遍历DOM树可见节点，并把这些节点加到布局树中</li><li>对于不可见的节点，<code>head</code>, <code>meta</code> 标签等都会被忽略。对于<code>body.p.span</code> 这个元素，它的属性包含<code>display:none</code>,所以这个元素没有被包含进布局树。</li></ul><div><img src="https://github.com/sandlz/images/raw/master/uPic/NViXll2.png"></div><h3 id="布局计算" tabindex="-1"><a class="header-anchor" href="#布局计算" aria-hidden="true">#</a> 布局计算</h3><p>计算布局树节点的坐标位置</p><h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3><ul><li>生成图层树（Layer Tree）</li><li>拥有层叠上下文属性的元素会被提升为单独一层</li><li>需要裁剪（clip）的地方也会创建图层</li><li>图层绘制</li></ul><p>浏览器在构建完布局树后，还需要进行一系列操作，这样子可能考虑到一些复杂的场景，比如一些些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，还有比如是含有层叠上下文如何控制显示和隐藏等情况</p><h3 id="生成图层树" tabindex="-1"><a class="header-anchor" href="#生成图层树" aria-hidden="true">#</a> 生成图层树</h3><p>你最终看到的页面，就是由这些图层一起叠加构成的，它们按照一定的顺序叠加在一起，就形成了最终的页面。</p><p>浏览器的页面实际上被分成了很多图层，这些图层叠加后合成了最终的页面。</p><p>图层与布局树之间关系：</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/HxqAB3.png"></div><h3 id="合成和显示" tabindex="-1"><a class="header-anchor" href="#合成和显示" aria-hidden="true">#</a> 合成和显示</h3><p>完成了图层的构建，接下来要做的工作就是图层的绘制了。图层的绘制跟我们日常的绘制一样，每次都会把一个复杂的图层拆分为很小的绘制指令，然后再按照这些指令的顺序组成一个绘制列表</p><p>绘制图层的操作在渲染进程中有着专门的线程，这个线程叫做合成线程 栅格化操作完成后，合成线程会生成一个绘制命令，即&quot;DrawQuad&quot;，并发送给浏览器进程。</p><p>浏览器进程中的viz组件接收到这个命令，根据这个命令，把页面内容绘制到内存，也就是生成了页面，然后把这部分内存发送给显卡,那你肯定对显卡的原理很好奇</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>显示器显示图像的原理解释:</p><p>无论是 PC 显示器还是手机屏幕，都有一个固定的刷新频率，一般是 60 HZ，即 60 帧，也就是一秒更新 60 张图片，一张图片停留的时间约为 16.7 ms。而每次更新的图片都来自显卡的前缓冲区。而显卡接收到浏览器进程传来的页面后，会合成相应的图像，并将图像保存到后缓冲区，然后系统自动将前缓冲区和后缓冲区对换位置，如此循环更新。</p></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><div><img src="https://github.com/sandlz/images/raw/master/uPic/iShot2021-11-21 11.10.48.png"></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,89),p={href:"https://juejin.cn/post/6928677404332425223",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/133906695",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.cn/post/6847902222349500430",target:"_blank",rel:"noopener noreferrer"};function S(m,g){const e=i("ExternalLinkIcon");return d(),c("div",null,[l,a("ul",null,[a("li",null,[a("a",p,[t("浏览器输入 url"),n(e)])]),a("li",null,[a("a",h,[t("输入 URL 到页面展示到底发生了什么？"),n(e)])]),a("li",null,[a("a",u,[t("浏览器工作原理"),n(e)])])])])}const f=s(o,[["render",S],["__file","load-flow.html.vue"]]);export{f as default};
