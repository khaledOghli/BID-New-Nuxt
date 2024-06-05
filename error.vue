<script setup lang="ts">
defineProps<{
  error: { statusCode: number, message: string }
}>();

function handleClearError() {
  this.clearError({ redirect: '/' });
}
</script>

<template>
  <div class="h-screen bg-slate-100 p-20 text-slate-900 dark:bg-slate-900 dark:text-white">
    <div class="mx-auto max-w-md w-auto rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800">
      <div class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5">
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
    </div>
  </div>
</template>
