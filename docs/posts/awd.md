---
draft: false
date: 2024-05-30
categories:
---

# AWD

1. 内网聊天

<!-- more -->
## 内网聊天

### 准备

使用 RocketChat，教程：[Docker | Rocket.Chat Docs](https://docs.rocket.chat/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose#deploy-rocket.chat-on-docker)

```sh
curl -L https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/compose.yml -O
```

这相当于配置文件，需要修改一些参数（并取消注释）

```yml
# see:- https://github.com/RocketChat/Rocket.Chat/releases
RELEASE=release-candidate

### MongoDB configuration
# MongoDB version/image tag
MONGODB_VERSION=7.0.11
# See:- https://hub.docker.com/r/bitnami/mongodb
```

改这俩就行，标签可以去对应网址看，**不建议**直接使用 latest 标签

再在当前目录新建一个 `.env` ，内容就是版本号，和上面一样的

```yml
RELEASE=7.0.11
```

[Air-gapped Workspace Registration | Rocket.Chat Docs](https://docs.rocket.chat/setup-and-configure/rocket.chat-air-gapped-deployment/offline-workspace-registration)

### 运行

```sh
docker compose up -d
```

1. 断网
2. 访问 http://localhost:3000 填写必要信息，一直到激活部分
3. 点 “离线激活”
4. 拿到注册码
5. 连网
6. 到 [Rocket.Chat Cloud](https://cloud.rocket.chat/) 右上角 Register... —— Continue Offline
7. 粘贴注册码，拿到激活码
8. 再断网
9. 到刚才的地方，粘贴激活码，即可



