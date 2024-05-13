<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: boolean
  }>(),
  {
    modelValue: false,
  },
)

const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props)

const isOpen = ref(props.modelValue)

watch(
  modelValue,
  (val) => {
    isOpen.value = val
  },
  { immediate: true },
)

watch(isOpen, (val) => {
  emit('update:modelValue', val)
})

const menus = ref([
  {
    icon: 'ri:dashboard-line',
    text: 'Dashboard',
    to: '/',
  },
  {
    text: 'Components',
    icon: 'ic:round-settings-input-component',
    children: [
      {
        text: 'Autocomplete',
        to: '/components/autocomplete',
      },
    ],
  },
  {
    text: 'Pages',
    icon: 'ri:flag-line',
    children: [
      {
        text: 'Login',
        to: '/auth/login',
      },
      {
        text: 'Register',
        to: '/auth/register',
      },
      {
        text: 'Forgot Password',
        to: '/auth/forgot-password',
      },
      {
        text: 'Reset Password',
        to: '/auth/reset-password',
      },
      {
        text: 'Counter',
        to: '/counter',
      },
      {
        text: 'Content',
        to: '/content',
      },
      {
        text: 'Blog',
        to: '/blog',
      },
    ],
  },
])
</script>

<template>
  <VModalBackdrop v-if="isOpen" @click="isOpen = false" />

  <aside
    class="fixed top-0 z-10 h-screen w-10/12 flex-col transform border-r border-gray-200 bg-white px-2 pb-2 transition-all duration-300 sm:sticky sm:w-[300px] sm:transform-none"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- nav header -->
    <div
      class="flex items-center justify-between gap-2 border-b border-gray-200 px-4 -mx-2 sm:border-none"
    >
      <NuxtLink
        to="/"
        class="w-full flex items-center justify-between gap-2 py-5 text-lg text-indigo-500 font-bold sm:justify-center"
      >
        <div class="flex items-center justify-center gap-2">
          {{ $t('app_name') }}
        </div>
      </NuxtLink>
      <button
        class="text i-ri-close-line inline h-6 w-6 sm:hidden"
        @click="isOpen = false"
      />
    </div>

    <!-- menu -->
    <ul class="flex-grow">
      <AdminSidebarItem
        v-for="menu in menus"
        :key="menu.text"
        :menu="menu"
      />
    </ul>
  </aside>
</template>
