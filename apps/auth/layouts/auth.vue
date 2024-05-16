<script lang="ts" setup>
  //
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="lg:w-[400px]">
      <Logo class="mb-5 flex justify-center" />
      <div class="rounded-xl bg-white shadow-md">
        <slot />
      </div>
    </div>
  </div>
</template>
