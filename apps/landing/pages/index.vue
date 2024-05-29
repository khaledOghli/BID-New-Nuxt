<script setup lang="ts">
  import type { SweetAlertOptions } from 'sweetalert2';
  const { $useSweetAlert } = useNuxtApp();

  useHead({
    title: 'Home',
  });
  const date = useLocaleDate(new Date());
  const dateOnlyTime = useLocaleOnlyTime(new Date());
  const dateWithTime = useLocaleDateWithTime(new Date());
  const showAlert = () => {
    const options: SweetAlertOptions = {
      title: 'Hello World!',
      text: 'This is a simple alert!',
      icon: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    };

    const confirmCallback = () => {
      console.log('Confirmed!');
    };

    const dismissedCallback = () => {
      console.log('Dismissed!');
    };

    const deniedCallback = () => {
      console.log('Denied!');
    };

    $useSweetAlert(options, confirmCallback, dismissedCallback, deniedCallback);
  };
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>{{ date }}</p>
    <p>{{ dateOnlyTime }}</p>
    <p>{{ dateWithTime }}</p>
    <Button @click="showAlert" label="Hi Home" />
  </div>
</template>
