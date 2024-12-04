---
title: 安卓ROM解包/打包，支持安卓9+
date: '2021-06-15 08:00:00'
sidebar: 'auto'
categories:
 - Android
tags:
 - Android
---

## 解包

# system.dat.br -> system.dat
安装[brotli](https://github.com/google/brotli)
```shell
brotli -d system.dat.br -o system.dat
```

# system.dat -> system.img(ext4)
安装[sdat2img](https://github.com/xpirt/sdat2img), 需要Python 2.7+环境支持
```shell
sdat2img.py system.transfer.list system.new.dat system.img
```

::: tip
这样格式就转换成img了，电脑可以用bandzip解压，安卓可以用[Zarchiver](https://lxt.lanzoui.com/icjqGw3xywj)解压.
:::

## 打包
```shell
file system.img                 #查看修改前system.img格式
ls -l system.img                #查看修改前system.img分区大小
```
# 把system文件夹下的文件打包成system.img镜像文件
安装[make_ext4fs](https://lxt.lanzoui.com/iZ9FRw40i4d)
```shell
make_ext4fs -s -l 3221225472 -a system system.img /system
#参数说明：
-s 表示安静处理，不输出动作，可以不带该参数
-l 表示最大的文件大小（system分区大小）单位也可以为MB
注:(其中的-l 参数3221225472数就是system.img的分区大小总字节数，需换成自己合适的参数
-a 表示Android的分区名，比如我这里是system
system.img 表示输出文件名
/system 表示被打包的输入目录
```

::: warning
打包完成后输入`file system.img`查看镜像信息,如果文件格式和原来不一样，需要转换文件格式
:::

```shell
simg2img system.img system_new.img        #转换为ext4格式
```
# system.img -> system.dat
安装[rimg2sdat](https://github.com/jazchen/rimg2sdat),需要Python 2.7.5+环境支持
```shell
rimg2sdat.py system_new.img -o /rom -v 4
```
::: tip
成功执行后在rom目录转出`system.new.dat`和`system.transfer.list`两个文件
:::

# system.dat -> system.dat.br

在转出的rom目录手动新建一个`system.patch.dat`的空文件
```shell
brotli -q 0 /rom/system.new.dat
```