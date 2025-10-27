export const headTransformer = {
  root: {
    frontmatterHead: (pageData, normalize) => {
      pageData.frontmatter.head.push(
        ['meta', { name: 'og:title', content: pageData.title + ' — ALT KDE Wiki' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:locale', content: 'ru-RU' }],
        [
          'meta',
          { name: 'og:url', content: `${'https://alt-kde.wiki/' + normalize(pageData.relativePath)}.html` }
        ],
        ['meta', { name: 'og:site_name', content: 'ALT KDE Wiki' }],
        ['meta', { name: 'og:image', content: 'https://alt-kde.wiki/og-alt-wiki.jpg' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: 'https://alt-kde.wiki/og-alt-wiki.jpg' }]
      )
    },
    notHomeFrontmatter: (pageData, normalize) => {
      if (pageData.frontmatter.layout !== 'home') {
        pageData.frontmatter.head.push([
          'link',
          { rel: 'canonical', href: `${'https://alt-kde.wiki/' + normalize(pageData.relativePath)}.html` }
        ])
        pageData.description = `Cтатья написанная простым языком: «${pageData.title}» для ALT Regular KDE. Последнее обновление ALT KDE Wiki: ${new Date(pageData.lastUpdated).toLocaleString('ru-RU')}`
      }
    }
  }
}
