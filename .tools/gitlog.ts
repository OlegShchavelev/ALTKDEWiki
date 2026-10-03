import yargs from 'yargs/yargs'
import { Octokit } from '@octokit/core'
import { contributions as RawContributors } from '../.vitepress/data/team'
import * as fs from 'fs'
import { resolve } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import ora from 'ora'
import { cyan, gray } from 'colorette'

/*
    CLI Arguments
*/
const args = await yargs(process.argv.slice(2))
  .options({
    key: { type: 'string', default: '' },
    repoUrl: { type: 'string', default: 'https://github.com/OlegShchavelev/ALTKDEWiki' },
    dev: { type: 'boolean', default: false }
  })
  .parseAsync()

interface Activity {
  commits: number
  add: number
  remove: number
}
interface GithubContributor {
  total: number
  weeks: { a?: number; d?: number; c?: number }[]
  author: { login: string; avatar_url: string; html_url: string } | null
}
type Author = Omit<(typeof RawContributors)[number], 'links'> & {
  links: { icon: string | { svg: string }; link: string }[]
  summary: Activity
  lastMonthActive: Activity
}
const Authors: Author[] = []
// Package scripts and the VitePress loader both resolve generated data from the project root.
const output = resolve('.vitepress/data/fullteam.json')
const toolname = `${cyan(`[ @alt-gnome/alt-wiki-vitepress-kde | Git Statistic ]`)}${gray(':')}`
const spiner = ora({ discardStdin: false })

if (!args.key && !args.dev) {
  spiner.fail(`${toolname} Не включен режим разработки или не введен ключ`)
  process.exitCode = 1
} else if (args.key) {
  try {
    spiner.start(`${toolname} Читаем данные с гита...\n`)

    const octokit = new Octokit({
      auth: args.key
    })

    const CalculateStats = (GithubContributor: GithubContributor, RawContributor: Author) => {
      GithubContributor.weeks.forEach((week) => {
        RawContributor.summary.add += week.a ?? 0
        RawContributor.summary.remove += week.d ?? 0
      })

      GithubContributor.weeks.slice(-4).forEach((week) => {
        RawContributor.lastMonthActive.add += week.a ?? 0
        RawContributor.lastMonthActive.remove += week.d ?? 0
        RawContributor.lastMonthActive.commits += week.c ?? 0
      })
    }

    const getGithubStats = async (): Promise<{ status: number; data?: GithubContributor[] | string }> => {
      const repoUrl = new URL(args.repoUrl)
      const [owner, repo] = repoUrl.pathname.split('/').filter(Boolean)
      if (repoUrl.hostname !== 'github.com' || !owner || !repo) {
        throw new Error('repoUrl должен указывать на репозиторий GitHub')
      }
      for (let attempt = 0; attempt < 6; attempt++) {
        const response = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
          owner, repo,
          headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        })
        // Octokit's endpoint declaration models 200 only; GitHub also returns 202 while computing stats.
        const status = Number(response.status)
        if (status === 200) {
          if (!Array.isArray(response.data)) throw new Error('GitHub вернул некорректную статистику')
          return { status, data: response.data }
        }
        if (status !== 202) return { status, data: 'Неожиданный ответ GitHub' }
        if (attempt < 5) await delay(10000)
      }
      return { status: 202, data: 'GitHub не подготовил статистику за 6 попыток' }
    }

    const GetUserInfo = async (user: string) => octokit.request('GET /users/{user}', {
      user, headers: { 'X-GitHub-Api-Version': '2022-11-28' }
    })

    const GithubContributors = await getGithubStats()

    if (GithubContributors.status === 200 && Array.isArray(GithubContributors.data)) {
      spiner.info(`${toolname} Данные получены.`)
      for (const Contributor of GithubContributors.data) {
        const githubAuthor = Contributor.author
        if (!githubAuthor) continue
        spiner.info(`${toolname} Обрабатываем автора: ${githubAuthor.login}`)

        const ContributorProfileInfo = await GetUserInfo(githubAuthor.login)

        const RawContributor = RawContributors.find(Author => Author.mapByNameAliases?.includes(githubAuthor.login))

        if (RawContributor) {
          const Author = {
            ...RawContributor,
            summary: {
              commits: Contributor.total,
              add: 0,
              remove: 0
            },
            lastMonthActive: {
              commits: 0,
              add: 0,
              remove: 0
            },
          }
          CalculateStats(Contributor, Author)
          Authors.push(Author)
        } else {
          const Author = {
            mapByNameAliases: [githubAuthor.login],
            name: ContributorProfileInfo.data.name ?? githubAuthor.login,
            title: 'Участник',
            avatar: githubAuthor.avatar_url,
            summary: {
              commits: Contributor.total,
              add: 0,
              remove: 0
            },
            lastMonthActive: {
              commits: 0,
              add: 0,
              remove: 0
            },
            links: [{ icon: 'github', link: githubAuthor.html_url }]
          }
          CalculateStats(Contributor, Author)
          Authors.push(Author)
        }
      }

      for (const RawContributor of RawContributors) {
        let isGitContributed = false
        for (const GitContributed of Authors){
          if (RawContributor.mapByNameAliases){
            for (const login of RawContributor?.mapByNameAliases){
              if (GitContributed.mapByNameAliases?.includes(login)){
                isGitContributed = true
                break
              }
            }
          }
          if (isGitContributed) {
            break
          }
        }

        if (!isGitContributed) {
          const Author = {
            ...RawContributor,
            summary: {
              commits: 0,
              add: 0,
              remove: 0
            },
            lastMonthActive: {
              commits: 0,
              add: 0,
              remove: 0
            },
          }
          Authors.push(Author)
        }
      }

      await fs.promises.writeFile(output, JSON.stringify(Authors))

      spiner.succeed(`${toolname} Список успешно сгенерирован!\n`)
    } else {
      spiner.fail(`${toolname} Не удалось получить данные с гита! (${GithubContributors.data})\n`)
      process.exitCode = 1
    }
  } catch (error) {
    spiner.fail(`${toolname} ${error instanceof Error ? error.message : String(error)}`)
    process.exitCode = 1
  }
} else if (args.dev) {
  spiner.warn(`${toolname} Активен режим разработки. Создаём пустышку...\n`)
  await fs.promises.writeFile(output, JSON.stringify(RawContributors))
  spiner.warn(`${toolname} Создана пустышка с содержимым team.ts\n`)
}
