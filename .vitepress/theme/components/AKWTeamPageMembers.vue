<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

import { contributions, enable_autosearch, page_filter_type } from '../../data/team';
import { gitRepository } from '../../data/gitlog'
import { getContributors, filterContributors, getContributorsTopInfo } from '../composables/gitStats'

let contributors = await getContributors(
  import.meta.env.VITE_GIT_KEY,
  gitRepository.split('/')[3],
  gitRepository.split('/')[4],
  enable_autosearch
).then( async ( response ) => {
  response = await getContributorsTopInfo(response).then( async ( response ) => {
    filterContributors( response, page_filter_type )
    return response
  })
  return response
}
).catch( async ( response ) => {
  return response = contributions
})

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