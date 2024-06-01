<script setup lang="ts">
  const { locale, locales } = useI18n();
  useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
  });
  // useHeadSafe({
  //   htmlAttrs: {
  //     dir: locale.value == 'ar' ? 'rtl' : 'ltr',
  //   },
  // });
</script>

<template>
  <div class="card-bg main_container min-h-screen">
    <AppHeader />
    <div class="main_content container mx-auto px-8">
      <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
