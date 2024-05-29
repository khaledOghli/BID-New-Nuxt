<script setup lang="ts">
  const { locale, locales } = useI18n();
  const switchLocalePath = useSwitchLocalePath();
  const availableLocales = computed(() => {
    return locales.value.filter((i: { code: string }) => i.code !== locale.value);
  });
  const locales1 = useLocales();
  const locale1 = useLocale();
</script>

<template>
  <div class="flex h-full items-center">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      <button
        type="button"
        class="flex h-full items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white">
        <span class="mx-2">
          {{ locale.name }}
        </span>
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
