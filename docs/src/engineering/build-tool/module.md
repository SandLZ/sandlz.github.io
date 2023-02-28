# 模块化
## 前言

在大多数程序语言中（如C、C++、Java），开发者都可以直接使用模块化进行开发。

工程中的各个模块在经过编译、链接等过程后会被整合成单一的可执行文件并交由系统运行。
对于 JavaScript 来说，情况则有所不同。在过去的很长一段时间里，JavaScript 这
门语言并没有模块这一概念。如果工程中有多个JS 文件，我们只能通过script 标签将它们一个个插入页面中。

为何偏偏 JavaScript没有模块呢? 如果要追溯历史原因，JavaScript 之父——
Brendan Eich 最初设计这门语言时只是将它定位成一个小型的脚本语言，用来实现网页
上一些简单的动态特性，远没有考虑到会用它实现今天这样复杂的场景，模块化当然也就显得多余了。


本文内容主要有理解模块化，为什么要模块化，模块化的优缺点以及模块化规范,并且介绍下开发中最流行的`CommonJS`, `AMD`, `ES6`、`CMD`规范。

## 发展历史

从 2009年开始，JavaScript社区开始对模块化进行不断的尝试，并依次出现了 **AMD**、**CommonJS**、**CMD** 等解决方案。但这些都只是由社区提出的，并不能算语言本
身的特性。而在 2015年，ECMAScript 6.0（**ES6**）正式定义了JavaScript模块标准，使这门语言在诞生了 20年之后终于拥有了模块这一概念。

ES6模块标准目前已经得到了大多数现代浏览器的支持，但在实际应用方面还需要等待一段时间。主要有以下几点原因∶

- 无法使用`code splitting` 和 `tree shaking`（Webpack 的两个特别重要的特性，之后
的章节会介绍）。
- 大多数 npm模块还是CommonJS的形式，而浏览器并不支持其语法，因此这些
包没有办法直接拿来用。
- 仍然需要考虑个别浏览器及平台的兼容性问题。

## 模块化的理解

### 1. 什么是模块化？

- 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
- 块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信

### 2. 模块化的发展过程

- 全局`function`模式
  - 编码：将不同的功能封装成不同的全局函数
  - 问题：污染全局命名空间，容易引起命名冲突或数据不安全；模块成员之间看不出直接关系

```js
function method1() {
  // ...
}

function method2() {
  // ...
}
```

- `namespace`模式
  - 编码：简单对象封装
  - 作用：减少了全局变量；解决命名冲突
  - 问题：数据不安全（外部可直接修改模块内部的数据）

```js
let moduleOne = {
  data: "123",
  foo() {
    // ...
  },
  bar() {
    // ...
  },
};

// 可直接修改模块内部的数据
moduleOne.data = "str";
```

上述写法会暴露所有模块的成员，内部状态可以被外部改写

- `IIFE`：匿名函数自调用(闭包)
  - 编码：数据是私有的，外部只能通过暴露的方法操作
  - 作用：将数据和行为封装到一个函数内部，通过给`window`添加属性向外部暴露接口
  - 问题：如果当前这个模块依赖另一个模块怎么处理？

```js
// module.one.js
(function(window) {
  let data = "123";

  function foo() {
    // ...
  }

  function bar() {
    // ...
  }

  // 暴露接口
  window.moduleOne = { foo, bar };
})(window);
```

```html
<!-- index.html -->
<script type="text/javascript" src="./module.one.js"></script>
<script>
  moduleOne.foo();
  moduleOne.bar();
  // undefined 不能访问模块内部的数据
  console.log(moduleOne.data);
</script>
```

- `IIFE`模式：引入依赖（现代模块实现的基石）

```js
// module.one.js
(function(window, $) {
  let data = "123";
  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log(`foo() ${data}`);
    $("body").css("background", "red");
  }
  function bar() {
    //用于暴露有函数
    console.log(`bar() ${data}`);
    otherFun(); //内部调用
  }
  function otherFun() {
    //内部私有的函数
    console.log("otherFun()");
  }
  //暴露行为
  window.moduleOne = { foo, bar };
})(window, jQuery);
```

```html
<!-- index.html -->
<!-- 引入的js必须有一定顺序 -->
<script type="text/javascript" src="jquery-1.10.1.js"></script>
<script type="text/javascript" src="module.one.js"></script>
<script type="text/javascript">
  moduleOne.foo();
</script>
```

上例子通过`jquery`方法将页面的背景颜色改成红色，所以必须先引入`jQuery`库，就把这个库当作参数传入。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。

### 3. 模块化的好处

- 避免命名冲突（减少命名空间污染）
- 更好的分离，按需加载
- 复用性
- 维护性

### 4. 引入多个模块`<script>`问题

- 请求过多：依赖多个模块，发送多个请求
- 依赖模糊：不知道具体的依赖关系，容易导致加载先后顺序出错
- 难以维护：上述原因导致了难维护，很可能出现牵一发而动全身的问题

模块化固然有多个好处，然而一个页面需要引入多个`js`文件，就会出现以上这些问题。而这些问题可以通过模块化规范来解决，下面介绍开发中最流行的`commonjs`, `AMD`, `ES6`, `CMD`规范。

## 模块化规范

### 1. CommonJS

#### (1) 概述

`Node` 应用由模块组成，采用 `CommonJS` 模块规范。每个文件就是一个模块，有自己的作用域。

在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

在服务器端，模块的加载是运行时同步加载的；在浏览器端，模块需要提前编译打包处理。

#### (2) 特点

- 有代码都运行在模块作用域，不会污染全局作用域
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存
- 模块加载的顺序，按照其在代码中出现的顺序

#### （3）语法

- 暴露模块：`module.exports = value` 或 `exports.xxx = value`
- 引入模块：`require(xxx)`,如果是第三方模块，xxx 为模块名；如果是自定义模块，xxx 为模块文件路径

此处我们有个疑问：`CommonJS`暴露的模块到底是什么?

`CommonJS`规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。

运行下面的代码：

```js
// module.a.js
let x = 5;
let addX = (value) => {
  return x + value;
};

module.exports = {
  x,
  addX,
};
```

```js
// module.b.js
const moduleA = require("./module.a.js");

console.log(moduleA.x); // 5
console.log(moduleA.addX(5)); // 10
console.log(moduleA);
```

`require` 命令用于加载模块文件。require 命令的基本功能是，读入并执行一个 `JavaScript` 文件，然后返回该模块的 `exports` 对象。如果没有发现指定模块，会报错

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/aBALD3.png" style="width=80%" />
</div>

#### （4）模块的加载机制

`CommonJS`模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。这点与`ES6`模块化有重大差异（下文会介绍），请看下面这个例子

```js
// module.a.js
let x = 5;
let addX = (value) => {
  return x + value;
};

let xPlus = () => {
  x++;
};

module.exports = {
  x,
  addX,
  xPlus,
};
```

```js
// module.b.js
const x = require("./module.a").x;
const xPlus = require("./module.a").xPlus;

console.log(x); // 5
xPlus();
console.log(x); // 5
```

上面代码说明，`x` 输出以后，`module.a.js` 模块内部的变化就影响不到 `x` 了。这是因为 `x` 是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。

#### （5）`exports` 与 `module.exports`

正常情况下， `exports` 与 `module.exports`并无区别，其内在机制是**将exports 指向了 module.exports**

`module。exports` 在初始化时是一个空对象，可以简单的理解为，CommonJS在每个模块的首部默认添加以下代码：

```js
var module = {
  exports: {}
};

var exports = module.exports
```

因此， 为`exports.add` 赋值相当于在 `module.exports`对象上添加了一个属性。

:::warning
**不要给 `exports` 赋值**： 会导致其失效。
:::

##### 错误示例
###### 1. 直接赋值

```js
exports = {
  name: 'xxx'
}
```

上面代码中，由于对 `exports` 进行了赋值操作，使其指向了新的对象，`module. exports` 却仍然是原来的空对象，因此 `name` 属性并不会被导出。

###### 2. 不恰当的混用

```js
exports.add = function(a, b) {
  return a + b;
};

module.exports = {
  name: 'xxx'
}
```

上面的代码先通过 `exports` 导出了 `add` 属性，然后将 `module.exports` 重新赋值为另外一个对象。这会导致原本拥有 `add` 属性的对象丢失了，最后导出的只有 `name`。

另外，要注意导出语句不代表模块的末尾，在 `module.exports` 或 `exports` 后面的代码依旧会照常执行。比如下面的console 会在控制台上打出"end"∶

```js
module.exports ={name:'calculater'9;
console.log ('end');
```

在实际使用中，为了提高可读性，不建议采取上面的写法，而是**应该将`module. exports` 及 `exports` 语句放在模块的末尾**。



#### （6）浏览器端实现（借助 Browserify）

(1) 创建项目

```bash
|-js
  |-dist //打包生成文件的目录
  |-src //源码所在的目录
    |-module1.js
    |-module2.js
    |-module3.js
    |-app.js //应用主源文件
|-index.html //运行于浏览器上
|-package.json
  {
    "name": "browserify-test",
    "version": "1.0.0"
  }
```

```bash
yarn add -D browserify
```

(2) 打包处理 js

```bash
browserify js/src/app.js -o js/dist/bundle.js
```

(3) 引入 js

在 index.html 文件中引入`<script type="text/javascript" src="js/dist/bundle.js"></script>`

### AMD

`CommonJS` 规范加载模块是`同步`的，也就是说，只有加载完成，才能执行后面的操作。`AMD`规范则是`非同步`加载模块，允许指定回调函数。由于`Node.js`主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以`CommonJS`规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用 `AMD` 规范。此外`AMD`规范比`CommonJS`规范在浏览器端实现要来着早。

#### (1)`AMD` 规范基本语法

定义暴露模块：

```js
//定义没有依赖的模块
define(function() {
  return 模块;
});
```

```js
//定义有依赖的模块
define(["module1", "module2"], function(m1, m2) {
  return 模块;
});
```

引入使用模块：

```js
require(['module1', 'module2'], function(m1, m2){
   使用m1、m2
})
```

`RequireJS` 是一个工具库，主要用于客户端的模块管理。它的模块管理遵守 AMD 规范，`RequireJS` 的基本思想是，通过`define`方法，将代码定义为模块；通过`require`方法，实现代码的模块加载。
接下来介绍`AMD`规范在浏览器实现的步骤：

① 安装 `require.js`
② 创建项目

```bash
|-js
  |-libs
    |-require.js
  |-modules
    |-alerter.js
    |-dataService.js
  |-main.js
|-index.html
```

③ 定义模块

```js
// dataService.js文件
// 定义没有依赖的模块
define(function() {
  let msg = "www.baidu.com";
  function getMsg() {
    return msg.toUpperCase();
  }
  return { getMsg }; // 暴露模块
});
```

```js
//alerter.js文件
// 定义有依赖的模块
define(["dataService"], function(dataService) {
  let name = "Tom";
  function showMsg() {
    alert(dataService.getMsg() + ", " + name);
  }
  // 暴露模块
  return { showMsg };
});
```

```js
// main.js文件
(function() {
  require.config({
    baseUrl: "js/", //基本路径 出发点在根目录下
    paths: {
      //映射: 模块标识名: 路径
      alerter: "./modules/alerter", //此处不能写成alerter.js,会报错
      dataService: "./modules/dataService",
    },
  });
  require(["alerter"], function(alerter) {
    alerter.showMsg();
  });
})();
```

```html
// index.html文件
<!DOCTYPE html>
<html>
  <head>
    <title>Modular Demo</title>
  </head>
  <body>
    <!-- 引入require.js并指定js主文件的入口 -->
    <script data-main="js/main" src="js/libs/require.js"></script>
  </body>
</html>
```

④ 引入`require.js`模块
此外在项目中如何引入第三方库？只需在上面代码的基础稍作修改：

```js
// alerter.js文件
define(["dataService", "jquery"], function(dataService, $) {
  let name = "Tom";
  function showMsg() {
    alert(dataService.getMsg() + ", " + name);
  }
  $("body").css("background", "green");
  // 暴露模块
  return { showMsg };
});
```

```js
// main.js文件
(function() {
  require.config({
    baseUrl: "js/", //基本路径 出发点在根目录下
    paths: {
      //自定义模块
      alerter: "./modules/alerter", //此处不能写成alerter.js,会报错
      dataService: "./modules/dataService",
      // 第三方库模块
      jquery: "./libs/jquery-1.10.1", //注意：写成jQuery会报错
    },
  });
  require(["alerter"], function(alerter) {
    alerter.showMsg();
  });
})();
```

上例是在`alerter.js`文件中引入`jQuery`第三方库，`main.js`文件也要有相应的路径配置。
AMD 模块定义的方法清晰，不会污染全局环境，能够清楚地显示依赖关系。AMD 模式可以用于浏览器环境，并且允许非同步加载模块，也可以根据需要动态加载模块。

### `CMD`

`CMD` 规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。`CMD` 规范整合了`CommonJS`和`AMD`规范的特点。在 `Sea.js` 中，所有 `JavaScript` 模块都遵循 `CMD` 模块定义规范。

#### (1) `CMD`规范基本语法

定义暴露模块：

```js
//定义没有依赖的模块
define(function(require, exports, module) {
  exports.xxx = value;
  module.exports = value;
});
```

```js
//定义有依赖的模块
define(function(require, exports, module) {
  //引入依赖模块(同步)
  var module2 = require("./module2");
  //引入依赖模块(异步)
  require.async("./module3", function(m3) {});
  //暴露模块
  exports.xxx = value;
});
```

引入使用模块：

```js
define(function(require) {
  var m1 = require("./module1");
  var m4 = require("./module4");
  m1.show();
  m4.show();
});
```

#### (2)`sea.js` 简单使用教程

① 安装`sea.js`
② 创建项目

```bash
|-js
  |-libs
    |-sea.js
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
    |-module4.js
    |-main.js
|-index.html
```

③ 定义`sea.js`的模块代码

```js
// module1.js文件
define(function(require, exports, module) {
  //内部变量数据
  var data = "atguigu.com";
  //内部函数
  function show() {
    console.log("module1 show() " + data);
  }
  //向外暴露
  exports.show = show;
});
```

```js
// module2.js文件
define(function(require, exports, module) {
  module.exports = {
    msg: "I Will Back",
  };
});
```

```js
// module4.js文件
define(function(require, exports, module) {
  //引入依赖模块(同步)
  var module2 = require("./module2");
  function show() {
    console.log("module4 show() " + module2.msg);
  }
  exports.show = show;
  //引入依赖模块(异步)
  require.async("./module3", function(m3) {
    console.log("异步引入依赖模块3  " + m3.API_KEY);
  });
});
```

```js
// main.js文件
define(function(require) {
  var m1 = require("./module1");
  var m4 = require("./module4");
  m1.show();
  m4.show();
});
```

④ 在 index.html 中引入

```html
<script type="text/javascript" src="js/libs/sea.js"></script>
<script type="text/javascript">
  seajs.use("./js/modules/main");
</script>
```

### `ES6` 模块

`ES6` 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。`CommonJS` 和 `AMD` 模块，都只能在运行时确定这些东西。比如，`CommonJS` 模块就是对象，输入时必须查找对象属性。

#### (1)`ES6` 模块化语法

`export` 命令用于规定模块的对外接口，`import` 命令用于输入其他模块提供的功能。

```js
/** 定义模块 math.js **/
var basicNum = 0;
var add = function(a, b) {
  return a + b;
};
export { basicNum, add };
```

```js
/** 引用模块 **/
import { basicNum, add } from "./math";
function test(ele) {
  ele.textContent = add(99 + basicNum);
}
```

如上例所示，使用 `import` 命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到`export default` 命令，为模块指定默认输出。

```js
// export-default.js
export default function() {
  console.log("foo");
}
```

```js
// import-default.js
import customName from "./export-default";
customName(); // 'foo'
```

模块默认输出, 其他模块加载该模块时，import 命令可以为该匿名函数指定任意名字。

#### (2)`ES6` 模块与 `CommonJS` 模块的差异

它们有两个重大差异：

① `CommonJS` 模块输出的是一个值的拷贝，`ES6` 模块输出的是值的引用。

② `CommonJS` 模块是运行时加载，`ES6` 模块是编译时输出接口。

第二个差异是因为 `CommonJS` 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完才会生成。而 `ES6` 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

下面重点解释第一个差异，我们还是举上面那个`CommonJS`模块的加载机制例子:

```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}
// main.js
import { counter, incCounter } from "./lib";
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```

`ES6` 模块的运行机制与 `CommonJS` 不一样。ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

## 总结

- `CommonJS` 规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了`AMD` `CMD`解决方案。
- `AMD` 规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，`AMD` 规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。
- `CMD` 规范与 `AMD` 规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在`Node.js`中运行。不过，依赖`SPM` 打包，模块的加载逻辑偏重
- `ES6` 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 `CommonJS` 和 `AMD` 规范，成为浏览器和服务器通用的模块解决方案。

| 规范           | 同/异步 | 特点             | 导出                                                                                              | 引入                                                                                     | 备注                                           |
| -------------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **commonJS**   | 同步    | 值的拷贝<br>缓存 | `module.exports = value` <br> `module.exports = {key: value}` <br> ~~不推荐 exports.key = value~~ | require(key OR path)                                                                     | **服务端**常用<br>浏览器端需借助**Browserify** |
| **AMD**        | 异步    |                  | `define(['moduleA', 'moduleB'], function(m1, m2) {`<br>`return value` <br> `})`                   | `require('moduleC', function($moduleC){})`                                               | 可使用 requireJS                               |
| **CMD**        | 异步    |                  | `define(function(require, exports, module){` <br>`module.exports = value`<br>`})`                 | `var module2 = require('./module2')` <br> `require.async('./module3', function (m3) {})` | 可使用 seajs                                   |
| **ES6 Module** | 异步    | 值的引用         | `export {key : value}`<br>`export default {value, value2}`                                        | `import {key}` <br> `import 'lib' lib.value`                                             |

本文转载自[前端模块化详解(完整版)](https://segmentfault.com/a/1190000017466120)