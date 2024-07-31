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
    items: [{
      text: 'Arianna',
      link: 'arianna/'
    }, {
      text: 'КриптоПро CSP 5',
      link: 'cryptopro/'
    }, {
      text: 'Flameshot',
      link: 'flameshot/'
    }, {
      text: 'Haruna',
      link: 'haruna/'
    }, {
      text: 'KeePassXC',
      link: 'keepassxc/'
    }, {
      text: 'LibreOffice',
      link: 'libreoffice/'
    }, {
      text: 'Micro',
      link: 'micro/'
    }, {
      text: 'Nano',
      link: 'nano/'
    }, {
      text: 'Plan',
      link: 'plan/'
    }, {
      text: 'PlasmaTube',
      link: 'plasmatube/'
    }, {
      text: 'qBittorrent',
      link: 'qbittorrent/'
    }, {
      text: 'SafeEyes',
      link: 'safeeyes'
    }, {
      text: 'Steam',
      link: 'steam/'
    }],
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
            link: 'poetry/'
          }, {
            text: 'Приложение на Qt 6',
            link: 'qt6-app'
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
