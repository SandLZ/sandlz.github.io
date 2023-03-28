import{_ as s,p as a,q as p,t,a1 as n}from"./framework-201fec1f.js";const e={},o=n('<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1><h2 id="理论知识" tabindex="-1"><a class="header-anchor" href="#理论知识" aria-hidden="true">#</a> 理论知识</h2><p>数组是非常基础的数据结构，在面试中，考察数组的题目一般在思维上都不难，主要是考察对代码的掌控能力</p><p>也就是说，想法很简单，但实现起来 可能就不是那么回事了。</p><p>首先要知道数组在内存中的存储方式，这样才能真正理解数组相关的面试题</p><p>数组是存放在连续内存空间上的相同类型数据的集合。</p><p>数组可以方便的通过下标索引的方式获取到下标下对应的数据。</p><p>举一个字符数组的例子，如图所示：</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/arr_001.png"></div>',9),c=n(`<p>数组下标都是从 0 开始的。 数组内存空间的地址是连续的 正是因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址。</p><p>例如删除下标为 3 的元素，需要对下标为 3 的元素后面的所有元素都要做移动操作，如图所示：</p><div><img src="https://github.com/sandlz/images/raw/master/uPic/arr_002.png"></div><h2 id="_1-找出数组中出现次数最多的元素-并给出其出现过的位置" tabindex="-1"><a class="header-anchor" href="#_1-找出数组中出现次数最多的元素-并给出其出现过的位置" aria-hidden="true">#</a> 1. 找出数组中出现次数最多的元素，并给出其出现过的位置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getMaxRepeatNum</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> indexArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> values<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>values<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> indexArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      indexArr <span class="token operator">=</span> values<span class="token punctuation">;</span>
      num <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> num<span class="token punctuation">,</span> indexArr <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-删除排序数组中的重复项-26" tabindex="-1"><a class="header-anchor" href="#_2-删除排序数组中的重复项-26" aria-hidden="true">#</a> 2. 删除排序数组中的重复项(26)</h2><p>给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。</p><p>不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> num <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-移除数组所有数值等于-val-的元素-并返回移除后数组的新长度。-27" tabindex="-1"><a class="header-anchor" href="#_3-移除数组所有数值等于-val-的元素-并返回移除后数组的新长度。-27" aria-hidden="true">#</a> 3. 移除数组所有数值等于 val 的元素，并返回移除后数组的新长度。(27)</h2><p>给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。</p><p>不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。</p><p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你不需要考虑数组中超出新长度后面的元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 双指针（快慢指针）</span>
<span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> k<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-移动零-283" tabindex="-1"><a class="header-anchor" href="#_4-移动零-283" aria-hidden="true">#</a> 4. 移动零(283)</h2><p>给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。</p><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>必须在原数组上操作，不能拷贝额外的数组。 尽量减少操作次数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">moveZeroes</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token operator">++</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-有序数组的平方-977" tabindex="-1"><a class="header-anchor" href="#_4-有序数组的平方-977" aria-hidden="true">#</a> 4. 有序数组的平方(977)</h2><p>给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><p><strong>双指针法</strong></p><p>数组其实是有序的， 只不过负数平方之后可能成为最大数了。</p><p>那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。</p><p>此时可以考虑双指针法了，i 指向起始位置，j 指向终止位置。</p><p>定义一个新数组 result，和 A 数组一样的大小，让 k 指向 result 数组终止位置。</p><p>如果 A[i] _ A[i] &lt; A[j] _ A[j] 那么 result[k--] = A[j] * A[j]; 。</p><p>如果 A[i] _ A[i] &gt;= A[j] _ A[j] 那么 result[k--] = A[i] * A[i]; 。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> j<span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// push element to the front of the array</span>
      res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>right <span class="token operator">*</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      j<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>left <span class="token operator">*</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-长度最小的子数组-209" tabindex="-1"><a class="header-anchor" href="#_5-长度最小的子数组-209" aria-hidden="true">#</a> 5. 长度最小的子数组(209)</h2><p>给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3><p><strong>滑动窗口</strong> 所谓<strong>滑动窗口</strong>，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。 其实也属于双指针的一种、</p><p>在本题中实现滑动窗口，主要确定如下三点：</p><ul><li>窗口内是什么？</li><li>如何移动窗口的起始位置？</li><li>如何移动窗口的结束位置？</li></ul><p>窗口： 满足其和 ≥ s 的长度最小的 连续 子数组。</p><p>窗口的起始位置如何移动：如果当前窗口的值大于 s 了，窗口就要向前移动了（也就是该缩小了）。</p><p>窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，窗口的起始位置设置为数组的起始位置就可以了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">minSubArrayLen</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 长度计算一次</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">=</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    res <span class="token operator">=</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 子数组最大不会超过自身</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>r<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 窗口滑动</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// r始终为开区间 [l, r)</span>
      res <span class="token operator">=</span> res <span class="token operator">&lt;</span> r <span class="token operator">-</span> l <span class="token operator">?</span> res <span class="token operator">:</span> r <span class="token operator">-</span> l<span class="token punctuation">;</span>
      sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res <span class="token operator">&gt;</span> len <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>时间复杂度：O(n)
空间复杂度：O(1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-螺旋矩阵2-59" tabindex="-1"><a class="header-anchor" href="#_6-螺旋矩阵2-59" aria-hidden="true">#</a> 6. 螺旋矩阵2(59)</h2><p>给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。</p><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59);function i(l,u){return a(),p("div",null,[o,t(" 需要两点注意的是 "),c])}const d=s(e,[["render",i],["__file","index.html.vue"]]);export{d as default};