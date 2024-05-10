<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPButton,
} from 'vitepress/theme'
import AKWHomeTeamButton from './AKWHomeTeamButton.vue';

import { contributions, homeTopLimit, home_filter_type, enable_autosearch } from '../../data/team';
import { gitRepository } from '../../data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../composables/git/stats'

const pageName = '[AKWHomeTeamMembers]:'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4],
  enable_autosearch
).then( response  => { 
  return response 
}).catch( err => { 
  console.warn(`${pageName} Не удалось получить данные: ${err}
                      (Сортировка будет проигнорирована. Проверьте наличие токена в .env или github actions.
                      Если вы уверены в конфигурации и своем соединении- откройте issue)`);
  return undefined 
})

if (contributors) {
  contributors = filterContributors(await getContributorsTopInfo(contributors).then( response => { return response } ), home_filter_type)
} else {
  contributors = contributions
}

</script>


<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
         Участники
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="contributors.slice(0, homeTopLimit)" />
    <AKWHomeTeamButton>
      <VPButton text="Все участники" class="button" size="big" href="/project/contributions/" />
    </AKWHomeTeamButton>
  </VPTeamPage>
</template>