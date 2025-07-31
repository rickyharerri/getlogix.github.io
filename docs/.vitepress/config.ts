import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/',
  outDir: 'build',
  cleanUrls: "with-subfolders",
  title: 'GetLogix Inc. Canada',
  titleTemplate: ':title | GetLogix Inc. Canada',
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
    ['link', { rel: 'author', href: '/humans.txt' }],
    ['meta', { name: 'og:image', content: '/img/og-image.png' }],
    ['meta', { name: 'twitter:image', content: '/img/og-image.png' }],
    ['meta', { property: 'og:title', content: 'GetLogix Inc. Canada - Transformative Software Solutions' }],
    ['meta', { property: 'og:description', content: 'Trusted Development Partner for Web, Mobile App, POS, and AI Solutions' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://www.getlogix.com/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@getlogix47' }],
    ['meta', { name: 'twitter:creator', content: '@getlogix47' }],
    ['link', { rel: 'canonical', href: 'https://www.getlogix.com/' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-QHBJE740ST' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QHBJE740ST');`
    ],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "GetLogix Inc. Canada",
        "alternateName": "GetLogix",
        "description": "Trusted Development Partner for Web, Mobile App, POS, and AI Solutions",
        "url": "https://www.getlogix.com",
        "logo": "https://www.getlogix.com/img/fullLogo.svg",
        "foundingDate": "2020",
        "founder": [
          {
            "@type": "Person",
            "name": "Ricky Harerri"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CA",
          "addressRegion": "Canada"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@getlogix.com",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://github.com/getlogix",
          "https://linkedin.com/company/getlogix",
          "https://x.com/getlogix47"
        ],
        "knowsAbout": [
          "Web Development",
          "Mobile App Development",
          "AI Solutions",
          "Cloud Computing",
          "DevOps",
          "UI/UX Design"
        ],
        "areaServed": "Worldwide",
        "serviceType": [
          "Web Development",
          "Mobile Application Development",
          "Artificial Intelligence Solutions",
          "Cloud Solutions",
          "IT Consulting"
        ]
      })
    ],
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
    //     `© ${new Date().getFullYear()} GetLogix Inc. Canada Trusted development partner.`,
    // },
  },
  
  // Meta tags for better SEO
  transformHead: ({ pageData }) => {
    return [
      ['meta', { name: 'keywords', content: 'web development, mobile apps, AI solutions, cloud computing, GetLogix, Canada, software development' }],
      ['meta', { name: 'author', content: 'GetLogix Inc. Canada' }],
      ['link', { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }]
    ]
  }
})
