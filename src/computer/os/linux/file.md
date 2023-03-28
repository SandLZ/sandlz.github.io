# File & Dir

## ls

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
