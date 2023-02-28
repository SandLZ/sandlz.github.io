# 安全

## XSS 跨站脚本攻击
描述：注入非法的css或js, 控制浏览器

### Dom XSS
描述：利用Dom API

### 反射型 XSS
描述：也被称为非持久性XSS，是现在最容易出现的一种XSS漏洞。
发出请求时，XSS代码出现在URL中，最后输入提交到服务器，服务器解析后在响应内容中出现这段XSS代码，最后浏览器解析执行。

### 存储型 XSS
描述：也被称为持久性XSS，它是最危险的一种跨站脚本，相比反射型XSS和DOM型XSS具有更高的隐蔽性，所以危害更大，因为它不需要用户手动触发。 
允许用户存储数据的web程序都可能存在存储型XSS漏洞，当攻击者提交一段XSS代码后，被服务器端接收并存储，当所有浏览者访问某个页面时都会被XSS，其中最典型的例子就是留言板

比如

``` js
<script>
  while (true) {
      alert('Hello')
  }
</script>
```

如何预防？
1. 校验输入（前后端）
2. 字符串转义

## CSRF（Cross Site Reuqest Forgeries） 跨站点请求伪造

通常来说 CSRF 是由 XSS 实现的，CSRF 时常也被称为 XSRF（CSRF 实现的方式还可以是直接通过命令行发起请求等）。

本质上讲，XSS 是代码注入问题，CSRF 是 HTTP 问题。XSS 是内容没有过滤导致浏览器将攻击者的输入当代码执行。
CSRF 则是因为浏览器在发送 HTTP 请求时候自动带上 cookie，而一般网站的 session 都存在 cookie里面。

如何预防？
1. 验证码
2. token

## Clickjacking

描述：点击劫持

点击劫持，是指利用透明的按钮或连接做成陷阱，覆盖在 Web 页面之上。然后诱使用户在不知情的情况下，
点击那个连接访问内容的一种攻击手段。这种行为又称为界面伪装(UI Redressing) 。

手段: iframe、图片

如何防御？
1. X-FRAME-OPTIONS : 服务端配置，允许一个页面可否在`<frame>`, `<iframe>` 或者 `<object>` 中展现的标记： DENY SAMEORIGIN ALLOW-FROM url

## Cookie 安全

1. cookie签名
2. 内容加密
3. 响应头：http-only,禁止js读取cookie
4. secure字段：只允许在https下调用
5. same-site