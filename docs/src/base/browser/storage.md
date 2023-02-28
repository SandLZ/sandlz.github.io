# Storage

前端本地存储的方式有三种，分别是

- `cookie`
- `localstorage`
- `sessionStorage`

## `cookie` 和 `session`

`cookie` 和 `session` 都是普遍用来跟踪浏览用户身份的会话方式。

- `cookie` 数据存放在客户端，`session` 数据放在服务器端。
- `cookie` 本身并不安全，考虑到安全应当使用 `session`。
- `session` 会在一定时间内保存在服务器上。如果访问量比较大，会比较消耗服务器的性能。考虑到减轻服务器性能方面的开销，应当使用 `cookie` 。
- 单个 `cookie` 保存的数据不能超过 `4K`，很多浏览器都限制一个域名最多保存 `50` 个 cookie。
- 将登陆信息等重要信息存放为 `session`、其他信息如果需要保留，可以放在 `cookie` 中。


## 三者异同

### 生命周期

- `cookie`：可设置失效时间，没有设置的话，默认是关闭浏览器后失效

- `localStorage`：除非被手动清除，否则将会永久保存。

- `sessionStorage`： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。

### 存放数据大小

- `cookie`：**4KB** 左右

- `localStorage`和`sessionStorage`：可以保存 **5MB** 的信息

### http 请求

- `cookie`：每次都会携带在`HTTP`头中，如果使用`cookie`保存过多数据会带来性能问题

- `localStorage`和`sessionStorage`：仅在客户端（即浏览器）中保存，不参与和服务器的通信

### 易用性：

`cookie`：需要程序员自己封装，源生的`Cookie`接口不友好

`localStorage`和`sessionStorage`：源生接口可以接受，亦可再次封装来对`Object`和`Array`有更好的支持


### 跨域

- `localStorage` 不可以跨域,可以跨页面
- `sessionStorage` 不可以跨域，不可以跨页面（刷新页面不会丢失）
- `cookie` 可以设置`domain`字段解决2级域名跨域问题
## 应用场景

从安全性来说，因为每次 http 请求都会携带 `cookie` 信息，这样无形中浪费了带宽，所以 `cookie` 应该尽可能少的使用，另外 `cookie` 还需要**指定作用域**，**不可以跨域调用**，限制比较多。但是用来识别用户登录来说，cookie 还是比 storage 更好用的。其他情况下，可以使用 storage，就用 storage。

`storage` 在存储数据的大小上面秒杀了 `cookie`，现在基本上很少使用 `cookie` 了.

`localStorage` 和 `sessionStorage` 唯一的差别一个是永久保存在浏览器里面，一个是关闭网页就清除了信息。

`localStorage` 可以用来夸页面传递参数，`sessionStorage` 用来保存一些临时的数据，防止用户刷新页面之后丢失了一些参数。

## 扩展阅读

- [登录功能的实现](https://juejin.cn/post/7002520994434777119)
- [前端常见登录实现方案 + 单点登录方案](https://juejin.cn/post/6933115003327217671)