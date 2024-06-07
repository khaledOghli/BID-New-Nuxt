<script setup lang="ts">
import type { MenuItem } from '~/UI/components/MenuBar/MenuBar.d.ts';
import { playIconAnimation, stopIconAnimation } from '~/utils/iconsAnimation';

const items = ref<Array<MenuItem>>([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B',
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U',
      },
      {
        separator: true,
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            badge: 2,
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            badge: 3,
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3,
  },
]);
const iconRef = ref();
</script>

<template>
  <div class="bg-light-200 dark:bg-slate-900">
    <VMenuBar :items="items">
      <template #start>
        <IconsHome
          ref="iconRef"
          class="h-10 w-10 text-blue-500"
          @mouseenter="playIconAnimation(iconRef)"
          @mouseleave="stopIconAnimation(iconRef)"
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          class="align-items-center flex"
          v-bind="props.action"
        >
          <span>{{ item.label }}</span>
          <span
            v-if="item.shortcut"
            class="surface-border surface-100 border-round ml-auto border-1 p-1 text-xs"
          >{{ item.shortcut }}</span>
          <i
            v-if="hasSubmenu"
            class="pi pi-angle-down"
            :class="[
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          />
        </a>
      </template>
      <template #end>
        <div class="align-items-center flex gap-2">
          <div class="flex flex-col sm:flex-row space-x-3 space-y-4 sm:space-y-0 rtl:space-x-reverse">
            <CommonThemeSwitcher />
            <CommonLangSwitcher />
          </div>
        </div>
      </template>
    </VMenuBar>
  </div>
</template>

<style scoped>
  :deep(.p-menubar .p-menubar-end) {
  margin-left: 0;
  margin-right: 0;
  margin-inline-start: auto;
}
</style>
