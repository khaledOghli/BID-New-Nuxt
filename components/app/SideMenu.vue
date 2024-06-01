<script setup lang="ts">
import { ref, computed } from 'vue';
import { sideMenuConfig } from '~/config/layouts';

const visible = ref(false);

// Computed property for sidebar styles
const sidebarInlineStyle = computed(() => ({
  width: sideMenuConfig.width,
  transitionDuration: sideMenuConfig.transitionDuration,
  backgroundColor: sideMenuConfig.backgroundColor,
  color: sideMenuConfig.textColor,
  position: 'fixed',
  top: '0',
  [sideMenuConfig.position]: '0',
  height: '95%',
  overflowX: 'hidden',
  transition: `width ${sideMenuConfig.transitionDuration}`,
}));

const containerStyle = {
  position: 'relative',
  width: sideMenuConfig.width,
  height: '100vh',
  margin: '20px',
};
</script>

<template>
  <div :style="containerStyle">
    <Button label="Toggle Sidebar" icon="pi pi-bars" @click="visible = !visible" />
    <Sidebar :visible="visible" @hide="visible = false" :style="sidebarInlineStyle">
      <h2>Sidebar Content</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Sidebar>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  background-color: var(--hoverColor);
}
</style>
