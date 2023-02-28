# Cross-Origin

**协议**，**域名**，**端口**，三者有一不一样，就是跨域

案例一：`www.baidu.com` 与 `zhidao.baidu.com` 是跨域

## 如何解决跨域

目前有两种最常见的解决方案：

- `CORS`，在服务器端设置几个响应头，如 Access-Control-Allow-Origin: *
- `Reverse Proxy`，在 nginx/traefik/haproxy 等反向代理服务器中设置为同一域名
- `JSONP`，详解见 [JSONP 的原理是什么，如何实现](https://github.com/shfshanyue/Daily-Question/issues/447)

### `JSONP`

`JSONP`，全称 JSON with Padding，为了解决跨域的问题而出现。虽然它只能处理 GET 跨域，虽然现在基本上都使用 CORS 跨域

`JSONP` 基于两个原理:

- 动态创建 `script`，使用 script.src 加载请求跨过跨域
- `script.src` 加载的脚本内容为 JSONP: 即 `PADDING(JSON)` 格式

```js
function jsonp_simple ({ url, onData, params }) {
  const script = document.createElement('script')

  // 一、默认 callback 函数为 padding
  script.src = `${url}?${stringify({ callback: 'padding', ...params })}`

  // 二、使用 onData 作为 window.padding 函数，接收数据
  window['padding'] = onData

  // 三、动态加载脚本
  document.body.appendChild(script)
}

// 发送 JSONP 请求
jsonp_simple({
  url: 'http://localhost:10010',
  params: { id: 10000 },
  onData (data) {
    console.log('Data:', data)
  }
})
```
JSONP 需要服务端进行配合，返回 JSON With Padding 数据，代码如下:

```js
const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
  const params = qs.parse(query)

  const data = { name: 'shanyue', id: params.id }

  if (params.callback) {
    // 服务端将要返回的字符串
    str = `${params.callback}(${JSON.stringify(data)})`
    res.end(str)
  } else {
    res.end()
  }
})

server.listen(10010, () => console.log('Done'))
```

附代码: `nginx` 关于跨域的配置

```json
server {
  listen 80;
  server_name shanyue.tech;

  location / {
    # 避免非root路径404
    try_files $uri $uri/ /index.html;
  }

  # 解决跨域
  location /api {
    # 或者是 http://localhost:8080
    proxy_pass http://api.shanyue.tech;
  }
}
```