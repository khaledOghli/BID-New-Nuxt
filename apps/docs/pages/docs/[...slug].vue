<script setup lang="ts">
  definePageMeta({
    layout: 'docs',
  });
</script>

<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div class="grid min-h-[400px] place-items-center">
          <div class="p-10 text-center">
            <h3 class="mb-2 text-2xl font-bold">404</h3>
            <p class="mb-6 text-sm text-gray-600">Document or page not found</p>
            <VButton href="/" size="sm" text color="primary"> Back to home </VButton>
          </div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
