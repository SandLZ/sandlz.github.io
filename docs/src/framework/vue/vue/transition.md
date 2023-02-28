# 过渡 & 动画

[[toc]]

Vue 提供了一些抽象概念，可以帮助处理过渡和动画，特别是在响应某些变化时。这些抽象的概念包括：

在 CSS 和 JS 中，使用内置的 `<transition>` 组件来钩住组件中进入和离开 DOM。
过渡模式，以便你在过渡期间编排顺序。
在处理多个元素位置更新时，使用 `<transition-group>` 组件，通过 FLIP 技术来提高性能。
使用 watchers 来处理应用中不同状态的过渡。
我们将在本指南接下来的三个部分中介绍所有这些以及更多内容。然而，除了提供这些有用的 API 之外，值得一提的是，我们前面介绍的 class 和 style 声明也可以应用于动画和过渡，用于更简单的用例。

在下一节中，我们将回顾一些 web 动画和过渡的基础知识，并提供一些资源链接以进行进一步的研究。如果你已经熟悉 web 动画，并且了解这些原理如何与 Vue 的某些指令配合使用，可以跳过这一节。对于希望在开始学习之前进一步了解网络动画基础知识的其他人，请继续阅读。

## 基于 class 的动画和过渡

尽管 `<transition>` 组件对于组件的进入和离开非常有用，但你也可以通过添加一个条件 class 来激活动画，而无需挂载组件。

```html
<div id="demo">
  Push this button to do something you shouldn't be doing:<br />

  <div :class="{ shake: noActivated }">
    <button @click="noActivated = true">Click me</button>
    <span v-if="noActivated">Oh no!</span>
  </div>
</div>
```

## 过渡与 Style 绑定

一些过渡效果可以通过插值的方式来实现，例如在发生交互时将样式绑定到元素上。以这个例子为例：

```html
<div id="demo">
  <div
    @mousemove="xCoordinate"
    :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
    class="movearea"
  >
    <h3>Move your mouse across the screen...</h3>
    <p>x: {{x}}</p>
  </div>
</div>
```

## 性能

你可能注意到上面显示的动画使用了 transforms 之类的东西，并应用了诸如 perspective 之类的奇怪的 property——为什么它们是这样实现的，而不是仅仅使用 margin 和 top 等？

我们可以通过对性能的了解，在 web 上创建极其流畅的动画。我们希望尽可能对元素动画进行硬件加速，并使用不触发重绘的 property。我们来介绍一下如何实现这个目标。

### Transform 和 Opacity

我们可以通过工具，例如 CSS Triggers 来查看哪些属性会在动画时触发重绘。在工具中，查看 transform 的相关内容，你将看到：

非常好的是，更改 transform 不会触发任何几何形状变化或绘制。这意味着该操作可能是由合成器线程在 GPU 的帮助下执行。

opacity 属性的行为也类似。因此，他们是在 web 上做元素移动的理想选择。

### 硬件加速

诸如 `perspective`、`backface-visibility` 和 `transform:translateZ(x)` 等 property 将让浏览器知道你需要硬件加速。

如果要对一个元素进行硬件加速，可以应用以下任何一个 property (并不是需要全部，任意一个就可以)：

```css
perspective: 1000px;
backface-visibility: hidden;
transform: translateZ(0);
```

许多像 GreenSock 这样的 JS 库都会默认你需要硬件加速，并在默认情况下应用，所以你不需要手动设置它们。

## 进入过渡 & 离开过渡

在插入、更新或从 DOM 中移除项时，Vue 提供了多种应用转换效果的方法。这包括以下工具：

- 自动为 CSS 过渡和动画应用 class；
- 集成第三方 CSS 动画库，例如 animate.css ；
- 在过渡钩子期间使用 JavaScript 直接操作 DOM；
- 集成第三方 JavaScript 动画库。

### 单元素/组件的过渡

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

这里是一个典型的例子：

```html
<div id="demo">
  <button @click="show = !show">
    Toggle
  </button>

  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
const Demo = {
  data() {
    return {
      show: true,
    };
  },
};

Vue.createApp(Demo).mount("#demo");
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

当插入或删除包含在 `transition` 组件中的元素时，Vue 将会做以下处理：

自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。

如果过渡组件提供了 JavaScript 钩子函数 ，这些钩子函数将在恰当的时机被调用。

如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 `nextTick` 概念不同)

### 过渡 class

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter-from`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3. `v-enter-to`：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。

4. `v-leave-from`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6. `v-leave-to`：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/动画完成之后移除。

<div>
  <img src="https://gitee.com/sandlz/images/raw/master/uPic/transitions.svg" style="width: 80%">
</div>

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 v- 是这些 class 名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter-from`会替换为 `my-transition-enter-from`。

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明。

### CSS 过渡

常用的过渡都是使用 CSS 过渡。

```html
<div id="demo">
  <button @click="show = !show">
    Toggle render
  </button>

  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
const Demo = {
  data() {
    return {
      show: true,
    };
  },
};

Vue.createApp(Demo).mount("#demo");
```

```css
/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
```

### CSS 动画

CSS 动画用法同 CSS 过渡，区别是在动画中 `v-enter-from` 类名在节点插入 DOM 后不会立即删除，而是在 `animationend` 事件触发时删除。

### 自定义过渡 class 类名

我们可以通过以下 attribute 来自定义过渡类名：

- enter-from-class
- enter-active-class
- enter-to-class
- leave-from-class
- leave-active-class
- leave-to-class
  他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css. 结合使用十分有用。

```html
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
  rel="stylesheet"
  type="text/css"
/>

<div id="demo">
  <button @click="show = !show">
    Toggle render
  </button>

  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="show">hello</p>
  </transition>
</div>
```

### 同时使用过渡和动画

Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 transitionend 或 animationend，这取决于给元素应用的 CSS 规则。如果你使用其中任何一种，Vue 能自动识别类型并设置监听。

但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 animation 很快的被触发并完成了，而 transition 效果还没结束。在这种情况中，你就需要使用 type attribute 并设置 animation 或 transition 来明确声明你需要 Vue 监听的类型。

### 显性的过渡持续时间

在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 transitionend 或 animationend 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。

在这种情况下你可以用 <transition> 组件上的 duration prop 定制一个显性的过渡持续时间 (以毫秒计)：

```html
<transition :duration="1000">...</transition>
```

你也可以定制进入和移出的持续时间：

```js
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

### JavaScript 钩子

可以在 attribute 中声明 JavaScript 钩子

```html
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
  :css="false"
>
  <!-- ... -->
</transition>
```

```js
// ...
methods: {
  // --------
  // ENTERING
  // --------

  beforeEnter(el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter(el, done) {
    // ...
    done()
  },
  afterEnter(el) {
    // ...
  },
  enterCancelled(el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave(el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave(el, done) {
    // ...
    done()
  },
  afterLeave(el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled(el) {
    // ...
  }
}
```

这些钩子函数可以结合 CSS transitions/animations 使用，也可以单独使用。

当只用 JavaScript 过渡的时候，在 enter 和 leave 钩中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。添加 :css="false"，也会让 Vue 会跳过 CSS 的检测，除了性能略高之外，这可以避免过渡过程中 CSS 规则的影响。

## 初始渲染的过渡

可以通过 appear attribute 设置节点在初始渲染的过渡

```html
<transition appear>
  <!-- ... -->
</transition>
```

## 多个元素的过渡

我们之后讨论多个组件之间过渡，对于原生标签可以使用 v-if/v-else-if/v-else。最常见的多标签过渡是一个列表和描述这个列表为空消息的元素：

```html
<transition>
  <table v-if="items.length > 0">
    <!-- ... -->
  </table>
  <p v-else>Sorry, no items found.</p>
</transition>
```

实际上，通过使用 `v-if`/`v-else-if`/`v-else` 或将单个元素绑定到一个动态 property，可以在任意数量的元素之间进行过渡。例如：

```html
<transition>
  <button v-if="docState === 'saved'" key="saved">
    Edit
  </button>
  <button v-else-if="docState === 'edited'" key="edited">
    Save
  </button>
  <button v-else-if="docState === 'editing'" key="editing">
    Cancel
  </button>
</transition>
```

也可以写为：

```html
<transition>
  <button :key="docState">
    {{ buttonMessage }}
  </button>
</transition>
```

```js
// ...
computed: {
  buttonMessage() {
    switch (this.docState) {
      case 'saved': return 'Edit'
      case 'edited': return 'Save'
      case 'editing': return 'Cancel'
    }
  }
}
```

## 多个组件之间过渡

组件之间的过渡更简单 —— 我们甚至不需要 key 属性。相反，我们包裹了一个动态组件 ：

```html
<div id="demo">
  <input v-model="view" type="radio" value="v-a" id="a" /><label for="a"
    >A</label
  >
  <input v-model="view" type="radio" value="v-b" id="b" /><label for="b"
    >B</label
  >
  <transition name="component-fade" mode="out-in">
    <component :is="view"></component>
  </transition>
</div>
```

```js
const Demo = {
  data() {
    return {
      view: "v-a",
    };
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>",
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
};

Vue.createApp(Demo).mount("#demo");
```

```css
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
```
