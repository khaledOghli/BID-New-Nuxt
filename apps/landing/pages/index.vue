<script setup lang="ts">
  import type { SweetAlertOptions } from 'sweetalert2';
  // const { $useSweetAlert } = useNuxtApp();
  const swal = useSwal();
  const toaster = useToaster();

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

    swal.add(options, confirmCallback, dismissedCallback, deniedCallback);
  };

  const showToast = () => {
    const taostOptions = {
      severity: 'error',
      summary: 'xxxxxx',
      detail: 'ccccc',
      life: 0,
      position: 'bottom-left',
    };
    toaster.add(taostOptions);
  };

  const showToast2 = () => {
    const taostOptions = {
      severity: 'success',
      summary: 'interceptOptions.msgTitle',
      detail: 'interceptOptions.msgBody',
      life: 0,
    };
    toaster.add(taostOptions);
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
    <Button @click="showToast2" label="Hi Toast 2" />

  </div>
</template>
