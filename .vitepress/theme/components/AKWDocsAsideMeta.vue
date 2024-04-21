<script setup lang="ts">
import { type Ref, computed } from 'vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import { withBase, useData } from 'vitepress'
import { getLists, getLinks, getLicence } from '../composables/asidemeta'

import AKWAsideMetaList from './AKWAsideMetaList.vue'
import AKWAsideMetaLink from './AKWAsideMetaLink.vue'

const { frontmatter, theme } = useData()


const props = computed(() => {

    if (!frontmatter.value.appstream) {
        return
    }

    const { icon, name, summary, metadata_license, developer, url } = frontmatter.value.appstream
    const links = frontmatter.value.aggregation
    const config = theme.value.asideMeta
    const license = getLicence(metadata_license)

    return {
        thumb: icon,
        name: name,
        title: summary,
        developer: developer,
        lists: getLists({ ...license, ...url }, config.labels),
        links: getLinks(links, config.links)
    }
})

</script>

<template>
    <article v-if="props" class="AKWDocsAsideMeta">
        <figure class="figure" v-if="props.thumb">
            <VPImage :image="props.thumb" :alt="props.thumb?.alt ?? props.name" />
        </figure>
        <div class="body">
            <div v-if="props.title" class="title">{{ props.title }}</div>
            <div v-if="props.developer" class="developers">
                <figure v-if="props.developer?.avatar" class="avatar">
                    <VPImage :image="props.developer?.avatar" :alt="props.developer?.name" />
                </figure>
                <div>
                    <div class="caption">Разработчик</div>
                    <div class="name">{{ props.developer?.name }}
                        <span class="nickname">
                            {{ props.developer?.nickname }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <AKWAsideMetaList :lists="props.lists" />
        <AKWAsideMetaLink :links="props.links" />
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

.AKWDocsAsideMeta:hover :deep(.VPImage) {
    filter: grayscale(0) invert(0);
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

.developers {
    margin-top: 12px;
    display: flex;
    gap: 12px;
}

.avatar {
    position: relative;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    box-shadow: var(--vp-shadow-3);
}

.caption {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

.name {
    line-height: 1.5;
    font-size: 14px;
}

.nickname {
    display: block;
    font-size: 11px;
    color: var(--vp-c-text-3);
    font-weight: 500;
}
</style>