# 手写系列

> 针对原生 JavaScript 的一些实践练习。

## JS 原生功能

### `new`操作符

::: details 答案
可参考[new 发生了什么？](../constructor.md)

```js
function myNew(...args) {
  const Constructor = args[0];
  // 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  const obj = Object.create(Constructor.prototype);
  const params = args.slice(1);
  const res = Constructor.apply(obj, params);
  // 判断返回值是否是对象类型
  if (typeof res === "object") return res;
  return obj;
}
```

:::

### 发布/订阅模式

::: details 答案

```js
class EventBus {
  constructor() {
    this.events = Object.create(null);
  }
  on(event, fn) {
    this.events.event = this.events.event || [];
    this.events.event.push(fn);
  }
  off(event, fn) {
    const index = (this.events.event || []).indexOf(fn);
    if (index < -1) {
      return;
    } else {
      this.events.event.splice(index, 1);
    }
  }
  fire(event) {
    this.events.event.forEach((fn) => fn());
  }
}
var bus = new EventBus();
bus.on("onclick", function() {
  console.log("click1 fire");
});
bus.on(
  "onclick",
  (fn = function() {
    console.log("click2 fire");
  })
);
bus.fire("onclick");
```

:::

### 观察者模式

:::details 实现

```js
class Observer {
  constructor(fn) {
    this.update = fn;
  }
}
class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const delIndex = this.observers.indexOf(observer);
    this.observers.splice(delIndex, 1);
  }
  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

var subject = new Subject();
var ob1 = new Observer(function() {
  console.log("ob1 callback run");
});
subject.addObserver(ob1);
var ob2 = new Observer(function() {
  console.log("ob2 callback run");
});
subject.addObserver(ob2);
subject.notify();
```
:::

应用：如 `Vue`中双向绑定。

### `Promise`

:::details 实现
```js
class Promise{
  constructor(executor){
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    };
    let reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    };
    try{
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled,onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };
      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };
      if (this.state === 'pending') {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
      };
    });
    return promise2;
  }
  catch(fn){
    return this.then(null,fn);
  }
}
function resolvePromise(promise2, x, resolve, reject){
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called;
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') { 
        then.call(x, y => {
          if(called)return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, err => {
          if(called)return;
          called = true;
          reject(err);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if(called)return;
      called = true;
      reject(e); 
    }
  } else {
    resolve(x);
  }
}
//resolve方法
Promise.resolve = function(val){
  return new Promise((resolve,reject)=>{
    resolve(val)
  });
}
//reject方法
Promise.reject = function(val){
  return new Promise((resolve,reject)=>{
    reject(val)
  });
}
//race方法 
Promise.race = function(promises){
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(resolve,reject)
    };
  })
}
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function(promises){
  let arr = [];
  let i = 0;
  function processData(index,data){
    arr[index] = data;
    i++;
    if(i == promises.length){
      resolve(arr);
    };
  };
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(data=>{
        processData(i,data);
      },reject);
    };
  });
}
```
:::
### 柯里化

把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数

柯里化有 3 个常见作用：

- 参数复用
- 提前返回
- 延迟计算/运行

#### 1. 求和函数

:::details 实现
```js
// 普通方式
var add1 = function(a, b, c) {
  return a + b + c;
};
// 柯里化
var add2 = function(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
};
```
:::

这里每次传入参数都会返回一个新的函数，这样一直执行到最后一次返回 `a+b+c` 的值。
但是这种实现还是有问题的，这里只有三个参数，如果哪天产品经理告诉我们需要改成`100`次？我们就重新写`100`次？这很明显不符合开闭原则，所以我们需要对函数进行一次修改。

:::details 实现
```js
const curry = (fun, initArgs) => {
  let _this = this;
  let len = fun.length; // 被改造函数参数的个数
  let args = initArgs || [];

  return function() {
    let _args = [...args, ...arguments]; // 参数

    // 如果参数个数小于最初的fun.length，则递归调用，继续收集参数
    if (_args.length < len) {
      return curry.call(_this, fun, _args);
    }

    // 参数收集完毕，则执行函数，返回结果
    return fun.apply(this, _args);
  };
};

const sum = curry(function(a, b, c) {
  return a + b + c;
});

console.log(sum(1, 2, 3));
console.log(sum(1, 2)(3));
console.log(sum(1)(2, 3));
```
:::
## 应用方向

### 防抖

在事件被触发 n 事件后再执行回调函数，如果在这 n 秒内又被触发，则重新计时。

场景：

- 输入框中连续输入一串字符后，只会在输入完后去执行最后一次的查询 `ajax` 请求，这样可以有效减少请求次数，节约请求资源
- window 的 `resize`、`scroll` 事件，不断地调整浏览器的窗口大小、或者滚动时会触发对应事件，防抖让其只触发一次

:::details 实现
```js
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
```
:::
### 节流

规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

场景：

- 连续不断地触发某事件（如点击），只在单位时间内只触发一次
- 在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间发一次 ajax 请求，而不是在用户停下滚动页面操作时才去请求数据
- 监听滚动事件，比如是否滑到底部自动加载更多

:::details 实现
```js
function throttle(fun, delay) {
  let flag = true,
    timer = null;
  return function(...args) {
    let context = this;
    if (!flag) return;
    flag = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, delay);
  };
}
```
:::

总结下防抖和节流的区别：

-效果：

函数防抖是某一段时间内只执行一次；而函数节流是间隔时间执行，不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。

-原理：

防抖是维护一个计时器，规定在 delay 时间后触发函数，但是在 delay 时间内再次触发的话，都会清除当前的 timer 然后重新设置超时调用，即重新计时。这样一来，只有最后一次操作能被触发。

节流是通过判断是否到达一定时间来触发函数，若没到规定时间则使用计时器延后，而下一次事件则会重新设定计时器。

## 深浅拷贝

### 浅拷贝

如果我们要复制对象的所有属性都不是引用类型时，就可以使用浅拷贝，实现方式就是遍历并复制，最后返回新的对象。

:::details 实现
```js
function shallowCopy(obj) {
  var copy = {};
  // 只复制可遍历的属性
  for (key in obj) {
    // 只复制本身拥有的属性
    if (obj.hasOwnProperty(key)) {
      copy[key] = obj[key];
    }
  }
  return copy;
}
```
:::

我们使用浅拷贝会复制所有引用对象的指针，而不是具体的值，所以使用时一定要明确自己的需求，同时，浅拷贝的实现也是最简单的。

S 内部实现了浅拷贝，如 `Object.assign()`，其中第一个参数是我们最终复制的目标对象，后面的所有参数是我们的即将复制的源对象，支持对象或数组，一般调用的方式为:

```js
var newObj = Object.assign({}, originObj);
```

### 深拷贝

简单的深拷贝：不处理循环引用，不处理对象原型，函数依然是引用类型

:::details 实现
```js
var deepClone = function(currobj) {
  if (typeof currobj !== "object") {
    return currobj;
  }
  if (currobj instanceof Array) {
    var newobj = [];
  } else {
    var newobj = {};
  }
  for (var key in currobj) {
    if (typeof currobj[key] !== "object") {
      // 不是引用类型，则复制值
      newobj[key] = currobj[key];
    } else {
      // 引用类型，则递归遍历复制对象
      newobj[key] = deepClone(currobj[key]);
    }
  }
  return newobj;
};
```
:::

另外还有一种方式是使用 JSON 序列化，巧妙但是限制更多：

```js
// 调用JSON内置方法先序列化为字符串再解析还原成对象
newObj = JSON.parse(JSON.stringify(obj));
```

JSON 是一种表示结构化数据的格式，只支持简单值、对象和数组三种类型，不支持变量、函数或对象实例。所以我们工作中可以使用它解决常见问题，但也要注意其短板：函数会丢失，原型链会丢失，以及上面说到的所有缺陷。

:::details 完全实现
```js
/**
 * 深拷贝关注点:
 * 1. JavaScript内置对象的复制: Set、Map、Date、Regex等
 * 2. 循环引用问题
 * @param {*} object
 * @returns
 */
function deepClone(source, memory) {
  const isPrimitive = (value) => {
    return /Number|Boolean|String|Null|Undefined|Symbol|Function/.test(
      Object.prototype.toString.call(value)
    );
  };
  let result = null;

  memory || (memory = new WeakMap());
  // 原始数据类型及函数
  if (isPrimitive(source)) {
    console.log("current copy is primitive", source);
    result = source;
  }
  // 数组
  else if (Array.isArray(source)) {
    result = source.map((value) => deepClone(value, memory));
  }
  // 内置对象Date、Regex
  else if (Object.prototype.toString.call(source) === "[object Date]") {
    result = new Date(source);
  } else if (Object.prototype.toString.call(source) === "[object Regex]") {
    result = new RegExp(source);
  }
  // 内置对象Set、Map
  else if (Object.prototype.toString.call(source) === "[object Set]") {
    result = new Set();
    for (const value of source) {
      result.add(deepClone(value, memory));
    }
  } else if (Object.prototype.toString.call(source) === "[object Map]") {
    result = new Map();
    for (const [key, value] of source.entries()) {
      result.set(key, deepClone(value, memory));
    }
  }
  // 引用类型
  else {
    if (memory.has(source)) {
      result = memory.get(source);
    } else {
      result = Object.create(null);
      memory.set(source, result);
      Object.keys(source).forEach((key) => {
        const value = source[key];
        result[key] = deepClone(value, memory);
      });
    }
  }
  return result;
}
```
:::