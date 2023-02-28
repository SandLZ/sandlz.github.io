# 数据类型

> 数据类型介绍

## 基本数据类型(原始)

- `undefined` 用于未定义的值 —— 只有一个 undefined 值的独立类型
- `null`      用于未知的值 —— 只有一个 null 值的独立类型
- `number`    用于任何类型的数字：整数或浮点数，在 ±(253-1) 范围内的整数
- `boolean`   用于 true 和 false
- `string`    用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型
- `symbol`    用于唯一的标识符(ES6)
- `bigint`    用于任意长度的整数(ES2020)

### 基本类型包装对象

除`undefined`、`null`外，所有基本类型都有其对应的包装对象

- `Number`    数值基本类型
- `Boolean`   布尔值基本类型
- `String`    字符串基本类型
- `Symbol`    字面量基本类型

这个包裹对象的`valueOf()`方法返回基本类型值

::: tip
除 Object 以外的所有类型都是不可变的（值本身无法被改变）。例如，与 C 语言不同，JavaScript 中字符串是不可变的（译注：如，JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变）。我们称这些类型的值为“原始值”
:::

## 复杂数据类型

- `Object`

## 判断数据类型

### typeof

思考下面代码的输出：

``` js
const obj = {
  'undefined': undefined,
  'null': null,
  'boolean': true,
  'number': 100,
  'array': [1, 2, 3],
  'bigInt': BigInt(1234),
  'string': 'str',
  'symbol': Symbol('sym'),
  'funtion': function() {},
  'object': {},
  'objectString': new String('str'),
  'objectNumber': new Number(100)
}

for (const key in obj) {
  console.log(typeof obj[key])
}
```

::: details 点击查看结果
``` js{2,4,5,7-10}
const result = {
  'undefined': undefined,             // undefined
  'null': null,                       // object (历史原因)
  'boolean': true,                    // boolean
  'number': 100,                      // number
  'array': [1, 2, 3],                 // object
  'bigInt': BigInt(1234),             // bigint
  'string': 'str',                    // string
  'symbol': Symbol('sym'),            // symbol
  'funtion': function() {},           // function
  'object': {},                       // object
  'objectString': new String('str'),  // object
  'objectNumber': new Number(100)     // object
}
```

结论： `typeof` 适用于除(null)的基本数据类型(也叫原始类型)，换句话说，任何从 `Object` 派生出来的结构类型，使用 `typeof` 是不起作用的，因为总是会得到 "object"
:::

### instanceof

思考下面代码的输出：

```js
'hello world' instanceof String
123 instanceof Number
undefined instanceof Object
null instanceof Object
[] instanceof Array
[] instanceof Object
new Date() instanceof Date
new Date() instanceof Object
function Car() {}
new Car() instanceof Car
new Car() instanceof Object
```

::: details 点击查看结果
``` js
'hello world' instanceof String // false
123 instanceof Number           // false
undefined instanceof Object     // false
null instanceof Object          // false
[] instanceof Array             // true
[] instanceof Object            // true
new Date() instanceof Date      // true
new Date() instanceof Object    // true
function Car() {} 
new Car() instanceof Car        // true
new Car() instanceof Object     // true
```

结论： `instanceof` 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上,只能用于对象，即基本类型无法使用。
:::

更多关于`protype`知识请查阅[prototype](./prototype.md)

#### instanceof 实现

以`[] instanceof Object`为例
1. []数组对象的`__proto__`属性指向`Array.prototype`
2. `Array.prototype.__proto__`指向`Object.prototype`
3. `Object.prototype.__proto__`指向`null`

```js
function myInstanceof(A, B) {
  let l = A.__proto__
  let r = B.prototype
  if (l === r) return true
  if (l.__proto__) return myInstanceof(l, B)
  return false
}
```

### constructor

思考下面代码的输出：

``` js
[].constructor === Array
[].constructor === Object

{}.constructor === Object

const num = 1
num.constructor === Number

const bool = false
bool.constructor === Boolean

const str = 'hello world'
str.constructor === String

const func = function() {}
func.contructor === Function

const a = undefined
console.log(a.contructor)

const b = null
console.log(b.contructor)
```

::: details 点击查看结果
``` js
[].constructor === Array      // true
[].constructor === Object     // true

{}.constructor === Object     // true

const num = 1
num.constructor === Number    // true

const bool = false
bool.constructor === Boolean  // true

const str = 'hello world'
str.constructor === String    // true

const func = function() {}
func.contructor === Function  // true

const a = undefined
console.log(a.contructor)     // Uncaught TypeError: Cannot read property 'contructor' of undefined

const b = null
console.log(b.contructor)     // Uncaught TypeError: Cannot read property 'contructor' of undefined
```

结论：`contructor`与 `typeof`、`instanceof`不同， `typeof`、`instanceof`属于`表达式和运算符`, 而`contructor`关系到`Object`对象下的。
一般场景下可以满足使用需求，但针对`null`、`undefined`会报错。

:::

### Object.prototype.toString

:::tip
es6 新写法
```js
const obj = []
Reflect.apply(Object.prototype.toString,obj,[])
```
:::

``` js
function getType(a) {
  return Object.prototype.toString.call(a).slice(8, -1)
}

getType(undefined)        // Undefined
getType(null)             // Null
getType(123)              // Number
getType('hello world')    // String
getType([])               // Array
getType(true)             // Boolean
getType({})               // Object
getType(new Function())   // Function
getType(new Date)         // Date
getType(new RegExp())     // RegExp
getType(new Error())      // Error
getType(document)         // HTMLDocument
getType(window)           // Window
```

::: tip
需要注意的是，必须通过Object.prototype.toString.call来获取，而不能直接 new Date().toString(), 从原型链的角度讲，所有对象的原型链最终都指向了Object, 按照JS变量查找规则，其他对象应该也可以直接访问到Object的toString方法，而事实上，大部分的对象都实现了自身的toString方法，这样就可能会导致Object的toString被终止查找，因此要用call来强制执行Object的toString方法
:::

## 总结

- `typeof` 准确判断基本数据类型，但针对引用类型(除`function`外)都返回`object`
- `instanceof` 已知是引用类型的可以使用（基于原型链）
- `constructor` 可以使用，但`constructor`易变，不可信赖(为了规范，在重写对象原型时一般都需要重新给constructor赋值，以保证实例对象的类型不被改写), 无法判断`null`、`undefined`
- `Object.prototype.toString` 通用但稍显繁琐

## 参考链接

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [JS数据类型](https://juejin.cn/post/6844903623231537159)
