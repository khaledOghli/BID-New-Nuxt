<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string;
      bordered?: boolean;
    }>(),
    {
      bordered: false,
    }
  );
</script>

<template>
  <h3 class="border-b px-4 py-3 text-lg font-semibold text-gray-700">
    <slot>
      {{ title }}
    </slot>
  </h3>
</template>
