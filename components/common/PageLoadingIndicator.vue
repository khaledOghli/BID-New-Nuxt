<script setup lang="ts">
  import { nuxtLoadingIndicator } from '~/config/layouts';
</script>

<template>
  <NuxtLoadingIndicator
    :color="nuxtLoadingIndicator.color"
    :errorColor="nuxtLoadingIndicator.errorColor"
    :height="nuxtLoadingIndicator.height"
    :duration="nuxtLoadingIndicator.duration"
    :throttle="nuxtLoadingIndicator.throttle" />
</template>

<style></style>
