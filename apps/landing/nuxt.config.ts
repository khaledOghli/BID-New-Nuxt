// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: {
          path: 'en-US.json',
          cache: true,
        },
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-AR',
        name: 'Arabic',
        file: {
          path: 'ar-AR.json',
          cache: true,
        },
        dir: 'rtl',
      },
    ],

    strategy: 'prefix',
    defaultLocale: 'en',
    customRoutes: 'config',
    lazy: true,
    langDir: './../../locales',
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
});
