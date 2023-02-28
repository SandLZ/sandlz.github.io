# 命名

## 使用无嵌套的纯类名选择器

1. CSS选择器是从右向左进行匹配，如`.box > div`是先匹配所有`<div>`元素，再匹配`.box`类名元素；
2. 优先级混乱；
3. 布局脆弱（修改时）；

```css
.box {}
.box .pic {}
.box .pic .desc {}
```

**to**

```css
.cs-box {}
.cs-box-pic {}
.cs-box-pic-desc {}
```

## 面向属性的命名

复用

```css
.dn { display: none; }
.db { display: block; }
.ml20 { margin-left: 20px; }
```

## 状态类名

场景
- 禁用
- 选中
- 激活

::: tip
使用`.active` 、`.checked`等表示状态的类名进行交互控制
:::

当后期更改激活样式时，只需修改`CSS`即可.

## 汇总

### 命名书写

1. 建议使用小写，使用英文单词或缩写(推荐)，对于专有名词，可使用拼音，如：`.cs-logo-weibo {}`,
   不建议使用驼峰命名，驼峰命名建议专门给`JS Dom`使用, 便于和`CSS`样式区分；
2. 组合命名，可以**短横线**或**下划线**连接，也可以组合使用，也可以连续使用，只要在同一项目中保持一致即可；
   ```css
   .cs-logo-weibo {}
   .cs_logo_weibo {}
   .cs-logo--weibo {}
   .cs-logo__weibo {}
   ```
   组合个数不要超过**5**个；
3. 设置**统一前缀**，强化品牌的同时避免冲突：
   ```css
   .cs-header {}
   .cs-logo {}
   ```  
### 选择器类型

CSS分为3个部分：
- CSS 重置样式
- CSS 基础样式
- CSS 交互变化样式

1. 重置样式
使用**标签选择器**或**属性选择器**等

```css
body, p { margin: 0; }

[type="radio"],
[type="checkbox"] {
  border: none;
}
```

2. 基础样式
全部使用类选择器，没有层级，没有标签

```css
.cs-module .img {}
.cs-module-ul > li {}
```

**to**

```css
.cs-module-img {}
.cs-module-li {}
```

3. 交互变化样式

```css
.cs-content.active {
  height; auto
}
.active > .cs-content-more {
  display: none;
}
```

- 无标签，无层级
- 状态类名标识符
- 面向属性命名的CSS样式库


