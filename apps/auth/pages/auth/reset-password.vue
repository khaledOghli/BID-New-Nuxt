<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

useHead({
  title: 'Forgot Password',
});

definePageMeta({
  layout: 'auth',
});

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
    passwordConfirmation: string().required().label('Password Confirmation'),
  }),
});

const onSubmit = handleSubmit((values) => {
  const PRETTY_PRINT_INDENTATION = 2;
  console.log(JSON.stringify(values, null, PRETTY_PRINT_INDENTATION));
});
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <form
      class="mx-auto max-w-md w-full rounded-lg p-8"
      @submit="onSubmit"
    >
      <!-- <AuthHeader
        title="Reset Password"
        subtitle="Please enter your new password"
      /> -->

      <VInput
        wrapper-class="mb-4"
        name="email"
        label="Email"
        placeholder="Email"
      />
      <VInput
        wrapper-class="mb-4"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <VInput
        wrapper-class="mb-4"
        name="passwordConfirmation"
        label="Password Confirmation"
        placeholder="Password Confirmation"
      />

      <VButton
        type="submit"
        color="primary"
        block
      >
        {{ $t('Submit') }}
      </VButton>
    </form>
  </div>
</template>
