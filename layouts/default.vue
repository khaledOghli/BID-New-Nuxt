<script setup lang="ts">
// const { locale, locales } = useI18n();
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
  <div class="main_container min-h-screen card-bg">
    <header class="mb-5">
      <div class="layout-container">
        <nav class="flex flex-row justify-between pb-5 pt-10">
          <NuxtLink
            to="/"
            :aria-label="$t('home')"
            class="min-w-fit"
          >
            <NuxtImg
              class="h-6 lg:ml-0 sm:ml-3 dark:hidden"
              src="nuxt/full-logo-green-dark.svg"
              densities="x1 x2"
              alt="nuxt-logo"
              style="height: 24px; width: 99px"
            />
            <NuxtImg
              class="h-6 hidden dark:block"
              src="nuxt/full-logo-green-light.svg"
              densities="x1 x2"
              alt="nuxt-logo"
              style="height: 24px; width: 99px"
            />
          </NuxtLink>
        </nav>
      </div>
      <LayoutSubMenu />
    </header>
    <div class="main_content layout-container">
      <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
        <slot />
      </div>
    </div>
    <footer class="sticky_footer py-20 text-center text-sm text-gray-600 dark:bg-slate-900">
      <div class="mx-auto max-w-screen-lg px-8 container">
        <p>
          ©
          {{ new Date().getFullYear() }}
          - {{ $t('site.name') }}
        </p>
      </div>
    </footer>
  </div>
</template>
