<script setup lang="ts">
import { useData } from 'vitepress'
import { VPHomeSponsors } from 'vitepress/theme'

const { frontmatter } = useData()
const message = frontmatter.value.sponsors.introtext ?? null
const data = frontmatter.value.sponsors.collections ?? {}

</script>

<template>
  <VPHomeSponsors
    v-if="data"
    :message="message"
    :data="data"
  />
</template>