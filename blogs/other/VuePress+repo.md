---
title: VuePress+repo轻松搭建静态博客
date: '2021-11-03 08:00:00'
sidebar: 'auto'
categories:
 - other
tags:
 - 其它
---

::: tip
 这是一个纷繁的时代，信息渠道已经多到快让人喘不过气来。

 而个人博客这种来自互联网初的载体，似乎与这个环境显得格格不入。

 就像大海中的小岛，在海浪中显得那么不起眼，但它的存在本身就彰显了一种意义。

 无论是波涛汹涌，还是风平浪静，它都在那里，而你的心也就找到了一处可以停靠的港湾。
:::
<!-- more -->

## 关于

### 静态网站生成器   [VuePress](https://vuepress.vuejs.org/zh/)

### repo主题  [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

## 1、环境搭建

### 1.1 安装Nodejs8.0+

[Nodejs官网](https://nodejs.org/zh-cn/)

根据官网提示下载安装包安装即可(Nodejs自带npm工具，也可自行安装yarn),

安装完成后打开命令行工具，输入`node -v`，若返回版本信息则安装成功。

### 1.2 本地创建博客项目


```shell
# 全局安装theme-cli插件
npm install @vuepress-reco/theme-cli -g

# 在当前目录初始化一个项目，要求填写信息直接回车即可，安装后均可修改
theme-cli init myblog   #myblog为其所在目录

# 进入项目所在目录
cd myblog  

#为当前目录安装VuePress环境
npm install -D vuepress 

```

### 1.3 启动项目

```shell

# 运行测试环境
npm run dev

```

不出意外浏览器会自动跳转到`http://localhost:8080`(若端口被占用则依次递增，以终端输出为准)，若没有跳转自行输入地址，然后就能访问您的博客了！

![img](https://assets.huabyte.com/blog/image/blog-demo.png)

## 2、配置修改
### 2.1 项目结构

```shell
├─ .vuepress # 该目录下存放项目配置文件与静态资源
│  └─ public # 该目录下存放网页中所需的静态资源
│    ├─ hero.png # 首页大图
│    ├─ logo.png # 站点logo
│    ├─ favicon.ico #站点图标
│    └─ avatar.png #头像
│  ├─ config.js #该文件用于配置项目
│
├─ blogs #该目录下存放您编写的博客文章
│    ├─ category1
│    │  ├─ 2018
│    │  │  └─ 121501.md
│    │  └─ 2019
│    │    └─ 092101.md
│    ├─ category2
│    │  ├─ 2016
│    │  │  └─ 121501.md
│    │  └─ 2017
│    │    └─ 092101.md
│    └─ other
│        └─ guide.md
│
├─ docs  #该目录下存放您编写的文档
│  └─ theme-reco
│    ├─ api.md
│    ├─ plugin.md
│    ├─ theme.md
│    └─ README.md
│
├─ node_modules #存放着项目所需的依赖，下载的插件也在这里
├─ package.json #依赖管理文件
└─ README.md #这里存放着博客首页的内容
```

### 2.2 界面配置

**首页修改**
>首页即为启动页之后的主页面
首页的内容由项目根目录下的README.md文件生成，您可以通过更改其中的配置项来变更您的首页

```shell
---

home: true  #指定该文件为您的首页，改为false则不作为首页
heroText: vuepress-theme-reco  #首页居中显示的文本
tagline: A simple and beautiful vuepress blog theme. # 首页显示的标语
# heroImage: /hero.png  #首页显示的主图，默认被注释，取消注释可显示图片
# heroImageStyle: {  # 首页主图的样式控制，默认被注释
#  maxWidth: '600px',
#  width: '100%',
#  display: block,
#  margin: '9rem auto 2rem',
#  background: '#fff',
#  borderRadius: '1rem',
# }

bgImageStyle: { #背景图片样式
  height: '450px'
}

# 以下内容基本上不生效，可以不用关心
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
```

**修改默认语言为中文**
修改`myblog/.vuepress/config.js`文件，在适当位置插入下面标记的代码
```shell
module.exports = {
  locales: {             ##在适当位置插入即可
    '/': {               ##在适当位置插入即可
      lang: 'zh-CN'      ##在适当位置插入即可
    }                    ##在适当位置插入即可
  },                     ##在适当位置插入即可
  .
  .
  .
}
```
注意修改后导航栏及部分区域仍为英文，若想完全显示中文请手动修改`myblog/.vuepress/config.js`中对应内容;
若想配置多语言请移步[官方文档](https://vuepress-theme-reco.recoluan.com/views/1.x/local.html)

**更多内容修改**

大部分内容都可以通过修改`myblog/.vuepress/config.js`完成，

具体修改方法参照以下文档：

[Vuepress官方文档](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html) | [repo官方文档](https://vuepress-theme-reco.recoluan.com/views/1.x/)


### 2.3、插件安装

**复制弹窗插件**

安装依赖
```shell
npm install -D vuepress-plugin-nuggets-style-copy
```
配置

修改`myblog/.vuepress/config.js`文件，在适当位置插入下面标记的代码
```shell
module.exports = {
  plugins: [            ##在适当位置插入即可
    [                                              ##复制弹窗插件
        "vuepress-plugin-nuggets-style-copy", {    ##在适当位置插入即可
        copyText: "复制代码",                       ##在适当位置插入即可
        tip: {                                     ##在适当位置插入即可
            content: "复制成功!"                    ##在适当位置插入即可
        }                                          ##在适当位置插入即可
      }                                            ##在适当位置插入即可
    ],                                             ##复制弹窗插件
  ]                     ##在适当位置插入即可
}
```

**评论插件**

官方自带[Valine](https://valine.js.org/)和[Vssue](https://vssue.js.org/zh/)两种评论插件，无需安装，直接配置即可

两者区别是：

>Valine不需要游客登陆即可评论，但是需要实名认证;
>
>Vssee不需要实名认证，但是游客必须用Github登陆才能评论

*Valine配置*(代码使用方法同上)

请先登录或注册[LeanCloud](https://www.leancloud.cn/), 进入控制台先创建应用，打开应用，然后在左侧菜单的应用凭证里找到appId和appKey：
```shell
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

*Vssue配置*

登陆你的Github账号，在头像下面的`Settings/Developer settings/OAuth Apps`中配置appId和appKey即可
```shell
module.exports = {
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }  
}
```
## 3、文档写作

### 3.1 repo Front Matter
> 在markdown文档的顶部插入一段yaml配置代码

一个完整的 `Front Matter` 案例：
```shell
---

title: 烤鸭的做法    #文章标题
date: 2019-08-08    #文章创建日期，格式 2019-08-08 或 2019-08-08 08:08:08
sidebar: 'auto'     #是否开启侧边栏
categories:         #所属分类
- 烹饪
- 爱好
tags:               #所属标签
- 烤
- 鸭子
keys:               #文章密码
- '123456'
publish: false      #是否发布

---
```

另外还有一些`Vuepress`默认主题的变量例如`prev`, `next`，请移步[官方文档](https://vuepress.vuejs.org/zh/guide/frontmatter.html)

### 3.2 摘要写法

```shell
---

title: Vuepress使用指南(reco)
date: 2020-08-16
sidebar: 'auto'
categories:
- 工具
tags:
- vue
publish: true
---

::: tip
Vuepress是Vue作者尤雨溪开发的文档工具，本文采用Vuepress的reco主题进行相关配置说明
:::

<!-- m删除ore -->         #摘要从这里开始不显示

### markdown正文

```

### 3.3 内容写法

兼容MarkDown，获取更多移步[官方文档](https://vuepress-theme-reco.recoluan.com/views/1.x/syntax.html)

**写作工具**

记事本；

Vs Code,安装`MarkDown All in One` 插件;

[Typora](https://www.typora.net/)

## 4、上传到云

**方式**

Github + Github Action 推荐；

Gitee 需要实名且Page服务需要手动更新


```shell
#设置提交的用户信息
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

git clone `你的仓库地址`         #克隆空项目到本地（私有克隆403错误，一般是登陆了其它账号，控制面板删除凭据即可）
cp myblog\public  `你的仓库名`   #复制打包的资源到你的github项目
cd `你的仓库名`                  #进入你的github项目
git add .                       #添加当前目录所有文件到暂存区
git commit -m `备注`            #提交暂存区到本地仓库中
git push                        #将本地的分支版本上传到远程并合并
```