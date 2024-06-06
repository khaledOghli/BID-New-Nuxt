import ar from './locales/ar-AR.json';
import en from './locales/en-US.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: { en, ar },
  globalInjection: true,
  // lazy: true,
  // langDir: 'locales',
  // defaultLocale: 'en',
  fallbackLocale: 'ar',
  // skipSettingLocaleOnNavigate: true,
  // detectBrowserLanguage: {
  //   useCookie: true,
  //   cookieKey: 'i18n_redirected',
  //   redirectOn: 'root',
  // },
  // strategy: 'prefix_and_default',
  // baseUrl: import.meta.env.VITE_BASE_URL,
}));

export function translate(key: string) {
  const { $i18n } = useNuxtApp();
  return $i18n.t(key);
}
