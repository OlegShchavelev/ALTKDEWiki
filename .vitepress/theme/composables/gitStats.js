import { Octokit } from "@octokit/core";
import { contributions, leader_name } from '../../data/team';
import { gitMapContributors } from '../../data/gitlog'


export async function getContributors(key, owner, repo, autosearch){
    if (!key) return false
    if (!owner) return false
    if (!repo) return false

    const octokit = new Octokit({
        auth: key
    })

    const contributorsRawBase = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
        owner: owner,
        repo: repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    
    const userGetMore = async (user) => {
      return await octokit.request('GET /users/{user}', {
        user: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    }

    const contributors = []

    for (const contributor of contributorsRawBase.data){
        const { author, total, weeks } = contributor
        const { name } = autosearch == true ? (await userGetMore(author.login)).data : undefined 
        let additions = 0
        for (const week of weeks) {
            additions += week.a
        }

        //console.log(name)

        contributors.push({
            avatar: author.avatar_url,
            links: [
              { icon: 'github', link: author.html_url },
            ],
            title: "Участник",
            login: author.login,
            name: name,
            commits: total,
            additions: additions
        })
    }
    return contributors 
}

export function filterContributors(contributors, filter_type){
  contributors = (filter_type.includes("commits")) ? contributors.sort((a, b) => (-a.commits) - (-b.commits)) : contributors
  contributors = (filter_type.includes("additions")) ? contributors.sort((a, b) => (-a.additions) - (-b.additions)) : contributors
  if (filter_type.includes("role")){
    for (const contributor of contributors){
      if (contributor.title.includes('Разработчик')){
        contributors = contributors.sort((x,y) => { 
          return x == contributor ? -1 : y == contributor ? 1 : 0; 
        });
      }
    }
  }
  for (const contributor of contributors){
    if (contributor.name.includes(leader_name)){
      contributors = contributors.sort((x,y) => { 
        return x == contributor ? -1 : y == contributor ? 1 : 0; 
      });
      break
    }
  }
  return contributors
} 

export async function getContributorsTopInfo(contributors){
    for (let contributor of contributors){
        
        // Ищем имя для сайта по нику гита
        for (const gitContributor of gitMapContributors){
          if (gitContributor.nameAliases.includes(contributor.login)) {
            contributor.name = gitContributor.name
          }
        }
        // По имени достаем остальные параметры для сайта по нику
        for(const siteContributor of contributions){
          if(siteContributor.name == contributor.name){
            for (const key of Object.keys(siteContributor)){
              contributor[key] = siteContributor[key]
            }
          }
          if(contributor.name == undefined){
            contributor.name = contributor.login
          }
        }

        //console.log(contributor)
    }
    return contributors
}