# Nouveau драйвер:
## Смена проприетарных драйверов от NVIDIA на Nouveau

Для установки открытых драйверов NOUVEAU, необходимо следующее:

::: code-group
```shell[apt-get]
su -
apt-get remove nvidia_glx_common
# удаляем initcall_blacklist и nvidia-drm.modeset если они есть
mcedit /etc/sysconfig/grub2 # тут может быть и nano, и vi, и другой редактор
# сохраняем и выходим
grub-mkconfig -o /boot/grub/grub.cfg
# Удаляем правила запрещающие nouveau, если они есть
rm /etc/modprobe.d/blacklist-nvidia-x11.conf
# Удаляем изменение размещения видеопамяти, если оно есть
rm /etc/modprobe.d/nvidia_videomemory_allocation.conf
# ставим драйвер (в нашем случае для ядра un-def)
apt-get install kernel-modules-drm-nouveau-un-def
# (опционально) переустановить xorg обвязку
apt-get install --reinstall xorg-dri-nouveau xorg-drv-nouveau
# перезагрузиться
reboot
```

```shell[epm]
su -
apt-get remove nvidia_glx_common
# удаляем initcall_blacklist и nvidia-drm.modeset если они есть
mcedit /etc/sysconfig/grub2 # тут может быть и nano, и vi, и другой редактор
# сохраняем и выходим
grub-mkconfig -o /boot/grub/grub.cfg
# Удаляем правила запрещающие nouveau, если они есть
rm /etc/modprobe.d/blacklist-nvidia-x11.conf
# Удаляем изменение размещения видеопамяти, если оно есть
rm /etc/modprobe.d/nvidia_videomemory_allocation.conf
# (опционально) переустановить xorg обвязку
epm reinstall xorg-dri-nouveau xorg-drv-nouveau
# перезагрузиться
reboot
```
:::

Как только все загрузилось и мы убедились, что NOUVEAU заработало:

```shell
su -
make-initrd
# подождать пока соберется initrd
# посмотреть что в выводе сборки initrd присутствует Nouveau
reboot
```
## Управление питанием на Nouveau

Nouveau, драйвер с открытым исходным кодом для графических процессоров Nvidia, развивается посредством реверс-инжиниринга. В области управления питанием были как прогрессы, так и регрессы (см. страницу [PowerManagement](https://nouveau.freedesktop.org/PowerManagement.html)).

Однако, начиная с архитектуры Turing, видеокарты получили полную поддержку управления питанием благодаря GSP прошивкам от Nvidia. Видеокарты на базе архитектур **Ampere** и **Ada Lovelace** имеют эту поддержку **по умолчанию**. Для видеокарт на базе архитектуры **Turing необходимо указать специальный параметр в ядре**.

Для того, чтобы на видеокартах **Turing** заработало управление питанием, необходимо прописать в параметр `GRUB_CMDLINE_LINUX_DEFAULT` значение `nouveau.config=NvGspRm=1` и cгенерировать новых grub.cfg:

```shell
su -
mcedit /etc/sysconfig/grub2
grub-mkconfig -o /boot/grub/grub.cfg
```


### Источники:

https://nouveau.freedesktop.org/

https://wiki.archlinux.org/title/Nouveau

https://wiki.gentoo.org/wiki/Nouveau