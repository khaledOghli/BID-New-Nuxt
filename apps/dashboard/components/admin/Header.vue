<script lang="ts" setup>
  import { useAuthStore } from '~~/stores/auth';

  defineEmits(['menu:click']);

  const auth = useAuthStore();
  const router = useRouter();

  function logout() {
    auth.logout();
    router.push('/auth/login');
  }
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="flex items-center justify-between gap-2 py-3 pl-3 pr-6">
      <button
        class="inline flex-shrink-0 rounded px-4 py-2 sm:hidden"
        @click="$emit('menu:click')">
        <Icon name="ri:menu-line" class="h-5 w-5" />
      </button>

      <div class="relative sm:w-3/12">
        <Icon name="ri-search-line" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="search"
          placeholder="Search"
          class="w-full appearance-none rounded-lg border-none py-2 pl-10 focus:border-none focus:outline-none focus:ring-0" />
      </div>

      <VDropdown right>
        <template #activator>
          <VDropdownButton
            v-slot="{ open }"
            as="button"
            type="button"
            class="rounded px-2 py-2 text-gray-600 hover:bg-gray-200 hover:text-indigo-500">
            <span :class="[open ? 'text-indigo-500' : '']" class="flex items-center gap-2">
              <Icon name="ri:user-line" class="h-5 w-5" />
              <span class="hidden sm:inline">
                {{ auth.user?.name }}
              </span>
              <Icon name="ri:arrow-down-s-line" class="i-ri-arrow-down-s-line h-5 w-5" />
            </span>
          </VDropdownButton>
        </template>

        <VDropdownItem>Profile</VDropdownItem>
        <VDropdownItem>Setting</VDropdownItem>
        <VDropdownItem divider />
        <VDropdownItem @click="logout"> Logout </VDropdownItem>
      </VDropdown>
    </div>
  </header>
</template>
