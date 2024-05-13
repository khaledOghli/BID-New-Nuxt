<script setup lang="ts">
import { appName } from '~/constants'
import './assets/css/reset.tailwind.css'
import './assets/css/app.css'

useHead({
  title: appName,
})
</script>

<template>
  <GridCols />
  <Button label="Hello" />
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
