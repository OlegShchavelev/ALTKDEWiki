import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { telegram, gitflic, vk } from '../data/icons'

import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import markdownItKdb from 'markdown-it-kbd'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'

/* Markdown */
import linkBlock from '../theme/composables/linkBlock'

import * as config from '../config.json'

/* GitLog */
import UnoCSS from 'unocss/vite'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

import { NolebaseGitChangelogOptions, YandexMetrikaOptions } from './plugins/index'

export const shared = defineConfig({
  srcDir: './docs',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: config.head.themeColor }],
    ['meta', { name: 'og:type', content: config.head.type }],
    ['meta', { name: 'og:site_name', content: config.title }],
    ['meta', { name: 'og:image', content: config.host + config.head.ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: config.host + config.head.ogImage }],
    ['meta', { name: 'yandex-verification', content: YandexMetrikaOptions.webmaster.id }]
  ],
  vite: {
    plugins: [
      UnoCSS(),
      GitChangelog(NolebaseGitChangelogOptions.plugin),
      GitChangelogMarkdownSection(NolebaseGitChangelogOptions.pluginSections)
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
  sitemap: {
    hostname: 'https://alt-kde.wiki'
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 36, height: 36, alt: 'ALT KDE Wiki' },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Нет результатов по запросу',
                resetButtonTitle: 'Сбросить',
                footer: {
                  selectText: 'для выбора',
                  navigateText: 'для навигации',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/alt_kde'
      },
      { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTRegularKDEWiki' }
    ],
    outline: {
      level: [2, 3]
    }
  },
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее'
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(markdownItKdb)
      md.use(markdownItImplicitFigures, {
        figcaption: 'title',
        copyAttrs: '^class$'
      })
      md.use(linkBlock)
    }
  },
  transformPageData: (pageData) => {
    const canonicalUrl = `https://alt-kde.wiki/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []

    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { name: 'og:title', content: pageData.title + config.head.titleSeponator + config.title }]
    )
    if (pageData.frontmatter.layout !== 'home') {
      pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ${config.title}. Последнее обновление ${config.title}: ${new Date(pageData.lastUpdated ?? new Date()).toLocaleString('ru-RU')}`
    }
  }
})
