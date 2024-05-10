<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPButton,
} from 'vitepress/theme'

import AKWHomeTeamButton from './AKWHomeTeamButton.vue';
import AKWHomeTeamMembers from './AKWHomeTeamMembers.vue';
import AKWTeamLoader from './AKWTeamLoader.vue';

</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                Участники
            </template>
        </VPTeamPageTitle>
        <Suspense>
            <AKWHomeTeamMembers/>
            <template #fallback>
                <AKWTeamLoader />
            </template>
        </Suspense>
        <AKWHomeTeamButton>
            <VPButton text="Все участники" class="button" size="big" href="/project/contributions/" />
        </AKWHomeTeamButton>
    </VPTeamPage>
</template>