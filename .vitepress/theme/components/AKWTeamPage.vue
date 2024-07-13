<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamPageSection, VPTeamMembers } from 'vitepress/theme'

import { data as team } from '../loaders/gitlogDataLoader.data'
import { developersSection, membersSection, teamSorting } from '../../data/team.ts'
import { sortMembers } from '../composables/sorters.ts'

import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <ClientOnly>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template v-if="frontmatter.longtitle" #title>
          {{ frontmatter.longtitle }}
        </template>
      </VPTeamPageTitle>

      <div v-if="teamSorting.includes('role')">
        <VPTeamPageSection class="team">
          <template #title>
            {{ developersSection.title }}
          </template>
          <template #lead>
            {{ developersSection.description }}
          </template>
          <template #members>
            <VPTeamMembers
              :members="
                sortMembers(team, teamSorting).filter((member) => member.title.includes('Разработчик'))
              "
            />
          </template>
        </VPTeamPageSection>

        <VPTeamPageSection class="team">
          <template #title>
            {{ membersSection.title }}
          </template>
          <template #lead>
            {{ membersSection.description }}
          </template>
          <template #members>
            <VPTeamMembers
              :members="
                sortMembers(team, teamSorting).filter((member) => !member.title.includes('Разработчик'))
              "
            />
          </template>
        </VPTeamPageSection>
      </div>

      <div v-if="!teamSorting.includes('role')">
        <VPTeamMembers :members="sortMembers(team, teamSorting)" />
      </div>
    </VPTeamPage>
  </ClientOnly>
</template>

<style scoped>
.VPTeamPage {
  margin-top: 0;
}

.title {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  letter-spacing: 0;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}

.team {
  margin-bottom: 40px;
}
</style>
