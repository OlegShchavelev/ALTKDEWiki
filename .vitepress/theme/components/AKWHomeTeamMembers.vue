<script setup lang="ts">
import { contributions } from '../../data/team';
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPButton } from 'vitepress/theme';
import AKWTeamPageButton from './AKWTeamPageButton.vue';



const { members, size } = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  members: {
    type: Object,
    default: () => {
      return contributions ?? [];
    },
  },
});

</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        Участники
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="contributions.slice(0, 6)" />
    <AKWTeamPageButton>
      <VPButton text="Все участники" class="button" size="big" href="/project/contributions/" />
    </AKWTeamPageButton>
  </VPTeamPage>
</template>