<template>
  <div class="fixed left-50% mx-auto h-100vh w-100vw container -z-1 -translate-x-50%">
    <div class="grid grid-cols-12 h-full w-full gap-6">
      <div v-for="i in 12" :key="i"
        class="col-span-2 border-1 border-blue-400 border-opacity-25 border-dashed bg-blue-500 bg-opacity-2 lg:col-span-1 md:col-span-1 sm:col-span-2 [&:nth-of-type(n+7)]:hidden lg:[&:nth-of-type(n)]:block md:[&:nth-of-type(n)]:block sm:[&:nth-of-type(n+7)]:hidden" />
    </div>
  </div>
</template>
