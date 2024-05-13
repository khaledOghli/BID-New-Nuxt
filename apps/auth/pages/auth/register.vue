<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

useHead({
  title: 'Register',
})

definePageMeta({
  layout: 'auth',
})

const { handleSubmit } = useForm({
  validationSchema: object({
    name: string().required().label('Name'),
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
  }),
})

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <form class="mx-auto max-w-md w-full rounded-lg p-8" @submit="onSubmit">
      <!-- <AuthHeader title="Register" subtitle="Please enter your credentials" /> -->

      <VInput wrapper-class="mb-4" name="name" label="Name" placeholder="Name" />
      <VInput wrapper-class="mb-4" name="email" label="Email" placeholder="Email" />
      <VInput wrapper-class="mb-4" name="password" label="Password" placeholder="Password" type="password" />

      <div class="mb-5 flex items-center justify-between gap-2">
        <label class="flex flex-wrap items-center gap-2 text-sm">
          <input
            type="checkbox"
            class="h-4 w-4 rounded text-primary-500 transition duration-300 focus:ring-primary-500"
          >

          <span> I agree with </span>
          <NuxtLink to="/toc" class="inline text-sm text-primary-500 font-semibold hover:underline">
            Terms and Condition
          </NuxtLink>
        </label>
      </div>

      <VButton type="submit" color="primary" block class="mb-5">
        Register
      </VButton>

      <div class="text-sm text-gray-600">
        Already have an account?
        <NuxtLink to="/auth/login" class="text-sm text-primary-500 font-semibold hover:underline">
          Login
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
