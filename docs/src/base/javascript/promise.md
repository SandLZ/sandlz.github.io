# Promise

> `Promise` 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

## 简介

特点：

1. 对象状态不受外界影响

有三种状态：

- `pending` 进行中
- `fulfilled` 已成功
- `rejected` 已失败

只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果

只有两种可能：

- `pending` -> `fulfilled`
- `pending` -> `rejected`

只要这两种情况发生了，就不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。
如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（`Event`）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

优点：

- 将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
- `Promise`对象提供统一的接口，使得控制异步操作更加容易

缺点：

- 无法取消`Promise`，一旦新建它就会立即执行，无法中途取消
- 不设置回调函数，`Promise`内部抛出的错误，不会反应到外部
- 当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## 基本用法

ES6 规定，`Promise`对象是一个构造函数，用来生成 Promise 实例。

下面代码创造了一个`Promise`实例。

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

`Promise`实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。

```js
promise.then(
  function(value) {
    // success
  },
  function(error) {
    // failure
  }
);
```

### 错误捕获

```js
// bad
promise.then(
  function(data) {
    // success
  },
  function(err) {
    // error
  }
);

// good
promise
  .then(function(data) {
    //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面`then`方法执行中的错误，也更接近同步的写法（`try/catch`）。因此，建议总是使用`catch()`方法，而不使用`then()`方法的第二个参数。

:::tip
如果没有使用`catch()`方法指定错误处理的回调函数，`Promise` 对象抛出的错误不会传递到外层代码，即不会有任何反应。
:::

### `finally`

`finally()`方法用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。该方法是 `ES2018` 引入标准的。

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

### `all`

`Promise.all()`方法用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

上面代码中，`Promise.all()`方法接受一个数组作为参数，`p1`、`p2`、`p3`都是 `Promise` 实例，如果不是，就会先调用下面讲到的`Promise.resolve`方法，将参数转为 `Promise` 实例，再进一步处理。另外，`Promise.all()`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。

`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

:::tip
注意，如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法。
:::

### `race`

`Promise.race()`方法同样是将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。

```js
const p = Promise.race([p1, p2, p3]);
```

上面代码中，只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 `Promise` 实例的返回值，就传递给`p`的回调函数。

`Promise.race()`方法的参数与`Promise.all()`方法一样，如果不是 `Promise` 实例，就会先调用下面讲到的`Promise.resolve()`方法，将参数转为 `Promise` 实例，再进一步处理。

### `allSettled`

有时候，我们希望等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。但是，现有的 Promise 方法很难实现这个要求。

`Promise.all()`方法只适合所有异步操作都成功的情况，如果有一个操作失败，就无法满足要求。

为了解决这个问题，`ES2020` 引入了`Promise.allSettled()`方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做`”Settled“`，包含了`”fulfilled“`和`”rejected“`两种情况。

`Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 `Promise` 对象，并返回一个新的 `Promise` 对象。只有等到参数数组的所有 `Promise` 对象都发生状态变更（不管是`fulfilled`还是`rejected`），返回的 `Promise` 对象才会发生状态变更。

成员对象的`status`属性的值只可能是字符串`fulfilled`或字符串`rejected`，用来区分异步操作是成功还是失败。如果是成功（`fulfilled`），对象会有`value`属性，如果是失败（`rejected`），会有`reason`属性，对应两种状态时前面异步操作的返回值。

### `any`

`ES2021` 引入了`Promise.any()`方法。该方法接受一组 `Promise` 实例作为参数，包装成一个新的 `Promise` 实例返回。

```js
Promise.any([
  fetch("https://v8.dev/").then(() => "home"),
  fetch("https://v8.dev/blog").then(() => "blog"),
  fetch("https://v8.dev/docs").then(() => "docs"),
])
  .then((first) => {
    // 只要有一个 fetch() 请求成功
    console.log(first);
  })
  .catch((error) => {
    // 所有三个 fetch() 全部请求失败
    console.log(error);
  });
```

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

`Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 `Promise` 变成`rejected`状态而结束，必须等到所有参数 `Promise` 变成`rejected`状态才会结束。

### `resolve`

将现有对象转为 `Promise` 对象

```js
const jsPromise = Promise.resolve($.ajax("/whatever.json"));
```

`Promise.resolve()`等价于下面的写法。

```js
Promise.resolve("foo");
// 等价于
new Promise((resolve) => resolve("foo"));
```

:::tip
立即`resolve()`的 `Promise` 对象，是在本轮“事件循环”（`event loop`）的结束时执行，而不是在下一轮“事件循环”的开始时。
:::

### `reject`

```js
const p = Promise.reject("出错了");
// 等同于
const p = new Promise((resolve, reject) => reject("出错了"));

p.then(null, function(s) {
  console.log(s);
});
// 出错了
```

```js
Promise.reject("出错了").catch((e) => {
  console.log(e === "出错了");
});
// true
```

## 实现原理
