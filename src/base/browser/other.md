# 其他

## 路由

- `history`
- `hash`

### `history`

API 简介：

- `window.history.length` 当前会话浏览过的页面数量
- `window.history.go(?delta)` 根据参数在历史记录中移动
- `window.history.back()` 上一页 等于 `window.history.go(-1)`
- `window.history.forward()` 下一页 等于 `window.history.go(1)`
- `window.history.pushState(data, title, ?url)` 添加一条浏览记录
- `window.history.replaceState(data, title, ?url)` 修改一条浏览记录

HTML5 的 History API 为浏览器的全局 history 对象增加了该扩展方法。它是一个浏览器的一个接口，在 window 对象中提供了 onpopstate 事件来监听历史栈的改变，只要历史栈有信息发生改变的话，就会触发该事件。提供了如下事件：

```js
window.addEventListener("popstate", function(e) {
  console.log(e);
});
```

调用 `go` `back` `forward` `pushState` `replaceState` 均会触发上面的事件，并且浏览器的 url 地址也会跟着改变。只会改变 url 地址，且不会重新刷新页面。

### `hash`

`hash`路由模式是这样的：`http://xxx.abc.com/#/xx`。 有带`#`号，后面就是`hash`值的变化。改变后面的`hash`值，它不会向服务器发出请求，因此也就不会刷新页面。并且每次`hash`值发生改变的时候，会触发`hashchange`事件。因此我们可以通过监听该事件，来知道`hash`值发生了哪些变化。比如我们可以如下简单的监听：

```js
window.addEventListener('hashchange', (e) {
  // location.hash
});
```

改变`hash`不会触发页面跳转，因为`hash`链接是当前页面中的某个片段，所以如果`hash`有变化，那么页面将会滚动到`hash`所连接的位置。但是页面中如果不存在`hash`对应的片段，则没有任何效果。比如 `a`链接。这和 `window.history.pushState`方法类似，都是不刷新页面的情况下更改`url`。

`hash`与`pushState`对比

1. `hash`只能修改`url`的片段标识符的部分。并且必须从`#`号开始，但是`pushState`且能修改路径、查询参数和片段标识符。`pushState`比`hash`更符合前端路由的访问方式，更加优雅(因为不带#号)。

2. `hash`必须和原先的值不同，才能新增会话浏览历史的记录，但是`pushState`可以新增相同的`url`的记录

不管我们是通过`location`接口直接改变`hash`值，还是我们通过`history`直接前进或后退操作(改变`hash`变化)，我们都可以看到都能通过 `hashchange`该事件进行监听到`url hash`的改变。并且不会刷新页面。


