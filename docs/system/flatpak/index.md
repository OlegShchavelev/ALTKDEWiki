---
title: Flatpak
---

# Flatpak

Flatpak — система для создания, распространения и запуска изолированных настольных приложений в Linux.

## Установка из репозитория

Установим Flatpak используя терминал:

:::tabs
== Flatpak
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install flatpak
```

```shell[epm]
epm -i flatpak
```

== Flatpak c FlatHub
::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install flatpak-repo-flathub
```

```shell[epm]
epm -i flatpak-repo-flathub
```

:::

### Интеграция с центром приложений Discovery

Для возможности установки Flatpak-приложений через Discovery (Центр приложений) необходимо установить пакет `plasma-discover-flatpak`:

::: code-group

```shell[apt-get]
su -
apt-get update
apt-get install plasma-discover-flatpak
```

```shell[epm]
epm -i plasma-discover-flatpak
```

:::

## Использование пакетного менеджера Flatpak

### Управления репозиториями

Просмотр подключенных репозиториев осуществляется командой `remotes`, введите в терминал:

```shell
flatpak remotes
```

Подключить репозиторий для всей системы используйте следующую команду. Опция `--if-not-exists` останавливает команду от выдачи ошибки, если удалённое устройство уже существует:

```shell
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Удаление репозитория осуществляется командой `remote-delete`, для выполнения команды необходимо указать ID-репозитория

```shell
flatpak remote-delete flathub
```

### Поиск приложений

Для поиска по подключенным репозиториям используется команда `search`, для выполнения введите название приложения:

```shell
flatpak search krita
```

### Установка приложений

Установка приложений осуществляется командой `install`, для выполнение команды необходимо указать аргументы: репозиторий и ID приложения, к примеру:

```shell
flatpak install flathub org.kde.krita
```

Альтернативном вариантом установки приложения указать аргумент путь к мета-файлу, в котором содержатся необходимые данные об установке:

```shell
flatpak install https://flathub.org/repo/appstream/org.kde.krita.flatpakref
```

Для более быстрого ввода команды для установки приложения напишите общепринятое название приложения, к примеру:

```shell
flatpak install gimp
```

### Запуск приложений

Запуск приложений через терминал осуществляется командой `run`, для выполнения команды укажите ID приложения, к примеру:

```shell
flatpak run org.kde.krita
```

### Удаления приложений

Удаление приложения осуществляется командой `remove`, для выполнения команды укажите аргумент ID-приложения, к примеру:

```shell
flatpak remove org.kde.krita
```
