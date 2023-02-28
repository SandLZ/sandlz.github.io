# 动画

在 CSS3 出现之前，动画都是通过 JavaScript 动态的改变元素的样式属性来完成了，这种方式虽然能够实现动画，但是在性能上存在一些问题。CSS3 的出现，让动画变得更加容易，性能也更加好。
CSS3 中有三个关于动画的样式属性 `transition`、`transform` 和 `animation`；

## `tansition`

`tansition` 翻译为 **过渡**，过渡是 CSS3 中具有颠覆性的一个特征，可以实现元素不同状态间的平滑过渡（补间动画），经常用来制作动画效果。

- **补间动画**：自动完成从起始状态到终止状态的的过渡。不用管中间的状态。

- **帧动画**：通过一帧一帧的画面按照固定顺序和速度播放。如电影胶片

`transition` 包括以下属性：

- `transition-property`: all; 如果希望所有的属性都发生过渡，就使用 all。

- `transition-duration`: 1s; 过渡的持续时间。

- `transition-timing-function`: linear; 运动曲线。属性值可以是：

  - `linear` 线性
  - `ease` 减速
  - `ease-in` 加速
  - `ease-out` 减速
  - `ease-in-out` 先加速后减速
  - `transition-delay`: 1s; 过渡延迟。多长时间后再执行这个过渡动画。

上面的四个属性也可以写成综合属性：

```css
/** transition: 让哪些属性进行过度 过渡的持续时间 运动曲线 延迟时间; */
transition: all 3s linear 0s;
```

## `transform`

`tansform` 翻译为 **转换**，包含

- 2D 转换
- 3D 转换

### 2D 转换

2D 转换包括：

- `scale` 缩放
- `translate` 移动
- `rotate` 旋转

#### `scale`

x：表示水平方向的缩放倍数。y：表示垂直方向的缩放倍数。如果只写一个值就是等比例缩放

取值：大于 1 表示放大，小于 1 表示缩小。不能为百分比。

```css
transform: scale(x, y);
```

#### `translate`

参数为百分比，相对于自身移动。

正值：向右和向下。 负值：向左和向上。如果只写一个值，则表示水平移动。

```css
transform: translate(水平位移, 垂直位移);
```

#### `rotate`

参数：正值 顺时针；负值：逆时针。

```css
transform: rotate(角度);
```

`rotate` 旋转时，默认是以盒子的正中心为坐标原点的。如果想改变旋转的坐标原点，可以用`transform-origin`属性。格式如下：

```css
transform-origin: 水平坐标 垂直坐标;

transform-origin: 50px 50px;

transform-origin: center bottom; //旋转时，以盒子底部的中心为坐标原点
```

### 3D 转换

3D 转换包括：

- `translate` 移动
- `rotate` 旋转
- `perspective` 透视
- `transform-style` 呈现

#### `translate`

- `translateX`
- `translateY`
- `translateZ`

#### `rotate`

- `rotateX`
- `rotateY`
- `rotateZ`

旋转的方向：（左手法则）

#### `perspective`

电脑显示屏是一个 2D 平面，图像之所以具有立体感（3D 效果），其实只是一种视觉呈现，通过透视可以实现此目的。

透视可以将一个 2D 平面，在转换的过程当中，呈现 3D 效果。但仅仅只是视觉呈现出 3d 效果，并不是正真的 3d。

格式有两种写法：

- 作为一个属性，设置给父元素，作用于所有 3D 转换的子元素

- 作为 transform 属性的一个值，做用于元素自身。

#### `transform-style`

3D 元素构建是指某个图形是由多个元素构成的，可以给这些元素的父元素设置`transform-style: preserve-3d`来使其变成一个真正的 3D 图形。属性值可以如下：

## `animation`

动画是 CSS3 中具有颠覆性的特征，可通过设置多个节点 来精确控制一个或一组动画，常用来实现复杂的动画效果。

### 定义动画的步骤

（1）通过@keyframes 定义动画；

（2）将这段动画通过百分比，分割成多个节点；然后各节点中分别定义各属性；

（3）在指定元素里，通过 animation 属性调用动画。

```css
定义动画：
@keyframes 动画名{
    from{ 初始状态 }
    to{ 结束状态 }
}

调用：
animation: 动画名称 持续时间；
```

```css
animation: 定义的动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行。(infinite 表示无限次)

animation: move1 1s  alternate linear 3;

animation: move2 4s;
```

### 动画属性

我们刚刚在调用动画时，animation 属性的格式如下：

```css
animation: 定义的动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行。(infinite 表示无限次)

animation: move1 1s  alternate linear 3;

animation: move2 4s;
```

1. 动画名称(必须)

```css
animation-name: move;
```

2. 执行一次动画的持续时间：(必须)

```css
animation-duration: 4s;
```

3. 动画的执行次数

属性值 infinite 表示无数次

```css
animation-iteration-count: 1;
```

4. 动画的方向

   属性值：`normal` 正常，`alternate` 反向。

```css
animation-direction: alternate;
```

5. 动画延迟执行

```css
animation-delay: 1s;
```

6. 设置动画结束时，盒子的状态

   属性值： 
   `forwards`：保持动画结束后的状态（默认）， 

   `backwards`：动画结束后回到最初的状态。

```css
animation-fill-mode: forwards;
```

7. 运动曲线

   属性值可以是：`linear`、 `ease-in-out`、 `steps()`等。

```css
animation-timing-function: ease-in;
```
