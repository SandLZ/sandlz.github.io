# QA

[[toc]]

## Vue

### 1.0 Vue3响应式

[vue3响应式简单实现](https://www.cnblogs.com/aeipyuan/p/12726202.html)
[Vue3 的响应式和以前有什么区别，Proxy 无敌？](hhttps://juejin.cn/post/6844904122479542285)

### 1.1 双向绑定原理

Vue.js 2.0 采用**数据劫持** 结合 **发布者-订阅者模式（PubSub 模式）**的方式，通过 `Object.defineProperty()`来劫持各个属性的 `setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

每个组件实例都有相应的`watcher`程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的`setter`被调用时，会通知`watcher`重新计算，从而致使它关联的组件得以更新。

步骤：

1. 需要`observe`的数据对象进行递归遍历，包括子属性对象的属性，都加上`setter`和`getter`, 这样的话，给这个对象的某个值赋值，就会触发`setter`，那么就能监听到了数据变化;
2. `compile`解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图;
3. `Watcher`订阅者是`Observer`和`Compile`之间通信的桥梁，主要做的事情是:
   ① 在自身实例化时往属性订阅器(`dep`)里面添加自己
   ② 自身必须有一个`update()`方法
   ③ 待属性变动`dep.notice()`通知时，能调用自身的`update()`方法，并触发`Compile`中绑定的回调，则功成身退。
4. `MVVM` 作为数据绑定的入口，整合 `Observer`、`Compile` 和 `Watcher` 三者，通过 `Observer` 来监听自己的 `model` 数据变化，通过 `Compile` 来解析编译模板指令，最终利用 `Watcher` 搭起 `Observer` 和 `Compile` 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(`input`) -> 数据 `model` 变更的双向绑定效果。

### 1.2 Vue.js 3.0 放弃 defineProperty, 使用 Proxy 的原因

- 监控到数组下标的变化时，开销很大。所以 Vue.js 放弃了下标变化的检测；
- `Object.defineProperty` 只能劫持对象的属性，而`Proxy`是直接代理对象;
- `Object.defineProperty` 需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。而 `Proxy` 直接代理对象，不需要遍历操作;
- `Object.defineProperty` 对新增属性需要手动进行`Observe`。vue2 时需要使用 `vm.$set` 才能保证新增的属性也是响应式;
- `Proxy` 支持 13 种拦截操作，这是`defineProperty`所不具有的;
- `Proxy` 作为新标准，长远来看，JS 引擎会继续优化 Proxy，但 `getter` 和 `setter` 基本不会再有针对性优化

### 1.3 Vue 2 中给 data 中的对象属性添加一个新的属性时会发生什么？如何解决？

视图并未刷新。这是因为在 Vue 实例创建时，新属性并未声明，因此就没有被 Vue 转换为响应式的属性，自然就不会触发视图的更新.
这时就需要使用 Vue 的全局 api `$set()：this.$set(this.obj, 'new_property', 'new_value')`

### 1.4 `Computed`和 `Watch` 的区别

1. `computed` 计算属性 : 依赖其它属性值,并且 `computed` 的值有缓存,只有它依赖的 属性值发生改变,下一次获取 `computed` 的值时才会重新计算 `computed` 的值。
2. `watch` 侦听器 : 更多的是观察的作用,无缓存性,类似于某些数据的监听回调,每当监听的数据变化时都会执行回调进行后续操作。

运用场景：

1. 当我们需要进行数值计算,并且依赖于其它数据时,应该使用 `computed`,因为可以利用 `computed` 的缓存特性,避免每次获取值时,都要重新计算。
2. 当我们需要在数据变化时执行异步或开销较大的操作时,应该使用 `watch`,使用 `watch` 选项允许我们执行异步操作 ( 访问一个 API ),限制我们执行该操作的频率, 并在我们得到最终结果前,设置中间状态。这些都是计算属性无法做到的。
3. 多个因素影响一个显示，用`Computed`；一个因素的变化影响多个其他因素、显示，用 Watch;

### 1.5 Computed 和 Methods 的区别

1. `computed`: 计算属性是基于它们的依赖进行缓存的,只有在它的相关依赖发生改变时才会重新求值对于 `method` ，只要发生重新渲染，
2. `method`: 调用总会执行该函数

### 1.6 虚拟 DOM, Diff 算法

1. 让我们不用直接操作 DOM 元素，只操作数据便可以重新渲染页面
2. 虚拟 dom 是为了解决浏览器性能问题而被设计出来的
   当操作数据时，将改变的 dom 元素缓存起来，都计算完后再通过比较映射到真实的 dom 树上
3. diff 算法比较新旧虚拟 dom。如果节点类型相同，则比较数据，修改数据；如果节点不同，直接干掉节点及所有子节点，插入新的节点；如果给每个节点都设置了唯一的 key，就可以准确的找到需要改变的内容，否则就会出现修改一个地方导致其他地方都改变的情况。比如 `A-B-C-D`, 我要插入新节点 `A-B-M-C-D`,实际上改变的了 `C` 和 `D`。但是设置了 key，就可以准确的找到 `B C` 并插入

### 1.7 为何需要 Virtual DOM？

1. 具备跨平台的优势
2. 操作 DOM 慢，js 运行效率高。我们可以将 DOM 对比操作放在 JS 层，提高效率。
3. 提升渲染性能

### 1.8 过滤器 (Filter)

在 Vue 中使用 `filters` 来过滤(格式化)数据，`filters` 不会修改数据，而是过滤(格式化)数据，改变用户看到的输出（计算属性 `computed` ，方法 `methods` 都是通过修改数据来处理数据格式的输出显示。
使用场景： 比如需要处理时间、数字等的的显示格式；

#### 全局过滤器必须写在 vue 实例创建之前

```js
Vue.filter("testfilter", function(value, text) {
  // 返回处理后的值
  return value + text;
});
```

#### 局部写法：在组件实例对象里挂载

```js
filters: {
  changemsg: (val, text) => {
    return val + text;
  };
}
```

#### 使用方式

只能使用在`{{}}`和`：v-bind`中，定义时第一个参数固定为预处理的数，后面的数为调用时传入的参数，调用时参数第一个对应定义时第二个参数，依次往后类推

```html
<h3 :title="test|changemsg(1234)">{{test|changemsg(4567)}}</h3>
// 多个过滤器也可以串行使用
<h2>{{name|filter1|filter2|filter3}}</h2>
```

### 1.9 常见的事件修饰符及其作用

1. `.stop`：等同于 JavaScript 中的 `event.stopPropagation()` ，防止事件冒泡；
2. `.prevent` ：等同于 JavaScript 中的 `event.preventDefault()` ，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；
3. `.capture` ：当元素发生冒泡时，先触发带有该修饰符的元素。若有多个该修饰符，则由外而内触发。如 div1 中嵌套 div2 中嵌套 div3.capture 中嵌套 div4，那么执行顺序为：div3=》 div4=》div2=》div1
4. `.self` ：只会触发自己范围内的事件，不包含子元素；
5. `.once` ：只会触发一次。

### 1.10 v-model 是如何实现的，语法糖实际是什么

作用在表单元素上 `v-model="message"` 等同于 `v-bind:value="message" v-on:input="message=$event.target.value"`
作用在组件上, 本质是一个父子组件通信的语法糖，通过 `prop` 和 `$emit` 实现, 等同于 `:value="message" @input=" $emit('input', $event.target.value)"`

### 1.11 data 为什么是一个函数而不是对象

JavaScript 中的对象是引用类型的数据，当多个实例引用同一个对象时，只要一个实例对这个对象进行操作，其他实例中的数据也会发生变化。

而在 Vue 中，我们更多的是想要复用组件，那就需要每个组件都有自己的数据，这样组件之间才不会相互干扰。

所以组件的数据不能写成对象的形式，而是要写成函数的形式。数据以函数返回值的形式定义，这样当我们每次复用组件的时候，就会返回一个新的 data，也就是说每个组件都有自己的私有数据空间，它们各自维护自己的数据，不会干扰其他组件的正常运行。

### 1.12 Vue template 到 render 的过程

调用`parse`方法将`template`转化为 `ast`（抽象语法树, abstract syntax tree）
对静态节点做优化。如果为静态节点，他们生成的 DOM 永远不会改变，这对运行时模板更新起到了极大的优化作用。
生成渲染函数. 渲染的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有（标签名，子节点，文本等等）

### 1.13 Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？

不会立即同步执行重新渲染。
Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。
Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 `watcher` 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。
然后，在下一个的事件循环"tick"中，Vue 刷新队列并执行实际（已去重的）工作。

### 1.14 如何解决数据层级结构太深的问题

在开发业务时，经常会岀现异步获取数据的情况，有时数据层次比较深，如以下代码: `span 'v-text="a.b.c.d"></span>`, 可以使用 `vm.$set` 手动定义一层数据: `vm.$set("demo"，a.b.c.d)`

### 1.15 vue 的 nextTick 方法的实现原理

`vue` 用异步队列的方式来控制 `DOM` 更新和 `nextTick` 回调先后执行
`microtask` 因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕

### 1.16 v-if 和 v-for 一起使用的弊端及解决办法

由于 `v-for` 的优先级比 `v-if` 高，所以导致每循环一次就会去 `v-if` 一次，而 `v-if` 是通过创建和销毁 `dom` 元素来控制元素的显示与隐藏，所以就会不停的去创建和销毁元素，造成页面卡顿，性能下降。

解决办法：

- 在 v-for 的外层或内层包裹一个元素来使用 v-if
- 用 computed 处理

### 1.17 vue 常用指令

- `v-model` 多用于表单元素实现双向数据绑定（同 angular 中的 ng-model）
- `v-bind` 动态绑定 作用： 及时对页面的数据进行更改
- `v-on:click` 给标签绑定函数，可以缩写为@，例如绑定一个点击函数 函数必须写在 methods 里面
- `v-for` 格式： v-for="字段名 in(of) 数组 json" 循环数组或 json(同 angular 中的 ng-repeat)
- `v-show` 显示内容 （同 angular 中的 ng-show）
- `v-hide` 隐藏内容（同 angular 中的 ng-hide）
- `v-if` 显示与隐藏 （dom 元素的删除添加 同 angular 中的 ng-if 默认值为 false）
- `v-else-if` 必须和 v-if 连用
- `v-else` 必须和 v-if 连用 不能单独使用 否则报错 模板编译错误
- `v-text` 解析文本
- `v-html` 解析 html 标签
- `v-bind:class` 三种绑定方法 1、对象型 '{red:isred}' 2、三元型 'isred?"red":"blue"' 3、数组型 '[{red:"isred"},{blue:"isblue"}]'
- `v-once` 进入页面时 只渲染一次 不在进行渲染
- `v-cloak` 防止闪烁
- `v-pre` 把标签内部的元素原位输出

### 1.18 组件传值方式有哪些

- 父传子：子组件通过 `props['xx']` 来接收父组件传递的属性 `xx` 的值
- 子传父：子组件通过 `this.$emit('fnName',value)` 来传递,父组件通过接收 `fnName` 事件方法来接收回调
- 其他方式：通过创建一个 `bus`，进行传值
- 使用 `Vuex`

### 1.19 vue-loader 是什么？使用它的用途有哪些？

解析和转换.vue 文件。
提取出其中的逻辑代码 `script`,样式代码 `style`,以及 HTML 模板`template`，再分别把他们交给对应的 loader 去处理,最后将他们组装成一个 `commonjs` 模块；module.exports 出一个 vue.js 组件对象；
用途：js 可以写 es6、style 样式可以 scss 或 less、template 可以加 jade 等

### 1.20 页面闪烁

Vue. js 提供了一个 `v-cloak` 指令，该指令一直保持在元素上，直到关联实例结束编译。当和 CSS 一起使用时，这个指令可以隐藏未编译的标签，直到实例编译结束。用法如下。

```html
[v-cloak]{ display:none; }

<div v-cloak>{{ title }}</div>
```

### 1.21 vuejs 与 angularjs 以及 react 的区别

相同点：

1、 都支持指令：内置指令和自定义指令。

2、 都支持过滤器：内置过滤器和自定义过滤器。

3、 都支持双向数据绑定。

4、 都不支持低端浏览器。

不同点：

1、 AngularJS 的学习成本高，比如增加了 Dependency Injection 特性，而 Vue.js 本身提供的 API 都比较简单、直观。

2、 在性能上，AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢。

3、 Vue.js 使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。

4、 对于庞大的应用来说，这个优化差异还是比较明显的。

### 1.22 Vue 生命周期

- `beforeCreate` 是 new Vue()之后触发的第一个钩子，在当前阶段`data`、`methods`、`computed`以及`watch`上的数据和方法都不能被访问。

- `created`在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 Dom 进行交互，如果非要想，可以通过 `vm.$nextTick` 来访问 Dom。

- `beforeMount` 发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 Dom 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。

- `mounted` 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点，使用`$refs` 属性对 Dom 进行操作。

- `beforeUpdate` 发生在更新之前，也就是响应式数据发生更新，虚拟 dom 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

- `updated` 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

- `beforeDestroy` 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

- `destroyed` 发生在实例销毁之后，这个时候只剩下了 dom 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

### 1.23 Vue.use(VueX) 做了什么？

再看 install 方法之前，我们需要先了解一下`vuex.use`方法都做了什么，源码位置位于 Vue 源码项目中的 `src/global-api/use.js`

```js
Vue.use = function(plugin: Function | Object) {
  const installedPlugins =
    this._installedPlugins || (this._installedPlugins = []);
  // Vue检测是否已经注册过这个插件， 如果已经注册过就直接返回
  if (installedPlugins.indexOf(plugin) > -1) {
    return this;
  }

  // additional parameters
  // 把参数截取出来组成一个数组，后面需要作为apply的第二个参数传入，注意这里不要第一个参数，因为第一个参数是我们的插件，比如(vuex,vueRouter、elementui)等；
  const args = toArray(arguments, 1);
  args.unshift(this); // 把Vue作为第一个参数
  if (typeof plugin.install === "function") {
    // 如果插件有intall方法就直接调用他的install方法，并把args传入。
    plugin.install.apply(plugin, args);
  } else if (typeof plugin === "function") {
    plugin.apply(null, args);
  }
  installedPlugins.push(plugin);
  return this;
};
```

接下来我们看 Vuex 的 install 方法，源码位置在 Vuex 的 `src/store.js`

```js
export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    // 这里也是判断Vue是否已经注册过vuex了，如果注册过就直接返回，注意vuex是单例模式
    if (__DEV__) {
      console.error(
        "[vuex] already installed. Vue.use(Vuex) should be called only once."
      );
    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue); // 调用applyMixin， 看下这个函数干了啥
}
```

applyMixin 方法 源码位于 Vue 的 `src/mixin.js`

```js
export default function (Vue) {
   const version = Number(Vue.version.split('.')[0]) // 获取vue的版本

   if (version >= 2) { // 如果版本大于等于2， 就在vue的beforeCreate中混入vuexInit函数， 接下来看一下vuexInit
     Vue.mixin({ beforeCreate: vuexInit })
   } else { // 这段代码可以不看， 针对vue低版本的vuex的处理
     // override init and inject vuex init procedure
     // for 1.x backwards compatibility.
     const _init = Vue.prototype._init
     Vue.prototype._init = function (options = {}) {
       options.init = options.init
         ? [vuexInit].concat(options.init)
         : vuexInit
       _init.call(this, options)
     }
   }

   /**
    * Vuex init hook, injected into each instances init hooks list.
    */

   function vuexInit () { // 当我们实例化vue的时候就会调用这个函数了。
     const options = this.$options // 获取vue的$options
     // store injection
     if (options.store) { // 判断options中是否存在store属性，这里就是我们在vue的main.js中实例化Vue时写的new Vue({store}).$mount('app')
       this.$store = typeof options.store === 'function'
         ? options.store()
         : options.store  // 将vuex绑定到Vue实例的$store属性上
     } else if (options.parent && options.parent.$store) {
       /* 这里的代码的意思是，我们需要在任何Vue的组件中都能通过使用this.$store直接调用vuex，
       所以vuex给我们做了这个工作，如果当前组件的option没有store属性，
       就看他的父组件上有没有，直到拿到store，然后赋值给$store属性，
       这样我们就能在Vue的组件中使用this.$store了。*/
       this.$store = options.parent.$store
     }
   }
```

总结 `Vue.use(vuex)`

- 判断 vue 是否已经注册过 vuex 插件；
- 将`vuexInit`函数混入到 vue 的 `beforeCreate` 生命周期中;
- 实例化 vue 时，会在 vue 每个实例上添加`$store`属性，并将vuex的实例绑定到`$store` 属性上。

## Component

### 2.1 keep-alive 是什么？

如果需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 `keep-alive` 组件包裹需要保存的组件。

两个重要属性，`include` 缓存组件名称，`exclude` 不需要缓存的组件名称。

### 2.2 父子组件的生命周期顺序

1. 加载渲染过程：

- 父 `beforeCreate`
- 父 `created`
- 父 `beforeMount`
- 子 `beforeCreate`
- 子 `created`
- 子 `beforeMount`
- 子 `mounted`
- 父 `mounted`

2. 子组件更新过程：

- 父 `beforeUpdate`
- 子 `beforeUpdate`
- 子 `updated`
- 父 `updated`

3. 父组件更新过程：

- 父 `beforeUpdate`
- 父 `updated`

4. 销毁过程：

- 父 `beforeDestroy`
- 子 `beforeDestroy`
- 子 `destroyed`
- 父 `destroyed`

## VueX

### 3.1 vuex 的核心概念

1. `state` => 基本数据
2. `getters` => 从基本数据派生的数据
3. `mutations` => 修改数据，同步
4. `actions` => 修改数据，异步 (Action 提交的是 mutation，而不是直接变更状态)
5. `modules` => 模块化 Vuex

### 3.2 vuex 是什么？怎么使用？哪种功能场景使用它？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理器，采用集中式存储管理应用的所有组件的状态，主要是为了多页面、多组件之间的通信。
Vuex 有 5 个重要的属性，分别是 State、Getter、Mutation、Action、Module，由 view 层发起一个 Action 给 Mutation，在 Mutation 中修改状态，返回新的状态，通过 Getter 暴露给 view 层的组件或者页面，页面监测到状态改变于是更新页面。如果你的项目很简单，最好不要使用 Vuex，对于大型项目，Vuex 能够更好的帮助我们管理组件外部的状态，一般可以运用在购物车、登录状态、播放等场景中。

### 3.3 多个组件之间如何拆分各自的 state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何思考这块

公共的数据部分可以提升至和他们最近的父组件，由父组件派发
公共数据可以放到 vuex 中统一管理，各组件分别获取

## Router

### 4.1 vue-router 路由的两种模式

vue-router 中默认使用的是 hash 模式

hash 模式, 带#。如：http://localhost:8080/#/pageA。改变hash，浏览器本身不会有任何请求服务器动作的，但是页面状态和url已经关联起来了。
history 模式，不带#， 如：http://localhost:8080/ 正常的而路径，并没有#。基于 HTML5 的 pushState、replaceState 实现

### 4.2 vue-router 有哪几种导航钩子？

1. 全局导航钩子：`router.beforeEach(to,from,next)`
2. 组件内的钩子 `beforeRouteEnter (to, from, next)` `beforeRouteUpdate (to, from, next)` `beforeRouteLeave (to, from, next)`
3. 单独路由独享组件 `beforeEnter: (to, from, next)`

### 4.3 $route和$router 的区别

`$route` 是“路由信息对象”，包括`path`，`params`，`hash`，`query`，`fullPath`，`matched`，`name`等路由信息参数。
`$router` 是“路由实例”对象, 包括了路由的跳转方法，钩子函数等

```

```
