---
title: Haruna
aggregation:
  flatpak: org.kde.haruna
  sisyphus: kde5-haruna
appstream:
  id: org.kde.haruna
  name: Haruna
  icon: ./img/haruna-logo.svg
  summary: Медиаплеер от KDE на основе Qt.
  developer:
    name: KDE
    avatar: ./img/KDE_logo.png
  metadata_license:
    name: GNU GPLv3 or later
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://haruna.kde.org/
    bugtracker: https://bugs.kde.org/enter_bug.cgi?product=haruna
---

# Haruna

Haruna — медиаплеер с открытым исходным кодом, созданный на основе Qt, сочетающий в себе простоту и функциональность.

![Скриншот программы Haruna](./img/haruna_screen.png 'Скриншот программы Haruna')

## Установка из репозитория

:::tabs
==apt-get

```shell
su -
apt-get update
apt-get install kde5-haruna
```

==epm

```shell
epm -i kde5-haruna
```

:::

<!--@include: @apps/.parts/install/content-flatpak.md-->

### Комбинации клавиш

Для того чтобы ускорить и, возможно, облегчить использование данного плеера можно использовать сочетания клавиш, которые при надобности легко изменяются в настройках.
Рассказывать о всех них нет смысла, поэтому ниже вы найдёте таблицу с только самыми \*нужными из них.

|          Комбинация          |                 Описание                  |
| :--------------------------: | :---------------------------------------: |
|            [[F]]             |      Переключить полноэкранный режим      |
| [[Ctrl]] + [[Shift]] + [[L]] | Загрузить последний воспроизведённый файл |
|             [[m]             |              Выключить звук               |
|       [[Ctrl]] + [[O]]       |               Открыть файл                |
| [[Ctrl]] + [[Shift]] + [[O]] |                Открыть URL                |
|            [[\]]]            |    Увеличить скорость воспроизведения     |
|            [[\[]]            |    Уменьшить скорость воспроизведения     |
|        [[Backspace]]         |   Восстановить скорость воспроизведения   |
|       [[Ctrl]] + [[M]]       |    Переключить отображение строки меню    |
|       [[Ctrl]] + [[H]]       |     Переключить отображение заголовка     |

\*В данную таблицу не были включены самые базовые комбинации в духе воспроизведение/пауза, выход и так далее.
