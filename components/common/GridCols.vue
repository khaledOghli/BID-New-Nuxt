<template>
  <div
    class="untouchable container fixed left-[50%] z-[auto] mx-auto h-[100vh] w-[100vw] translate-x-[-50%]">
    <div class="grid h-full w-full grid-cols-12 gap-6">
      <div
        v-for="i in 12"
        :key="i"
        padding="p-10"
        class="col-span-2 border border-dashed border-blue-400 border-opacity-25 bg-blue-500 bg-opacity-5 sm:col-span-2 md:col-span-1 lg:col-span-1 [&:nth-of-type(n+7)]:hidden sm:[&:nth-of-type(n+7)]:hidden md:[&:nth-of-type(n+7)]:block" />
    </div>
  </div>
</template>
