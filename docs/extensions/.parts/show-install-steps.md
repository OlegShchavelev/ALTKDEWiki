<!-- Виджеты -->
<template v-if="$frontmatter?.aggregation?.extension?.type === 'widget'">
<!--@include: @extensions/.parts/widget-install-steps.md-->
</template>

<!-- Сценарии KWin -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'script'">
<!--@include: @extensions/.parts/script-install-steps.md-->
</template>

<!-- Заставки -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'splash'">
<!--@include: @extensions/.parts/splash-install-steps.md-->
</template>

<!-- Оформление рабочей среды -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'theme'">
<!--@include: @extensions/.parts/theme-install-steps.md-->
</template>

<!-- Оформление рабочего стола -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'style'">
<!--@include: @extensions/.parts/style-install-steps.md-->
</template>

<!-- Цвета -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'colors'">
<!--@include: @extensions/.parts/colors-install-steps.md-->
</template>

<!-- Значки -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'icons'">
<!--@include: @extensions/.parts/icons-install-steps.md-->
</template>

<!-- Курсоры мыши -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'cursors'">
<!--@include: @extensions/.parts/cursors-install-steps.md-->
</template>

<!-- Оформление окон -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'decoration'">
<!--@include: @extensions/.parts/decoration-install-steps.md-->
</template>

<!-- Переключение окон -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'switcher'">
<!--@include: @extensions/.parts/switcher-install-steps.md-->
</template>

<!-- Эффекты рабочего стола -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'effect'">
<!--@include: @extensions/.parts/effect-install-steps.md-->
</template>

<!-- Обои -->
<template v-else-if="$frontmatter?.aggregation?.extension?.type === 'wallpaper'">
<!--@include: @extensions/.parts/wallpaper-install-steps.md-->
</template>

<template v-else>

::: danger Ошибка конфигурации
Не указан поддерживаемый тип расширения! Укажите один из: `widget`, `script`, `splash`, `theme`, `style`, `colors`, `icons`, `cursors`, `decoration`, `switcher`, `effect`, `wallpaper` в `aggregation.extension.type`.
:::

</template>
