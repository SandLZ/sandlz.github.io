# Canvas

## 简介
> 最初由Apple使用在Safari中，后来Firefox/Chrome分别实现，经过一段时间发展，成为H5标准。
Canvas可理解为画布，栅格化的。
## 使用场景
小游戏、头像裁剪、Charts
## 基本知识
![image](https://gitee.com/zliu/images/raw/master/uPic/Canvas入门.png)
### 坐标系、API、属性
#### API

接口 | 作用 | 获取
:-: | :-: | :-: |
HTMLCanvasElement | Style、Context | getElementById('myCanvas') | HTMLElement
CanvasRenderingContext2D | Draw | canvas.getContext('2d')
ImageData | 像素操作 | ctx.createImageData(x, y) <br>  ctx.getImageData(sx, sy, sw, sh)
TextMetrics | 计算宽度 | ctx.measureText(text)
CanvasGradient | 渐变的不透明对象 | ctx.createLinearGradient() <br> ctx.createRadialGradient() 
CanvasPattern | 基于(image, canvas或video）的不透明对象 | ctx.createPattern() | ---
*Path2D(实验特性)* | 可以保留并重用的路径 | new Path2D(?path, ?d) <br> new Path2D(otherPathObj)

#### Property


<table>
	<tr>
	    <th style="width: 60px">分类</th>
	    <th style="width: 100px;text-align:center;">类别</th>
	    <th>方法名</th>
	    <th>作用</th>  
	    <th>备注</th>  
	</tr>
	<tr>
	    <td rowspan="100">Style</td>
	    <td rowspan="7">Line</td>
	    <td>lineWidth</td>
	    <td>线宽</td>
	    <td></td>
	</tr>
	<tr>
	    <td>lineCap</td>
	    <td>线尾</td>
	    <td>"butt" || "round" || "square"</td>
	</tr>
	    <td>lineJoin</td>
	    <td>线相交</td>
	    <td>"bevel" || "round" || "miter"</td>
	</tr>
	</tr>
	    <td>miterLimit</td>
	    <td>斜接头</td>
	    <td></td>
	</tr>
	</tr>
	    <td>getLineDash()</td>
	    <td>虚线</td>
	    <td>返回：Array</td>
	</tr>
	</tr>
	    <td>setLineDash()</td>
	    <td>设置虚线</td>
	    <td></td>
	</tr>
	</tr>
	    <td>lineDashOffset</td>
	    <td>虚线偏移</td>
	    <td></td>
	</tr>
	<tr>
	    <td rowspan="4">Text</td>
	    <td>font</td>
	    <td>字体</td>
	    <td>默认：10px sans-serif</td>
	</tr>
	<tr>
	    <td>textAlign</td>
	    <td>对齐方式</td>
	    <td>start (默认), end, left, right, center</td>
	</tr>
	<tr>
	    <td>textBaseline</td>
	    <td>基线对齐方式</td>
	    <td> top, hanging, middle, alphabetic (默认), ideographic, bottom</td>
	</tr>
	<tr>
	    <td>direction</td>
	    <td>方向</td>
	    <td>ltr, rtl, inherit (默认)</td>
	</tr>
	<tr>
	    <td rowspan="1">Fill</td>
	    <td>fillStyle</td>
	    <td>填充样式</td>
	    <td>默认：#000，支持rgb、rgba、black等</td>
	</tr>
	<tr>
	    <td rowspan="1">Stroke</td>
	    <td>strokeStyle</td>
	    <td>描边样式</td>
	    <td>默认：#000，支持rgb、rgba、black等</td>
	</tr>
	<tr>
	    <td rowspan="4">Shadows</td>
	    <td>shadowBlur</td>
	    <td>模糊等级</td>
	    <td>默认：0</td>
	</tr>
	<tr>
	    <td>shadowColor</td>
	    <td>阴影色</td>
	    <td>默认：透明，支持rgb、rgba、black等<br>被fillStyle/strokeStyle影响</td>
	</tr>
	<tr>
	    <td>shadowOffsetX</td>
	    <td>水平方向偏移</td>
	    <td></td>
	</tr>
	<tr>
	    <td>shadowOffsetY</td>
	    <td>垂直方向偏移</td>
	    <td></td>
	</tr>
	    <td rowspan="2">Compositing</td>
	    <td>globalAlpha</td>
	    <td>透明度</td>
	    <td>默认：1</td>
	</tr>
	<tr>
	    <td>globalCompositeOperation</td>
	    <td>合成类型</td>
	    <td>可选值(12种)：source-over、source-in、source-out、<br>source-atop、destination-over、destination-in、<br>destination-out、destination-atop、lighter、copy、<br>xor、multiply、screen、overlay、darken、lighten、<br>color-dodge、color-burn、hard-light、<br>soft-light、difference、exclusion、hue、<br>saturation、color、luminosity</td>
	</tr>
</table>


#### Method

<table>
	<tr>
	    <th style="width: 60px">分类</th>
	    <th style="width: 100px;text-align:center;">类别</th>
	    <th>方法名</th>
	    <th>作用</th>  
	    <th>备注</th>  
	</tr>
	<tr>
	    <td rowspan="10">路径</td>
	    <td rowspan="10">Path</td>
	    <td>beginPath()</td>
	    <td>开始路径</td>
	    <td></td>
	</tr>
	<tr>
	    <td>closePath()</td>
	    <td>结束路径</td>
	    <td></td>
	</tr>
		<tr>
	    <td>moveTo(x, y)</td>
	    <td>移动画笔</td>
	    <td></td>
	</tr>
	</tr>
	    <td>lineTo(x, y)</td>
	    <td>直线路径</td>
	    <td></td>
	</tr>
	</tr>
	    <td>quadraticCurveTo(cp1x, cp1y, x, y)</td>
	    <td>二次贝塞尔曲线</td>
	    <td>cp1x,cp1y为一个控制点，x,y为结束点</td>
	</tr>
	</tr>
	    <td>bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)</td>
	    <td>三次贝塞尔曲线</td>
	    <td>cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点</td>
	</tr>
	</tr>
	    <td>arc(x, y, radius, startAngle, endAngle,  [, anticlockwise])</td>
	    <td>以（x,y）为圆心的以radius为半径的圆弧（圆）</td>
	    <td>anticlockwise 默认false 顺时针</td>
	</tr>
	</tr>
	    <td>arcTo(x1, y1, x2, y2, radius)</td>
	    <td>给定的控制点和半径画一段圆弧，再以直线连接两个控制点</td>
	    <td></td>
	</tr>
	</tr>
	    <td>ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise])</td>
	    <td>椭圆</td>
	    <td></td>
	</tr>
	</tr>
	    <td>rect(x, y, width, height)</td>
	    <td>矩形</td>
	    <td></td>
	</tr>
	<tr>
	    <td rowspan="20">绘制</td>
	    <td rowspan="7">Path</td>
	    <td>fill()</td>
	    <td>填充</td>
	    <td></td>
	</tr>
	<tr>
	    <td>stroke()</td>
	    <td>描边</td>
	    <td></td>
	</tr>
	<tr>
	    <td>drawFocusIfNeeded([path], element)</td>
	    <td>聚焦的元素绘制路径</td>
	    <td></td>
	</tr>
	<tr>
	    <td>scrollPathIntoView([path])</td>
	    <td>滚动至路径</td>
	    <td></td>
	</tr>
	<tr>
	    <td>clip([path, fillRule])</td>
	    <td>裁剪</td>
	    <td>路径裁剪<br>fillRule: nonzero(默认) <br>evenodd(奇偶)</td>
	</tr>
	<tr>
	    <td>isPointInPath([path], x, y [, fillRule])</td>
	    <td>点是否在路径内</td>
	    <td>路径裁剪<br>fillRule: nonzero(默认) <br>evenodd(奇偶)</td>
	</tr>
	<tr>
	    <td>isPointInStroke([path], x, y)</td>
	    <td>点是否在描边路径内</td>
	    <td>路径裁剪<br>fillRule: nonzero(默认) <br>evenodd(奇偶)</td>
	</tr>
	<tr>
	    <td rowspan="3">Rect</td>
	    <td>fillRect(x, y, width, height)</td>
	    <td>填充</td>
	    <td></td>
	</tr>
	<tr>
	    <td>strokeRect(x, y, width, height)</td>
	    <td>描边</td>
	    <td></td>
	</tr>
	<tr>
	    <td>clearRect(x, y, width, height)</td>
	    <td>清除</td>
	    <td></td>
	</tr>
	<tr>
	    <td rowspan="3">Text</td>
	    <td>fillText(text, x, y [, maxWidth])</td>
	    <td>填充文本</td>
	    <td></td>
	</tr>
	<tr>
	    <td>strokeText(text, x, y [, maxWidth])</td>
	    <td>描边文本</td>
	    <td></td>
	</tr>
	<tr>
	    <td>measureText(text)</td>
	    <td>测量文本</td>
	    <td>返回：TextMetrics <br> {width ...}</td>
	</tr>
	<tr>
	    <td rowspan="1">Image</td>
	    <td>drawImage(image, dx, dy)<br>drawImage(image, dx, dy, dWidth, dHeight)<br>drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)</td>
	    <td>绘制图片</td>
	    <td>image: CanvasImageSource, 包含：<br>HTMLImageElement<br>SVGImageElement<br>HTMLVideoElement<br>HTMLCanvasElement<br>ImageBitmap<br>OffscreenCanvas</td>
	</tr>
	<tr>
	    <td rowspan="6">Transformations</td>
	    <td>getTransform()</td>
	    <td>当前变换矩阵</td>
	    <td>返回：DOMMatrix</td>
	</tr>
	<tr>
	    <td>rotate(angle)</td>
	    <td>旋转</td>
	    <td></td>
	</tr>
	<tr>
	    <td>scale(x, y)</td>
	    <td>缩放</td>
	    <td>默认缩放中心点(0, 0)</td>
	</tr>
	<tr>
	    <td>translate(x, y)</td>
	    <td>平移</td>
	    <td></td>
	</tr>
	<tr>
	    <td>transform(a, b, c, d, e, f)</td>
	    <td>变换</td>
	    <td></td>
	</tr>
	<tr>
	    <td>setTransform(a, b, c, d, e, f)<br>setTransform(matrix)</td>
	    <td>设置变换</td>
	    <td></td>
	</tr>
	<tr>
	    <td rowspan="20">其他</td>
	    <td rowspan="3">Pixel manipulation</td>
	    <td>createImageData(width, height)<br>createImageData(imagedata)</td>
	    <td>创建ImageData</td>
	    <td></td>
	</tr>
	<tr>
	    <td>getImageData(sx, sy, sw, sh)</td>
	    <td>获取图片数据</td>
	    <td>返回：ImageData</td>
	</tr>
	<tr>
	    <td>putImageData(imageData, dx, dy)<br>putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)</td>
	    <td>设置ImageData</td>
	    <td></td>
	</tr>
	<tr>
	    <td rowspan="2">State</td>
	    <td>save()</td>
	    <td>保存当前样式状态</td>
	    <td></td>
	</tr>
	<tr>
	    <td>restore()</td>
	    <td>恢复保存的样式状态(栈顶)</td>
	    <td></td>
	</tr>
</table>


## 样式
上色：填充、描边
```
fillStyle
strokeStyle
```

颜色支持5种类型
```
yellow
#FFA500
rgb(255,165,0)
rgba(255,165,0, 0.5)
hsl(45, 100%, 50%)
hsla(45, 100%, 50%, 0.5)
CanvasGradient
CanvasPattern
```

画笔
```
lineWidth
````

## 形状
概念：路径
```
# 开始新的路径
beginPath()
# 闭合当前路径
closePath
# 可创建子路径
ctx.moveTo(300, 0)
```

### 线
```
ctx.lineTo(200, 300)
```

### 矩形: Rect
创建矩形有2种方式：

```
# 1. fillRect / strokeRect
ctx.fillRect(0, 0, 200, 200)
# 2. Path2D
Path2D.rect(0, 0, 200, 200)
```

### 弧：Arc
圆、椭圆
<div style="width:100%">
    <img style="width: 33%"  src="https://gitee.com/zliu/images/raw/master/uPic/arc.jpg" />
    <img style="width: 33%" src="https://gitee.com/zliu/images/raw/master/uPic/arcTo_02.jpg" />
    <img style="width: 33%" src="https://gitee.com/zliu/images/raw/master/uPic/eliipse.jpg" />
</div>


### 曲线 ：Bezier
![image](https://gitee.com/zliu/images/raw/master/uPic/54diwjdj8b.gif)
![image](https://gitee.com/zliu/images/raw/master/uPic/mhmuin6c2w.gif)
### fillRule
![image](https://gitee.com/zliu/images/raw/master/uPic/Even-odd_and_non-zero_winding_fill_rules3.jpg)
## 变换
![image](https://gitee.com/zliu/images/raw/master/uPic/EVw5K5.png)
## 文字
水平、垂直方向
![image](https://gitee.com/zliu/images/raw/master/uPic/OelvkD.png)
![image](https://gitee.com/zliu/images/raw/master/uPic/BJwOpR.png)
## 图片
图片绘制支持多种来源
## 动画
## 优化