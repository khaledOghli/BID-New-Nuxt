<script setup lang="ts">
import { usePrimeVue } from 'primevue/config'

const PrimeVue = usePrimeVue()

const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
  if (color.value === 'dark')
    PrimeVue.changeTheme('aura-dark-blue', 'aura-light-blue', `theme-link`, () => { })
  else
    PrimeVue.changeTheme('aura-light-blue', 'aura-dark-blue', `theme-link`, () => { })
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </button>
</template>
