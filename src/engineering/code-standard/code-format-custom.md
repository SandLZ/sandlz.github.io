# 从 0 开始配置 React

本文将使用`Webpack5`从 0 开始配置`React`说明相关概念及演示如何集成一系列工具。

版本信息

```
Webpack5
React18
TypeScript
```

## 初始化项目

准备目录`webpack-react-ts`, 在该文件夹下执行

```bash
yarn init -y
```

在该文件夹下创建目录及文件

```
├── README.md
├── config
│   ├── webpack.base.js # 公共配置
│   ├── webpack.dev.js  # 开发配置
│   └── webpack.prod.js # 生产配置
├── public
│   └── index.html      # html模版
└── src
│    └── index.tsx      # react入口
├── tsconfig.json       # ts配置
├── package.json
```

安装`webpack`依赖

```bash
yarn add -D webpack webpack-cli
```

安装`react`依赖

```bash
yarn add -S react react-dom
```

安装`react`类型依赖

```bash
yarn add -D @types/react @types/react-dom
```

安装`typescript`依赖

```bash
yarn add -D typescript
```

配置`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["./src"]
}
```

添加`src/App/App.tsx`内容

```ts
import React from "react";

function App() {
  return <h1>webpack-react-ts</h1>;
}

export default App;
```

添加`src/index.tsx`内容

```ts
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
```

## 格式化&类型检查

安装`prettier`依赖

```bash
yarn add -D prettier
```

配置`prettier`
新建`.prettierrc.js`,内容如下：

```javascript
module.exports = {
  printWidth: 100, // 一行的字符数，如果超过会进行换行
  tabWidth: 2, // 一个tab代表几个空格数，默认就是2
  useTabs: false, // 是否启用tab取代空格符缩进，.editorconfig设置空格缩进，所以设置为false
  semi: false, // 行尾是否使用分号，默认为true
  singleQuote: true, // 字符串是否使用单引号
  trailingComma: "none", // 对象或数组末尾是否添加逗号 none| es5| all
  jsxSingleQuote: true, // 在jsx里是否使用单引号，你看着办
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  arrowParens: "avoid", // 箭头函数如果只有一个参数则省略括号
};
```

安装`ESLint`依赖

```bash
yarn add -D eslint
```

配置`eslint`
新建`.eslintrc.js`,内容如下：

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

## 配置`Webpack`

修改`webpack.base.js`

1. 配置入口文件

```javascript
const path = require("path");

module.exports = {
  // 入口文件
  entry: path.join(__dirname, "../src/index.tsx"),
};
```

2. 配置出口文件

```javascript
const path = require("path");

module.exports = {
  // ...
  // 打包文件出口
  output: {
    // js名称
    filename: "static/js/[name].js",
    // 产物输出路径
    path: path.join(__dirname, "../dist"),
    // 清理产物文件夹
    clean: true,
    // 产物的公共路径
    publicPath: "/",
  },
};
```

3. 配置`loader`解析`ts`和`jsx`

由于`webpack`默认只能识别`js`文件,不能识别`jsx`语法,需要配置`loader`的预设预设 `@babel/preset-typescript` 来先将`ts`语法转换为 `js` 语法,
再借助预设 `@babel/preset-react` 来识别`jsx`语法。

安装`babel`核心模块和`babel`预设

```bash
yarn add -D babel-loader @babel/core @babel/preset-react @babel/preset-typescript
```

```javascript
const path = require("path");

module.exports = {
  // ...
  module: {
    rules: [
      {
        // 匹配.ts, tsx文件
        test: /.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            // 预设执行顺序由右往左,所以先处理ts,再处理jsx
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
};
```

4. 配置`extensions`

`extensions`是`webpack`的 r`esolve`解析配置下的选项，在引入模块时不带文件后缀时，会来该配置数组里面依次添加后缀查找文件，
因为 `ts` 不支持引入以 `.ts`, `tsx` 为后缀的文件，所以要在 `extensions` 中配置，而第三方库里面很多引入 `js` 文件没有带后缀，所以也要配置下 `js`

```javascript
module.exports = {
  // ...
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
};
```

这里只配置`js`, `tsx`和`ts`，其他文件引入都要求带后缀，可以提升构建速度。

5. 添加`html-webpack-plugin`插件

```bash
yarn add -D html-webpack-plugin
```

配置插件(`webpack.base.js`)

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      // 模版文件路径
      template: path.resolve(__dirname, "../public/index.html"),
      // 自动注入静态资源
      inject: true,
    }),
  ],
};
```

## 开发环境

1. 安装`dev-server`依赖及合并配置依赖

```bash
yarn add -D webpack-dev-server webpack-merge
```

2. 修改`webpack.dev.js`代码, 合并公共配置，并添加开发模式配置

```javascript
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  //开发模式
  mode: "development",
  // 源码调试模式
  devtool: "eval-cheap-module-source-map",
  devServer: {
    // 服务端口号
    port: 3000,
    // gzip压缩,开发环境不开启,提升热更新速度
    compress: false,
    // 开启热更新，后面会讲react模块热替换具体配置
    hot: true,
    // 解决history路由404问题
    historyApiFallback: true,
    static: {
      // 托管静态资源public文件夹
      directory: path.join(__dirname, "../public"),
    },
  },
});
```

3. 添加开发模式脚本

```json
{
  "scripts": {
    "start": "webpack serve -c ./config/webpack.dev.js"
  }
}
```

## 生产环境

1. 修改`webpack.prod.js`代码

```javascript
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

module.exports = merge(baseConfig, {
  // 生产模式
  mode: "production",
});
```

2. 添加生产模式脚本

```json
{
  "scripts": {
    "build": "webpack serve -c ./config/webpack.dev.js"
  }
}
```

## 样式配置

1. 安装`loader`以解析 css

```bash
yarn add -D style-loader css-loader
```

针对`scss`,额外安装

```bash
yarn add -D sass sass-loader
```

2. 修改`webpack.base.js`

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

3. 处理`css3`前缀兼容

安装`postcss-loader`
```bash
yarn add -D postcss postcss-loader autoprefixer
```

## js兼容

