# `koa` 洋葱模型

`koa`被认为是第二代 node web framework，它最大的特点就是独特的中间件流程控制，是一个典型的洋葱模型。

`koa` 和 `koa2` 中间件的思路是一样的，但是实现方式有所区别，`koa2` 在 `node7.6` 之后更是可以直接用`async/await` 来替代 `generator` 使用中间件，本文以最后一种情况举例。

## 洋葱模型

下面两张图是网上找的，很清晰的表明了一个请求是如何经过中间件最后生成响应的，这种模式中开发和使用中间件都是非常方便的

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/onion_model_01.png"  />
</div>

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/onion_model_02.png"  />
</div>

来看一个`koa2`的 demo:

```js
const Koa = require("koa");

const app = new Koa();
const PORT = 3000;

// #1
app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(1);
});
// #2
app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
});

app.listen(PORT);
console.log(`http://localhost:${PORT}`);
```

:::details 查看结果
1
2
3
2
1
:::

当程序运行到`await next()`的时候就会暂停当前程序，进入下一个中间件，处理完之后才会仔回过头来继续处理。也就是说，当一个请求进入，`#1`会被第一个和最后一个经过，`#2`则是被第二和倒数第二个经过，依次类推。

## 实现

`koa` 的实现有几个最重要的点

- `context` 的保存和传递
- 中间件的管理和 `next` 的实现

### 源码解析

`app.listen` 使用了`this.callback()`来生成`node`的`httpServer`的回调函数

```js
listen(...args) {
    debug('listen');
    const server = http.createServer(this.callback());
    return server.listen(...args);
}
```

`this.callback`

```js
callback() {
    const fn = compose(this.middleware);

    if (!this.listeners('error').length) this.on('error', this.onerror);

    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };

    return handleRequest;
}
```

这里用 `compose` 处理了一下 `this.middleware` ，创建了 `ctx` 并赋值为 `createContext` 的返回值，最后返回了 `handleRequest`。

`this.middleware` 是中间件的集合

```js
this.middleware = [];
```

```js
use(fn) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    if (isGeneratorFunction(fn)) {
      deprecate('Support for generators will be removed in v3. ' +
                'See the documentation for examples of how to convert old middleware ' +
                'https://github.com/koajs/koa/blob/master/docs/migration.md');
      fn = convert(fn);
    }
    debug('use %s', fn._name || fn.name || '-');
    this.middleware.push(fn);
    return this;
}
```

抛开兼容和判断，这段代码只做了一件事：

```js
use(fn) {
    this.middleware.push(fn);
    return this;
}
```

原来当我们 `app.use` 的时候，只是把方法存在了一个数组里。
那么 `compose` 又是什么呢。跟踪源码可以看到 `compose` 来自 `koa-compose` 模块，代码也不多：（去掉了一些不影响主逻辑的判断）

```js
function compose(middleware) {
  return function(context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(
          fn(context, function next() {
            return dispatch(i + 1);
          })
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
```

比较关键的就是这个 `dispatch` 函数了，它将遍历整个 `middleware` ，然后将 `context` 和 `dispatch(i + 1)` 传给 `middleware` 中的方法。

```js
return Promise.resolve(
  fn(context, function next() {
    return dispatch(i + 1);
  })
);
```

:::tip
```js
await next()
```
`fn` = `async (ctx, next) => { await next() }`

`context` = `ctx`

`next` = `function next(){ return dispatch(i+1)}`
:::

这段代码就很巧妙的实现了两点:

- 将`context`一路传下去给中间件

- 将`middleware`中的下一个中间件`fn`作为未来`next`的返回值

这两点也是洋葱模型实现的核心。

本文转载自[KOA](https://segmentfault.com/a/1190000013981513)