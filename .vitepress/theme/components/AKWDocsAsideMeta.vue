<script setup lang="ts">
import { type Ref, computed } from 'vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import { withBase, useData } from 'vitepress'
import { getThumb } from '../composables/asidemeta'

const { frontmatter, theme } = useData()

const props = computed(() => {
    if (!frontmatter.value.appstream) {
        return
    }

    const { icon, name, summary } = frontmatter.value.appstream

    return {
        thumb: getThumb(icon, name),
        title: summary,
    }
})

console.log(props);

</script>

<template>
    <article v-if="props" class="AKWDocsAsideMeta">
        <figure class="figure" v-if="props.thumb.src">
            <VPImage :image="props.thumb.src" :alt="props.thumb.alt" />
        </figure>
        <div class="body">
            <div v-if="props.title" class="title">{{ props.title }}</div>
        </div>
    </article>
</template>

<style scoped>
.AKWDocsAsideMeta {
    overflow: hidden;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    margin-top: 24px;
}

.figure {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
}

.figure> :deep(.VPImage) {
    filter: grayscale(1);
    transition: filter 0.25s;
    width: 128px;
    height: 128px;
}


.body {
    padding: 16px;
}

.title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.title:last-child,
.title:only-child {
    margin-bottom: 0;
}

</style>