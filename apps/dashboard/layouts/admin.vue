<script setup lang="ts">
const { locale, locales } = useI18n()
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})
// useHeadSafe({
//   htmlAttrs: {
//     dir: locale.value == 'ar' ? 'rtl' : 'ltr',
//   },
// });
</script>

<template>
  <div class="flex">
    <AppSideMenu />
    <div class="main_container min-h-screen card-bg">
      <AppHeader />
      <div class="main_content layout-container">
        <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
          <slot />
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
