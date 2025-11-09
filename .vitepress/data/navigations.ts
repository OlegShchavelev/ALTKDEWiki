export const nav = [
  { text: 'Главная', link: '/' },
  { text: 'Документация', link: '/wiki/' },
  { text: 'Приложения KDE', link: 'https://apps.kde.org/ru/' },
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
    text: 'KDE в Альте',
    base: '/distributions',
    items: [
      { text: 'ALT Regular KDE', link: '/ALT-Regular-KDE' },
      { text: 'ALT Starterkit KDE', link: '/ALT-Starterkit-KDE' },
      { text: 'Альт Рабочая станция К', link: '/ALT-Workstation-K' }
    ],
    collapsed: true
  },
  {
    text: 'Установка и обновление программ',
    base: '/apps',
    items: [
      {
        text: 'Разработка',
        items: [{ text: 'Plan', link: '/plan/' }],
        collapsed: true
      },
      {
        text: 'ЭЦП',
        items: [{ text: 'КриптоПро CSP 5', link: '/cryptopro/' }],
        collapsed: true
      },
      {
        text: 'Файловые менеджеры',
        items: [
          { text: 'Double Commander', link: '/doublecmd/' },
          { text: 'Krusader', link: '/krusader/' }
        ],
        collapsed: true
      },
      {
        text: 'Игры',
        items: [
          {
            text: 'Эмуляторы',
            items: [
              { text: 'DuckStation', link: '/duckstation/' },
              { text: 'PCSX2', link: '/pcsx2/' }
            ],
            collapsed: true
          },
          { text: 'Steam', link: '/steam/' }
        ],
        collapsed: true
      },
      {
        text: 'Графика',
        items: [{ text: 'Flameshot', link: '/flameshot/' }],
        collapsed: true
      },
      {
        text: 'Мультимедиа',
        items: [{ text: 'Haruna', link: '/haruna/' }],
        collapsed: true
      },
      {
        text: 'Стриминговые сервисы',
        items: [
          { text: 'Spotify', link: '/spotify/' },
          { text: 'AudioTube', link: '/audiotube/' },
          { text: 'PlasmaTube', link: '/plasmatube/' }
        ],
        collapsed: true
      },
      {
        text: 'Офис',
        items: [
          { text: 'Arianna', link: '/arianna/' },
          { text: 'Kiten', link: '/kiten/' },
          { text: 'KleverNotes', link: '/klevernotes/' },
          { text: 'LibreOffice', link: '/libreoffice/' },
          { text: 'WPS Office', link: '/wps-office/' }
        ],
        collapsed: true
      },
      {
        text: 'Безопасность',
        items: [{ text: 'KeePassXC', link: '/keepassxc/' }],
        collapsed: true
      },
      {
        text: 'Система',
        items: [
          { text: 'Conky', link: '/conky/' },
          { text: 'Junction', link: '/junction/' }
        ],
        collapsed: true
      },
      {
        text: 'Сеть',
        items: [{ text: 'qBittorrent', link: '/qbittorrent/' }],
        collapsed: true
      },
      {
        text: 'Инструменты',
        items: [
          {
            text: 'Разное',
            items: [{ text: 'SafeEyes', link: '/safeeyes/' }],
            collapsed: true
          },
          {
            text: 'Текстовые редакторы',
            items: [
              { text: 'Micro', link: '/micro/' },
              { text: 'Nano', link: '/nano/' }
            ],
            collapsed: true
          }
        ],
        collapsed: true
      },
      {
        text: 'Виртуализация, контейнеризация',
        items: [{ text: 'Distrobox', link: '/distrobox/' }],
        collapsed: true
      }
    ],
    collapsed: false
  },
  {
    text: 'Использование рабочего окружения KDE',
    base: '/using_kde',
    items: [
      {
        text: 'Настройка меню «Создать» в Dolphin',
        link: '/dolphin-templates/'
      },
      {
        text: 'Настройка яркости экрана',
        link: '/display-brightness/'
      }
    ],
    collapsed: true
  },
  {
    text: 'Расширения рабочего окружения KDE',
    base: '/extensions',
    link: '/',
    items: [
      {
        text: 'Виджеты',
        items: [
          { text: 'Advanced Radio Player', link: '/advanced-radio-player/' },
          { text: 'Big Clock', link: '/big-clock/' },
          { text: 'Clear Clock', link: '/clear-clock/' },
          { text: 'Command Output', link: '/command-output/' },
          { text: 'Day/Night Switcher', link: '/day-night-switcher/' },
          { text: 'Desktop Indicator', link: '/desktop-indicator/' },
          { text: 'KDE Material You Colors', link: '/kde-material-you-colors/' },
          { text: 'KDE Modern Clock', link: '/kde-modern-clock/' },
          { text: 'Klassy', link: '/klassy/' },
          { text: 'Krohnkite', link: '/krohnkite/' },
          { text: 'Launchpad Plasma', link: '/launchpad-plasma/' },
          { text: 'Minimalist Clock', link: '/minimalist-clock/' },
          { text: 'OnzeMenu 11', link: '/onzemenu-11/' },
          { text: 'Panel Colorizer', link: '/plasma-panel-colorizer/' },
          { text: 'Panel Spacer', link: '/panel-spacer/' },
          { text: 'Plasma Control Hub', link: '/plasma-control-hub/' },
          { text: 'PlasMusic Toolbar', link: '/plasmusic-toolbar/' },
          { text: 'Simple Customizable Power Menu for KDE', link: '/simple-power-menu/' },
          { text: 'Smart Video Wallpaper Reborn', link: '/smart-video-wallpaper-reborn/' },
          { text: 'Time Progress Bar', link: '/time-progress-bar/' },
          { text: 'Toggle Overview', link: '/toggle-overview/' },
          { text: 'Wallpaper Effects', link: '/wallpaper-effects/' }
        ],
        collapsed: true
      },
      {
        text: 'Обои',
        items: [
          { text: 'Active Blur', link: '/active-blur/' },
          { text: 'City Grow', link: '/city-grow/' },
          { text: 'Shader Wallpaper', link: '/shader-wallpaper/' },
          { text: 'Wallpaper Engine for KDE', link: '/wallpaper-engine-kde/' }
        ],
        collapsed: true
      },
      {
        text: 'Эффекты рабочего стола',
        items: [
          { text: 'Geometry Change', link: '/geometry-change/' },
          { text: 'Kinetic Animations 6', link: '/kinetic-animations-6/' },
          { text: 'Squash2', link: '/squash2/' }
        ],
        collapsed: true
      },
      {
        text: 'Сценарии KWin',
        items: [
          { text: 'Dynamic Workspaces', link: '/dynamic-workspaces/' },
          { text: 'Karousel', link: '/karousel/' },
          { text: 'MACsimize6', link: '/macsimize6/' },
          { text: 'Swap/Add/Remove - Virtual Desktop Shortcuts', link: '/swap-virtual-desktop/' },
          { text: 'Temporary Virtual Desktops', link: '/temporary-virtual-desktops/' },
          { text: 'Truely Maximized', link: '/truely-maximized/' }
        ],
        collapsed: true
      },
      {
        text: 'Заставки',
        items: [
          { text: 'Flight-Splash', link: '/flight-splash/' },
          { text: 'Kuro', link: '/kuro-splash/' },
          { text: 'Overload login splash', link: '/overload-login-splash/' }
        ],
        collapsed: true
      }
    ],
    collapsed: true
  },
  {
    text: 'Настройка графики',
    base: '/graphics',
    items: [
      {
        text: 'NVIDIA',
        base: '/graphics/nvidia',
        link: '/',
        items: [
          { text: 'Открытые драйвера', link: '/nvidia-nouveau/' },
          { text: 'Закрытые драйвера', link: '/nvidia-drivers/' }
        ],
        collapsed: false
      }
    ],
    collapsed: true
  },
  {
    text: 'Разработка',
    base: '/developers',
    items: [
      {
        text: 'Python',
        base: '/developers/python',
        link: '/',
        items: [
          { text: 'Poetry', link: '/poetry/' },
          { text: 'Приложение на Qt 6', link: '/qt6-app/' }
        ]
      },
      { text: 'Rust', link: '/rust/' }
    ],
    collapsed: true
  },
  {
    text: 'Решение проблем',
    base: '/workarrounds',
    items: [
      {
        text: 'Восстановление GRUB с BTRFS',
        link: '/how-to-restore-grub-with-btrfs/'
      },
      {
        text: 'Некоторые GTK приложения выглядят чужеродно',
        link: '/change-gtk-themes/'
      },
      {
        text: 'Не работает загрузка сторонних тем KDE',
        link: '/enable-downloading-of-third-party-themes/'
      }, {
        text: 'Игнорирование закрытия крышки ноутбука',
        link: '/ignore-handle-lid-switch/'
      },
      {
        text: 'Не срабатывает блокировка экрана после пробуждения системы',
        link: '/how-lock-screen-after-waking/'
      },
      {
        text: 'LightDM не запоминает последнюю выбранную сессию',
        link: '/lightdm-does-not-remember-last-session/'
      },
      {
        text: 'Отсутствует список пользователей в настройках',
        link: '/settings-user-no-list/'
      }
    ],
    collapsed: true
  },
  {
    text: 'Быстрые ссылки',
    base: '/system',
    items: [
      {
        text: 'Sisyphus («Сизиф»)',
        link: '/sisyphus/'
      },
      {
        text: 'EPM',
        link: '/epm/'
      },
      {
        text: 'Flatpak',
        link: '/flatpak/'
      },
      {
        text: 'Sudo',
        link: '/sudo/'
      }
    ]
  }
]

const sidebar_reference: any[] = []

export const sidebar = { '/': sidebar_docs, '/reference/': sidebar_reference }
