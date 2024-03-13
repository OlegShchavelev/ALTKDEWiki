import { defineConfig } from 'vitepress'

import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import markdownItKdb from 'markdown-it-kbd'

import { nav, sidebar } from '../_data/navigations'
import { telegram, gitflic, vk } from '../_data/icons'
import { normalize } from './utils'

import * as config from './config.json'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties',
      ],
    },
  },
  title: config.title,
  description: "открытое сообщество пользователей операционной системы ALT Regular KDE",
  titleTemplate: ':title' + config.head.titleSeponator + config.title,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: config.head.themeColor }],
    ['meta', { name: 'og:type', content: config.head.type }],
    ['meta', { name: 'og:locale', content: config.lang }],
    ['meta', { name: 'og:site_name', content: config.title }],
    ['meta', { name: 'og:image', content: config.host + config.head.ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: config.host + config.head.ogImage }],
  ],
  srcDir: './docs',
  cleanUrls: true,
  lang: config.lang,
  sitemap: {
    hostname: 'https://alt-kde.wiki'
  },
  themeConfig: {
    logo: { src: '/logo.png', width: 36, height: 36, alt: "ALT KDE Wiki" },
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/alt_kde'
      },
      { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTRegularKDEWiki' }
    ],
    nav: nav,
    sidebar: sidebar,
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
    editLink: {
      pattern: 'https://github.com/OlegShchavelev/ALTRegularKDEWiki/edit/main/docs/:path',
      text: 'Предложить изменения на этой странице'
    },
    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    darkModeSwitchLabel: 'Тема',
    outlineTitle: 'Оглавление',
    outline: {
      level: [2, 3],
    },
    footer: {
      message: 'Содержание доступно <a href="/licence">по лицензии MIT</a>',
      copyright: '2024 ALT KDE Wiki, разработано на платформе <a href="//vitepress.dev/">VitePress 1.0.0-rc.44</a>'
    },
    notFound: {
      title: 'Страница не найдена',
      quote: 'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
      linkText: 'Вернуться на главную'
    }
  },
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее',
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(markdownItKdb)
    }
  },
  transformPageData: (pageData) => {

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['meta', { name: 'og:title', content: pageData.title + config.head.titleSeponator + config.title }],
    )
    if (pageData.frontmatter.layout !== 'home') {
      pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ${config.title}. Последнее обновление ${config.title}: ${new Date(pageData.lastUpdated).toLocaleString(config.lang)}`
    }
  }
})
