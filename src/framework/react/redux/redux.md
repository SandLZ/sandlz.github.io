# redux

**工作流程**

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/redux.jpg" alt="redux" />
</div>

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/react_redux.svg" alt="react-redux" />
</div>

## 核心概念

### **Action**

**Action** 是把数据从应用 传到 `store` 的有效载荷。它是 `store` 数据的唯一来源。一般来说你会通过 `store.dispatch()` 将 `action` 传到 `store`。

示例：
```js
// actionType.js
const ADD_TODO = 'ADD_TODO'
```

```js
// action.js
const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}
```

#### 分发`Action`

- `store` 里能直接通过 `store.dispatch()` 调用 `dispatch()` 方法.
- `react-redux` 提供的 `connect()` 帮助器来调用。
- `bindActionCreators()` 可以自动把多个 `action` 创建函数 绑定到 `dispatch()` 方法上。

### **Reducer**

**Reducers** 指定了应用状态的变化如何响应 `actions` 并发送到 `store` 的，记住 `actions` 只是描述了有事情发生了这一事实，并没有描述应用如何更新 `state`。

#### 设计`State`结构

在 Redux 应用中，所有的 state 都被保存在一个单一对象中。建议在写代码前先想一下这个对象的结构。如何才能以最简的形式把应用的 state 用对象描述出来？

以 todo 应用为例，需要保存两种不同的数据：

当前选中的任务过滤条件；
完整的任务列表。
通常，这个 state 树还需要存放其它一些数据，以及一些 UI 相关的 state。这样做没问题，但尽量把这些数据与 UI 相关的 state 分开。

```json
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```

:::tip
处理 Reducer 关系时的注意事项
开发复杂的应用时，不可避免会有一些数据相互引用。建议你尽可能地把 state 范式化，不存在嵌套。

把所有数据放到一个对象里，每个数据以 ID 为主键，不同实体或列表间通过 ID 相互引用数据。把应用的 state 想像成数据库。这种方法在 normalizr 文档里有详细阐述。

例如，实际开发中，在 state 里同时存放 `todosById: { id -> todo } 和 todos: array<id>` 是比较好的方式，本文中为了保持示例简单没有这样处理。
:::

#### **Action** 处理

`reducer` 就是一个纯函数，接收旧的 `state` 和 `action`，返回新的 `state`。

```js
(previousState, action) => newState
```

:::warning
保持 reducer 纯净非常重要。**永远不要**在 reducer 里做这些操作：

- 修改传入参数，如`state`、`action`载荷
- 执行有**副作用**的操作，如 API 请求和路由跳转
- 调用非纯函数，如 `Date.now()` 或 `Math.random()`
:::


```js
// 1. 初始化state
// 2. 处理默认情况
// 3. 充分利用ES6+语法
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
          {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state,
      ];
    default:
      return state;
  }
};

```

#### 合成`Reducer`

```js
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
```

`combineReducers()` 所做的只是生成一个函数，这个函数来调用你的一系列 `reducer`，每个 `reducer` 根据它们的 `key` 来筛选出 `state` 中的一部分数据并处理，然后这个生成的函数再将所有 `reducer` 的结果合并成一个大的对象。没有任何魔法。正如其他 `reducers`，如果 `combineReducers()` 中包含的所有 `reducers` 都没有更改 `state`，那么也就不会创建一个新的对象。

### **Store**

**Store** 就是把 `Action` 和 `Reducer` 联系到一起的对象。

`Store` 有以下职责：

- 维持应用的 state；
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;
- 通过 subscribe(listener) 返回的函数注销监听器。

:::warning
再次强调一下 Redux 应用**只有一个单一的 store**。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
:::

```js
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)
```

`createStore()` 的第二个参数是可选的, 用于设置 state 初始状态。这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致, 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。

```js
let store = createStore(todoApp, window.STATE_FROM_SERVER)
```

## 三大原则

### 1. 单一数据源

整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
### 2. State 是只读的

唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
### 3. 使用纯函数来执行修改

为了描述 action 如何改变 state tree ，你需要编写 reducers。

## react-redux

> Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。

`react-redux` 允许你以 `state` 函数的形式来描述界面，`Redux` 通过 `action` 的形式来发起 `state` 变化。

`react-redux` 绑定库是基于 **容器组件** 和 **展示组件** 相分离 的开发思想.

|                | 展示组件                   | 容器组件                           |
| -------------: | :------------------------- | :--------------------------------- |
|           作用 | 描述如何展现（骨架、样式） | 描述如何运行（数据获取、状态更新） |
| 直接使用 Redux | 否                         | 是                                 |
|       数据来源 | props                      | 监听 Redux state                   |
|       数据修改 | 从 props 调用回调函数      | 向 Redux 派发 actions              |
|       调用方式 | 手动                       | 通常由 React Redux 生成            |

**容器组件** 用于接管 “状态”，**展示组件** 用于渲染界面，其中 “展示组件” 也是 React 诞生的初心，专注于高效的编写用户界面。

### 展示组件

React 引入 redux 后，应用中只有单一的 state 树，react 的每个组件都可以抛弃 state 的相关逻辑，改为从 props 获取，包括要执行的一些用户事件行为。

```js
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
```

### 容器组件

容器组件实现了将展示组件和 redux 关联在一起。
技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。

```js
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

// 简写方式 省略return
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// 简写方式 省略return
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

### mapStateToProps 函数

```js
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
   {
      a: state.xx,
      b: state.yy
  }
})
```

传入的 state 是应用中唯一的状态树，我们从相应组件的 reducer 中读取 state，分别映射到一个自定义属性中，这样就可以在展示组件中直接调用对应属性（props）了。
`mapStateToProps`会订阅 Store，每当 state 更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。

### mapDispatchToProps 函数

```js
const mapDispatchToProps = (dispatch, ownProps) => ({
  someFunc: (params) => dispatch(someAction(params))
})
```

比如我们想dispatch一个`toggleTodo`的action，通过这个方法映射之后，就可以直接这样写：

```js
// TodoList展示組件
// toggleTodo是方法名
this.props.toggleTodo(id)
```

### connect 函数

上面2个方法实现了 `state` 和 `action` 到props的映射，我们还需要把这2个函数连接在一起，并且要关联到一个具体的展示组件，这样就可以在展示组件中使用这种映射关系了。示例代码如下：

```js
const VisibilityTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

### Provide(传入`store`)

`react-redux`提供一个叫provider的组件，他可以让所有组件都可以访问到store（他的实现原理实际上是利用了react的context功能），而不必显示的一层层传递了。

```js
ReactDOM.render(
    <Provider store={store}>
        <Container></Container>
    </Provider>,
    $(".main-wrap")[0]
);
```

## 高级

### 异步 `Action`

当调用异步 API 时，有两个非常关键的时刻：发起请求的时刻，和接收到响应的时刻（也可能是超时）。

这两个时刻都可能会更改应用的 `state`；为此，你需要 `dispatch` 普通的同步 `action`。一般情况下，每个 API 请求都需要 `dispatch` 至少三种 `action`：

- **一种通知 reducer 请求开始的 action**

对于这种 action，reducer 可能会切换一下 state 中的 isFetching 标记。以此来告诉 UI 来显示加载界面。

- **一种通知 reducer 请求成功的 action**

对于这种 action，reducer 可能会把接收到的新数据合并到 state 中，并重置 isFetching。UI 则会隐藏加载界面，并显示接收到的数据。

- **一种通知 reducer 请求失败的 action**

对于这种 action，reducer 可能会重置 isFetching。另外，有些 reducer 会保存这些失败信息，并在 UI 里显示出来。

#### 异步 action 创建函数

我们有了异步操作，比如我们会先执行一个ajax调用之后再去更改状态的话，这个异步动作，没有地方放了, 考虑以下几点：

1. 不能把异步动作放到组件中，因为UI组件只负责使用数据，如果有其他的异步代码，让UI组件组件不纯粹
2. 理论上来说放到 `actionCreator` 的方法中最合适，但是,因为 `actionCreator` 目前只是专注于创建 `action` 和返回 `action`，无法放入异步操作

所以，我们需要用到 `redux` 的中间件工具：**`redux-thunk`**、`redux-promise`、`redux-saga`…

引入 `redux-thunk`

当 action 创建函数返回函数时，这个函数会被 `Redux Thunk middleware` 执行。这个函数并不需要保持纯净；它还可以带有副作用，包括执行异步 API 请求。这个函数还可以 dispatch action，就像 dispatch 前面定义的同步 action 一样。

```js
// someAction.js
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    dispatch(requestPosts(subreddit))

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(
        response => response.json(),
        // 不要使用 catch，因为会捕获
        // 在 dispatch 和渲染中出现的任何错误，
        // 导致 'Unexpected batch number' 错误。
        // https://github.com/facebook/react/issues/6895
         error => console.log('An error occurred.', error)
      )
      .then(json =>
        // 可以多次 dispatch！
        // 这里，使用 API 请求结果来更新应用的 state。

        dispatch(receivePosts(subreddit, json))
      )
  }
}
```



### 异步 数据流

### Middleware

> 如果你使用过 `Express` 或者 `Koa` 等服务端框架, 那么应该对 `middleware` 的概念不会陌生。 在这类框架中，`middleware` 是指可以被嵌入在框架接收请求到产生响应过程之中的代码。例如，`Express` 或者 `Koa` 的 `middleware` 可以完成添加 `CORS headers`、记录日志、内容压缩等工作。

`middleware` 最优秀的特性就是可以被链式组合。你可以在一个项目中使用多个独立的第三方 `middleware`。

常用中间件：

- [redux-thunk](./redux-thunk)
- [redux-persist](./redux-persist)
- [redux-logger](./redux-logger)
