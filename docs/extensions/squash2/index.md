---
aggregation:
  extension:
    type: effect
    id: 1806319
appstream:
  name: Squash2
  summary: Эффект сворачивания/разворачивания окон в стиле GNOME для KWin.
  developer:
    name: Shaurya Kalia
    nickname: Shaurya-Kalia
  url:
    homepage: https://github.com/Shaurya-Kalia/squash2
    bugtracker: https://github.com/Shaurya-Kalia/squash2/issues
---

# Squash2

Расширение KWin, добавляющее новый эффект сворачивания и разворачивания окон с динамикой, схожей с визуальным стилем GNOME. Эффект делает переходы более плавными и современными, не меняя привычную логику управления окнами.

![squash2-1](./img/squash2-1.gif)

## Особенности

- Плавная анимация сворачивания и разворачивания окон
- Визуальный стиль, близкий к GNOME-анимациям
- Включение и настройка через стандартный модуль «Эффекты рабочего стола»
- Поддержка Plasma 5 и Plasma 6 (разные архивы для установки)

## Совместимость

- Для Plasma 6 используйте архив: squash2.tar.gz
- Для Plasma 5 используйте архив: kwin4-effect-squash2.tar.gz

<!--@include: @extensions/.parts/show-install-steps.md-->

## Важно

::: warning Если эффект не появился сразу
Иногда эффект не применяется с первого раза. Переключитесь на стандартный эффект «Сжатие», затем снова выберите «Сжатие2» и примените изменения.
:::
