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

    outlineTitle: 'Innehåll',

    editLink: {
      pattern:
        'https://github.com/felix-bohlin/regent-intranet/tree/main/docs/:path',
      text: 'Föreslå en förändring på denna sida'
    },

    nav: nav(),

    localeLinks: {
      text: 'Svenska',
      items: [{ text: 'English', link: '/en/' }]
    },

    sidebar: {
      '/customer/': sidebarCustomer()
      // '/guide/': sidebarGuide(),
    },

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
      link: '/bolagsdokument/'
    },
    {
      text: 'Kund',
      link: '/customer/'
    },
    {
      text: 'Verksamhet',
      link: '/verksamhet/'
    },
    {
      text: 'Ekonomi',
      link: '/ekonomi/'
    },
    {
      text: 'Logga in',
      link: '/logga-in'
    }
  ]
}

function sidebarCustomer() {
  return [
    {
      text: 'Marknad',
      items: [
        { text: 'Intro', link: '/customer/market/' },
        { text: 'Segmentering', link: '/customer/market/segmentation' }
      ]
    },
    {
      text: 'Försäljning',
      items: [
        { text: 'Intro', link: '/customer/sales/' },
        { text: 'Erbjudande', link: '/customer/sales/offer' },
        { text: 'Säljprocessen', link: '/customer/sales/sales-process' },
        {
          text: 'Klagomål från kunder',
          link: '/customer/sales/complaints-from-customers'
        },
        {
          text: 'Bonus merförsäljning',
          link: '/customer/sales/bonus-additional-sales'
        },
        { text: 'Bästa kunden', link: '/customer/sales/best-customer' },
        {
          text: 'Befintliga kunder',
          link: '/customer/sales/existing-customers'
        },
        {
          text: 'Konstultintervjuträning',
          link: '/customer/sales/consultant-interview-training'
        },
        {
          text: 'Kundnöjdhet',
          link: '/customer/sales/customer-satisfaction'
        }
      ]
    }
  ]
}
