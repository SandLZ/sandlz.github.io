# 继承与原型链

涉及知识点：
- `prototype`
- `__proto__` 
- `Object.getPrototypeOf()`
- `call`、`apply`、`bind`
- `this`

::: tip
循`ECMAScript`标准，someObject.[[Prototype]] 符号是用于指向 someObject 的原型。从 ECMAScript 6 开始，[[Prototype]] 可以通过 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 `__proto__`。
:::

::: warning
通过现代浏览器的操作属性的便利性，可以改变一个对象的 [[Prototype]] 属性, 这种行为在每一个JavaScript引擎和浏览器中都是一个非常慢且影响性能的操作，使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 obj.__proto__ = ... 语句上, 它还会影响到所有继承来自该 [[Prototype]] 的对象，如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()
:::

::: warning
当`Object.prototype.__proto__ `已被大多数浏览器厂商所支持的今天，其存在和确切行为仅在ECMAScript 2015规范中被标准化为传统功能，以确保Web浏览器的兼容性。为了更好的支持，建议只使用 `Object.getPrototypeOf()`。
:::

本文为了从语义上更好理解原型相关知识，采用`__proto__`。

## 概念

JS是一个动态语言类型，本身不提供`class`类的实现，ES6中的class只是语法糖，JS仍是基于原型的。

每个实例对象（ `object` ）都有一个私有属性（称之为 `__proto__` ）指向它的构造函数的原型对象（`prototype` ）,即 `object.__proto__ === SomeConstructor.prototype`。该原型对象也有一个自己的原型对象( `__proto__` ) ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个原型链中的最后一个环节。

## 基于原型链的继承

### 继承属性

`JavaScript` 对象是动态的属性“包”（指其自己的属性）。`JavaScript` 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

::: tip
不要与构造函数 func 的 `prototype` 属性相混淆。被构造函数创建的实例对象的 [[Prototype]] 指向 func 的 prototype 属性。
Object.prototype 属性表示 Object 的原型对象。
:::

考虑以下代码输出：

``` js
function f() {
  this.a = 1
  this.b = 2
}
let obj = new f()
f.prototype.b = 3
f.prototype.c = 4
console.log(`a: ${obj.a}, b: ${obj.b}, c: ${obj.c}, d: ${obj.d}`)
// 结果 a: 1, b: 2, c: 4, d: undefined
```

整个原型链如下：

```
{a: 1, b: 2} ==> {b: 3, c: 4} ==> Object.prototype ==> null
```

### 继承方法

在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别。

``` js
function f() {
  this.a = 1

  this.say = function() {
    return this.a + 10
  }
}

let obj = new f()
console.log(obj.say()) // 11
// obj2 继承自 obj
let obj2 = Object.create(obj)
obj2.a = 2
console.log(obj2.say()) // 12
```

结论：`this`指向当前继承的对象，而不是继承的函数所在的原型对象

### 常见继承方式

常见方式有以下几种：

#### 原型链继承

特点： 子类型的原型(`Child.prototype`)是父类型的一个实例对象

``` js
function Parent(name) {
  this.name = name
  this.play = []

  this.say = function() {
    console.log(`${this.name} say.`)
  }
}

Parent.prototype.run = function() {
  console.log(`${this.name} is run.`)
}

function Child(age) {
  this.age = age
}

Child.prototype = new Parent()
// 需指定子类的构造函数指向，否则子类实例的构造函数会指向父类
Child.prototype.contructor = Child

let c1 = new Child(10)
c1.name = 'Child_1'
c1.play.push(1)
let c2 = new Child(20)
c2.name = 'Child_2'
c1.play.push(2)
console.log(c1)
console.log(c2)
c1.say()
c2.say()
// true
console.log(c1.play === c2.play)
```

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/0k4DQT.png" style="width: 80%">
</div>

注：

本质是通过将子类的原型指向了父类的实例：`Child.prototype = new Parent()`

1. `c1.__proto__` === `Child.prototype`
2. `c1.__proto__.__proto__` === `Parent.prototype`

::: tip
优点：
- 父类方法可以复用

缺点：
- 无法实现多继承
- 父类的引用属性会被所有子类实例共享(如示例中的`play`)
- 子类构建实例时不能向父类传参
:::

#### 构造函数继承(经典继承)

特点：将父类构造函数的内容复制给了子类的构造函数。这是所有继承中唯一一个不涉及到`prototype`的继承

``` js
function Parent(name) {
  this.name = name
  this.play = []

  this.say = function() {
    console.log(`${this.name} say.`)
  }
}

Parent.prototype.run = function() {
  console.log(`${this.name} is run.`)
}

function Child(name, age) {
  this.age = age
  Parent.call(this, name)
}

let c1 = new Child('Child_1', 10)
let c2 = new Child('Child_2', 20)
c1.play.push(1)
c2.play.push(2)
console.log(c1)
console.log(c2)
```

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/ZFukEn.png" style="width: 80%">
</div>


::: tip
优点：
- 可以实现多继承(`call`多个父类)
- 解决原型链继承的引用类型共享问题
- 创建子实例时，可以向父类传递参数

缺点：
- 只能继承父类的实例属性和方法，不能继承原型属性和方法
- 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
:::

#### 组合继承

特点：原型链继承和构造函数结合

``` js
function Parent(name) {
  this.name = name
  this.play = []

  this.say = function() {
    console.log(`${this.name} say.`)
  }
}

Parent.prototype.run = function() {
  console.log(`${this.name} is run.`)
}

function Child(name, age) {
  this.age = age
  Parent.call(this, name)
}

Child.prototype = new Parent()
Child.prototype.contructor = Child

```

::: tip
优点：
- 解决原型链继承的引用类型共享问题
- 创建子实例时，可以向父类传递参数
- 可以继承原型属性和方法，实现方法复用

缺点：
- 调用了两次父类的构造函数
:::

#### 原型式继承

ES5中 Object.create()的模拟实现, 将传入的对象作为创建的对象的原型。

``` js
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
```

``` js
let person = {
  name: 'test',
  friends: [
    'f1',
    'f2'
  ]
}

let p1 = createObj(person)
let p2 = createObj(person)
p1.friends.push('f3')
//  ["f1", "f2", "f3"]
console.log(p2)
```

::: tip
优点：
- 可以复用方法

缺点：
- 父类的引用属性会被所有子类实例共享（和原型链继承一样）
- 子类构建实例时不能向父类传参
:::


#### 寄生式继承

特点：使用原型式继承获得一个目标对象的浅复制，然后增强这个浅复制的能力(提供一种思路)
与借用构造函数(经典继承)一样，每次创建实例对象都会调用一遍方法。

``` js
function createObj(o) {
    let clone = Object.create(o)
    clone.doSomething = function() {

    }
    return clone
}

let person = {
  name: 'test',
  friends: [
    'f1'
  ]
}

let p1 = createObj(person)
```


#### 寄生组合式继承

特点： 组合继承有一个会两次调用父类的构造函数造成浪费的缺点，寄生组合继承就可以解决这个问题。
这也是ES5目前实现继承的最优解

``` js
function inheritObj(child, parent) {
  // 创建了父类原型的浅复制
  const prototype = Object.create(parent.prototype)
  // 修正原型的构造函数
  prototype.constructor = child
  // 将子类的原型替换为这个原型
  child.prototype = prototype
}

function Parent(name) {
  this.name = name
  this.say = function() {
    console.log(`${this.name} say.`)
  }
}

function Child(name, age) {
  this.age = age
  Parent.call(this, name)
}

inheritObj(Child, Parent)

let child = new Child(20)
child.name = 'Zhangsan'
console.log(child)
```

#### ES6 继承

``` js
class A {}
class B extends A {
  constructor() {
    super()
  }
}
```

``` js
class A {}
class B {}
// B 的实例继承 A 的实例
Object.setPropertyOf(B.prototype, A.prototype)
// B 继承 A 的静态属性
Object.setPropertyOf(B, A)
```


## 参考

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [理解JS继承](https://segmentfault.com/a/1190000015727237)