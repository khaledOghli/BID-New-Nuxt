<script setup lang="ts"></script>

<template>
  <footer class="sticky_footer py-20 text-center text-sm text-gray-600 dark:bg-slate-900">
    <div class="mx-auto max-w-screen-lg px-8 container">
      <p>
        ©
        {{ new Date().getFullYear() }}
        - {{ $t('site.name') }}
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
