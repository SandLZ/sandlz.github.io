# 选择符

CSS 选择符有以下几种：

- 后代选择符空格 ( )
- 子代选择符箭头 (>)
- 相邻兄弟选择符 (+)
- 随后兄弟选择符弯弯 (~)
- 列选择符双管道 (||)

## 后代选择符空格( )

很常见，如`.wrapper .container { }`

### 不同优先级下的后代选择符

```html
<style>
  .lightblue {
    color: lightblue;
  }
  .darkblue {
    color: darkblue;
  }
</style>

<div class="lightblue">
  <div class="darkblue">
    <p>1. 颜色是？</p>
  </div>
</div>
<div class="darkblue">
  <div class="lightblue">
    <p>2. 颜色是？</p>
  </div>
</div>
```

<style>
  .lightblue { color: lightblue; }
  .darkblue { color: darkblue; }
</style>

<div class="lightblue">
    <div class="darkblue">
        <p>1. 颜色是？</p>
    </div>
</div>
<div class="darkblue">
    <div class="lightblue">
        <p>2. 颜色是？</p>
    </div>
</div>

例 1： 将 类选择器 -> 后代选择符，结果是？

```html
<style>
  .lightblue p {
    color: lightblue;
  }
  .darkblue p {
    color: darkblue;
  }
</style>
<div class="lightblue">
  <div class="darkblue">
    <p>1. 颜色是？</p>
  </div>
</div>
<div class="darkblue">
  <div class="lightblue">
    <p>2. 颜色是？</p>
  </div>
</div>
```

<style>
  .lightblue p { color: lightblue; }
  .darkblue p { color: darkblue; }
</style>
<div class="lightblue">
    <div class="darkblue">
        <p>1. 颜色是？</p>
    </div>
</div>
<div class="darkblue">
    <div class="lightblue">
        <p>2. 颜色是？</p>
    </div>
</div>

why?

1. 当包含后代选择符时，整个选择器的优先级和 DOM 层级没有关系，看落地元素的优先级：P；
2. `<p>`元素彼此分离，非嵌套，DOM 层级平行；选择器优先级也一样（类选择器 10 + 标签选择器 1 = 11），相同；
3. 看在 CSS 文件中的位置，后来居上。

例 2：

```html
.lightblue.lightblue p { color: lightblue; } .darkblue p { color: darkblue; }
```

<style>
  .lightblue.lightblue p { color: lightblue; }
  .darkblue p { color: darkblue; }
</style>
<div class="lightblue">
    <div class="darkblue">
        <p>1. 颜色是？</p>
    </div>
</div>
<div class="darkblue">
    <div class="lightblue">
        <p>2. 颜色是？</p>
    </div>
</div>

why: ；`.lightblue.lightblue p` 优先级更高

## 子代选择符箭头(>)

子选择符只会匹配**第一代子元素**，而后代选择符会匹配**所有子元素**

注：父子元素不同的`text-decoration`属性值会不断累加

```html
<style>
  ol li {
    color: darkblue;
    text-decoration: underline;
  }
  ol > li {
    color: lightblue;
    -webkit-text-decoration: underline wavy;
    text-decoration: underline wavy;
  }
</style>
<ol>
  <li>颜色是？</li>
  <li>
    颜色是？
    <ul>
      <li>颜色是？</li>
      <li>颜色是？</li>
    </ul>
  </li>
  <li>颜色是？</li>
</ol>
```

<style>
.cs-demo ol li {
  color: darkblue;
  text-decoration: underline;
}
.cs-demo ol > li {
    color: lightblue;
    -webkit-text-decoration: underline wavy;
    text-decoration: underline wavy;
}
</style>
<div class="cs-demo">
  <ol>
      <li>颜色是？</li>
      <li>颜色是？
          <ul>
              <li>颜色是？</li>
              <li>颜色是？</li>
          </ul>
      </li>
      <li>颜色是？</li>
  </ol>
</div>

### 适用场景

::: tip
尽量不使用子选择符，尽管性能优于后代选择符，但维护性较差
:::

例：区分 A、B 区域的样式，通常在容器外层新增一个类重置，如

```css
.cs-module-reset-b > .cs-module-x {
  /* reset */
}
```

**to**

```css
.cs-module-reset-b .cs-module-x {
  /* reset */
}
```

why?

1. 使用了子选择符，元素层级关系就强制绑定了。不利于后期更改；
2. **使用子选择符的主要目的是避免冲突**

适合使用的场景：

1. **状态类名控制**：避免影响后代存在`.active`切换的场景
2. **标签受限**： 当`<li>`重复嵌套，无法修改标签名或类名的时候
3. **层级位置与动态判断**：某些场景切换元素的样式，达到需求。

## 相邻兄弟选择符加好（+）

**选择相邻的兄弟元素，但只能选择后面一个兄弟**

```html
<style>
  .cs-li + li {
    color: skyblue;
  }
</style>

<ol>
  <li>颜色是？</li>
  <li class="cs-li">颜色是？</li>
  <li>颜色是？</li>
  <li>颜色是？</li>
</ol>
```

<style>
  .cs-li + li {
    color: skyblue;
}
</style>

<ol>
    <li>颜色是？</li>
    <li class="cs-li">颜色是？</li>
    <li>颜色是？</li>
    <li>颜色是？</li>
</ol>

实现类似`:first-child`效果

例：希望除了第一个列表以外的其他列表都有`margin-top`属性

```css
.cs-li:not(:first-child) {
  margin-top: 1em;
}
```

相邻兄弟选择符方式：

```css
.cs-li + .cs-li {
  margin-top: 1em;
}
```

## 随后兄弟选择符弯弯（~）

相邻兄弟选择符只会匹配它后面的**第一个兄弟元素**，而随后兄弟选择符会匹配后面**所有的兄弟元素**

```html
<style>
  .cs-h ~ .cs-li {
    color: skyblue;
    text-decoration: underline;
  }
  .cs-h + .cs-li {
      text-decoration: underline wavy;
  }
</style>
<p class="cs-li">列表内容1</p>
<h4 class="cs-h">标题</h4>
<p class="cs-li">列表内容2</p>
<p class="cs-li">列表内容3</p>
```

<style>
  .cs-h ~ .cs-li {
    color: skyblue;
    text-decoration: underline;
  }
  .cs-h + .cs-li {
      text-decoration: underline wavy;
  }
</style>
<p class="cs-li">列表内容1</p>
<h4 class="cs-h">标题</h4>
<p class="cs-li">列表内容2</p>
<p class="cs-li">列表内容3</p>


### 为什么没有前面兄弟选择符？

受限于`DOM`渲染机制:
浏览器解析HTML文档是从前往后，由外及里的；
如果CSS支持前面兄弟选择符或者父元素选择符的话，就必须等到所有子元素加载完毕才能渲染HTML。

## 列选择符双管道（||）



