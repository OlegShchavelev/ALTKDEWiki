<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPButton,
} from 'vitepress/theme'

import AKWTeamPageMembers from './AKWTeamPageMembers.vue';
import AKWTeamLoader from './AKWTeamLoader.vue';

import { useData } from 'vitepress'
const { frontmatter } = useData();

</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
        <template v-if="frontmatter.longtitle" #title>
        {{ frontmatter.longtitle }}
        </template>
        </VPTeamPageTitle>
        <Suspense>
            <AKWTeamPageMembers />
            <template #fallback>
                <AKWTeamLoader />
            </template>
        </Suspense>
    </VPTeamPage>
</template>

<style scoped>
.VPTeamPage {
    margin-top: 0;
}
</style>