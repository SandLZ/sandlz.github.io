# 生命周期

## 图示

### 16.3

<div>
    <img class="zoom-img" src="https://gitee.com/sandlz/images/raw/master/uPic/Pgj15w.png" />
</div>

### >= 16.4

<div>
    <img src="https://gitee.com/sandlz/images/raw/master/uPic/9VFpyw.png" />
</div>

## constructor()

**如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**

```js
constructor(props);
```

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，this.props 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

- 通过给 `this.state` 赋值对象来初始化内部 state。
- 为事件处理函数绑定实例

```js
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 `componentDidMount` 中

:::warning
注意

避免将 props 的值复制给 state！这是一个常见的错误：

```js
constructor(props) {
 super(props);
 // 不要这样做
 this.state = { color: props.color };
}
```

如此做毫无必要（你可以直接使用 `this.props.color`），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。

只有在你刻意忽略 prop 更新的情况下使用。此时，应将 prop 重命名为 initialColor 或 defaultColor。必要时，你可以修改它的 key，以强制“重置”其内部 state。
:::

## static getDerivedStateFromProps()

```js
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 `render` 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 `state`，如果返回 `null` 则不更新任何内容。

## shouldComponentUpdate()

```js
shouldComponentUpdate(nextProps, nextState);
```

根据 `shouldComponentUpdate()` 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。

当 props 或 state 发生变化时，`shouldComponentUpdate()` 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。

此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 `PureComponent` 组件，而不是手动编写 `shouldComponentUpdate()`。`PureComponent` 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。

如果你一定要手动编写此函数，可以将 `this.props` 与 `nextProps` 以及 `this.state` 与 `nextState` 进行比较，并返回 `false` 以告知 React 可以跳过更新。请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。

我们不建议在 `shouldComponentUpdate()` 中进行深层比较或使用 `JSON.stringify()`。这样非常影响效率，且会损害性能。

目前，如果 shouldComponentUpdate() 返回 false，则不会调用 UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()。后续版本，React 可能会将 shouldComponentUpdate 视为提示而不是严格的指令，并且，当返回 false 时，仍可能导致组件重新渲染。

## getSnapshotBeforeUpdate()

```js
getSnapshotBeforeUpdate(prevProps, prevState);
```

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。

此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。

应返回 snapshot 的值（或 null）

## componentDidMount()

componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。**依赖于 DOM 节点的初始化**应该放在这里。**如需通过网络请求获取数据**，此处是实例化请求的好地方。

这个方法是比较**适合添加订阅**的地方。如果添加了订阅，请不要忘记在 `componentWillUnmount()` 里取消订阅

:::tip
你可以在 `componentDidMount()` 里直接调用 `setState()`。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理
:::

## componentDidUpdate()

```js
componentDidUpdate(prevProps, prevState, snapshot);
```

`componentDidUpdate()` 会在更新后会被立即调用。首次渲染不会执行此方法。

当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。

```js
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

如果组件实现了 `getSnapshotBeforeUpdate()` 生命周期（不常用），则它的返回值将作为 `componentDidUpdate()` 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined;

如果 `shouldComponentUpdate()` 返回值为 `false`，则不会调用 `componentDidUpdate()`

:::warning
你也可以在 `componentDidUpdate()` 中直接调用 `setState()`，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。
:::

## componentWillUnmount()

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。

componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。

## Error boundaries

Error boundaries 是 React 组件，它会在其子组件树中的任何位置捕获 JavaScript 错误，并记录这些错误，展示降级 UI 而不是崩溃的组件树。Error boundaries 组件会捕获在渲染期间，在生命周期方法以及其整个树的构造函数中发生的错误。

如果 class 组件定义了生命周期方法 static getDerivedStateFromError() 或 componentDidCatch() 中的任何一个（或两者），它就成为了 Error boundaries。通过生命周期更新 state 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。

仅使用 Error boundaries 组件来从意外异常中恢复的情况；**不要将它们用于流程控制**。

:::tip
Error boundaries 仅捕获组件树中以下组件中的错误。但它本身的错误无法捕获。
:::

### static getDerivedStateFromError()

```js
static getDerivedStateFromError(error)
```

此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级  UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

:::warning
`getDerivedStateFromError()` 会在渲染阶段调用，因此不允许出现副作用。 如遇此类情况，请改用 `componentDidCatch()`。
:::

### componentDidCatch()

```js
componentDidCatch(error, info)
```

此生命周期在后代组件抛出错误后被调用。 它接收两个参数：

- `error` —— 抛出的错误。
- `info` —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。

`componentDidCatch()` 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况：

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // "组件堆栈" 例子:
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

React 的开发和生产构建版本在 `componentDidCatch()` 的方式上有轻微差别。

在开发模式下，错误会冒泡至 window，这意味着任何 window.onerror 或 `window.addEventListener('error', callback)` 会中断这些已经被 componentDidCatch() 捕获的错误。

相反，在生产模式下，错误不会冒泡，这意味着任何根错误处理器只会接受那些没有显式地被 `componentDidCatch()` 捕获的错误。


:::tip
如果发生错误，你可以通过调用 setState 使用 `componentDidCatch()` 渲染降级 UI，但在未来的版本中将不推荐这样做。 可以使用静态 `getDerivedStateFromError()` 来处理降级渲染。
:::

## 其他API

### setState()

```js
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

### forceUpdate()

```js
component.forceUpdate(callback)
```

默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 `render()` 方法依赖于其他数据，则可以调用 `forceUpdate()` 强制让组件重新渲染。

调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法。如果标记发生变化，React 仍将只更新 DOM。

**通常你应该避免使用 forceUpdate()，尽量在 render() 中使用 this.props 和 this.state。**