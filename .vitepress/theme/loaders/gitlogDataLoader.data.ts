import fs from 'node:fs'
import { contributions } from '../../data/team'

export default {
  load() {
    try {
      return JSON.parse(fs.readFileSync('./.vitepress/data/fullteam.json', 'utf-8'))
    } catch {
      return contributions
    }
  }
}
