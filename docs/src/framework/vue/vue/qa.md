# QA

> Vue 常见问题汇总

## `v-if`、`v-show` 区别

::: details 答案
- `v-if` 如果条件不成立不会渲染当前指令所在节点的DOM元素
- `v-show` 只是切换当前DOM的显示与隐藏(`dispaly:none`)
:::

## `v-for` 与 `v-if` 为什么不能一起使用

::: details 答案
`v-for` 具有更高的优先级，连用的话会把 v-if 的每个元素都添加一下，造成性能问题。
:::

## `computed` 、`watch` 、`method` 作用及使用场景

::: details 答案
- `computed` 本质也是一个`watcher`,具备缓存，只有当依赖的数据变化时才会重新计算，否则使用缓存的数据
- `watch` 每次都需要执行函数。更适用于数据变化时的异步操作。
- `method` 只要把方法用到模板上了,每次一变化就会重新渲染视图，性能开销大
:::

## 父子组件通信

::: details 答案

通信
- **父 --> 子**
  参数传递：`props`
  方法调用：`$ref`

- **子 --> 父**
  参数传递：`$emit`
  方法调用：`$parent`

获取组件实例
- 依赖注入 父组件(provide),子组件(inject) (在开发高阶插件/组件库时推荐使用)
- $ref 获取组件实例
- Event-Bus 
- Vuex

``` js
// provide-inject 示例
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```
:::

