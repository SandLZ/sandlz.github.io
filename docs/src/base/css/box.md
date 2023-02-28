# 盒模型

> 页面就是由一个个盒模型堆砌起来的，每个 HTML 元素都可以叫做盒模型，盒模型由外而内包括：边距（margin）、边框（border）、填充（padding）、内容（content）。它在页面中所占的实际宽度是 margin + border + paddint + content 的宽度相加。

盒模型有标准盒模型和 IE 的盒模型。

- 标准盒模型(content-box)
- IE 盒模型(border-box)

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/box_normal.jpeg" style="width: 80%">
</div>

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/box_ie.jpeg" style="width: 80%">
</div>

在 CSS 中盒模型被分为两种，第一种是 W3C 的标准模型，第二种是 IE 怪异盒模型。不同之处在于后者的宽高定义的是可见元素框的尺寸，而不是元素框的内容区尺寸。目前对于浏览器大多数元素都是基于 W3C 标准的盒模型，但对于表单 form 中的部分元素还是基于 IE 的怪异盒模型，如 input 里的 radio、checkbox、button 等元素，如果给其设置 border 和 padding 它们也只会往元素盒内延伸

```css
.box {
  box-sizing: content-box | bordrer-box | padding-box | inherit;
}
```

- `content-box` (默认)标准盒模型
- `bordrer-box` (IE)怪异盒模型
- `padding-box` (FireFox)

注意：IE 浏览器在`getComputedStyle`得到`width`、`height`是按照标准模式计算的，而不论`box-sizing`的取值.
