<script setup lang="ts">
import type { SweetAlertOptions } from 'sweetalert2';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
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
function showAlert() {
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
}

function showToast() {
  const taostOptions = {
    severity: 'error',
    summary: 'xxxxxx',
    detail: 'ccccc',
    life: 0,
    position: 'bottom-left',
  };
  toaster.add(taostOptions);
}

function showToast2() {
  const taostOptions = {
    severity: 'success',
    summary: 'interceptOptions.msgTitle',
    detail: 'interceptOptions.msgBody',
    life: 0,
  };
  toaster.add(taostOptions);
}

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: 'This is required' })
      .email({ message: 'Must be a valid email' }),
    phone: zod.union([
      zod.string().regex(/^\d{10}$/, { message: 'Must be a valid phone number' }),
      zod.undefined(),
      zod.literal(''),
    ]),
    // number with uae mobile number
    UAEMobile: zod.number().refine(
      (value) => {
        const str = value.toString();
        const UAE_MOBILE_LENGTH = 12;

        return str.length === UAE_MOBILE_LENGTH && str.startsWith('971');
      },
      { message: 'Must be a valid UAE mobile number' },
    ),
  }),
);
const { handleSubmit, errors } = useForm({
  validationSchema,
});
const onSubmit = handleSubmit((values) => {
  const PRETTY_PRINT_INDENTATION = 2;
  console.log(JSON.stringify(values, null, PRETTY_PRINT_INDENTATION));
});
const mobile = ref('');
</script>

<template>
  <div>
    <h1>{{ $t('Home') }}</h1>
    <p>{{ date }}</p>
    <p>{{ dateOnlyTime }}</p>
    <p>{{ dateWithTime }}</p>
    <PrimeButton
      label="Hi Swal"
      @click="showAlert"
    />
    <PrimeButton
      label="Hi Toast"
      @click="showToast"
    />
    <PrimeButton
      label="Hi Toast 2"
      @click="showToast2"
    />

    <div>
      <VInputText
        id="name"
        validation-name="email"
        :invalid="errors.email"
        placeholder="Enter your name"
        label="Name"
        helper="Enter your name"
      />
      <VInputText
        id="phone"
        v-model="mobile"
        :invalid="errors.phone"
        placeholder="Enter your phone"
        label="phone"
        helper="Enter your phone"
      />

      <VInputNumber
        id="UAEMobile"
        validation-name="UAEMobile"
        :invalid="errors.UAEMobile"
        placeholder="Enter your UAEMobile"
        label="UAEMobile"
        helper="Enter your UAEMobile"
      />
    </div>

    <PrimeButton
      type="submit"
      @click="onSubmit"
    >
      {{ $t('Submit') }}
    </PrimeButton>
  </div>
</template>
