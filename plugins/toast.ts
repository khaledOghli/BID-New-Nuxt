interface ToastOptionsInterface {
  severity: string; // 'error' | 'success' | 'info' | 'warn'
  summary: string;
  detail: string;
  life: number;
  multiple?: boolean;
}

const defaultToastOptions: ToastOptionsInterface = {
  severity: 'error',
  summary: 'Oops...',
  detail: 'Something went wrong! Try again',
  life: 4000,
  multiple: false,
};

export const useToaster = (options: ToastOptionsInterface) => {
  const toastOptions = Object.assign({}, defaultToastOptions, options);
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('useToaster', useToaster);
});
