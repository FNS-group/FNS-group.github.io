---
title: systemctl设置开机自启
date: '2020-04-07 08:00:00'
sidebar: 'auto'
categories:
 - Linux
tags:
 - Linux
---

# 设置必要信息
```shell
port="80"
AUTH_TOKEN="xxxxxxxxx"
```

# 创建系统服务
```shell
cat > /etc/systemd/system/ctlist.service <<EOF

[Unit]
Description=ctlist
After=network.target

[Service]
Type=simple
ExecStart=/www/wwwroot/189.pblood.com/CTList -a ${AUTH_TOKEN} -bind 0.0.0.0 -port ${port} -l
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
```

# 启动服务并设置开机自启
```shell
systemctl start ctlist
systemctl enable ctlist
```