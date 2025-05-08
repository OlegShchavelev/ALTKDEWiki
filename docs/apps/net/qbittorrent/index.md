---
title: qBittorrent
aggregation:
  flatpak: org.qbittorrent.qBittorrent
  sisyphus: qbittorrent
appstream:
  id: org.qbittorrent.qBittorrent
  name: qBittorrent
  icon: ./img/qbittorrent-logo.svg
  summary: Свободный кроссплатформенный клиент файлообменной сети BitTorrent.
  developer:
    name: qBittorrent Community
  metadata_license:
    name: GNU GPLv3 + OpenSSL
    link: https://github.com/qbittorrent/qBittorrent/blob/master/COPYING/
  url:
    homepage: https://www.qbittorrent.org/
    bugtracker: https://github.com/qbittorrent/qBittorrent/issues/
    translate: https://github.com/qbittorrent/qBittorrent/wiki/How-to-translate-qBittorrent
gallery:
  1:
    title: Галерея
    type: silentbox
    images:
      https://www.youtube.com/watch?v=XPe_MSCHBQ8:
        description: Видео фиулвифдцтдл
        download: true
        autoplay: true
        controls: false
      https://www.youtube.com/watch?v=g3xIvgnrWVk: Что угодно, просто чтобы был ключ, если не нужны параметры
      https://www.youtube.com/watch?v=XPe_MSC1BQ8:
        description: Видео фиулвфцафцацвфцвфцифдцтдл
        download: true
        autoplay: true
        controls: false
    lazyload: true
  2:
    title: Ой, а это вторая галерея
    type: silentbox
    images:
      ./img/screenshot.png: 1
      ./img/screenshot copy.png:
        download: true
      ./img/screenshot copy 2.png:
        description: Очередной скриншот
    lazyload: true
---

# qBittorrent

qBittorrent — это бесплатный и открытый клиент BitTorrent, который позволяет пользователям загружать и скачивать файлы через протокол BitTorrent.

<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-flatpak.md-->
