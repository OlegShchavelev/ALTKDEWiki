---
aggregation:
  extension:
    type: widget
    id: 2126775
appstream:
  name: Time Progress Bar
  summary: Виджет прогресс-бара для отслеживания прошедшего времени.
  developer:
    name: Tino Lorenz
    nickname: tilorenz
  url:
    homepage: https://github.com/tilorenz/TimeProgressBar
    bugtracker: https://github.com/tilorenz/TimeProgressBar/issues
---

# Time Progress Bar

Виджет, позволяющий отслеживать прошедшее время в формате прогресс-бара. Идеально подходит для визуализации временных промежутков — от рабочих смен до годовых периодов.

Виджет вдохновлён популярными таймерами прогресса года и расширяет эту концепцию на различные временные интервалы включая произвольный. Поддерживает размещение как на рабочем столе, так и на панели с гибкой настройкой внешнего вида.

![time-progress-bar-1](./img/time-progress-bar-1.jpg)

## Важное замечание

::: info
При установке произвольной даты убедитесь, что начальная дата и время предшествуют текущему моменту. В противном случае виджет отобразит ошибку «NaN» в тексте, а прогресс-бар останется пустым.
:::

<!--@include: @extensions/.parts/show-install-steps.md-->
