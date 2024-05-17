<script setup lang="ts">
import './assets/css/reset.tailwind.css'
import './assets/css/app.css'

const { locale, t } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => {
      return t('locale.dir') as 'ltr' | 'rtl' | 'auto'
    }),
  },
  titleTemplate(title) {
    return title ? `${title} - ${t('site.name')}` : `${t('site.name')}`
  },
})
</script>

<template>
  <GridCols />
  <!-- <VitePwaManifest /> -->
  <!-- <CookieBanner /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
