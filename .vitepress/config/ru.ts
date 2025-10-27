import { defineConfigWithTheme } from 'vitepress'
import { nav, sidebar } from '../data/navigations'
import { packages } from '../../package-lock.json'

import * as config from '../config.json'

export const ru = defineConfigWithTheme({
    title: 'ALT KDE Wiki',
    description: "открытое сообщество пользователей операционной системы ALT Regular KDE",
    titleTemplate: ':title' + config.head.titleSeponator + 'ALT KDE Wiki',
    lang: 'ru-RU',
    head: [
        ['meta', { name: 'og:locale', content: 'ru-RU' }],
    ],
    themeConfig: {
        nav: nav,
        sidebar: sidebar,
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
        footer: {
            message: 'Содержание доступно <a href="/licence">по лицензии MIT</a>',
            copyright: `${new Date().getFullYear()} ALT KDE Wiki, разработано на платформе <a href="//vitepress.dev/">VitePress ${packages['node_modules/vitepress'].version}</a>`
        },
        notFound: {
            title: 'Страница не найдена',
            quote: 'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
            linkText: 'Вернуться на главную'
        },
        asideMeta: {
            keywords: {
                proprietary: {
                    name: 'Проприетарное',
                    type: 'danger'
                },
                restrictions: {
                    name: 'Региональные ограничения',
                    type: 'danger'
                },
                kdedeveloped: {
                    name: 'Разработано KDE',
                    type: 'tip'
                }
            },
            labels: {
                metadata_license: 'Лицензия',
                homepage: 'Сайт проекта',
                help: 'Помощь',
                translate: 'Помощь в переводе',
                bugtracker: 'Сообщить о проблеме'
            },
            links: {
                sisyphus: {
                    anchor: 'Сизиф',
                    target: '_blank',
                    baseUrl: '//packages.altlinux.org/ru/sisyphus/srpms/',
                    style: '--agw-btn-bg: var(--vp-c-yellow-dimm-1); --agw-btn-color: var(--vp-c-yellow-darker); --agw-btn-hover-bg:var(--vp-c-yellow-dark); --agw-btn-hover-color: var(--vp-c-white);'
                },
                flatpak: {
                    anchor: 'Flatpak',
                    target: '_blank',
                    baseUrl: '//flathub.org/apps/',
                    style: '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
                },
                snap: {
                    anchor: 'Snapcraft',
                    target: '_blank',
                    baseUrl: '//snapcraft.io/',
                    style: '--agw-btn-bg: var(--vp-c-orange-dimm-1); --agw-btn-color: var(--vp-c-orange-darker); --agw-btn-hover-bg:var(--vp-c-orange-dark); --agw-btn-hover-color: var(--vp-c-white);'
                },
                extension: {
                    anchor: 'KDE Store',
                    target: '_blank',
                    baseUrl: '//store.kde.org/p/',
                    style:
                        '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
                }
            }
        }
    },
})