# redux-logger

> `redux-logger` 是一个生产Redux日志记录工具，可以让您重播问题，就像它们发生在您自己的浏览器中一样。让您可以重放Redux操作+状态、网络请求、控制台日志，并查看用户所看到的视频，而不是猜测错误发生的原因，或询问用户屏幕截图和日志转储。

[文档地址](https://github.com/LogRocket/redux-logger)

## 控制台日志

<div>
    <img src="https://github.com/sandlz/images/raw/master/uPic/MX5TX5.png" />
</div>

## 使用

```js
import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
```

### 自定义

```js
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```

:::tip
`logger` 必须是链中的**最后一个中间件**，否则它将记录 `thunk` 和 `promise`，而不是实际操作
:::
