<script setup lang="ts">

import { computed } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'
import { contributions, homeTopLimit, home_filter_type, enable_autosearch } from '../../data/team';
import { gitRepository } from '../../data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../composables/git/stats'

const pageName = '[AKWHomeTeamMembers]:'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4],
  enable_autosearch
).then( async response  => { 
  if (response) {
    return filterContributors(await getContributorsTopInfo(response).then( response => { return response } ).catch( err => { 
      console.warn(`${pageName} Не удалось получить расширенные данные: ${err}
                        (Сортировка будет проигнорирована. Проверьте наличие токена в .env или github actions.
                        Если вы уверены в конфигурации - откройте issue)`);
      return contributions 
    }), home_filter_type).slice(0, homeTopLimit)
  }
}).catch( err => { 
  console.warn(`${pageName} Не удалось получить данные: ${err}
                      (Сортировка будет проигнорирована. Проверьте наличие токена в .env или github actions.
                      Если вы уверены в конфигурации - откройте issue)`);
  return contributions.slice(0, homeTopLimit)
})

const refs = computed(() => {
  return contributors
})

</script>


<template>
  <VPTeamMembers :members="refs" />
</template>