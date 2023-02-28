# 应用

## 创建一个应用实例

每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例开始的：

```js
const app = Vue.createApp({
  /* 选项 */
});
```

该应用实例是用来在应用中注册“全局”组件的。我们会在后面的指南中详细讨论，简单的例子：

```js
const app = Vue.createApp({});
app.component("SearchInput", SearchInputComponent);
app.directive("focus", FocusDirective);
app.use(LocalePlugin);
```

应用实例暴露的大多数方法都会返回该同一实例，允许链式：

```js
Vue.createApp({})
  .component("SearchInput", SearchInputComponent)
  .directive("focus", FocusDirective)
  .use(LocalePlugin);
```

## 根组件

传递给 `createApp` 的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点。

一个应用需要被挂载到一个 `DOM` 元素中。例如，如果你想把一个 `Vue` 应用挂载到 `<div id="app"></div>`，应该传入 `#app`：

```js
const RootComponent = {
  /* 选项 */
};
const app = Vue.createApp(RootComponent);
const vm = app.mount("#app");
```

与大多数应用方法不同的是，mount 不返回应用本身。相反，它返回的是根组件实例。

每个组件将有自己的组件实例 vm。对于一些组件，如 TodoItem，在任何时候都可能有多个实例渲染。这个应用中的所有组件实例将共享同一个应用实例。

## 组件实例 property

在前面的指南中，我们认识了 `data property`。在 `data` 中定义的 `property` 是通过组件实例暴露的：

```js
const app = Vue.createApp({
  data() {
    return { count: 4 };
  },
});

const vm = app.mount("#app");

console.log(vm.count); // => 4
```

还有各种其他的组件选项，可以将用户定义的 `property` 添加到组件实例中，例如 `methods`，`props`，`computed`，`inject` 和 `setup`。我们将在后面的指南中深入讨论它们。组件实例的所有 `property`，无论如何定义，都可以在组件的模板中访问。

`Vue` 还通过组件实例暴露了一些内置 `property`，如 `$attrs` 和 `$emit`。这些 `property` 都有一个 `$` 前缀，以避免与用户定义的 `property` 名冲突。

## 生命周期

每个组件在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

比如 `created` 钩子可以用来在一个实例被创建之后执行代码：

```js
Vue.createApp({
  data() {
    return { count: 1 };
  },
  created() {
    // `this` 指向 vm 实例
    console.log("count is: " + this.count); // => "count is: 1"
  },
});
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 `mounted`、`updated` 和 `unmounted`。生命周期钩子的 `this` 上下文指向调用它的当前活动实例。

:::tip
不要在选项 `property` 或回调上使用箭头函数，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。
:::

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/lifecycle.svg" style="width=80%">
</div>
