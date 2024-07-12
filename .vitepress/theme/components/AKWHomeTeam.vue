<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPButton, VPTeamMembers } from 'vitepress/theme'

import { sortMembers } from '../composables/sorters.ts'
import { homeSorting, limit } from '../../data/team.ts'
import { data as team } from '../loaders/gitlogDataLoader.data'

</script>

<template>
  <ClientOnly>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title> Участники </template>
      </VPTeamPageTitle>
      <VPTeamMembers :members="sortMembers(team, homeSorting).slice(0, limit)" />
      <div class="teamButton">
        <VPButton text="Все участники" class="button" size="big" href="/project/contributions" />
      </div>
    </VPTeamPage>
  </ClientOnly>
</template>

<style scoped>
.teamButton {
  margin-top: 40px;
  display: grid;
  place-items: center;
}
</style>
