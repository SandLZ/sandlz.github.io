# 变量

```css
:root {
  --main-text-color: #ff6a00;
}
```

```css
.text {
  color: var(--main-text-color);
}
```

## 语法

```
var(value, backValue)
```

```css
.first {
  /* 当前文字的颜色为red，因为--color不在当前元素内，也不再当前父元素内 */
  color: var(--color, red);
  /* 当前文字的颜色为--main-text-color，如果--main-text-color不存在时，文字颜色为red */
  color: var(--color, var(--main-text-color, red));
  /* 当前文字的颜色为 red,white ，所以说var()只可以使用两个参数 */
  color: var(--color, red, white);
}
```

## 作用域

- 子级可以访问父级的变量
- root 可全局访问

## JS 操作变量

通过 JavaScript 获取和设置 JavaScript 变量的具体步骤如下，

- 获取指定 DOM 节点

- 通过 `getComputedStyle()` 方法获取当前 DOM 节点的 `CSSStyleDeclaration`对象

- 通过 `CSSStyleDeclaration.getPropertyValue(变量名/属性名)` 获取指定的变量值

- 通过 `Element.style.setProperty()` 修改或者设置一个变量的值
