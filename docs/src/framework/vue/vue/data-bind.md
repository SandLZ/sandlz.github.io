# 双向绑定

> Vue 通过`数据劫持` + `发布订阅模式`实现数据的双向绑定.

原理：`Object.defineProperty`来劫持各个属性的`getter`、`setter`，在数据变动时发送消息给订阅者，触发相应的监听回调。

## 流程梳理

1. 实现一个数据监听器`Observer`，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
2. 实现一个指令解析器`Compile`，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
3. 实现一个`Watcher`，作为连接`Observer`和`Compile`的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图

![流程](https://gitee.com/sandlz/images/raw/master/uPic/2.png)

### Observer

利用`Object.defineProperty`来监听属性的变化，需要将数据对象递归遍历，包括子属性对象的属性，这样属性值变化后，会触发`setter`，就可以监听到属性的变化。

```js
let data = { name: "xxx", info: { address: "aaa" } };
observe(data);
data.name = "yyy";

function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  // 对所有属性遍历
  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key]);
  });
}

function defineReactive(data, key, val) {
  // 监听子属性
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
    configurable: false, // 不能再define
    get: function() {
      return val;
    },
    set: function(newVal) {
      console.log("监听到值变化了 ", val, " --> ", newVal);
      val = newVal;
    },
  });
}
```

我们已经可以监听每个数据的变化了，那么监听到变化之后就是怎么通知订阅者?
所以接下来我们需要实现一个消息订阅器，很简单，维护一个数组，用来收集订阅者，数据变动触发 notify，再调用订阅者的 update 方法

明确订阅者应该是`Watcher`, 而且`var dep = new Dep()`;是在`defineReactive`方法内部定义的，所以想通过 dep 添加订阅者，就必须要在闭包内操作，所以我们可以在`getter`里面动手脚
Observer.js

```js
function defineReactive(data, key, val) {
  let dep = new Dep();
  // 监听子属性
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
    configurable: false, // 不能再define
    get: function() {
      // 由于需要在闭包内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher, 添加完移除
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set: function(newVal) {
      console.log("监听到值变化了 ", val, " --> ", newVal);
      val = newVal;
      // 通知订阅者
      dep.notify();
    },
  });
}

function Dep() {
  this.subs = [];
}

Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
  },
  depend: function() {
    Dep.target.addDep(this);
  },
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update();
    });
  },
};
```

Watcher.js

```js
Watcher.prototype = {
  get: function(key) {
    Dep.target = this;
    // 这里会触发属性的getter，从而添加订阅者
    this.value = data[key];
    Dep.target = null;
  },
};
```

### Compile

`Compile`主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

![](https://gitee.com/sandlz/images/raw/master/uPic/3.png)

因为遍历解析的过程有多次操作`dom`节点，为提高性能和效率，会先将`vue`实例根节点的`el`转换成文档碎片`fragment`进行解析编译操作，解析完成，再将`fragment`添加回原来的真实 dom 节点中

```js
function Compile(el) {
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);
  if (this.$el) {
    this.$fragment = this.node2Fragment(this.$el);
    this.init();
    this.$el.appendChild(this.$fragment);
  }
}
Compile.prototype = {
  init: function() {
    this.compileElement(this.$fragment);
  },
  node2Fragment: function(el) {
    var fragment = document.createDocumentFragment(),
      child;
    // 将原生节点拷贝到fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  },
};
```

`compileElement`方法将遍历所有节点及其子节点，进行扫描解析编译，调用对应的指令渲染函数进行数据渲染，并调用对应的指令更新函数进行绑定，详看代码及注释说明：

```js
Compile.prototype = {
  // ... 省略
  compileElement: function(el) {
    var childNodes = el.childNodes,
      me = this;
    [].slice.call(childNodes).forEach(function(node) {
      var text = node.textContent;
      var reg = /\{\{(.*)\}\}/; // 表达式文本
      // 按元素节点方式编译
      if (me.isElementNode(node)) {
        me.compile(node);
      } else if (me.isTextNode(node) && reg.test(text)) {
        me.compileText(node, RegExp.$1);
      }
      // 遍历编译子节点
      if (node.childNodes && node.childNodes.length) {
        me.compileElement(node);
      }
    });
  },

  compile: function(node) {
    var nodeAttrs = node.attributes,
      me = this;
    [].slice.call(nodeAttrs).forEach(function(attr) {
      // 规定：指令以 v-xxx 命名
      // 如 <span v-text="content"></span> 中指令为 v-text
      var attrName = attr.name; // v-text
      if (me.isDirective(attrName)) {
        var exp = attr.value; // content
        var dir = attrName.substring(2); // text
        if (me.isEventDirective(dir)) {
          // 事件指令, 如 v-on:click
          compileUtil.eventHandler(node, me.$vm, exp, dir);
        } else {
          // 普通指令
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
        }
      }
    });
  },
};

// 指令处理集合
var compileUtil = {
  text: function(node, vm, exp) {
    this.bind(node, vm, exp, "text");
  },
  // ...省略
  bind: function(node, vm, exp, dir) {
    var updaterFn = updater[dir + "Updater"];
    // 第一次初始化视图
    updaterFn && updaterFn(node, vm[exp]);
    // 实例化订阅者，此操作会在对应的属性消息订阅器中添加了该订阅者watcher
    new Watcher(vm, exp, function(value, oldValue) {
      // 一旦属性值有变化，会收到通知执行此更新函数，更新视图
      updaterFn && updaterFn(node, value, oldValue);
    });
  },
};

// 更新函数
var updater = {
  textUpdater: function(node, value) {
    node.textContent = typeof value == "undefined" ? "" : value;
  },
  // ...省略
};
```

这里通过递归遍历保证了每个节点及子节点都会解析编译到，包括了{{}}表达式声明的文本节点。指令的声明规定是通过特定前缀的节点属性来标记，如`<span v-text="content" other-attr中v-text便是指令，而other-attr不是指令，只是普通的属性`。
监听数据、绑定更新函数的处理是在`compileUtil.bind()`这个方法中，通过`new Watcher()`添加回调来接收数据变化的通知

### Watcher

`Watcher`订阅者作为`Observer`和`Compile`之间通信的桥梁，主要做的事情是:

1. 在自身实例化时往属性订阅器`(dep)`里面添加自己
2. 自身必须有一个`update()`方法
3. 待属性变动`dep.notice()`通知时，能调用自身的`update()`方法，并触发`Compile`中绑定的回调。

```js
function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解
  this.value = this.get();
}
Watcher.prototype = {
  update: function() {
    this.run(); // 属性值变化收到通知
  },
  run: function() {
    var value = this.get(); // 取到最新值
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图
    }
  },
  get: function() {
    Dep.target = this; // 将当前订阅者指向自己
    var value = this.vm[exp]; // 触发getter，添加自己到属性订阅器中
    Dep.target = null; // 添加完毕，重置
    return value;
  },
};

// 这里再次列出Observer和Dep，方便理解
Object.defineProperty(data, key, {
  get: function() {
    // 由于需要在闭包内添加watcher，所以可以在Dep定义一个全局target属性，暂存watcher, 添加完移除
    Dep.target && dep.addDep(Dep.target);
    return val;
  },
  // ... 省略
});

Dep.prototype = {
  notify: function() {
    this.subs.forEach(function(sub) {
      // 调用订阅者的update方法，通知变化
      sub.update();
    });
  },
};
```

实例化`Watcher`的时候，调用`get()`方法，通过`Dep.target = watcherInstance`标记订阅者是当前`watcher`实例，强行触发属性定义的`getter`方法，`getter`方法执行的时候，就会在属性的订阅器 dep 添加当前`watcher`实例，从而在属性值有变化的时候，`watcherInstance`就能收到更新通知

## 数组处理

以 `Array.prototype` 为原型，创建了一个 `arrayMethods` 的对象（ `Object.create（Array.prototype）`），然后使用了一个强硬的手段，es6 的语法，`Object.setPrototypeOf(obj, arrayMethods)`，强制的让 数组 的原型 **proto**指向了 arrayMethods，这样就会触发重写的数组方法。

Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

针对问题一：

```js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue);

// 或者 Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue);
```

你也可以使用 `vm.$set` 实例方法，该方法是全局方法 `Vue.set` 的一个别名：

```js
vm.$set(vm.items, indexOfItem, newValue);
```

针对问题二：

```js
vm.items.splice(newLength);
```

## 问题

### 动态添加响应式 `property`

对于已经创建的实例，Vue 不允许动态添加根级别的响应式 `property`。但是，可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式 `property`。例如，对于：

```js
Vue.set(vm.someObject, "b", 2);
```

您还可以使用 `vm.$set` 实例方法，这也是全局 `Vue.set` 方法的别名：

```js
this.$set(this.someObject, "b", 2);
```

有时你可能需要为已有对象赋值多个新 property，比如使用 `Object.assign()` 或 `_.extend()`。但是，这样添加到对象上的新 `property` 不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的 property 一起创建一个新的对象。

```js
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 });
```

## 参考

- [MVVM](https://juejin.cn/post/6844903854740340749)
- [源码](https://github.com/DMQ/mvvm)
