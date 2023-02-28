# 字符串

## 1. 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

示例 2：
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]

思路：双指针法

```js
function reverseStr(s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s;
}
```

## 2. 反转字符串 2

给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

如果剩余字符少于 k 个，则将剩余字符全部反转。

如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

示例:

输入: s = "abcdefg", k = 2
输出: "bacdfeg"

思路：双指针法

```js
function reverse2(s, k) {
  let len = s.length;
  let strArr = s.split("");
  for (let i = 0; i < len; i += 2 * k) {
    let l = i;
    let r = i + k - 1 > len ? len : i + k - 1;
    while (l < r) {
      [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
      l++;
      r--;
    }
  }
  return strArr.join("");
}
```

## 3. 替换空格

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1： 输入：s = "We are happy."
输出："We%20are%20happy."

思路：双指针法

```js
function replaceSpace(s) {
    let arr = Array.from(s)
    let count = 0

    for (const item of arr) {
        if (item === ' ') {
            count ++
        }
    }

    let l = arr.length - 1
    let r = arr.length + count * 2 - 1

    while(l >= 0) {
        if (arr[l] === ' ' ) {
            arr[r--] = '0'
            arr[r--] = '2'
            arr[r--] = '%'
            l --
        } else {
            arr[r--] = arr[l--]
        }
    }

    return arr.join('')
}
```

## 4. 翻转字符串中的单词

## 5. 左旋转字符串

## 6. 实现`strStr()`

## 7. 重复的子字符串

## 8. 大数相加

```js
function bigAdd(a, b) {
  if (a.length > b.length) {
    b =
      Array(a.length - b.length)
        .fill(0)
        .join("") + b;
  } else if (a.length < b.length) {
    a =
      Array(b.length - a.length)
        .fill(0)
        .join("") + a;
  }

  const arrA = Array.from(a).reverse();
  const arrB = Array.from(b).reverse();

  let flag = 0;
  const result = [];

  for (let i = 0; i < arrA.length; i++) {
    const sum = Number(arrA[i]) + Number(arrB[i]) + flag;
    if (sum >= 10) {
      flag = 1;
      result.unshift(sum % 10);
    } else {
      flag = 0;
      result.unshift(sum);
    }
  }

  const res = result.join("");
  console.log(res);
  return res;
}

const n1 = "1234568989878";
const n2 = "223187851155555";

bigAdd(n1, n2);
```
