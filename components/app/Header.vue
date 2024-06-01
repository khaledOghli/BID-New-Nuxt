<script setup lang="ts"></script>

<template>
  <header class="mb-5">
    <div class="container mx-auto px-8">
      <nav class="flex flex-row justify-between pb-5 pt-10">
        <NuxtLink to="/" aria-label="Home" class="min-w-fit">
          <NuxtImg
            class="h-6 sm:ml-3 lg:ml-0 dark:hidden"
            src="nuxt/full-logo-green-dark.svg"
            densities="x1 x2"
            alt="nuxt-logo"
            style="height: 24px; width: 99px" />
          <NuxtImg
            class="hidden h-6 dark:block"
            src="nuxt/full-logo-green-light.svg"
            densities="x1 x2"
            alt="nuxt-logo"
            style="height: 24px; width: 99px" />
        </NuxtLink>
      </nav>
    </div>
    <AppSubHeader />
  </header>
</template>

<style scoped></style>
