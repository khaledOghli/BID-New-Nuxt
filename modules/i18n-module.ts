import { defineNuxtModule } from 'nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'i18n-module',
    configKey: 'i18n',
  },
  setup(_, nuxt) {
    // const { resolve } = createResolver(import.meta.url);
    console.log(nuxt.options.i18n);
    // nuxt.options.i18n = {};
  },
});
