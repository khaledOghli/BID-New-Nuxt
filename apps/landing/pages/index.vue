<script setup lang="ts">
  import type { SweetAlertOptions } from 'sweetalert2';

  import { useField, useForm } from 'vee-validate';
  import { toTypedSchema } from '@vee-validate/zod';
  import * as zod from 'zod';

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

  const validationSchema = toTypedSchema(
    zod.object({
      email: zod
        .string()
        .min(1, { message: 'This is required' })
        .email({ message: 'Must be a valid email' }),
    })
  );

  const { handleSubmit, errors } = useForm({
    validationSchema,
  });
  const { value: email } = useField('email');
  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
  });
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>{{ date }}</p>
    <p>{{ dateOnlyTime }}</p>
    <p>{{ dateWithTime }}</p>
    <PrimeButton @click="showAlert" label="Hi Swal" />
    <PrimeButton @click="showToast" label="Hi Toast" />
    <PrimeButton @click="showToast2" label="Hi Toast 2" />

    <form @submit="onSubmit">
      <div>
        <label for="name">Name</label>
        <PrimeInputText
          v-model="email"
          id="email"
          name="email"
          :class="{ 'p-invalid': errors.email }" />
        <span>
          {{ errors.email }}
        </span>
      </div>

      <PrimeButton type="submit">Submit</PrimeButton>
    </form>
  </div>
</template>
