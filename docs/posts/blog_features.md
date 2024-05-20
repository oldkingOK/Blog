---
draft: false
date: 2024-05-20
categories: []
---

# 博客相关设置

详细的建议看官方文档：

- [Changing the colors](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/) —— 从头开始
- [Setting up a blog](https://squidfunk.github.io/mkdocs-material/setup/setting-up-a-blog/) —— 直接开始看博客
- [Built-in blog plugin](https://squidfunk.github.io/mkdocs-material/plugins/blog/) —— 插件配置

需要在mkdocs.yml配置的：

<!-- more -->
### 改颜色和黑夜模式切换图标

[Changing the colors](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/#primary-color) 官网的按钮，可以很方便的查看改变颜色

### 改字体

需要设置 Regular 字体和 等宽字体，不过懒得改了

## 导航相关
### 加载方式

mkdocs默认方式是，把所有博客都塞在同一个html，改成 `instant` 可以分开

```yaml
theme:
  features:
    - navigation.instant
```

但是必须加上

```yaml
site_url: https://blog.oldkingok.cc
```

### 添加“回到顶部”

```yaml
theme:
  features:
    - navigation.top
```

### 搜索

```yaml
theme:
  features:
    - search.suggest # 搜索提示
    - search.highlight # 搜索高亮
```
### 博客文件夹

```yaml
plugins:
  - blog:
      blog_dir: .
```

### 语言

```yaml
theme:
    language: zh
```

