# Google SEO

> 结合 GTM 与 GA4, 灵活的统计系统使用情况。

## 简介

### `Google Analytics 4` 是什么？

`GA4` 是专为未来的衡量方式而设计的全新媒体资源。

- 收集网站数据和应用数据，有助于更好地了解客户转化历程

- 使用基于事件而非基于会话的数据

- 提供如无 `Cookie` 衡量”等隐私控制项，以及行为建模和根据模型估算转化

- 具备无需构建复杂模型即可预测的能力，可发挥指导作用

- 与媒体平台直接集成，有助于吸引用户采取行动

::: warning
2023 年 7 月 1 日起，标准 `Universal Analytics` 媒体资源将不再处理数据。在 2023 年 7 月 1 日之后的一段时间内，你仍然可以查看 `Universal Analytics` 报告。但是，新数据只会传入 `Google Analytics（分析）4` 媒体资源。
:::

### `Google Tag Manager` 是什么？

`Google Tag Manager` 是一个标签管理系统。

- 基于 Web 的用户界面在网站或移动应用程序上配置和即时部署标签。

- `Google Tag Manager` 支持标签组织和版本控制、第三方和社区开发的标签模板。

- `Google Tag Manager` 有助于优化代码部署，减少代码配置错误。

- 基于 `Web` 的界面立即修改和部署站点上的代码。

### `Google Tag Manager`和`Google Analytics 4`的区别？

`Google Tag Manager` 是一个标签管理系统，管理着包含 `GA4` 在内的其他标签代码。`Google Analytics 4` 是一个数据统计和储存系统。只展示从 `GA4` 代码统计过来的数据。

`Google Tag Manager` 中不展示任何数据成效，在`Google Tag Manager` 设置的标签和事件，`GTM` 会将网站数据发送到其他营销/分析工具，如`GA4`，`Google Ads`。

你可以使用`Google Tag Manager`和`GA4`相结合，也可以单独使用`UA`或者`GA4`（缺点：管理复杂，无法跟踪更加细节的事件成效）。

## 账号设置

### GTM

1. 新建账号

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_O2Ggy2.png">  
</div>

2. 同意协议
3. 安装代码至目标网站
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_eHf1W9.png">  
</div>

### GA4

1. 新建媒体资源
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_SlPAia.png">  
</div>

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_UsbaBB.png">  
</div>

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_9BXwRI.png">  
</div>

2. 记录衡量值（后面结合 GTM 时用到）
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_fUIH3h.png" alt="xxxxx">  
</div>

## GTM 结合 GA4

结合 GA4 之前先了解下 GTM 中的几个概念：代码、触发器、变量

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_JgC81T.png">  
</div>

### 代码、触发器、变量

**代码**：代码是数据分析、营销或支持提供商提供的代码段，可帮我们将其标签代码整合到我们的网站或移动应用中，例如`GA4`标签代码，`Google ads`, `Facebook pixel`等;

**触发器**：代码触发的条件，一旦用户行为触发这个条件，那么标签代码就会发出记录返回这个数据。例如 `page view`, `Click link`等;

**变量**：触发条件中包含你想掌握的其他参数等信息，例如菜单点击事件中，我们想知道条件触发时，用户具体点击的是哪个菜单 url,哪个菜单名称等。

### GTM 中配置 GA4 事件

1. **创建代码**
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_EIMl8W.png">  
</div>
2. **配置代码类型及触发条件**
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_AxUts9.png">  
</div>

注：衡量 ID 位于 GA4 -> 媒体资源 -> 数据流 -> 网站数据流详情

3. **发布**
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_s95hST.png">  
</div>
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_01_nTWkOF.png">  
</div>

## Click 事件

对某一个特定页面，某一个元素，某一按钮进行点击跟踪，以了解我们的营销成果，那么我们就可以创建一个 click 事件。例如客户点击菜单，点击加购按钮等，监控这些元素的 click 可以了解我们的营销或者转化的情况。

1. 新建触发器: 选择点击所有元素，触发条件如使用`ID`条件；
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_lxT8lK.png">  
</div>

2. 新建代码：用于将事件发送给`GA4`
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_1EP0Lw.png">  
</div>

3. 触发器中选择代码
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_lxT8lK.png">  
</div>

## 变量

GTM 内置大量变量，如下图所示：

<div style="display: flex;">
    <img style="width: 33%" src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_d7hVt9.png">
    <img style="width: 33%" src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_cM4DnJ.png">
    <img style="width: 33%" src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_gejqCl.png">
</div>

常用变量：

1. Click ID ：点击元素的 ID
2. Click Classes: 点击元素的 Class 列表

### 自定义变量

自定义变量可满足用户多场景的需求，如下图所示：

<div style="display: flex;">
	<img style="width: 50%" src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_btwtc6.png">
	<img style="width: 50%" src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_fdxOqW.png">
</div>

常用自定义变量类型：

#### 自定义 JavaScript

提供函数，当使用到此变量时，会调用此函数。

注：此字段应当是使用`return`语句返回值的 JavaScript 函数。如果该函数未明确返回值，则会返回未定义状态，此时您的容器将无法正常运行。

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_HEARNt.png">
</div>

### JavaScript 变量

提供全局变量

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_gYkujP.png">
</div>

## 版本管理

### 发布新版本

1. 当工作区有变更时，可在顶部看到更改的数量，下方也有具体的修改内容列表。
<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_wpamW0.png">
</div>

2. 点击预览，进入调试模式，确认改动有效

   当触发相应条件时，`Tags Not Fired`中对应的 Item 应移动至`Tags Fired`,此时表明配置生效。

<div>
	<img  src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_pm7gEX.png">
	<img  src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_xI1hBX.png">
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_YybwDX.png">
</div>

3. 确认发布

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_dyKvBL.png">
</div>

### 版本回退

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_bqBVdX.png">
</div>

### 何时生效

`gtm.js`文件请求如下：

<div>
	<img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_09_AJ88au.png">
</div>

强缓存：

```
Expires: 过期时间(HTTP 1.0)
Cache-Control : 缓存控制(HTTP 1.1)
优先级：Cache-Control > Expires（不支持HTTP 1.1时使用Expires）
```

协商缓存：
当强缓存失效后，通过协商缓存查看资源是否过期。

```
Last-Modified: 资源在服务器上的最后修改时间
```

综上：

若浏览器支持 HTTP1.1，则缓存时间为 900 秒，即 15 分钟；超过 15 分钟再次访问资源时，走协商缓存。
若浏览器不支持 HTTP1.1，则强缓存默认失效（资源请求时间）；再次访问资源时，走协商缓存。

## 参考

[GTM Support](https://support.google.com/tagmanager/answer/7182738?hl=zh-Hans&ref_topic=7182737)
[GTM & GA4](https://zhuanlan.zhihu.com/p/544446340)
