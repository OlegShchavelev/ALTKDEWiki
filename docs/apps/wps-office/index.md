---
title: WPS Office
aggregation:
  flatpak:
    id: com.wps.Office
    build: unofficial
  epm:
    play:
      id: wpsoffice
      build: unofficial
appstream:
  id: com.wps.Office
  name: WPS Office
  icon: ./img/wps-office-logo.svg
  summary: Универсальный пакет Office приложений
  keywords:
    - proprietary
  developer:
    name: Kingsoft Corporation
    avatar: ./img/wps-office-avatar.png
  metadata_license:
    name: Собственная
    link: https://www.wps.com/eula/
  url:
    homepage: https://www.wps.com/office/linux/
    bugtracker: https://help.wps.com/
gallery:
  title: Галерея
  type: slider
  items:
    - src: ./img/wps-office-1.png
    - src: ./img/wps-office-2.png
    - src: ./img/wps-office-3.png
    - src: ./img/wps-office-4.png
---

# WPS Office

WPS Office — это мощный и универсальный офисный пакет, разработанный китайской компанией Kingsoft Office Software. Программа зарекомендовала себя как одна из лучших альтернатив Microsoft Office благодаря высокой совместимости с форматами DOCX, XLSX, PPTX и другим, а также интуитивно понятному интерфейсу и широкому набору функций. WPS Office подходит как для личного, так и для профессионального использования, предлагая инструменты для работы с текстами, таблицами, презентациями и PDF-документами.

## Основные компоненты WPS Office

WPS Office объединяет четыре ключевых приложения, которые обеспечивают полный спектр офисных задач:

- **WPS Writer** (Document): Текстовый редактор с поддержкой сложного форматирования, шаблонов и инструментов для совместной работы.
- **WPS Spreadsheets** (Excel): Инструмент для работы с таблицами, анализа данных и создания диаграмм. Поддерживает сложные формулы и интеграцию с облачными сервисами.
- **WPS Presentation**: Программа для создания динамичных презентаций с анимацией и мультимедийными элементами.
- **WPS PDF**: Многофункциональный редактор PDF, позволяющий конвертировать, редактировать, аннотировать и подписывать документы.

<GalleryALT />

<!--@include: @apps/.parts/install/content-epm-play.md-->

::: tip Более новая китайская версия 

Глобальная версия WPS Office ограничена 11-й версией, но через EPM Play можно установить китайскую версию с последними обновлениями и дополнительными функциями. Обратите внимание, что интерфейс частично может быть на китайском языке.

(Доступно с версии `EPM` 3.64.28)

```shell
epm play wpsoffice-cn
```
:::

<!--@include: @apps/.parts/install/content-flatpak.md-->
