<script setup lang="ts">
  const showSidebar = ref(true);
  const isMobile = useMediaQuery('(max-width: 640px)');

  watchEffect(() => {
    if (isMobile.value) showSidebar.value = false;
    else showSidebar.value = true;
  });

  function onMenuClick() {
    if (isMobile.value) showSidebar.value = false;
  }

  const docsQuery = queryContent('docs');
</script>

<template>
  <div
    class="overflow-y-auto bg-white px-3 pb-3 pt-1 shadow-md lg:min-h-screen lg:w-[280px] lg:bg-transparent lg:px-4 lg:py-6 lg:shadow-none">
    <div class="sticky top-0 flex items-center justify-between lg:hidden">
      <VButton text @click="showSidebar = !showSidebar">
        <Icon name="ri:menu-2-line" class="h-5 w-5" />
      </VButton>
      <VButton text size="sm" href="#"> Back to top </VButton>
    </div>
    <ContentNavigation v-slot="{ navigation }" :query="docsQuery" class="space-y-3">
      <ul v-if="showSidebar">
        <template v-for="(nav, idx) in navigation" :key="idx">
          <li v-for="link in nav.children" :key="link._path">
            <p class="py-2 text-sm font-medium text-gray-900">
              {{ link.title }}
            </p>
            <ul class="ml-1">
              <li v-for="child in link.children" :key="child.title">
                <NuxtLink
                  class="block border-l border-l-gray-300 px-5 py-1.5 text-sm text-gray-600 hover:border-l-gray-500 hover:text-gray-800"
                  :to="child._path"
                  exact-active-class="border-l-primary-600 font-medium !text-primary-600"
                  @click="onMenuClick">
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </ContentNavigation>
  </div>
</template>
