---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ALT Regular KDE"
  text: "Community"
  image:
    src: /laptop.svg
    alt: Gnome
  tagline: открытое сообщество пользователей операционной системы ALT Regular KDE
  actions:
    - theme: brand
      text: Скачать ALT Regular KDE
      link: /download/
    - theme: alt
      text: Документация
      link: /wiki/

features:
  - title: Раньше чем у других
    details: Eжедневно обновляемый репозиторий пакетов свободных программ Sisyphus
  - title: Цифровая НЕзависмость
    details: Семейство дистрибутивов Linux, производится в России с 2000 года.
  - title: Открытое сообщество
    details: Путеводитель в мир открытого программного обеспечения.
---

 <script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPHomeSponsors,
  VPSponsors
} from 'vitepress/theme'
import { contributions } from '../_data/team'
import { sponsors } from '../_data/sponsors'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Участники
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="contributions"
  />
</VPTeamPage>

<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
/>