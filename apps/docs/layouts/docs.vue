<script setup lang="ts">
  //
</script>

<template>
  <div class="flex flex-col lg:min-h-screen">
    <!-- <LandingHeader hide-hero /> -->
    <div class="container z-0 mx-auto flex flex-1 flex-col gap-6 lg:flex-row">
      <DocsSidebar />
      <div class="prose flex-1 px-4 py-4 lg:px-0 lg:py-8">
        <slot />
      </div>
    </div>
    <!-- <LandingFooter /> -->
  </div>
</template>
