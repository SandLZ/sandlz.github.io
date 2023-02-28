# 居中

[[toc]]

## 水平居中

1. `text-align:center`

在父元素中设置`text-align:center`实现行内元素水平居中，将子元素的`display`设置为`inline-block`，使子元素变成行内元素

```css
<style>
.parent{text-align: center;}
.child{display: inline-block;}
</style>
```

<style>
.parent{text-align: center;}    
.child{display: inline-block;}
</style>
<div class="parent" style="background-color: gray;">
  <div class="child" style="background-color: lightblue;">水平居中: text-align</div>
</div>

不足：子元素的`text-align`继承了父元素的`center`，文字也居中显示，所以需要在子元素中设置`text-align:left`

2. `margin`

在本身元素设置`margin: 0 auto`实现块级元素水平居中

2.1 将子元素的`display`为`table`，使子元素成为块级元素，同时`table`还具有包裹性，宽度由内容撑开

```css
<style>
.child{
    display: table;
    margin: 0 auto;
}
</style>
```

<style>
.child{
    display: table;
    margin: 0 auto;
}
</style>

<div class="parent" style="background-color: gray;">
  <div class="child" style="background-color: lightblue;">水平居中: margin</div>
</div>

2.2 若子元素定宽，则可以使用绝对定位的盒模型属性，实现居中效果；若不设置宽度时，子元素被拉伸

```css
<style>
.parent{
  position: relative;
}
.child{
 position: absolute;
 left: 0;
 right: 0;
 margin: 0 auto;
 width: 50px;
}
</style>
```

<style>
.parent{
  position: relative;
}
.child2{
 position: absolute;
 left: 0;
 right: 0;
 margin: 0 auto;
 width: 200px;
}
</style>

<div class="parent" style="background-color: gray;height: 20px;">
    <div class="child2" style="background-color: lightblue;">水平居中: margin</div>   
</div>

3. `absolute`

通过绝对定位的偏移属性实现水平居中

3.1 配合`translate()`位移函数

`translate`函数的百分比是相对于自身宽度的，所以`left:50%`配合`translateX(-50%)`可实现居中效果

`relative` 数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为 `absolute`，所以若使用 `relative`，则需要增加一层`<div>`结构，使其宽度与子元素宽度相同.

```css
<style>
.parent{
  position: relative;
}
.child{
  position: absolute;
  left: 50%;
  transform:translateX(-50%);
}
</style>
```

<style>
.parent{
  position: relative;
} 
.child3{
  position: absolute;
  left: 50%;
  transform:translateX(-50%);
}
</style>

  <div class="parent" style="background-color: gray;height: 20px;">
    <div class="child3" style="background-color: lightblue;">水平居中: translate</div>
  </div>

3.2 配合`relative`

`relative`数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为`absolute`，所以若使用`relative`，则需要增加一层`<div>`结构，使其宽度与子元素宽度相同

:::tip
该方法全兼容，但是增加了 html 结构
:::

```css
<style>
.parent{
  position: relative;
}
.childWrap{
  position: absolute;
  left: 50%;
}
.child{
  position: relative;
  left: -50%;
}
</style>
```

<style>
.parent{
  position: relative;
}
.childWrap{
  position: absolute;
  left: 50%;
}
.child4{
  position: relative;
  left: -50%;
}
</style>

<div class="parent" style="background-color: gray;height: 20px;">
  <div class="childWrap">
    <div class="child4" style="background-color: lightblue;">水平居中: 配合relative</div> 
  </div>   
</div>

3.3 配合负`margin`

`relative`数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为`absolute`，所以若使用`relative`，则需要增加一层`<div>`结构，使其宽度与子元素宽度相同

`margin`的百分比是相对于包含块的，所以需要增加一层`<div>`结构。由于宽度`width`的默认值是`auto`，当设置负`margin`时，`width`也会随着变大。所以此时需要`定宽`处理

:::tip
虽然全兼容，但需要增加页面结构及定宽处理，所以限制了应用场景
:::

```css
<style>
.parent{
  position: relative;
}
.childWrap{
  position: absolute;
  left: 50%;
}
.child{
  width:50px;
  margin-left:-50%;
}
</style>
```

<style>
.parent{
  position: relative;
}
.childWrap5{
  position: absolute;
  left: 50%;
}
.child5{
  width:200px;
  margin-left:-50%;
}
</style>

<div class="parent" style="background-color: gray;height: 20px;">
  <div class="childWrap5">
    <div class="child5" style="background-color: lightblue;">水平居中: 配合负margin</div> 
  </div>   
</div>

4. `flex`

```css
<style>
.parent6{
  display: flex;
  justify-content: center;
  /* 也可以使用margin */
  /* margin: 0 auto */
}
</style>
```

<style>
.parent6{
  display: flex;
  justify-content: center;
}
</style>

<div class="parent6" style="background-color: gray;">
    <div class="child6" style="background-color: lightblue;">水平居中: flex</div>   
</div>

5. `grid`

使用栅格布局`grid`实现水平居中

```css
<style > .parent7 {
  display: grid;
  justify-items: center;
  /*justify-content:center;*/
}
</style>

/* 或者 child */
.child7 {
  justify-self: center;
  /*margin: 0 auto;*/
}
```

<style>
.parent7{
  display:grid;
  justify-items:center;
 /*justify-content:center;*/
} 
</style>

<div class="parent7" style="background-color: gray;">
  <div class="child7" style="background-color: lightblue;">水平居中: grid</div>
</div>

## 垂直居中

1. `line-height`

行高`line-height`实现单行文本垂直居中

<style>
.test{
    line-height: 100px;
    background-color: lightblue;
}    
</style>

```css
<style>
.test{
    line-height: 100px;
    background-color: lightblue;
}
</style>
```

<div class="test">测试文字</div>

:::tip
在不设置高度的情况下，行高撑开高度
:::

2. `vertical-align`

设置`vertical-align:middle`实现垂直居中

通过为`table-cell`元素设置`vertical-align:middle`，可使其子元素均实现垂直居中。这和表格里单元格的垂直居中是类似的

:::tip
设置为`table-cell`的`div`不能使用浮动或绝对定位，因为浮动或绝对定位会使元素具有块级元素特性，从而丧失了`table-cell`元素具有的垂直对齐的功能。若需要浮动或绝对定位处理，则需要外面再套一层`div`
:::

```css
<style>
.parent{
  display: table-cell;
  vertical-align: middle;
}
</style>
```

<style>
.parent10{
  display: table-cell;
  vertical-align: middle;
}
</style>

<div class="parent10" style="background-color: gray;height: 100px;">
    <div class="child10" style="background-color: lightblue;">我是有点长的有点长的有点长的有点长的测试文字</div>   
</div>

特殊场景：子元素是图片

通过设置父元素的行高来代替高度，且设置父元素的`font-size`为 0

`vertical-align:middle`的解释是元素的中垂点与父元素的基线加`1/2`父元素中字母`X`的高度对齐。由于字符`X`在`em`框中并不是垂直居中的，且各个字体的字符`X`的高低位置不一致。所以，当字体大小较大时，这种差异就更明显。当`font-size`为 0 时，相当于把字符`X`的字体大小设置为`0`，于是可以实现完全的垂直居中

<style>
.parent11{
  line-height: 100px;
  font-size: 0;
}
.child11{
  vertical-align: middle;
}
</style>

```css
<style>
.parent{
  line-height: 100px;
  font-size: 0;
}
.child{
  vertical-align: middle;
}
</style>
```

<div class="parent11" style="background-color: lightgray;width:200px;">
    <img class="child11" src="https://gitee.com/sandlz/images/raw/master/uPic/lP5PqpRluKU.jpg" width="50%" alt="test">  
</div>

3. `absolute`

通过绝对定位实现垂直居中

3.1 配合`translate()`位移函数, `translate`函数的百分比是相对于自身高度的，所以`top:50%`配合`translateY(-50%)`可实现居中效果

:::tip
子元素的高度已知，`translate()`函数也可替换为`margin-top: 负的高度值`
:::

```css
<style>
.parent{
  position:relative;
}
.child{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
```

<style>
.parent12{
  position:relative;
}
.child12{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>

<div class="parent12" style="background-color: lightgray; height:100px;">
  <div class="child12" style="background-color: lightblue;">测试文字</div>
</div>

3.2 若子元素定高，结合绝对定位的盒模型属性，实现居中效果

```css
<style>
.parent{
  position: relative;
}
.child{
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto 0;
 height: 50px;
}
</style>
```

<style>
.parent13{
  position: relative;
}
.child13{
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto 0;
 height: 50px;
}
</style>

<div class="parent13" style="background-color: lightgray; height:100px;">
  <div class="child13" style="background-color: lightblue;">测试文字</div>
</div>

:::warning
在水平居中对齐中，元素外层套一层`div`并设置`absolute`，元素设置负`margin-left`或者`relative`的负`left`属性，可以实现水平居中的效果。但由于`margin`是相对于包含块宽度的，这样`margin-top:-50%`得到的是宽度而不是高度的`-50%`，所以不可行；
对于`relative`的百分比取值而言，在包含块高度为 auto 的情况下，chrome、safari 和 IE8+浏览器都不支持设置元素的百分比 top 值，所以也不可行
:::

4. `flex`

使用弹性盒模型 flex 实现垂直居中

4.1 在伸缩容器上设置侧轴对齐方式`align-items: center`

```css
<style>
.parent{
  display: flex;
  align-items: center;
}
</style>
```

4.2 在伸缩项目上设置`margin: auto 0`

```css
<style>
.parent{
  display: flex;
}
.child{
  margin: auto 0;
}
</style>
```

5. `grid`

使用栅格布局`grid`实现垂直居中

5.1 在网格容器上设置`align-items`或`align-content`

```css
<style>
.parent{
  display:grid;
  align-items:center;
 /*align-content:center;*/
}
</style>
```

5.2 在网格项目中设置`align-self`或者`margin: auto 0`

```css
<style>
.parent{
  display:grid;
}
.child{
  align-self:center;
 /*margin: auto 0;*/
}
</style>
```

## 水平&垂直居中

1. 水平对齐 + 行高

```css
<style>
.test{
    text-align: center;
    line-height: 100px;
}
</style>
```

<style>
.test{
    text-align: center;
    line-height: 100px;
}
</style>
<div class="test" style="background-color: lightblue;width: 200px;">测试文字</div>

2. 水平 + 垂直对齐

2.1 父元素设置`text-align`和`vertical-align`，并将父元素设置为`table-cell`元素，子元素设置为`inline-block`元素

```css
<style>
.parent{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.child{
    display: inline-block;
}
</style>
```

<style>
.parent20{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.child20{
    display: inline-block;
}
</style>

<div class="parent20" style="background-color: gray; width:200px; height:100px;">
  <div class="child20" style="background-color: lightblue;">测试文字</div>
</div>

2.2 若子元素是图像，可不使用`table-cell`，而是其父元素用行高替代高度，且字体大小设为 0。子元素本身设置`vertical-align:middle`

```css
<style>
.parent{
    text-align: center;
    line-height: 100px;
    font-size: 0;
}
.child{
    vertical-align: middle;
}
</style>
```

<style>
.parent21{
    text-align: center;
    line-height: 100px;
    font-size: 0;
}
.child21{
    vertical-align: middle;
}
</style>

<div class="parent21" style="background-color: gray; width:200px; ">
  <img class="child21" src="https://gitee.com/sandlz/images/raw/master/uPic/lP5PqpRluKU.jpg" width="50%" alt="test">
</div>

3. `margin` + 垂直对齐

要想在父元素中设置`vertical-align`，须设置为`table-cell`元素；要想让`margin:0 auto`实现水平居中的块元素内容撑开宽度，须设置为`table`元素。而`table`元素是可以嵌套在`tabel-cell`元素里面的，就像一个单元格里可以嵌套一个表格

```css
<style>
.parent{
    display:table-cell;
    vertical-align: middle;
}
.child{
    display: table;
    margin: 0 auto;
}
</style>
```

<style>
.parent22{
    display:table-cell;
    vertical-align: middle;
}
.child22{
    display: table;
    margin: 0 auto;
}
</style>

<div class="parent22" style="background-color: lightgray; width:200px; height:100px; ">
  <div class="child22" style="background-color: lightblue;">测试文字</div>
</div>

4. `absolute`

4.1 利用绝对定位元素的盒模型特性，在偏移属性为确定值的基础上，设置`margin:auto`

```css
<style>
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 80px;
    margin: auto;
}
</style>
```

<style>
.parent23{
    position: relative;
}
.child23{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 80px;
    margin: auto;
}
</style>

<div class="parent23" style="background-color: lightgray; width:200px; height:100px; ">
  <div class="child23" style="background-color: lightblue;">测试文字</div>
</div>

4.2 利用绝对定位元素的偏移属性和`translate()`函数的自身偏移达到水平垂直居中的效果

```css
<style>
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
```

<style>
.parent24{
    position: relative;
}
.child24{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>

<div class="parent24" style="background-color: lightgray; width:200px; height:100px; ">
  <div class="child24" style="background-color: lightblue;">测试文字</div>
</div>

4.3 在子元素宽高已知的情况下，可以配合`margin`负值达到水平垂直居中效果

```css
<style>
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 60px;
    margin-left: -40px;
    margin-top: -30px;
}
</style>
```

<style>
.parent25{
    position: relative;
}
.child25{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 60px;
    margin-left: -40px;
    margin-top: -30px;
}
</style>

<div class="parent25" style="background-color: lightgray; width:200px; height:100px; ">
  <div class="child25" style="background-color: lightblue;">测试文字</div>
</div>

5. `flex`

5.1 在伸缩容器上使用主轴对齐 justify-content 和侧轴对齐 align-items

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

5.2 在伸缩项目上使用 margin:auto

```css
<style>
.parent{
    display: flex;
}
.child{
    margin: auto;
}
</style>
```

6. `grid`

6.1 在网格容器上设置`justify-items`、`align-items`或`justify-content`、`align-content`

```css
<style>
.parent{
    display: grid;
    align-items: center;
    justify-items: center;
    /* align-content: center; */
    /* justify-content: center; */
}
</style>
```

6.2 在网格项目中设置`justify-self`、`align-self`或者`margin: auto`

```css
<style>
.parent{
    display: grid;
}
.child{
    align-self: center;
    justify-self: center;
/*     margin: auto; */
}
</style>
```
