export const nav = [
    { text: 'Главная', link: '/' },
    { text: 'Документация', link: '/wiki/' },
    { text: 'Для авторов', link: '/reference/' },
    { text: 'О проекте', items: [
        { text: 'О проекте', link: '/project/about/'},
        { text: 'Участники', link: '/project/contributions/' }
    ]},
  ]

export const sidebar = [
    { text: 'Установка и обновление программ',  items: [
        { text: 'Arianna', link: '/apps/arianna/' },
        { text: 'Kiten', link: '/apps/kiten/' },
        { text: 'Plan', link: '/apps/plan/' },
        { text: 'PlasmaTube', link: '/apps/plasma-tube/' },
        { text: 'qBittorrent', link: '/apps/qbittorrent/' }
    ],
    collapsed: true}
]