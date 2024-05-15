<script setup lang="ts">
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter((i: { code: string }) => i.code !== locale.value)
})
</script>

<template>
  <div
    class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <div class="mx-auto max-w-screen-lg px-8 container">
      <header class="mb-5">
        <nav class="flex flex-row justify-between pb-5 pt-10">
          <NuxtLink to="/" aria-label="Home" class="min-w-fit">
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
          <div
            class="flex flex-col sm:flex-row space-x-3 space-y-4 sm:space-y-0 rtl:space-x-reverse"
          >
            <ThemeSwitcher
              class="inline-flex border border-gray-200 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
            />

            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <button
                type="button"
                class="inline-flex border border-gray-200 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
              >
                <span class="mx-2">
                  {{ locale.name }}
                </span>
              </button>
            </NuxtLink>
          </div>
        </nav>
      </header>
      <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
        <slot />
      </div>
      <footer class="py-20 text-center text-sm text-gray-600 dark:bg-slate-900">
        <p>© {{ new Date().getFullYear() }} - {{ $t('site.name') }}</p>
      </footer>
    </div>
  </div>
</template>
