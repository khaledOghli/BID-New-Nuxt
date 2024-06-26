<script lang="ts" setup>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useAuthStore } from '~~/stores/auth';

useHead({
  title: 'Login',
});

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
});

const { handleSubmit } = useForm({
  validationSchema: object({
    email: string().required().email().label('Email'),
    password: string().required().label('Password'),
  }),
});

const auth = useAuthStore();
const router = useRouter();
const error = ref();
const route = useRoute();

const { store } = useAuthStorage();

const { value: email } = useField('email', undefined, {
  initialValue: '',
});
const { value: password } = useField('password', undefined, {
  initialValue: '',
});

const onSubmit = handleSubmit(async (values) => {
  error.value = '';
  try {
    const res = await $fetch('/api/auth/login', {
      method: 'post',
      body: values,
    });

    const token = res.token;
    const user = res.user;

    store(token, user);

    auth.user = user;
    auth.loggedIn = true;

    router.push(route.query.next || '/');
  }
  catch (e: any) {
    error.value = e.data.error;
  }
});
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <form
      class="mx-auto max-w-md w-full rounded-lg px-10 py-8"
      @submit="onSubmit"
    >
      <!-- <AuthHeader title="Login" subtitle="Please enter your credentials" /> -->

      <div
        v-if="error"
        class="bg-error-600 mb-4 rounded-lg px-4 py-3 text-sm text-white"
      >
        {{ error }}
      </div>

      <VInput
        v-model="email"
        wrapper-class="mb-4"
        name="email"
        label="Email"
        placeholder="Email"
        hint="Email: admin@example.com"
      />
      <VInput
        v-model="password"
        wrapper-class="mb-4"
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        hint="Password: admin"
      />

      <div class="mb-5 flex items-center justify-between gap-2">
        <label class="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            class="h-4 w-4 rounded text-primary-500 transition duration-300 focus:ring-primary-500"
          >
          {{ $t('Remember me') }}
        </label>
        <NuxtLink
          to="/auth/forgot-password"
          class="text-sm text-primary-500 font-semibold hover:underline"
        >
          {{ $t('Forgot Password?') }}
        </NuxtLink>
      </div>

      <VButton
        type="submit"
        color="primary"
        block
        class="mb-5"
      >
        {{ $t('Login') }}
      </VButton>

      <!-- <button
        class="px-3 py-2.5 rounded-md mb-4 font-semibold inline-flex w-full items-center justify-center bg-primary-500 text-white border-primary-500 focus:ring focus:ring-primary-500 focus:ring-offset-1 transition duration-300 hover:bg-primary-600 hover:border-primary-600"
      >
        Login
      </button> -->

      <div class="text-sm text-gray-600">
        {{ $t("Don't have account?") }}
        <NuxtLink
          to="/auth/register"
          class="text-sm text-primary-500 font-semibold hover:underline"
        >
          {{ $t('Register') }}
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
