<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { type Ref, computed, inject } from 'vue'
import { assetImage } from '../composables/image'
import { VPImage } from 'vitepress/theme'
import { type Zoom } from 'medium-zoom'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

const zoom = inject<Ref<Zoom>>('mediumZoom')

const { theme, frontmatter } = useData()
const route = useRoute()
const isIndex = route.component && route.component.name
  ? route.component.name.split('/').slice(-1)[0] === 'index.md'
  : false

const props = defineProps({
  id: Number
})

const galleries = computed(() => {
  const galleryConfig = frontmatter.value.gallery
    ? props.id && frontmatter.value.gallery[props.id]
      ? frontmatter.value.gallery[props.id]
      : frontmatter.value.gallery[0] ?? frontmatter.value.gallery ?? theme.value.gallery ?? []
    : null

  const { title, type, col, row, items } = galleryConfig

  items.forEach((item) => {
    item.src = isIndex
      ? assetImage(item.src, route.path)
      : assetImage(item.src, route.path.split('/').slice(0, -1).join('/') + '/')
  })

  return {
    title: title,
    type: type,
    col: col,
    row: row,
    items: items
  }
})

const onAfterInit = () => {
  zoom?.value?.attach('.gallery')
}
</script>

<template>
  <ClientOnly>
    <div class="galleries" v-if="galleries">
      <h3 v-if="galleries.title" v-html="galleries.title"></h3>
      <div v-if="galleries.type == 'grid'" class="grid-container">
        <swiper
          :modules="[Grid]"
          :slides-per-view="galleries.col"
          :breakpoints="{
            767: { slidesPerView: 2 },
            1024: {
              slidesPerView: galleries.col,
              grid: {
                fill: 'row',
                rows: galleries.row
              }
            }
          }"
          :space-between="20"
          @afterInit="onAfterInit"
        >
          <swiper-slide v-for="file in galleries.items" :key="file.src" class="item">
            <figure class="figure">
              <figure class="figure ratio ratio-1x1">
                <VPImage
                  :image="file.src"
                  :alt="frontmatter.title"
                  class="gallery medium-zoom-image"
                  data-zoomable="true"
                  loading="lazy"
                  :img-attrs="{ loading: 'lazy' }"
                />
              </figure>
              <figcaption>{{ file.text }}</figcaption>
            </figure>
          </swiper-slide>
        </swiper>
      </div> 
      <div v-if="galleries.type == 'carousel'">
        <swiper
          :slides-per-view="1.1"
          :breakpoints="{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }"
          :space-between="20"
          @afterInit="onAfterInit"
        >
          <swiper-slide v-for="file in galleries.items" :key="file.src" class="item">
            <figure class="figure">
              <figure class="figure ratio ratio-1x1">
                <VPImage
                  :image="file.src"
                  :alt="frontmatter.title"
                  class="gallery medium-zoom-image"
                  data-zoomable="true"
                  loading="lazy"
                  :img-attrs="{ loading: 'lazy' }"
                />
              </figure>
              <figcaption>{{ file.text }}</figcaption>
            </figure>
          </swiper-slide>
        </swiper>
      </div>
      <div v-if="galleries.type == 'slider'">
        <swiper :slides-per-view="1.05" :space-between="20" @afterInit="onAfterInit">
          <swiper-slide v-for="file in galleries.items" :key="file.src" class="item">
            <figure class="figure">
              <figure class="figure ratio ratio-16x9">
                <VPImage
                  :image="file.src"
                  :alt="frontmatter.title"
                  class="gallery medium-zoom-image"
                  data-zoomable="true"
                  loading="lazy"
                  :img-attrs="{ loading: 'lazy' }"
                />
              </figure>
              <figcaption>{{ file.text }}</figcaption>
            </figure>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
figcaption {
  color: var(--vp-c-text-2);
}

.swiper {
  margin-top: 24px;
}
.grid-container {
  max-width: 800px;
}

.figure {
  position: relative;
  width: 100%;
}

.ratio::before {
  content: '';
  display: block;
}

.ratio.ratio-1x1::before {
  padding-top: 100%;
}

.ratio.ratio-16x9::before {
  padding-top: 56.25%;
}

.figure > * {
  object-fit: cover;
}

.ratio > * {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.figure > :deep(.VPImage) {
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
}

.medium-zoom-overlay {
  backdrop-filter: blur(2rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}
</style>
