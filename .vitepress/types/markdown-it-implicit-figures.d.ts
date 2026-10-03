declare module 'markdown-it-implicit-figures' {
  import type { PluginWithOptions } from 'markdown-it'
  const plugin: PluginWithOptions<{ figcaption?: boolean | 'title'; copyAttrs?: string }>
  export default plugin
}
