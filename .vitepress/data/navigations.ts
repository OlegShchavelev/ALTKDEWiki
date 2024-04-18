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
                text: 'Python', base: '/developers/python/', link: '/', items: [
                    { text: 'Приложение на Qt 6', link: 'qt6-app/' },
                    { text: 'Poetry', link: 'poetry/' }
                ],
                collapsed: true
            },
            {
                text: 'Rust', base: '/developers/rust/', link: '/'
            }
        ],
        collapsed: true
    },
    {
        text: 'Решение проблем', base: '/workarrounds/', items: [
            { text: 'Отсутствует список пользователей в настройках', link: 'settings-user-no-list/' },
            { text: 'LightDM не запоминает последнюю выбранную сессию', link: 'lightdm-does-not-remember-last-session/' },
            { text: 'Не работает загрузка сторонних тем KDE', link: 'enable-downloading-of-third-party-themes/' },
            { text: 'Некоторые GTK приложения выглядят чужеродно', link: 'change-gtk-themes/' },
            { text: 'Не срабатывает блокировка экрана после пробуждения системы', link: 'how-lock-screen-after-waking/' }
        ],
        collapsed: true
    },
    {
        text: 'Быстрые ссылки', items: [
            { text: 'Flatpak', link: '/package-manager/flatpak/' }
        ],
    }
]

const sidebar_reference = []

export const sidebar = { '/': sidebar_docs, '/reference/': sidebar_reference }
