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

const sidebar_docs = [
    {
        text: 'Установка и обновление программ', base: '/apps/', items: [
            { text: 'Arianna', link: 'arianna/' },
            { text: 'Kiten', link: 'kiten/' },
            { text: 'Plan', link: 'plan/' },
            { text: 'PlasmaTube', link: 'plasma-tube/' },
            { text: 'qBittorrent', link: 'qbittorrent/' }
        ],
        collapsed: true
    },
    {
        text: 'Разработка', base: '/developers/', items: [
            {
                text: 'Python', base: '/developers/python/', link: '/'
            }
        ],
        collapsed: true
    }
]

const sidebar_reference = []

export const sidebar = { '/': sidebar_docs, '/reference/': sidebar_reference }