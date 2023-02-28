# 严格模式

>  ‘use strict’ 是一种 ECMAscript5 添加的（严格）运行模式，这种模式使得 Javascript 在更严格的条件下运行。严格模式的实现使您的程序或函数遵循严格的操作环境

## 目的

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度
- 为未来新版本的Javascript做好铺垫

## 使用

开启严格模式

``` js
// 整个脚本开启严格模式
'use strict'
// ...YOUR CODE
```

``` js
function test() {
  'use strict'
  // 函数级别严格模式语法
  function inner() {
    console.log('...')
  }
}
```

## 规范

### 变量

- 不允许意外创建全局变量
- 不能使用 delete 操作符删除声明变量
- 不用使用保留字（例如 ：implements、interface、let、package、 private、protected、public、static 和 yield 标识符）作为变量名

``` js
// 抛出 ReferenceError
message = "Hello JavaScript! "
```

``` js
var x
// 语法错误
delete x 
```

``` js
// 语法错误
var private = 123
var public = 'hello'
```

### 对象

- 为只读属性赋值会抛出TypeError
- 对不可配置的（nonconfigurable）的属性使用 delete 操作符会抛出TypeError
- 为不可扩展的（nonextensible）的对象添加属性会抛出TypeError
- 使用对象字面量时, 属性名必须唯一

``` js
var obj2 = { get x() { return 17; } }
// TypeError
obj2.x = 5
```

``` js
// TypeError
delete Object.prototype
```

``` js
var fixed = {}
Object.preventExtensions(fixed)
// TypeError
fixed.newProp = "ohai"
```

``` js
// 语法错误
var o = { p: 1, p: 2 }
```

### 函数

- 要求命名函数的参数必须唯一

``` js
// 语法错误
function sum(a, a, c) {
  return a + a + c; 
}
```

### eval & arguments

- eval不在为上下文中创建变量或函数
- eval 和 arguments 不能通过程序语法被绑定(be bound)或赋值
- 参数的值不会随 arguments 对象的值的改变而变化
- 禁止使用arguments.callee

``` js
function doSomething(){
  eval("var x=10")
  // TypeError
  alert(x)
}
```

``` js
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function("arguments", "'use strict'; return 17;")
```

``` js
function f(a) {
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

``` js
var f = function() { 
  return arguments.callee
}
f()
```

### 禁止在函数内部遍历调用栈

``` js
function restricted() {
  // TypeError
  restricted.caller
  // TypeError
  restricted.arguments
}
```

### 静态绑定

- 禁止使用`with`语句
- `eval()`声明变量和函数只能当前`eval`内部的作用域中有效

``` js
var x = 17;
with (obj) { // !!! 语法错误
  // 如果没有开启严格模式，with中的这个x会指向with上面的那个x，还是obj.x？
  // 如果不运行代码，我们无法知道，因此，这种代码让引擎无法进行优化，速度也就会变慢。
  x;
}
```

``` js
var result = eval("var x=10, y=11; x+y")
// 21
alert(result)
```

### this指向

- 全局作用域的函数中的this不再指向全局而是undefined
- 如果使用构造函数时，如果忘了加new，this不再指向全局对象，而是undefined报错

``` js
function bar() {
  console.log(this)
}
// undefined
bar() 
```

``` js
function Person() {
  // Uncaught TypeError: Cannot set property 'name' of undefined
  this.name = "Vincent" 
}

Person() // 报错，使用构造函数时，如果忘了加new，this不再指向全局对象，而是undefined.name
```

## 参考

- [严格模式](https://juejin.cn/post/6844904120214618120)





