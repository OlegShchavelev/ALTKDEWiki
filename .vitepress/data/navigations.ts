export const nav = [
  { text: 'Главная', link: '/' },
  { text: 'Документация', link: '/wiki/' },
  { text: 'Для авторов', link: '/reference/' },
  {
    text: 'О проекте',
    items: [
      { text: 'О проекте', link: '/project/about/' },
      { text: 'Участники', link: '/project/contributions/' }
    ]
  }
]

const sidebar_docs = [
  {
    text: 'Установка и обновление программ',
    base: '/apps/',
    items: [
        {
          text: 'Разработка',
          items: [
            { text: 'Plan', link: '/devel/plan/' }
          ],
          collapsed: true
        },
        {
          text: 'ЭЦП',
          items: [
            { text: 'КриптоПро CSP 5', link: '/eds/cryptopro/' }
          ],
          collapsed: true
        },
        {
          text: 'Файловые менеджеры',
          items: [
            { text: 'Krusader', link: '/filemanagers/krusader/' }
          ],
          collapsed: true
        },
        {
          text: 'Игры',
          items: [
        {
          text: 'Эмуляторы',
          items: [
        { text: 'PCSX2', link: '/games/emulators/pcsx2/' }
        ],
            collapsed: true
        },
          { text: 'Steam', link: '/games/steam/' }
        ],
          collapsed: true
        },
        {
          text: 'Графика',
          items: [
        { text: 'Flameshot', link: '/graphics/flameshot/' }
         ],
          collapsed: true
        },
        {
          text: 'Мультимедиа',
          items: [
        { text: 'Haruna', link: '/multimedia/haruna/' }
         ],
           collapsed: true
        },
        {
          text: 'Сеть',
          items: [
            { text: 'AudioTube', link: '/net/audiotube/' },
            { text: 'PlasmaTube', link: '/net/plasmatube/' },
            { text: 'qBittorrent', link: '/net/qbittorrent/' }
          ],
          collapsed: true
        },
        {
          text: 'Офис',
          items: [
            { text: 'Arianna', link: '/office/arianna/' },
            { text: 'Kiten', link: '/office/kiten/' },
            { text: 'KleverNotes', link: '/office/klevernotes/' },
            { text: 'LibreOffice', link: '/office/libreoffice/' }
          ],
          collapsed: true
        },
        {
          text: 'Безопасность',
          items: [
            { text: 'KeePassXC', link: '/security/keepassxc/' }
          ],
          collapsed: true
        },
        {
          text: 'Система',
          items: [
            { text: 'Conky', link: '/system/conky/' }
          ],
          collapsed: true
        },
        {
          text: 'Инструменты',
          items: [
            {
              text: 'Разное',
              items: [
                { text: 'SafeEyes', link: '/utilities/different/safeeyes/' }
              ],
              collapsed: true
            },
            {
              text: 'Текстовые редакторы',
              items: [
                { text: 'Micro', link: '/utilities/texteditors/micro/' },
                { text: 'Nano', link: '/utilities/texteditors/nano/' }
              ],
              collapsed: true
            },
          ],
          collapsed: true
        },
        {
          text: 'Виртуализация, контейнеризация',
          items: [
            { text: 'Distrobox', link: '/vm-container/distrobox/' }
          ],
          collapsed: true
        },
  ],
    collapsed: false
  },
  {
    text: 'Настройка графики',
    base: '/graphics/',
    items: [
      {
        text: 'NVIDIA',
        link: '/nvidia/',
        items: [
          { text: 'Открытые драйвера', link: '/nvidia/nvidia-nouveau/' },
          { text: 'Закрытые драйвера', link: '/nvidia/nvidia-drivers/' }
        ],
        collapsed: false
      }
    ],
    collapsed: true
  },
  {
    text: 'Разработка',
    base: '/developers/',
    items: [
      {
        text: 'Python',
        link: 'python',
        items: [
          {
            text: 'Poetry',
            link: '/python/poetry/'
          }, {
            text: 'Приложение на Qt 6',
            link: '/python/qt6-app/'
          }
        ],
      },
      {
        text: 'Rust',
        link: 'rust/'
      }
    ],
    collapsed: true
  },
  {
    text: 'Решение проблем',
    base: '/workarrounds/',
    items: [
      {
        text: 'Некоторые GTK приложения выглядят чужеродно',
        link: 'change-gtk-themes/'
      },
      {
        text: 'Не работает загрузка сторонних тем KDE',
        link: 'enable-downloading-of-third-party-themes/' 
      }, {
        text: 'Не срабатывает блокировка экрана после пробуждения системы',
        link: 'how-lock-screen-after-waking/'
      }, {
        text: 'LightDM не запоминает последнюю выбранную сессию',
        link: 'lightdm-does-not-remember-last-session'
      }, {
        text: 'Отсутствует список пользователей в настройках',
        link: 'settings-user-no-list/'
      }
    ],
    collapsed: true
  },
  {
    text: 'Быстрые ссылки',
    base: '/package-manager/',
    items: [
      {
        text: 'EPM',
        link: 'epm/'
      }, {
        text: 'Flatpak',
        link: 'flatpak/'
      }
    ]
  }
]

const sidebar_reference = []

export const sidebar = { '/': sidebar_docs, '/reference/': sidebar_reference }
