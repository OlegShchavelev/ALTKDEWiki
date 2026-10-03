import {contributions} from '../../../data/team'

// Team cards and Git Changelog use different social-link schemas.
export const mapChangelogAuthors = (authors: typeof contributions) =>
  authors.map(({ links, ...author }) => ({
    ...author,
    links: links.map(({ icon, link }) => ({ type: typeof icon === 'string' ? icon : 'custom', link }))
  }))

export const NolebaseGitChangelogOptions = {
  plugin: {
    maxGitLogCount: 20000,
    repoURL: 'https://github.com/OlegShchavelev/ALTKDEWiki',
    mapAuthors: mapChangelogAuthors(contributions)
  },
  pluginSections: {
    sections: {
      disableChangelog: false,
      disableContributors: false
    }
  },
  locales: {
    'ru-RU': {
      changelog: {
          title: 'История изменений',
          noData: 'Нет изменений',
          lastEdited: 'Последнее редактирование: {{daysAgo}}',
          lastEditedDateFnsLocaleName: 'ru',
          viewFullHistory: 'Показать историю',
          committedOn: ' от {{date}}'
        },
        contributors: {
        title: 'Авторы',
        noData: 'Нет информации'
      }
    }
  },
}
