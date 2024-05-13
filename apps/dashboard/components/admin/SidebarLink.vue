<script lang="ts" setup>
const props
  = defineProps<{
    icon?: any
    appendIcon?: any
    text?: string
    child?: boolean
    parent?: boolean
  }>()
</script>

<template>
  <NuxtLink
    class="w-full flex items-center gap-2 rounded px-4 py-2 transition duration-300 hover:bg-indigo-500 hover:text-white"
  >
    <div v-if="child" class="w-5" />
    <Icon v-else-if="icon" class="h-5 w-5" :name="icon" />
    <span class="flex-grow">
      <slot>{{ text }}</slot>
    </span>
    <Icon v-if="parent" name="ri:arrow-right-s-line" class="h-5 w-5" />
    <div v-else-if="appendIcon" class="h-5 w-5" :class="appendIcon" />
  </NuxtLink>
</template>
