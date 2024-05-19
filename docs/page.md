# Page

> Updated: 2024-3-26

## Site Configuration

### Web Page Title

Use `titleTemplate` to customize the entire webpage title, generally not used

::: tip Difference with Site Title
The [Site Title](#site-title) `title` is fixed, it will be displayed on every page

The webpage title `titleTemplate` is not fixed, it changes with the `<h1>` title of each page, for example, if the title is `# Page`, then what is displayed is `Page | VitePress`, unless it is customized to be fixed
:::

```ts{5}
export default defineConfig({
  lang: 'zh-CN',
  title: "VitePress",
  description: "My vitpress document tutorial",
  titleTemplate: 'A new title will overwrite title', // [!code focus]
  // titleTemplate: ':title - Quick Start', //Fully customized title, don't change :title, change the following
  // titleTemplate: false, //Close title
})
```

### Fav Icon

The path defaults to the public directory, just create a `public` directory under the `docs` directory

```ts{3-6}
export default defineConfig({

  //fav icon
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

})
```

::: warning Note
If you use the path `/logo.png` and there is no response, you can try to use the relative path `../public/logo.png`

Also, if your [Base is set to a non-root directory](./assets.md#base), the fav icon path also needs to be changed
:::

::: details Official configuration to add Google Fonts

```ts
export default {
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      // would render:
      //
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],

    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`,
      // would render:
      //
      // <script id="register-sw">
      // ;(() => {
      //   if ('serviceWorker' in navigator) {
      //     navigator.serviceWorker.register('/sw.js')
      //   }
      // })()
      // </script>
    ],
  ],
};
```

:::
### Dark Theme

The default is light mode, which can be turned on or replaced by yourself

```ts{5}
export default defineConfig({

  //appearance:true, // default is light and switch is enabled
  // enable dark mode
  appearance:'dark', // [!code focus]
  // appearance:false, // turn off
})
```

### Multilingual

To enable multilingual support, you first need to use the following file directory structure

```
.
├─ docs
│  ├─ en
│  │  ├─ index.md   <-- English homepage
│  │  ├─ ...
│  │  ...
│  └─ fr
│  │  ├─ index.md   <-- French homepage
│  │  ├─ ...
│  │  ...
│  └─ index.md      <-- Chinese homepage (default)
└─ package.json
```

::: tip Explanation
In practice, you just need to create a new language directory, then translate all the documents in the root directory and put them in

This time only the homepage is demonstrated, configure the rest by yourself!
:::

The index file of the directory is read by default, no need to manually fill in `index`

```ts{3-19}
export default defineConfig({

  //multilingual
  locales: {
    root: {
      label: 'Simplified Chinese',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
    }
  },

})
```

### Default Theme

This article only demonstrates the default theme settings

::: tip Explanation
Theme configuration allows you to customize the theme, define the theme configuration through the themeConfig option in the configuration file
:::

```ts
export default defineConfig({

  // Theme configuration
  themeConfig: {
    logo: '',
    nav: [...],
    sidebar: { ... },
  },
})
```
### Logo

The website's Logo icon is not yet available, the directory table is below

```md{6}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  └─ public             <--Static resource directory
│  │  └─ logo.png        <--logo
│  └─ index.md
└─ package.json

```

According to the directory, the location of the logo file is in the `doc - public` folder

::: tip Explanation
Create a new public folder in sequence and put the logo in it
:::

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //Top left corner logo
    logo: '/logo.png',
  },

})
```

If you don't want to see the text, you can choose to hide it

```ts{6}
export default defineConfig({

  themeConfig: {
    //Top left corner logo
    logo: '/logo.png',
    siteTitle: false, //Hide title // [!code focus]
  },

})
```

### Site Title

If set, it will override the original [Web Page Title](#web-page-title) !

```ts{4-5}
export default defineConfig({

  themeConfig: {
    // Set site title
    siteTitle: 'Hello World', // [!code focus]
    // siteTitle: false, // Close title
  },

})
```

---
### Sitemap

VitePress provides out-of-the-box configuration, supported by the [sitemap](https://github.com/ekalinin/sitemap.js) module, to generate a `sitemap.xml` file for the site. To enable it, add the following to `.vitepress/config.mts`

```ts{4-7}
import { defineConfig } from 'vitepress'

export default defineConfig({
  // Sitemap
  sitemap: {
    hostname: 'https://yourwebsite.com',
  }
})
```

## Navbar

### Navigation Menu

A basic navigation, homepage, article path, and external site links

::: tip Explanation
text is the text displayed in the navigation

link is the link or the path to the actual file, without the `.md` prefix, and always starts with `/`
:::

```ts{4-9}
export default defineConfig({

  themeConfig: {
    // Navbar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],
  },

})
```

If you want a dropdown menu navigation, you need to add an `items`

```ts{4-16}
export default defineConfig({

  themeConfig: {
    // Navbar
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: 'Preface', link: '/preface' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Configuration', link: '/configuration' }
        ]
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],
  },

})
```

To give the dropdown menu a group title, you need to nest `items` again

```ts{4-38}
export default defineConfig({

  themeConfig: {
    // Navbar
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          {
            // Group title 1
            text: 'Introduction',
            items: [
              { text: 'Preface', link: '/preface' },
            ],
          },
          {
            // Group title 2
            text: 'Basic Settings',
            items: [
              { text: 'Getting Started', link: '/getting-started' },
              { text: 'Configuration', link: '/configuration' },
              { text: 'Page', link: '/page' },
            ],
          },
          {
            // Group title 3
            text: 'Advanced Usage',
            items: [
              { text: 'Markdown', link: '/Markdown' },
              { text: 'Static Deployment', link: '/assets' },
            ],
          },
        ],
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],
  },

})
```

If you don't like the external link arrow `↗` icon, you can choose to turn it off

```ts{8}
export default defineConfig({

  themeConfig: {
    // Navbar
    nav: [
      { text: 'Home', link: '/' },

      { text: 'VitePress', link: 'https://vitepress.dev/', noIcon: true },
    ],
  },

})
```

### Social Links

You can add your own, SVG is supported

```ts{4-9}
export default defineConfig({

  themeConfig: {
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/' },
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },
    ],
  },

})
```

Other social icons provided by VitePress

```ts{3-12}
/* node_modules\vitepress\types\default-theme.d.ts */
export type SocialLinkIcon =
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'mastodon'
    | 'slack'
    | 'twitter'
    | 'x'
    | 'youtube'
    | { svg: string }
```

You can also customize SVG icons, such as: WeChat

Here I use Alibaba's [iconfont](https://www.iconfont.cn/), search for `WeChat` to find a suitable one and download the `copy svg code`

::: tip Explanation
Other icon websites: [xicons·need to bypass the firewall to open](https://www.xicons.org/#/zh-CN), ByteDance's [iconpark](https://iconpark.oceanengine.com/official)
:::

The one I'm using is this

```html
<svg
  t="1703483542872"
  class="icon"
  viewBox="0 0 1309 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="6274"
  width="200"
  height="200">
  <path
    d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z"
    p-id="6275"></path>
</svg>
```

Paste it into the `config.mts` configuration file

```ts{4-14}
export default defineConfig({

  themeConfig: {
    // Custom social links    
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://weixin.qq.com/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
      }
    ],
  },

})
```

::: warning About WeChat
If you really want to add WeChat, it is recommended to use the project by [@zhheo](https://github.com/zhheo/Wechat-Official-Account-Web)

Build one yourself, the interface is also very beautiful
:::

### Dark and Light Mode Text

The mobile end defaults to display `Appearance`, you can also customize the display text

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //Modify the text of the mobile end dark and light mode // [!code focus]
    darkModeSwitchLabel: 'Dark and Light Mode', // [!code focus]
  },

})
```

## Search Box

Both local [minisearch](https://github.com/lucaong/minisearch/) and [Algolia DocSearch](https://docsearch.algolia.com/) are good for global search

### Local Search

Thanks to [minisearch](https://github.com/lucaong/minisearch/), VitePress supports fuzzy full-text search using browser internal indexing

```ts{4-8}
export default defineConfig({

  themeConfig: {
    //Local search // [!code focus]
    search: { // [!code focus]
      provider: 'local' // [!code focus]
    }, // [!code focus]
  },

})
```

If you have built a multilingual site, you can configure the search more finely

```ts{4-27}
export default defineConfig({

  themeConfig: {
    //Local search
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search Documentation',
                buttonAriaLabel: 'Search Documentation'
              },
              modal: {
                noResultsText: 'Unable to find relevant results',
                resetButtonTitle: 'Clear query conditions',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Switch'
                },
              },
            },
          },
        },
      },
    },
  },

})
```

### Algolia

Either apply for [Algolia DocSearch](https://docsearch.algolia.com/) yourself, or build it yourself

- [Official application: See the tutorial I wrote when building VuePress](https://vuepress.yiov.top/guide/docsearch.html#%E5%AE%98%E6%96%B9%E7%94%B3%E8%AF%B7-%E9%80%89%E5%85%B6%E4%B8%80)

- [Build your own crawler: See the tutorial I wrote when building VuePress](https://vuepress.yiov.top/guide/docsearch.html#%E8%87%AA%E5%BB%BA%E7%88%AC%E8%99%AB-%E9%80%89%E5%85%B6%E4%B8%80)

Let's first look at the configuration in VitePress

```ts{4-12}
export default defineConfig({

  themeConfig: {
    //Algolia search
    search: {
      provider: 'algolia',
      options: {
        appId: '<Application ID>',
        apiKey: '<Search-Only API Key>',
        indexName: '<INDEX_NAME>',
      },
    },
  },

})
```

Multilingual configuration

```ts{4-55}
export default defineConfig({

  themeConfig: {
    //Algolia search
    search: {
      provider: 'algolia',
      options: {
        appId: '<Application ID>',
        apiKey: '<Search-Only API Key>',
        indexName: '<INDEX_NAME>',
        locales: {
          zh: {
            placeholder: 'Search documentation',
            translations: {
              button: {
                buttonText: 'Search documentation',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: 'Clear query conditions',
                  resetButtonAriaLabel: 'Clear query conditions',
                  cancelButtonText: 'Cancel',
                  cancelButtonAriaLabel: 'Cancel'
                },
                startScreen: {
                  recentSearchesTitle: 'Search history',
                  noRecentSearchesText: 'No search history',
                  saveRecentSearchButtonTitle: 'Save to search history',
                  removeRecentSearchButtonTitle: 'Remove from search history',
                  favoriteSearchesTitle: 'Favorites',
                  removeFavoriteSearchButtonTitle: 'Remove from favorites'
                },
                errorScreen: {
                  titleText: 'Unable to get results',
                  helpText: 'You may need to check your network connection'
                },
                footer: {
                  selectText: 'Select',
                  navigateText: 'Switch',
                  closeText: 'Close',
                  searchByText: 'Search provider'
                },
                noResultsScreen: {
                  noResultsText: 'Unable to find relevant results',
                  suggestedQueryText: 'You can try querying',
                  reportMissingResultsText: 'Do you think this query should have results?',
                  reportMissingResultsLinkText: 'Click to feedback'
                },
              },
            },
          },
        },
      },
    },
  },

})
```

Official crawler settings

```ts
new Crawler({
  appId: '...',
  apiKey: '...',
  rateLimit: 8,
  startUrls: ['https://vitepress.dev/'],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ['https://vitepress.dev/**'],
  schedule: 'at 05:10 on Saturday',
  actions: [
    {
      indexName: 'vitepress',
      pathsToMatch: ['https://vitepress.dev/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: '.content h1',
            content: '.content p, .content li',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.content h2',
            lvl3: '.content h3',
            lvl4: '.content h4',
            lvl5: '.content h5',
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    vitepress: {
      attributesForFaceting: ['type', 'lang'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
      attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
      searchableAttributes: [
        'unordered(hierarchy_radio_camel.lvl0)',
        'unordered(hierarchy_radio.lvl0)',
        'unordered(hierarchy_radio_camel.lvl1)',
        'unordered(hierarchy_radio.lvl1)',
        'unordered(hierarchy_radio_camel.lvl2)',
        'unordered(hierarchy_radio.lvl2)',
        'unordered(hierarchy_radio_camel.lvl3)',
        'unordered(hierarchy_radio.lvl3)',
        'unordered(hierarchy_radio_camel.lvl4)',
        'unordered(hierarchy_radio.lvl4)',
        'unordered(hierarchy_radio_camel.lvl5)',
        'unordered(hierarchy_radio.lvl5)',
        'unordered(hierarchy_radio_camel.lvl6)',
        'unordered(hierarchy_radio.lvl6)',
        'unordered(hierarchy_camel.lvl0)',
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy_camel.lvl1)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy_camel.lvl2)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy_camel.lvl3)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy_camel.lvl4)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy_camel.lvl5)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy_camel.lvl6)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: ['desc(weight.pageRank)', 'desc(weight.level)', 'asc(weight.position)'],
      ranking: ['words', 'filters', 'typo', 'attribute', 'proximity', 'exact', 'custom'],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
});
```Custom crawler configuration

```json
{
  "index_name": "Your index name",
  "start_urls": [
    {
      "url": "https://yourwebsite",
      "selectors_key": ""
    }
  ],
  "stop_urls": [],
  "selectors": {
    "default": {
      "lvl0": {
        "selector": "",
        "default_value": "My Document"
      },
      "lvl1": ".content h1",
      "lvl2": ".content h2",
      "lvl3": ".content h3",
      "lvl4": ".content h4",
      "lvl5": ".content h5",
      "lvl6": ".content h6",
      "text": ".content p, .content li",
      "lang": {
        "selector": "/html/@lang",
        "type": "xpath",
        "global": true
      }
    }
  },
  "custom_settings": {
    "attributesForFaceting": ["lang"]
  }
}
```

## Home

We use [Frontmatter](./frontmatter.md) to configure and modify in `index.md`

## Footer

```ts{4-8}
export default defineConfig({

  themeConfig: {
    //footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-2023present Evan You',
    },
  },

})
```

If you have a record, you will need to jump to the Ministry of Industry and Information Technology, just use HTML code

```ts{7}
export default defineConfig({

  themeConfig: {
    //footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Record number: <a href="https://beian.miit.gov.cn/" target="_blank">Beijing **** number</a>',
    },
  },

})
```

## Sidebar

The simplest form is to pass a single link, but this is very monotonous, we can use `items` to group

### Common configuration

`text` The text can be customized, `link` Fill in the article path, no need to bring `.md`

```ts{4-19}
export default defineConfig({

  themeConfig: {
    //sidebar
    sidebar: [
      {
        //Group title
        text: 'Guide',
        items: [
          { text: 'Preface', link: '/preface' },
          { text: 'Quick Start', link: '/getting-started' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Page', link: '/page' },
          { text: 'Markdown', link: '/markdown' },
          { text: 'Static Deployment', link: '/assets' },
        ],
      },
    ],
    },

})
```

Of course we can also do multiple groups

```ts{4-31}
export default defineConfig({

  themeConfig: {
    //sidebar
    sidebar: [
      {
        //Group title 1
        text: 'Introduction',
        items: [
          { text: 'Preface', link: '/preface' },
        ],
      },
      {
        //Group title 2
        text: 'Basic Configuration',
        items: [
          { text: 'Quick Start', link: '/getting-started' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Page', link: '/page' },
        ],
      },
      {
        //Group title 3
        text: 'Advanced Gameplay',
        items: [
          { text: 'Markdown', link: '/markdown' },
          { text: 'Static Deployment', link: '/assets' },
        ],
      },
    ],
  },

})
```

Multiple sidebars are also possible, other directories can refer to the official directory table style

```
.
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```

Then our configuration is

```ts{4-31}
export default defineConfig({

  themeConfig: {
    //sidebar
    sidebar: {
      // Directory 1
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ],
        },
      ],

      // Directory 2
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ],
        },
      ],
    },
  },

})
```

If you need to be collapsible, add the `collapsed` option, it will display a toggle button to hide/show

::: tip Description
If you don't want to turn it on, set it to `true`, or just don't configure it
:::

```ts{4-31}
export default defineConfig({

  themeConfig: {
    //sidebar
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: false,
        items: [...]
      },
    ],
  },

})
```

### Sidebar (Mobile)

Change the text display of the mobile menu, default `Menu`

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //Change sidebar text (mobile)
    sidebarMenuLabel:'Directory',
    },

})
```

### Return to top

Change the text display of the mobile menu, default `Return to top`

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //Modify return to top text
    returnToTopLabel:'Return to top',
    },

})
```

### Outline

The outline on the right, the default display is the second-level title, through the setting `outline` to achieve multi-level title

```ts{4-8}
export default defineConfig({

  themeConfig: {
    outline: {
      level: [2,4], // Display 2-4 level titles
      // level: 'deep', // Display 2-6 level titles
      label: 'Current page outline' // Text display
    },
    // outline:false, // Close title display
    // outlineTitle:'Current page outline', //Old way to set title
  },

})
```

## Edit this page

::: warning Note
Will be covered by [Frontmatter configuration](./frontmatter.md#Edit this page)
:::

```ts{4-8}
export default defineConfig({

  themeConfig: {
    //Edit this page
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // Change to your own repository
      text: 'Edit this page on GitHub'
    },
  },

})
```

## Last update

If you want to add the update time of the page, just configure it, I haven’t figured it out anyway

```ts{3,6-13}
export default defineConfig({

  lastUpdated: true, //This configuration will not take effect immediately, you need to git commit to crawl the timestamp, local error can be commented first

  themeConfig: {
    //Last update time
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
  },

})
```

## Previous/Next page

Read from the sidebar configuration by default, if you want to turn off or customize it, please refer to [Frontmatter](./frontmatter.md#Previous-Next page)

::: tip Description
Only modify the displayed text

`Pagina prior` can be changed to Previous page

`Proxima pagina` can be changed to Next page
:::

```ts{4-8}
export default defineConfig({

  themeConfig: {
    //Customize previous and next page names
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
  },

})
```

## Ads

VitePress has built-in native support for [Carbon Ads](https://www.carbonads.net/)

By defining Carbon Ads credentials in the configuration, VitePress will display ads on the page

```ts{4-7}
export default defineConfig({

  themeConfig: {
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement',
    },
  },

})
```
