// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import { lexiconEnhancedReadabilities } from './lexicon/enhanced-readabilities'

import './styles/style.css'
import './styles/custom.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.provide(InjectionKey, {
      locales: lexiconEnhancedReadabilities
    } as Options)
    enhanceAppWithTabs(app)
  }
} satisfies Theme
