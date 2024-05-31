<script setup lang="ts">
  import type { SweetAlertOptions } from 'sweetalert2';
  import { useToast } from 'primevue/usetoast';
  const { $useSweetAlert } = useNuxtApp();
  const { $useToaster } = useNuxtApp();
  const toast = useToast();

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

  const showToast = () => {
    const taostOptions = {
      severity: 'error',
      summary: 'interceptOptions.msgTitle',
      detail: 'interceptOptions.msgBody',
      life: 0,
    };
    $useToaster(taostOptions);
  };
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>{{ date }}</p>
    <p>{{ dateOnlyTime }}</p>
    <p>{{ dateWithTime }}</p>
    <Button @click="showAlert" label="Hi Swal" />
    <Button @click="showToast" label="Hi Toast" />
  </div>
</template>
