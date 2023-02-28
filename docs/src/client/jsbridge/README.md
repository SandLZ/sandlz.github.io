# JSBridge

在 Hybrid 模式下，H5 会经常需要使用 Native 的功能，比如打开二维码扫描、调用原生页面、获取用户信息等，同时 Native 也需要向 Web 端发送推送、更新状态等，而 JavaScript 是运行在单独的 JS Context 中（Webview 容器、JSCore 等），与原生有运行环境的隔离，所以需要有一种机制实现 Native 端和 Web 端的双向通信，这就是 JSBridge：以 JavaScript 引擎或 Webview 容器作为媒介，通过协定协议进行通信，实现 Native 端和 Web 端双向通信的一种机制。
通过 JSBridge，Web 端可以调用 Native 端的 Java 接口，同样 Native 端也可以通过 JSBridge 调用 Web 端的 JavaScript 接口，实现彼此的双向调用

<div>
  <img src="https://gitee.com/sandlz/images/raw/master/uPic/lUlldB.png" />
</div>

## Webview

首先了解下 webView，webView 是移动端提供的运行 JavaScript 的环境，是系统渲染 Web 网页的一个控件，可与页面 JavaScript 交互，实现混合开发，其中 Android 和 iOS 又有些不同：

- Android 的 `WebView` 采用的是低版本和高版本使用了不同的 webkit 内核，4.4 后直接使用了 Chrome。
- iOS 中 `UIWebView` 算是自 IOS2 就有，但性能较差，特性支持较差，`WKWebView` 是 iOS8 之后的升级版，性能更强特性支持也较好。

WebView 控件除了能加载指定的 url 外，还可以对 URL 请求、JavaScript 的对话框、加载进度、页面交互进行强大的处理，之后会提到拦截请求、执行 JS 脚本都依赖于此。

## JSBridge 实现原理

Web 端和 Native 可以类比于 Client/Server 模式，Web 端调用原生接口时就如同 Client 向 Server 端发送一个请求类似，JSB 在此充当类似于 HTTP 协议的角色，实现 JSBridge 主要是两点：

1. 将 Native 端原生接口封装成 JavaScript 接口
2. 将 Web 端 JavaScript 接口封装成原生接口

### Native -> Web

首先来说 Native 端调用 Web 端，这个比较简单，JavaScript 作为解释性语言，最大的一个特性就是可以随时随地地通过解释器执行一段 JS 代码，所以可以将拼接的 JavaScript 代码字符串，传入 JS 解析器执行就可以，JS 解析器在这里就是 webView。
Android 4.4 之前只能用 loadUrl 来实现，并且无法执行回调：

```java
String jsCode = String.format("window.showWebDialog('%s')", text);
webView.loadUrl("javascript: " + jsCode);
```

Android 4.4 之后提供了`evaluateJavascript`来执行 JS 代码，并且可以获取返回值执行回调：

```java
String jsCode = String.format("window.showWebDialog('%s')", text);
webView.evaluateJavascript(jsCode, new ValueCallback<String>() {
  @Override
  public void onReceiveValue(String value) {

  }
});
```

iOS 的`UIWebView`使用`stringByEvaluatingJavaScriptFromString`：

```objective-c
NSString *jsStr = @"执行的JS代码";
[webView stringByEvaluatingJavaScriptFromString:jsStr];
```

iOS 的`WKWebView`使用`evaluateJavaScript`：

```objective-c
[webView evaluateJavaScript:@"执行的JS代码" completionHandler:^(id _Nullable response, NSError * _Nullable error) {

}];
```

### Web -> Native

Web 调用 Native 端主要有两种方式

- 拦截 `Webview` 请求的`URL Schema`
- 向 `Webview` 中注入 JS API

#### 拦截 Webview 请求的 URL Schema

URL Schema 是类 URL 的一种请求格式，格式如下：

```
<protocol>://<host>/<path>?<qeury>#fragment
```

我们可以自定义 JSBridge 通信的 URL Schema，比如：`jsbridge://showToast?text=hello`

Native 加载 WebView 之后，Web 发送的所有请求都会经过 WebView 组件，所以 Native 可以重写 WebView 里的方法，从来拦截 Web 发起的请求，我们对请求的格式进行判断：

如果符合我们自定义的 URL Schema，对 URL 进行解析，拿到相关操作、操作，进而调用原生 Native 的方法
如果不符合我们自定义的 URL Schema，我们直接转发，请求真正的服务

- 安卓提供了 `shouldOverrideUrlLoading`方法拦截
- `UIWebView` 使用 `shouldStartLoadWithRequest`
- `WKWebView` 使用 `decidePolicyForNavigationAction`

这种方式从早期就存在，兼容性很好，但是由于是基于 URL 的方式，长度受到限制而且不太直观，数据格式有限制，而且建立请求有时间耗时。

#### 向 Webview 中注入 JS API

这个方法会通过 webView 提供的接口，App 将 Native 的相关接口注入到 JS 的 Context（window）的对象中，一般来说这个对象内的方法名与 Native 相关方法名是相同的，Web 端就可以直接在全局 window 下使用这个暴露的全局 JS 对象，进而调用原生端的方法。

这个过程会更加简单直观，不过有兼容性问题，大多数情况下都会使用这种方式

Android（4.2+）提供了 `addJavascriptInterface` 注入：

```java
// 注入全局JS对象
webView.addJavascriptInterface(new NativeBridge(this), "NativeBridge");

class NativeBridge {
  private Context ctx;
  NativeBridge(Context ctx) {
    this.ctx = ctx;
  }

  // 增加JS调用接口
  @JavascriptInterface
  public void showNativeDialog(String text) {
    new AlertDialog.Builder(ctx).setMessage(text).create().show();
  }
}
```

在 Web 端直接调用这个方法即可：

```js
window.NativeBridge.showNativeDialog("hello");
```

iOS 的 UIWebView 提供了 JavaSciptCore

iOS 的 WKWebView 提供了 WKScriptMessageHandler

## 带回调的调用

前面已经说到了 Native、Web 间双向通信的两种方法，但站在一端而言还是一个单向通信的过程 ，比如站在 Web 的角度：Web 调用 Native 的方法，Native 直接相关操作但无法将结果返回给 Web，但实际使用中会经常需要将操作的结果返回，也就是 JS 回调。

<div>
  <img src="https://gitee.com/sandlz/images/raw/master/uPic/1gjCWI.png"  />
</div>

可以看到实际上还是通过两次单项通信实现的。

以 Android，在 Web 端实现带有回调的 JSB 调用为例：

```js
// Web端代码：
<body>
  <div>
    <button id="showBtn">获取Native输入，以Web弹窗展现</button>
  </div>
</body>
<script>
  let id = 1;
  // 根据id保存callback
  const callbackMap = {};
  // 使用JSSDK封装调用与Native通信的事件，避免过多的污染全局环境
  window.JSSDK = {
    // 获取Native端输入框value，带有回调
    getNativeEditTextValue(callback) {
      const callbackId = id++;
      callbackMap[callbackId] = callback;
      // 调用JSB方法，并将callbackId传入
      window.NativeBridge.getNativeEditTextValue(callbackId);
    },
    // 接收Native端传来的callbackId
    receiveMessage(callbackId, value) {
      if (callbackMap[callbackId]) {
        // 根据ID匹配callback，并执行
        callbackMap[callbackId](value);
      }
    }
  };

	const showBtn = document.querySelector('#showBtn');
  // 绑定按钮事件
  showBtn.addEventListener('click', e => {
    // 通过JSSDK调用，将回调函数传入
    window.JSSDK.getNativeEditTextValue(value => window.alert('Natvie输入值：' + value));
  });
</script>
```

```java
// Android端代码
webView.addJavascriptInterface(new NativeBridge(this), "NativeBridge");

class NativeBridge {
  private Context ctx;
  NativeBridge(Context ctx) {
    this.ctx = ctx;
  }

  // 获取Native端输入值
  @JavascriptInterface
  public void getNativeEditTextValue(int callbackId) {
    MainActivity mainActivity = (MainActivity)ctx;
    // 获取Native端输入框的value
    String value = mainActivity.editText.getText().toString();
    // 需要注入在Web执行的JS代码
    String jsCode = String.format("window.JSSDK.receiveMessage(%s, '%s')", callbackId, value);
    // 在UI线程中执行
    mainActivity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        mainActivity.webView.evaluateJavascript(jsCode, null);
      }
    });
  }
}
```

以上代码简单实现了一个 demo，在 Web 端点击按钮，会获取 Native 端输入框的值，并将值以 Web 端弹窗展现，这样就实现了 Web->Native 带有回调的 JSB 调用，同理 Native->Web 也是同样的逻辑，不同的只是将 callback 保存在 Native 端罢了，在此就不详细论述了。
