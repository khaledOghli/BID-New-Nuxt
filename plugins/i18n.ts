async function fetchAndApplyTranslations(lang: any, _i18nSetLocaleMessage: any) {
  try {
    // const translations = await $fetch(`/api/locales?lang=${lang}`);
    // if (translations) {
    //   i18nSetLocaleMessage(lang, translations);
    //   console.log(`Translations loaded for ${lang}`);
    // }
  }
  catch (error) {
    console.error(`Failed to fetch translations for ${lang}:`, error);
  }
}

export default defineNuxtPlugin(async (_nuxtApp) => {
  const { $i18n } = useNuxtApp();
  // onBeforeLanguageSwitch called right before setting a new locale
  $i18n.onBeforeLanguageSwitch = (
    _oldLocale: any,
    _newLocale: any,
    _isInitialSetup: any,
    _nuxtApp: any,
  ) => { };
  $i18n.onLanguageSwitched = (_oldLocale: string, _newLocale: string) => {
    if (window && window.document && document.querySelector('html'))
      document.querySelector('html')?.setAttribute('dir', $i18n.localeProperties.value.dir);
  };
  await fetchAndApplyTranslations($i18n.locale.value, $i18n.setLocaleMessage);
  const $t = (key: string) => $i18n.t(key);
  return {
    $t,
  };
});
