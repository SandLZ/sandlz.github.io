# 组件

[[toc]]

## 注册类型

- 全局注册
- 局部注册

### 全局注册

```js
// 全局注册的组件可以在应用中的任何组件的模板中使用。
const app = Vue.createApp({});

// 该组件名就是 app.component 的第一个参数，在上面的例子中，组件的名称是“my-component-name”。
app.component("my-component-name", {
  // ... 选项 ...
});
```

### 局部注册

全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用其中一个组件了，它仍然会被包含在最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。

注意局部注册的组件在其子组件中不可用。例如，如果你希望 ComponentA 在 ComponentB 中可用，则你需要这样写：

```js
const ComponentA = {
  /* ... */
};

const ComponentB = {
  components: {
    "component-a": ComponentA,
  },
  // ...
};
```

或者如果你通过 Babel 和 webpack 使用 ES2015 模块，那么代码看起来像这样：

```js
import ComponentA from "./ComponentA.vue";

export default {
  components: {
    ComponentA,
  },
  // ...
};
```

## 传值

### Prop

到这里，我们只看到了以字符串数组形式列出的 prop：

```js
props: ["title", "likes", "isPublished", "commentIds", "author"];
```

但是，通常你希望每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型：

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // 或任何其他构造函数
}
```

这不仅为你的组件提供了文档，还会在它们遇到错误的类型时从浏览器的 JavaScript 控制台提示用户。

### 传递静态或动态的 Prop

这样，你已经知道了可以像这样给 prop 传入一个静态的值：

```html
<blog-post title="My journey with Vue"></blog-post>
```

你也知道 `prop` 可以通过 `v-bind` 或简写 : 动态赋值，例如：

```html
<!-- 动态赋予一个变量的值 -->
<blog-post :title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post :title="post.title + ' by ' + post.author.name"></blog-post>
```

在上述两个示例中，我们传入的值都是字符串类型的，但实际上任何类型的值都可以传给一个 prop。

### 传入其他类型

```html
<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue     -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。             -->
<blog-post :likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post :likes="post.likes"></blog-post>

<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。          -->
<!-- 如果没有在 props 中把 is-published 的类型设置为 Boolean，则这里的值为空字符串，而不是“true” 。 -->
<blog-post is-published></blog-post>

<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue  -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。             -->
<blog-post :is-published="false"></blog-post>

<!-- 用一个变量进行动态赋值。                                -->
<blog-post :is-published="post.isPublished"></blog-post>

<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue        -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。             -->
<blog-post :comment-ids="[234, 266, 273]"></blog-post>

<!-- 用一个变量进行动态赋值。                                -->
<blog-post :comment-ids="post.commentIds"></blog-post>

<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue        -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。             -->
<blog-post
  :author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
></blog-post>

<!-- 用一个变量进行动态赋值。                                 -->
<blog-post :author="post.author"></blog-post>

<blog-post v-bind="post"></blog-post>
```

### 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个`单向下行绑定`：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

另外，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图变更一个 prop 的情形：

1. 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data property 并将这个 prop 作为其初始值：

```js
props: ['initialCounter'],
data() {
  return {
    counter: this.initialCounter
  }
}
```

2. 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

```js
props: ['size'],
computed: {
  normalizedSize() {
    return this.size.trim().toLowerCase()
  }
}
```

:::tip
注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。
:::

### Prop 验证

我们可以为组件的 prop 指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，则 Vue 会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助。

为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：

```js
app.component("my-component", {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true,
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100,
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default() {
        return { message: "hello" };
      },
    },
    // 自定义验证函数
    propF: {
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].includes(value);
      },
    },
    // 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数
      default() {
        return "Default function";
      },
    },
  },
});
```

当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。

:::tip
注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
:::

### 类型检查

type 可以是下列原生构造函数中的一个：

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

此外，type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认。例如，给定下列现成的构造函数：

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

你可以使用：

```js
app.component("blog-post", {
  props: {
    author: Person,
  },
});
```

用于验证 `author prop` 的值是否是通过 `new Person` 创建的。

### Prop 的大小写命名 (camelCase vs kebab-case)

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：

```js
const app = Vue.createApp({});

app.component("blog-post", {
  // camelCase in JavaScript
  props: ["postTitle"],
  template: "<h3>{{ postTitle }}</h3>",
});
```

```html
<!-- kebab-case in HTML -->
<blog-post post-title="hello!"></blog-post>
```

重申一次，如果你使用字符串模板，那么这个限制就不存在了。

### 父传子

`Prop` 是你可以在组件上注册的一些自定义 `attribute`。为了给博文组件传递一个标题，我们可以用 `props` 选项将其包含在该组件可接受的 `prop` 列表中：

```js
const app = Vue.createApp({});

app.component("blog-post", {
  props: ["title"],
  template: `<h4>{{ title }}</h4>`,
});

app.mount("#blog-post-demo");
```

```js
<div id="blog-posts-demo">
  <blog-post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
  ></blog-post>
</div>
```

### 子传父

```html
<button @click="$emit('enlargeText', 0.1)">
  Enlarge text
</button>
```

```html
<blog-post ... @enlarge-text="onEnlargeText"></blog-post>
```

```js
methods: {
  onEnlargeText(enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

### 在组件上使用 v-model

自定义事件也可以用于创建支持 `v-model` 的自定义输入组件。记住：

```html
<input :value="searchText" @input="searchText = $event.target.value" />
```

等价于：

```html
<input :value="searchText" @input="searchText = $event.target.value" />
```

当用在组件上时，`v-model` 则会这样：

```html
<custom-input
  :model-value="searchText"
  @update:model-value="searchText = $event"
></custom-input>
```

```js
app.component("custom-input", {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  template: `
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  `,
});
```

```html
<custom-input v-model="searchText"></custom-input>
```

在该组件中实现 `v-model` 的另一种方法是使用 `computed property` 的功能来定义 `getter` 和 `setter`。`get` 方法应返回 `modelValue property`，`set` 方法应该触发相应的事件。

```js
app.component("custom-input", {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  template: `
    <input v-model="value">
  `,
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
```

## 非 Prop 的 Attribute

一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 props 或 emits 定义的 attribute。常见的示例包括 class、style 和 id 属性。

### Attribute 继承

当组件返回单个根节点时，非 prop attribute 将自动添加到根节点的 attribute 中。例如，在 `<date-picker>` 组件的实例中：

```html
app.component('date-picker', { template: `
<div class="date-picker">
  <input type="datetime-local" />
</div>
` })
```

如果我们需要通过 `data-status` attribute 定义 `<date-picker>` 组件的状态，它将应用于根节点 (即 `div.date-picker`)。

```html
<!-- 具有非prop attribute的Date-picker组件-->
<date-picker data-status="activated"></date-picker>

<!-- 渲染 date-picker 组件 -->
<div class="date-picker" data-status="activated">
  <input type="datetime-local" />
</div>
```

同样的规则也适用于事件监听器：

```html
<date-picker @change="submitChange"></date-picker>
```

```js
app.component("date-picker", {
  created() {
    console.log(this.$attrs); // { onChange: () => {}  }
  },
});
```

当有一个具有 change 事件的 HTML 元素将作为 date-picker 的根元素时，这可能会有帮助。

```js
app.component("date-picker", {
  template: `
    <select>
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
  `,
});
```

在这种情况下，`change` 事件监听器从父组件传递到子组件，它将在原生 select 的 `change` 事件上触发。我们不需要显式地从 date-picker 发出事件：

```html
<div id="date-picker" class="demo">
  <date-picker @change="showChange"></date-picker>
</div>
```

```js
const app = Vue.createApp({
  methods: {
    showChange(event) {
      console.log(event.target.value); // 将记录所选选项的值
    },
  },
});
```

### 禁用 Attribute 继承

如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 `inheritAttrs: false`。例如：

禁用 attribute 继承的常见情况是需要将 attribute 应用于根节点之外的其他元素。

通过将 `inheritAttrs` 选项设置为 `false`，你可以访问组件的 `$attrs property`，该 property 包括组件 `props` 和 `emits property` 中未包含的所有属性 (例如，class、style、v-on 监听器等)。

使用上一节中的 date-picker 组件示例，如果需要将所有非 prop attribute 应用于 input 元素而不是根 div 元素，则可以使用 v-bind 缩写来完成。

```js
app.component("date-picker", {
  inheritAttrs: false,
  template: `
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `,
});
```

有了这个新配置，data-status attribute 将应用于 input 元素！

```html
<!-- Date-picker 组件 使用非 prop attribute -->
<date-picker data-status="activated"></date-picker>

<!-- 渲染 date-picker 组件 -->
<div class="date-picker">
  <input type="datetime-local" data-status="activated" />
</div>
```

### 多个根节点上的 Attribute 继承

与单个根节点组件不同，具有多个根节点的组件不具有自动 attribute fallthrough (隐式贯穿) 行为。如果未显式绑定 `$attrs`，将发出运行时警告。

```html
<custom-layout id="custom-layout" @click="changeValue"></custom-layout>
```

```js
// 这将发出警告
app.component("custom-layout", {
  template: `
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  `,
});

// 没有警告，$attrs被传递到<main>元素
app.component("custom-layout", {
  template: `
    <header>...</header>
    <main v-bind="$attrs">...</main>
    <footer>...</footer>
  `,
});
```

## 自定义事件

### 事件名

与组件和 `prop` 一样，事件名提供了自动的大小写转换。如果用驼峰命名的子组件中触发一个事件，你将可以在父组件中添加一个 `kebab-case` (短横线分隔命名) 的监听器。

```js
this.$emit("myEvent");
```

```html
<my-component @my-event="doSomething"></my-component>
```

与 `props` 的命名一样，当你使用 `DOM` 模板时，我们建议使用 `kebab-case` 事件监听器。如果你使用的是字符串模板，这个限制就不适用。

### 定义自定义事件

可以通过 `emits` 选项在组件上定义发出的事件。

```js
app.component("custom-form", {
  emits: ["inFocus", "submit"],
});
```

当在 `emits` 选项中定义了原生事件 (如 `click`) 时，将使用组件中的事件替代原生事件侦听器。

:::tip
建议定义所有发出的事件，以便更好地记录组件应该如何工作。
:::

### 验证抛出的事件

与 prop 类型验证类似，如果使用对象语法而不是数组语法定义发出的事件，则可以验证它。

要添加验证，将为事件分配一个函数，该函数接收传递给 \$emit 调用的参数，并返回一个布尔值以指示事件是否有效。

```js
app.component("custom-form", {
  emits: {
    // 没有验证
    click: null,

    // 验证submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true;
      } else {
        console.warn("Invalid submit event payload!");
        return false;
      }
    },
  },
  methods: {
    submitForm(email, password) {
      this.$emit("submit", { email, password });
    },
  },
});
```

## 插槽(slot)

类似于 React 中的`children`.

### 插槽内容

Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 `<slot>` 元素作为承载分发内容的出口。

它允许你像这样合成组件：

```html
<todo-button>
  Add todo
</todo-button>
```

然后在 `<todo-button>` 的模板中，你可能有：

```html
<!-- todo-button 组件模板 -->
<button class="btn-primary">
  <slot></slot>
</button>
```

当组件渲染的时候，`<slot></slot>` 将会被替换为“Add Todo”。

```html
<!-- 渲染 HTML -->
<button class="btn-primary">
  Add todo
</button>
```

不过，字符串只是开始！插槽还可以包含任何模板代码，包括 HTML：

```html
<todo-button>
  <!-- 添加一个Font Awesome 图标 -->
  <i class="fas fa-plus"></i>
  Add todo
</todo-button>
```

或其他组件

```html
<todo-button>
  <!-- 添加一个图标的组件 -->
  <font-awesome-icon name="plus"></font-awesome-icon>
  Add todo
</todo-button>
```

如果 `<todo-button>` 的 template 中没有包含一个 `<slot>` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃

```html
<!-- todo-button 组件模板 -->

<button class="btn-primary">
  Create a new item
</button>
```

```html
<todo-button>
  <!-- 以下文本不会渲染 -->
  Add todo
</todo-button>
```

### 渲染作用域

当你想在一个插槽中使用数据时，例如：

```html
<todo-button>
  Delete a {{ item.name }}
</todo-button>
```

该插槽可以访问与模板其余部分相同的实例 `property` (即相同的“作用域”)。

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/slot.png" style="width=80%">
</div>

插槽不能访问 `<todo-button>` 的作用域。例如，尝试访问 action 将不起作用：

```html
<todo-button action="delete">
  Clicking here will {{ action }} an item
  <!-- `action` 未被定义，因为它的内容是传递*到* <todo-button>，而不是*在* <todo-button>里定义的。  -->
</todo-button>
```

请记住这条规则：

> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

### 备用内容

有时为一个插槽设置具体的备用 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 `<submit-button>` 组件中：

```html
<button type="submit">
  <slot></slot>
</button>
```

我们可能希望这个 `<button>` 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为备用内容，我们可以将它放在 `<slot>` 标签内：

```html
<button type="submit">
  <slot>Submit</slot>
</button>
```

现在当我们在一个父级组件中使用 `<submit-button>` 并且不提供任何插槽内容时：

```html
<submit-button></submit-button>
```

备用内容“Submit”将会被渲染：

```html
<button type="submit">
  Submit
</button>
```

但是如果我们提供内容：

```html
<submit-button>
  Save
</submit-button>
```

则这个提供的内容将会被渲染从而取代备用内容：

```html
<button type="submit">
  Save
</button>
```

### 具名插槽

有时我们需要多个插槽。例如对于一个带有如下模板的 `<base-layout>` 组件：

```html
<div class="container">
  <header>
    <!-- 我们希望把页头放这里 -->
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
  </footer>
</div>
```

对于这样的情况，`<slot>` 元素有一个特殊的 attribute：name。这个 attribute 可以用来定义额外的插槽：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

一个不带 name 的 `<slot>` 出口会带有隐含的名字“default”。

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

现在 `<template>` 元素中的所有内容都将会被传入相应的插槽。

渲染的 HTML 将会是：

```html
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

注意，`v-slot` 只能添加在 `<template>` 上 (只有一种例外情况)

### 作用域插槽

有时让插槽内容能够访问子组件中才有的数据是很有用的。当一个组件被用来渲染一个项目数组时，这是一个常见的情况，我们希望能够自定义每个项目的渲染方式。

我们有一个组件，包含 todo-items 的列表。

```js
app.component("todo-list", {
  data() {
    return {
      items: ["Feed a cat", "Buy milk"],
    };
  },
  template: `
    <ul>
      <li v-for="(item, index) in items">
        {{ item }}
      </li>
    </ul>
  `,
});
```

只有 `<todo-list>` 组件可以访问 item，我们将从其父组件提供插槽内容。

要使 item 可用于父级提供的插槽内容，我们可以添加一个 `<slot>` 元素并将其作为一个 `attribute` 绑定：

```html
<ul>
  <li v-for="( item, index ) in items">
    <slot :item="item"></slot>
  </li>
</ul>
```

可以根据自己的需要将很多的 attribute 绑定到 `slot` 上。

```html
<ul>
  <li v-for="( item, index ) in items">
    <slot
      :item="item"
      :index="index"
      :another-attribute="anotherAttribute"
    ></slot>
  </li>
</ul>
```

绑定在 `<slot>` 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 `v-slot` 来定义我们提供的插槽 prop 的名字：

```html
<todo-list>
  <template v-slot:default="slotProps">
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.item }}</span>
  </template>
</todo-list>
```

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/scoped-slot.png" style="width: 80%">
</div>

在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 slotProps，但你也可以使用任意你喜欢的名字。

### 独占默认插槽的缩写语法

在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：

```html
<todo-list v-slot:default="slotProps">
  <i class="fas fa-check"></i>
  <span class="green">{{ slotProps.item }}</span>
</todo-list>
```

这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 v-slot 被假定对应默认插槽：

```html
<todo-list v-slot="slotProps">
  <i class="fas fa-check"></i>
  <span class="green">{{ slotProps.item }}</span>
</todo-list>
```

注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：

```html
<!-- 无效，会导致警告 -->
<todo-list v-slot="slotProps">
  <i class="fas fa-check"></i>
  <span class="green">{{ slotProps.item }}</span>

  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</todo-list>
```

只要出现多个插槽，请始终为所有的插槽使用完整的基于 `<template>` 的语法：

```html
<todo-list>
  <template v-slot:default="slotProps">
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.item }}</span>
  </template>

  <template v-slot:other="otherSlotProps">
    ...
  </template>
</todo-list>
```

### 解构插槽 Prop

作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：

这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。你也可以使用 ES2015 解构来传入具体的插槽 prop，如下：

```html
<todo-list v-slot="{ item }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```

这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 `item` 重命名为 `todo`：

```html
<todo-list v-slot="{ item: todo }">
  <i class="fas fa-check"></i>
  <span class="green">{{ todo }}</span>
</todo-list>
```

你甚至可以定义备用内容，用于插槽 prop 是 undefined 的情形：

```html
<todo-list v-slot="{ item = 'Placeholder' }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```

### 动态插槽名

动态指令参数也可以用在 `v-slot` 上，来定义动态的插槽名：

```html
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

### 具名插槽的缩写

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 `v-slot:header` 可以被重写为 `#header`：

```html
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：

```html
<!-- This will trigger a warning -->

<todo-list #="{ item }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```

如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：

```html
<todo-list #default="{ item }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```

## Provide / Inject

通常，当我们需要从父组件向子组件传递数据时，我们使用 `props`。想象一下这样的结构：有一些深度嵌套的组件，而深层的子组件只需要父组件的部分内容。在这种情况下，如果仍然将 `prop` 沿着组件链逐级传递下去，可能会很麻烦。

对于这种情况，我们可以使用一对 `provide` 和 `inject`。无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者。这个特性有两个部分：父组件有一个 `provide` 选项来提供数据，子组件有一个 `inject` 选项来开始使用这些数据。

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/components_provide.png" style="width: 80%">
</div>

例如，我们有这样的层次结构：

```bash
Root
└─ TodoList
   ├─ TodoItem
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```

如果要将 todo-items 的长度直接传递给 `TodoListStatistics`，我们要将 prop 逐级传递下去：`TodoList` -> `TodoListFooter` -> `TodoListStatistics`。通过 `provide/inject` 方法，我们可以直接执行以下操作：

```js
const app = Vue.createApp({});

app.component("todo-list", {
  data() {
    return {
      todos: ["Feed a cat", "Buy tickets"],
    };
  },
  provide: {
    user: "John Doe",
  },
  template: `
    <div>
      {{ todos.length }}
      <!-- 模板的其余部分 -->
    </div>
  `,
});

app.component("todo-list-statistics", {
  inject: ["user"],
  created() {
    console.log(`Injected property: ${this.user}`); // > 注入 property: John Doe
  },
});
```

但是，如果我们尝试在此处 provide 一些组件的实例 property，这将是不起作用的：

```js
app.component("todo-list", {
  data() {
    return {
      todos: ["Feed a cat", "Buy tickets"],
    };
  },
  provide: {
    todoLength: this.todos.length, // 将会导致错误 `Cannot read property 'length' of undefined`
  },
  template: `
    ...
  `,
});
```

要访问组件实例 property，我们需要将 `provide` 转换为返回对象的函数

```js
app.component("todo-list", {
  data() {
    return {
      todos: ["Feed a cat", "Buy tickets"],
    };
  },
  provide() {
    return {
      todoLength: this.todos.length,
    };
  },
  template: `
    ...
  `,
});
```

这使我们能够更安全地继续开发该组件，而不必担心可能会更改/删除子组件所依赖的某些内容。这些组件之间的接口仍然是明确定义的，就像 prop 一样。

实际上，你可以将依赖注入看作是“long range props”，除了：

父组件不需要知道哪些子组件使用它 provide 的 property
子组件不需要知道 inject 的 property 来自哪里

### 处理响应性

在上面的例子中，如果我们更改了 todos 的列表，这个变化并不会反映在 inject 的 todoLength property 中。这是因为默认情况下，provide/inject 绑定并不是响应式的。我们可以通过传递一个 `ref` property 或 `reactive` 对象给 provide 来改变这种行为。在我们的例子中，如果我们想对祖先组件中的更改做出响应，我们需要为 provide 的 todoLength 分配一个组合式 API `computed` property：

```js
app.component("todo-list", {
  // ...
  provide() {
    return {
      todoLength: Vue.computed(() => this.todos.length),
    };
  },
});

app.component("todo-list-statistics", {
  inject: ["todoLength"],
  created() {
    console.log(`Injected property: ${this.todoLength.value}`); // > Injected property: 5
  },
});
```

在这种情况下，任何对 todos.length 的改变都会被正确地反映在注入 todoLength 的组件中。

## 动态组件

### 在动态组件上使用 `keep-alive`

我们之前曾经在一个多标签的界面中使用 `is` attribute 来切换不同的组件：

```html
<component :is="currentTabComponent"></component>
```

当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复渲染导致的性能问题。例如我们来展开说一说这个多标签界面：

重新创建动态组件的行为通常是非常有用的，但是在这个案例中，我们更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个 `<keep-alive>` 元素将其动态组件包裹起来。

```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

## 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 有一个 `defineAsyncComponent` 方法：

```js
const { createApp, defineAsyncComponent } = Vue;

const app = createApp({});

const AsyncComp = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      resolve({
        template: "<div>I am async!</div>",
      });
    })
);

app.component("async-example", AsyncComp);
```

如你所见，此方法接受返回 Promise 的工厂函数。从服务器检索组件定义后，应调用 Promise 的 resolve 回调。你也可以调用 reject(reason)，来表示加载失败。

你也可以在工厂函数中返回一个 Promise，把 webpack 2 和 ES2015 语法相结合后，我们就可以这样使用动态地导入：

```js
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() =>
  import("./components/AsyncComponent.vue")
);

app.component("async-component", AsyncComp);
```

当在局部注册组件时，你也可以使用 defineAsyncComponent

```js
import { createApp, defineAsyncComponent } from "vue";

createApp({
  // ...
  components: {
    AsyncComponent: defineAsyncComponent(() =>
      import("./components/AsyncComponent.vue")
    ),
  },
});
```

### 与 Suspense 一起使用

异步组件在默认情况下是可挂起的。这意味着如果它在父链中有一个 `<Suspense>`，它将被视为该 `<Suspense>` 的异步依赖。在这种情况下，加载状态将由 `<Suspense>` 控制，组件自身的加载、错误、延迟和超时选项都将被忽略。

异步组件可以选择退出 Suspense 控制，并可以在其选项中指定 suspensible:false，让组件始终控制自己的加载状态。

## 模板引用

尽管存在 prop 和事件，但有时你可能仍然需要直接访问 JavaScript 中的子组件。为此，可以使用 `ref` attribute 为子组件或 HTML 元素指定引用 ID。例如：

```html
<input ref="input" />
```

例如，你希望在组件挂载时，以编程的方式 focus 到这个 input 上，这可能有用

```js
const app = Vue.createApp({});

app.component("base-input", {
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
      this.$refs.input.focus();
    },
  },
  mounted() {
    this.focusInput();
  },
});
```

此外，还可以向组件本身添加另一个 `ref`，并使用它从父组件触发 `focusInput` 事件：

```html
<base-input ref="usernameInput"></base-input>
```

```js
this.$refs.usernameInput.focusInput();
```

:::warning
`$refs` 只会在组件渲染完成之后生效。这仅作为一个用于直接操作子元素的“逃生舱”——你应该避免在模板或计算属性中访问 `$refs`。
:::

## 边界情况

### 控制更新

得益于其响应性系统，Vue 总是知道何时更新 (如果你使用正确的话)。但是，在某些边缘情况下，你可能希望强制更新，尽管事实上没有任何响应式数据发生更改。还有一些情况下，你可能希望防止不必要的更新。

#### 强制更新

如果你发现自己需要在 Vue 中强制更新，在 99.99%的情况下，你在某个地方犯了错误。例如，你可能依赖于 Vue 响应性系统未跟踪的状态，比如在组件创建之后添加了 data 属性。

但是，如果你已经排除了上述情况，并且发现自己处于这种非常罕见的情况下，必须手动强制更新，那么你可以使用 `$forceUpdate`。

#### 低级静态组件与 v-once

在 Vue 中渲染纯 HTML 元素的速度非常快，但有时你可能有一个包含很多静态内容的组件。在这些情况下，可以通过向根元素添加 `v-once` 指令来确保只对其求值一次，然后进行缓存，如下所示：

```html
app.component('terms-of-service', { template: `
<div v-once>
  <h1>Terms of Service</h1>
  ... a lot of static content ...
</div>
` })
```

:::tip
再次提醒，不要过度使用这种模式。虽然在需要渲染大量静态内容的极少数情况下使用这种模式会很方便，但除非你注意到先前的渲染速度很慢，否则就没有必要这样做。另外，过度使用这种模式可能会在以后引起很多混乱。例如，假设另一个开发人员不熟悉 v-once 或者只是在模板中遗漏了它。他们可能会花上几个小时来弄清楚为什么模板没有正确更新。
:::
