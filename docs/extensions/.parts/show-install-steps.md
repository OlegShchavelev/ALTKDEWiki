<!-- Виджеты -->
<template v-if="$frontmatter?.aggregation?.extension?.type === 'widget'">

## Установка виджета

### Способ 1: Через KDE Store

1. Сделайте клик ПКМ по панели или рабочему столу
2. Нажмите «**Добавить виджеты**»
3. Перейдите в «**Пополнить список виджетов...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите самую свежую версию
5. Добавьте виджет и при необходимости примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

### Способ 2: Ручная установка из файла

1. Посетите страницу виджета <a target="_blank" :href="'https://store.kde.org/p/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> и скачайте файл
2. Нажмите ПКМ по панели или рабочему столу → «**Добавить или изменить виджеты...**»
3. Нажмите «**Загрузить новые виджеты**» → «**Установить виджет из файла...**»
4. Выберите файл, подтвердите установку и добавьте виджет

</template>

<!-- Сценарии KWin -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'script'">

## Установка сценария KWin

### Способ 1: Через KDE Store

1. Откройте «**Параметры системы**»
2. Перейдите в «**Диспетчер окон**» → «**Сценарии KWin**»
3. Нажмите «**Загрузить новые сценарии...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите самую свежую версию
5. Примените изменения и убедитесь, что сценарий включён

<!--@include: @extensions/.parts/enable-third-party-note.md-->

### Способ 2: Ручная установка из файла

1. Посетите страницу сценария <a target="_blank" :href="'https://store.kde.org/p/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> и скачайте файл
2. Откройте «**Параметры системы**» → «**Диспетчер окон**» → «**Сценарии KWin**»
3. Нажмите «**Установить из файла...**»
4. Выберите файл, подтвердите установку, включите сценарий и примените изменения

</template>

<!-- Заставки -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'splash'">

## Установка заставки

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Заставка**»
3. Нажмите «**Загрузить...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**»
5. Нажмите «**Установить**», выберите заставку и примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

</template>

<!-- Оформление рабочей среды -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'theme'">

## Установка оформления рабочей среды

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Оформление рабочей среды**»
3. Нажмите «**Загрузить новые оформления...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите тему
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

</template>

<!-- Оформление рабочего стола -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'style'">

## Установка оформления рабочего стола

### Способ 1: Через KDE Store

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Оформление рабочего стола**»
3. Нажмите «**Загрузить новые оформления...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите стиль
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

### Способ 2: Ручная установка из файла

1. Посетите страницу стиля <a target="_blank" :href="'https://store.kde.org/p/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> и скачайте файл
2. Откройте «**Параметры системы**» → «**Цвета и оформления**» → «**Оформление рабочего стола**»
3. Нажмите «**Установить из файла...**»
4. Выберите файл и примените стиль

</template>

<!-- Цвета -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'colors'">

## Установка цветовой схемы

### Способ 1: Через KDE Store

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Цвета**»
3. Нажмите «**Загрузить...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите схему
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

### Способ 2: Ручная установка из файла

1. Посетите страницу схемы <a target="_blank" :href="'https://store.kde.org/p/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> и скачайте файл
2. Откройте «**Параметры системы**» → «**Цвета и оформления**» → «**Цвета**»
3. Нажмите «**Установить из файла...**»
4. Выберите файл и примените схему

</template>

<!-- Значки -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'icons'">

## Установка набора значков

### Способ 1: Через KDE Store

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Значки**»
3. Нажмите «**Загрузить наборы значков...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите набор
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

### Способ 2: Ручная установка из файла

1. Посетите страницу набора значков <a target="_blank" :href="'https://store.kde.org/p/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> и скачайте файл
2. Откройте «**Параметры системы**» → «**Цвета и оформления**» → «**Значки**»
3. Нажмите «**Установить из файла...**»
4. Выберите файл и примените набор

</template>

<!-- Курсоры мыши -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'cursors'">

## Установка курсоров

### Способ 1: Через KDE Store

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Курсоры мыши**»
3. Нажмите «**Загрузить наборы курсоров...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите набор
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

### Способ 2: Ручная установка из файла

1. Посетите страницу темы курсоров <a target="_blank" :href="'https://store.kde.org/p/' + $frontmatter?.aggregation?.extension?.id">{{ $frontmatter?.appstream?.name }}</a> и скачайте файл
2. Откройте «**Параметры системы**» → «**Цвета и оформления**» → «**Курсоры мыши**»
3. Нажмите «**Установить из файла...**»
4. Выберите файл и примените набор курсоров

</template>

<!-- Оформление окон -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'decoration'">

## Установка оформления окон

1. Откройте «**Параметры системы**»
2. Перейдите в «**Цвета и оформления**» → «**Оформление окон**»
3. Нажмите «**Загрузить новые оформления...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите оформление
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

</template>

<!-- Переключение окон -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'switcher'">

## Установка переключателя окон

1. Откройте «**Параметры системы**»
2. Перейдите в «**Диспетчер окон**» → «**Переключение окон**»
3. Нажмите «**Загрузить стили переключения окон...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите переключатель
5. Примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

</template>

<!-- Эффекты рабочего стола -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'effect'">

## Установка эффекта рабочего стола

1. Откройте «**Параметры системы**»
2. Перейдите в «**Диспетчер окон**» → «**Эффекты рабочего стола**»
3. Нажмите «**Загрузить новые эффекты...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите эффект
5. Включите эффект в списке и примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

</template>

<!-- Обои -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'wallpaper'">

## Установка плагина обоев

1. Откройте «**Параметры системы**»
2. Перейдите в «**Обои**»
3. Нажмите «**Загрузить новые модули...**»
4. В поиске введите «**{{ $frontmatter?.appstream?.name }}**» и установите плагин обоев
5. В списке «**Тип обоев**» выберите установленный плагин и примените изменения

<!--@include: @extensions/.parts/enable-third-party-note.md-->

</template>

<template v-else>

::: danger Ошибка конфигурации
Не указан поддерживаемый тип расширения! Укажите один из: `widget`, `script`, `splash`, `theme`, `style`, `colors`, `icons`, `cursors`, `decoration`, `switcher`, `effect`, `wallpaper` в `aggregation.extension.type`.
:::

</template>
