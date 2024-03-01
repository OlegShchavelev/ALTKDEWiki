import { defineConfig } from 'vitepress'

import { nav, sidebar } from '../_data/navigations'
import { telegram, gitflic, vk } from '../_data/icons'
import * as seo from '../_data/seo'
import { normalize } from './utils'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-page-properties',
      ],
    },
  },
  title: "ALT KDE Wiki",
  description: "открытое сообщество пользователей операционной системы ALT Regular KDE",
  titleTemplate: ':title' + seo.meta.SITE_TITLE_SEPARATOR + seo.meta.SITE_TITLE_POSTFIX,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: seo.meta.SITE_THEME_COLOR }],
    ['meta', { name: 'og:type', content: seo.meta.SITE_TYPE }],
    ['meta', { name: 'og:locale', content: seo.meta.SITE_LOCALE }],
    ['meta', { name: 'og:site_name', content: seo.meta.SITE_NAME }],
    ['meta', { name: 'og:image', content: seo.meta.SITE_HOST + seo.meta.SITE_OG_IMAGE }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: seo.meta.SITE_HOST + seo.meta.SITE_OG_IMAGE }],
  ],
  srcDir: './docs',
  cleanUrls: true,
  lang: seo.meta.SITE_LOCALE,
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
  },
  transformPageData: (pageData) => {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['meta', { name: 'og:title', content: pageData.title + seo.meta.SITE_TITLE_SEPARATOR + seo.meta.SITE_TITLE_POSTFIX }],
    )

    if (pageData.frontmatter.layout !== 'home') {
      pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ${seo.meta.SITE_NAME}. Последнее обновление ${seo.meta.SITE_NAME}: ${new Date(pageData.lastUpdated).toLocaleString(seo.meta.SITE_LOCALE)}`
    }
  }
})
