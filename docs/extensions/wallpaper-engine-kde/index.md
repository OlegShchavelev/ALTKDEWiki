---
aggregation:
  extension:
    type: wallpaper
  sisyphus: plasma-wallpaper-engine-kde-plugin
appstream:
  name: Wallpaper Engine for KDE
  summary: Плагин обоев, интегрирующий Wallpaper Engine в настройки KDE Plasma (поддержка сцен, видео и веб-обоев).
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

Плагин интегрирует коллекции и форматы Wallpaper Engine в модуль обоев KDE Plasma, поддерживая типы scene (2D‑сцены), видео и веб‑обои. Для работы требуется установленный Wallpaper Engine из Steam и доступ к библиотеке Steam с подписанными обоями.

<GalleryALT />

## Возможности

- Поддержка scene (2D), видео и веб‑обоев из Workshop Wallpaper Engine с выбором библиотеки Steam в настройках плагина.
- Аппаратное ускорение видео через QtMultimedia/GStreamer или mpv (опционально при сборке lib).

<!--@include: @extensions/.parts/install-from-repository.md-->

## Как использовать

1. Установите Wallpaper Engine в Steam и подпишитесь на обои в Workshop.
2. В настройках плагина укажите папку библиотеки Steam, содержащую каталог `steamapps` (по умолчанию `~/.local/share/Steam`).
3. Перейдите в «Параметры системы» → «Обои» → «Тип обоев» → выберите плагин и нужный пресет.

## Известные ограничения и сбои

### Проблемы с чёрным экраном или крахом Plasma

Если после применения обоев Plasma падает или появляется чёрный экран, выполните следующие действия:

::: info Что такое «containments» и почему это важно?

Containments (контейнеры) — это разделы конфигурации KDE Plasma, которые хранят настройки для каждого экрана или виртуального рабочего стола отдельно. Если у тебя один монитор — один containment, если два монитора — два containments, и так далее. Каждый containment имеет свои параметры обоев, виджетов и панелей.
:::

**Как исправить проблему:**

1. Откройте файл конфигурации: `~/.config/plasma-org.kde.plasma.desktop-appletsrc`
2. Найдите все строки с `WallpaperSource` (их может быть несколько, если у тебя несколько экранов)
3. Удалите эти строки для каждого containment — каждый раздел `[Containments][X]` может содержать свою строку `WallpaperSource`
4. Сохраните файл
5. Перезапустите Plasma командой:

```shell
systemctl --user restart plasma-plasmashell.service
```

**Пример:** Если у тебя два монитора, в файле могут быть две строки:

```shell
[Containments][0]
WallpaperSource=...

[Containments][1]
WallpaperSource=...
```

Удали обе строки, если возникают проблемы.

---

- Экран блокировки официально не гарантирован для динамических обоев. Часть веб‑обоев (WebEngine/WebGL) может работать нестабильно или без аппаратного ускорения в KDE Plasma.
- Отдельные обои (в особенности scene) могут приводить к зависаниям KDE Plasma, в таких случаях удаление `WallpaperSource`/`WallpaperWorkShopId` и повторный запуск Plasma часто помогает.
