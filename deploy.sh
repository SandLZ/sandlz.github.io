#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
cd docs
# 生成静态文件
yarn run build


# # 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy new content!'

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@gitee.com:sandlz/sandlz.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:SandLZ/blog.git main

cd -