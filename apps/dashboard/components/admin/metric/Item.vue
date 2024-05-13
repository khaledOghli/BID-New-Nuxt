<script lang="ts" setup>
defineProps<{
  color: string
  icon: any
  count: string | number
  text: string
}>()
</script>

<template>
  <div
    class="flex items-center gap-4 border border-gray-200 rounded-xl bg-white px-4 py-3"
  >
    <div
      class="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full text-white"
      :class="color"
    >
      <component :is="icon" class="h-5 w-5" />
    </div>
    <div>
      <h3 class="truncate text-xl font-semibold">
        {{ count }}
      </h3>
      <h4 class="text-gray-600">
        {{ text }}
      </h4>
    </div>
  </div>
</template>
