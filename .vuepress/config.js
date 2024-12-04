module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  "title": "乔安の博客",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时光机",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/pbloods",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "repo主题作者.",
        "link": "https://www.recoluan.com"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "乔安",
    "authorAvatar": "/avatar.png",
    "startYear": "2020",

    "markdown": {
    "lineNumbers": true
    },
    noFoundPageByTencent: false,
    valineConfig: {
      appId: 'REWbcYczlTx3p6nQk14hGEbn-gzGzoHsz',// your appId
      appKey: '8d0xERxFGdENAHHaMkUPDYvo', // your appKey
    }
  },
  
  //插件
  plugins: [

    ///复制弹窗提示
    [
        "vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
      }
    ],
  ]
}