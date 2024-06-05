import { defineConfig } from 'vitepress'

// 命令集：pnpm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus

import timeline from 'vitepress-markdown-timeline'

export default defineConfig({
  lang: 'en',
  title: 'Build In Dubai',
  description: 'A Frontend Developer Documentation',

  // #region fav
  head: [['link', { rel: 'icon', href: '/BID-logo.svg' }]],
  // #endregion fav

  base: '/', // 网站部署到github的vitepress这个仓库里

  // cleanUrls:true, //开启纯净链接无html

  // 启用深色模式
  appearance: 'dark',

  // 多语言
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    ar: {
      label: 'Arabic',
      lang: 'ar',
      link: '/ar/',
    },
  },

  // markdown配置
  markdown: {
    // 行号显示
    lineNumbers: true,

    // 时间线
    config: (md) => {
      md.use(timeline)
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true,
    },
  },

  // 主题配置
  themeConfig: {
    // 左上角logo
    // logo: '/logo.png',
    // logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    // siteTitle: false, //标题隐藏

    // 设置站点标题 会覆盖title
    // siteTitle: 'Hello World',

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          {
            // 分组标题1
            text: 'introduce',
            items: [{ text: 'Getting Started', link: '/getting-started' }],
          },
          {
            // 分组标题2
            text: 'Settings',
            items: [
              { text: 'Configuration', link: '/configuration' },
              { text: 'Page', link: '/page' },
            ],
          },
          {
            // 分组标题3
            text: 'Advanced gameplay',
            items: [
              // { text: 'Markdown', link: '/markdown' },
              { text: 'Team', link: '/team' },
              { text: 'Assets', link: '/assets' },
              { text: 'Style', link: '/style' },
              { text: 'Components', link: '/components' },
              { text: 'Layout', link: '/layout' },
              { text: 'Plugins', link: '/plugin' },
              { text: 'Update', link: '/update' },
              { text: 'Nav', link: '/nav/' },
            ],
          },
        ],
      },
      {
        text: '1.0.0-1.1.3',
        items: [
          { text: 'Changelog (This site)', link: '/changelog.md' },
        ],
      },
    ],

    // Sidebar
    sidebar: [
      {
        // Group title 1
        text: 'Introduction',
        collapsed: false,
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
      {
        // Group title 2
        text: 'Basic Configuration',
        collapsed: false,
        items: [
          { text: 'Configuration', link: '/configuration' },
          { text: 'Page', link: '/page' },
        ],
      },
      {
        // Group title 3
        text: 'Advanced Usage',
        collapsed: false,
        items: [
          // { text: 'Markdown', link: '/markdown' },
          { text: 'Localization', link: '/localization' },
          { text: 'Static Deployment', link: '/assets' },
          { text: 'Style Beautification', link: '/style' },
          { text: 'Components', link: '/components' },
          { text: 'Layout Slots', link: '/layout' },
          { text: 'Team', link: '/team' },
          { text: 'Plugins', link: '/plugin' },
          { text: 'Update and Uninstall', link: '/update' },
        ],
      },
      {
        // Group title 3
        text: 'Other Sites',
        collapsed: false,
        items: [
          { text: 'Nuxt', link: 'https://nuxt.com/' },
        ],
      },
    ],

    // Local search
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: 'Search Documentation',
                buttonAriaLabel: 'Search Documentation',
              },
              modal: {
                noResultsText: 'Unable to find relevant results',
                resetButtonTitle: 'Clear query conditions',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Switch',
                },
              },
            },
          },
        },
      },
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/vitepress-doc' },
      { icon: 'twitter', link: 'https://twitter.com/' },
    ],

    // Mobile dark and light mode text modification
    darkModeSwitchLabel: 'Dark and Light Mode',

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2024 Record Number：<a href="https://buildindubai.gov.ae/">Khaled Oghli</a>',
    },

    // Sidebar text change (mobile)
    sidebarMenuLabel: 'Menu',

    // Return to top text modification (mobile)
    returnToTopLabel: 'Return to Top',

    // Outline shows 2-3 level titles
    outline: {
      level: [2, 3],
      label: 'Current Page Outline',
    },

    // Edit this page
    // editLink: {
    //  pattern: 'https://github.com/accountname/repositoryname/edit/main/docs/:path',
    //  text: 'Edit this page on GitHub'
    // },

    // Custom previous and next page name
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },
  },
})
