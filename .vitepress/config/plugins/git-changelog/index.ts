import { default as map } from '../../../../_data/fullteam.json'

export const nolebaseGitChangelogOptions = {
  plugin: {
    maxGitLogCount: 20000,
    repoURL: 'https://github.com/OlegShchavelev/ALTKDEWiki',
    mapAuthors: map
  },
  pluginSections: {
    sections: {
      disableChangelog: false,
      disableContributors: false
    }
  }
}
