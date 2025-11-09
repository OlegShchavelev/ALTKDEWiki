---
aggregation:
  extension:
    type: wallpaper
  sisyphus: plasma-wallpaper-engine-kde-plugin
appstream:
  name: Wallpaper Engine for KDE
  summary: Плагин обоев, интегрирующий Wallpaper Engine в настройки KDE Plasma (поддержка сцен, видео и веб-обоев)
  developer:
    name: catsout
    nickname: catsout
  url:
    homepage: https://github.com/catsout/wallpaper-engine-kde-plugin
    bugtracker: https://github.com/catsout/wallpaper-engine-kde-plugin/issues
gallery:
  title: Галерея
  type: slider
  items:
    - src: ./img/wallpaper-engine-kde-1.jpg
    - src: ./img/wallpaper-engine-kde-2.png
    - src: ./img/wallpaper-engine-kde-3.png
---

# Wallpaper Engine for KDE

Плагин интегрирует коллекции и форматы Wallpaper Engine в модуль обоев KDE Plasma, поддерживая типы scene (2D‑сцены), видео и веб‑обои; для работы требуется установленный Wallpaper Engine из Steam и доступ к библиотеке Steam с подписанными обоями.

<GalleryALT />

## Возможности

- Поддержка scene (2D), видео и веб‑обоев из Workshop Wallpaper Engine с выбором библиотеки Steam в настройках плагина.
- Аппаратное ускорение видео через QtMultimedia/GStreamer или mpv (опционально при сборке lib).

<!--@include: @extensions/.parts/install-from-repository.md-->

## Как использовать

1. Установите Wallpaper Engine в Steam и подпишитесь на обои в Workshop.
2. В настройках плагина укажите папку библиотеки Steam, содержащую каталог `steamapps` (по умолчанию `~/.local/share/Steam`).
3. Перейдите в «**Параметры системы**» → «**Обои**» → «**Тип обоев**» → выберите плагин и нужный пресет.

## Известные ограничения и сбои

- Если после применения обоев Plasma падает или появляется чёрный экран, удалите строку `WallpaperSource` в `~/.config/plasma-org.kde.plasma.desktop-appletsrc` для соответствующего монитора. При нескольких экранах такие строки могут повторяться для разных containments, после чего перезапустите Plasma.
- Перезапуск Plasma выполняется командой: `systemctl --user restart plasma-plasmashell.service`.
- Экран блокировки официально не гарантирован для динамических обоев. Часть веб‑обоев (WebEngine/WebGL) может работать нестабильно или без аппаратного ускорения в plasmashell.
- Отдельные обои (в особенности scene) могут приводить к зависаниям plasmashell, в таких случаях удаление `WallpaperSource`/`WallpaperWorkShopId` и повторный запуск Plasma часто помогает.
