<script setup lang="js">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { assetImage } from '../composables/image'

import 'vue-silentbox/dist/style.css'

const { frontmatter, theme } = useData()
const route = useRoute()
const params = defineProps(['id'])

const props = computed(() => {
    if (!frontmatter.value.gallery) {
        return
    }

    const { title, type, lazy, images } = frontmatter.value.gallery[params.id]
    const gallery = []

    if (images) {
        for (let src of Object.keys(images)){        
            gallery.push({...images[src], ...{'src': assetImage(src, route.path) }})
        }
        
    }

    return {
        title: title,
        type: type,
        gallery: gallery,
        lazy: lazy,
    }
})

</script>

<template>
    <h3 v-if="props.title" v-html="props.title"></h3> 
    <silent-box v-if="props.type == 'silentbox'" :gallery=props.gallery :lazy-loading=props.lazy></silent-box>
</template>