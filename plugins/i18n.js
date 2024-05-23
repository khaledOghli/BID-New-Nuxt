// import { defaultDirection } from
export default defineNuxtPlugin((nuxtApp) => {
  // onBeforeLanguageSwitch called right before setting a new locale
  nuxtApp.$i18n.onBeforeLanguageSwitch = (
    _oldLocale,
    _newLocale,
    _isInitialSetup,
    nuxtApp
  ) => {};
  nuxtApp.$i18n.onLanguageSwitched = (_oldLocale, _newLocale) => {
    document
      .querySelector('html')
      .setAttribute('dir', nuxtApp.$i18n.localeProperties.value.dir);
  };
});
