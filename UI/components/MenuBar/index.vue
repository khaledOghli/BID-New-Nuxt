<script setup lang="ts">
  import Menubar from 'primevue/menubar';
  import type { MenuItem } from './MenuBar';

  withDefaults(
    defineProps<{
      items?: Array<MenuItem>;
    }>(),
    {
      items: () => [
        {
          label: 'Test',
          icon: 'pi pi-home',
        },
      ],
    }
  );
</script>

<template>
  <div class="bg-light-200 dark:bg-slate-900">
    <Menubar class="main_menubar" :model="items">
      <template v-if="$slots.start" #start>
        <slot name="start" />
      </template>
      <template v-if="$slots.item" #item="{ item, props, hasSubmenu, root }">
        <slot name="item" :item="item" :props="props" :hasSubmenu="hasSubmenu" :root="root" />
      </template>

      <template v-if="$slots.end" #end>
        <slot name="end" />
      </template>
    </Menubar>
  </div>
</template>
<style scoped>
  .main_menubar.p-menubar {
    @apply container mx-auto border-0 bg-transparent px-8;
  }
</style>
