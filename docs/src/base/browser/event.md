# 事件传播

[[toc]]

JS 与 HTML 的交互是用事件实现的。事件流描述了页面接收事件的顺序。

<div>
  <img src="https://gitee.com/sandlz/images/raw/master/uPic/o2kxpY.png" >
</div>

`DOM2 Events` 规范规定事件流分为 3 个阶段: 事件捕获、到达目标 和 事件冒泡。

事件捕获最先发生，为提前拦截事件提供了可能。然后，实际的目标元素接收到事件。

最后一个阶段是冒泡，最迟要在这个阶段响应事件。

所有现在浏览器都支持 DOM 事件流，只有 IE8 以及更早的浏览器不支持。

## 事件处理程序

### `DOM0` 事件处理程序

在 JavaScript 中创建事件监听器的传统方式是把一个函数赋值给 DOM 元素。兼容性最好，所有的浏览器都支持此方法。

每个元素（包括 window 和 document）都有事件处理程序的属性（一般都 onxxxx），这个属性的值为一个函数。

```js
const btn = document.getElementById("myBtn");
btn.onclick = function() {
  console.log("Clicked");
};
```

这样使用 `DOM0` 事件处理是发生在程序赋值时注册在事件流的**冒泡阶段**的。

注意点：

1. 将事件处理程序属性设置为 `null`，即可移除通过 `DOM0` 方式添加的事件处理程序。

2. 如果有多个 `DOM0` 事件处理程序的话，后面的是会把前面的给覆盖掉。只有执行最后一个调用的结果。

### `DOM2` 事件处理程序

我们也可以通过在所有的 DOM 节点上通过 `addEventListener()` 和 `removeEventLinstener()` 来添加和移除事件处理程序。

`addEventListener()` 和 `removeEventLinstener()` 接收 3 个参数：事件名、事件处理函数 和 一个 option 对象或一个布尔值 `useCapture（true)`  表示在**捕获阶段**调用事件处理程序， `false （默认值）`表示在**冒泡阶段**调用事件处理程序.

因为跨浏览器兼容性好，所以事件处理程序默认会被添加到事件流的冒泡阶段（也就是默认最后一个参数为 false ））。

`addEventListener(type, listener, useCapture | options)`

`option` 参数有一下几个选择:

- `capture`: Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
- `once`: Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
- `passive`: Boolean，设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

`useCapture` 参数如下:

Boolean，在 DOM 树中，注册了 listener 的元素， 是否要先于它下面的 EventTarget，调用该 listener。 当 useCapture(设为 true) 时，沿着 DOM 树向上冒泡的事件，不会触发 listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 。

:::tip
`useCapture` 参数指定了该事件处理程序触发的“时机” ：是在事件流的捕获阶段还是冒泡阶段。但是，无论最后一个参数设置为什么，都不会阻碍事件流的传播。
:::

```js
btn.addEventListener(
  "click",
  (e) => {
    console.log("btn click capture ");
  },
  true
);

btn.addEventListener("click", (e) => {
  console.log("btn click bubble ");
});

body.addEventListener(
  "click",
  (e) => {
    console.log("body click capture");
  },
  true
);

body.addEventListener("click", (e) => {
  console.log("body click bubble");
});

// body click capture
// btn click capture
// btn click bubble
// body click bubble
```

`useCapture`（ option 中的 capture 也是一样）只是**控制该事件处理程序是添加在事件流的捕获阶段还是冒泡阶段，对事件的传播是没有影响的！**

`DOM2` 事件处理程序的一个优点是可以给一个元素添加多个事件处理程序，并按添加的顺序触发。
使用 `addEventListener()` 添加的事件处理程序只能使用 `removeEventLinstener()`移除（三个参数均一致才可以）；所以，使用匿名函数添加的事件处理程序是不能被移除的。

## DOM事件对象 event

在 DOM 中发生事件时，所有的相关信息都会被收集在一个名为 `event` 的对象中。这个对象包含了一些基本信息：触发事件的元素、事件的类型、以及一些与特定事件相关的其他数据（比如和鼠标事件相关的鼠标的位置信息）所有的浏览器都是支持这个 `event` 对象的。

```js
btn.onclick = function(event){
  console.log(event.type)     // click
}
```

在事件处理函数的内部，`this` 对象始终等于 `currentTarget` (因为 this 是指向调用的对象的)。

`target` 是事件触发的实际目标。（事件冒泡阶段可能出现 `target` 和 `currentTarget` 不相等的情况。

```js
var div = document.querySelector('#div');
  div.addEventListener('click', function(e){
    console.log('div click', e.currentTarget === this);    // true 
    console.log('div click', e.target === this);           // true
  })

  var body = document.querySelector('body');
  body.addEventListener('click', function(e){
    console.log('body click', e.currentTarget === this);   // true
    console.log('body click', e.target === this);          // false
  })
```

### `preventDefault()`

`preventDefault()` 方法用于阻止事件的默认行为（比如，a 标签有跳转到 href 链接的默认行为，使用 preventDefault() 可以阻止这种导航行为）

**`preventDefault()`阻止的必需是可 `cancelable` 的元素 **

### `stopPropagation()`

`stopPropagation()` 方法用于立即阻止事件流在 DOM 中的传播，取消后续的事件捕获或冒泡。比如

```js
var div = document.querySelector('#div');

div.addEventListener("click", (e) => {
  console.log("clicked");
  e.stopPropagation()
}, false);

document.body.addEventListener("click", () => {
  console.log("body clicked");
}, false);

// clicked 
```

如果不调用 `stopPropagation()` 那么点击 div 会有两个 log 记录。如果加上的话，click 事件就不会传播到 body 上，只会有一个 log 记录（ clicked ）。
但是需要注意的是，不是所有的事件都会冒泡！比如某些 `scroll` 事件就是不会冒泡的。

