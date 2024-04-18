<script setup lang="ts">
import { contributions } from '../../data/team';
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';

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
    <VPTeamMembers :members="contributions" />
  </VPTeamPage>
</template>