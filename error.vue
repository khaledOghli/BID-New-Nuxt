<script setup lang="ts">
defineProps<{
  error: { statusCode: number, message: string }
}>();

function handleClearError() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <NuxtLayout name="error">
    <div class="relative flex flex-col items-center justify-center gap-y-4 sm:h-40 sm:gap-y-5">
      <p class="mb-[-1em] text-slate-500 font-semibold dark:text-slate-400">
        {{ error.statusCode }}
      </p>
      <h1 class="text-xl font-medium">
        <template v-if="error.statusCode === 404">
          {{ $t('error.page-not-found') }}
        </template>
        <template v-else>
          {{ error.message }}
        </template>
      </h1>

      <button
        type="button"
        class="mx-auto mt-3 w-[10rem] border border-slate-200 rounded-lg bg-gray-50 p-4 py-2.5 text-gray-700 hover:cursor-pointer dark:border-gray-700 hover:border-slate-200 dark:bg-slate-800 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
        @click="handleClearError"
      >
        {{ $t('error.return') }}
      </button>
    </div>
  </NuxtLayout>
</template>
