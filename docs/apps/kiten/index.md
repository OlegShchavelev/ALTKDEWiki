---
title: Kiten
appstreamRepo: org.kde.kiten.desktop
appstreamFlatpak: org.kde.kiten.desktop
---

# {{ $frontmatter.title }}

{{ $frontmatter.title }} — справочник и учебное пособие по изучению японского языка. Он содержит англо-японский и японско-английский словарь, а также словарь кандзи. Для словаря кандзи поддерживается несколько способов поиска символов.

![Скриншот программы](https://cdn.kde.org/screenshots/kiten/kiten.png)

## Установка из репозитория

**{{ $frontmatter.title }}** можно установить любым привычным и удобным способом:

<!--@include: ../../parts/install/software-repo.md-->

**Установка через терминал**

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install kde5-kiten
```
```shell[epm]
epm -i kde5-kiten
```
:::

## Установка c помощью Flatpak

При наличии пакета [Flatpak](/flatpak), можно установить **{{ $frontmatter.title }}** одной командой:

```shell
flatpak install flathub org.kde.kiten
```

<!--@include: ../../parts/install/software-flatpak.md-->
