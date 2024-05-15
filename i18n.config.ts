import en from './locales/en-US.json'
import ar from './locales/ar-AR.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: { en, ar },
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
}))
