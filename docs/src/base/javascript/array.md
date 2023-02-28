# 数组

> Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

## 创建组数

``` js
const arr1 = ['a', 'b']
const arr2 = Array.from([1, 2])   // [1, 2]
const arr3 = Array.from('abc')  // ['a', 'b', 'c']
const arr4 = Array.of(1, 2, 3) // [1, 2, 3]
```

### Array.from

API: `Array.from(arrayLike[, mapFn[, thisArg]])`

`arrayLike`: 想要转换成数组的伪数组对象或可迭代对象
`mapFn`(可选): 如果指定了该参数，新数组中的每个元素会执行该回调函数
`thisArg`(可选): 执行回调函数 ``mapFn`` 时 `this` 对象

`return` 新的数组实例

#### ArrayLike

- 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
- 可迭代对象（可以获取对象中的元素,如 Map和 Set 等）

``` js
// String
// ['f', 'o', 'o']
Array.from('foo')

// Set
const set = new Set(['foo', 'bar', 'baz', 'foo'])
// ['foo', 'bar', 'baz']
Array.from(set)

// Map
const map = new Map([[1, 2], [2, 4], [4, 8]])
// [[1, 2], [2, 4], [4, 8]]
Array.from(map)

// 类数组对象(arguments)
function f() {
  return Array.from(arguments)
}

// [1, 2, 3]
f(1, 2, 3)
```

### Array.of

`API: Array.of(element0[, element1[, ...[, elementN]]])`

- `elementN` 任意个参数，将按顺序成为返回数组中的元素

`return` 新的数组实例

``` js
Array.of(1)         // [1]
Array.of(1, 2, 3)   // [1, 2, 3]
Array.of(undefined) // [undefined]
```

::: tip
Array(n) 是创建一个长度为n的空数组;
（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）
``` js
Array(3) // [ , , ,]
```
:::

注：`Array.from` 、 `Array.of` 是ES6新增方法。

## 数组实例

::: warning
所有数组实例都会从 `Array.prototype` 继承属性和方法。修改 Array 的原型会影响到所有的数组实例
:::

### 属性

- `length`:      数组长度
- `constructor`: 构造函数：`Array`

### 方法

#### 修改器方法

下面的这些方法会改变调用它们的对象自身的值

- `push`    末尾添加元素(可多个)， 并返回数组的长度
- `pop`     删除末尾元素，并返回这个元素
- `shift`   删除第一个元素，并返回这个元素
- `unshift` 在数组开头添加元素(可多个)，并返回数组的长度
- `splice`  在数组任意位置增加或删除任意个元素
- `reverse` 反转数组顺序
- `sort`    排序，并返回当前数组

#### 访问器方法

下面的这些方法不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值

- `concat`          返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组
- `slice`           返回抽取当前数组中的一段元素组合成一个新数组
- `join`            返回连接所有数组元素组成一个字符串
- `toString`        返回一个由所有数组元素组合而成的字符串(屏蔽了`Object.prototype.toString()`方法)
- `toLocaleString`  返回一个由所有数组元素组合而成的本地化后的字符串(屏蔽了`Object.prototype.toLocalString()`方法)
- `indexOf`         返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
- `lastIndexOf`     返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
- `includes`(ES2016)判断当前数组是否包含某指定的值
- `copyWithin`      方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
- `fill`            将数组中指定区间的所有元素的值，都替换成某个固定的值

#### 迭代方法

- `forEach`     为数组中的每个元素执行一次回调函数
- `entries`     返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对
- `every`       如果数组中的每个元素都满足测试函数，则返回 `true`，否则返回 `false`
- `some`        如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
- `filter`      将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
- `find`        找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
- `findIndex`   找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
- `keys`        返回一个数组迭代器对象，该迭代器会包含所有数组元素的键
- `values`      返回一个数组迭代器对象，该迭代器会包含所有数组元素的值
- `map`         返回一个由回调函数的返回值组成的新数组
- `reduce`      从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
- `reduceRight` 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值

## 迭代

### forEach

API: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
return `undefined`

``` js
const arr = ['a', 'b', 'c']
arr.forEach((cur, index, array) => {
  console.log(`index : ${index}, value is: ${cur}`)
}, this)
// index : 0, value is: a
// index : 1, value is: b
// index : 2, value is: c
```
注： 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。

### for of

用于迭代 `可迭代对象`， 如
- Array
- Map
- Set
- String
- TypedArray
- arguments对象
- ModeList
- ...

API:
``` js
for (variable of iterable) {
    //statements
}
```

Array
``` js
const arr = ['a', 'b', 'c']
for(const item of arr) {
  console.log(item)
}
// a
// b
// c
```

String
``` js
const str = 'abc'
for(const item of str) {
  console.log(item)
}
// a
// b
// c
```

Map
``` js
const map = new Map([["a", 1], ["b", 2], ["c", 3]])
for(const item of map) {
  console.log(item)
}
// [a, 1]
// [b, 2]
// [c, 1]
for(const [k, v] of map) {
  console.log(v)
}
// 1
// 2
// 3
```

Set
``` js
const set = new Set([1, 1, 2, 2, 3, 3]);

for (const item of set) {
  console.log(item)
}
// 1
// 2
// 3
```

arguments
``` js
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3)
// 1
// 2
// 3
```

### for in

以任意顺序遍历一个对象的`除Symbol以外`的可枚举属性

注： 
1. 为遍历对象属性而构建的，不建议与数组一起使用
2. 会遍历原型上的属性(可使用`hasOwnProperty()`排除 )

``` js
const obj = {a: 1, b: 2, c: 3}
for(const k in obj) {
  console.log(k)
}
// a
// b
// c
```

### map

API: 
``` js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
```

``` js
const arr = [1, 2, 4]
arr.map((cur) => cur * 2)
// or 
arr.map((cur, index) => {
  console.log(`${index}: cur`)
  return cur *2
})
// return: [2, 4, 8]
```


### reduce

API: `arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`
return 函数累计处理的结果

1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)
5. initialValue 默认值为数组第一个参数(数组为空且没有提供initialValue，会抛出TypeError)

reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值

``` js
const arr = [1, 2, 3]
arr.reduce((acc, cur, index) => {
  return acc + cur
})
// 6
```

::: tip
`提前终止循环`
forEach 除了抛出异常无其他方法终止循环
普通`for``、for in`、`for of` 可提前终止循环，使用：break, continue,return或抛出异常
`every`、`some`、`find`、`findIndex`也可提前终止循环
:::

## 应用

### 数组去重

#### reduce

``` js
const arr = ['a', 'b', 'b', 'a', 'c']
arr.reduce((acc, cur) => {
  if (acc.indexOf(cur) === -1) {
    acc.push(cur)
  }
  return acc
}, [])
```

#### Set

``` js
const arr = ['a', 'b', 'b', 'a', 'c']
Array.from(new Set(arr))
```

### 数组扁平化

``` js
// 三维数组
const arr = [[1, 2], ['a', 'b'], ['c', ['d', 'e']]]
/**
 * 数组扁平化
 * arr 原数组
 * d 层级 无限大Infinity 
 */
function deepArr(arr, d = 1) {
  if (d > 0) {
    return arr.reduce((acc, cur) => {
      return acc.concat(
        Array.isArray(cur)
        ? deepArr(cur, d -1) 
        : cur)
    }, [])
  } else {
    return arr.slice()
  }
}
```



