<script setup lang="ts">

import { computed } from 'vue'
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

import { contributions, enable_autosearch, page_filter_type } from '../../data/team';
import { gitRepository } from '../../data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../composables/git/stats'

const pageName = '[AKWTeamMembers]:'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4],
  enable_autosearch
).then( async response  => { 
  return filterContributors(await getContributorsTopInfo(response).then( response => { return response } ).catch( err => { 
    console.warn(`${pageName} Не удалось получить расширенные данные: ${err}
                      (Сортировка будет проигнорирована. Проверьте наличие токена в .env или github actions.
                      Если вы уверены в конфигурации - откройте issue)`);
    return contributions 
  }), page_filter_type) 
}).catch( err => { 
  console.warn(`${pageName} Не удалось получить данные: ${err}
                      (Сортировка будет проигнорирована. Проверьте наличие токена в .env или github actions.
                      Если вы уверены в конфигурации - откройте issue)`);
  return contributions 
})

const refs = computed(()=>{
  return contributors
})

</script>


<template>
    <VPTeamMembers :members="refs" />
</template>