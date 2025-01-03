---
title: PCSX2
aggregation:
  flatpak: net.pcsx2.PCSX2
  sisyphus: pcsx2
appstream:
  id: net.pcsx2.PCSX2
  name: PCSX2
  icon: ./img/pcsx2.png
  summary: Эмулятор PlayStation 2
  developer:
    name: PCSX2 Team
  metadata_license:
    name: GNU GPLv3
    link: https://choosealicense.com/licenses/gpl-3.0/
  url:
    homepage: https://pcsx2.net/
    bugtracker: https://github.com/PCSX2/pcsx2/issues
---
# PCSX2

PCSX2 — это эмулятор PlayStation 2 с открытым исходным кодом. Распространяется под лицензией GNU GPLv3.

![Скриншот эмулятора](https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Fnet%2Fpcsx2%2FPCSX2%2F6d5e6671646868c8cbcc24b5c7121918%2Fscreenshots%2Fimage-1_orig.webp&w=1200&q=75)

<!--@include: @apps/.parts/install/content-flatpak.md-->

<!--@include: @apps/.parts/install/content-repo.md-->

## Настройка

### Язык

На первом этапе настройки нам предлагают выбрать язык и тему. Можно настроить язык и тему интерфейса по своему вкусу. Также, нам предлагают включить автоматические обновления, которые можно отключить.
![Первый этап настройки](./img/image.png)

::: info
По умолчанию выбирается язык и тема как в системе
:::

### Образ BIOS

На этом этапе необходимо выбрать BIOS PlayStation 2. Этот файл требуется для корректной работы эмулятора и запуска игр. В эмуляторах правильный выбор BIOS играет ключевую роль для запуска игр. Эмулятор использует файл BIOS для имитации работы консоли, а его версия должна совпадать с регионом игры (NTSC-U, NTSC-J или PAL).

Если BIOS и регион игры не совпадают, игра может либо не запуститься, либо работать с ошибками — например, графические артефакты, сбои звука или проблемы с частотой кадров.

![Второй этап настройки](./img/image2.png)

::: danger
BIOS для эмулятора PCSX2 не поставляется в комплекте из-за юридических ограничений. Это файл, являющийся интеллектуальной собственностью компании Sony, и его использование без соответствующих прав нарушает авторское законодательство. Пользователям предлагается создать собственную копию BIOS с консоли PlayStation 2, чтобы соблюдать законы об авторских правах.
:::

### Папка с играми

На данном этапе необходимо указать папку, которая будет сканироваться эмулятором для поиска доступных игр.

![Третий этап настройки](./img/image3.png)

### Настройка контроллеров

В этом разделе  выбираем тип контроллера, который будет эмулироваться. Оптимальным вариантом является выбор DualShock 2, так как этот контроллер полностью соответствует возможностям оригинального устройства, включая поддержку вибрации и аналоговых стиков, что обеспечивает максимальную совместимость с играми PlayStation 2.


![Четвёртый этап настройки](./img/image4.png)

::: info
Если при первоначальной настройке вы выбрали контроллер, его параметры можно задать в разделе "Настройки" → "Контроллеры" → "Порт контроллера 1" или "Порт контроллера 2". Укажите эмулируемый тип, например DualShock 2, и настройте кнопки, кликая по нужным функциям и назначая соответствующие кнопки на вашем устройстве. Изменения сохраняются автоматически после нажатия кнопки "Закрыть". Проверить корректность настроек можно, запустив игру.
:::

### Запуск игры

![Список игр](./img/image5.png)
После этого сделайте копию диска с вашей игрой в одном из поддерживаемых форматов: .bin/.iso (ISO Disc Images), .mdf (Media Descriptor File), .chd (Compressed Hunks of Data), .cso (Compressed ISO), .zso (Compressed ISO), или .gz (Gzip Compressed ISO). Эти форматы совместимы с PCSX2 и готовы к использованию. Потом в списке у вас появится игра. Нажимаете на нее несколько раз, и она запустится! 

