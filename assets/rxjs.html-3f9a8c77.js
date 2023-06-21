import{_ as e,p as r,q as t,a1 as l}from"./framework-201fec1f.js";const i={},s=l('<h1 id="rxjs" tabindex="-1"><a class="header-anchor" href="#rxjs" aria-hidden="true">#</a> RxJS</h1><blockquote><p>RxJS 是一个使用可观察序列编写异步和基于事件的程序的库。它提供了一种核心类型，即 Observable、一些周边类型（Observer、Scheduler、Subjects）和类似于 Array 方法（map、filter、reduce、every 等）的操作符，以便将异步事件作为集合进行处理。</p></blockquote><p>RxJS 中解决异步事件管理的基本概念有：</p><ul><li><p>Observable（可观察者）：表示未来（future）值或事件的可调用集合的概念。</p></li><li><p>Observer（观察者）：是一个回调集合，它知道如何监听 Observable 传来的值。</p></li><li><p>Subscription（订阅）：表示 Observable 的一次执行，主要用于取消执行。</p></li><li><p>Operator（操作符）：是纯函数，可以使用 map、filter、concat、reduce 等操作来以函数式编程风格处理集合。</p></li><li><p>Subject（主体）：相当于一个 EventEmitter，也是将一个值或事件多播到多个 Observers 的唯一方式。</p></li><li><p>Scheduler（调度器）：是控制并发的集中化调度器，允许我们在计算发生时进行协调，例如 setTimeout 或 requestAnimationFrame 或其它。</p></li></ul>',4),a=[s];function c(o,p){return r(),t("div",null,a)}const u=e(i,[["render",c],["__file","rxjs.html.vue"]]);export{u as default};