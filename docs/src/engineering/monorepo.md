# Monorepo

`yarn init -y`

`yarn add -D lerna && lerna init`

```
# package.json
"private": true, // root禁止发布
// 配置package目录
"workspaces": [
  "packages/*"
] 
```

## Lerna

`independent` 独立的 版本控制模式
