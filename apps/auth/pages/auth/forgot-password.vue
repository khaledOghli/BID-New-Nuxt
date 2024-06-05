<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

useHead({
  title: 'Forgot Password',
})

definePageMeta({
  layout: 'auth',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
  }),
})

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <form
      class="mx-auto max-w-md w-full rounded-lg p-8"
      @submit="onSubmit"
    >
      <!-- <AuthHeader title="Forgot Password" subtitle="Please enter your email" /> -->

      <VInput
        wrapper-class="mb-4"
        name="email"
        label="Email"
        placeholder="Email"
      />

      <VButton
        type="submit"
        color="primary"
        block
      >
        Send Password Reset Link
      </VButton>
    </form>
  </div>
</template>
