<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <div
    class="card relative w-full overflow-hidden border border-gray-950/10 rounded bg-white transition-colors duration-300 dark:border-gray-50/[0.2] dark:bg-gray-950"
  >
    <div
      v-if="disabled"
      class="absolute left-0 top-0 z-10 h-full w-full cursor-not-allowed bg-gray-900/[0.75]"
    />
    <slot />
  </div>
</template>
