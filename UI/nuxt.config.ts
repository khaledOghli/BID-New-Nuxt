// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: './components',
      prefix: 'V',
    },
  ],
  modules: ['@nuxtjs/i18n'],
});
