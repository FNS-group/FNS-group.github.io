---
title: SDK Platform Tools 常用命令整理
date: '2021-06-14 08:00:00'
sidebar: 'auto'
categories:
 - Android
tags:
 - Android
---

# 前言

>Android SDK Platform Tools 是 Android SDK 的一个组件。它包含与 Android 平台进行交互的工具，例如 adb、fastboot 和 systrace。
>开发 Android 应用时需要使用这些工具。如果您想要解锁设备的引导加载程序>并为其刷入新的系统映像，同样需要使用这些工具。

[Platform Tools下载](https://developer.android.google.cn/studio/releases/platform-tools)

[闷骚程序员整理的使用手册](https://github.com/mzlogin/awesome-adb)

# ADB常用命令

```shell

#刷机命令
adb reboot recovery                               #重启到 Recovery 模式
adb reboot                                        #从 Recovery 重启到 Android
adb reboot bootloader                             #重启到 Fastboot 模式
#其它命令
adb version                                        #查看adb版本
adb devices                                        #列出连接的设备
adb connect [ip]                                   #连接到对应主机
adb install <path_to_apk>                          #安装软件
adb uninstall [-k]                                 #卸载软件([-k]表示保留软件数据)
adb push <电脑> <手机>                              #向手机推送文件
adb pull /sdcard/file                              #推送手机文件到电脑
adb exec-out screencap -p > sc.png                 #截图保存到电脑

#更多命令
Android 系统是基于 Linux 内核的，所以 Linux 里的很多命令在 Android 里也有相同或类似的实现，在 adb shell 里可以调用。
#例：
adb shell ls
adb shell pm list packages                         #查看应用列表
adb shell am start [options]                       #启动软件
adb shell am stopservice [options]                 #停止软件
adb shell am force-stop                            #强制停止软件
adb shell getprop ro.product.model                 #查看设备型号
adb shell dumpsys battery                          #查看设备电量
adb shell wm size                                  #查看设备分辨率
adb shell wm density                               #查看设备dpi
adb shell ifconfig                                 #查看设备网络信息
adb shell cat /proc/cpuinfo                        #查看设备cpu信息
adb shell cat /proc/meminfo                        #查看设备内存信息
adb shell screencap -p /sdcard/sc.png              #截图保存到手机
adb shell screenrecord /sdcard/filename.mp4        #屏幕录制保存到手机
```

# Fastboot常用命令
```shell

fastboot devices                                    #列出连接的设备
fastboot reboot                                     #重启设备
fastboot reboot-模式                                #重启到对应模式
fastboot oem device-info                            #查看设备bl锁状态
fastboot oem unlock                                 #解除bl锁
fastboot oem unlock-go                              #解除bl锁
fastboot update xxx.zip                             #升级系统(卡刷包)
fastboot flashall                                   #刷写所有分区，该操作将刷写文件夹内(adb/fastboot工具所在文件夹)的所有镜像文件到对应分区中
fastboot flash 分区 xxxx.img                         #刷写分区
fastboot erase 分区                                  #擦除分区
fastboot format cache                                #清除cache分区
fastboot format userdata                             #清除userdata分区
fastboot boot kernel.img ramdisk.gz                  #刷入kernel.img
fastboot flash:raw boot kernel.img ramdisk.gz        #创建kernel.img
#选项:
擦除数据 → -w                                         #作用: Recovery下的wipe 列句: fastboot -w
指定设备 → -s                                         #作用: 指定某设备 列句: fastboot -s 序列号
指定设备 → -p                                         #作用: 指定某设备 列句: fastboot -p 设备名
指定设备 → -c                                         #作用: 替代系统启动命令 列句: fastboot -c 代码