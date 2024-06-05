<script setup lang="ts">
import Toast from 'primevue/toast'
import type { ToastProps } from 'primevue/toast'

const toastPositions: ToastProps.Position[] = [
  'bottom-left',
  'top-left',
  'top-center',
  'top-right',
  'bottom-center',
  'bottom-right',
  'center',
]
</script>

<template>
  <div>
    <Toast position="top-right" />
  </div>
</template>

<style scoped></style>
