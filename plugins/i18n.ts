// import { defaultDirection } from

export const fetchAndApplyTranslations = async (lang: any, i18nSetLocaleMessage: any) => {
  debugger;
  try {
    // const translations = await $fetch(`/api/locales?lang=${lang}`);
    // if (translations) {
    //   i18nSetLocaleMessage(lang, translations);
    //   console.log(`Translations loaded for ${lang}`);
    // }
  } catch (error) {
    console.error(`Failed to fetch translations for ${lang}:`, error);
  }
};

export default defineNuxtPlugin(async (nuxtApp) => {
  const { $i18n } = useNuxtApp();
  // onBeforeLanguageSwitch called right before setting a new locale
  $i18n.onBeforeLanguageSwitch = (
    _oldLocale: any,
    _newLocale: any,
    _isInitialSetup: any,
    nuxtApp: any
  ) => {};
  $i18n.onLanguageSwitched = (_oldLocale: string, _newLocale: string) => {
    if (window && window.document && document.querySelector('html')) {
      document.querySelector('html')?.setAttribute('dir', $i18n.localeProperties.value.dir);
    }
  };
  await fetchAndApplyTranslations($i18n.locale.value, $i18n.setLocaleMessage);
});
