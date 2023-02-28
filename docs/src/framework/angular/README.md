# Angular

## 脏检测

### 脏检测的范围

angular 会对所有绑定到 UI 上的表达式做脏检查。其实，在 angular 实现内部，所有绑定表达式都被转换为 `$scope.$watch()`。每个 `$watch` 记录了上一次表达式的值。有 `ng-bind="a"` 即有 `$scope.$watch('a', callback)`，而 `$scope.$watch` 可不会管被 watch的表达式是否跟触发脏检查的事件有关.

### 监控对象属性：`$watch`和 `$digest`

`$watch` 和 `$digest` 是相辅相成的。两者一起，构成了Angular作用域的核心：**数据变化的响应**。

### angular 的数据绑定采用什么机制？详述原理

脏检查机制

**双向数据绑定**是 AngularJS 的核心机制之一。当 view 中有任何数据变化时，会更新到 model ，当 model 中数据有变化时，view 也会同步更新，显然，这需要一个监控。

原理就是，Angular 在 scope 模型上设置了一个监听队列，用来监听数据变化并更新 view 。每次绑定一个东西到 view 上时 AngularJS 就会往 $watch 队列里插入一条 `$watch` ，用来检测它监视的 model 里是否有变化的东西。当浏览器接收到可以被 `angular context` 处理的事件时， `$digest` 循环就会触发，遍历所有的 `$watch` ，最后更新 dom。

