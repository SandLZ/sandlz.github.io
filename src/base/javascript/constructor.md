# 构造函数与 `new`

> 构造函数是学习原型和原型链的基础，建议看完这篇再学习原型相关知识。

涉及知识点：
- `new`
- `Object.create()`

## What?

构造函数可以和`类`的概念联系起来，这个类具有一定的通用性。
通过`new`关键字调用的函数，一般称之为构造函数。

## How?

``` js
function Person(name, age, gender){
  this.name = name
  this.age = age
  this.gender = gender

  this.say = function() {
    console.log(`${this.name} say something.`)
  }
}

const xiaoMing = new Person('XiaoMing', '20', 'man')
xiaoMing.say() // XiaoMing say something.
```

思考以下代码输出：

``` js
Person.weight = 100
const xiaoHong = new Person('XiaoHong', '18', 'women')
console.log(Person.weight)
console.log(xiaoHong.weight)
```

::: details 点击查看结果
```
100
`undefined`
```

结论：
实例化Person的对象：`xiaoHong `无法访问`Person`上的静态属性及方法；
那么如何动态的增加属性和方法呢？这就需要`prototype`出场了！
:::

### 动态添加属性和方法

``` js
Person.prototype.weight = 80
Person.prototype.run = function() {
  console.log(`${this.name} is run`)
}
const xiaoFang = new Person('XiaoFang', '20', 'women')
xiaoFang.weight = 90
console.log(xiaoFang.weight) // 90
xiaoFang.run() // XiaoFang is run
```

## 返回值

- 默认返回当前实例对象
- `return` 基本类型不生效，仍返回当前实例
- `return` 对象(引用类型)，则会覆盖当前实例

## new Person()发生了什么？

MDN的解释：
1. 创建一个空的对象 `{}`
2. 链接该对象(即设置该对象的构造函数)到另一个对象
3. 将步骤1建立的对象作为`this`的上下文
4. 如果该函数没有返回对象，则返回`this`

### 模拟实现

``` js
function myNew(...args) {
  const Constructor = args[0]
  // 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  const obj = Object.create(Constructor.prototype)
  const params = args.slice(1)
  const res = Constructor.apply(obj, params)
  if (typeof res === 'object') return res
  return obj
}

function Person(name) {
  this.name = name
  this.run = function() {
    console.log(`${this.name} is run.`)
  }
}

myNew(Person, 'ZhangSan')
```
测试结果，与`new`操作符一致

<div>
<img src="https://github.com/sandlz/images/raw/master/uPic/kqHxFU.png" style="width: 50%">
</div>

## `new` 和 `Object.create()`区别

``` js
function Person(){
  this.name = 'test'
}

Person.prototype.age = 20

const p1 = new Person('p1')
const p2 = Object.create(Person.prototype)

console.log(`person1- name: ${p1.name}, age: ${p1.age}`)
console.log(`person2- name: ${p2.name}, age: ${p2.age}`)

// person1- name: test, age: 20
// person2- name: undefined, age: 20
```

结论：

1. `Object.create` 不会调用构造函数，`new`操作符会调用构造函数；
2. 这也是我们模拟实现`new`操作符时，主动调用 `Constructor.apply(obj, params)`的原因。




