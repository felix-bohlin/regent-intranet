import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'sv-SE',
  title: '| intranät',
  titleTemplate: 'Regent',
  description:
    'Välkommen till Regents intranät. Här finner du information om Regents interna processer och mer om hur Regent är som företag. Intranätet fungerar även som vår personalhandbok.',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap',
        rel: 'stylesheet'
      }
    ]
  ],

  themeConfig: {
    logo: '/regent-logo.png',

    editLink: {
      pattern:
        'https://github.com/felix-bohlin/regent-intranet/tree/main/docs/:path',
      text: 'Föreslå en förändring på denna sida'
    },

    nav: nav(),

    localeLinks: {
      text: 'Svenska',
      items: [{ text: 'English', link: '/' }]
    },

    // sidebar: {
    //   '/guide/': sidebarGuide(),
    //   '/config/': sidebarConfig()
    // },

    footer: {
      message: 'Följ oss på sociala medier!',
      copyright: '© 2022 | All rights reserved.'
    },

    algolia: {
      appId: 'IQUSNK3XKO',
      apiKey: '1a6249eae25d45e829b8a8c84de26a75',
      indexName: 'intranet_regent'
    }
  }
})

function nav() {
  return [
    {
      text: 'Bolagsdokument',
      link: '/bolagsdokument',
      activeMatch: `^/(bolagsdokument|organisation|ledning|mål|uppgifter|grafisk|profil|kalender)/`
    },
    {
      text: 'Kund',
      link: '/kund',
      activeMatch: `^/(kund|marknad|sälj|mål|segmentering|erbjudande|klagomål|merförsäljning|bonus|bästa|befintliga|intervju|träning|nöjdhet)/`
    },
    {
      text: 'Verksamhet',
      link: '/verksamhet',
      activeMatch: '/verksamhet/'
    },
    {
      text: 'Ekonomi',
      link: '/ekonomi',
      activeMatch: '/ekonomi/'
    },
    {
      text: 'Logga in',
      link: '/logga-in'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        {
          text: 'Frontmatter Configs',
          link: '/config/frontmatter-configs'
        }
      ]
    }
  ]
}
