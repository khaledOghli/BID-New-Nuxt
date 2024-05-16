import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

const baseUrl = process.env.BASE_URL || '/'
// eslint-disable-next-line no-magic-numbers
const oneYear = 1000 * 60 * 60 * 24 * 365

export default defineNuxtConfig({
  extends: ['./UI', './apps/landing', './apps/dashboard', './apps/docs', './apps/auth'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    '@unocss/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    'nuxt-primevue',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/fontaine',
    '@dargmuesli/nuxt-cookie-control',
    // '@nuxtjs/storybook',
    'nuxt-lodash',
    'nuxt-viewport',
    'nuxt-icons',
    '@nuxtjs/web-vitals',
    'nuxt-time',
    '@nuxt/scripts',
    '@unlazy/nuxt',
    'nuxt-security',
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  runtimeConfig: {
    public: {
      baseUrl,
    },
  },

  plugins: ['~/plugins/i18n'],

  image: {
    provider: 'ipx',
    quality: 80,
    format: ['png', 'jpeg', 'webp'],
  },

  viewport: {
    breakpoints: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    cookie: {
      expires: 365, // 365 days
      name: 'viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true,
    },

    fallbackBreakpoint: 'lg',
  },

  webVitals: {
    provider: 'log',
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false,
  },

  imports: {
    dirs: ['./stores', './locales'],
  },

  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    preload: [
      'json',
      'js',
      'ts',
      'html',
      'css',
      'vue',
      'diff',
      'shell',
      'markdown',
      'yaml',
      'bash',
      'ini',
    ],
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    // 'primevue/resources/themes/aura-light-green/theme.css',
    'primevue/resources/primevue.min.css',
    // 'primeicons/primeicons.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: 'any',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/nuxt.svg',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
        {
          id: 'theme-link',
          rel: 'stylesheet',
          href: `${baseUrl}themes/aura-light-blue/theme.css`,
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: appDescription,
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: light)',
          content: 'white',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: dark)',
          content: '#222222',
        },
      ],
    },
  },

  primevue: {
    /* Options */
    usePrimeVue: true,
    options: {
      ripple: true,
      // unstyled: true,
    },
    // importPT: { from: path.resolve(__dirname, './theme/presets/BID-Theme/') }, // import and apply preset
    components: {
      include: ['Button'],
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'locales/en-US.json',
      },
      {
        code: 'ar',
        iso: 'ar-AR',
        name: 'Arabic',
        file: 'locales/ar-AR.json',
      },
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    customRoutes: 'config',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    // pages: {
    //   about: {
    //     en: '/about',
    //     fr: '/a-propos',
    //   },
    // },
  },

  pwa,

  devtools: {
    enabled: true,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  cookieControl: {
    cookieExpiryOffsetMs: oneYear, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    cookies: {
      necessary: [
        {
          // name: {
          //   en: en.cookies.necessary.title,
          //   ar: ar.cookies.necessary.title,
          // },
          // description: {
          //   en: en.cookies.necessary.description,
          //   ar: ar.cookies.necessary.description,
          // },
          targetCookieIds: ['ncc_'],
        },
      ],
      optional: [],
    },
    locales: ['en', 'fr', 'ar'],
  },

  vite: {
    vue: {
      script: {
        globalTypeFiles: [fileURLToPath(new URL('./index.d.ts', import.meta.url))],
      },
    },
  },
})
