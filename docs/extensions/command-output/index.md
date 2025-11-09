---
aggregation:
  extension:
    type: widget
    id: 2136636
appstream:
  name: Command Output
  summary: Виджет, выполняющий команду по интервалу и показывающий её вывод
  developer:
    name: Zren (Chris Holland)
    nickname: Zren
  url:
    homepage: https://github.com/Zren/plasma-applet-commandoutput
    bugtracker: https://github.com/Zren/plasma-applet-commandoutput/issues
---

# Command Output

Минималистичный виджет для KDE Plasma, который периодически запускает произвольную команду и отображает её вывод. Подходит для быстрой индикации статуса — от `date` до `nvidia-smi`, `sensors` или пользовательских скриптов.

![command-output-1](./img/command-output-1.gif)

## Возможности

- Периодический запуск команды с настраиваемым интервалом
- Отображение результата в панели или на рабочем столе
- Настройка шрифта, размера, выравнивания и цвета текста
- Поддержка многострочного вывода и автообрезки

## Советы по использованию

- Для `nvidia-smi` можно добавить параметры `--query-gpu=utilization.gpu,memory.used --format=csv,noheader,nounits`
- Для датчиков: используйте `sensors | grep -E "Tctl|Package id 0"` или отфильтруйте нужные строки
- Для кастомной логики подготовьте лёгкий скрипт Bash/Python и вызывайте его из виджета

<!--@include: @extensions/.parts/show-install-steps.md-->
