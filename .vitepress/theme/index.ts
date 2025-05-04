/*------------------------------------
|   Vitepress/Vue - Default imports   |
-------------------------------------*/

import { h } from 'vue'
import type { Theme } from 'vitepress'
import { defineClientComponent } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

/*------------------------------------
|  ALT KDE/GNOME Team - Own componets |
-------------------------------------*/

import AKWTeamPage from './components/AKWTeamPage.vue'
import AKWHomeTeam from './components/AKWHomeTeam.vue'
import AKWHomeSponsors from './components/AKWHomeSponsors.vue'
import AKWGallery from './components/AKWGallery.vue'
import AKWGalleryAlt from './components/AGWGallery.vue'
import AGWLinkBlock from './components/AGWLinkBlock.vue'

/*------------------------------------
|     silencesys - Vue SilentBox      |
-------------------------------------*/

import VueSilentbox from 'vue-silentbox'
import { VueSilentBoxOptions } from '../config/plugins/index'

/*------------------------------------
|  Nolebase - Enhanced Readabilities  |
-------------------------------------*/

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesOptions } from '../config/plugins/index'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css' //

/*------------------------------------
|       Vitepress Tabs Plugin         |
-------------------------------------*/

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

/*------------------------------------
|      Nolebase - Git Change Log      |
-------------------------------------*/

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { NolebaseGitChangelogOptions } from '../config/plugins/index'
import { data as team } from './loaders/gitlogDataLoader.data'

/*------------------------------------
|       hywax - Yandex Metrics        |
-------------------------------------*/

import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'
import { YandexMetrikaOptions } from '../config/plugins/index'

/*------------------------------------
|            Used styles              |
-------------------------------------*/
import 'uno.css' // Need to check work without this
import './styles/style.css'
import './styles/custom.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'

/*------------------------------------
|          Theme Export               |
-------------------------------------*/
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add Nolebase Enhanced Readabilities menu
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      // Extend home page with Team and Sponsor block
      'home-features-after': () => [h(AKWHomeTeam), h(AKWHomeSponsors)],
      // Extend aside - add apps bar
      'aside-outline-after': () => h(defineClientComponent(() => import('./components/AKWDocsAsideMeta.vue')))
    })
  },
  // Apply components in theme
  enhanceApp(ctx) {
    // Vitepress Tabs
    enhanceAppWithTabs(ctx.app)

    // Own components
    ctx.app.component('Contribution', AKWTeamPage)
    ctx.app.component('Gallery', AKWGallery)
    ctx.app.component('GalleryALT', AKWGalleryAlt)
    ctx.app.component('AGWLinkBlock', AGWLinkBlock)

    // Vue SilentBox - Used in Galleries
    ctx.app.use(VueSilentbox, VueSilentBoxOptions)

    // Nolebase Components
    ctx.app.use(NolebaseEnhancedReadabilitiesPlugin, NolebaseEnhancedReadabilitiesOptions as Options)
    ctx.app.use(NolebaseGitChangelogPlugin, {
      locales: NolebaseGitChangelogOptions.locales,
      mapAuthors: team
    })

    // Yandex Metrix
    yandexMetrika(ctx, YandexMetrikaOptions.metrica)
  }
} satisfies Theme
