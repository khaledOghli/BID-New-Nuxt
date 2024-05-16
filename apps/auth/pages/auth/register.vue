<script lang="ts" setup>
  import { useForm } from 'vee-validate';
  import { object, string } from 'yup';

  useHead({
    title: 'Register',
  });

  definePageMeta({
    layout: 'auth',
  });

  const { handleSubmit } = useForm({
    validationSchema: object({
      name: string().required().label('Name'),
      email: string().required().email().label('Email'),
      password: string().required().label('Password'),
    }),
  });

  const onSubmit = handleSubmit((values) => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(values, null, 2));
  });
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <form class="mx-auto w-full max-w-md rounded-lg p-8" @submit="onSubmit">
      <!-- <AuthHeader title="Register" subtitle="Please enter your credentials" /> -->

      <VInput wrapper-class="mb-4" name="name" label="Name" placeholder="Name" />
      <VInput wrapper-class="mb-4" name="email" label="Email" placeholder="Email" />
      <VInput
        wrapper-class="mb-4"
        name="password"
        label="Password"
        placeholder="Password"
        type="password" />

      <div class="mb-5 flex items-center justify-between gap-2">
        <label class="flex flex-wrap items-center gap-2 text-sm">
          <input
            type="checkbox"
            class="text-primary-500 focus:ring-primary-500 h-4 w-4 rounded transition duration-300" />

          <span> I agree with </span>
          <NuxtLink
            to="/toc"
            class="text-primary-500 inline text-sm font-semibold hover:underline">
            Terms and Condition
          </NuxtLink>
        </label>
      </div>

      <VButton type="submit" color="primary" block class="mb-5"> Register </VButton>

      <div class="text-sm text-gray-600">
        Already have an account?
        <NuxtLink
          to="/auth/login"
          class="text-primary-500 text-sm font-semibold hover:underline">
          Login
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
