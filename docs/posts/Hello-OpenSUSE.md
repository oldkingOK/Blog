---
draft: false
date: 2024-05-24
categories:
---

# I'm A Post!

> Yes



# Hello-OpenSUSE

基础安装

```sh
sudo zypper install git wget curl 
```

| 项目              | 解决                                                                                    | 备注  |
| --------------- | ------------------------------------------------------------------------------------- | --- |
| 屏幕分辨率只有 800x600 | 装Nvidia驱动，[官网教程](https://zh.opensuse.org/SDB:NVIDIA_%E9%A9%B1%E5%8A%A8)               |     |
| 全局缩放            | 修改软件的缩放比例                                                                             |     |
| task bar大小      | 右键-进入编辑模式                                                                             |     |
| logic options   | sudo zypper solaar && su && solaar                                                    |     |
| 打开kconsole快捷键   | 搜索“快捷键”-自定义快捷键-示例                                                                     |     |
| zsh语法高亮         | [README](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md) |     |
| zsh自动补全         | [README](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md)     |     |

### zsh

```sh
git clone https://github.com/powerline/fonts.git
cd fonts
./install.sh

sudo zypper install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# 主题
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.

插件

```sh
sudo zypper addrepo https://download.opensuse.org/repositories/shells:zsh-users:zsh-syntax-highlighting/15.4/shells:zsh-users:zsh-syntax-highlighting.repo
sudo zypper addrepo https://download.opensuse.org/repositories/shells:zsh-users:zsh-autosuggestions/15.4/shells:zsh-users:zsh-autosuggestions.repo
sudo zypper refresh
sudo zypper install zsh-syntax-highlighting zsh-autosuggestions

echo "source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
echo "source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

重进 Terminal 即可
### Edge安装

[知乎](https://zhuanlan.zhihu.com/p/625277291)

```sh
sudo rpm --import https://packages.microsoft.com/keys/  
microsoft.asc
sudo zypper ar https://packages.microsoft.com/yumrepos  
/edge microsoft-edge-dev
sudo zypper refresh
sudo zypper install microsoft-edge-dev
```

