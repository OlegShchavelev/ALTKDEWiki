import { gitflic, gitverse } from './icons'

/* Параметры страницы участников */

const homeSorting = 'month, commits'
const teamSorting = 'role, commits, month'
const leader = 'Олег Щавелев'
const limit = 6
const developersSection = {
  title: 'Разработчики',
  description:
    'Люди, которые активно участвуют не только в расширении базы знаний, но и в улучшении её функционала.'
}
const membersSection = {
  title: 'Авторы',
  description: 'Люди, которые участвуют в улучшении и создании новых статей.'
}

export { homeSorting, teamSorting, leader, limit, membersSection, developersSection }


/* Информация об участниках */

export const contributions = [
  {
    avatar: 'https://github.com/OlegShchavelev.png',
    name: 'Олег Щавелев',
    mapByNameAliases: ['OlegShchavelev', 'Oleg Shchavelev', 'Олег Щавелев'],
    title: 'Разработчик, Участник',
    links: [
      { icon: 'github', link: 'https://github.com/OlegShchavelev' },
      {
        icon: {
          svg: gitflic
        },
        link: 'https://gitflic.ru/user/olegshchavelev'
      }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/44705058?v=4',
    name: 'Антон Политов',
    title: 'Разработчик, Участник',
    links: [{ icon: 'github', link: 'https://github.com/Ampernic' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/vg9TWtByVW'
  },
  {
    avatar: 'https://github.com/trashb1t.png',
    name: 'Владислав Темнов',
    mapByNameAliases: ['trashb1t'],
    title: 'Разработчик, Участник',
    links: [{ icon: 'github', link: 'https://github.com/trashb1t' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/57626821?v=4',
    name: 'Семен Фомченков',
    mapByNameAliases: ['Semen Fomchenkov', 'Armatik', 'armatik'],
    title: 'Участник',
    links: [
      { icon: 'github', link: 'https://github.com/Armatik' },
      {
        icon: {
          svg: gitflic
        },
        link: 'https://gitflic.ru/user/armatik'
      }
    ],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/2MA0Bm6ax63'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/131641124?v=4',
    name: 'Кирилл Уницаев',
    mapByNameAliases: ['fiersik', 'Fiersik Kouji'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/fiersik' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/4p7xYDHEH2y'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/48821354?v=4',
    name: 'Жора Змейкин',
    mapByNameAliases: ['Katze-942'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Katze-942' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/1qXUImsZFTN'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/167680957?v=4',
    name: 'Дмитрий Третьяков',
    nameAliases: ['dtwrk', 'Dmitry Tretyakov'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/dtwrk' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/159694894?v=4',
    name: 'Максим Остапенко',
    mapByNameAliases: ['Krator3'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Krator3' }]
  },
  {
    avatar: 'https://github.com/X1Z53.png',
    name: 'Давид Султаниязов',
    mapByNameAliases: ['X1Z53', 'x1z53', 'Sultaniiazov David'],
    title: 'Разработчик, Участник',
    links: [
      { icon: 'github', link: 'https://github.com/X1Z53' },
      { icon: { svg: gitverse }, link: 'https://gitverse.ru/x1z53' }
    ],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/IpsmO1P5PJ'
  },
]
