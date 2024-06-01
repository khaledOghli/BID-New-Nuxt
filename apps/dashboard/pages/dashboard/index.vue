<script lang="ts" setup>
  definePageMeta({
    layout: 'admin',
    // middleware: 'auth',
  });

  const stats = ref([
    {
      text: 'Users',
      count: '100',
      icon: 'ri:user-line',
      color: 'bg-indigo-500',
    },
    {
      text: 'Posts',
      count: '20',
      icon: 'ri:book-2-line',
      color: 'bg-blue-500',
    },
    {
      text: 'Comments',
      count: '500',
      icon: 'ri:message-line',
      color: 'bg-orange-500',
    },
    {
      text: 'Views',
      count: '12000',
      icon: 'ri:line-chart-line',
      color: 'bg-emerald-500',
    },
  ]);
</script>

<template>
  <div>
    <!-- card -->

  </div>
</template>
