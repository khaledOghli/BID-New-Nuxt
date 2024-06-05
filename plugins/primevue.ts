import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

// import 'primevue/resources/themes/saga-blue/theme.css'; // or any other theme
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component('Toast', Toast);
});
