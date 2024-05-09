<script setup lang="ts">
import AKWTeamPageMembers from './AKWTeamPageMembers.vue';
import AKWTeamLoader from './AKWTeamLoader.vue';

import { useData } from 'vitepress'
const { frontmatter } = useData();

</script>

<template>
    <Suspense>
        <AKWTeamPageMembers :title="frontmatter.longtitle" />
        <template #fallback>
            <AKWTeamLoader />
        </template>
    </Suspense>
</template>

<style scoped>
.VPTeamPage {
    margin-top: 0;
}
</style>