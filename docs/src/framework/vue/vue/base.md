# 基础

[[toc]]

## 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统:

```html
<div id="counter">
  Counter: {{ counter }}
</div>
```

```js
const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
};

Vue.createApp(Counter).mount("#counter");
```

::: tip

- 使用 {{}} 包裹变量

:::

## 数据绑定

`v-bind`: 指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute。

```html
<div id="bind-attribute">
  <span v-bind:title="message">
    some text!
  </span>
</div>
```

```js
const AttributeBinding = {
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
};

Vue.createApp(AttributeBinding).mount("#bind-attribute");
```

`v-on`: 指令添加一个事件监听器，通过它调用在实例中定义的方法。

```html
<div id="event-handling">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转 Message</button>
</div>
```

```js
const EventHandling = {
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
  },
};

Vue.createApp(EventHandling).mount("#event-handling");
```

::: tip
缩写

`v-bind:href="xxx"`： `:href="xxx"`

// 动态参数

`v-bind:[attr]="yyy"`： `:[attr]="yyy"`

`v-on:click="doSomething"`: `@click="doSomething"`

// 动态参数 2.6+

`v-on:[event]="doSomething"`: `@[event]="doSomething"`

:::

## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层组件实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应性系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

### 差值

#### 文本

```html
<span>Message: {{ msg }}</span>
```

::: tip
`v-once`: 执行一次性插值,
请留心这会影响到该节点上的其它数据绑定

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

:::

#### 原始 HTML

`v-html`: 设置 html 内容

注意：XSS 攻击

#### Attribute

Mustache({{}}) 语法不能在 HTML attribute 中使用，然而，可以使用 v-bind 指令：

```html
<div v-bind:id="dynamicId"></div>
```

如果绑定的值是 null 或 undefined，那么该 attribute 将不会被包含在渲染的元素上。

#### JavaScript 表达式

```html
{{ number + 1 }} {{ ok ? 'YES' : 'NO' }} {{ message.split('').reverse().join('')
}}

<div v-bind:id="'list-' + id"></div>
```

### 指令

指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 和 v-on 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

```html
<a v-bind:href="url"> ... </a> <a v-on:click="doSomething"> ... </a>
```

#### 动态参数

也可以在指令参数中使用 JavaScript 表达式，方法是用方括号括起来：

```html
<a v-bind:[attributeName]="url"> ... </a>
```

##### 对动态参数值约定

动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

##### 对动态参数表达式约定

动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：

```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的组件实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href。

同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

#### 修饰符

修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

### 注意事项

#### JavaScript 表达式

模板表达式都被放在沙盒中，只能访问一个受限的列表，如 `Math` 和 `Date`。你不应该在模板表达式中试图访问用户定义的全局变量。

```js
const GLOBALS_WHITE_LISTED =
  "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI," +
  "decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array," +
  "Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
```

## Data 与 Method

### Data Property

组件的 `data` 选项是一个函数。`Vue` 在创建新组件实例的过程中调用此函数。它应该返回一个对象，然后 `Vue` 会通过响应性系统将其包裹起来，并以 `$data` 的形式存储在组件实例中。为方便起见，该对象的任何顶级 `property` 也直接通过组件实例暴露出来：

```js
const app = Vue.createApp({
  data() {
    return { count: 4 };
  },
});

const vm = app.mount("#app");

console.log(vm.$data.count); // => 4
console.log(vm.count); // => 4

// 修改 vm.count 的值也会更新 $data.count
vm.count = 5;
console.log(vm.$data.count); // => 5

// 反之亦然
vm.$data.count = 6;
console.log(vm.count); // => 6
```

这些实例 `property` 仅在实例首次创建时被添加，所以你需要确保它们都在 `data` 函数返回的对象中。必要时，要对尚未提供所需值的 `property` 使用 `null`、`undefined` 或其他占位的值。

直接将不包含在 `data`中的新 `property` 添加到组件实例是可行的。但由于该 property 不在背后的响应式 \$data 对象内，所以 Vue 的响应性系统不会自动跟踪它。

Vue 使用 `$` 前缀通过组件实例暴露自己的内置 API。它还为内部 `property` 保留 `_` 前缀。你应该避免使用这两个字符开头的的顶级 `data` property 名称。

### Method

```js
const app = Vue.createApp({
  data() {
    return { count: 4 };
  },
  methods: {
    increment() {
      // `this` 指向该组件实例
      this.count++;
    },
  },
});

const vm = app.mount("#app");

console.log(vm.count); // => 4

vm.increment();

console.log(vm.count); // => 5
```

`Vue` 自动为 `methods` 绑定 `this`，以便于它始终指向组件实例。这将确保方法在用作事件监听或回调时保持正确的 `this` 指向。在定义 `methods` 时应避免使用箭头函数，因为这会阻止 `Vue` 绑定恰当的 `this` 指向。

这些 `methods` 和组件实例的其它所有 `property` 一样可以在组件的模板中被访问。在模板中，它们通常被当做事件监听使用：

```html
<button @click="increment">Up vote</button>
```

## 计算属性 与 监听器

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如，有一个嵌套数组对象：

```js
Vue.createApp({
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
});
```

```html
<div id="computed-basics">
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
</div>
```

此时，模板不再是简单的和声明性的。你必须先看一下它，然后才能意识到它执行的计算取决于 author.books。如果要在模板中多次包含此计算，则问题会变得更糟。

所以，对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性。

```html
<div id="computed-basics">
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // 计算属性的 getter
    publishedBooksMessage() {
      // `this` 指向 vm 实例
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
}).mount("#computed-basics");
```

这里声明了一个计算属性 `publishedBooksMessage`。

尝试更改应用程序 `data` 中 `books` 数组的值，你将看到 `publishedBooksMessage` 如何相应地更改。

你可以像普通属性一样将数据绑定到模板中的计算属性。`Vue` 知道 `vm.publishedBookMessage` 依赖于 `vm.author.books`，因此当 `vm.author.books` 发生改变时，所有依赖 vm.`publishedBookMessage` 的绑定也会更新。而且最妙的是我们已经声明的方式创建了这个依赖关系：计算属性的 `getter` 函数没有副作用，它更易于测试和理解。

### 计算属性缓存 vs 方法

通过在表达式中调用方法来达到同样的效果：

```html
<p>{{ calculateBooksMessage() }}</p>
```

```js
// 在组件中
methods: {
  calculateBooksMessage() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
}
```

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应依赖关系缓存的。计算属性只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `author.books` 还没有发生改变，多次访问 `publishedBookMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 Date.now () 不是响应式依赖：

```js
computed: {
  now() {
    return Date.now()
  }
}
```

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 `list`，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 `list`。如果没有缓存，我们将不可避免的多次执行 list 的 `getter`！如果你不希望有缓存，请用 `method` 来替代.

### 计算属性的 Setter

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：

```js
// ...
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

现在再运行 `vm.fullName = 'John Doe'` 时，`setter` 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

### Watch

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 `Vue` 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</div>
```

```js
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script>
  const watchExampleVM = Vue.createApp({
    data() {
      return {
        question: '',
        answer: 'Questions usually contain a question mark. ;-)'
      }
    },
    watch: {
      // whenever question changes, this function will run
      question(newQuestion, oldQuestion) {
        if (newQuestion.indexOf('?') > -1) {
          this.getAnswer()
        }
      }
    },
    methods: {
      getAnswer() {
        this.answer = 'Thinking...'
        axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  }).mount('#watch-example')
</script>
```

在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

除了 `watch` 选项之外，你还可以使用命令式的 `vm.$watch` API。

### 计算属性 vs 监听器

Vue 提供了一种更通用的方式来观察和响应当前活动的实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。细想一下这个例子：

```html
<div id="demo">{{ fullName }}</div>
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
    };
  },
  watch: {
    firstName(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName(val) {
      this.fullName = this.firstName + " " + val;
    },
  },
}).mount("#demo");
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
}).mount("#demo");
```

## Class 与 Style

操作元素的 `class` 列表和内联样式是数据绑定的一个常见需求。因为它们都是 `attribute`，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，`Vue.js` 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

### 对象语法

我们可以传给 `:class`(`v-bind:class`的简写) 一个对象，以动态地切换 `class`：

```html
<div :class="{ active: isActive }"></div>
```

上面的语法表示 active 这个 class 存在与否将取决于数据 property isActive 的 truthiness。

你可以在对象中传入更多字段来动态切换多个 class。此外，:class 指令也可以与普通的 class attribute 共存。当有如下模板：

```html
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```

```js
data() {
  return {
    isActive: true,
    hasError: false
  }
}
```

渲染的结果为：

```html
<div class="static active"></div>
```

渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：

```html
<div :class="classObject"></div>
```

```js
data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

### 数组语法

我们可以把一个数组传给 `:class`，以应用一个 `class` 列表：

```html
<div :class="[activeClass, errorClass]"></div>
```

```js
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

渲染的结果为：

```html
<div class="active text-danger"></div>
```

如果你想根据条件切换列表中的 class，可以使用三元表达式：

```html
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 errorClass，但是只有在 isActive 为 truthy[1] 时才添加 activeClass。

不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：

```html
<div :class="[{ active: isActive }, errorClass]"></div>
```

### 在组建上使用

当你在带有单个根元素的自定义组件上使用 class attribute 时，这些 class 将被添加到该元素中。此元素上的现有 class 将不会被覆盖。

例如，如果你声明了这个组件：

```js
const app = Vue.createApp({});

app.component("my-component", {
  template: `<p class="foo bar">Hi!</p>`,
});
```

然后在使用它的时候添加一些 class：

```html
<div id="app">
  <my-component class="baz boo"></my-component>
</div>
```

HTML 将被渲染为：

```html
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 class 也同样适用：

```html
<my-component :class="{ active: isActive }"></my-component>
```

当 isActive 为 truthy[1] 时，HTML 将被渲染成为：

```html
<p class="foo bar active">Hi</p>
```

如果你的组件有多个根元素，你需要定义哪些部分将接收这个类。可以使用 \$attrs 组件属性执行此操作：

```html
<div id="app">
  <my-component class="baz"></my-component>
</div>
```

```js
const app = Vue.createApp({});

app.component("my-component", {
  template: `
    <p :class="$attrs.class">Hi!</p>
    <span>This is a child component</span>
  `,
});
```

### 内联样式

#### 对象语法

`:style` 的对象语法十分直观——看着非常像 `CSS`，但其实是一个 `JavaScript` 对象。`CSS property` 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data() {
  return {
    activeColor: 'red',
    fontSize: 30
  }
}
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：

```html
<div :style="styleObject"></div>
```

```js
data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}
```

同样的，对象语法常常结合返回对象的计算属性使用。

#### 数组语法

`:style` 的数组语法可以将多个样式对象应用到同一个元素上：

```html
<div :style="[baseStyles, overridingStyles]"></div>
```

#### 自动添加前缀

在 `:style` 中使用需要一个 `vendor prefix` (浏览器引擎前缀) 的 `CSS property` 时，`Vue` 将自动侦测并添加相应的前缀。`Vue` 是通过运行时检测来确定哪些样式的 `property` 是被当前浏览器支持的。如果浏览器不支持某个 `property`，`Vue` 会进行多次测试以找到支持它的前缀。

#### 多重值

可以为 `style` 绑定中的 `property` 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 `flexbox`，那么就只会渲染 `display: flex`。

## 条件渲染

### v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。

```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 🤣</h1>
```

#### 在 `<template>` 元素上使用 `v-if` 条件渲染分组

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

#### v-else

你可以使用 `v-else` 指令来表示 `v-if` 的“else 块”：

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

`v-else` 元素必须紧跟在带 `v-if`或者 `v-else-if` 的元素的后面，否则它将不会被识别。

#### v-else-if

`v-else-if`，顾名思义，充当 `v-if` 的“else-if 块”，并且可以连续使用：

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

与 `v-else` 的用法类似，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。

### v-show

另一个用于条件性展示元素的选项是 `v-show` 指令。用法大致一样：

```html
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 `CSS property display`。

注意，`v-show`不支持 `<template>` 元素，也不支持 `v-else`。

### v-if vs v-show

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中，条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 `CSS` 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

### v-if 与 v-for 一起使用

:::tip
注意我们不推荐在同一元素上使用 `v-if` 和 `v-for`。
:::

当它们处于同一节点，`v-if` 的优先级比 `v-for` 更高，这意味着 `v-if` 将没有权限访问 `v-for` 里的变量：

```html
<!-- This will throw an error because property "todo" is not defined on instance. -->

<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

可以把 `v-for` 移动到 `<template>` 标签中来修正：

```html
<template v-for="todo in todos" :key="todo.name">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

## 列表渲染

### 用 v-for 把一个数组对应为一组元素

```html
<ul id="array-rendering">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

```js
Vue.createApp({
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
}).mount("#array-rendering");
```

在 `v-for` 块中，我们可以访问所有父作用域的 `property`。`v-for` 还支持一个可选的第二个参数，即当前项的索引。

```html
<ul id="array-with-index">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```js
Vue.createApp({
  data() {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
}).mount("#array-with-index");
```

你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法：

```html
<div v-for="item of items"></div>
```

### 在 v-for 里使用对象

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
```

```js
Vue.createApp({
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
}).mount("#v-for-object");
```

你也可以提供第二个的参数为 property 名称 (也就是键名 key)：

```html
<li v-for="(value, name) in myObject">
  {{ name }}: {{ value }}
</li>
```

还可以用第三个参数作为索引：

```html
<li v-for="(value, name, index) in myObject">
  {{ index }}. {{ name }}: {{ value }}
</li>
```

### 维护状态

当 `Vue` 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，`Vue` 将不会移动 `DOM` 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 `DOM` 状态 (例如：表单输入值) 的列表渲染输出。

为了给 `Vue` 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key attribute`：

```html
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```

建议尽可能在使用 `v-for` 时提供 `key attribute`，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

因为它是 `Vue` 识别节点的一个通用机制，`key` 并不仅与 `v-for` 特别关联。后面我们将在指南中看到，它还具有其它用途。

:::tip
不要使用对象或数组之类的非基本类型值作为 `v-for` 的 `key`。请用字符串或数值类型的值。
:::

### 数组更新检测

#### 变更方法

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- push
- pop
- shift
- unshift
- splice
- sort
- reverse

#### 替换数组

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组.

### 显示过滤/排序后的结果

显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。

```html
<li v-for="n in evenNumbers" :key="n">{{ n }}</li>
```

```js
data() {
  return {
    numbers: [ 1, 2, 3, 4, 5 ]
  }
},
computed: {
  evenNumbers() {
    return this.numbers.filter(number => number % 2 === 0)
  }
}
```

在计算属性不适用的情况下 (例如，在嵌套 `v-for` 循环中) 你可以使用一个方法：

```html
<ul v-for="numbers in sets">
  <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
</ul>
```

```js
data() {
  return {
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  }
},
methods: {
  even(numbers) {
    return numbers.filter(number => number % 2 === 0)
  }
}
```

### 在 `v-for` 里使用值的范围

`v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div id="range" class="demo">
  <span v-for="n in 10" :key="n">{{ n }} </span>
</div>
```

### 在 `<template></template>` 中使用 v-for

```html
<ul>
  <template v-for="item in items" :key="item.msg">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

### 在组件上使用

在自定义组件上，你可以像在任何普通元素上一样使用 `v-for`：

```html
<my-component v-for="item in items" :key="item.id"></my-component>
```

## 事件处理

### 监听事件

我们可以使用 `v-on` 指令 (通常缩写为 `@` 符号) 来监听 DOM 事件，并在触发事件时执行一些 JavaScript。用法为 `v-on:click="methodName"` 或使用快捷方式 `@click="methodName"`

```html
<div id="basic-event">
  <button @click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

### 事件处理方法

许多事件处理逻辑会更为复杂，所以直接把 `JavaScript` 代码写在 `v-on` 指令中是不可行的。因此 `v-on` 还可以接收一个需要调用的方法名称。

```html
<div id="event-with-method">
  <!-- `greet` 是在下面定义的方法名 -->
  <button @click="greet">Greet</button>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      name: "Vue.js",
    };
  },
  methods: {
    greet(event) {
      // `methods` 内部的 `this` 指向当前活动实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
}).mount("#event-with-method");
```

### 内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：

```html
<div id="inline-handler">
  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
</div>
```

```js
Vue.createApp({
  methods: {
    say(message) {
      alert(message);
    },
  },
}).mount("#inline-handler");
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```html
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```js
methods: {
  warn(message, event) {
    // 现在可以访问到原生事件
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

### 多事件处理器

```html
<!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
<button @click="one($event), two($event)">
  Submit
</button>
```

### 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

- .stop
- .prevent
- .capture
- .self
- .once
- .passive

:::tip

<!-- 阻止单击事件继续传播 -->

<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->

<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
:::

```html
<!-- 点击事件将只会触发一次 -->
<a @click.once="doThis"></a>
```

不像其它只能对原生的 DOM 事件起作用的修饰符，.once 修饰符还能被用到自定义的组件事件上

Vue 还对应 `addEventListener` 中的 passive 选项提供了 `.passive` 修饰符。

```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发   -->
<!-- 而不会等待 `onScroll` 完成                   -->
<!-- 这其中包含 `event.preventDefault()` 的情况   -->
<div @scroll.passive="onScroll">...</div>
```

这个 .passive 修饰符尤其能够提升移动端的性能。

:::tip
不要把 `.passive` 和 `.prevent` 一起使用，因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，`.passive` 会告诉浏览器你不想阻止事件的默认行为。
:::

### 按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。`Vue` 允许为 `v-on` 或者 @ 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input @keyup.enter="submit" />
```

你可以直接将 `KeyboardEvent.key` 暴露的任意有效按键名转换为 `kebab-case` 来作为修饰符。

```html
<input @keyup.page-down="onPageDown" />
```

在上述示例中，处理函数只会在 `$event.key` 等于 `'PageDown'` 时被调用。

### 按键别名

- .enter
- .tab
- .delete (捕获“删除”和“退格”键)
- .esc
- .space
- .up
- .down
- .left
- .right

### 系统修饰键

- .ctrl
- .alt
- .shift
- .meta

### .exact 修饰符

.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

### 鼠标按钮修饰符

- .left
- .right
- .middle

## 表单

### 基础用法

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理。

:::tip
`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected attribute` 的初始值而总是将当前活动实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
:::

`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- `text` 和 `textarea` 元素使用 `value property` 和 `input` 事件；
- `checkbox` 和 `radio` 使用 `checked property` 和 `change` 事件；
- `select` 字段将 `value` 作为 `prop` 并将 `change` 作为事件。

:::tip
对于需要使用输入法 (如中文、日文、韩文等) 的语言，你会发现 v-model 不会在输入法组织文字过程中得到更新。如果你也想响应这些更新，请使用 input 事件监听器和 value 绑定，而不是使用 v-model。
:::

#### 文本 (Text)

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```

#### 多行文本 (Textarea)

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br />
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

在文本区域插值不起作用，应该使用 `v-model` 来代替。

```html
<!-- bad -->
<textarea>{{ text }}</textarea>

<!-- good -->
<textarea v-model="text"></textarea>
```

#### 复选框 (Checkbox)

单个复选框，绑定到布尔值：

```html
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

#### 单选框 (Radio)

```html
<div id="v-model-radiobutton">
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <br />
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <br />
  <span>Picked: {{ picked }}</span>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      picked: "",
    };
  },
}).mount("#v-model-radiobutton");
```

#### 选择框 (Select)

单选时：

```html
<div id="v-model-select" class="demo">
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      selected: "",
    };
  },
}).mount("#v-model-select");
```

:::tip
如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 `iOS` 中，这会使用户无法选择第一个选项。因为这样的情况下，`iOS` 不会触发 `change` 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。
:::

多选时 (绑定到一个数组)：

```html
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br />
<span>Selected: {{ selected }}</span>
```

用 v-for 渲染的动态选项：

```html
<div id="v-model-select-dynamic" class="demo">
  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
}).mount("#v-model-select-dynamic");
```

#### 值绑定

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle" />

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们可能想把值绑定到当前活动实例的一个动态 `property` 上，这时可以用 `v-bind` 实现，此外，使用 `v-bind`可以将输入值绑定到非字符串。

#### 复选框 (Checkbox)

```html
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
```

```js
// when checked:
vm.toggle === "yes";
// when unchecked:
vm.toggle === "no";
```

:::tip
这里的 `true-value` 和 `false-value attribute` 并不会影响输入控件的 `value attribute`，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，请换用单选按钮。
:::

#### 单选框 (Radio)

```html
<input type="radio" v-model="pick" v-bind:value="a" />
```

```js
vm.pick === vm.a;
```

#### 选择框选项 (Select Options)

```html
<select v-model="selected">
  <!-- 内联对象字面量 -->
  <option :value="{ number: 123 }">123</option>
</select>
```

```js
// 当被选中时
typeof vm.selected; // => 'object'
vm.selected.number; // => 123
```

### 修饰符

#### .lazy

在默认情况下，`v-model` 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组织文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件*之后*进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" />
```

#### .number

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 number 修饰符：

```html
<input v-model.number="age" type="number" />
```

#### .trim

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg" />
```
