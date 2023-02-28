# redux-thunk

`thunk` 一词是一个编程术语，意思是**一段执行延迟工作的代码**。我们可以编写一个函数体或代码，用于以后执行工作，而不是现在执行一些逻辑。

特别是对于`Redux`，`thunks` 是一种编写函数的模式，其中包含逻辑，可以与 `Redux` 存储的 `dispatch` 和 `getState` 方法交互。

Thunks是在 `Redux` 应用程序中编写异步逻辑的标准方法，通常用于数据获取。但是，它们可以用于各种任务，并且可以包含同步和异步逻辑。

[文档地址](https://github.com/reduxjs/redux-thunk)

## Why thunk?

Thunks 允许我们独立于UI层编写额外的Redux相关逻辑。此逻辑可能包括副作用，例如异步请求或生成随机值，以及需要调度多个操作或访问Redux存储状态的逻辑。

`Redux Reducer` 不能包含副作用，但实际应用程序需要具有副作用的逻辑。其中一些可能位于组件内部，但一些可能需要位于UI层之外。

Thunks（和其他Redux中间件）为我们提供了一个放置这些副作用的位置。

在组件中直接使用逻辑是很常见的，例如在 `click` 处理程序或 `useEffect` 挂钩中发出异步请求，然后处理结果。然而，通常需要将尽可能多的逻辑移到UI层之外。这样做可能是为了提高逻辑的可测试性，使UI层尽可能薄和“呈现”，或者改进代码重用和共享。

从某种意义上说，thunk是一个漏洞，您可以提前编写需要与 `Redux` 存储交互的任何代码，而无需知道将使用哪个 `Redux` 存储。这可以防止逻辑绑定到任何特定的 `Redux` 存储实例，并保持其可重用性。

## 使用场景

由于 thunks 是一种通用工具，可包含任意逻辑，因此可用于多种用途。最常见的用例是：

- 将复杂逻辑移出组件
- 发出异步请求或其他异步逻辑
- 编写需要在一行或一段时间内分派多个操作的逻辑
- 编写需要访问getState才能做出决策或在操作中包含其他状态值的逻辑

Thunk是“一次性”功能，没有生命周期的意义。他们也看不到其他已调度的操作。因此，它们通常不应用于初始化WebSocket之类的持久连接，也不能用于响应其他操作。

**Thunks最适合用于复杂的同步逻辑，以及简单到中等的异步逻辑，如发出标准AJAX请求并根据请求结果分派操作。**
## 用法

Redux Toolkit

如果您按照建议使用我们的官方Redux Toolkit包，则无需安装-RTK的configureStore API已默认添加thunk中间件：
```js
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})

// The thunk middleware was automatically added
```

自定义

```bash
yarn add redux-thunk
```

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))
```

## 中间件如何工作？

首先，让我们回顾一下Redux中间件通常是如何工作的。

Redux中间件都编写为一系列3个嵌套函数：
- 外部函数接收带有{dispatch，getState}的“storeapi”对象
- 中间函数接收链中的下一个中间件（或实际的store.dispatch方法）
- 内部函数将在每个操作通过中间件链时被调用

需要注意的是，可以使用中间件将非操作对象的值传递到存储中。dispatch（），只要中间件拦截这些值并且不让它们到达还原器。

考虑到这一点，我们可以了解thunk中间件的细节。

`thunk` 中间件的实际实现非常短-只有大约10行。以下是代码：

```js
// 标准中间件定义, 3个嵌套函数
// 1) 接收 `{dispatch, getState}`
// 2) 接收 `next`
// 3) 接收 `action`
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    // 如果 `action` 是方法
    if (typeof action === 'function') {
      // 调用 `action`方法并传递`dispatch`、`getState`参数
      return action(dispatch, getState)
    }

    // 否则，这是正常的 `action`，继续发送
    return next(action)
  }
```

换言之：
- 如果将函数传递给 `dispatch`，`thunk` 中间件会发现它是一个函数而不是一个 `action` 对象，拦截它，并以 `（dispatch，getState）`作为参数调用该函数
- 如果它是一个普通操作对象（或其他任何对象），它将被转发到链中的下一个中间件

再次看下React中redux工作流程：

<div>
  <img src="https://gitee.com/sandlz/images/raw/master/uPic/react_redux.svg" alt="react-redux" />
</div>