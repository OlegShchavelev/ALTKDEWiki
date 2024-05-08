<script setup lang="ts">

import { contributions, mainPageTopLimit } from '../../data/team';
import { VPTeamMembers } from 'vitepress/theme';
import AKWTeamPageButton from './AKWTeamPageButton.vue';
import { gitRepository } from '../../data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../composables/gitStats'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4]
)


if (contributors) {
    contributors = filterContributors(contributors, mainPageTopLimit)
    contributors = getContributorsTopInfo(contributors)
} else {
  contributors = contributions.slice(0, mainPageTopLimit)
}


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