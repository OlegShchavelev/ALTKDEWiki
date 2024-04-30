---
aggregation:
    flatpak: org.qbittorrent.qBittorrent
    sisyphus: qbittorrent
appstream:
    id: org.qbittorrent.qBittorrent
    name: qBittorrent
    icon: ./img/org.qbittorrent.qBittorrent.png
    summary: Cвободный кроссплатформенный клиент файлообменной сети BitTorrent.
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
        images:
            https://www.youtube.com/watch?v=XPe_MSCHBQ8:
                description: Видео фиулвифдцтдл
                download: true
                autoplay: true
                controls: false
            https://www.youtube.com/watch?v=g3xIvgnrWVk: Что угодго, просто чтобы был ключ, если не нужны параметры
            https://www.youtube.com/watch?v=XPe_MSC1BQ8:
                description: Видео фиулвфцафцацвфцвфцифдцтдл
                download: true
                autoplay: true
                controls: false
        lazyload: true
    2:
        title: Ой, а это вторая галерея
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

<AKWGallery id=1 />

[Скриншот программы](./img/screenshot.png)

<!--@include: @apps/_parts/install/content-repo.md-->

<AKWGallery id=2 />


<!--@include: @apps/_parts/install/content-flatpak.md-->