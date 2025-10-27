import { defineConfigWithTheme } from 'vitepress'
import { nav, sidebar } from '../../_data/navigations'
import { packages } from '../../package-lock.json'
import { vitepressSearchOptions } from './plugins'

export const ru = defineConfigWithTheme({
  lang: 'ru-RU',
  description: 'Открытое сообщество пользователей операционной системы ALT Regular KDE',
  themeConfig: {
    search: {
      options: vitepressSearchOptions
    },
    nav: nav['ru-RU'],
    sidebar: sidebar['ru-RU'],
    editLink: {
      pattern: 'https://github.com/OlegShchavelev/ALTKDEWiki/edit/main/docs/:path',
      text: 'Предложить изменения на этой странице'
    },
    lastUpdated: {
      text: 'Последнее обновление'
    },
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    darkModeSwitchLabel: 'Тема',
    outlineTitle: 'Оглавление',
    notFound: {
      title: 'Страница не найдена',
      quote: 'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
      linkText: 'Вернуться на главную'
    },
    footer: {
      message: 'Содержание доступно <a href="/licence.html">по лицензии MIT</a>',
      copyright: `
              2023-${new Date().getFullYear()} ALT KDE Wiki,
              разработано на платформе <a href="//vitepress.dev/">VitePress ${packages['node_modules/vitepress'].version}</a>
            `
    },
    asideMeta: {
      keywords: {
        kdedeveloped: {
          name: 'Разработано KDE',
          type: 'tip'
        },
        adaptive: {
          name: 'Адаптивное',
          type: 'success'
        },
        proprietary: {
          name: 'Проприетарное',
          type: 'danger'
        },
        restrictions: {
          name: 'Региональные ограничения',
          type: 'danger'
        },
        oobe: {
          name: 'Предустановлено',
          type: 'warning'
        }
      },
      lists: {
        labels: {
          metadata_license: 'Лицензия',
          homepage: 'Сайт проекта',
          help: 'Помощь',
          faq: 'Вопросы и ответы',
          translate: 'Помощь в переводе',
          bugtracker: 'Сообщить о проблеме'
        },
      },
      links: {
        donation: {
          anchor: 'Поддержать автора',
          target: '_blank',
          style:
            '--agw-btn-bg: var(--vp-c-purple-soft); --agw-btn-color: var(--vp-c-purple-3); --agw-btn-hover-bg:var(--vp-c-purple-3); --agw-btn-hover-color: var(--vp-c-white);'
        },
        sisyphus: {
          anchor: 'Сизиф',
          target: '_blank',
          baseUrl: '//packages.altlinux.org/ru/',
          style:
            '--agw-btn-bg: var(--vp-c-yellow-dimm-1); --agw-btn-color: var(--vp-c-yellow-darker); --agw-btn-hover-bg:var(--vp-c-yellow-dark); --agw-btn-hover-color: var(--vp-c-white);'
        },
        flatpak: {
          anchor: 'Flatpak',
          target: '_blank',
          baseUrl: '//flathub.org/apps/',
          style:
            '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
        },
        snap: {
          anchor: 'Snapcraft',
          target: '_blank',
          baseUrl: '//snapcraft.io/',
          style:
            '--agw-btn-bg: var(--vp-c-orange-dimm-1); --agw-btn-color: var(--vp-c-orange-darker); --agw-btn-hover-bg:var(--vp-c-orange-dark); --agw-btn-hover-color: var(--vp-c-white);'
        },
        extension: {
          anchor: 'KDE Store',
          target: '_blank',
          baseUrl: '//store.kde.org/p/',
          style:
            '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
        },
        about_app: {
          anchor: 'Подробнее',
          target: '_blank',
          style:
            '--agw-btn-bg: var(--vp-c-green-dimm-1); --agw-btn-color: var(--vp-c-green-darker); --agw-btn-hover-bg:var(--vp-c-green-dark); --agw-btn-hover-color: var(--vp-c-white);'
        }
      }
    }
  }
})
