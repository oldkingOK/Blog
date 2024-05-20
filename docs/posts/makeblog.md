---
draft: false
date: 2024-05-20
categories: []
---

# 优雅的创建博客/仓库

## 概览

1. 购置域名
2. 配置github仓库
3. 配置DNS
4. 子域名相关

<!-- more -->
## 0. 前言

本方案出现的目的在于实现一套一劳永逸的博客搭建解决方案

```mermaid
graph LR
  A[Obsidian编辑博客] --> B[上传github];
  B -->C[用Cloudflare的域名以加速访问]
```

并于Obsidian预置了很多优化体验的插件

## 1. 购置域名

推荐在 [dash.cloudflare.com](https://dash.cloudflare.com/) 购买域名，点 Register Domain 然后搜索域名支付即可

## 2. 配置github仓库

### 创建

使用模板 [oldkingOK/ok-obsidian](https://github.com/oldkingOK/ok-obsidian) 创建一个仓库，在 `Setting` 里 Pages - Source 选中 Deploy from branch，选择 `gh-pages` ，点 Save 即可

![[image-20240520235327405.png]]

如果没有出现这个分支，就等几分钟再刷新一下页面。

### 克隆

克隆下来之后，创建一个文件，名字是 `CNAME` ，里面写上域名（比如我这里是`oldkingok.cc`），然后移动CNAME到docs，push就完成github的域名配置了

参考：[Deploying Your Docs - MkDocs](https://www.mkdocs.org/user-guide/deploying-your-docs/#custom-domains)

## 3. 配置DNS

[dash.cloudflare.com](https://dash.cloudflare.com/)
-> Domain Registration
-> Manage Domains
-> 域名最右边的 Manage
-> 最右边的 Update DNS configuration
-> Add record

![[image-20240520235546619.png]]

填完之后点 Save 就可以了

## 子域名相关

新增一个 Record，把 name 改成想要配置的子域名，比如 `re` 就是 `re.oldkingok.cc` ，Target不变，点 Save

然后仓库里的 `CNAME` 里就填子域名，就可以通过子域名访问对应的仓库了