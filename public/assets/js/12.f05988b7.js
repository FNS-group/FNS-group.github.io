(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{555:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("blockquote",[a("p",[t._v("Android SDK Platform Tools 是 Android SDK 的一个组件。它包含与 Android 平台进行交互的工具，例如 adb、fastboot 和 systrace。\n开发 Android 应用时需要使用这些工具。如果您想要解锁设备的引导加载程序>并为其刷入新的系统映像，同样需要使用这些工具。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.android.google.cn/studio/releases/platform-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Platform Tools下载"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mzlogin/awesome-adb",target:"_blank",rel:"noopener noreferrer"}},[t._v("闷骚程序员整理的使用手册"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"adb常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adb常用命令"}},[t._v("#")]),t._v(" ADB常用命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#刷机命令")]),t._v("\nadb "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v(" recovery                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启到 Recovery 模式")]),t._v("\nadb "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("                                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#从 Recovery 重启到 Android")]),t._v("\nadb "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v(" bootloader                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启到 Fastboot 模式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#其它命令")]),t._v("\nadb version                                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看adb版本")]),t._v("\nadb devices                                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出连接的设备")]),t._v("\nadb connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#连接到对应主机")]),t._v("\nadb "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path_to_apk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装软件")]),t._v("\nadb uninstall "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#卸载软件([-k]表示保留软件数据)")]),t._v("\nadb push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("电脑"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("手机"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#向手机推送文件")]),t._v("\nadb pull /sdcard/file                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送手机文件到电脑")]),t._v("\nadb exec-out screencap -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sc.png                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#截图保存到电脑")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#更多命令")]),t._v("\nAndroid 系统是基于 Linux 内核的，所以 Linux 里的很多命令在 Android 里也有相同或类似的实现，在 adb shell 里可以调用。\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#例：")]),t._v("\nadb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nadb shell pm list packages                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看应用列表")]),t._v("\nadb shell am start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动软件")]),t._v("\nadb shell am stopservice "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#停止软件")]),t._v("\nadb shell am force-stop                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#强制停止软件")]),t._v("\nadb shell getprop ro.product.model                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备型号")]),t._v("\nadb shell dumpsys battery                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备电量")]),t._v("\nadb shell wm size                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备分辨率")]),t._v("\nadb shell wm density                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备dpi")]),t._v("\nadb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备网络信息")]),t._v("\nadb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/cpuinfo                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备cpu信息")]),t._v("\nadb shell "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/meminfo                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备内存信息")]),t._v("\nadb shell screencap -p /sdcard/sc.png              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#截图保存到手机")]),t._v("\nadb shell screenrecord /sdcard/filename.mp4        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#屏幕录制保存到手机")]),t._v("\n")])])]),a("h1",{attrs:{id:"fastboot常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastboot常用命令"}},[t._v("#")]),t._v(" Fastboot常用命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\nfastboot devices                                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出连接的设备")]),t._v("\nfastboot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("                                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启设备")]),t._v("\nfastboot reboot-模式                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启到对应模式")]),t._v("\nfastboot oem device-info                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看设备bl锁状态")]),t._v("\nfastboot oem unlock                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解除bl锁")]),t._v("\nfastboot oem unlock-go                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解除bl锁")]),t._v("\nfastboot update xxx.zip                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#升级系统(卡刷包)")]),t._v("\nfastboot flashall                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#刷写所有分区，该操作将刷写文件夹内(adb/fastboot工具所在文件夹)的所有镜像文件到对应分区中")]),t._v("\nfastboot flash 分区 xxxx.img                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#刷写分区")]),t._v("\nfastboot erase 分区                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#擦除分区")]),t._v("\nfastboot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" cache                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清除cache分区")]),t._v("\nfastboot "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" userdata                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清除userdata分区")]),t._v("\nfastboot boot kernel.img ramdisk.gz                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#刷入kernel.img")]),t._v("\nfastboot flash:raw boot kernel.img ramdisk.gz        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建kernel.img")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#选项:")]),t._v("\n擦除数据 → -w                                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#作用: Recovery下的wipe 列句: fastboot -w")]),t._v("\n指定设备 → -s                                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#作用: 指定某设备 列句: fastboot -s 序列号")]),t._v("\n指定设备 → -p                                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#作用: 指定某设备 列句: fastboot -p 设备名")]),t._v("\n指定设备 → -c                                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#作用: 替代系统启动命令 列句: fastboot -c 代码")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);