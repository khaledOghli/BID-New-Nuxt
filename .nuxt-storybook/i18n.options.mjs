// @ts-nocheck
import locale__Users_khaledoghli_Work_BID_New_Nuxt_locales_en_US_json from '../locales/en-US.json';
import locale__Users_khaledoghli_Work_BID_New_Nuxt_locales_ar_AR_json from '../locales/ar-AR.json';

export const localeCodes = [
  'en',
  'ar',
];

export const localeLoaders = {
  en: [{ key: '../locales/en-US.json', load: () => Promise.resolve(locale__Users_khaledoghli_Work_BID_New_Nuxt_locales_en_US_json), cache: true }],
  ar: [{ key: '../locales/ar-AR.json', load: () => Promise.resolve(locale__Users_khaledoghli_Work_BID_New_Nuxt_locales_ar_AR_json), cache: true }],
};

export const vueI18nConfigs = [
  () => import('../i18n.config.ts?hash=bffaebcb&config=1' /* webpackChunkName: "__i18n_config_ts_bffaebcb" */),
];

export const nuxtI18nOptions = {
  experimental: {
    localeDetector: '',
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
  },
  compilation: {
    jit: true,
    strictMessage: true,
    escapeHtml: false,
  },
  customBlocks: {
    defaultSFCLang: 'json',
    globalSFCScope: false,
  },
  vueI18n: './i18n.config.ts',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      dir: 'ltr',
      files: [
        'locales/en-US.json',
      ],
    },
    {
      code: 'ar',
      iso: 'ar-AR',
      name: 'Arabic',
      dir: 'rtl',
      files: [
        'locales/ar-AR.json',
      ],
    },
  ],
  defaultLocale: 'en',
  defaultDirection: 'ltr',
  routesNameSeparator: '___',
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: 'default',
  strategy: 'prefix',
  lazy: false,
  langDir: null,
  detectBrowserLanguage: {
    alwaysRedirect: false,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: 'i18n_redirected',
    cookieSecure: false,
    fallbackLocale: '',
    redirectOn: 'root',
    useCookie: true,
  },
  differentDomains: false,
  baseUrl: '',
  dynamicRouteParams: false,
  customRoutes: 'config',
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: 'composition',
  debug: false,
  parallelPlugin: false,
  i18nModules: [],
};

export const normalizedLocales = [
  {
    code: 'en',
    iso: 'en-US',
    name: 'English',
    dir: 'ltr',
    files: [
      {
        path: 'locales/en-US.json',
      },
    ],
  },
  {
    code: 'ar',
    iso: 'ar-AR',
    name: 'Arabic',
    dir: 'rtl',
    files: [
      {
        path: 'locales/ar-AR.json',
      },
    ],
  },
];

export const NUXT_I18N_MODULE_ID = '@nuxtjs/i18n';
export const parallelPlugin = false;
export const isSSG = false;

export const DEFAULT_DYNAMIC_PARAMS_KEY = 'nuxtI18n';
export const DEFAULT_COOKIE_KEY = 'i18n_redirected';
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = 'nuxt-i18n-slp';
