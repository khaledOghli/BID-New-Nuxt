<script setup lang="ts">
  // import './assets/css/reset.tailwind.css';
  import './assets/css/app.css';
  import Toast from 'primevue/toast';
  const { locale, t } = useI18n();

  useHead({
    htmlAttrs: {
      lang: locale,
    },
    titleTemplate(title) {
      return title ? `${title} - ${t('site.name')}` : `${t('site.name')}`;
    },
  });
</script>

<template>
  <Common-GridCols />
  <!-- <VitePwaManifest /> -->
  <!-- <CookieBanner /> -->
  <Toast />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
