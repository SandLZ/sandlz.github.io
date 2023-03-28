import{_ as n,p as s,q as a,a1 as e}from"./framework-201fec1f.js";const r={},i=e(`<h1 id="文件-夹" tabindex="-1"><a class="header-anchor" href="#文件-夹" aria-hidden="true">#</a> 文件(夹)</h1><h2 id="列出" tabindex="-1"><a class="header-anchor" href="#列出" aria-hidden="true">#</a> 列出</h2><p>显示目录内容列表</p><h3 id="l" tabindex="-1"><a class="header-anchor" href="#l" aria-hidden="true">#</a> <code>-l</code></h3><p>权限、连接数、拥有者、群组、容量、修改时间、文件名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>drwxr-xr-x <span class="token number">5</span> zliu zliu <span class="token number">4096</span> Mar <span class="token number">22</span> 06:34 <span class="token builtin class-name">.</span>
drwxr-xr-x <span class="token number">3</span> root root <span class="token number">4096</span> Mar <span class="token number">22</span> 06:26 <span class="token punctuation">..</span>
-rw-r--r-- <span class="token number">1</span> zliu zliu  <span class="token number">220</span> Feb <span class="token number">25</span>  <span class="token number">2020</span> .bash_logout
-rw-r--r-- <span class="token number">1</span> zliu zliu <span class="token number">3771</span> Feb <span class="token number">25</span>  <span class="token number">2020</span> .bashrc
drwx------ <span class="token number">2</span> zliu zliu <span class="token number">4096</span> Mar <span class="token number">22</span> 06:27 .cache
drwxrwxr-x <span class="token number">3</span> zliu zliu <span class="token number">4096</span> Mar <span class="token number">22</span> 06:30 .local
-rw-r--r-- <span class="token number">1</span> zliu zliu  <span class="token number">807</span> Feb <span class="token number">25</span>  <span class="token number">2020</span> .profile
drwx------ <span class="token number">2</span> zliu zliu <span class="token number">4096</span> Mar <span class="token number">22</span> 06:26 .ssh
-rw-r--r-- <span class="token number">1</span> zliu zliu    <span class="token number">0</span> Mar <span class="token number">22</span> 06:34 .sudo_as_admin_successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div><img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_22_linux_permission.jpg"></div><p>说明：</p><ul><li>第一个字符表示<strong>文件</strong>、<strong>目录</strong>、<strong>链接文件</strong>等 <ul><li>d: 目录</li><li>-: 文件</li><li>l: 链接文件</li><li>b: 随机存储设备</li><li>c: 一次性读取设备(键盘、鼠标等)</li></ul></li><li>接下来的字符中，以三个为一组，且均为“rwx” 的三个参数的组合。其中，[ r ]代表可读 (read)、[ w ]代表可写(write)、[ x ]代表可执行(execute)。 要注意的是，这三个 权限的位置不会改变，如果没有权限，就会出现减号[ - ] <ul><li>第一组为“文件拥有者可具备的权限”</li><li>第二组为“加入此群组之帐号的权限”</li><li>第三组为“非本人且没有加入本群组之其他帐号的权限”</li></ul></li></ul><h2 id="属性与权限" tabindex="-1"><a class="header-anchor" href="#属性与权限" aria-hidden="true">#</a> 属性与权限</h2><h3 id="chgrp" tabindex="-1"><a class="header-anchor" href="#chgrp" aria-hidden="true">#</a> chgrp</h3><p>改变所属群组</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>/etc/group 中需存在此群组</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -R 递归</span>
<span class="token function">chgrp</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 群组名称 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> chown</h3><p>改变文件拥有者</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>/etc/passwd 中需存在此用户</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 帐号名称 文件或目录
<span class="token function">chown</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 帐号名称:群组名称 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> chmod</h3><p>改变权限（数字 or 符号）</p><h4 id="数字方式" tabindex="-1"><a class="header-anchor" href="#数字方式" aria-hidden="true">#</a> 数字方式</h4><p>Linux文件的基本权限就有九个，分别是<code>owner</code>/<code>group</code>/<code>others</code>三种身份各有自己的 <code>read</code>/<code>write</code>/<code>execute</code>权限; 假设文件的权限字符为:<strong>-rwxrwx---</strong>，可以使用数字来代表各个权限，各权限的分数对照表如下:</p><ul><li>r: 4</li><li>w: 2</li><li>x: 1</li></ul><p>每种身份(<code>owner</code>/<code>group</code>/<code>others</code>)各自的三个权限(<code>r</code>/<code>w</code>/<code>x</code>)分数是需要累加的，例如当权 限为: [-rwxrwx---] 分数则是:</p><ul><li>owner = rwx = 4 + 2 + 1 = 7</li><li>group = rwx = 4 + 2 + 1 = 7</li><li>others = --- = 0 + 0 + 0 = 0</li></ul><p>则该文件的权限数字为：<strong>770</strong></p><h4 id="符号方式" tabindex="-1"><a class="header-anchor" href="#符号方式" aria-hidden="true">#</a> 符号方式</h4>`,27),l=[i];function c(o,d){return s(),a("div",null,l)}const p=n(r,[["render",c],["__file","file.html.vue"]]);export{p as default};
