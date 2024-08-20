# Nouveau драйвер:

## Смена проприетарного драйвера от NVIDIA на Nouveau

- Перейдите в режим root:

```shell
su -
```

- Удалите `nvidia_glx_common`:

::: code-group

```shell[apt-get]
apt-get remove nvidia_glx_common
```

```shell[epm]
epm -e nvidia_glx_common
```

:::

- Удалите `initcall_blacklist` и `nvidia-drm.modeset`, если они есть:

```shell
mcedit /etc/sysconfig/grub2
```

- Сгенерируйте `grub.cfg`

```shell
grub-mkconfig -o /boot/grub/grub.cfg
```

- Удалите правила, запрещающие Nouveau, если они есть:

```shell
rm /etc/modprobe.d/blacklist-nvidia-x11.conf
```

- Удалите изменение размещения видеопамяти, если оно есть:

```shell
rm /etc/modprobe.d/nvidia_videomemory_allocation.conf
```

- Установите драйвер (пример для ядра `un-def`):

::: code-group

```shell[apt-get]
apt-get install kernel-modules-drm-nouveau-un-def
```

```shell[epm]
epm -i kernel-modules-drm-nouveau-un-def
```

:::

- Если у Вас видеокарта **Curie** или старше, удостоверьтесь, что у вас установлен пакет xorg-drv-nouveau с DDX-драйвером Xf86-video-nouveau:

::: code-group

```shell[apt-get]
apt-get install xorg-drv-nouveau
```

```shell[epm]
epm -i xorg-drv-nouveau
```

:::

::: info

**Xf86-video-nouveau** — это [DDX-драйвер](https://dri.freedesktop.org/wiki/DDX/) для Xorg, необходимый для поддержки 2D и 3D-ускорения на старых видеокартах.

Для новых видеокарт существует универсальный [modesetting-драйвер](https://www.x.org/wiki/ModeSetting/) **Xf86-video-modesetting**, который уже входит в пакет Mesa и не нуждается в установке.

:::

- Перезагрузите систему

```shell
su -
reboot
```

Как только система загрузилась можно убедиться в том, что Nouveau заработало (в выводе сборки `initrd` должен присутствовать Nouveau):

```shell
su -
make-initrd
reboot
```

::: danger
Для видеокарт **Maxwell** потребуется обязательное [внедрение прошивки NVIDIA](#внедрение-прошивки-nvidia).
:::


### OpenGL и Zink

#### Zink по умолчанию

В настоящее время команда Mesa работает над OpenGL-драйвером Zink и в будущем рассчитывает сделать его стандартом для видеокарт **Turing и новее**. На момент лета 2024 года, в нём всё ещё активно устраняют ошибки, тем не менее, он уже сейчас [во многих случаях превосходит стандартный Nouveau OpenGL-драйвер](https://www.collabora.com/news-and-blog/news-and-events/nvk-is-now-ready-for-prime-time.html).

Стандартный Nouveau OpenGL-драйвер (NVC0) всё ещё актуальный и работает стабильно, но если хотите за счёт стабильности увеличить производительность, можете уже сейчас попробовать Zink и добавить `NOUVEAU_USE_ZINK=1` в переменные окружения.

Как один из вариантов, можно добавить строку `export NOUVEAU_USE_ZINK=1` в конец **~/.bashrc**:

```shell
mcedit ~/.bashrc
```

::: warning

Zink, как говорилось выше, нестабильный, и может ухудшить опыт работы с системой. Если наблюдаются вылеты приложений или иные проблемы, рекомендуется убрать параметр.

:::

#### Оптимизация ввода-вывода Zink

[Дополнительная оптимизация для Zink](https://www.phoronix.com/news/Mesa-24.1-Zink-ioopt-Merged), в некоторых случаях позволяющая улучшить отзывчивость. В частности, убирает лаг курсора мыши при использовании Zink.

На момент лета 2024 года она всё ещё не внедрена в систему по умолчанию, т.к. ждёт изменения CTS тестов, тем не менее её можно запустить, добавив в переменные окружения `ZINK_DEBUG=ioopt`.

Как один из вариантов, можно добавить строку `export ZINK_DEBUG=ioopt` в конец **~/.bashrc**:

```shell
mcedit ~/.bashrc
```

::: info

Параметр работает только в связке с [Zink](#оптимизация-ввода-вывода-zink).

:::

## Внедрение прошивки NVIDIA

Большинство видеочипов NVIDIA имеют встроенный аппаратный декодер, и некоторые видеочипы для его работы отдельно требуют извлечённую из драйвера прошивку NVIDIA. Прошивка NVIDIA требуется для видеокарт с аппаратным декодером: VP1, VP2, VP3, VP4.0, VP4.2, VP5 или VP6+. Список видеокарт с данными декодерами можно посмотреть на странице [Video Acceleration](https://nouveau.freedesktop.org/VideoAcceleration.html) в блоке `Which card has what engine`

::: info
Хоть вышеупомянутые аппаратные декодеры и требуют прошивку NVIDIA, не во всех реализована её поддержка. Статус поддержки для конкретного декодера смотрите на сайте [Video Acceleration](https://nouveau.freedesktop.org/VideoAcceleration.html) в блоке `Video engine support status`
:::

::: danger
Видеочипы Maxwell для их нормальной загрузки обязательно требуют внедрение прошивки. Если при первой установке или запуске системы на устройстве с видеочипом одной из этих архитектур наблюдаются проблемы, можно временно перейти на [другой видеорежим](/graphics/nvidia/nvidia-drivers/#черныи-экран-при-выборе-сессии-x11-или-ошибка-в-инициализации-cuda)
:::

- Установка прошивки:

::: code-group

```shell[apt-get]
apt-get install firmware-nouveau
```

```shell[epm]
epm -i firmware-nouveau
```

::: details Ручная установка прошивки

- Распакуйте прошивку:

```shell
mkdir -p /tmp/nouveau && cd /tmp/nouveau
wget http://us.download.nvidia.com/XFree86/Linux-x86_64/340.108/NVIDIA-Linux-x86_64-340.108.run
wget https://raw.github.com/envytools/firmware/master/extract_firmware.py
sh NVIDIA-Linux-x86_64-340.108.run --extract-only
python3 extract_firmware.py
```

- Установите прошивку:

```shell
su -
cd /tmp/nouveau
mkdir /lib/firmware/nouveau
cp -d nv* vuc-* /lib/firmware/nouveau/
```

:::

## Управление питанием (Turing и новее)

Nouveau — драйвер с открытым исходным кодом для графических процессоров NVIDIA, развивается посредством реверс-инжиниринга. До архитектуры Turing, в управлении питанием возникали проблемы, о чём можно посмотреть на странице [Power Management](https://nouveau.freedesktop.org/PowerManagement.html).

Начиная с архитектуры **Turing**, видеокарты получили полную поддержку управления питанием благодаря GSP-прошивкам от NVIDIA. Видеокарты на базе архитектур Ampere и Ada Lovelace имеют эту поддержку по умолчанию. Для видеокарт на базе архитектуры Turing **необходимо указать специальный параметр ядра**.

Для того, чтобы на видеокартах Turing заработало управление питанием, можно прописать в параметр `GRUB_CMDLINE_LINUX_DEFAULT` значение `nouveau.config=NvGspRm=1` и сгенерировать новый `grub.cfg`, либо прописать в файле /etc/modprobe.conf.:

```shell
su -
cat << _EOF_ > /etc/modprobe.d/nouveau_power_management.conf
options nouveau config=NvGspRm=1
_EOF_
make-initrd
```

### Управление частотами через Reclocking (для GM10x Maxwell, Kepler и Tesla G94-GT218)

Видеочипы до архитектуры Turing не имеют поддержку управления питания на Nouveau, из-за чего остаются в режиме пониженного энергопотребления и пониженными частотами. Но на **Maxwell, код которых начинается с GM10x**, **Kepler** и **Tesla G94-GT218** есть возможность менять частоты GPU и видеопамяти через уже заготовленные пресеты частот GPU и видеопамяти.

- Проверьте доступные состояния питания:

```shell
su -
cat /sys/kernel/debug/dri/0/pstate
```

::: details Ожидаемый вид вывода

```shell
07: core 405 MHz memory 810 MHz
0f: core 653-954 MHz memory 1600 MHz
AC: core 953 MHz memory 1600 MHz
```

:::

- Проверьте интересующее состояние на работоспособность:

```shell
su -
echo pstate > /sys/kernel/debug/dri/0/pstate
```

Если всё работает стабильно и нет проблем, можно записать пресет в параметры ядра. Обратите внимание, что в выводе у нас было значение в шестнадцатеричном формате, для добавления в параметры ядра, значение необходимо перевести в десятеричный формат (для этого можно использовать любой конвертер из десятичной системы счисления в шестнадцатеричную).

В примере будет указано значение **0f**, которое перевели в десятеричный формат (**15**)

| Параметр                        | Описание                                                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------------------- |
| `nouveau.config=NvClkMode=15`   | На этапе загрузки устанавливает необходимое состояние питания.                                      |
| `nouveau.config=NvClkModeAC=15` | На этапе загрузки устанавливает необходимое состояние питания, если устройство работает от сети.    |
| `nouveau.config=NvClkModeDC=15` | На этапе загрузки устанавливает необходимое состояние питания, если устройство работает от батареи. |

Можно прописать в параметр `GRUB_CMDLINE_LINUX_DEFAULT` и сгенерировать новых `grub.cfg`, либо прописать в файле /etc/modprobe.conf.

Пример записи в /etc/modprobe.conf:
```shell
su -
cat << _EOF_ > /etc/modprobe.d/nouveau_recloking.conf
options nouveau config=NvClkMode=15
options nouveau config=NvClkModeAC=15
options nouveau config=NvClkModeDC=15
_EOF_
make-initrd
```

::: danger
Хоть эта поддержка и существует давно, она имеет статус `MOSTLY` (всё основное сделано, но имеется ряд нерешённых проблем) и, скорее всего, останется таким навсегда.

Некоторые состояния могут перегреть устройство и навредить. Делая это, пожалуйста, следите за состоянием видеочипа.
:::

### Управление частотами через NVBoost (для Fermi, Kepler, Maxwell, Pascal и Volta):

Для **Fermi**, **Kepler**, **Maxwell**, **Pascal** и **Volta** существует способ управления частотами через 3 режима:

| Режим | Описание                               |
| ----- | ---------------------------------------|
| `0`   | Базовые тактовые частоты (по умолчанию)|
| `1`   | Тактовые частоты в режиме `Boost`      |
| `2`   | Максимальные тактовые частоты          |

Управление происходит через параметр `config.NvBoost`.

Например, установка тактовых частот в режиме boost будет `config.NvBoost=1`

Можно прописать это в параметр `GRUB_CMDLINE_LINUX_DEFAULT` и сгенерировать новый `grub.cfg`, либо прописать в файле /etc/modprobe.conf.

Пример записи в /etc/modprobe.conf:
```shell
su -
cat << _EOF_ > /etc/modprobe.d/nouveau_nvboost.conf
options nouveau config=NvBoost=1
_EOF_
make-initrd
```

### Управление скоростью вентиляторов (от Rankine до Maxwell)

Видеочипы от Rankine до Maxwell имеют поддержку управления вентиляторами.

Чтобы узнать точно, есть ли поддержка, нужно проверить, есть ли файлы управления:

```shell
ls /sys/class/drm/card0/device | grep pwm1
```

::: details Ожидаемый вид вывода

```shell
pwm1
pwm1_enable
pwm1_max
pwm1_min
```

:::

| Файл управления | Описание                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------- |
| `pwm1`          | Управление постоянной скоростью.                                                            |
| `pwm1_enable`   | Включение режимов управления скоростью: `0` (выключить), `1` (вручную), `2` (автоматически) |
| `pwm1_max`      | Установка максимальной скорости.                                                            |
| `pwm1_min`      | Установка минимальной скорости.                                                             |

Путём добавления процентных значений скоростей в эти файлы (кроме `pwm1_enable`, где выбираются режимы), ими можно управлять

::: details Пример

- Включение ручного управление (если будет `0` или `2`, указывать скорости нет необходимости)

```shell
su -
echo 1 > /sys/class/drm/card0/device/pwm1_enable
```

- Установка мощности вентилятора на 40%

```shell
su -
echo 40 > /sys/class/drm/card0/device/pwm1
```

:::

Один из вариантов управления — сделать изменения постоянными. Для этого нужно занести их в `udev` правила.

- Пример ручного управления:

```shell
su -
cat << _EOF_ > /etc/udev/rules.d/50-nouveau-hwmon.rules
ACTION=="add", SUBSYSTEM=="hwmon", DRIVERS=="nouveau", ATTR{pwm1_enable}="1", ATTR{pwm1_enable}="40"
_EOF_
```

- Пример автоматического управления:

```shell
su -
cat << _EOF_ > /etc/udev/rules.d/50-nouveau-hwmon.rules
ACTION=="add", SUBSYSTEM=="hwmon", DRIVERS=="nouveau", ATTR{pwm1_enable}="2"
_EOF_
```

- Пример управления минимальными и максимальными значениями:

```shell
su -
cat << _EOF_ > /etc/udev/rules.d/50-nouveau-hwmon.rules
ACTION=="add", SUBSYSTEM=="hwmon", DRIVERS=="nouveau", ATTR{pwm1_enable}="1", ATTR{pwm1_min}="10", ATTR{pwm1_min}="90"
_EOF_
```

::: danger
При неправильном использовании есть шанс перегреть видеокарту. Соблюдайте осторожность
:::

### Список параметров Nouveau для ядра

Существует список параметров для ядра, про которые мало что можно написать или просто мало информации.

| Файл управления           | Описание                                                                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runpm`                   | Принудительное включение (`1`) или отключение (`0`), управление питанием во время работы. По умолчанию только для систем Optimus установлено значение -`1`                                                                                        |
| `noaccel`                 | Отключение ускорение ядра / `abi16` (`1` — отключить ускорения, `0` — включить)                                                                                                                                                                   |
| `nofbaccel`               | Отключение ускорения `fbcon` (`1` — отключить ускорение, `0` — включить)                                                                                                                                                                          |
| `modeset`                 | Должен ли быть включён драйвер. `0` для отключённого, `1` для включённого, `2` для "безголового?"                                                                                                                                                 |
| `config.NvAGP`            | Режим `agp` (`0` для отключения, `1` для включения                                                                                                                                                                                                |
| `config.NvBios`           | Указать источник `VBIOS`, как один из OpenFirmware / PRAMIN / PROM / ACPI / PCIROM / PLATFORM или имя файла, переданное в `request_firmware`                                                                                                      |
| `config.NvFanPWM`         | Включить использование ШИМ для вентилятора, автоматическое определение по умолчанию                                                                                                                                                               |
| `config.NvForcePost`      | Нужно ли принудительно выполнять POST устройства, по умолчанию отключено                                                                                                                                                                          |
| `config.NvMemExec`        | Принудительное включение/отключение выполнения сценария синхронизации памяти.                                                                                                                                                                     |
| `config.NvGrUseFW`        | Использовать прерывания MSI, включённые по умолчанию на чипсетах, которые их поддерживают                                                                                                                                                         |
| `config.NvMXMDCB`         | Очистка выходов DCB из BIOS, включено по умолчанию                                                                                                                                                                                                |
| `config.NvPCIE`           | Только семейство NV40, использовать ли PCI-E GART, включено по умолчанию.                                                                                                                                                                         |
| `config.NvPmEnableGating` | Включает синхронизацию для графических процессоров Kepler                                                                                                                                                                                         |
| `vram_pushbuf`            | Создать push-буферы DMA во VRAM                                                                                                                                                                                                                   |
| `duallink`                | Разрешить двухканальную TMDS (включено по умолчанию)                                                                                                                                                                                              |
| `tv_norm`                 | Дефолтный ТВ норм. По умолчанию — PAL. Допустимые значения: `PAL`, `PAL-M`, `PAL-N`, `PAL-Nc`, `NTSC-M`, `NTSC-J`, `hd480i`, `hd480p`, `hd576i`, `hd576p`, `hd720p`, `hd1080i`. Это применимо только к картам, у которых нет внешних кодировщиков |
| `tv_disable`              | Отключить обнаружение ТВ-выхода                                                                                                                                                                                                                   |

### Источники:

https://nouveau.freedesktop.org/

https://wiki.archlinux.org/title/Nouveau

https://wiki.gentoo.org/wiki/Nouveau

https://web.archive.org/web/20141031191559/https://kalgan.cc/blog/posts/Controlling_nVidia_cards_fans_with_nouveau_in_Debian/

https://www.collabora.com/

https://www.phoronix.com/
