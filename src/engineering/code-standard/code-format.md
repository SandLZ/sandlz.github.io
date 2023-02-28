# 代码格式化

> 统一团队代码风格。

本文将使用`create-react-app` 创建的React项目，说明相关概念及演示如何集成一些列格式化工具，覆盖开发部分开发过程。

[[toc]]

## 概念

|      |                           extends                            |                           Plugins                            |
| :--: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| 命名 |  `eslint-config-${name}`<br />`@scope/eslint-config${name}`  | `eslint-plugin-${name}` <br />`@scope/eslint-plugin-${name}` |
| 用途 | 扩展: 集成一个个配置方案的最佳实践，即别人配置好的.eslintrc.js | 插件: 添加插件中的规则<br /> 必有：一堆自定义的规则的集合 <br />可能有：总结的最佳实践 |
| 配置 | 全称：`eslint-config-prettier` <br />缩写：`prettier` <br />插件中的config： `plugin:plugin-name/${configName}` <br />如:`plugin:prettier/recommended` |    全称：`eslint-plugin-prettier` <br />缩写：`prettier`     |
| 用法 |           `extends`中配置<br />后面的配置优先级更高            | - `extends`："plugin:prettier/recommended"<br />- `plugins`:"prettier", 具体使用哪些规则需在`rules`中配置 |

下图展示 `eslint-plugin-react` 支持的规则集合
<div>
    <img src="https://github.com/sandlz/images/raw/master/uPic/k9gKeV.png" alt="eslint-plugin-react 示例">
</div>

## ESLint

**Eslint** 是一个可以检验代码，并给出报告的工具。它的目标是保证代码的一致性，避免错误。Eslint 为我们提供了 **ECMAScript/JavaScript** 规范的代码校验，我们可以根据个人/团队的代码风格进行配置，也可以使用开源的配置方案.

> 本文会采用 `eslint-config-airbnb` 来配置。

### 安装

```bash
# create-react-app 方式已安装ESLint
yarn add -D eslint
```

### 配置文件

可选的配置文件方式（已按优先级排序）
1. `.eslintrc.js`(优先使用此方式)
2. `.eslintrc.cjs`
3. `.eslintrc.yaml`
4. `.eslintrc.yml`
5. `.eslintrc.json`
6. `package.json`

### 示例

```js
// .eslintrc.js
module.exports = {
  extends: [
    'react-app', // react-app配置
    'airbnb',
    'plugin:react/jsx-runtime', // (Prevent missing React when using JSX (react/react-in-jsx-scope))
    'plugin:prettier/recommended', // prettier推荐配置
  ],
  rules: {},
};
```

## Prettier

```bash
# prettier 与 eslint整合
yarn add -D eslint-plugin-prettier
# prettier(-E 指定版本)
yarn add -D -E prettier
```

### 推荐配置

```js
{
  "extends": ["plugin:prettier/recommended"]
}
```

上述配置实际会生成如下配置：

```js
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

- **`"extends"：["prettier"]`** 启用 `eslint config prettier` 中的配置，这将关闭与prettier冲突的一些eslint规则
- **`"plugins"：["prettier"]`** 注册此插件
- **`"prettier/prettier"："error"`** 打开此插件提供的规则，该插件从ESLint中运行prettier
- **`"arrow-body-style": "off"` & `"prefer-arrow-callback": "off"`**：关闭两条ESLint核心规则。

## StyleLint

## Husky

