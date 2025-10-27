---
title: Виджеты рабочего окружения KDE Plasma
gallery:
  - type: slider
    title: Основные возможности управления виджетами через рабочий стол
    items:
      - src: /extensions/kde-widgets-1.png
        text: Перейти в режим редактирования - правый клик на рабочем столе и выбор пункта меню.
      - src: /extensions/kde-widgets-2.png
        text: Добавить или изменить виджеты - кнопка в верхнем левом углу после входа в режим редактирования.
      - src: /extensions/kde-widgets-3.png
        text: Список доступных виджетов - перетаскивайте виджеты на рабочий стол или панель.
      - src: /extensions/kde-widgets-4.png
        text: Получить новые виджеты - загрузка виджетов из KDE Store.
      - src: /extensions/kde-widgets-5.png
        text: Настройка виджета - нажмите на виджет правой кнопкой мыши и выберите настройки.
  - type: slider
    title: Установка виджетов из KDE Store
    items:
      - src: /extensions/kde-store-1.png
        text: KDE Store - официальный магазин виджетов и тем для KDE.
      - src: /extensions/kde-store-2.png
        text: Установка виджета прямо из интерфейса KDE.
      - src: /extensions/kde-store-3.png
        text: Управление установленными виджетами.
---

# Виджеты рабочего окружения KDE Plasma 6

Виджеты Plasma — небольшие компоненты интерфейса, написанные разработчиками, которые расширяют функциональность рабочего стола KDE Plasma 6. Виджеты могут размещаться на рабочем столе, в панелях или системном трее.

## KDE Store

Все виджеты рекомендуется устанавливать с официального сайта [KDE Store](https://store.kde.org). Это централизованный каталог виджетов, тем и других компонентов для KDE.

<AGWGallery id=1 />

## Установка и управление виджетами через интерфейс

### Через рабочий стол

Самый простой способ управления виджетами :

1. Щелкните правой кнопкой мыши по рабочему столу
2. Выберите **Перейти в режим редактирования**
3. Нажмите **Добавить или изменить виджеты...** в верхнем левом углу
4. Для установки новых виджетов нажмите **Получить новые виджеты**
5. Выберите **Загрузить новые виджеты...**

<AGWGallery id=0 />

## Управление виджетами из командной строки

Для управления виджетами в KDE Plasma 6 используется утилита `kpackagetool6`. Рассмотрим основные команды на примере виджета System Monitor.

### Список всех типов пакетов

```shell
kpackagetool6 --list-types
```

### Список установленных виджетов

```shell
kpackagetool6 --list --type Plasma/Applet
```

::: details Пример вывода

```shell
org.kde.plasma.systemmonitor
org.kde.plasma.clipboard
org.kde.plasma.timer
org.kde.plasma.calculator
org.kde.plasma.networkmanagement
```

:::

### Информация о виджете

```shell
kpackagetool6 --show org.kde.plasma.systemmonitor --type Plasma/Applet
```

### Установка виджета из файла

```shell
kpackagetool6 --install /path/to/widget.plasmoid --type Plasma/Applet
```

### Обновление виджета

```shell
kpackagetool6 --upgrade /path/to/widget.plasmoid --type Plasma/Applet
```

### Удаление виджета

```shell
kpackagetool6 --remove org.kde.plasma.systemmonitor --type Plasma/Applet
```

### Глобальная установка (для всех пользователей)

```shell
sudo kpackagetool6 --global --install /path/to/widget.plasmoid --type Plasma/Applet
```

## Локальная установка виджетов

### Из файла .plasmoid

Виджеты KDE распространяются в виде файлов с расширением `.plasmoid`. Для установки:

```shell
kpackagetool6 --install ~/Загрузки/widget-name.plasmoid --type Plasma/Applet
```

### Ручная установка

Для ручной установки виджета из исходников :

1. Распакуйте архив с виджетом:

```shell
cd ~/Загрузки
unzip widget-name.plasmoid -d widget-name
```

2. Найдите UUID виджета в файле `metadata.json`:

```shell
cat widget-name/metadata.json | grep "KPlugin" -A 5
```

3. Скопируйте файлы в директорию пользователя:

```shell
mkdir -p ~/.local/share/plasma/plasmoids/widget.name
cp -r widget-name/* ~/.local/share/plasma/plasmoids/widget.name/
```

4. Перезапустите Plasma Shell:

```shell
systemctl --user restart plasma-plasmashell.service
```

## Структура файлов виджетов

Виджеты располагаются в следующих директориях :

- **Пользовательские виджеты**: `~/.local/share/plasma/plasmoids/`
- **Системные виджеты**: `/usr/share/plasma/plasmoids/`

### Структура виджета

Каждый виджет содержит:

- `metadata.json` — метаданные виджета
- `contents/ui/main.qml` — основной интерфейс
- `contents/config/` — файлы конфигурации
- `contents/code/` — дополнительные скрипты

## Популярные виджеты для KDE Plasma 6

Некоторые полезные виджеты доступные в KDE Store :

- **System Monitor** — мониторинг системы
- **Weather Widget** — прогноз погоды
- **Latte Dock** — расширенная панель
- **Event Calendar** — календарь с событиями
- **Application Title Bar** — заголовок приложения в панели
