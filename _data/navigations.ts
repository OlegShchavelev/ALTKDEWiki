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
        { text: 'qBittorrent', link: '/apps/qbittorrent/' }
    ],
    collapsed: true}
]