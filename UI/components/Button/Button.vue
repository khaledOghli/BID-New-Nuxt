<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'light' | 'dark'>,
    default: 'light',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<'primary' | 'tertiary' | 'ghost'>,
    default: 'primary',
    validator: (v: string) => ['primary', 'tertiary', 'ghost'].includes(v),
  },
  block: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
    validator: (v: string) => ['sm', 'md', 'lg'].includes(v),
  },
  shadow: {
    type: [Boolean, String] as PropType<boolean | 'sm' | 'md' | 'lg' | 'xl'>,
    default: false,
    validator: (v: boolean | string) => [true, false, 'sm', 'md', 'lg', 'xl'].includes(v),
  },
})

const tag = computed(() => (props.to ? 'nuxt-link' : props.href ? 'a' : 'button'))
</script>

<template>
  <component :is="tag" :to="to" :href="href" :type="type">
    <slot />
  </component>
</template>
