/* System */
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { telegram, vk } from '../support/icons'
import { rewrites } from '../support/paths'
import { normalize } from '../support/utils'

/* Tools */

import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from "rollup-plugin-visualizer"

/* Markdown */
import { createContainerPlugin } from '@alt-gnome/markdown-it-custom-containers'
import VitepressMarkdownTimeline from 'vitepress-markdown-timeline'
import markdownItKbd from 'markdown-it-kbd'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'
import markdownItEmbed from 'markdown-it-html5-embed'
import markdownItConditionalRender from 'markdown-it-conditional-render'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import linkBlock from '../theme/composables/linkBlock'

/* Syntaxises */
import languages from '../theme/syntaxes'

/* GitLog */
import UnoCSS from 'unocss/vite'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

/* PagePropierties */
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite'

import { alignmentContainers, headTransformer, nolebaseGitChangelogOptions } from './plugins'

export const shared = defineConfig({
  title: 'ALT KDE Wiki',
  titleTemplate: ':title — ALT KDE Wiki',
  base: '',
  srcDir: './docs',
  sitemap: {
    hostname: 'https://alt-kde.wiki/'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#62a0ea' }],
    ['meta', { name: 'yandex-verification', content: '7f227bf12097f984' }]
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [
      vueDevTools(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        filename: "./.tools/chunk_analyse/stats.html",
      }) as PluginOption,
      UnoCSS(),
      GitChangelog(nolebaseGitChangelogOptions.plugin),
      GitChangelogMarkdownSection(nolebaseGitChangelogOptions.pluginSections),
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: [],
        exclude: (_, { helpers }): boolean => {
          for (let page of ['index.md', 'wiki.md', 'contributions.md', 'about.md', 'games.md']) {
            if (helpers.idEndsWith(page)) return true
          }
          return false
        }
      })
    ],
    optimizeDeps: {
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties'
      ]
    },
    resolve: {
      alias: {
        '@vitepress/theme': fileURLToPath(
          new URL('../node_modules/vitepress/dist/client/theme-default', import.meta.url)
        )
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: { src: '/logo.png', width: 36, height: 36, alt: 'ALT KDE Wiki' },
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/alt_kde'
      },
      {
        icon: 'github',
        link: 'https://github.com/OlegShchavelev/ALTKDEWiki'
      }
    ],
    editLink: {
      pattern: 'https://github.com/OlegShchavelev/ALTKDEWiki/edit/main/docs/:path'
    },
    outline: {
      level: [2, 3]
    }
  },
  rewrites: rewrites,
  markdown: {
    languages,
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее'
    },
    config: (md) => {
      md.use(createContainerPlugin, {
        containers: alignmentContainers
      })
      md.use(markdownItKbd)
      md.use(markdownItTaskLists)
      md.use(VitepressMarkdownTimeline)
      md.use(markdownItImplicitFigures, {
        figcaption: 'title',
        copyAttrs: '^class$'
      })
      md.use(markdownItEmbed, {
        html5embed: {
          useImageSyntax: true // Enables video/audio embed with ![]() syntax (default)
        }
      })
      md.use(markdownItConditionalRender)
      md.use(tabsMarkdownPlugin)

      md.use(linkBlock)
    }
  },
  lastUpdated: true,
  transformPageData: (pageData) => {
    if (pageData.filePath.split('/')[0] in Object.keys(headTransformer)) {
      pageData.frontmatter.head ??= []
      headTransformer[pageData.filePath.split('/')[0]].frontmatterHead(pageData, normalize)
      headTransformer[pageData.filePath.split('/')[0]].notHomeFrontmatter(pageData, normalize)
    } else {
      pageData.frontmatter.head ??= []
      headTransformer['root'].frontmatterHead(pageData, normalize)
      headTransformer['root'].notHomeFrontmatter(pageData, normalize)
    }
  }
})
