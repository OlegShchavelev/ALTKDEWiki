---
title: LibreOffice
aggregation:
    sisyphus: LibreOffice-still
    flatpak: 
        id: org.libreoffice.LibreOffice
        build: offical
appstream:
    id: org.libreoffice.LibreOffice
    name: LibreOffice
    icon: ./img/org.libreoffice.LibreOffice.desktop.png
    summary: Мощный офисный пакет LibreOffice
    metadata_license: 
        name: MPL-v2.0
        link: https://www.mozilla.org/en-US/MPL/2.0/
    developer: 
        name: The Document Foundation
    url:
        homepage: https://www.libreoffice.org/
        bugtracker:
            name: documentfoundation.org
            link: https://bugs.documentfoundation.org/
        donation: https://www.libreoffice.org/donate/
        translate: https://www.libreoffice.org/community/localization/
---

# LibreOffice

LibreOffice — это мощный офисный пакет, который полностью совместим с 32 и 64-битными системами. Он был переведен более чем на 30 языков, что делает его доступным для пользователей по всему миру. LibreOffice поддерживает большинство популярных операционных систем, включая GNU/Linux, Microsoft Windows и Mac OS X.

## Установка из репозитория

**LibreOffice** можно установить любым привычным и удобным способом:

**Установка через терминал**

:::tabs
== Still
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice-still LibreOffice-still-kde5
```
```shell[epm]
epm -i LibreOffice-still LibreOffice-still-kde5
```
== Fresh 
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install LibreOffice LibreOffice-kde5
```
```shell[epm]
epm -i LibreOffice LibreOffice-kde5
```
:::

<!--@include: @apps/_parts/install/content-flatpak.md-->

## Шрифты в LibreOffice

В документации LibreOffice [перечислены шрифты](https://wiki.documentfoundation.org/Fonts), входящие в комплект с LibreOffice. Если вы хотите использовать, например, «Times New Roman» от Microsoft, вам может понадобиться установить дополнительные пакеты. В ALT Regular KDE вы можете к установить шрифты используя терминал:

::: code-group
```shell[apt-get]
su -
apt-get update
apt-get install fonts-ttf-ms
```
```shell[epm]
epm -i fonts-ttf-ms
```
:::

Существует несколько вариантов [установки дополнительных шрифтов](#) в офисный пакет LibreOffice. После установки шрифта в операционную систему ALT Regular KDE, необходимо перезагрузить приложение, чтобы установленные шрифты появились в списке.