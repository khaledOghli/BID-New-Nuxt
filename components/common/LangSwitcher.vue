<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i: { code: string }) => i.code !== locale.value);
});
</script>

<template>
  <div class="h-full flex items-center">
    <NuxtLink
      v-for="iLocale in availableLocales"
      :key="iLocale.code"
      :to="switchLocalePath(iLocale.code)"
    >
      <button
        type="button"
        class="h-full flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
      >
        <span class="mx-2">
          {{ iLocale.name }}
        </span>
      </button>
    </NuxtLink>
  </div>
</template>
