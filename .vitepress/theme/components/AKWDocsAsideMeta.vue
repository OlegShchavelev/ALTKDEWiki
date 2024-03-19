<script setup lang="ts">
import { type Ref, computed } from 'vue'

import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

import { withBase, useData } from 'vitepress'
import { getDomainName } from '../composables/link'


const { frontmatter } = useData()
const meta = computed(() => frontmatter.value.appstream ?? null)
const bundle = computed(() => frontmatter.value.bundle)

const metaIconSrc = new URL(frontmatter.value.appstream.icon.src, import.meta.url).href

</script>

<template>
    <article v-if="meta" class="AKWDocsAsideMeta">
        <figure class="figure" v-if="meta.icon && meta.icon.src">
            <VPImage :image="withBase(metaIconSrc)" :alt="meta.icon.title ?? meta.name" />
        </figure>
        <div class="AKWAsideMetaBody">
            <div v-if="meta.summary" class="summary">{{ meta.summary }}</div>
        </div>
        <dl class="AKWAsideMetaList">
            <dt>Лицензия</dt>
            <dd>
                <VPLink :href="meta.metadata_license && meta.metadata_license.link" target="_blank">
                    {{ meta.metadata_license.name }}
                </VPLink>
            </dd>
            <dt v-if="meta.url && meta.url.homepage && meta.url.homepage.link">Сайт проекта</dt>
            <dd v-if="meta.url && meta.url.homepage && meta.url.homepage.link">
                <VPLink :href="meta.url.homepage.link" target="_blank">
                    {{ meta.url.homepage.name }}
                </VPLink>
            </dd>
            <dt v-if="meta.url && meta.url.help && meta.url.help.link">Помощь</dt>
            <dd v-if="meta.url && meta.url.help && meta.url.help.link">
                <VPLink :href="meta.url.help.link" target="_blank">
                    {{ meta.url.help.name }}
                </VPLink>
            </dd>
            <dt v-if="meta.url && meta.url.translate && meta.url.translate.link">Участие в переводах</dt>
            <dd v-if="meta.url && meta.url.translate && meta.url.translate.link">
                <VPLink :href="meta.url.translate.link" target="_blank">
                    {{ meta.url.translate.name }}
                </VPLink>
            </dd>
            <dt v-if="meta.url && meta.url.bugtracker && meta.url.bugtracker.link">Сообщить о проблеме</dt>
            <dd v-if="meta.url && meta.url.bugtracker && meta.url.bugtracker.link">
                <VPLink :href="meta.url.bugtracker.link" target="_blank">
                    {{ meta.url.bugtracker.name }}
                </VPLink>
            </dd>
        </dl>
        <div class="AKWAsideMetaFooter">
            <a target="_blank" v-if="bundle.flatpak && bundle.flatpak.appId"
                :href="'//flathub.org/apps/' + bundle.flatpak.appId" class="AKWAsideMetaFooterBtn"
                style="--akw-btn-bg: var(--vp-c-blue-dimm-1); --akw-btn-color: var(--vp-c-blue-darker); --akw-btn-hover-bg:var(--vp-c-blue-dark); --akw-btn-hover-color: var(--vp-c-white);">Flathub</a>
            <a target="_blank" v-if="bundle.sisyphus && bundle.sisyphus.srpms" :href="'//packages.altlinux.org/ru/sisyphus/srpms/' + bundle.sisyphus.srpms" class="AKWAsideMetaFooterBtn"
                style="--akw-btn-bg: var(--vp-c-yellow-dimm-1); --akw-btn-color: var(--vp-c-yellow-darker); --akw-btn-hover-bg:var(--vp-c-yellow-dark); --akw-btn-hover-color: var(--vp-c-white);">Сизиф</a>
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

.AKWAsideMetaBody {
    padding: 16px;
}

.AKWAsideMetaList {
    margin-top: 0;
    margin-bottom: 0;
}

.AKWAsideMetaList dt,
.AKWAsideMetaList dd {
    padding-left: 16px;
    padding-right: 16px;
}

.AKWAsideMetaList dt {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

.AKWAsideMetaList dd {
    margin-left: 0;
    font-size: 14px;
    padding-bottom: 8px;
    margin-bottom: 8px;
}

.AKWAsideMetaList dd:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-divider);
}

.AKWAsideMetaFooterBtn {
    padding: 8px 24px;
    text-align: center;
    transition: all .5s ease-in-out;
    display: grid;
    background-color: var(--akw-btn-bg);
    color: var(--akw-btn-color);
    font-weight: 700;
}

.AKWAsideMetaFooterBtn:hover {
    background-color: var(--akw-btn-hover-bg);
    color: var(--akw-btn-hover-color);
}

.summary {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.summary:last-child,
.summary:only-child {
    margin-bottom: 0;
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

.AKWDocsAsideMeta:hover .figure> :deep(.VPImage) {
    filter: grayscale(0) invert(0);
}
</style>