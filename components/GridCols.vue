<template>
  <div class="fixed left-[50%] z-[-1] mx-auto h-[100vh] w-[100vw] translate-x-[-50%] container">
    <div class="grid grid-cols-12 h-full w-full gap-6">
      <div
        v-for="i in 12" :key="i" padding="p-10"
        class="col-span-2 border border-blue-400 border-opacity-50 border-dashed bg-blue-500 bg-opacity-10 lg:col-span-1 md:col-span-1 sm:col-span-2 [&:nth-of-type(n+7)]:hidden md:[&:nth-of-type(n+7)]:block sm:[&:nth-of-type(n+7)]:hidden"
      />
    </div>
  </div>
</template>
