<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

import { contributions, enable_autosearch, page_filter_type } from '../../data/team';
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
                      Если вы уверены в конфигурации - откройте issue)`);
  return undefined 
})

if (contributors) {
  contributors = filterContributors(await getContributorsTopInfo(contributors).then( response => { return response } ), page_filter_type)
} else {
  contributors = contributions
}
const { title } = defineProps({
  title: {
    type: String
  },
});

</script>


<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template v-if="title" #title>
       {{ title }}
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="contributors" />
  </VPTeamPage>
</template>