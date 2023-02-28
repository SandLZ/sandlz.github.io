# Flex

[[toc]]

## 概念

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/flex_container.png" width="80%" />
</div>

容器默认存在两根轴：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿`主轴`排列。单个项目占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`。

## 容器属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### `flex-direction`

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

#### `row` （默认值）主轴为水平方向，起点在左端。

<div style="display: flex; flex-direction: row; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `row-reverse`：主轴为水平方向，起点在右端。

<div style="display: flex; flex-direction: row-reverse; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `column`：主轴为垂直方向，起点在上沿。

<div style="display: flex; flex-direction: column; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `column-reverse`：主轴为垂直方向，起点在下沿。

<div style="display: flex; flex-direction: column-reverse; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

### `flex-wrap`

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

#### `nowrap` 不换行

<div style="display: flex; flex-wrap: nowrap; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
</div>

#### `wrap` 换行, 第一行在上方

<div style="display: flex; flex-wrap: wrap; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
</div>

#### `wrap-reverse` 换行, 第一行在下方

<div style="display: flex; flex-wrap: wrap-reverse; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
</div>

### `flex-flow`

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

### `justify-content`

`justify-content`属性定义了项目在`主轴`上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

#### `flex-start` 左对齐

<div style="display: flex; justify-content: flex-start; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `flex-end` 右对齐

<div style="display: flex; justify-content: flex-end; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `flex-center` 居中

<div style="display: flex; justify-content: center; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `space-between` 两端对齐，项目之间间隔相等

<div style="display: flex; justify-content: space-between; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `space-around` 每个项目两侧间隔相等。所以项目之间的间隔比项目边框的间隔大一倍。

<div style="display: flex; justify-content: space-around; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

### align-items

`align-items`定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

#### `flex-start` 交叉轴的起点对齐

<div style="display: flex; align-items: flex-start; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 200px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 200px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `flex-end` 交叉轴的终点对齐

<div style="display: flex; align-items: flex-end; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 200px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 200px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `center`

<div style="display: flex; align-items: center; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 200px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 200px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `baseline` 第一行文字的基线对齐

<div style="display: flex; align-items: baseline; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 60px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 70px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

#### `stretch` 如果项目未设置高度或为 auto, 将沾满整个容器的高度

<div style="display: flex; align-items: stretch; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: auto; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: auto; margin: 5px; background-color: #ffd200;font-size: 60px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: auto; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: auto; margin: 5px; background-color: #ffd200;font-size: 70px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 200px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
</div>

### `align-content`

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

#### `flex-start` 交叉轴的起点对齐。

<div style="height: 300px;display: flex; align-content: flex-start; flex-wrap: wrap;background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">8</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">9</div>
</div>

#### `flex-end` 与交叉轴的终点对齐。

<div style="height: 300px;display: flex; align-content: flex-end; flex-wrap: wrap;background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">8</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">9</div>
</div>

#### `center` 与交叉轴的中点对齐。

<div style="height: 300px;display: flex; align-content: center; flex-wrap: wrap;background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">8</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">9</div>
</div>

#### `space-between` 与交叉轴两端对齐，轴线之间的间隔平均分布。

<div style="height: 300px;display: flex; align-content: space-between; flex-wrap: wrap;background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">8</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">9</div>
</div>

#### `space-around` 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

<div style="height: 300px;display: flex; align-content: space-around; flex-wrap: wrap;background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">8</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">9</div>
</div>

#### `stretch` （默认值）：轴线占满整个交叉轴。

<div style="height: 300px;display: flex; align-content: stretch; flex-wrap: wrap;background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">5</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">6</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">7</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">8</div>
  <div style="width: 100px; height: auto; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">9</div>
</div>

## 项目(内容)属性

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

### `order`

`order` 定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

```css
.item {
  order: <integer>;
}
```

<div style="display: flex; background-color: #fff; border: 1px solid #000;">
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="order: -1; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
</div>

### `flex-grow`

`flex-grow` 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

<div style="display: flex; background-color: #fff; border: 1px solid #000;">
  <div style="flex-grow:1; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="flex-grow:2; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="flex-grow:3; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
</div>

如果所有项目的`flex-grow`属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

### `flex-shrink`

`flex-shrink` 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

<div style="width: 300px;display: flex; background-color: #fff; border: 1px solid #000;">
  <div style="flex-shrink:1; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style="flex-shrink:0; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="flex-shrink:1; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
</div>

### `flex-basis`

`flex-basis` 定义了在分配多余空间之前，项目占据的主轴空间（`main size`）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟`width`或`height`属性一样的值（比如 350px），则项目将占据固定空间。

### `flex`

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。

### `align-self`

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

<div style="height: 150px; display: flex; background-color: #fff; border: 1px solid #000;">
  <div style="align-self: center; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">1</div>
  <div style=" width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">2</div>
  <div style="align-self: flex-end; width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">3</div>
  <div style="width: 100px; height: 100px; margin: 5px; background-color: #ffd200;font-size: 50px;color: white;text-align: center;line-height: 100px;vertical-align: middle;">4</div>
</div>
