# 数组

## 理论知识

数组是非常基础的数据结构，在面试中，考察数组的题目一般在思维上都不难，主要是考察对代码的掌控能力

也就是说，想法很简单，但实现起来 可能就不是那么回事了。

首先要知道数组在内存中的存储方式，这样才能真正理解数组相关的面试题

数组是存放在连续内存空间上的相同类型数据的集合。

数组可以方便的通过下标索引的方式获取到下标下对应的数据。

举一个字符数组的例子，如图所示：

<div>
    <img src="https://github.com/sandlz/images/raw/master/uPic/arr_001.png" />
</div>
需要两点注意的是

数组下标都是从 0 开始的。
数组内存空间的地址是连续的
正是因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址。

例如删除下标为 3 的元素，需要对下标为 3 的元素后面的所有元素都要做移动操作，如图所示：

<div>
    <img src="https://github.com/sandlz/images/raw/master/uPic/arr_002.png" />
</div>

## 1. 找出数组中出现次数最多的元素，并给出其出现过的位置

```js
function getMaxRepeatNum(arr) {
  let num = -1;
  let indexArr = [];
  let map = new Map();
  arr.forEach((item, index) => {
    if (!map.has(item)) {
      map.set(item, []);
    }
    map.get(item).push(index);
  });
  console.log(map);

  for (let [key, values] of map) {
    if (values.length > indexArr.length) {
      indexArr = values;
      num = key;
    }
  }
  return { num, indexArr };
}
```

## 2. 删除排序数组中的重复项(26)

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1：

```
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

```js
function removeDuplicates(nums) {
  let i = 0;
  for (const num of nums) {
    if (i < 1 || num != nums[i - 1]) {
      nums[i++] = num;
    }
  }
  return i;
}
```

## 3. 移除数组所有数值等于 val 的元素，并返回移除后数组的新长度。(27)

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:

```
给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
```

示例 2:

```
给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
```

你不需要考虑数组中超出新长度后面的元素。

```js
// 双指针（快慢指针）
function removeDuplicates(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i];
    }
  }
  return k;
}
```

## 4. 移动零(283)

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:
```

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

```js
function moveZeroes(nums) {
  let left = 0,
    n = nums.length;
  for (let right = 0; right < n; ++right) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      ++left;
    }
  }
}
```

## 4. 有序数组的平方(977)

给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：

```
输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
```

示例 2：

```
输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
```

### 思路

**双指针法**

数组其实是有序的， 只不过负数平方之后可能成为最大数了。

那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。

此时可以考虑双指针法了，i 指向起始位置，j 指向终止位置。

定义一个新数组 result，和 A 数组一样的大小，让 k 指向 result 数组终止位置。

如果 A[i] _ A[i] < A[j] _ A[j] 那么 result[k--] = A[j] \* A[j]; 。

如果 A[i] _ A[i] >= A[j] _ A[j] 那么 result[k--] = A[i] \* A[i]; 。

```js
function sortedSquares(nums) {
  let res = [];
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
    if (right > left) {
      // push element to the front of the array
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
}
```

## 5. 长度最小的子数组(209)

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：

```
输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

### 思路

**滑动窗口**
所谓**滑动窗口**，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。
其实也属于双指针的一种、

在本题中实现滑动窗口，主要确定如下三点：

- 窗口内是什么？
- 如何移动窗口的起始位置？
- 如何移动窗口的结束位置？

窗口： 满足其和 ≥ s 的长度最小的 连续 子数组。

窗口的起始位置如何移动：如果当前窗口的值大于 s 了，窗口就要向前移动了（也就是该缩小了）。

窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，窗口的起始位置设置为数组的起始位置就可以了。

```js
function minSubArrayLen(target, nums) {
  // 长度计算一次
  const len = nums.length;
  let l = (r = sum = 0),
    res = len + 1; // 子数组最大不会超过自身
  while (r < len) {
    sum += nums[r++];
    // 窗口滑动
    while (sum >= target) {
      // r始终为开区间 [l, r)
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
}
```

```
时间复杂度：O(n)
空间复杂度：O(1)
```
## 6. 螺旋矩阵2(59)

给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:
```
输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
```





