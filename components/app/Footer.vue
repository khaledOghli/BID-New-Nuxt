<template>
  <footer class="sticky_footer py-20 text-center text-sm text-gray-600 dark:bg-slate-900">
    <div class="container mx-auto max-w-screen-lg px-8">
      <p>
        ©
        {{ new Date().getFullYear() }}
        - {{ $t('site.name') }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
