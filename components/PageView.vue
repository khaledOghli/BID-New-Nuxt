<script setup lang="ts">
  const { data } = await useFetch('/api/pageview');

  const time = useTimeAgo(() => data.value?.startAt || 0);
</script>

<template>
  <div class="text-gray:80 bg-red-100 dark:bg-blue-500">
    <span text-gray font-500>{{ data?.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
