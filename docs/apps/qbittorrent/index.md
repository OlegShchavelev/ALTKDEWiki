---
title: qBittorrent
bundle: 
    sisyphus:
        srpms: qbittorrent
    flatpak:
        appId: org.qbittorrent.qBittorrent
appstream: 
    id: org.qbittorrent.qBittorrent
    name: qBittorrent
    summary: Клиент Bittorrent с открытым исходным кодом
    icon: 
        src: ./img/org.qbittorrent.qBittorrent.png
        title: qBittorrent
    metadata_license: 
        name: GPLv2+
        link: https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html
    url:
        homepage: 
            name: qbittorrent.org
            link: https://forum.qbittorrent.org/
        help:
            name: forum.qbittorrent.org
            link: https://forum.qbittorrent.org/
        translate: 
            name: github.com
            link: https://github.com/qbittorrent/qBittorrent/wiki/How-to-translate-qBittorrent
        bugtracker:
            name: bugs.qbittorrent.org
            link: https://bugs.qbittorrent.org/
appstreamRepo: org.qbittorrent.qBittorrent
appstreamFlatpak: org.qbittorrent.qBittorrent
---

# {{ $frontmatter.title }}

{{ $frontmatter.title }} — это бесплатный и открытый клиент BitTorrent, который позволяет пользователям загружать и скачивать файлы через протокол BitTorrent.

![Скриншот программы](./img/screenshot.png)

## Установка из репозитория 

**{{ $frontmatter.title }}** можно установить любым привычным и удобным способом:

<!--@include: /parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install qbittorrent
```
```shell[epm]
epm -i qbittorrent
```
:::

## Установка с помощью Flatpak

При наличии пакета [Flatpak](/package-manager/flatpak/), можно установить **{{ $frontmatter.title }}** одной командой:
```shell
flatpak install flathub org.qbittorrent.qBittorrent
```

<!--@include: /parts/install/software-flatpak.md-->