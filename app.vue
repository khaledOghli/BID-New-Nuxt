<script setup lang="ts">
  // import './assets/css/reset.tailwind.css';
  import './assets/css/app.css';
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
  <Common-PageLoadingIndicator />
  <Common-GridCols />
  <Common-ToastGroup />
  <!-- <VitePwaManifest /> -->
  <!-- <CookieBanner /> -->

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
