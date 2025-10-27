---
title: DuckStation
aggregation:
  flatpak: org.duckstation.DuckStation
  sisyphus: duckstation
  epm:
   play:
    id: duckstation
    build: unofficial

appstream:
  id: duckstation
  name: DuckStation
  icon: /duckstation/duckstation-logo.png
  summary: Эмулятор PlayStation.
  keywords:
    - Stenzek
  developer:
    name: Stenzek
  metadata_license:
    name: Attribution NonCommercial NoDerivatives 4.0 International
    link: https://wiki.creativecommons.org/wiki/Considerations_for_licensors_and_licensees#Considerations_for_licensees
  url:
    homepage: https://www.duckstation.org/
    bugtracker: https://github.com/stenzek/duckstation/actions
    
gallery:
  - type: slider
    items:
      - src: /duckstation/duckstation-welcome.png
      - src: /duckstation/duckstation-menu.webp
      - src: /duckstation/duckstation-game1.jpg
      - src: /duckstation/duckstation-game2.png

---



# DuckStation
<AGWGallery />
DuckStation — это эмулятор консоли Sony PlayStation™, ориентированный на удобство игры, высокую производительность и долгосрочную поддержку.
Его цель — аксимальная точность эмуляции при сохранении совместимости даже с маломощными устройствами.
Использование «хаков» не приветствуется — стандартные настройки обеспечивают совместимость со всеми играми, за исключением некоторых дополнительных улучшений.
Полнофункциональный интерфейс на Qt и TV-режим (Dear ImGui).

Особенности DuckStation:
- Работа с монтируемыми файловыми системами
- Аппаратный рендеринг (OpenGL, Vulkan) с улучшениями.
- Апскейлинг, фильтрация текстур, 24-битный цвет.
- PGXP (коррекция геометрии, текстур и эмуляция буфера глубины).
- Точное смешивание цветов (Rasterizer Order Views / Fragment Shader Interlock).
- Замена текстур.
- Программный рендеринг с векторизацией и многопоточностью.
- Адаптивный деинтерлейсинг и фильтр понижающей дискретизации.
- Поворот экрана для вертикальных игр (TATE).
- Цепочек постобработки (GLSL, ReShade FX).
- Наложение рамок (обводок) вокруг игрового изображения.
- Быстрая загрузка (пропуск заставки BIOS).
- Сохранение состояний, перемотка (rewind) и опережающая эмуляция (runahead).
- Поддержка чтения с CD, образов (bin/cue, CHD, MDS/MDF, PBP), ECM-файлов.
- Предзагрузка образов в RAM для избежания задержек.
- Объединение многодисковых игр в списке с общими картами памяти.
- Автоматическое применение PPF-патчей.
- Прямая загрузка домашних программ (homebrew) и PSF-аудио.
- Растягивание аудио при изменении скорости эмуляции.
- Поддержка геймпадов (цифровых/аналоговых, с виброотдачей), NeGcon, GunCon/Justifier (мышь).
- Настройки контроллеров для каждой игры.
- Автоматическое сканирование игр (данные от redump.org).
- Автопереключение карт памяти.
- Загрузка чит-кодов.
- Редактор карт памяти и импорт сохранений.
- Разгон эмулируемого CPU.
- Встроенный и удалённый отладчик.
- Поддержка Multitap (до 8 устройств).
- RetroAchievements.
- Запись видео (FFmpeg).
- Управление камерой.
- Эмуляция картриджа параллельного порта.


::: danger
- BIOS для эмулятора не поставляется в комплекте из-за юридических ограничений. Это файл, являющийся интеллектуальной собственностью компании Sony, и его использование без соответствующих прав нарушает авторское законодательство. Пользователям предлагается создать собственную копию BIOS с консоли PlayStation, чтобы соблюдать законы об авторских правах.
- Также Вы должны использовать приобретённые лицензионные диски, либо самостоятельно снятые образы с них. 
:::

<!--@include: @apps/.parts/install/content-flatpak.md-->
<!--@include: @apps/.parts/install/content-repo.md-->
<!--@include: @apps/.parts/install/content-epm-play.md-->
:::info
В данном способе уcтановки используется ресурс разработчика ПО, обновляется чаще чем в репозитории ALT, но может содержать ошибки.
:::