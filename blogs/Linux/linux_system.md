---
title: Linux系统相关配置
date: '2021-06-14 08:00:00'
sidebar: 'auto'
categories:
 - Linux
tags:
 - Linux
---

## 查看设备IP
```shell
ifconfig eth0 | grep -w inet | awk '{print $2}'
```

## 网络配置

### 设置DNS

```shell
nano /etc/resolv.conf`
```
修改以下内容，若没有请自行添加
>nameserver 1.1.1.1
>
>nameserver 8.8.8.8

```shell
systemctl restart networking
```
::: warning
若重启后恢复原配置，则需修改网络配置文件;
不同linux系统的网络配置文件路径如下
:::

```shell
/etc/sysconfig/network-scripts/ifcfg-eth0           #centos
/etc/network/interfaces                             #debian
```

# 网络配置文件相关参数说明
```shell
NAME=eth0                     # 网卡名称
DEVICE=eth0                   # eth0表示第一块网卡
HWADDR=00:0C:29:51:E8:31      # 指定设备的mac地址
ONBOOT=yes                    # yes 表示开机启动配置
BOOTPROTO=dhcp                # 值为 dhcp 表示动态 ip ，static 表示静态ip
NM_CONTROLLED=yes             # 设备 eth0 是否可以由 Network Manager 工具图形托管
#IPADDR=192.168.1.151         # 指定静态 IP 地址
#GATEWAY=192.168.1.1          # 指定网关 IP
#NETMASK=255.255.255.0        # 子网掩码
#DNS1=1.1.1.1                 # 指定DNS服务器1
#DNS2=8.8.8.8                 # 指定DNS服务器2
```