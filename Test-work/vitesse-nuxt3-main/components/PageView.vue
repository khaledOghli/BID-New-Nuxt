<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div class="bg-red-100 text-gray:80 dark:bg-blue-500">
    <span text-gray font-500>{{ data?.pageview }}</span>
    <DarkToggle />
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
