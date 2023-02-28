# 布局

## 实现左侧固定 100px，右侧自适应的布局

<div style="width: 100%;
  height: 100px;
  display: flex;">
    <div style="width: 100px;
  height: 100px;
  background-color: #afa;">
  width: 100px
    </div>
    <div style="flex: 1;
  height: 100px;
  background-color: #ae5aca;">
  width: auto
    </div>
</div>

```css
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.one {
  width: 100px;
  height: 300px;
  background-color: #afa;
}
.two {
  flex: 1;
  height: 100px;
  background-color: #ae5aca;
}
```

## 三栏布局

圣杯布局和双飞翼布局的共同点：

1. 都是实现左右宽度固定，中间自适应

2. 在 dom 中主内容必须第一个加载（所以要把 content 放在 left 和 right 前面）

3. 其父元素的高度始终是由三栏中高度最高的元素

### 圣杯布局

```html
<div class="demo">
  <div class="content">我是自适应的,要写在前面优先渲染</div>
  <div class="left">左边：我是固定的</div>
  <div class="right">右边：我是固定的</div>
</div>
```

实现思路：

1. 三列布局都左浮动

2. 设置 content 宽度为 100%

3. 给 left 元素设置 margin-left:-100%;right 元素设置 margin-left:-200px,让 left，right 元素和 content 元素能并排显示

4. 容器设置 padding 给左右两列预留位置，padding 大小分别为左右两列的宽度

5. 给 left 和 right 设置 position:relative，设置 left 元素 left:-100px(-自身宽度)，right 元素 right:-200px(-自身宽度)

```css
.demo {
  padding: 0 200px 0 100px;
  background-color: gray;
  overflow: hidden;
  zoom: 1;
}
.left,
.right,
.content {
  float: left;
  position: relative;
}
.left {
  background-color: red;
  width: 100px;
  height: 100px;
  margin-left: -100%;
  left: -100px;
}
.right {
  background-color: bisque;
  width: 200px;
  height: 200px;
  margin-left: -200px;
  right: -200px;
}
.content {
  background-color: green;
  width: 100%;
}
```

<layout-HolyGrailLayout/>

### 双飞翼布局

```html
<div class="demo">
  <div class="content">
    <div class="inner-content">我是自适应的,要写在前面优先渲染</div>
  </div>
  <div class="left">左边：我是固定的</div>
  <div class="right">右边：我是固定的</div>
</div>
```

实现思路（前三点实现同圣杯布局）：

1. 三列布局都左浮动

2. 设置 content 宽度为 100%

3. 给 left 元素设置 margin-left:-100%;right 元素设置 margin-left:-200px,让 left，right 元素和 content 元素能并排显示

4. **给 content 内层嵌套一个 div，然后给这个 div 设置 margin 值**

```css
.demo {
  /* padding: 0 200px 0 100px; */
  background-color: gray;
  overflow: hidden;
  zoom: 1;
}
.left,
.right,
.content {
  float: left;
  /* position: relative; */
}
.left {
  background-color: red;
  width: 100px;
  height: 100px;
  margin-left: -100%;
}
.right {
  background-color: bisque;
  width: 200px;
  height: 200px;
  margin-left: -200px;
}
.content {
  background-color: green;
  width: 100%;
}
.inner-content {
  margin: 0 200px 0 100px;
}
```

<layout-DoubleWingLayout/>

小结：

- **圣杯布局**是通过父容器的内边距来实现各列的间隙
- **双飞翼布局**是通过新建的 div 的外边距隔离各列的

### Flex 布局

```html
<div class="flex-demo">
  <div class="content1">我是自适应的,要写在前面优先渲染</div>
  <div class="left1">左边：我是固定的</div>
  <div class="right1">右边：我是固定的</div>
</div>
```

```css
.flex-demo {
  display: flex;
}
.content1 {
  background-color: green;
  flex: 1;
  order: 2;
}
.left1 {
  background-color: red;
  width: 100px;
  height: 100px;
  order: 1;
}
.right1 {
  background-color: bisque;
  width: 200px;
  height: 200px;
  order: 3;
}
```

<layout-FlexLayout/>


