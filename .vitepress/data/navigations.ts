import { generateSidebar } from 'vitepress-sidebar';

export const nav = [
    { text: 'Главная', link: '/' },
    { text: 'Документация', link: '/wiki/' },
    { text: 'Для авторов', link: '/reference/' },
    {
        text: 'О проекте', items: [
            { text: 'О проекте', link: '/project/about/' },
            { text: 'Участники', link: '/project/contributions/' }
        ]
    },
]

const sidebar_docs = [{
    text: 'Установка и обновление программ', base: '/apps/', items: generateSidebar({
        documentRootPath: 'docs/apps',
        excludeFolders: ['_parts'],
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true
    }),
    collapsed: true
}, {
    text: 'Настройка графики', base: '/graphics/', items: [
        { text: 'NVIDIA', link: '/nvidia/', items: [
            { 'text': 'Открытые драйвара', link: '/nvidia/nvidia-nouveau/' },
            { 'text': 'Закрытые драйвара', link: '/nvidia/nvidia-drivers/' }
        ],
        collapsed: false
    }
    ],
    collapsed: true
}, {
    text: 'Разработка', base: '/developers/', items: generateSidebar({
        documentRootPath: 'docs/developers',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true
    }),
    collapsed: true
}, {
    text: 'Решение проблем', base: '/workarrounds/', items: generateSidebar({
        documentRootPath: 'docs/workarrounds',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true
    }),
    collapsed: true
}, {
    text: 'Быстрые ссылки', base: '/package-manager/', items: generateSidebar({
        documentRootPath: 'docs/package-manager',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true
    })
}, {
    text: 'Тестовые пункты', base: '/tests/', items: [
        {
            text: 'Пункт 1', link: 'page-1/'
        },
        {
            text: 'Пункт 2', link: 'page-2/'
        },
    ] 
}]

const sidebar_reference = []

export const sidebar = { '/': sidebar_docs, '/reference/': sidebar_reference }
