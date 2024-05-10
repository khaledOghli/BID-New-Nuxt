<script setup>
import './app.css'
// import '@unocss/reset/tailwind.css';
// 'uno:[layer-name].css'
// import 'uno:components.css';
// layers that are not 'components' and 'utilities' will fallback to here
// import 'uno.css';
// your own CSS
// import 'primevue/resources/primevue.css';
// import 'primeicons/primeicons.css';
// import '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss';
// "utilities" layer will have the highest priority
// import 'uno:utilities.css';
useHead({
  title: 'Nuxt 3 PrimeVue Starter',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang='scss'>
@import 'App.scss';
</style>
