# this

> `call`、`apply`、`bind` 都是为了改变 this 指向。

涉及知识点：

- `call`、`apply`、`bind`
- `this`

## this

this 代表函数运行时的环境。

### 案例一

思考以下代码输出：

```js
function hello() {
  // window
  console.log(this);
}

hello();
```

说明：

1. `hello`函数在浏览器及全局环境下运行；
2. `hello`函数内部有个`this`, `this`指向`window`;
3. 严格模式下，默认 this 不再是`window`， 而是 `underfined`

### 案例二

构造函数方式

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

let p = new Person("ZhangSan", 20);
```

<div>
  <img src="https://gitee.com/sandlz/images/raw/master/uPic/lsV17E.png" style="width: 80%">
</div>

在 Person 上新增方法

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(`I'm ${this.name}, and age is ${this.age}`);
  };
}

let p = new Person("ZhangSan", 20);
// I'm ZhangSan, and age is 20
p.say();

// 修改下以下方式调用
let t = p.say;
// I'm , and age is undefined
t();
```

修改后的为什么输出`undefined`?

1. `t`变量只是指向了`p`的`say`方法，尚未调用；
2. 此时的`t`位于全局，直接执行的话`this`则指向`window`；

那么如何修改，可以得到正确的输出呢？

#### `箭头函数`方式

特点：`this`指向是在定义时的函数作用域链，向上查找。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = () => {
    console.log(`I'm ${this.name}, and age is ${this.age}`);
  };
}

let p = new Person("ZhangSan", 20);
let t = p.say;
// I'm ZhangSan, and age is 20
t();
```

#### `call/apply`方式

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(`I'm ${this.name}, and age is ${this.age}`);
  };
}

let p = new Person("ZhangSan", 20);
let t = p.say;
// I'm ZhangSan, and age is 20
t.call(p); // or t.apply(p)
```

### 案例三

```js
var a = 20;

function bar() {
  console.log(a);
}

function foo(fn) {
  var a = 10;
  fn();
}

foo(bar);// 20
```

### 案例四

```js
function bar() {
  var a = 20;
  return function() {
    console.log(a);
  }
}


var foo = bar();
var a = 10;
foo(); // 20
```

### 案例五

```js
var obj = {
    text: 'str1',
    fn: function() {
        console.log(this.text)
    }
}

var obj2 = {
    text: 'str2',
    fn: obj.fn,
    fn2: obj.fn()
}

obj2.fn() // str1
obj2.fn2  // str2
```


## call

API: `func.call(thisArg, arg1, arg2, ...)`

thisArg: 可选，想要指定的上下文
参数：指定的参数(可多个)

### 示例一

求数组中的最大值

```js
const nums = [1, 10, 8, 9, 2, 5, -2];
Math.max.call(Math, ...nums);
```

## apply

API: `func.apply(thisArg, [arg1, arg2, ...])`

`thisArg`: 可选，想要指定的上下文
参数： 数组

### 示例一

```js
const nums = [1, 10, 8, 9, 2, 5, -2];
Math.max.apply(Math, nums);
```

## bind

API: `func.bind(thisArg[, arg1[, arg2[, ...argN]]])`

`bind`和`call`、`apply`也有相似之处；`bind()`方法创建一个函数(称之为绑定函数)并返回，当调用这个绑定函数的时候，
会以传入的`第一个参`数作为`this`,后面的参数作为原函数的参数来调用原函数。

- 定义时绑定`this`

### 示例一

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(`I'm ${this.name}, and age is ${this.age}`);
  };
}

let p = new Person("ZhangSan", 20);
// 使用bind后返回的是一个函数 t，这个函数t内的this永远是p了
let t = p.say.bind(p);
// 需要手动执行
// I'm ZhangSan, and age is 20
t();
```

### 示例二

```js
let vm = new Vue({
  data() {
    return {
      height: 768,
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      function() {
        this.height = document.body.clientHeight;
      }.bind(this)
    );
  },
});
```

::: tip
`call`、`apply` 、`bind`
共同点

- 第一个参数为`undefined`、`null`时 指向 `window`
  不同点
- `call`、`apply` 立即执行
- `bind` 需手动调用
- `call`参数可多个(逗号隔开)、`apply`参数只能是数组
- `bind`方法创建一个函数(称之为绑定函数)并返回，当调用这个绑定函数的时候，
  会以传入的`第一个参`数作为`this`,后面的参数作为原函数的参数来调用原函数。
- `bind`支持柯里化形式传参 fn(1)(2)
  :::

## 手写 call

1. 改变 this 指向：通过给上下文对象赋值一个临时函数，执行这个函数时 this 就会指向当前正在执行的对象
2. 传参
3. 返回值

```js
Function.prototype.myCall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not function");
  }
  context = context || window;
  //***************************************************************************************************
  // 这三步也可以这样理解：
  // this指的就是调用call 方法的函数
  // 给当前上下文(call方法的第一个参数)添加一个属性fn，属性值为this，当前上下文就可以调用这个方法了。
  // 把call方法传入的其他的参数传入到属性fn指代的函数中，直接调用函数
  // f.myCall(obj) 就是将f方法添加到obj的属性中，f中的this 指向 obj

  context.fn = this; //this指向的是当前的函数（Function实例）
  let arg = [...arguments].slice(1); //获取除了this指向对象以外的参数，空数组slice后返回仍是空数组
  let result = context.fn(...arg); //隐式绑定，当前函数的this指向context
  //***************************************************************************************************
  delete context.fn;
  return result;
};
```

```js
obj.myFun.myCall(obj2, "1");
// 上述 this 即代表 `myFun`
```

## 手写 apply

```js
Function.prototype.myCall = function(context, arr) {
  context = context ? Object(context) : window;
  let tempFunc = Symbol(context);
  context[tempFunc] = this;
  let res;
  if (arr) {
    res = context[tempFunc](...arr);
  } else {
    res = context[tempFunc]();
  }
  delete context[tempFunc];
  return res;
};
```

## 手写 bind

1. 只在 bind 中传递函数参数
2. 在 bind 中传递函数参数，也在返回函数中传递参数

```js
Function.prototype.myBind = function(context, ...args) {
  // context 是上下文对象 ， args 是传入的参数
  if(typeof this !=== 'function') {
    throw new Error('Error!');
  }
  const fn = this;
  return (...fnArgs) => {
    // fnArgs是返回函数的参数
    return this.apply(context, args.concat(fnArgs));
  }
}
```

```js
Function.prototype.bind2 = function(context) {
  //对context进行深拷贝，防止bind执行后返回函数未执行期间，context被修改
  const ctx = JSON.parse(JSON.stringify(context)) || window;
  ctx.func = this;
  const args = Array.from(arguments).slice(1);
  return function() {
    //注意bind方法需要合并两次函数执行的参数
    const allArgs = args.concat(Array.from(arguments));
    return allArgs.length > 0 ? ctx.func(...allArgs) : ctx.func();
  };
};
```

## 参考

- [call/apply/bind](https://juejin.cn/post/6936011776882376735)
