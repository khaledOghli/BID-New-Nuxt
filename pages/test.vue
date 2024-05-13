<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <VCard title="Hello">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit esse
      voluptatem et deserunt earum explicabo aut quis laboriosam nostrum
      quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae fugit!
    </VCard>
  </div>
</template>
