import { defineConfig } from 'vitepress';

//命令集：pnpm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus

import timeline from 'vitepress-markdown-timeline';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Build In Dubai',
  description: '我的vitpress文档教程',

  // #region fav
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  appearance: 'dark',

  //多语言
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

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线
    config: (md) => {
      md.use(timeline);
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true,
    },
  },

  //主题配置
  themeConfig: {
    //左上角logo
    //logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          {
            // 分组标题1
            text: 'introduce',
            items: [{ text: 'Preface', link: '/preface' }],
          },
          {
            // 分组标题2
            text: 'Settings',
            items: [
              { text: 'Get started', link: '/getting-started' },
              { text: 'Configuration', link: '/configuration' },
              { text: 'Page', link: '/page' },
            ],
          },
          {
            // 分组标题3
            text: 'Advanced gameplay',
            items: [
              { text: 'Markdown', link: '/markdown' },
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
      { text: 'VitePress', link: 'https://vitepress.dev/zh/', noIcon: true },

      {
        text: '1.0.0-1.1.3',
        items: [
          { text: 'Changelog (This site)', link: '/changelog.md' },
          {
            text: 'Changelog (Official)',
            link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
          },
        ],
      },
    ],

    // Sidebar
    sidebar: [
      {
        // Group title 1
        text: 'Introduction',
        collapsed: false,
        items: [{ text: 'Preface', link: '/preface' }],
      },
      {
        // Group title 2
        text: 'Basic Configuration',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Page', link: '/page' },
        ],
      },
      {
        // Group title 3
        text: 'Advanced Usage',
        collapsed: false,
        items: [
          { text: 'Markdown', link: '/markdown' },
          { text: 'Team', link: '/team' },
          { text: 'Static Deployment', link: '/assets' },
          { text: 'Style Beautification', link: '/style' },
          { text: 'Components', link: '/components' },
          { text: 'Layout Slots', link: '/layout' },
          { text: 'Plugins', link: '/plugin' },
          { text: 'Update and Uninstall', link: '/update' },
          { text: 'Build Navigation', link: '/nav/' },
        ],
      },
      {
        // Group title 3
        text: 'Other Sites',
        collapsed: false,
        items: [
          { text: 'VuePress', link: 'https://vuepress.yiov.top/' },
          { text: 'Exhortation Record Tutorial', link: 'https://yiov.top/' },
          { text: 'Personal Homepage', link: 'https://yingyayi.com/' },
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
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>',
        },
        link: 'https://weixin.qq.com/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat',
      },
    ],

    // Mobile dark and light mode text modification
    darkModeSwitchLabel: 'Dark and Light Mode',

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2023 Record Number：<a href="https://beian.miit.gov.cn/">Beijing **** Number</a>',
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
    //editLink: {
    //  pattern: 'https://github.com/accountname/repositoryname/edit/main/docs/:path',
    //  text: 'Edit this page on GitHub'
    //},

    // Custom previous and next page name
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },
  },
});
