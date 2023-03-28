# 文件(夹)

## 列出

显示目录内容列表

### `-l`

权限、连接数、拥有者、群组、容量、修改时间、文件名

```bash
drwxr-xr-x 5 zliu zliu 4096 Mar 22 06:34 .
drwxr-xr-x 3 root root 4096 Mar 22 06:26 ..
-rw-r--r-- 1 zliu zliu  220 Feb 25  2020 .bash_logout
-rw-r--r-- 1 zliu zliu 3771 Feb 25  2020 .bashrc
drwx------ 2 zliu zliu 4096 Mar 22 06:27 .cache
drwxrwxr-x 3 zliu zliu 4096 Mar 22 06:30 .local
-rw-r--r-- 1 zliu zliu  807 Feb 25  2020 .profile
drwx------ 2 zliu zliu 4096 Mar 22 06:26 .ssh
-rw-r--r-- 1 zliu zliu    0 Mar 22 06:34 .sudo_as_admin_successful
```

<div>
  <img src="https://raw.githubusercontent.com/sandlz/images/master/uPic/2023_03_22_linux_permission.jpg">
</div>

说明：

- 第一个字符表示**文件**、**目录**、**链接文件**等
  - d: 目录
  - -: 文件
  - l: 链接文件
  - b: 随机存储设备
  - c: 一次性读取设备(键盘、鼠标等)
- 接下来的字符中，以三个为一组，且均为“rwx” 的三个参数的组合。其中，[ r ]代表可读 (read)、[ w ]代表可写(write)、[ x ]代表可执行(execute)。 要注意的是，这三个 权限的位置不会改变，如果没有权限，就会出现减号[ - ]
  - 第一组为“文件拥有者可具备的权限”
  - 第二组为“加入此群组之帐号的权限”
  - 第三组为“非本人且没有加入本群组之其他帐号的权限”

## 属性与权限

### chgrp

改变所属群组

:::tip
/etc/group 中需存在此群组
:::

```bash
# -R 递归
chgrp [-R] 群组名称 文件或目录
```

### chown

改变文件拥有者

:::tip
/etc/passwd 中需存在此用户
:::

```bash
chown [-R] 帐号名称 文件或目录
chown [-R] 帐号名称:群组名称 文件或目录
```

### chmod

改变权限（数字 or 符号）

#### 数字方式

Linux文件的基本权限就有九个，分别是`owner`/`group`/`others`三种身份各有自己的 `read`/`write`/`execute`权限;
假设文件的权限字符为:**-rwxrwx---**，可以使用数字来代表各个权限，各权限的分数对照表如下:

- r: 4
- w: 2
- x: 1

每种身份(`owner`/`group`/`others`)各自的三个权限(`r`/`w`/`x`)分数是需要累加的，例如当权
限为: [-rwxrwx---] 分数则是:

- owner  = rwx = 4 + 2 + 1 = 7
- group  = rwx = 4 + 2 + 1 = 7
- others = --- = 0 + 0 + 0 = 0

则该文件的权限数字为：**770**

#### 符号方式
