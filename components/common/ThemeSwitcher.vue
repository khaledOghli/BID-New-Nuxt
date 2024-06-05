<script setup lang="ts">
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();
const color = useColorMode();

useHead({
  meta: [
    {
      id: 'theme-color',
      name: 'theme-color',
      content: () => (color.value === 'dark' ? '#222222' : '#ffffff'),
    },
  ],
});
watch(
  color,
  (newColor) => {
    if (newColor.value === 'dark' && newColor.preference === 'dark')
      PrimeVue.changeTheme('aura-light-blue', 'aura-dark-blue', 'theme-link', () => {});
    else if (newColor.value === 'light' && newColor.preference === 'light')
      PrimeVue.changeTheme('aura-dark-blue', 'aura-light-blue', 'theme-link', () => {});
    else if (newColor.value === 'light' && newColor.preference === 'system')
      PrimeVue.changeTheme('aura-dark-blue', 'aura-light-blue', 'theme-link', () => {});
    else if (newColor.value === 'dark' && newColor.preference === 'system')
      PrimeVue.changeTheme('aura-light-blue', 'aura-dark-blue', 'theme-link', () => {});
  },
  { immediate: true },
);
</script>

<template>
  <form class="inline-flex border border-gray-200 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white">
    <label for="themes">
      <Icon
        name="gg:dark-mode"
        size="1.5em"
      />
    </label>
    <select
      id="themes"
      v-model="$colorMode.preference"
      :aria-label="$t('themes')"
      class="mx-1 inline-block border-1 border-l-3 border-gray-900 bg-inherit text-sm"
    >
      <option
        class="dark:bg-slate-800"
        value="system"
        :aria-label="$t('themes.system')"
      >
        {{ $t('themes.system') }}
      </option>
      <option
        class="dark:bg-slate-800"
        value="light"
        :aria-label="$t('themes.light')"
      >
        {{ $t('themes.light') }}
      </option>
      <option
        class="dark:bg-slate-800"
        value="dark"
        :aria-label="$t('themes.dark')"
      >
        {{ $t('themes.dark') }}
      </option>
    </select>
  </form>
</template>
