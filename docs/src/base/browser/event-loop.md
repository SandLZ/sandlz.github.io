# 事件循环

[[toc]]

## 进程与线程

### 进程

我们都知道，`CPU`是计算机的核心，承担所有的计算任务

官网说法，`进程`是`CPU`资源分配的最小单位

字面意思就是进行中的程序，我将它理解为一个可以独立运行且拥有自己的资源空间的任务程序

`进程`包括运行中的程序和程序所使用到的内存和系统资源

CPU 可以有很多进程，我们的电脑每打开一个软件就会产生一个或多个`进程`，为什么电脑运行的软件多就会卡，是因为`CPU`给每个`进程`分配资源空间，但是一个`CPU`一共就那么多资源，分出去越多，越卡，每个`进程`之间是相互独立的，`CPU`在运行一个`进程`时，其他的进程处于非运行状态，`CPU`使用 [时间片轮转调度算法](https://link.juejin.cn?target=undefined) 来实现同时运行多个`进程`

### 线程

`线程`是`CPU`调度的最小单位

线程`是建立在`进程`的基础上的一次程序运行单位，通俗点解释`线程`就是程序中的一个执行流，一个`进程`可以有多个`线程

一个`进程`中只有一个执行流称作`单线程`，即程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行

一个`进程`中有多个执行流称作`多线程`，即在一个程序中可以同时运行多个不同的`线程`来执行不同的任务， 也就是说允许单个程序创建多个并行执行的`线程`来完成各自的任务

### 进程和线程的区别

进程是操作系统分配资源的最小单位，线程是程序执行的最小单位

一个进程由一个或多个线程组成，线程可以理解为是一个进程中代码的不同执行路线

进程之间相互独立，但同一进程下的各个线程间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)

调度和切换：线程上下文切换比进程上下文切换要快得多

### 多进程和多线程

多进程：多进程指的是在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态。多进程带来的好处是明显的，比如大家可以在网易云听歌的同时打开编辑器敲代码，编辑器和网易云的进程之间不会相互干扰

多线程：多线程是指程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，也就是说允许单个程序创建多个并行执行的线程来完成各自的任务

## JS 为什么是单线程的？

JS 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

## 浏览器

览器是多进程的，拿`Chrome`来说，我们每打开一个 Tab 页就会产生一个进程

### 浏览器进程

- Browser 进程

  - 浏览器的主进程(负责协调、主控)，该进程只有一个

  - 负责浏览器界面显示，与用户交互。如前进，后退等

  - 负责各个页面的管理，创建和销毁其他进程

  - 将渲染(Renderer)进程得到的内存中的 Bitmap(位图)，绘制到用户界面上

  - 网络资源的管理，下载等

- 第三方插件进程

  - 每种类型的插件对应一个进程，当使用该插件时才创建

- GPU 进程

  - 该进程也只有一个，用于 3D 绘制等等

- 渲染进程(重)

  - 即通常所说的浏览器内核(Renderer 进程，内部是多线程)

  - 每个 Tab 页面都有一个渲染进程，互不影响

  - 主要作用为页面渲染，脚本执行，事件处理等

### 渲染进程`Rendering process`的主要线程

- `GUI`渲染线程

  - 绘制页面，解析 HTML、CSS，构建 DOM 树等
  - 页面的重绘和重排
  - 与 JS 引擎互斥(JS 引擎阻塞页面刷新)
    - 当 JS 引擎执行时 GUI 线程会被挂起
    - GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行
- `JS`引擎线程
- js 脚本代码执行
  - 负责执行准备好的事件，例如定时器计时结束或异步请求成功且正确返回
- 与 GUI 渲染线程互斥

  - 浏览器渲染的时候遇到`<script>`标签，就会停止 GUI 的渲染，然后 js 引擎线程开始工作，执行里面的 js 代码，等 js 执行完毕，js 引擎线程停止工作，GUI 继续渲染下面的内容
- 事件触发线程

  - 当对应的事件满足触发条件，将事件添加到 js 的任务队列末尾

  - 多个事件加入任务队列需要排队等待
- 定时器触发线程

  - 负责执行异步的定时器类事件：setTimeout、setInterval 等

  - 浏览器定时计时由该线程完成，计时完毕后将事件添加至任务队列队尾

  - W3C 在 HTML 标准中规定，规定要求`setTimeout`中低于 4ms 的时间间隔算为 4ms
- `HTTP`请求线程
  - 负责异步请求
  - 当监听到异步请求状态变更时，如果存在回调函数，该线程会将回调函数加入到任务队列队尾

## 堆(`Head`)、栈(`Stack`)、队列(`Queue`)

<div>
	<img src="https://github.com/sandlz/images/raw/master/uPic/event_loop_01.png">  
</div>



### 堆（`Head`）

堆， 是一种动态存储结构，是利用完全二叉树维护的一组数据，堆分为两种，一种为**最大堆**，一种为**最小堆**，将根节点最大的堆叫做**最大堆**或**大根堆**，根节点最小的堆叫做**最小堆**或**小根堆**。 堆是**线性数据结构**，相当于**一维数组**，有唯一后继。

### 栈（`Stack`）

栈，是遵循**后进先出** (`LIFO`) 原则的有序集合，新添加或待删除的元素都保存在同一端，称为栈顶，另一端叫做栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。栈在编程语言的编译器和内存中存储基本数据类型和对象的指针、方法调用等.

### 队列（`Queue`）

队列特殊之处在于它只允许在表的前端（`front`）进行删除操作，而在表的后端（`rear`）进行插入操作，和栈一样，队列是一种操作受限制的线性表。 进行插入操作的端称为队尾，进行删除操作的端称为队头。  队列中没有元素时，称为**空队列**。

队列的数据元素又称为队列元素。在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为**先进先出**（`FIFO: first-in-first-out`）

### JavaScript 中的内存分为 `堆内存` 和 `栈内存`

- 引用类型：用类型值的大小是不固定的，因此它们会被存储到 `堆内存` 中，由系统自动分配存储空间。JavaScript 不允许直接访问堆内存中的位置，因此我们不能直接操作对象的堆内存空间，而是操作 `对象的引用`。
- 基本类型：有固定的大小，因此它们被存储到 `栈内存` 中。我们可以直接操作保存在栈内存空间的值，因此基础数据类型都是 `按值访问`。此外，栈内存还会存储 **对象的引用的指针** 以及 **函数执行时的运行空间**。

### 执行栈（EC Stack）

当我们调用一个方法的时候，JavaScript 会生成一个与这个方法对应的执行环境，又叫执行上下文(context)。这个执行环境中保存着该方法的私有作用域、上层作用域(作用域链)、方法的参数，以及这个作用域中定义的变量和 this 的指向，而当一系列方法被依次调用的时候。由于 JavaScript 是单线程的，这些方法就会按顺序被排列在一个单独的地方，这个地方就是所谓执行栈。

## 浏览器事件循环(`Event Loop`)

`JS` 分为**同步任务**和**异步任务**

### 同步任务

在主线程(这里的主线程就是JS引擎线程)上执行，会形成一个`执行栈`

### 异步任务

主线程之外，事件触发线程管理着一个`任务队列`，只要异步任务有了运行结果，就在`任务队列`之中放一个事件回调

一旦`执行栈`中的所有同步任务执行完毕(也就是JS引擎线程空闲了)，系统就会读取`任务队列`，将可运行的异步任务(任务队列中的事件回调，只要任务队列中有事件回调，就说明可以执行)添加到执行栈中，开始执行

异步任务的执行，是有一个优先级的顺序的，包括了 宏任务（`macrotasks`） 和 微任务(`microtasks`)

### 宏任务

在ECMAScript中，`macrotask`也被称为`task`

`macrotask`，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。

消息队列中的等待被主线程执行的事件，`macrotask`执行时都会重新创建栈，然后调用 `macrotask` 中的函数，栈也会随着变化，`macrotask` 执行结束时，栈也会随之销毁。

浏览器为了能够使得 JS 内部 `macrotask` 与 DOM 任务能够有序的执行，会在一个 `macrotask` 执行结束后，在下一个 `macrotask` 执行开始前，对页面进行重新渲染，流程如下：

```
(macro)task->GUI渲染->(macro)task->...
```

宏任务包含：

```
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate
requestAnimationFrame
```

### 微任务

在ECMAScript中，`microtask`也被称为`jobs`

`microtask`, 可以理解是在当前 task 执行结束后立即执行的任务，可以把 microtask 看成是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。 微任务是基于消息队列、事件循环、UI 主线程还有堆栈而来的

所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染。也就是说，在某一个 `macrotask` 执行完后，就会将在它执行期间产生的所有 `microtask` 都执行完毕（在渲染前）

```
宏任务 -> 微任务 -> GUI渲染 -> 宏任务 -> ...
```

微任务包含：

```
process.nextTick(Node.js 环境, 比 Promise.then 执行的快)
Promise.then
catch
finally
Object.observe
MutationObserver
```

### 执行顺序

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/Event Loop.drawio.png">
</div>

执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行 Task（宏任务），否则就一次性执行完所有微任务。

每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为 null，然后再执行宏任务，如此循环。

:::tip

- 宏任务与微任务**不在一个任务队列**
- 浏览器会先执行一个宏任务，紧接着执行当前执行栈产生的微任务，再进行渲染，然后再执行下一个宏任务

:::

### async/await

`async/await` 本质上还是基于 `Promise` 的一些封装，而 `Promise` 是属于微任务的一种

所以在使用 `await` 关键字与 `Promise.then` 效果类似

```js
setTimeout(() => console.log(4))

async function test() {
  console.log(1)
  await Promise.resolve()
  console.log(3)
}

test()

console.log(2)
```

:::details 查看结果
1 2 3 4

可以理解为，`await` 以前的代码，相当于与 `new Promise` 的同步代码，`await` 以后的代码相当于 `Promise.then`的异步
:::
## 示例 

### 例 1：

代码从上到下执行，会先执行同步的代码，再执行微任务，等待宏任务有没有到时间，时间到了的宏任务放到宏任务队列，微任务执行完毕后，会从宏任务队列中取出一个宏任务去放到当前的浏览器的执行环境中执行，当前执行环境都执行完毕后，会先去清空微任务

思考以下代码输出：

```js
// 位置 1
setTimeout(function() {
  console.log("timeout1");
}, 1000);
// 位置 2
console.log("start");
// 位置 3
Promise.resolve().then(function() {
  // 位置 5
  console.log("promise1");
  // 位置 6
  Promise.resolve().then(function() {
    console.log("promise2");
  });
  // 位置 7
  setTimeout(function() {
    // 位置 8
    Promise.resolve().then(function() {
      console.log("promise3");
    });
    // 位置 9
    console.log("timeout2");
  }, 0);
});
// 位置 4
console.log("done");
```

:::details 查看结果
start<br>
done<br>
promise1<br>
promise2<br>
timeout2<br>
promise3<br>
timeout1
:::

### 例 2：

```js
const p1 = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    let p2 = new Promise((resolve, reject) => {
      console.log(2);

      const timeOut1 = setTimeout(() => {
        console.log(3);
        resolve(4);
      }, 0);

      resolve(5);
    });

    resolve(6);

    p2.then((arg) => {
      console.log(arg);
    });
  });
const timeOut2 = setTimeout(() => {
  console.log(8);
  const p3 = new Promise((reject) => {
    reject(9);
  }).then((res) => {
    console.log(res);
  });
}, 0);

p1().then((arg) => {
  console.log(arg);
});
console.log(10);
```

:::details 查看结果
1<br>
2<br>
10<br>
5<br>
6<br>
8<br>
9<br>
3
:::

#### 解析

1. `timeout2` 放入异步队列
2. 执行`p1()`
3. `Promise`立即执行: 打印 `1`
4. `p2`立即执行， 打印 `2`
5. `timeout1` 放入异步队列
6. `resolve(5)` （属于`p2`）放入异步队列
7. `resolve(6)` （属于`p1`）放入异步队列
8. 打印 `10`
9. 宏任务执行完毕，取异步任务，此时任务队列中包含 [ `timeout2`, `timeout1`, `p2.then` , `p1.then` ], 优先执行微任务[ `p2.then`, `p1.then` ], 打印 `5`， `6`
10. 微任务执行完毕，执行宏任务，[ `timeout2`, `timeout1`], 打印 `8`, 立即执行`Promise`， `p3.then`加入队列, 执行宏任务过程中加入微任务， 打印 `9`;
11. 执行 `timeout1`, 打印 `3`
12. `p2`状态已确定， 不会在打印 `4`

### 例3：

```js
new Promise((resolve) => {
	console.log(1)
  resolve()
}).then(()=>{
	console.log(2)
})
console.log(3)
```

:::details 查看结果
1 3 2
:::

## Node 事件循环

`Node` 中的 `Event Loop` 和浏览器中的是完全不相同的东西。`Node.js` 采用 `V8` 作为 `js` 的解析引擎，而 `I/O` 处理方面使用了自己设计的 `libuv`，`libuv` 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的 `API` ，事件循环机制也是它里面的实现。

`Node.js` 的运行机制如下:

- `V8` 引擎解析 `JavaScript` 脚本
- 解析后的代码，调用 `Node API`
- `libuv` 库负责 `Node API` 的执行。它将不同的任务分配给不同的线程，形成一个 `Event Loop`（事件循环），以异步的方式将任务的执行结果返回给 `V8` 引擎
- `V8` 引擎再将结果返回给用户

其中 `libuv` 引擎中的事件循环分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段

<div>
	<img src="https://github.com/sandlz/images/raw/master/uPic/t7DpWc.png">  
</div>

node 中的事件循环的顺序：

- 外部输入数据 –>
- 轮询阶段(`poll`) –>
- 检查阶段(`check`) –>
- 关闭事件回调阶段(`close callback`) –>
- 定时器检测阶段(`timer`) –>
- `I/O` 事件回调阶段(I/O callbacks) –>
- 闲置阶段(`idle`, `prepare`) –>
- 轮询阶段（按照该顺序反复运行）->

```js
console.log("start");
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function() {
    console.log("promise2");
  });
}, 0);
Promise.resolve().then(function() {
  console.log("promise3");
});
console.log("end");
```

:::details
start=>end=>promise3=>timer1=>timer2=>promise1=>promise2
:::

- 执行栈的同步任务（这属于宏任务）执行完毕后（依次打印出 `start` `end`，并将 2 个 `timer` 依次放入 `timer` 队列）,会先去执行微任务（这点跟浏览器端的一样），所以打印出 `promise3`
- 进入 `timers` 阶段，执行 `timer1` 的回调函数，打印 `timer1`，并将 `promise.then` 回调放入 `microtask` 队列，同样的步骤执行 `timer2`，打印 `timer2`；这点跟浏览器端相差比较大，`timers` 阶段有几个 `setTimeout/setInterval` 都会依次执行，并不像浏览器端，每执行一个宏任务后就去执行一个微任务

### `process.nextTick`

这个函数其实是独立于 `Event Loop` 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 `nextTick` 队列，就会清空队列中的所有回调函数，并且优先于其他 `microtask` 执行。

```js
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);
process.nextTick(() => {
  console.log("nextTick");
  process.nextTick(() => {
    console.log("nextTick");
    process.nextTick(() => {
      console.log("nextTick");
      process.nextTick(() => {
        console.log("nextTick");
      });
    });
  });
});

// nextTick=>nextTick=>nextTick=>nextTick=>timer1=>promise1
```

## 差异

```js
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function() {
    console.log("promise2");
  });
}, 0);
```

:::details 浏览器执行结果
timer1
promise1
timer2
promise2
:::

:::details Node 执行结果
timer1
timer2
promise1
promise2
:::

Node 结果说明：

- 全局脚本（main()）执行，将 2 个 `timer` 依次放入 `timer` 队列，`main()`执行完毕，调用栈空闲，任务队列开始执行；
- 首先进入 `timers` 阶段，执行 `timer1` 的回调函数，打印 `timer1`，并将 `promise1.then` 回调放入 `microtask` 队列，同样的步骤执行 `timer2`，打印 `timer2`；
- 至此，`timer` 阶段执行结束，`event loop` 进入下一个阶段之前，执行 `microtask` 队列的所有任务，依次打印 `promise1`、`promise2`

## 参考

- [事件循环](https://zhuanlan.zhihu.com/p/54882306)
- [谈谈对 EventLoop 的理解](https://juejin.cn/post/6868849475008331783)
