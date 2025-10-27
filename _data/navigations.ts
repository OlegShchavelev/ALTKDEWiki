import { type DefaultTheme } from 'vitepress'

export const nav: Record<string, Array<DefaultTheme.NavItem>> = {
  'ru-RU': [
    { text: 'Главная', link: '/' },
    { text: 'Документация', link: '/wiki' },
    { text: 'Приложения KDE', link: '/apps-kde' },
    { text: 'Для авторов', link: '/reference' },
    {
      text: 'О проекте',
      items: [
        { text: 'О проекте', link: '/about' },
        { text: 'Участники', link: '/contributions' }
      ]
    }
  ]
}
export const sidebar: Record<string, DefaultTheme.Sidebar> = {
  'ru-RU': {
    '/': [
      {
        items: [
          { text: 'Быстрый старт', link: '/quick-start' },
          {
            text: 'KDE в Альте',
            items: [
              { text: 'ALT Regular KDE', link: '/alt-regular-kde' },
              { text: 'ALT Starterkit KDE', link: '/alt-starterkit-kde' },
              { text: 'Альт Рабочая станция К', link: '/alt-workstation-k' }
            ],
            collapsed: true
          },
          {
            text: 'Установка',
            link: '/download',
            items: [
              { text: 'Создание загрузочного диска ALT Regular KDE', link: '/bootable-drive' },
              { text: 'Руководство по установке', link: '/ordinary-install' }
            ],
            collapsed: true
          },
          {
            text: 'Безопасность',
            link: '/security'
          },
          {
            text: 'Установка и обновление программ',
            items: [
              { text: 'Arianna', link: '/arianna' },
              { text: 'AudioTube', link: '/audiotube' },
              { text: 'Conky', link: '/conky' },
              { text: 'Double Commander', link: '/doublecmd' },
              { text: 'DuckStation', link: '/duckstation' },
              { text: 'Distrobox', link: '/distrobox' },
              { text: 'Flameshot', link: '/flameshot' },
              { text: 'Haruna', link: '/haruna' },
              { text: 'Junction', link: '/junction' },
              { text: 'KeePassXC', link: '/keepassxc' },
              { text: 'Kiten', link: '/kiten' },
              { text: 'KleverNotes', link: '/klevernotes' },
              { text: 'Krusader', link: '/krusader' },
              { text: 'LibreOffice', link: '/libreoffice' },
              { text: 'Micro', link: '/micro' },
              { text: 'Nano', link: '/nano' },
              { text: 'PCSX2', link: '/pcsx2' },
              { text: 'Plan', link: '/plan' },
              { text: 'PlasmaTube', link: '/plasmatube' },
              { text: 'qBittorrent', link: '/qbittorrent' },
              { text: 'SafeEyes', link: '/safeeyes' },
              { text: 'Spotify', link: '/spotify' },
              { text: 'Steam', link: '/steam' },
              { text: 'WPS Office', link: '/wps-office' },
              { text: 'КриптоПро CSP 5', link: '/cryptopro' }
            ],
            collapsed: true
          },
          {
            text: 'Использование рабочего окружения KDE',
            items: [
              {
                text: 'Рабочий стол',
                items: [
                  { text: 'Запуск приложений', link: '/launching-applications' },
                  { text: 'Автоматический запуск приложений', link: '/startup-applications' },
                  { text: 'Удаленный рабочий стол', link: '/kde-remote-desktop' },
                  { text: 'Настройка меню «Создать» в Dolphin', link: '/dolphin-templates' }
                ],
                collapsed: true
              },
              {
                text: 'Сети, Интернет и электронная почта',
                items: [
                  {
                    text: 'Безопасность',
                    items: [
                      { text: 'Нужна ли мне антивирусная программа', link: '/net-antivirus' }
                    ],
                    collapsed: true
                  },
                  {
                    text: 'Веб-браузеры',
                    items: [
                      { text: 'Изменение используемого по умолчанию веб-браузера', link: '/net-browser' }
                    ],
                    collapsed: true
                  }
                ],
                collapsed: true
              },
              {
                text: 'Настройки пользователя и системы',
                items: [
                  {
                    text: 'Звук',
                    items: [
                      { text: 'Управление громкостью', link: '/kde-volume-control' }
                    ],
                    collapsed: true
                  },
                  {
                    text: 'Клавиатура',
                    items: [
                      { text: 'Использование других раскладок клавиатуры', link: '/keyboard-layouts' },
                      { text: 'Сочетание клавиш', link: '/keyboard-shortcuts' }
                    ],
                    collapsed: true
                  },
                  {
                    text: 'Монитор и экран',
                    items: [
                      { text: 'Изменение разрешения или ориентация экрана', link: '/look-resolution' },
                      { text: 'Подключение дополнительного монитора', link: '/display-dual-monitors' },
                      { text: 'Изменение внешнего вида рабочего стола', link: '/look-background' },
                      { text: 'Настройка яркости экрана', link: '/display-brightness' }
                    ],
                    collapsed: true
                  },
                  { text: 'Установка шрифтов', link: '/add-fonts' }
                ],
                collapsed: true
              }
            ],
            collapsed: true
          },
          {
            text: 'Расширения рабочего окружения KDE',
            link: '/extensions',
            items: [
              { text: 'Smart Video Wallpaper Reborn', link: '/smart-video-wallpaper-reborn' }
            ],
            collapsed: true
          },
          {
            text: 'Решение проблем',
            items: [
              { text: 'Восстановление GRUB с BTRFS', link: '/how-to-restore-grub-with-btrfs/' },
              { text: 'Некоторые GTK приложения выглядят чужеродно', link: '/change-gtk-themes/' },
              { text: 'Не работает загрузка сторонних тем KDE', link: '/enable-downloading-of-third-party-themes/' },
              { text: 'Игнорирование закрытия крышки ноутбука', link: '/ignore-handle-lid-switch/' },
              { text: 'Не срабатывает блокировка экрана после пробуждения системы', link: '/how-lock-screen-after-waking/' },
              { text: 'LightDM не запоминает последнюю выбранную сессию', link: '/lightdm-does-not-remember-last-session/' },
              { text: 'Отсутствует список пользователей в настройках', link: '/settings-user-no-list/' }
            ],
            collapsed: true
          },
          {
            text: 'Периферия и оборудование',
            link: '/hardware-compatibility',
            items: [
              { text: 'Аппаратная совместимость', link: '/hardware-compatibility' },
              {
                text: 'Драйверы NVIDIA',
                link: '/nvidia',
                items: [
                  { text: 'Открытые драйвера', link: '/nvidia-nouveau' },
                  { text: 'Закрытые драйвера', link: '/nvidia-drivers' }
                ],
                collapsed: true
              },
              { text: 'Подключение принтера', link: '/drivers-for-printer' },
              { text: 'Подключение сканера', link: '/drivers-for-scanner' }
            ],
            collapsed: true
          },
          {
            text: 'Разработка',
            items: [
              {
                text: 'Python',
                link: '/python',
                items: [
                  { text: 'Использование Poetry', link: '/python-use-poetry' },
                  { text: 'Приложение на Qt 6', link: '/python-qt6-app' }
                ],
                collapsed: true
              },
              { text: 'Rust', link: '/rust/' }
            ],
            collapsed: true
          },
          {
            text: 'Cизиф',
            link: '/sisyphus',
            items: [
              { text: 'Etersoft-build-utils', link: '/etersoft-build-utils' },
              { text: 'Hasher', link: '/hasher' },
              { text: 'Spec', link: '/spec' },
              { text: 'Сборка в системе', link: '/build' },
              { text: 'Сборка RPM-пакетов', link: '/build-packages' },
              { text: 'Патчи', link: '/patches' }
            ]
          },
          {
            text: 'Игры',
            link: '/games',
            items: [
              { text: 'Настройка параметра clearcpiuid', link: '/clearcpuid' }
            ],
            collapsed: true
          }
        ]
      },
      {
        text: 'Быстрые ссылки',
        items: [
          { text: 'Sisyphus («Сизиф»)', link: '/sisyphus' },
          { text: 'EPM', link: '/epm' },
          { text: 'Flatpak', link: '/flatpak' },
          { text: 'Sudo', link: '/sudo' }
        ]
      }
    ],
    '/reference/': [
      { text: 'Для авторов', link: '/reference' }
    ]
  }
}
