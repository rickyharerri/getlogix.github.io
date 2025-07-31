import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/',
  outDir: 'build',
  cleanUrls: "with-subfolders",
  title: 'GetLogix Inc.',
  titleTemplate: ':title | GetLogix Inc.',
  description: 'Trusted Development Partner for Web, Mobile App, POS, and AI Solutions',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicons/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/img/favicons/safari-pinned-tab.svg',
        color: '#3a0839',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/img/favicons/favicon.ico' }],
    ['meta', { name: 'og:image', content: '/img/og-image.png' }],
    ['meta', { name: 'twitter:image', content: '/img/og-image.png' }],
  ],
  themeConfig: {
    logo: '/img/fullLogo.svg',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Docs', link: '/getting-started' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Docs',
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Setup', link: '/setup' },
            { text: 'API Reference', link: '/api' },
            { text: 'CLI Usage', link: '/cli' },
            { text: 'Configuration', link: '/configuration' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/getlogix' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/getlogix' },
      { 
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>'
        }, 
        link: 'https://x.com/getlogix47' 
      }
    ],

    // editLink: {
    //   pattern: 'https://github.com/google/zx/blob/main/docs/:path',
    // },

    // footer: {
    //   message:
    //     `© ${new Date().getFullYear()} GetLogix Inc. Trusted development partner.`,
    // },
  },
})
