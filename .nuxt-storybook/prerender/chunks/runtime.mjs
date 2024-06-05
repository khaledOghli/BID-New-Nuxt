import process from 'node:process'
import { createHash } from 'node:crypto'
import { promises } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createApp, createError, createEvent, createRouter as createRouter$1, defineEventHandler, eventHandler, fetchWithEvent, getQuery as getQuery$1, getRequestHeader, getRequestHeaders, getResponseHeader, getResponseHeaders, handleCacheHeaders, handleCors, isEvent, lazyEventHandler, proxyRequest, readBody, readMultipartFormData, removeResponseHeader, send, sendRedirect, setHeaders, setResponseHeader, setResponseStatus, splitCookiesString, toNodeListener, useBase } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs'
import { Headers as Headers$1, createFetch as createFetch$1 } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs'
import destr from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs'
import { createCall, createFetch } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs'
import { createHooks } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs'
import { klona } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs'
import { snakeCase } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs'
import defu, { createDefu, defuFn } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs'
import { hash } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs'
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs'
import unstorage_47drivers_47fs from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs'
import fsDriver from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs'
import lruCache from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs'
import { createRouter, toRouteMatcher } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs'
import * as vue$1 from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs'
import * as cheerio from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/cheerio@1.0.0-rc.12/node_modules/cheerio/lib/esm/slim.js'
import { dirname, isAbsolute, resolve } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs'
import { FilterXSS } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/xss@1.0.15/node_modules/xss/lib/index.js'
import { createIPX, createIPXH3Handler, ipxFSStorage, ipxHttpStorage } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/ipx@2.1.0_ioredis@5.4.1/node_modules/ipx/dist/index.mjs'

globalThis._importMeta_ = globalThis._importMeta_ || { url: 'file:///_entry.js', env: process.env }

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase()
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey],
  )
}
function _isObject(input) {
  return typeof input === 'object' && !Array.isArray(input)
}
function applyEnv(obj, opts, parentKey = '') {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key
    const envValue = getEnv(subKey, opts)
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue }
        applyEnv(obj[key], opts, subKey)
      }
      else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey)
      }
      else {
        obj[key] = envValue ?? obj[key]
      }
    }
    else {
      obj[key] = envValue ?? obj[key]
    }
    if (opts.envExpansion && typeof obj[key] === 'string')
      obj[key] = _expandFromEnv(obj[key])
  }
  return obj
}
const envExpandRx = /\{\{(.*?)\}\}/g
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match
  })
}

const inlineAppConfig = {
  nuxt: {
    buildId: '4c2f377c-f240-4b94-9700-0e9a0cfce68e',
  },
}

const appConfig = defuFn(inlineAppConfig)

const _inlineRuntimeConfig = {
  'app': {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: '',
  },
  'nitro': {
    envPrefix: 'NUXT_',
    routeRules: {
      '/__nuxt_error': {
        cache: false,
      },
      '/**': {
        headers: {
          'Referrer-Policy': 'no-referrer',
          'Strict-Transport-Security': 'max-age=15552000; includeSubDomains;',
          'X-Content-Type-Options': 'nosniff',
          'X-Download-Options': 'noopen',
          'X-Frame-Options': 'SAMEORIGIN',
          'X-Permitted-Cross-Domain-Policies': 'none',
          'X-XSS-Protection': '0',
        },
      },
      '/_nuxt/builds/meta/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/_nuxt/builds/**': {
        headers: {
          'cache-control': 'public, max-age=1, immutable',
        },
      },
      '/_fonts/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/_scripts/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/_nuxt/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
    },
  },
  'public': {
    'baseUrl': '/',
    'primevue': {
      usePrimeVue: true,
      resolvePath: '',
      cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
      importPT: '',
      options: {
        ripple: true,
      },
      components: [
        {
          name: 'Button',
          as: 'Button',
          from: 'primevue/button',
          export: 'default',
          filePath: 'primevue/button',
          global: true,
        },
      ],
      directives: [
        {
          name: 'badge',
          as: 'BadgeDirective',
          from: 'primevue/badgedirective',
        },
        {
          name: 'tooltip',
          as: 'Tooltip',
          from: 'primevue/tooltip',
        },
        {
          name: 'ripple',
          as: 'Ripple',
          from: 'primevue/ripple',
        },
        {
          name: 'styleclass',
          as: 'StyleClass',
          from: 'primevue/styleclass',
        },
        {
          name: 'focustrap',
          as: 'FocusTrap',
          from: 'primevue/focustrap',
        },
        {
          name: 'animateonscroll',
          as: 'AnimateOnScroll',
          from: 'primevue/animateonscroll',
        },
      ],
      composables: [
        {
          name: 'usePrimeVue',
          as: 'usePrimeVue',
          from: 'primevue/config',
        },
        {
          name: 'useStyle',
          as: 'useStyle',
          from: 'primevue/usestyle',
        },
        {
          name: 'useConfirm',
          as: 'useConfirm',
          from: 'primevue/useconfirm',
        },
        {
          name: 'useToast',
          as: 'useToast',
          from: 'primevue/usetoast',
        },
        {
          name: 'useDialog',
          as: 'useDialog',
          from: 'primevue/usedialog',
        },
      ],
      config: [
        {
          name: 'PrimeVue',
          as: 'PrimeVue',
          from: 'primevue/config',
        },
      ],
      services: [],
      styles: [
        {
          name: 'BaseStyle',
          as: 'BaseStyle',
          from: 'primevue/base/style',
        },
        {
          name: 'BaseComponentStyle',
          as: 'BaseComponentStyle',
          from: 'primevue/basecomponent/style',
        },
        {
          name: 'ButtonStyle',
          as: 'ButtonStyle',
          from: 'primevue/button/style',
        },
        {
          name: 'BadgeDirectiveStyle',
          as: 'BadgeDirectiveStyle',
          from: 'primevue/badgedirective/style',
        },
        {
          name: 'TooltipStyle',
          as: 'TooltipStyle',
          from: 'primevue/tooltip/style',
        },
        {
          name: 'RippleStyle',
          as: 'RippleStyle',
          from: 'primevue/ripple/style',
        },
        {
          name: 'StyleClassStyle',
          as: 'StyleClassStyle',
          from: 'primevue/styleclass/style',
        },
        {
          name: 'FocusTrapStyle',
          as: 'FocusTrapStyle',
          from: 'primevue/focustrap/style',
        },
        {
          name: 'AnimateOnScrollStyle',
          as: 'AnimateOnScrollStyle',
          from: 'primevue/animateonscroll/style',
        },
      ],
      injectStylesAsString: [],
      injectStylesAsStringToTop: [
        '\'<style type="text/css" data-primevue-style-id="layer-order" >@layer tailwind-base, primevue, tailwind-utilities</style>\'',
      ],
    },
    'i18n': {
      baseUrl: '',
      defaultLocale: 'en',
      defaultDirection: 'ltr',
      strategy: 'prefix',
      lazy: false,
      rootRedirect: '',
      routesNameSeparator: '___',
      defaultLocaleRouteNameSuffix: 'default',
      skipSettingLocaleOnNavigate: false,
      differentDomains: false,
      trailingSlash: false,
      configLocales: [
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
      locales: {
        en: {
          domain: '',
        },
        ar: {
          domain: '',
        },
      },
      detectBrowserLanguage: {
        alwaysRedirect: false,
        cookieCrossOrigin: false,
        cookieDomain: '',
        cookieKey: 'i18n_redirected',
        cookieSecure: false,
        fallbackLocale: '',
        redirectOn: 'root',
        useCookie: true,
      },
      experimental: {
        localeDetector: '',
        switchLocalePathLinkSSR: false,
        autoImportTranslationFunctions: false,
      },
    },
    'nuxt-scripts': {
      defaultScriptOptions: {
        trigger: 'onNuxtReady',
      },
    },
    'unlazy': {
      ssr: true,
      placeholderSize: 32,
    },
    'cookieControl': {
      barPosition: 'bottom-full',
      closeModalOnClickOutside: true,
      colors: {
        barBackground: '#000',
        barButtonBackground: '#fff',
        barButtonColor: '#000',
        barButtonHoverBackground: '#333',
        barButtonHoverColor: '#fff',
        barTextColor: '#fff',
        checkboxActiveBackground: '#000',
        checkboxActiveCircleBackground: '#fff',
        checkboxDisabledBackground: '#ddd',
        checkboxDisabledCircleBackground: '#fff',
        checkboxInactiveBackground: '#000',
        checkboxInactiveCircleBackground: '#fff',
        controlButtonBackground: '#fff',
        controlButtonHoverBackground: '#000',
        controlButtonIconColor: '#000',
        controlButtonIconHoverColor: '#fff',
        focusRingColor: '#808080',
        modalBackground: '#fff',
        modalButtonBackground: '#000',
        modalButtonColor: '#fff',
        modalButtonHoverBackground: '#333',
        modalButtonHoverColor: '#fff',
        modalOverlay: '#000',
        modalOverlayOpacity: 0.8,
        modalTextColor: '#000',
        modalUnsavedColor: '#fff',
      },
      cookies: {
        necessary: [],
        optional: [],
      },
      cookieExpiryOffsetMs: 31536000000,
      cookieNameIsConsentGiven: 'ncc_c',
      cookieNameCookiesEnabledIds: 'ncc_e',
      cookieOptions: {
        path: '/',
        sameSite: 'strict',
        secure: '',
      },
      isAcceptNecessaryButtonEnabled: true,
      isControlButtonEnabled: true,
      isCookieIdVisible: true,
      isCssEnabled: false,
      isCssPonyfillEnabled: false,
      isDashInDescriptionEnabled: false,
      isIframeBlocked: false,
      isModalForced: false,
      locales: [
        'en',
        'fr',
        'ar',
        'en',
      ],
      localeTexts: {
        en: {
          accept: 'Accept',
          acceptAll: 'Accept all',
          bannerDescription: 'We use our own cookies and third-party cookies so that we can display this website correctly and better understand how this website is used, with a view to improving the services we offer. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this banner.',
          bannerTitle: 'Cookies',
          close: 'Close',
          cookiesFunctional: 'Functional cookies',
          cookiesNecessary: 'Necessary cookies',
          cookiesOptional: 'Optional cookies',
          decline: 'Decline',
          declineAll: 'Decline all',
          here: 'here',
          iframeBlocked: 'To see this, please enable functional cookies',
          manageCookies: 'Learn more and customize',
          save: 'Save',
          settingsUnsaved: 'You have unsaved settings',
        },
        fr: {
          accept: 'Accepter',
          acceptAll: 'Tout accepter',
          bannerDescription: 'Nous utilisons des cookies d’origine et des cookies tiers. Ces cookies sont destinés à vous offrir une navigation optimisée sur ce site web et de nous donner un aperçu de son utilisation, en vue de l’amélioration des services que nous offrons. En poursuivant votre navigation, nous considérons que vous acceptez l’usage des cookies.',
          bannerTitle: 'Cookies',
          close: 'Fermer',
          cookiesFunctional: 'Cookies fonctionnels',
          cookiesNecessary: 'Les cookies obligatoires',
          cookiesOptional: 'Les cookies optionnels',
          decline: 'J\'accepte le nécessaire',
          declineAll: 'Tout refuser',
          here: 'ici',
          iframeBlocked: 'Pour voir cela, veuillez activer les cookies fonctionnels',
          manageCookies: 'Gérer les cookies',
          save: 'Sauvegarder',
          settingsUnsaved: 'Vous avez des paramètres non sauvegardés',
        },
        ar: {
          accept: 'قبول',
          acceptAll: 'قبول الكل',
          bannerDescription: 'نحن نستخدم ملفات تعريف الارتباط الخاصة بنا وملفات تعريف الارتباط الخاصة بالجهات الخارجية حتى نتمكن من عرض هذا الموقع وفهم كيفية استخدامه بشكل أفضل ، بهدف تحسين الخدمات التي نقدمها. إذا واصلت التصفح ، فإننا نعتبر أنك قبلت ملفات تعريف الارتباط.',
          bannerTitle: 'ملفات تعريف الارتباط',
          close: 'إغلاق',
          cookiesFunctional: 'ملفات تعريف الارتباط الوظيفية',
          cookiesNecessary: 'ملفات تعريف الارتباط الضرورية',
          cookiesOptional: 'ملفات تعريف الارتباط الاختيارية',
          decline: 'تقبل الضرورة',
          declineAll: 'حذف الكل',
          here: 'هنا',
          iframeBlocked: 'لرؤية هذا ، يرجى تمكين ملفات تعريف الارتباط الوظيفية',
          manageCookies: 'إدارة ملفات تعريف الارتباط',
          save: 'حفظ',
          settingsUnsaved: 'لديك إعدادات غير محفوظة',
        },
      },
    },
  },
  'nuxt-scripts': {
    version: '0.4.3',
  },
  'private': {
    basicAuth: false,
  },
  'security': {
    headers: {
      crossOriginResourcePolicy: 'same-origin',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginEmbedderPolicy: 'require-corp',
      contentSecurityPolicy: {
        'base-uri': [
          '\'none\'',
        ],
        'font-src': [
          '\'self\'',
          'https:',
          'data:',
        ],
        'form-action': [
          '\'self\'',
        ],
        'frame-ancestors': [
          '\'self\'',
        ],
        'img-src': [
          '\'self\'',
          'data:',
        ],
        'object-src': [
          '\'none\'',
        ],
        'script-src-attr': [
          '\'none\'',
        ],
        'style-src': [
          '\'self\'',
          'https:',
          '\'unsafe-inline\'',
        ],
        'script-src': [
          '\'self\'',
          'https:',
          '\'unsafe-inline\'',
          '\'strict-dynamic\'',
          '\'nonce-{{nonce}}\'',
        ],
        'upgrade-insecure-requests': true,
      },
      originAgentCluster: '?1',
      referrerPolicy: 'no-referrer',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'SAMEORIGIN',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '0',
      permissionsPolicy: {
        'camera': [],
        'display-capture': [],
        'fullscreen': [],
        'geolocation': [],
        'microphone': [],
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
      throwError: true,
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000,
      headers: false,
      driver: {
        name: 'lruCache',
      },
      throwError: true,
    },
    xssValidator: {
      methods: [
        'GET',
        'POST',
      ],
      throwError: true,
    },
    corsHandler: {
      origin: 'http://localhost:3000',
      methods: [
        'GET',
        'HEAD',
        'PUT',
        'PATCH',
        'POST',
        'DELETE',
      ],
      preflight: {
        statusCode: 204,
      },
    },
    allowedMethodsRestricter: {
      methods: '*',
      throwError: true,
    },
    hidePoweredBy: true,
    enabled: true,
    csrf: false,
    nonce: true,
    removeLoggers: {
      external: [],
      consoleType: [
        'log',
        'debug',
      ],
      include: [
        {},
        {},
      ],
      exclude: [
        {},
        {},
      ],
    },
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true,
    },
    sri: true,
  },
  'ipx': {
    baseURL: '/_ipx',
    alias: {},
    fs: {
      dir: [
        '/Users/khaledoghli/Work/BID-New-Nuxt/public',
        '/Users/khaledoghli/Work/BID-New-Nuxt/UI/public',
        '/Users/khaledoghli/Work/BID-New-Nuxt/apps/landing/public',
        '/Users/khaledoghli/Work/BID-New-Nuxt/apps/dashboard/public',
        '/Users/khaledoghli/Work/BID-New-Nuxt/apps/auth/public',
      ],
    },
    http: {
      domains: [],
    },
  },
}
const envOptions = {
  prefix: 'NITRO_',
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? '_',
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false,
}
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions),
)
function useRuntimeConfig(event) {
  if (!event)
    return _sharedRuntimeConfig

  if (event.context.nitro.runtimeConfig)
    return event.context.nitro.runtimeConfig

  const runtimeConfig = klona(_inlineRuntimeConfig)
  applyEnv(runtimeConfig, envOptions)
  event.context.nitro.runtimeConfig = runtimeConfig
  return runtimeConfig
}
_deepFreeze(klona(appConfig))
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object)
  for (const name of propNames) {
    const value = object[name]
    if (value && typeof value === 'object')
      _deepFreeze(value)
  }
  return Object.freeze(object)
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      'Please use `useRuntimeConfig()` instead of accessing config directly.',
    )
    const runtimeConfig = useRuntimeConfig()
    if (prop in runtimeConfig)
      return runtimeConfig[prop]

    return void 0
  },
})

const HASH_RE = /#/g
const AMPERSAND_RE = /&/g
const SLASH_RE = /\//g
const EQUAL_RE = /=/g
const PLUS_RE = /\+/g
const ENC_CARET_RE = /%5e/gi
const ENC_BACKTICK_RE = /%60/g
const ENC_PIPE_RE = /%7c/gi
const ENC_SPACE_RE = /%20/g
const ENC_SLASH_RE = /%2f/gi
function encode(text) {
  return encodeURI(`${text}`).replace(ENC_PIPE_RE, '|')
}
function encodeQueryValue(input) {
  return encode(typeof input === 'string' ? input : JSON.stringify(input)).replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CARET_RE, '^').replace(SLASH_RE, '%2F')
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D')
}
function decode(text = '') {
  try {
    return decodeURIComponent(`${text}`)
  }
  catch {
    return `${text}`
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, '%252F'))
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, ' '))
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, ' '))
}

function parseQuery(parametersString = '') {
  const object = {}
  if (parametersString[0] === '?')
    parametersString = parametersString.slice(1)

  for (const parameter of parametersString.split('&')) {
    const s = parameter.match(/([^=]+)=?(.*)/) || []
    if (s.length < 2)
      continue

    const key = decodeQueryKey(s[1])
    if (key === '__proto__' || key === 'constructor')
      continue

    const value = decodeQueryValue(s[2] || '')
    if (object[key] === void 0)
      object[key] = value
    else if (Array.isArray(object[key]))
      object[key].push(value)
    else
      object[key] = [object[key], value]
  }
  return object
}
function encodeQueryItem(key, value) {
  if (typeof value === 'number' || typeof value === 'boolean')
    value = String(value)

  if (!value)
    return encodeQueryKey(key)

  if (Array.isArray(value))
    return value.map(_value => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join('&')

  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`
}
function stringifyQuery(query) {
  return Object.keys(query).filter(k => query[k] !== void 0).map(k => encodeQueryItem(k, query[k])).filter(Boolean).join('&')
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/
const JOIN_LEADING_SLASH_RE = /^\.?\//
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === 'boolean')
    opts = { acceptRelative: opts }

  if (opts.strict)
    return PROTOCOL_STRICT_REGEX.test(inputString)

  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false)
}
function hasTrailingSlash(input = '', respectQueryAndFragment) {
  {
    return input.endsWith('/')
  }
}
function withoutTrailingSlash(input = '', respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || '/'
  }
}
function withTrailingSlash(input = '', respectQueryAndFragment) {
  {
    return input.endsWith('/') ? input : `${input}/`
  }
}
function hasLeadingSlash(input = '') {
  return input.startsWith('/')
}
function withLeadingSlash(input = '') {
  return hasLeadingSlash(input) ? input : `/${input}`
}
function withoutBase(input, base) {
  if (isEmptyURL(base))
    return input

  const _base = withoutTrailingSlash(base)
  if (!input.startsWith(_base))
    return input

  const trimmed = input.slice(_base.length)
  return trimmed[0] === '/' ? trimmed : `/${trimmed}`
}
function withQuery(input, query) {
  const parsed = parseURL(input)
  const mergedQuery = { ...parseQuery(parsed.search), ...query }
  parsed.search = stringifyQuery(mergedQuery)
  return stringifyParsedURL(parsed)
}
function getQuery(input) {
  return parseQuery(parseURL(input).search)
}
function isEmptyURL(url) {
  return !url || url === '/'
}
function isNonEmptyURL(url) {
  return url && url !== '/'
}
function joinURL(base, ...input) {
  let url = base || ''
  for (const segment of input.filter(url2 => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, '')
      url = withTrailingSlash(url) + _segment
    }
    else {
      url = segment
    }
  }
  return url
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/
  const input = _input.filter(Boolean)
  const segments = []
  let segmentsDepth = 0
  for (const i of input) {
    if (!i || i === '/')
      continue

    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === '.')
        continue

      if (s === '..') {
        if (segments.length === 1 && hasProtocol(segments[0]))
          continue

        segments.pop()
        segmentsDepth--
        continue
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(':/')) {
        segments[segments.length - 1] += `/${s}`
        continue
      }
      segments.push(s)
      segmentsDepth++
    }
  }
  let url = segments.join('/')
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith('/') && !url.startsWith('/'))
      url = `/${url}`
    else if (input[0]?.startsWith('./') && !url.startsWith('./'))
      url = `./${url}`
  }
  else {
    url = '../'.repeat(-1 * segmentsDepth) + url
  }
  if (input[input.length - 1]?.endsWith('/') && !url.endsWith('/'))
    url += '/'

  return url
}

const protocolRelative = Symbol.for('ufo:protocolRelative')
function parseURL(input = '', defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i,
  )
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ''] = _specialProtoMatch
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: '',
      host: '',
      search: '',
      hash: '',
    }
  }
  if (!hasProtocol(input, { acceptRelative: true }))
    return parsePath(input)

  const [, protocol = '', auth, hostAndPath = ''] = input.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
  const [, host = '', path = ''] = hostAndPath.match(/([^#/?]*)(.*)?/) || []
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Z]:)/i, ''),
  )
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : '',
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol,
  }
}
function parsePath(input = '') {
  const [pathname = '', search = '', hash = ''] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1)
  return {
    pathname,
    search,
    hash,
  }
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || ''
  const search = parsed.search ? (parsed.search.startsWith('?') ? '' : '?') + parsed.search : ''
  const hash = parsed.hash || ''
  const auth = parsed.auth ? `${parsed.auth}@` : ''
  const host = parsed.host || ''
  const proto = parsed.protocol || parsed[protocolRelative] ? `${parsed.protocol || ''}//` : ''
  return proto + auth + host + pathname + search + hash
}

const serverAssets = [{ baseName: 'server', dir: '/Users/khaledoghli/Work/BID-New-Nuxt/server/assets' }]

const assets$1 = createStorage()

for (const asset of serverAssets)
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }))

const normalizeFsKey = item => item.replaceAll(':', '_')
const _47Users_47khaledoghli_47Work_47BID_45New_45Nuxt_47node_modules_47_46pnpm_47nuxt_643_4611_462__64opentelemetry_43api_641_468_460__64parcel_43watcher_642_464_461__64types_43node_6420_4612_4612__64unocss_43reset_h7mcoc2ebmazgsca6qpbz5rcxi_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base })
  const lru = lruCache({ max: 1e3 })
  return {
    ...fs,
    // fall back to file system - only the bottom three methods are used in renderer
    async setItem(key, value, opts2) {
      await Promise.all([
        fs.setItem(normalizeFsKey(key), value, opts2),
        lru.setItem(key, value, opts2),
      ])
    },
    async hasItem(key, opts2) {
      return await lru.hasItem(key, opts2) || await fs.hasItem(normalizeFsKey(key), opts2)
    },
    async getItem(key, opts2) {
      return await lru.getItem(key, opts2) || await fs.getItem(normalizeFsKey(key), opts2)
    },
  }
})

const storage = createStorage({})

storage.mount('/assets', assets$1)

storage.mount('internal:nuxt:prerender', _47Users_47khaledoghli_47Work_47BID_45New_45Nuxt_47node_modules_47_46pnpm_47nuxt_643_4611_462__64opentelemetry_43api_641_468_460__64parcel_43watcher_642_464_461__64types_43node_6420_4612_4612__64unocss_43reset_h7mcoc2ebmazgsca6qpbz5rcxi_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({ driver: '/Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12.12_@unocss+reset_h7mcoc2ebmazgsca6qpbz5rcxi/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js', base: '/Users/khaledoghli/Work/BID-New-Nuxt/.nuxt-storybook/cache/nitro/prerender' }))
storage.mount('#rate-limiter-storage', lruCache({ driver: 'lruCache' }))
storage.mount('data', fsDriver({ driver: 'fsLite', base: '/Users/khaledoghli/Work/BID-New-Nuxt/.data/kv' }))
storage.mount('root', unstorage_47drivers_47fs({ driver: 'fs', readOnly: true, base: '/Users/khaledoghli/Work/BID-New-Nuxt', ignore: ['**/node_modules/**', '**/.git/**'] }))
storage.mount('src', unstorage_47drivers_47fs({ driver: 'fs', readOnly: true, base: '/Users/khaledoghli/Work/BID-New-Nuxt/server', ignore: ['**/node_modules/**', '**/.git/**'] }))
storage.mount('build', unstorage_47drivers_47fs({ driver: 'fs', readOnly: false, base: '/Users/khaledoghli/Work/BID-New-Nuxt/.nuxt-storybook', ignore: ['**/node_modules/**', '**/.git/**'] }))
storage.mount('cache', unstorage_47drivers_47fs({ driver: 'fs', readOnly: false, base: '/Users/khaledoghli/Work/BID-New-Nuxt/.nuxt-storybook/cache', ignore: ['**/node_modules/**', '**/.git/**'] }))

function useStorage(base = '') {
  return base ? prefixStorage(storage, base) : storage
}

const defaultCacheOptions = {
  name: '_',
  base: '/cache',
  swr: true,
  maxAge: 1,
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts }
  const pending = {}
  const group = opts.group || 'nitro/functions'
  const name = opts.name || fn.name || '_'
  const integrity = opts.integrity || hash([fn, opts])
  const validate = opts.validate || (entry => entry.value !== void 0)
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, `${key}.json`].filter(Boolean).join(':').replace(/:\/$/, ':index')
    let entry = await useStorage().getItem(cacheKey) || {}
    if (typeof entry !== 'object') {
      entry = {}
      const error = new Error('Malformed data read from cache.')
      console.error('[nitro] [cache]', error)
      useNitroApp().captureError(error, { event, tags: ['cache'] })
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3
    if (ttl)
      entry.expires = Date.now() + ttl

    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false
    const _resolve = async () => {
      const isPending = pending[key]
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0
          entry.integrity = void 0
          entry.mtime = void 0
          entry.expires = void 0
        }
        pending[key] = Promise.resolve(resolver())
      }
      try {
        entry.value = await pending[key]
      }
      catch (error) {
        if (!isPending)
          delete pending[key]

        throw error
      }
      if (!isPending) {
        entry.mtime = Date.now()
        entry.integrity = integrity
        delete pending[key]
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error('[nitro] [cache] Cache write error.', error)
            useNitroApp().captureError(error, { event, tags: ['cache'] })
          })
          if (event && event.waitUntil)
            event.waitUntil(promise)
        }
      }
    }
    const _resolvePromise = expired ? _resolve() : Promise.resolve()
    if (entry.value === void 0)
      await _resolvePromise
    else if (expired && event && event.waitUntil)
      event.waitUntil(_resolvePromise)

    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error('[nitro] [cache] SWR handler error.', error)
        useNitroApp().captureError(error, { event, tags: ['cache'] })
      })
      return entry
    }
    return _resolvePromise.then(() => entry)
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args)
    if (shouldBypassCache)
      return fn(...args)

    const key = await (opts.getKey || getKey)(...args)
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args)
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0,
    )
    let value = entry.value
    if (opts.transform)
      value = await opts.transform(entry, ...args) || value

    return value
  }
}
const cachedFunction = defineCachedFunction
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : ''
}
function escapeKey(key) {
  return String(key).replace(/\W/g, '')
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map(h => h.toLowerCase()).sort()
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event)
      if (customKey)
        return escapeKey(customKey)

      const _path = event.node.req.originalUrl || event.node.req.url || event.path
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || 'index'
      const _hashedPath = `${_pathname}.${hash(_path)}`
      const _headers = variableHeaderNames.map(header => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`)
      return [_hashedPath, ..._headers].join(':')
    },
    validate: (entry) => {
      if (!entry.value)
        return false

      if (entry.value.code >= 400)
        return false

      if (entry.value.body === void 0)
        return false

      if (entry.value.headers.etag === 'undefined' || entry.value.headers['last-modified'] === 'undefined')
        return false

      return true
    },
    group: opts.group || 'nitro/handlers',
    integrity: opts.integrity || hash([handler, opts]),
  }
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {}
      for (const header of variableHeaderNames)
        variableHeaders[header] = incomingEvent.node.req.headers[header]

      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders,
      })
      const resHeaders = {}
      let _resSendBody
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name]
        },
        setHeader(name, value) {
          resHeaders[name] = value
          return this
        },
        getHeaderNames() {
          return Object.keys(resHeaders)
        },
        hasHeader(name) {
          return name in resHeaders
        },
        removeHeader(name) {
          delete resHeaders[name]
        },
        getHeaders() {
          return resHeaders
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === 'string')
            _resSendBody = chunk

          if (typeof arg2 === 'function')
            arg2()

          if (typeof arg3 === 'function')
            arg3()

          return this
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === 'string')
            _resSendBody = chunk

          if (typeof arg2 === 'function')
            arg2()

          if (typeof arg3 === 'function')
            arg3()

          return this
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode
          if (headers2) {
            for (const header in headers2)
              this.setHeader(header, headers2[header])
          }
          return this
        },
      })
      const event = createEvent(reqProxy, resProxy)
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch,
      })
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch,
      })
      event.context = incomingEvent.context
      const body = await handler(event) || _resSendBody
      const headers = event.node.res.getHeaders()
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`,
      )
      headers['last-modified'] = String(
        headers['Last-Modified'] || headers['last-modified'] || (/* @__PURE__ */ new Date()).toUTCString(),
      )
      const cacheControl = []
      if (opts.swr) {
        if (opts.maxAge)
          cacheControl.push(`s-maxage=${opts.maxAge}`)

        if (opts.staleMaxAge)
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`)
        else
          cacheControl.push('stale-while-revalidate')
      }
      else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`)
      }
      if (cacheControl.length > 0)
        headers['cache-control'] = cacheControl.join(', ')

      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body,
      }
      return cacheEntry
    },
    _opts,
  )
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge }))
        return

      return handler(event)
    }
    const response = await _cachedHandler(event)
    if (event.node.res.headersSent || event.node.res.writableEnded)
      return response.body

    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers['last-modified']),
      etag: response.headers.etag,
      maxAge: opts.maxAge,
    }))
      return

    event.node.res.statusCode = response.code
    for (const name in response.headers) {
      const value = response.headers[name]
      if (name === 'set-cookie') {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value),
        )
      }
      else {
        event.node.res.setHeader(name, value)
      }
    }
    return response.body
  })
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides)
        return overrides[property]

      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value
        return true
      }
      return Reflect.set(target, property, value, receiver)
    },
  })
}
const cachedEventHandler = defineCachedEventHandler

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name)
  return value && typeof value === 'string' && value.toLowerCase().includes(includes)
}
function isJsonRequest(event) {
  if (hasReqHeader(event, 'accept', 'text/html'))
    return false

  return hasReqHeader(event, 'accept', 'application/json') || hasReqHeader(event, 'user-agent', 'curl/') || hasReqHeader(event, 'user-agent', 'httpie/') || hasReqHeader(event, 'sec-fetch-mode', 'cors') || event.path.startsWith('/api/') || event.path.endsWith('.json')
}
function normalizeError(error) {
  const cwd = typeof process.cwd === 'function' ? process.cwd() : '/'
  const stack = (error.stack || '').split('\n').splice(1).filter(line => line.includes('at ')).map((line) => {
    const text = line.replace(`${cwd}/`, './').replace('webpack:/', '').replace('file://', '').trim()
    return {
      text,
      internal: line.includes('node_modules') && !line.includes('.cache') || line.includes('internal') || line.includes('new Promise'),
    }
  })
  const statusCode = error.statusCode || 500
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? 'Not Found' : '')
  const message = error.message || error.toString()
  return {
    stack,
    statusCode,
    statusMessage,
    message,
  }
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error)
  useNitroApp().captureError(error, { tags: [type] })
}
function trapUnhandledNodeErrors() {
  process.on(
    'unhandledRejection',
    error => _captureError(error, 'unhandledRejection'),
  )
  process.on(
    'uncaughtException',
    error => _captureError(error, 'uncaughtException'),
  )
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(', ') : String(value)
}
function normalizeFetchResponse(response) {
  if (!response.headers.has('set-cookie'))
    return response

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers),
  })
}
function normalizeCookieHeader(header = '') {
  return splitCookiesString(joinHeaders(header))
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers()
  for (const [name, header] of headers) {
    if (name === 'set-cookie') {
      for (const cookie of normalizeCookieHeader(header))
        outgoingHeaders.append('set-cookie', cookie)
    }
    else {
      outgoingHeaders.set(name, joinHeaders(header))
    }
  }
  return outgoingHeaders
}

const config = useRuntimeConfig()
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules }),
)
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event)
    if (routeRules.headers)
      setHeaders(event, routeRules.headers)

    if (routeRules.redirect) {
      let target = routeRules.redirect.to
      if (target.endsWith('/**')) {
        let targetPath = event.path
        const strpBase = routeRules.redirect._redirectStripBase
        if (strpBase)
          targetPath = withoutBase(targetPath, strpBase)

        target = joinURL(target.slice(0, -3), targetPath)
      }
      else if (event.path.includes('?')) {
        const query = getQuery(event.path)
        target = withQuery(target, query)
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode)
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to
      if (target.endsWith('/**')) {
        let targetPath = event.path
        const strpBase = routeRules.proxy._proxyStripBase
        if (strpBase)
          targetPath = withoutBase(targetPath, strpBase)

        target = joinURL(target.slice(0, -3), targetPath)
      }
      else if (event.path.includes('?')) {
        const query = getQuery(event.path)
        target = withQuery(target, query)
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy,
      })
    }
  })
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {}
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split('?')[0], useRuntimeConfig().app.baseURL),
    )
  }
  return event.context._nitro.routeRules
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse())
}

const script = '"use strict";(()=>{const a=window,e=document.documentElement,c=window.localStorage,d=["dark","light"],n=c&&c.getItem&&c.getItem("nuxt-color-mode")||"system";let l=n==="system"?f():n;const i=e.getAttribute("data-color-mode-forced");i&&(l=i),r(l),a["__NUXT_COLOR_MODE__"]={preference:n,value:l,getColorScheme:f,addColorScheme:r,removeColorScheme:u};function r(o){const t=""+o+"",s="";e.classList?e.classList.add(t):e.className+=" "+t,s&&e.setAttribute("data-"+s,o)}function u(o){const t=""+o+"",s="";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,"g"),""),s&&e.removeAttribute("data-"+s)}function m(o){return a.matchMedia("(prefers-color-scheme"+o+")")}function f(){if(a.matchMedia&&m("").media!=="not all"){for(const o of d)if(m(":"+o).matches)return o}return"light"}})();\n'

const _E4a0OKWfBp = function (nitro) {
  nitro.hooks.hook('render:html', (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`)
  })
}

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x
}

function getDefaultExportFromNamespaceIfNotNamed(n) {
  return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n.default : n
}

const usestyle_cjs = {}

const utils_cjs = {}

Object.defineProperty(utils_cjs, '__esModule', { value: true })

function _createForOfIteratorHelper$1(o, allowArrayLike) {
  let it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator']; if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike) {
      if (it)
        o = it; let i = 0; const F = function F() {}; return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true }; return { done: false, value: o[i++] }
      }, e: function e(_e) { throw _e }, f: F }
    } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
  } let normalCompletion = true; let didErr = false; let err; return { s: function s() { it = it.call(o) }, n: function n() { const step = it.next(); normalCompletion = step.done; return step }, e: function e(_e2) { didErr = true; err = _e2 }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return()
    }
    finally {
      if (didErr)
        throw err
    }
  } }
}
function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$3() }
function _nonIterableSpread$3() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _iterableToArray$3(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter)
}
function _arrayWithoutHoles$3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$3(arr)
}
function _typeof$3$1(o) { '@babel/helpers - typeof'; return _typeof$3$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$3$1(o) }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$1() }
function _nonIterableRest$1() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o)
    return; if (typeof o === 'string')
    return _arrayLikeToArray$3(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor)
    n = o.constructor.name; if (n === 'Map' || n === 'Set')
    return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen)
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2
}
function _iterableToArrayLimit$1(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) {
    let e; let n; let i; let u; const a = []; let f = !0; let o = !1; try {
      if (i = (t = t.call(r)).next, l === 0)
      ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    }
    catch (r) { o = !0, n = r }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return
      }
      finally {
        if (o)
          throw n
      }
    } return a
  }
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr
}
const DomHandler = {
  innerWidth: function innerWidth(el) {
    if (el) {
      let width = el.offsetWidth
      const style = getComputedStyle(el)
      width += Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight)
      return width
    }
    return 0
  },
  width: function width(el) {
    if (el) {
      let width = el.offsetWidth
      const style = getComputedStyle(el)
      width -= Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight)
      return width
    }
    return 0
  },
  getWindowScrollTop: function getWindowScrollTop() {
    const doc = document.documentElement
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    const doc = document.documentElement
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
  },
  getOuterWidth: function getOuterWidth(el, margin) {
    if (el) {
      let width = el.offsetWidth
      if (margin) {
        const style = getComputedStyle(el)
        width += Number.parseFloat(style.marginLeft) + Number.parseFloat(style.marginRight)
      }
      return width
    }
    return 0
  },
  getOuterHeight: function getOuterHeight(el, margin) {
    if (el) {
      let height = el.offsetHeight
      if (margin) {
        const style = getComputedStyle(el)
        height += Number.parseFloat(style.marginTop) + Number.parseFloat(style.marginBottom)
      }
      return height
    }
    return 0
  },
  getClientHeight: function getClientHeight(el, margin) {
    if (el) {
      let height = el.clientHeight
      if (margin) {
        const style = getComputedStyle(el)
        height += Number.parseFloat(style.marginTop) + Number.parseFloat(style.marginBottom)
      }
      return height
    }
    return 0
  },
  getViewport: function getViewport() {
    const win = window
    const d = document
    const e = d.documentElement
    const g = d.getElementsByTagName('body')[0]
    const w = win.innerWidth || e.clientWidth || g.clientWidth
    const h = win.innerHeight || e.clientHeight || g.clientHeight
    return {
      width: w,
      height: h,
    }
  },
  getOffset: function getOffset(el) {
    if (el) {
      const rect = el.getBoundingClientRect()
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
      }
    }
    return {
      top: 'auto',
      left: 'auto',
    }
  },
  index: function index(element) {
    if (element) {
      let _this$getParentNode
      const children = (_this$getParentNode = this.getParentNode(element)) === null || _this$getParentNode === void 0 ? void 0 : _this$getParentNode.childNodes
      let num = 0
      for (let i = 0; i < children.length; i++) {
        if (children[i] === element)
          return num
        if (children[i].nodeType === 1)
          num++
      }
    }
    return -1
  },
  addMultipleClasses: function addMultipleClasses(element, classNames) {
    const _this = this
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => {
        return cNames.split(' ').forEach((className) => {
          return _this.addClass(element, className)
        })
      })
    }
  },
  removeMultipleClasses: function removeMultipleClasses(element, classNames) {
    const _this2 = this
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => {
        return cNames.split(' ').forEach((className) => {
          return _this2.removeClass(element, className)
        })
      })
    }
  },
  addClass: function addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList)
        element.classList.add(className); else element.className += ` ${className}`
    }
  },
  removeClass: function removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className); else element.className = element.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ')
    }
  },
  hasClass: function hasClass(element, className) {
    if (element) {
      if (element.classList)
        return element.classList.contains(className); else return new RegExp(`(^| )${className}( |$)`, 'gi').test(element.className)
    }

    return false
  },
  addStyles: function addStyles(element) {
    const styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    if (element) {
      Object.entries(styles).forEach((_ref) => {
        const _ref2 = _slicedToArray$1(_ref, 2)
        const key = _ref2[0]
        const value = _ref2[1]
        return element.style[key] = value
      })
    }
  },
  find: function find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : []
  },
  findSingle: function findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null
  },
  createElement: function createElement(type) {
    const attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    if (type) {
      const element = document.createElement(type)
      this.setAttributes(element, attributes)
      for (var _len = arguments.length, children = Array.from({ length: _len > 2 ? _len - 2 : 0 }), _key = 2; _key < _len; _key++)
        children[_key - 2] = arguments[_key]

      element.append.apply(element, children)
      return element
    }
    return undefined
  },
  setAttribute: function setAttribute(element) {
    const attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    const value = arguments.length > 2 ? arguments[2] : undefined
    if (this.isElement(element) && value !== null && value !== undefined)
      element.setAttribute(attribute, value)
  },
  setAttributes: function setAttributes(element) {
    const _this3 = this
    const attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    if (this.isElement(element)) {
      const computedStyles = function computedStyles(rule, value) {
        let _element$$attrs, _element$$attrs2
        const styles = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : []
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== undefined) {
            const type = _typeof$3$1(v)
            if (type === 'string' || type === 'number') {
              cv.push(v)
            }
            else if (type === 'object') {
              const _cv = Array.isArray(v)
                ? computedStyles(rule, v)
                : Object.entries(v).map((_ref3) => {
                  const _ref4 = _slicedToArray$1(_ref3, 2)
                  const _k = _ref4[0]
                  const _v = _ref4[1]
                  return rule === 'style' && (!!_v || _v === 0) ? ''.concat(_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), ':').concat(_v) : _v ? _k : undefined
                })
              cv = _cv.length
                ? cv.concat(_cv.filter((c) => {
                  return !!c
                }))
                : cv
            }
          }
          return cv
        }, styles)
      }
      Object.entries(attributes).forEach((_ref5) => {
        const _ref6 = _slicedToArray$1(_ref5, 2)
        const key = _ref6[0]
        let value = _ref6[1]
        if (value !== undefined && value !== null) {
          const matchedEvent = key.match(/^on(.+)/)
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value)
          }
          else if (key === 'p-bind') {
            _this3.setAttributes(element, value)
          }
          else {
            value = key === 'class' ? _toConsumableArray$3(new Set(computedStyles('class', value))).join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value)
            element.setAttribute(key, value)
          }
        }
      })
    }
  },
  getAttribute: function getAttribute(element, name) {
    if (this.isElement(element)) {
      const value = element.getAttribute(name)
      if (!isNaN(value))
        return +value

      if (value === 'true' || value === 'false')
        return value === 'true'

      return value
    }
    return undefined
  },
  isAttributeEquals: function isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false
  },
  isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value)
  },
  getHeight: function getHeight(el) {
    if (el) {
      let height = el.offsetHeight
      const style = getComputedStyle(el)
      height -= Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom) + Number.parseFloat(style.borderTopWidth) + Number.parseFloat(style.borderBottomWidth)
      return height
    }
    return 0
  },
  getWidth: function getWidth(el) {
    if (el) {
      let width = el.offsetWidth
      const style = getComputedStyle(el)
      width -= Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight) + Number.parseFloat(style.borderLeftWidth) + Number.parseFloat(style.borderRightWidth)
      return width
    }
    return 0
  },
  absolutePosition: function absolutePosition(element, target) {
    const gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true
    if (element) {
      const elementDimensions = element.offsetParent
        ? {
            width: element.offsetWidth,
            height: element.offsetHeight,
          }
        : this.getHiddenElementDimensions(element)
      const elementOuterHeight = elementDimensions.height
      const elementOuterWidth = elementDimensions.width
      const targetOuterHeight = target.offsetHeight
      const targetOuterWidth = target.offsetWidth
      const targetOffset = target.getBoundingClientRect()
      const windowScrollTop = this.getWindowScrollTop()
      const windowScrollLeft = this.getWindowScrollLeft()
      const viewport = this.getViewport()
      let top
      let left
      let origin = 'top'
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight
        origin = 'bottom'
        if (top < 0)
          top = windowScrollTop
      }
      else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop
      }
      if (targetOffset.left + elementOuterWidth > viewport.width)
        left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth); else left = targetOffset.left + windowScrollLeft
      element.style.top = `${top}px`
      element.style.left = `${left}px`
      element.style.transformOrigin = origin
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))')
    }
  },
  relativePosition: function relativePosition(element, target) {
    const gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true
    if (element) {
      const elementDimensions = element.offsetParent
        ? {
            width: element.offsetWidth,
            height: element.offsetHeight,
          }
        : this.getHiddenElementDimensions(element)
      const targetHeight = target.offsetHeight
      const targetOffset = target.getBoundingClientRect()
      const viewport = this.getViewport()
      let top
      let left
      let origin = 'top'
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height
        origin = 'bottom'
        if (targetOffset.top + top < 0)
          top = -1 * targetOffset.top
      }
      else {
        top = targetHeight
      }
      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1
      }
      else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1
      }
      else {
        // element fits on screen (align with target)
        left = 0
      }
      element.style.top = `${top}px`
      element.style.left = `${left}px`
      element.style.transformOrigin = origin
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))')
    }
  },
  nestedPosition: function nestedPosition(element, level) {
    if (element) {
      const parentItem = element.parentElement
      const elementOffset = this.getOffset(parentItem)
      const viewport = this.getViewport()
      const sublistWidth = element.offsetParent ? element.offsetWidth : this.getHiddenElementOuterWidth(element)
      const itemOuterWidth = this.getOuterWidth(parentItem.children[0])
      let left
      if (Number.parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - this.calculateScrollbarWidth()) {
        if (Number.parseInt(elementOffset.left, 10) < sublistWidth) {
          // for too small screens
          if (level % 2 === 1)
            left = Number.parseInt(elementOffset.left, 10) ? `-${Number.parseInt(elementOffset.left, 10)}px` : '100%'
          else if (level % 2 === 0)
            left = `${viewport.width - sublistWidth - this.calculateScrollbarWidth()}px`
        }
        else {
          left = '-100%'
        }
      }
      else {
        left = '100%'
      }
      element.style.top = '0px'
      element.style.left = left
    }
  },
  getParentNode: function getParentNode(element) {
    let parent = element === null || element === void 0 ? void 0 : element.parentNode
    if (parent && parent instanceof ShadowRoot && parent.host)
      parent = parent.host

    return parent
  },
  getParents: function getParents(element) {
    const parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
    const parent = this.getParentNode(element)
    return parent === null ? parents : this.getParents(parent, parents.concat([parent]))
  },
  getScrollableParents: function getScrollableParents(element) {
    const scrollableParents = []
    if (element) {
      const parents = this.getParents(element)
      const overflowRegex = /(auto|scroll)/
      const overflowCheck = function overflowCheck(node) {
        try {
          const styleDeclaration = window.getComputedStyle(node, null)
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'))
        }
        catch (err) {
          return false
        }
      }
      const _iterator = _createForOfIteratorHelper$1(parents)
      let _step
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const parent = _step.value
          const scrollSelectors = parent.nodeType === 1 && parent.dataset.scrollselectors
          if (scrollSelectors) {
            const selectors = scrollSelectors.split(',')
            const _iterator2 = _createForOfIteratorHelper$1(selectors)
            var _step2
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                const selector = _step2.value
                const el = this.findSingle(parent, selector)
                if (el && overflowCheck(el))
                  scrollableParents.push(el)
              }
            }
            catch (err) {
              _iterator2.e(err)
            }
            finally {
              _iterator2.f()
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent))
            scrollableParents.push(parent)
        }
      }
      catch (err) {
        _iterator.e(err)
      }
      finally {
        _iterator.f()
      }
    }
    return scrollableParents
  },
  getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = 'hidden'
      element.style.display = 'block'
      const elementHeight = element.offsetHeight
      element.style.display = 'none'
      element.style.visibility = 'visible'
      return elementHeight
    }
    return 0
  },
  getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = 'hidden'
      element.style.display = 'block'
      const elementWidth = element.offsetWidth
      element.style.display = 'none'
      element.style.visibility = 'visible'
      return elementWidth
    }
    return 0
  },
  getHiddenElementDimensions: function getHiddenElementDimensions(element) {
    if (element) {
      const dimensions = {}
      element.style.visibility = 'hidden'
      element.style.display = 'block'
      dimensions.width = element.offsetWidth
      dimensions.height = element.offsetHeight
      element.style.display = 'none'
      element.style.visibility = 'visible'
      return dimensions
    }
    return 0
  },
  fadeIn: function fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0
      let last = +new Date()
      let opacity = 0
      const tick = function tick() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration
        element.style.opacity = opacity
        last = +new Date()
        if (+opacity < 1)
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16)
      }
      tick()
    }
  },
  fadeOut: function fadeOut(element, ms) {
    if (element) {
      let opacity = 1
      const interval = 50
      const duration = ms
      const gap = interval / duration
      var fading = setInterval(() => {
        opacity -= gap
        if (opacity <= 0) {
          opacity = 0
          clearInterval(fading)
        }
        element.style.opacity = opacity
      }, interval)
    }
  },
  getUserAgent: function getUserAgent() {
    return navigator.userAgent
  },
  appendChild: function appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element); else if (target.el && target.elElement)
      target.elElement.appendChild(element); else throw new Error(`Cannot append ${target} to ${element}`)
  },
  isElement: function isElement(obj) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof$3$1(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && _typeof$3$1(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string'
  },
  scrollInView: function scrollInView(container, item) {
    const borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth')
    const borderTop = borderTopValue ? Number.parseFloat(borderTopValue) : 0
    const paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop')
    const paddingTop = paddingTopValue ? Number.parseFloat(paddingTopValue) : 0
    const containerRect = container.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    const offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop
    const scroll = container.scrollTop
    const elementHeight = container.clientHeight
    const itemHeight = this.getOuterHeight(item)
    if (offset < 0)
      container.scrollTop = scroll + offset
    else if (offset + itemHeight > elementHeight)
      container.scrollTop = scroll + offset - elementHeight + itemHeight
  },
  clearSelection: function clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty)
        window.getSelection().empty()
      else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0)
        window.getSelection().removeAllRanges()
    }
    else if (document.selection && document.selection.empty) {
      try {
        document.selection.empty()
      }
      catch (error) {
        // ignore IE bug
      }
    }
  },
  getSelection: function getSelection() {
    if (window.getSelection)
      return window.getSelection().toString(); else if (document.getSelection)
      return document.getSelection().toString(); else if (document.selection)
      return document.selection.createRange().text
    return null
  },
  calculateScrollbarWidth: function calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth
    const scrollDiv = document.createElement('div')
    this.addStyles(scrollDiv, {
      width: '100px',
      height: '100px',
      overflow: 'scroll',
      position: 'absolute',
      top: '-9999px',
    })
    document.body.appendChild(scrollDiv)
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    this.calculatedScrollbarWidth = scrollbarWidth
    return scrollbarWidth
  },
  calculateBodyScrollbarWidth: function calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth
  },
  getBrowser: function getBrowser() {
    if (!this.browser) {
      const matched = this.resolveUserAgent()
      this.browser = {}
      if (matched.browser) {
        this.browser[matched.browser] = true
        this.browser.version = matched.version
      }
      if (this.browser.chrome)
        this.browser.webkit = true
      else if (this.browser.webkit)
        this.browser.safari = true
    }
    return this.browser
  },
  resolveUserAgent: function resolveUserAgent() {
    const ua = navigator.userAgent.toLowerCase()
    const match = /(chrome) ([\w.]+)/.exec(ua) || /(webkit) ([\w.]+)/.exec(ua) || /(opera)(?:.*version)? ([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || !ua.includes('compatible') && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || []
    return {
      browser: match[1] || '',
      version: match[2] || '0',
    }
  },
  isVisible: function isVisible(element) {
    return element && element.offsetParent != null
  },
  invokeElementMethod: function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args)
  },
  isExist: function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element))
  },
  isClient: function isClient() {
    return !!('undefined' !== 'undefined')
  },
  focus: function focus(el, options) {
    el && document.activeElement !== el && el.focus(options)
  },
  isFocusableElement: function isFocusableElement(element) {
    const selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    return this.isElement(element) ? element.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector)) : false
  },
  getFocusableElements: function getFocusableElements(element) {
    const selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    const focusableElements = this.find(element, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector))
    const visibleFocusableElements = []
    const _iterator3 = _createForOfIteratorHelper$1(focusableElements)
    let _step3
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        const focusableElement = _step3.value
        if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden')
          visibleFocusableElements.push(focusableElement)
      }
    }
    catch (err) {
      _iterator3.e(err)
    }
    finally {
      _iterator3.f()
    }
    return visibleFocusableElements
  },
  getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector)
    return focusableElements.length > 0 ? focusableElements[0] : null
  },
  getLastFocusableElement: function getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector)
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null
  },
  getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
    const focusableElements = this.getFocusableElements(container, selector)
    const index = focusableElements.length > 0
      ? focusableElements.findIndex((el) => {
        return el === element
      })
      : -1
    const nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1
    return nextIndex > -1 ? focusableElements[nextIndex] : null
  },
  getPreviousElementSibling: function getPreviousElementSibling(element, selector) {
    let previousElement = element.previousElementSibling
    while (previousElement) {
      if (previousElement.matches(selector))
        return previousElement
      else
        previousElement = previousElement.previousElementSibling
    }
    return null
  },
  getNextElementSibling: function getNextElementSibling(element, selector) {
    let nextElement = element.nextElementSibling
    while (nextElement) {
      if (nextElement.matches(selector))
        return nextElement
      else
        nextElement = nextElement.nextElementSibling
    }
    return null
  },
  isClickable: function isClickable(element) {
    if (element) {
      const targetNode = element.nodeName
      const parentNode = element.parentElement && element.parentElement.nodeName
      return targetNode === 'INPUT' || targetNode === 'TEXTAREA' || targetNode === 'BUTTON' || targetNode === 'A' || parentNode === 'INPUT' || parentNode === 'TEXTAREA' || parentNode === 'BUTTON' || parentNode === 'A' || !!element.closest('.p-button, .p-checkbox, .p-radiobutton') // @todo Add [data-pc-section="button"]
    }
    return false
  },
  applyStyle: function applyStyle(element, style) {
    if (typeof style === 'string') {
      element.style.cssText = style
    }
    else {
      for (const prop in style)
        element.style[prop] = style[prop]
    }
  },
  isIOS: function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  },
  isAndroid: function isAndroid() {
    return /(android)/i.test(navigator.userAgent)
  },
  isTouchDevice: function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  },
  hasCSSAnimation: function hasCSSAnimation(element) {
    if (element) {
      const style = getComputedStyle(element)
      const animationDuration = Number.parseFloat(style.getPropertyValue('animation-duration') || '0')
      return animationDuration > 0
    }
    return false
  },
  hasCSSTransition: function hasCSSTransition(element) {
    if (element) {
      const style = getComputedStyle(element)
      const transitionDuration = Number.parseFloat(style.getPropertyValue('transition-duration') || '0')
      return transitionDuration > 0
    }
    return false
  },
  exportCSV: function exportCSV(csv, filename) {
    const blob = new Blob([csv], {
      type: 'application/csv;charset=utf-8;',
    })
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, `${filename}.csv`)
    }
    else {
      const link = document.createElement('a')
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob))
        link.setAttribute('download', `${filename}.csv`)
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
      else {
        csv = `data:text/csv;charset=utf-8,${csv}`
        window.open(encodeURI(csv))
      }
    }
  },
  blockBodyScroll: function blockBodyScroll() {
    const className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden'
    document.body.style.setProperty('--scrollbar-width', `${this.calculateBodyScrollbarWidth()}px`)
    this.addClass(document.body, className)
  },
  unblockBodyScroll: function unblockBodyScroll() {
    const className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden'
    document.body.style.removeProperty('--scrollbar-width')
    this.removeClass(document.body, className)
  },
}

function _typeof$2$1(o) { '@babel/helpers - typeof'; return _typeof$2$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$2$1(o) }
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError('Cannot call a class as a function')
}
function _defineProperties$1(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor)
      descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$1$1(descriptor.key), descriptor)
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor
}
function _toPropertyKey$1$1(t) { const i = _toPrimitive$1$1(t, 'string'); return _typeof$2$1(i) == 'symbol' ? i : String(i) }
function _toPrimitive$1$1(t, r) {
  if (_typeof$2$1(t) != 'object' || !t)
    return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) {
    const i = e.call(t, r); if (_typeof$2$1(i) != 'object')
      return i; throw new TypeError('@@toPrimitive must return a primitive value.')
  } return (String)(t)
}
const ConnectedOverlayScrollHandler = /* #__PURE__ */(function () {
  function ConnectedOverlayScrollHandler(element) {
    const listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {}
    _classCallCheck$1(this, ConnectedOverlayScrollHandler)
    this.element = element
    this.listener = listener
  }
  _createClass$1(ConnectedOverlayScrollHandler, [{
    key: 'bindScrollListener',
    value: function bindScrollListener() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element)
      for (let i = 0; i < this.scrollableParents.length; i++)
        this.scrollableParents[i].addEventListener('scroll', this.listener)
    },
  }, {
    key: 'unbindScrollListener',
    value: function unbindScrollListener() {
      if (this.scrollableParents) {
        for (let i = 0; i < this.scrollableParents.length; i++)
          this.scrollableParents[i].removeEventListener('scroll', this.listener)
      }
    },
  }, {
    key: 'destroy',
    value: function destroy() {
      this.unbindScrollListener()
      this.element = null
      this.listener = null
      this.scrollableParents = null
    },
  }])
  return ConnectedOverlayScrollHandler
}())

function primebus() {
  const allHandlers = new Map()
  return {
    on: function on(type, handler) {
      let handlers = allHandlers.get(type)
      if (!handlers)
        handlers = [handler]; else handlers.push(handler)
      allHandlers.set(type, handlers)
    },
    off: function off(type, handler) {
      const handlers = allHandlers.get(type)
      if (handlers)
        handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    },
    emit: function emit(type, evt) {
      const handlers = allHandlers.get(type)
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(evt)
        })
      }
    },
  }
}

function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2() }
function _nonIterableRest$2() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _iterableToArrayLimit$2(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) {
    let e; let n; let i; let u; const a = []; let f = !0; let o = !1; try {
      if (i = (t = t.call(r)).next, l === 0)
      ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    }
    catch (r) { o = !0, n = r }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return
      }
      finally {
        if (o)
          throw n
      }
    } return a
  }
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr
}
function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2() }
function _nonIterableSpread$2() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _iterableToArray$2(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter)
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2(arr)
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  let it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator']; if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike) {
      if (it)
        o = it; let i = 0; const F = function F() {}; return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true }; return { done: false, value: o[i++] }
      }, e: function e(_e) { throw _e }, f: F }
    } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
  } let normalCompletion = true; let didErr = false; let err; return { s: function s() { it = it.call(o) }, n: function n() { const step = it.next(); normalCompletion = step.done; return step }, e: function e(_e2) { didErr = true; err = _e2 }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return()
    }
    finally {
      if (didErr)
        throw err
    }
  } }
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return; if (typeof o === 'string')
    return _arrayLikeToArray$2(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor)
    n = o.constructor.name; if (n === 'Map' || n === 'Set')
    return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen)
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2
}
function _typeof$1$1(o) { '@babel/helpers - typeof'; return _typeof$1$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$1$1(o) }
const ObjectUtils = {
  equals: function equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field); else return this.deepEquals(obj1, obj2)
  },
  deepEquals: function deepEquals(a, b) {
    if (a === b)
      return true
    if (a && b && _typeof$1$1(a) == 'object' && _typeof$1$1(b) == 'object') {
      const arrA = Array.isArray(a)
      const arrB = Array.isArray(b)
      let i
      let length
      let key
      if (arrA && arrB) {
        length = a.length
        if (length != b.length)
          return false
        for (i = length; i-- !== 0;) {
          if (!this.deepEquals(a[i], b[i]))
            return false
        }
        return true
      }
      if (arrA != arrB)
        return false
      const dateA = a instanceof Date
      const dateB = b instanceof Date
      if (dateA != dateB)
        return false
      if (dateA && dateB)
        return a.getTime() == b.getTime()
      const regexpA = a instanceof RegExp
      const regexpB = b instanceof RegExp
      if (regexpA != regexpB)
        return false
      if (regexpA && regexpB)
        return a.toString() == b.toString()
      const keys = Object.keys(a)
      length = keys.length
      if (length !== Object.keys(b).length)
        return false
      for (i = length; i-- !== 0;) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false
      }
      for (i = length; i-- !== 0;) {
        key = keys[i]
        if (!this.deepEquals(a[key], b[key]))
          return false
      }
      return true
    }
    return a !== a && b !== b
  },
  resolveFieldData: function resolveFieldData(data, field) {
    if (!data || !field) {
      // short circuit if there is nothing to resolve
      return null
    }
    try {
      const value = data[field]
      if (this.isNotEmpty(value))
        return value
    }
    catch (_unused) {
      // Performance optimization: https://github.com/primefaces/primereact/issues/4797
      // do nothing and continue to other methods to resolve field data
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data)
      }
      else if (!field.includes('.')) {
        return data[field]
      }
      else {
        const fields = field.split('.')
        let _value = data
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (_value == null)
            return null

          _value = _value[fields[i]]
        }
        return _value
      }
    }
    return null
  },
  getItemValue: function getItemValue(obj) {
    for (var _len = arguments.length, params = Array.from({ length: _len > 1 ? _len - 1 : 0 }), _key = 1; _key < _len; _key++)
      params[_key - 1] = arguments[_key]

    return this.isFunction(obj) ? obj.apply(void 0, params) : obj
  },
  filter: function filter(value, fields, filterValue) {
    const filteredItems = []
    if (value) {
      const _iterator = _createForOfIteratorHelper(value)
      let _step
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const item = _step.value
          const _iterator2 = _createForOfIteratorHelper(fields)
          var _step2
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              const field = _step2.value
              if (String(this.resolveFieldData(item, field)).toLowerCase().includes(filterValue.toLowerCase())) {
                filteredItems.push(item)
                break
              }
            }
          }
          catch (err) {
            _iterator2.e(err)
          }
          finally {
            _iterator2.f()
          }
        }
      }
      catch (err) {
        _iterator.e(err)
      }
      finally {
        _iterator.f()
      }
    }
    return filteredItems
  },
  reorderArray: function reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length
        from %= value.length
      }
      value.splice(to, 0, value.splice(from, 1)[0])
    }
  },
  findIndexInList: function findIndexInList(value, list) {
    let index = -1
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i
          break
        }
      }
    }
    return index
  },
  contains: function contains(value, list) {
    if (value != null && list && list.length) {
      const _iterator3 = _createForOfIteratorHelper(list)
      let _step3
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          const val = _step3.value
          if (this.equals(value, val))
            return true
        }
      }
      catch (err) {
        _iterator3.e(err)
      }
      finally {
        _iterator3.f()
      }
    }
    return false
  },
  insertIntoOrderedArray: function insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false
      for (let i = 0; i < arr.length; i++) {
        const currentItemIndex = this.findIndexInList(arr[i], sourceArr)
        if (currentItemIndex > index) {
          arr.splice(i, 0, item)
          injected = true
          break
        }
      }
      if (!injected)
        arr.push(item)
    }
    else {
      arr.push(item)
    }
  },
  removeAccents: function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1)
      str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/\xC6/g, 'AE').replace(/\xC7/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/\xD0/g, 'D').replace(/\xD1/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/\xDD/g, 'Y').replace(/\xDE/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/\xE6/g, 'ae').replace(/\xE7/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/\xF1/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/\xFE/g, 'p').replace(/[\xFD\xFF]/g, 'y')

    return str
  },
  getVNodeProp: function getVNodeProp(vnode, prop) {
    if (vnode) {
      const props = vnode.props
      if (props) {
        const kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
        const propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop
        return vnode.type.extends.props[prop].type === Boolean && props[propName] === '' ? true : props[propName]
      }
    }
    return null
  },
  toFlatCase: function toFlatCase(str) {
    // convert snake, kebab, camel and pascal cases to flat case
    return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str
  },
  toKebabCase: function toKebabCase(str) {
    // convert snake, camel and pascal cases to kebab case
    return this.isString(str)
      ? str.replace(/(_)/g, '-').replace(/[A-Z]/g, (c, i) => {
        return i === 0 ? c : `-${c.toLowerCase()}`
      }).toLowerCase()
      : str
  },
  toCapitalCase: function toCapitalCase(str) {
    return this.isString(str, {
      empty: false,
    })
      ? str[0].toUpperCase() + str.slice(1)
      : str
  },
  isEmpty: function isEmpty(value) {
    return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$1$1(value) === 'object' && Object.keys(value).length === 0
  },
  isNotEmpty: function isNotEmpty(value) {
    return !this.isEmpty(value)
  },
  isFunction: function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply)
  },
  isObject: function isObject(value) {
    const empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0)
  },
  isDate: function isDate(value) {
    return value instanceof Date && value.constructor === Date
  },
  isArray: function isArray(value) {
    const empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
    return Array.isArray(value) && (empty || value.length !== 0)
  },
  isString: function isString(value) {
    const empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
    return typeof value === 'string' && (empty || value !== '')
  },
  isPrintableCharacter: function isPrintableCharacter() {
    const _char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /)
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function findLast(arr, callback) {
    let item
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback)
      }
      catch (_unused2) {
        item = _toConsumableArray$2(arr).reverse().find(callback)
      }
    }
    return item
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function findLastIndex(arr, callback) {
    let index = -1
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback)
      }
      catch (_unused3) {
        index = arr.lastIndexOf(_toConsumableArray$2(arr).reverse().find(callback))
      }
    }
    return index
  },
  sort: function sort(value1, value2) {
    const order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1
    const comparator = arguments.length > 3 ? arguments[3] : undefined
    const nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1
    const result = this.compare(value1, value2, comparator, order)
    let finalSortOrder = order

    // nullSortOrder == 1 means Excel like sort nulls at bottom
    if (this.isEmpty(value1) || this.isEmpty(value2))
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder

    return finalSortOrder * result
  },
  compare: function compare(value1, value2, comparator) {
    const order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1
    let result = -1
    const emptyValue1 = this.isEmpty(value1)
    const emptyValue2 = this.isEmpty(value2)
    if (emptyValue1 && emptyValue2)
      result = 0; else if (emptyValue1)
      result = order; else if (emptyValue2)
      result = -order; else if (typeof value1 === 'string' && typeof value2 === 'string')
      result = comparator(value1, value2); else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0
    return result
  },
  localeComparator: function localeComparator() {
    // performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
    return new Intl.Collator(undefined, {
      numeric: true,
    }).compare
  },
  nestedKeys: function nestedKeys() {
    const _this = this
    const obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
    const parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    return Object.entries(obj).reduce((o, _ref) => {
      const _ref2 = _slicedToArray$2(_ref, 2)
      const key = _ref2[0]
      const value = _ref2[1]
      const currentKey = parentKey ? ''.concat(parentKey, '.').concat(key) : key
      _this.isObject(value) ? o = o.concat(_this.nestedKeys(value, currentKey)) : o.push(currentKey)
      return o
    }, [])
  },
  stringify: function stringify(value) {
    const _this2 = this
    const indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2
    const currentIndent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
    const currentIndentStr = ' '.repeat(currentIndent)
    const nextIndentStr = ' '.repeat(currentIndent + indent)
    if (this.isArray(value)) {
      return `[${value.map((v) => {
        return _this2.stringify(v, indent, currentIndent + indent)
      }).join(', ')}]`
    }
    else if (this.isDate(value)) {
      return value.toISOString()
    }
    else if (this.isFunction(value)) {
      return value.toString()
    }
    else if (this.isObject(value)) {
      return `{\n${Object.entries(value).map((_ref3) => {
        const _ref4 = _slicedToArray$2(_ref3, 2)
          const k = _ref4[0]
          const v = _ref4[1]
        return ''.concat(nextIndentStr).concat(k, ': ').concat(_this2.stringify(v, indent, currentIndent + indent))
      }).join(',\n')}${'\n'.concat(currentIndentStr)}}`
    }
    else {
      return JSON.stringify(value)
    }
  },
}

function _typeof$4(o) { '@babel/helpers - typeof'; return _typeof$4 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$4(o) }
function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1() }
function _nonIterableSpread$1() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return; if (typeof o === 'string')
    return _arrayLikeToArray$1(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor)
    n = o.constructor.name; if (n === 'Map' || n === 'Set')
    return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen)
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter)
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr)
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError('Cannot call a class as a function')
}
function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor)
      descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$4(descriptor.key), descriptor)
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key); if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); else obj[key] = value; return obj
}
function _toPropertyKey$4(t) { const i = _toPrimitive$4(t, 'string'); return _typeof$4(i) == 'symbol' ? i : String(i) }
function _toPrimitive$4(t, r) {
  if (_typeof$4(t) != 'object' || !t)
    return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) {
    const i = e.call(t, r || 'default'); if (_typeof$4(i) != 'object')
      return i; throw new TypeError('@@toPrimitive must return a primitive value.')
  } return (r === 'string' ? String : Number)(t)
}
const _default = /* #__PURE__ */(function () {
  function _default(_ref) {
    const init = _ref.init
    const type = _ref.type
    _classCallCheck(this, _default)
    _defineProperty$4(this, 'helpers', void 0)
    _defineProperty$4(this, 'type', void 0)
    this.helpers = new Set(init)
    this.type = type
  }
  _createClass(_default, [{
    key: 'add',
    value: function add(instance) {
      this.helpers.add(instance)
    },
  }, {
    key: 'update',
    value: function update() {
      // @todo
    },
  }, {
    key: 'delete',
    value: function _delete(instance) {
      this.helpers.delete(instance)
    },
  }, {
    key: 'clear',
    value: function clear() {
      this.helpers.clear()
    },
  }, {
    key: 'get',
    value: function get(parentInstance, slots) {
      const children = this._get(parentInstance, slots)
      const computed = children ? this._recursive(_toConsumableArray$1(this.helpers), children) : null
      return ObjectUtils.isNotEmpty(computed) ? computed : null
    },
  }, {
    key: '_isMatched',
    value: function _isMatched(instance, key) {
      let _parent$vnode
      const parent = instance === null || instance === void 0 ? void 0 : instance.parent
      return (parent === null || parent === void 0 || (_parent$vnode = parent.vnode) === null || _parent$vnode === void 0 ? void 0 : _parent$vnode.key) === key || parent && this._isMatched(parent, key) || false
    },
  }, {
    key: '_get',
    value: function _get(parentInstance, slots) {
      let _ref2, _ref2$default
      return ((_ref2 = slots || (parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$slots)) === null || _ref2 === void 0 || (_ref2$default = _ref2.default) === null || _ref2$default === void 0 ? void 0 : _ref2$default.call(_ref2)) || null
    },
  }, {
    key: '_recursive',
    value: function _recursive() {
      const _this = this
      const helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
      let components = []
      children.forEach((child) => {
        if (Array.isArray(child.children)) {
          components = components.concat(_this._recursive(components, child.children))
        }
        else if (child.type.name === _this.type) {
          components.push(child)
        }
        else if (ObjectUtils.isNotEmpty(child.key)) {
          components = components.concat(helpers.filter((c) => {
            return _this._isMatched(c, child.key)
          }).map((c) => {
            return c.vnode
          }))
        }
      })
      return components
    },
  }])
  return _default
}())

let lastId = 0
function UniqueComponentId() {
  const prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pv_id_'
  lastId++
  return ''.concat(prefix).concat(lastId)
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread() }
function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o)
    return; if (typeof o === 'string')
    return _arrayLikeToArray$4(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor)
    n = o.constructor.name; if (n === 'Map' || n === 'Set')
    return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen)
}
function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null)
    return Array.from(iter)
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$4(arr)
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2
}
function handler() {
  let zIndexes = []
  const generateZIndex = function generateZIndex(key, autoZIndex) {
    const baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999
    const lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex)
    const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1
    zIndexes.push({
      key,
      value: newZIndex,
    })
    return newZIndex
  }
  const revertZIndex = function revertZIndex(zIndex) {
    zIndexes = zIndexes.filter((obj) => {
      return obj.value !== zIndex
    })
  }
  const getCurrentZIndex = function getCurrentZIndex(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value
  }
  var getLastZIndex = function getLastZIndex(key, autoZIndex) {
    const baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
    return _toConsumableArray(zIndexes).reverse().find((obj) => {
      return true
    }) || {
      key,
      value: baseZIndex,
    }
  }
  const getZIndex = function getZIndex(el) {
    return el ? Number.parseInt(el.style.zIndex, 10) || 0 : 0
  }
  return {
    get: getZIndex,
    set: function set(key, el, baseZIndex) {
      if (el)
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex))
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(getZIndex(el))
        el.style.zIndex = ''
      }
    },
    getCurrent: function getCurrent(key) {
      return getCurrentZIndex(key, true)
    },
  }
}
const ZIndexUtils = handler()

utils_cjs.ConnectedOverlayScrollHandler = ConnectedOverlayScrollHandler
utils_cjs.DomHandler = DomHandler
utils_cjs.EventBus = primebus
utils_cjs.HelperSet = _default
utils_cjs.ObjectUtils = ObjectUtils
utils_cjs.UniqueComponentId = UniqueComponentId
utils_cjs.ZIndexUtils = ZIndexUtils

const require$$1 = /* @__PURE__ */getDefaultExportFromNamespaceIfNotNamed(vue$1)

Object.defineProperty(usestyle_cjs, '__esModule', { value: true })

const utils = utils_cjs
const vue = require$$1

function _typeof$3(o) { '@babel/helpers - typeof'; return _typeof$3 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$3(o) }
function ownKeys$2(e, r) { const t = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); r && (o = o.filter((r) => { return Object.getOwnPropertyDescriptor(e, r).enumerable })), t.push.apply(t, o) } return t }
function _objectSpread$2(e) { for (let r = 1; r < arguments.length; r++) { var t = arguments[r] != null ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach((r) => { _defineProperty$3(e, r, t[r]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach((r) => { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }) } return e }
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key); if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); else obj[key] = value; return obj
}
function _toPropertyKey$3(t) { const i = _toPrimitive$3(t, 'string'); return _typeof$3(i) == 'symbol' ? i : String(i) }
function _toPrimitive$3(t, r) {
  if (_typeof$3(t) != 'object' || !t)
    return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) {
    const i = e.call(t, r || 'default'); if (_typeof$3(i) != 'object')
      return i; throw new TypeError('@@toPrimitive must return a primitive value.')
  } return (r === 'string' ? String : Number)(t)
}
function tryOnMounted(fn) {
  const sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
  if (vue.getCurrentInstance())
    vue.onMounted(fn); else if (sync)
    fn(); else vue.nextTick(fn)
}
let _id = 0
function useStyle(css) {
  const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  const isLoaded = vue.ref(false)
  const cssRef = vue.ref(css)
  const styleRef = vue.ref(null)
  const defaultDocument = utils.DomHandler.isClient() ? window.document : undefined
  const _options$document = options.document
  const document = _options$document === void 0 ? defaultDocument : _options$document
  const _options$immediate = options.immediate
  const immediate = _options$immediate === void 0 ? true : _options$immediate
  const _options$manual = options.manual
  const manual = _options$manual === void 0 ? false : _options$manual
  const _options$name = options.name
  const name = _options$name === void 0 ? 'style_'.concat(++_id) : _options$name
  const _options$id = options.id
  const id = _options$id === void 0 ? undefined : _options$id
  const _options$media = options.media
  const media = _options$media === void 0 ? undefined : _options$media
  const _options$nonce = options.nonce
  const nonce = _options$nonce === void 0 ? undefined : _options$nonce
  const _options$props = options.props
  const props = _options$props === void 0 ? {} : _options$props
  let stop = function stop() {}

  /* @todo: Improve _options params */
  const load = function load(_css) {
    const _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    if (!document)
      return
    const _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props)
    const _name = _styleProps.name || name
    const _id = _styleProps.id || id
    const _nonce = _styleProps.nonce || nonce
    styleRef.value = document.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document.getElementById(_id) || document.createElement('style')
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css
      utils.DomHandler.setAttributes(styleRef.value, {
        type: 'text/css',
        id: _id,
        media,
        nonce: _nonce,
      })
      document.head.appendChild(styleRef.value)
      utils.DomHandler.setAttribute(styleRef.value, 'data-primevue-style-id', name)
      utils.DomHandler.setAttributes(styleRef.value, _styleProps)
    }
    if (isLoaded.value)
      return
    stop = vue.watch(cssRef, (value) => {
      styleRef.value.textContent = value
    }, {
      immediate: true,
    })
    isLoaded.value = true
  }
  const unload = function unload() {
    if (!document || !isLoaded.value)
      return
    stop()
    utils.DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value)
    isLoaded.value = false
  }
  if (immediate && !manual)
    tryOnMounted(load)

  /* if (!manual)
    tryOnScopeDispose(unload) */

  return {
    id,
    name,
    css: cssRef,
    unload,
    load,
    isLoaded: vue.readonly(isLoaded),
  }
}

usestyle_cjs.useStyle = useStyle

const usestyle$1 = usestyle_cjs

function _typeof$2(o) { '@babel/helpers - typeof'; return _typeof$2 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$2(o) }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest() }
function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return; if (typeof o === 'string')
    return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor)
    n = o.constructor.name; if (n === 'Map' || n === 'Set')
    return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2
}
function _iterableToArrayLimit(r, l) {
  let t = r == null ? null : typeof Symbol != 'undefined' && r[Symbol.iterator] || r['@@iterator']; if (t != null) {
    let e; let n; let i; let u; const a = []; let f = !0; let o = !1; try {
      if (i = (t = t.call(r)).next, l === 0)
      ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    }
    catch (r) { o = !0, n = r }
    finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return
      }
      finally {
        if (o)
          throw n
      }
    } return a
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr
}
function ownKeys$1(e, r) { const t = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); r && (o = o.filter((r) => { return Object.getOwnPropertyDescriptor(e, r).enumerable })), t.push.apply(t, o) } return t }
function _objectSpread$1(e) { for (let r = 1; r < arguments.length; r++) { var t = arguments[r] != null ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach((r) => { _defineProperty$2(e, r, t[r]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach((r) => { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }) } return e }
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key); if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); else obj[key] = value; return obj
}
function _toPropertyKey$2(t) { const i = _toPrimitive$2(t, 'string'); return _typeof$2(i) == 'symbol' ? i : String(i) }
function _toPrimitive$2(t, r) {
  if (_typeof$2(t) != 'object' || !t)
    return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) {
    const i = e.call(t, r || 'default'); if (_typeof$2(i) != 'object')
      return i; throw new TypeError('@@toPrimitive must return a primitive value.')
  } return (r === 'string' ? String : Number)(t)
}
const css = '\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n'
const classes$4 = {}
const inlineStyles = {}
const BaseStyle$5 = {
  name: 'base',
  css,
  classes: classes$4,
  inlineStyles,
  loadStyle: function loadStyle() {
    const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
    return this.css
      ? usestyle$1.useStyle(this.css, _objectSpread$1({
        name: this.name,
      }, options))
      : {}
  },
  getStyleSheet: function getStyleSheet() {
    const extendedCSS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    const props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    if (this.css) {
      const _props = Object.entries(props).reduce((acc, _ref) => {
        const _ref2 = _slicedToArray(_ref, 2)
        const k = _ref2[0]
        const v = _ref2[1]
        return acc.push(''.concat(k, '="').concat(v, '"')) && acc
      }, []).join(' ')
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, '>').concat(this.css).concat(extendedCSS, '</style>')
    }
    return ''
  },
  extend: function extend(style) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: undefined,
    }, style)
  },
}

const basestyle_cjs = BaseStyle$5

const BaseStyle$6 = /* @__PURE__ */getDefaultExportFromCjs(basestyle_cjs)

const BaseStyle$4 = basestyle_cjs
const usestyle = usestyle_cjs

function _interopDefaultLegacy$4(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const BaseStyle__default$4 = /* #__PURE__ */_interopDefaultLegacy$4(BaseStyle$4)

function _typeof$1(o) { '@babel/helpers - typeof'; return _typeof$1 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof$1(o) }
function ownKeys(e, r) { const t = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); r && (o = o.filter((r) => { return Object.getOwnPropertyDescriptor(e, r).enumerable })), t.push.apply(t, o) } return t }
function _objectSpread(e) { for (let r = 1; r < arguments.length; r++) { var t = arguments[r] != null ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach((r) => { _defineProperty$1(e, r, t[r]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((r) => { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }) } return e }
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key); if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); else obj[key] = value; return obj
}
function _toPropertyKey$1(t) { const i = _toPrimitive$1(t, 'string'); return _typeof$1(i) == 'symbol' ? i : String(i) }
function _toPrimitive$1(t, r) {
  if (_typeof$1(t) != 'object' || !t)
    return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) {
    const i = e.call(t, r || 'default'); if (_typeof$1(i) != 'object')
      return i; throw new TypeError('@@toPrimitive must return a primitive value.')
  } return (r === 'string' ? String : Number)(t)
}
const BaseComponentStyle = BaseStyle__default$4.default.extend({
  name: 'common',
  loadGlobalStyle: function loadGlobalStyle(globalCSS) {
    const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    return usestyle.useStyle(globalCSS, _objectSpread({
      name: 'global',
    }, options))
  },
})

const basecomponentstyle_cjs = BaseComponentStyle

const BaseComponentStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(basecomponentstyle_cjs)

const BaseStyle$3 = basestyle_cjs

function _interopDefaultLegacy$3(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const BaseStyle__default$3 = /* #__PURE__ */_interopDefaultLegacy$3(BaseStyle$3)

function _typeof(o) { '@babel/helpers - typeof'; return _typeof = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof(o) }
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key); if (key in obj)
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); else obj[key] = value; return obj
}
function _toPropertyKey(t) { const i = _toPrimitive(t, 'string'); return _typeof(i) == 'symbol' ? i : String(i) }
function _toPrimitive(t, r) {
  if (_typeof(t) != 'object' || !t)
    return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) {
    const i = e.call(t, r || 'default'); if (_typeof(i) != 'object')
      return i; throw new TypeError('@@toPrimitive must return a primitive value.')
  } return (r === 'string' ? String : Number)(t)
}
const classes$3 = {
  root: function root(_ref) {
    const instance = _ref.instance
    const props = _ref.props
    return ['p-button p-component', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-disabled': instance.$attrs.disabled || instance.$attrs.disabled === '' || props.loading,
      'p-button-loading': props.loading,
      'p-button-loading-label-only': props.loading && !instance.hasIcon && props.label,
      'p-button-link': props.link,
    }, 'p-button-'.concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text), 'p-button-outlined', props.outlined), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain)]
  },
  loadingIcon: 'p-button-loading-icon pi-spin',
  icon: function icon(_ref3) {
    const props = _ref3.props
    return ['p-button-icon', {
      'p-button-icon-left': props.iconPos === 'left' && props.label,
      'p-button-icon-right': props.iconPos === 'right' && props.label,
      'p-button-icon-top': props.iconPos === 'top' && props.label,
      'p-button-icon-bottom': props.iconPos === 'bottom' && props.label,
    }]
  },
  label: 'p-button-label',
}
const ButtonStyle = BaseStyle__default$3.default.extend({
  name: 'button',
  classes: classes$3,
})

const buttonstyle_cjs = ButtonStyle

const ButtonStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(buttonstyle_cjs)

const BaseStyle$2 = basestyle_cjs

function _interopDefaultLegacy$2(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const BaseStyle__default$2 = /* #__PURE__ */_interopDefaultLegacy$2(BaseStyle$2)

const classes$2 = {
  root: 'p-badge p-component',
}
const BadgeDirectiveStyle = BaseStyle__default$2.default.extend({
  name: 'badge',
  classes: classes$2,
})

const badgedirectivestyle_cjs = BadgeDirectiveStyle

const BadgeDirectiveStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(badgedirectivestyle_cjs)

const BaseStyle$1 = basestyle_cjs

function _interopDefaultLegacy$1(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const BaseStyle__default$1 = /* #__PURE__ */_interopDefaultLegacy$1(BaseStyle$1)

const classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text',
}
const TooltipStyle = BaseStyle__default$1.default.extend({
  name: 'tooltip',
  classes: classes$1,
})

const tooltipstyle_cjs = TooltipStyle

const TooltipStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(tooltipstyle_cjs)

const BaseStyle = basestyle_cjs

function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const BaseStyle__default = /* #__PURE__ */_interopDefaultLegacy(BaseStyle)

const classes = {
  root: 'p-ink',
}
const RippleStyle = BaseStyle__default.default.extend({
  name: 'ripple',
  classes,
})

const ripplestyle_cjs = RippleStyle

const RippleStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(ripplestyle_cjs)

const StyleClassStyle = {}

const styleclassstyle_cjs = StyleClassStyle

const StyleClassStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(styleclassstyle_cjs)

const FocusTrapStyle = {}

const focustrapstyle_cjs = FocusTrapStyle

const FocusTrapStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(focustrapstyle_cjs)

const AnimateOnScrollStyle = {}

const animateonscrollstyle_cjs = AnimateOnScrollStyle

const AnimateOnScrollStyle$1 = /* @__PURE__ */getDefaultExportFromCjs(animateonscrollstyle_cjs)

const stylesToTop = ['<style type="text/css" data-primevue-style-id="layer-order" >@layer tailwind-base, primevue, tailwind-utilities</style>'].join('')
const styleProps = {

}
const styles = [
  ,
  BaseStyle$6 && BaseStyle$6.getStyleSheet ? BaseStyle$6.getStyleSheet(undefined, styleProps) : '',
  BaseComponentStyle$1 && BaseComponentStyle$1.getStyleSheet ? BaseComponentStyle$1.getStyleSheet(undefined, styleProps) : '',
  ButtonStyle$1 && ButtonStyle$1.getStyleSheet ? ButtonStyle$1.getStyleSheet(undefined, styleProps) : '',
  BadgeDirectiveStyle$1 && BadgeDirectiveStyle$1.getStyleSheet ? BadgeDirectiveStyle$1.getStyleSheet(undefined, styleProps) : '',
  TooltipStyle$1 && TooltipStyle$1.getStyleSheet ? TooltipStyle$1.getStyleSheet(undefined, styleProps) : '',
  RippleStyle$1 && RippleStyle$1.getStyleSheet ? RippleStyle$1.getStyleSheet(undefined, styleProps) : '',
  StyleClassStyle$1 && StyleClassStyle$1.getStyleSheet ? StyleClassStyle$1.getStyleSheet(undefined, styleProps) : '',
  FocusTrapStyle$1 && FocusTrapStyle$1.getStyleSheet ? FocusTrapStyle$1.getStyleSheet(undefined, styleProps) : '',
  AnimateOnScrollStyle$1 && AnimateOnScrollStyle$1.getStyleSheet ? AnimateOnScrollStyle$1.getStyleSheet(undefined, styleProps) : '',
].join('')

const defineNitroPlugin$1 = def => def
const _f6lnQifluV = defineNitroPlugin$1(async (nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head.unshift(stylesToTop)
    html.head.push(styles)
  })
})

function defineNitroPlugin(def) {
  return def
}

const defuReplaceArray = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) || Array.isArray(value)) {
    obj[key] = value
    return true
  }
})

const nitroAppSecurityOptions = {}
function getAppSecurityOptions() {
  return nitroAppSecurityOptions
}
function resolveSecurityRules(event) {
  if (!event.context.security)
    event.context.security = {}

  if (!event.context.security.rules) {
    const router = createRouter({ routes: structuredClone(nitroAppSecurityOptions) })
    const matcher = toRouteMatcher(router)
    const matches = matcher.matchAll(event.path.split('?')[0])
    const rules = defuReplaceArray({}, ...matches.reverse())
    event.context.security.rules = rules
  }
  return event.context.security.rules
}

const KEYS_TO_NAMES = {
  contentSecurityPolicy: 'Content-Security-Policy',
  crossOriginEmbedderPolicy: 'Cross-Origin-Embedder-Policy',
  crossOriginOpenerPolicy: 'Cross-Origin-Opener-Policy',
  crossOriginResourcePolicy: 'Cross-Origin-Resource-Policy',
  originAgentCluster: 'Origin-Agent-Cluster',
  referrerPolicy: 'Referrer-Policy',
  strictTransportSecurity: 'Strict-Transport-Security',
  xContentTypeOptions: 'X-Content-Type-Options',
  xDNSPrefetchControl: 'X-DNS-Prefetch-Control',
  xDownloadOptions: 'X-Download-Options',
  xFrameOptions: 'X-Frame-Options',
  xPermittedCrossDomainPolicies: 'X-Permitted-Cross-Domain-Policies',
  xXSSProtection: 'X-XSS-Protection',
  permissionsPolicy: 'Permissions-Policy',
}
const NAMES_TO_KEYS = Object.fromEntries(Object.entries(KEYS_TO_NAMES).map(([key, name]) => [name, key]))
function getNameFromKey(key) {
  return KEYS_TO_NAMES[key]
}
function getKeyFromName(headerName) {
  const [, key] = Object.entries(NAMES_TO_KEYS).find(([name]) => name.toLowerCase() === headerName.toLowerCase()) || []
  return key
}
function headerStringFromObject(optionKey, optionValue) {
  if (optionValue === false)
    return ''

  if (optionKey === 'contentSecurityPolicy') {
    const policies = optionValue
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (directive === 'upgrade-insecure-requests') {
        return 'upgrade-insecure-requests;'
      }
      else {
        const stringifiedSources = typeof sources === 'string' ? sources : sources.map(source => source.trim()).join(' ')
        return `${directive} ${stringifiedSources};`
      }
    }).join(' ')
  }
  else if (optionKey === 'strictTransportSecurity') {
    const policies = optionValue
    return [
      `max-age=${policies.maxAge};`,
      policies.includeSubdomains && 'includeSubDomains;',
      policies.preload && 'preload;',
    ].filter(Boolean).join(' ')
  }
  else if (optionKey === 'permissionsPolicy') {
    const policies = optionValue
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (typeof sources === 'string')
        return `${directive}=${sources}`
      else
        return `${directive}=(${sources.join(' ')})`
    }).join(', ')
  }
  else {
    return optionValue
  }
}
function headerObjectFromString(optionKey, headerValue) {
  if (!headerValue)
    return false

  if (optionKey === 'contentSecurityPolicy') {
    const directives = headerValue.split(';').map(directive => directive.trim()).filter(directive => directive)
    const objectForm = {}
    for (const directive of directives) {
      const [type, ...sources] = directive.split(' ').map(token => token.trim())
      if (type === 'upgrade-insecure-requests')
        objectForm[type] = true
      else
        objectForm[type] = sources.join(' ')
    }
    return objectForm
  }
  else if (optionKey === 'strictTransportSecurity') {
    const directives = headerValue.split(';').map(directive => directive.trim()).filter(directive => directive)
    const objectForm = {}
    for (const directive of directives) {
      const [type, value] = directive.split('=').map(token => token.trim())
      if (type === 'max-age')
        objectForm.maxAge = Number(value)
      else if (type === 'includeSubdomains' || type === 'preload')
        objectForm[type] = true
    }
    return objectForm
  }
  else if (optionKey === 'permissionsPolicy') {
    const directives = headerValue.split(',').map(directive => directive.trim()).filter(directive => directive)
    const objectForm = {}
    for (const directive of directives) {
      const [type, value] = directive.split('=').map(token => token.trim())
      objectForm[type] = value
    }
    return objectForm
  }
  else {
    return headerValue
  }
}
function standardToSecurity(standardHeaders) {
  if (!standardHeaders)
    return void 0

  const standardHeadersAsObject = {}
  Object.entries(standardHeaders).forEach(([headerName, headerValue]) => {
    const optionKey = getKeyFromName(headerName)
    if (optionKey) {
      if (typeof headerValue === 'string') {
        const objectValue = headerObjectFromString(optionKey, headerValue)
        standardHeadersAsObject[optionKey] = objectValue
      }
      else {
        standardHeadersAsObject[optionKey] = headerValue
      }
    }
  })
  if (Object.keys(standardHeadersAsObject).length === 0)
    return void 0

  return standardHeadersAsObject
}
function backwardsCompatibleSecurity(securityHeaders) {
  if (!securityHeaders)
    return void 0

  const securityHeadersAsObject = {}
  Object.entries(securityHeaders).forEach(([key, value]) => {
    const optionKey = key
    if ((optionKey === 'contentSecurityPolicy' || optionKey === 'permissionsPolicy' || optionKey === 'strictTransportSecurity') && typeof value === 'string') {
      const objectValue = headerObjectFromString(optionKey, value)
      securityHeadersAsObject[optionKey] = objectValue
    }
    else if (value === '') {
      securityHeadersAsObject[optionKey] = false
    }
    else {
      securityHeadersAsObject[optionKey] = value
    }
  })
  return securityHeadersAsObject
}

const _eYQdyMXtmx = defineNitroPlugin(async (nitroApp) => {
  const appSecurityOptions = getAppSecurityOptions()
  const runtimeConfig = useRuntimeConfig()
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route]
    const { headers: headers2 } = rule
    const securityHeaders2 = standardToSecurity(headers2)
    if (securityHeaders2)
      appSecurityOptions[route] = { headers: securityHeaders2 }
  }
  const securityOptions = runtimeConfig.security
  const { headers } = securityOptions
  const securityHeaders = backwardsCompatibleSecurity(headers)
  appSecurityOptions['/**'] = defuReplaceArray(
    { headers: securityHeaders },
    securityOptions,
    appSecurityOptions['/**'],
  )
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route]
    const { security } = rule
    if (security) {
      const { headers: headers2 } = security
      const securityHeaders2 = backwardsCompatibleSecurity(headers2)
      appSecurityOptions[route] = defuReplaceArray(
        { headers: securityHeaders2 },
        security,
        appSecurityOptions[route],
      )
    }
  }
  nitroApp.hooks.hook('nuxt-security:headers', ({ route, headers: headers2 }) => {
    appSecurityOptions[route] = defuReplaceArray(
      { headers: headers2 },
      appSecurityOptions[route],
    )
  })
  nitroApp.hooks.hook('nuxt-security:ready', async () => {
    await nitroApp.hooks.callHook('nuxt-security:routeRules', appSecurityOptions)
  })
  await nitroApp.hooks.callHook('nuxt-security:ready')
})

const _U2iKtxI4eM = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const rules = resolveSecurityRules(event)
    if (!rules.enabled || !rules.sri && (!rules.headers || !rules.headers.contentSecurityPolicy))
      return

    const sections = ['body', 'bodyAppend', 'bodyPrepend', 'head']
    const cheerios = {}
    for (const section of sections) {
      cheerios[section] = html[section].map((element) => {
        return cheerio.load(element, {
          xml: {
            // Disable `xmlMode` to parse HTML with htmlparser2.
            xmlMode: false,
            decodeEntities: false,
          },
        }, false)
      })
    }
    event.context.security.cheerios = cheerios
  })
})

const sriHashes = { '/_nuxt/builds/meta/66aee904-61f7-483b-9231-3bad8bca772f.json': 'sha384-qlzda90HaBtLUHiZOLTo3jAKDjVNCd6uaM2tjc7iTgjV/EAfmrp6FQhU9uKgHCh9', '/_nuxt/builds/latest.json': 'sha384-DMvopSQX5mgKwnrnmszNJmLjRnLuxpvtY4BVrmza7mXs6KUTmyjtdzAyvVOogyvn', '/_nuxt/4cXT_n-z.js': 'sha384-/Q+9ytUBUZtEHCdZUPKNqh2tJh5Ku6BkschTuV8wHfyeKhCISoMjhnjC+Yp3N6si', '/_nuxt/4cXT_n-z.js.map': 'sha384-HvNMKnzl/K4SLcV9JHY0Yo790GD+84Fk9OFDr4/XooM0I2fgcM1AZCzdd7k+xZ9P', '/_nuxt/5yJFPpOU.js': 'sha384-SL23ArSClDrGKebJrYYOf5/z1rIp2nFvPAqoHvuNd0eFYAZmQWtfEJ5B35SeGNup', '/_nuxt/5yJFPpOU.js.map': 'sha384-7lt8ZiTN88LuUSPo6BGzdSWSn3sjjvXkuk2uVn9tmQK8zwp7jeYf0XCDFYHTfLaM', '/_nuxt/7QCWE-nk.js': 'sha384-VETBnaZO1NM1nB8CepzSWG5xnw7WsMWGEUzpkqhMbCMUPVZraU+neVOx0bL4PQmh', '/_nuxt/7QCWE-nk.js.map': 'sha384-kQ6SvD2ok+bpajmEyjC0ASILLI5Gj21BLZ67kd4m1hhviKFLK49Jnv0LSDze18V8', '/_nuxt/97OwPU3_.js': 'sha384-bNrVN7vDycxsx6ZqQvluG3Phc8Z+0g/N/42AbhovyGhcR3fgRc0JLYbdzkgYFo+O', '/_nuxt/97OwPU3_.js.map': 'sha384-BS7g3qd+69inyIM0RHAeM2NcPz6bWGYbcZ87bmLjVPCeyERAXfFwzvlTR5OhRizW', '/_nuxt/B0JaJM-5.js': 'sha384-wAz7QJjKZ/zoM9AOejlL6SYKW5zlLqUkUQhqCXGvY/EiNB05UHpe/LubYys58AUc', '/_nuxt/B0JaJM-5.js.map': 'sha384-ZTnPOUoJ3V+3eiYTtW5Rs8t3J3lBhyzmYplG8qHUAVEOYuBAk89OwfSkRR2hBKhy', '/_nuxt/B89h6QVa.js': 'sha384-XANgszPsg9SoJ47dwbihYlvHjVKuDosHZD1Gb91kqKkjcfBO8PaS7A9Igo9MeO59', '/_nuxt/B89h6QVa.js.map': 'sha384-Fsm1WIuUPklAaLqc8ppCNklIvf8X8l9JX5DO+I+YIYY4Pu0080SoQctgRfTTHWog', '/_nuxt/BPca0gHD.js': 'sha384-cC0VT4wAMdqnztcv3vRTZWxt7KGPuEoQucLh3Qf4/0Hpm/cPODAVNLs7LrMI1VSs', '/_nuxt/BPca0gHD.js.map': 'sha384-V5+1vBqPhThg6HN+c/xtvSA9xSvbZbr0AhZ7c5D3zmfbK+iap6wAq+IjQjH0xLrI', '/_nuxt/BPpDJP77.js': 'sha384-/yWzuN6pdCvmrPJCZSH3BJaWoMS5G7YHrhOZ/uqbW7Tmzttll6e/CYtAS0r+/gg7', '/_nuxt/BPpDJP77.js.map': 'sha384-KTjzaxtj/0U/w4HaDyfYUkgjxVn7JY6hQdPMHu1GPaF8RPITqNxuzjtduVb0mqlK', '/_nuxt/BQkc-AXV.js': 'sha384-hywGuUTrfmdNn3deAHW9Mg2d3b1EzO/JGMUn7utaYGZ5hkoZFc26TJofSmikkoME', '/_nuxt/BQkc-AXV.js.map': 'sha384-2+4VChiFjQckeU0ZTMTtD7gMl/8KKpGw0ROOeiTDfseVhOcDou2y3HraHlcAUxM8', '/_nuxt/BVUR-fAC.js': 'sha384-Y/NPKqE8hgkzREMdkVd4HQrtl436j7Y55LkNoAlONIdwicxmKb/1D0Vs2uiyhEP0', '/_nuxt/BVUR-fAC.js.map': 'sha384-uJT13t+9FCUYDbtjKEc9auymn6TjgFc9HGgcuNu3NTPD/oiAzS+/CPIkdYDus//B', '/_nuxt/BXgP0LaI.js': 'sha384-azqvylEpfrNITMdxsOnL5ARFOGR6a5SEZavrIJvGNkLukWJNSCTpdLS5iLZc2rPZ', '/_nuxt/BXgP0LaI.js.map': 'sha384-jKmZolmTbIguzIztbJ8VC65VHaPDoKwlg0SdqySl6pa79kIvTxrCQCHdGYmJjnN8', '/_nuxt/BZROIGAf.js': 'sha384-vzeIfyBbdf8cjUm5SbfCq1DnXxTlDvvf3v2tJPaug7JhdRZblnViwSDrkKoQtjKb', '/_nuxt/BZROIGAf.js.map': 'sha384-Q4fQJ6aK++tOnsOKKKJiTxSCb1YRzvw+deAr7dYuOhjurwKUPkE29HYKAt97joq/', '/_nuxt/Ba1762Cb.js': 'sha384-mFn+TpCaeumBkuO07XHYhKRO3KB02CAB+kQXJWDj4uJtIwY1FY5Czoa9vbwkTjNP', '/_nuxt/Ba1762Cb.js.map': 'sha384-Lgl8GxEWpScB0yN56d2KoUZpTqslz5n5DIrt9rXXx52IjfhpSoVMkkw8Rw6H31N+', '/_nuxt/BaiXWdV2.js': 'sha384-u9s2iaeoOsuNmkvgr0NQgjmpNxZ6rDAvyO08CHMqsZfCx9aIBl3DnIC8Eb9NWWVz', '/_nuxt/BaiXWdV2.js.map': 'sha384-g0Z+32xW9eUzlB5dTGws6HfoV259aWBIhgEg5HDt8wOi8t45ocM0ULGLXuzdYNaZ', '/_nuxt/BbZHXA2T.js': 'sha384-XtRj0Fx2I2Mz77ZKqVGWPTvejqvdRxkdkixnTMsxufvKkp7dCeb3gjucCLWhkzCP', '/_nuxt/BbZHXA2T.js.map': 'sha384-SHSDDoxYAQppFX4esAM2r0Qh37FS8iA1b1F0B0b/B575MsnSpx5ZKo/KPo22yhC4', '/_nuxt/BdEEVexV.js': 'sha384-nj9ioatyC6Ez/mrw8SaJlPQ+oAcWWt4saE9H5LiCHSPdK2ZYHHRANYcKyj8Ce48e', '/_nuxt/BdEEVexV.js.map': 'sha384-tY6b1nSOZvx7Uov8dyhRkhDzWeAUIk0W3Q6YFzxxnFYVE0iDSd5JkMUDCKp0yyEk', '/_nuxt/BhWu73fZ.js': 'sha384-4yVmcQVLyEk46vTCYL/tTG8W0W2ntpeDcOpdgEsGrGT8Mlpcsa+OtgwqwtqQ9NnI', '/_nuxt/BhWu73fZ.js.map': 'sha384-f2Q42NiTgfV4CmyxG9Oztt9A0krAv4qDXMPNGIDjTweJ7VWozaV1tVoaenSURfaI', '/_nuxt/Bjq61dCj.js': 'sha384-vFdYrVS+Vc3dIMbGrc3PCbA4Yh7DHaKttNodkNl3UttrWScKbbvDeO9x1Pvtfv9B', '/_nuxt/Bjq61dCj.js.map': 'sha384-oYWuDVw4yrRdWBn73oBEXTbWobKwWbkK6hINCuXSmAy7wb5mMsXB/xkIM2LojqUF', '/_nuxt/BqpAyWLE.js': 'sha384-hXVrKO7X4tcM4YwWvHI4erRtqu4Q/O9UomzHSyqMi6Cl7IMmkcZCq+tw9d0ghall', '/_nuxt/BqpAyWLE.js.map': 'sha384-DcFHuMT/MWh2K4bgWB3Tr34m728HWHgTpaPCwscKBKdfAZ9FFuqmuAgzDCpJUqO+', '/_nuxt/C5EFTOAt.js': 'sha384-4omneaK9Z42xvMAK9+3gLpej2dHCUv3lIyXGYGOOzFkVvVfr4dbq05BHld0XGcJ3', '/_nuxt/C5EFTOAt.js.map': 'sha384-4Slj6zOMd/cia308X4dfzChnx9PcZmIJ1kD+5+qM58XQ6TqZ0+yGWH/SklSCoKR4', '/_nuxt/CBiJGvL7.js': 'sha384-RkmdkPAOGI4azfV2AuNCLG/0Fx3WUYKsqEmVG9+B18dSo34kuT3Qvo+aNPwaCn4u', '/_nuxt/CBiJGvL7.js.map': 'sha384-3UC7a8JVTaBOR6MrcInDTz8umUJ0E/9w03ZaP+dI/VQBNFPXyzGWCDpW6aX/0T2n', '/_nuxt/CDGPgdCp.js': 'sha384-vhag+Cs3DwtuyIBSn1ctauDnWGRKJWWlsP8epPGrWuQmUiAewJpm3jBTHaY/jVNq', '/_nuxt/CDGPgdCp.js.map': 'sha384-1VwULky8k6te2gAVPqM7DpGzmjG3Yy+a2/6Ex/XpcmOJlov/xNefINBtn9GcYyLo', '/_nuxt/CFkOI3W-.js': 'sha384-hrn76d1pc0Ef6ezN35y8lhQnXUEXPTXttwNyaFPjAED+yNQf+ysw6aUeDr4cGrUq', '/_nuxt/CFkOI3W-.js.map': 'sha384-bKBAoVj2/w/7f83ccOffuK8ERtgfsGbxBYrMMQSOrlC2I0o5QeKiiBF171Eha0xv', '/_nuxt/CN7I78ar.js': 'sha384-wM45OieYrwDHJcyWww4hO7SmN5m4DpHGWsmbc/Ysukcthsdgjo7t1zinT04Mo0wf', '/_nuxt/CN7I78ar.js.map': 'sha384-z6pQSbiHetWrBzrB33FDBnonSCCO3NpvXACHVu2zpiLKLKrFTvgPRH8kS+IljRy/', '/_nuxt/CS0a6b9R.js': 'sha384-8YNNmEsTN2iksxbj91yyWyf/M7UfS7pd7ax57FJ3Kz+Fg8hSnskqjBXGSIHfstGC', '/_nuxt/CS0a6b9R.js.map': 'sha384-dk8jV39rlt1o4Lyf5Hy4bFtHIJSTzDkEjIb458PcPPbjFp/8G8ntifayM3vSIzmi', '/_nuxt/CV3qQqeZ.js': 'sha384-P/Ea/xAhx3jcFSRSegd8R4kD4gFHaitpjwbQ3pUqwtMZ3Lb+DUcc0BigB1UsUPph', '/_nuxt/CV3qQqeZ.js.map': 'sha384-bQONgFj+lqAQmUCsITOBPp04L2kGIXw3qRnAE4GgADUJQbEEOAd4WOQP2KfrXv+C', '/_nuxt/CWgGY-bJ.js': 'sha384-NEi8jOSoiQ6BJPSrg6AhUM2uU5jUglFBMRgYl1xPK2T+rOLylueKXVAzl4bU3rlT', '/_nuxt/CWgGY-bJ.js.map': 'sha384-dljD5lyv45oBKysC5xrddxpH2fcuDJ0P3rxvr7uKZlmWyMC7K/RPwgCC1EISClJw', '/_nuxt/ClMGISlm.js': 'sha384-R8ASg4LolFtJCdB82/icd9+P7rSgqHmTsnirx4r6Owe6suue72CLRBiz+NBZSi/E', '/_nuxt/ClMGISlm.js.map': 'sha384-2IKGroRXknaq/BFQlDWhTEVnkN4zsxP+5qE2OpcmffvDBojOQ4xsS7OXY5a6dIgp', '/_nuxt/Cmd2RuYz.js': 'sha384-VC+Gi3QDnwwgvShNfu9Y0aJ5ZkBh7sp6xT+EPRdrImqnAwLYmBKIKCSoqj7rDM2m', '/_nuxt/Cmd2RuYz.js.map': 'sha384-QFj/9PGBWpxPV8MEsOyYWO4igS0OnIkUQj0cvCD0GhyGom2+9JLiWKcCOhE/Xqxc', '/_nuxt/CmsuR1E6.js': 'sha384-Ff/ORdITz49pIKlJSb37RxHDXOX5NwHnL4HajcyYiRVGwRl6zQZ7vJmQRm3U2NFW', '/_nuxt/CmsuR1E6.js.map': 'sha384-aapMy6Gsv9Dlhvz7Q8phbQ7nNhSZYOhtHgH9mlhdDgODrRRZIMrqfKjPEQu4/17F', '/_nuxt/CoBPLtDI.js': 'sha384-O0L2azLNCz/nZYPF4MO09V589ovXGnUjD8+iHRaVna6LlTbaCetnXhxzcbfkO6jy', '/_nuxt/CoBPLtDI.js.map': 'sha384-k0qMQ3XrVnhclQmqAk96gDtgiNuCUklhq1w0xyV+eZHOFb10VSRhgHfsPbM0mKw1', '/_nuxt/CqQuYLhz.js': 'sha384-5jySPJ3ihhTHACyiyZOPhsdYmnULYOV4jIHYt6DayAYQmvLV1j8ar03t6tUp0N4w', '/_nuxt/CqQuYLhz.js.map': 'sha384-634P/ZE0JF00twWyXQSwsW6mtL9oRjm7bN8doq3vP6+sIN5Hz6Ql3vmb2BFzm/UA', '/_nuxt/Cqw45JRX.js': 'sha384-jL54pCX3Iw8X3Ix3VfmuBfsNYWoG0MLFUBdhkqUsY6qzJBIXQeEXCKg0sN9EGJLV', '/_nuxt/Cqw45JRX.js.map': 'sha384-iqie+YeNI+BnC7E0FDmZQ07/MxL+qM8YAoWf0eej0SqkNO5Wt8SAaK2jQE1/Khmr', '/_nuxt/CrZ9GUBY.js': 'sha384-Q9nkTdfn5F0wcLOyJO5JEJX5KI6787gnWlMwbufL1elPIg84vvD/p/4pIVu/n9j3', '/_nuxt/CrZ9GUBY.js.map': 'sha384-xZ7WsPuHuXF06XdFgGdVWTUlFEBQfegR/0RyNhaTfYRl9J6RXBX1JoG3Y+/9OAao', '/_nuxt/CtsLgu0l.js': 'sha384-b+ij4vkxBlXayPIcoz9pDbFavUYVXvJw4a3GZnXd5uP9m2Oea2BtLkgPAGKNjiXZ', '/_nuxt/CtsLgu0l.js.map': 'sha384-kq752Cs0Zn4BuqJ1ZmxOoAK/Nxmh1fqHqZsAFMLUwwxXCt2BePswAVO/N04/7xIg', '/_nuxt/CuVI2Sa4.js': 'sha384-nhn20q+3qgGXFsBl4FWQUu0hx8eR6CGpUxOKkQSsDtt/OVa0WH+4Th43uoMqaqE4', '/_nuxt/CuVI2Sa4.js.map': 'sha384-KwE1kbbu/nyPQJyNYYlr2N1T9te9yrpw2kb+0au7F3TZ+F45HHweXqEbeYREAKIz', '/_nuxt/D1NpV4yV.js': 'sha384-sTVhQP6H5EbSNeKZu7inkYVxW6Os9E6gZAHg2hlWv6X5geGDfz+IXu9ytNedSeNc', '/_nuxt/D1NpV4yV.js.map': 'sha384-R3tycNkKlt1IumWptdAV6/gSMuEBSIX/2wo8nFzMwVmLBg5QoMVPaAZxTdD7KmFi', '/_nuxt/D3c_4dhj.js': 'sha384-KSCKgxv+/j0qpKzi+IZBQQ/5BK2i2SNZz2yTngEpeNmNXd5C7KDmwsAZzlxrvMmr', '/_nuxt/D3c_4dhj.js.map': 'sha384-TGrQsOOziy0JkCmZ5ohkbu+lRKbezo77Cwy1U/IKLXRXbrGWhhbcQ6XfsuAzSjFU', '/_nuxt/D5_pwms5.js': 'sha384-Z1l8hL3jGwv4ClyFxwBddCF3C11VhcK5HCmHiU0isjen4G0Tv2y/RZSVIcMKPmjY', '/_nuxt/D5_pwms5.js.map': 'sha384-u1JzlebTg03mbyzynoiXKBkpBbBATh2COOCm7R/qpztHRryTbK3MHOQJ7OCPE/ky', '/_nuxt/D6ntviQB.js': 'sha384-Qbw/p2lYGSgftkJMlRDpsRG/JZe64G1k2o/2dzUAKOGcinllSgbPQFVKBb9IjhTM', '/_nuxt/D6ntviQB.js.map': 'sha384-MxMz2koL7bv42YuE+fkZSOHxMVHxe1xwYUAwG/A17CkSJLiiVOgBpo7nveSLDjvt', '/_nuxt/D7o2xqKx.js': 'sha384-6UYNM10Fz1u7/d/Yyj8piH4yr1g5MomZI7ubcXLfTrQXvJN1egK2XNim9ZuH8rOw', '/_nuxt/D7o2xqKx.js.map': 'sha384-ed8SQ+x80d/ftyULpEL/EqTba+hTkCn7WDXnxxwjNnaHUkiooaUjMyD2GzDV+mn6', '/_nuxt/DAH77HKN.js': 'sha384-R1PWZUlIBAkvzIZdJbJO/VoJ7HvTJ3tBtzsTTazvgnrJfy6Ilcc1CKnR9u2xBkro', '/_nuxt/DAH77HKN.js.map': 'sha384-nCQcdWUZ17LggBjHulfvbYjz+YkgvWj4Fr7Mu+wwcyGcx+0rOoF4yJ70fjAPHYEP', '/_nuxt/DHabWesJ.js': 'sha384-TWEcemTvBUMUFOPUU9tqqz5KicoxXrz9WhDWwVri6elcYamnLs35Q0jpiuorAgC6', '/_nuxt/DHabWesJ.js.map': 'sha384-hCCgOHlqcYZtzwDFleyvUnsE8I4tSgcqhmONvuKg0jw8Fitwwp1gTaD3wSqh5nZ9', '/_nuxt/DSEc1xZY.js': 'sha384-k7G+JecDpNmiHDucg7WbR7fnkfaFVS7QjjsLTjbAWksbDBT2ddddU3SEmXlThBY3', '/_nuxt/DSEc1xZY.js.map': 'sha384-RUvYyr/D/f7Daj3DbM5X/Tk6fSj75rJtz0qBP3i47DHp+zklw6xl0OtWs3KaJlKP', '/_nuxt/DT9R5pIc.js': 'sha384-8vaJ8ylaReHFNnWgzyIEtKtWg5QWd1Yzf36lfq5bJx8GcuYdd2WHbyi3TcTU4uPS', '/_nuxt/DT9R5pIc.js.map': 'sha384-6D1cJkMIxn0XNlGmEojRoLkvD+Nf1AA5zRQ4iJk+ij+jx2+9JaUolsLggIpfbJ/d', '/_nuxt/DZtUN3Iq.js': 'sha384-T4dBMSFLj8+H+reOYjHLNeevZdYTRCQWz40GnbQ6nhIzKB0gXus57X/UR+4w27ei', '/_nuxt/DZtUN3Iq.js.map': 'sha384-CZEi7L7JxUR1qg8i5LbrB4z1f+KfMI0n/s2Bw3LLHcD2o5XO4T9sqr7DjMCHO/7s', '/_nuxt/DclWunHN.js': 'sha384-63Yy2Hs3zMa+FyxlPu+GGa09DQdiFdypLQP2rNHyIQ1BLfqkqHRwHrGSB89n8h2R', '/_nuxt/DclWunHN.js.map': 'sha384-0G7OEnYwScHZMGJ34AcFHcXYvj3PR32Gu4c/uI04G5tOxZ9Mi8YwrBVWTn1pIZRC', '/_nuxt/DjNVmby3.js': 'sha384-A5ad2mbSORHTj93QXRGeuMkgVqmqmg2jdRireXrKNUatHEiKyIIGSFg6s7f+2rph', '/_nuxt/DjNVmby3.js.map': 'sha384-1tFuYMVQ2XhCqJF0ygK+AXcEpsKl9zR7IwRFnIZ3KXMBwH/rqW6SQVbAHBuJzOg1', '/_nuxt/DmjVlaDP.js': 'sha384-Ak9HeXM9d+cGrJOQHKuXcK1biAD/8eWTM4atUOAZs49Ro9Ws57XwnDRb2R+izEFQ', '/_nuxt/DmjVlaDP.js.map': 'sha384-EbYJKpQ6/zeHyjzMN3JR8HMI+ideGZ1K9xoZenxYQevgfBCJXMAjCiONRe4qSXeT', '/_nuxt/Icon.DOrA00_D.css': 'sha384-2EdoiAHv+yruz1H81OR1+UA+IMy6Mal0ytNg5MJi+5R2owqqTr1WDDNI1MePPtyl', '/_nuxt/IconCSS.CAOctZC3.css': 'sha384-zUG46h+XuWUSMUcgfC2d4EBtY9ZO2BQakPgFDcIulKLFmyUxG09+0L2qrT3E5z4r', '/_nuxt/L4ol-5__.js': 'sha384-YdMNbPvCEjubA6NA9e/YMrZkji+H1j9ZFhoHi5JBP1bpAQ52Sk1V8DdlVqHTt1dY', '/_nuxt/L4ol-5__.js.map': 'sha384-2z3cC2EVFA6zbmUXvb1PeGUp3m54FzBrd7a9Tm3ePrn2bLmC0y+QhJfk7vfPzlyV', '/_nuxt/default.B2IbzvF3.css': 'sha384-CvcZdtrJxJ6WlBmu4UFGDj0Mg3zGI8G6ybuKwJXElnGbgmdafUp2cWrz2+lajP6O', '/_nuxt/entry.BQSPa26z.css': 'sha384-SzT/VRzLBPNLPYW+ezg1mnSccECPacBG6cdwg0D8NJlj7p3A2kDAZiTvvHlA0Usz', '/_nuxt/gCHlYu-5.js': 'sha384-laSXTbnQF8kegoWjejwZMcmlwiVUiFw02VDd2Bd6vScjp+ZGaFEEVwbA6uHvRWIx', '/_nuxt/gCHlYu-5.js.map': 'sha384-sJFqRlg1rhM5VhEdw0HMmTvRLxTIE9XBm2svjILPqXXOxwgMik2jtzDE+U17gFm8', '/_nuxt/k85b5rBH.js': 'sha384-3BDMuK0nPYwM+o6ioXrJuKaYGltspBsvQ5lICIGt6vmAqVqr1PYz8qd5LokRUDcp', '/_nuxt/k85b5rBH.js.map': 'sha384-bUiTQPmolfYz10pIrG3za+wnzo1m6XMXMbbGhJfE+jj9d1lfnK87//keSh97JpsK', '/_nuxt/mBqtLvw3.js': 'sha384-hitCc2I4ACFgSOdUjedBNgm18JhierPYsIfE0H0Ra7tpjRgW8ETJlHxKTshzWja8', '/_nuxt/mBqtLvw3.js.map': 'sha384-AEaw/171WeL6f46KUiz75zBj1GfcG0EpS+U6aCf1x0NwR5LLv39f2Wzrl1DNNSMk', '/_nuxt/nuxt-icon.C6EZ_Po4.css': 'sha384-cv36B/eGR1tsGrgFXGZmN8F6FRMyk5I7/2B1tS1xS05ITFijx5eumt+Lsca3pB+R', '/_nuxt/qOeTDZsY.js': 'sha384-kTLV5Y/fURqwTzpcUSxx4sTDdUrsYh90D6jxYUbQgDh46uLv1pnkIshHGxYu70ax', '/_nuxt/qOeTDZsY.js.map': 'sha384-R+9aXt3Pe0kyN1k/DxtVDbRlAbuVDNEBwFCAqijS6cETZ9Est82Ztlw9F5XhI6nQ', '/_nuxt/uh8TqVct.js': 'sha384-fIQ+oxBvFqOAEtzg9Ju517/eSKEEfU2x7rKZ+CMsEn/Dvj9+VxbgSBwLTk+DmGkO', '/_nuxt/uh8TqVct.js.map': 'sha384-ShbkYVvOcZWxFMhoVMnfI5ghF4v7KpmihwOpAw90zsU4LhwEuDzDKx+WeKV0fuFI', '/_nuxt/vx2p0oP-.js': 'sha384-+iX/F3ZT5z+NvzZZZUY3X9iaLXaGVnT0idqFB2Vy0GI+Fh6yIl6jg8o11E3ECzZP', '/_nuxt/vx2p0oP-.js.map': 'sha384-Y3pEH1z/N8Df+EwMoELwlX92VrtPbhcKnC6AiBUpNGZYt1ZwYyHM0jAFMxR1YswE', '/.DS_Store': 'sha384-k3BBUiVbAvivgWcJAsbTi2YvRpBIHtaTvHOr1JC5483Mb7fnzKygWqwdpR6UqMbj', '/apple-touch-icon.png': 'sha384-pfszyeuvYD6LRGwr9O6ZVKngP0mJ3qrfkgJweeUg0zGF18vANb0mrJl/WdfZ1xPd', '/favicon.ico': 'sha384-udbcbVSoJ0jynxYo+FKdhmcYDst1ze6s6rkgFExSYfpX6tAuGn5whsHNjmcRr4eU', '/maskable-icon.png': 'sha384-Lzj5EZEAr/3tASgNGfcQwvca+a8tc8wpIm0tbMEsH8Ht6rHrJIdcFbKT5WeuCb6N', '/nuxt.svg': 'sha384-uCxVD9IzE6rBXcGzoiDZJaVmJnt78veCoOPri8ihsOM7Zz2aRuwyDefYTW9ychzX', '/pwa-192x192.png': 'sha384-wh74WwkyjEZ4fkBMSHHmNwdcuD2ELY6ICDUuDlP19M2PCcp2JCBpOnEU7wKC/W1u', '/pwa-512x512.png': 'sha384-yKcPfzwqEgYZEEzaSepmfHQQpxLhkoe2UbmFJ3kz8RRT37xFUdesEgKtx+t4sqN3', '/robots.txt': 'sha384-kbgwSX4C7/2UTnY/khKg+3ptIum4VectkGmlprRmhANCY1pMxfNaJxEbYB+Lah3q', '/vite.png': 'sha384-OZDgnDyRE/MPjtXGXzPndcvxEOsDWiZW1a7/vGtstQsKeaqXyBEOV1LMqFNfhLKb' }

const _fiFsCfFF8w = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const rules = resolveSecurityRules(event)
    if (!rules.enabled || !rules.sri)
      return

    const sections = ['body', 'bodyAppend', 'bodyPrepend', 'head']
    const cheerios = event.context.security.cheerios
    for (const section of sections) {
      cheerios[section].forEach(($) => {
        $('script').each((i, script) => {
          const scriptAttrs = $(script).attr()
          const src = scriptAttrs?.src
          const integrity = scriptAttrs?.integrity
          if (src && !integrity) {
            const hash = sriHashes[src]
            if (hash)
              $(script).attr('integrity', hash)
          }
        })
        $('link').each((i, link) => {
          const linkAttrs = $(link).attr()
          const rel = linkAttrs?.rel
          if (rel === 'stylesheet' || rel === 'preload' || rel === 'modulepreload') {
            const href = linkAttrs?.href
            const integrity = linkAttrs?.integrity
            if (href && !integrity) {
              const hash = sriHashes[href]
              if (hash)
                $(link).attr('integrity', hash)
            }
          }
        })
      })
    }
  })
})

function generateHash(content, hashAlgorithm) {
  const hash = createHash(hashAlgorithm)
  hash.update(content)
  return `${hashAlgorithm}-${hash.digest('base64')}`
}

const _1aV2C3zf84 = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const rules = resolveSecurityRules(event)
    if (!rules.enabled || !rules.headers || !rules.headers.contentSecurityPolicy)
      return

    event.context.security.hashes = {
      script: /* @__PURE__ */ new Set(),
      style: /* @__PURE__ */ new Set(),
    }
    const scriptHashes = event.context.security.hashes.script
    const styleHashes = event.context.security.hashes.style
    const hashAlgorithm = 'sha256'
    const cheerios = event.context.security.cheerios
    if (rules.ssg) {
      const { hashScripts, hashStyles } = rules.ssg
      const sections = ['body', 'bodyAppend', 'bodyPrepend', 'head']
      for (const section of sections) {
        cheerios[section].forEach(($) => {
          if (hashScripts) {
            $('script').each((i, script) => {
              const scriptText = $(script).text()
              const scriptAttrs = $(script).attr()
              const src = scriptAttrs?.src
              const integrity = scriptAttrs?.integrity
              if (!src && scriptText)
                scriptHashes.add(`'${generateHash(scriptText, hashAlgorithm)}'`)
              else if (src && integrity)
                scriptHashes.add(`'${integrity}'`)
            })
          }
          if (hashStyles) {
            $('style').each((i, style) => {
              const styleText = $(style).text()
              if (styleText)
                styleHashes.add(`'${generateHash(styleText, hashAlgorithm)}'`)
            })
          }
          $('link').each((i, link) => {
            const linkAttrs = $(link).attr()
            const integrity = linkAttrs?.integrity
            if (integrity) {
              const rel = linkAttrs?.rel
              if (rel === 'stylesheet' && hashStyles) {
                styleHashes.add(`'${integrity}'`)
              }
              else if (rel === 'preload' && hashScripts) {
                const as = linkAttrs.as
                switch (as) {
                  case 'script':
                  case 'audioworklet':
                  case 'paintworklet':
                  case 'xlst':
                    scriptHashes.add(`'${integrity}'`)
                    break
                }
              }
              else if (rel === 'modulepreload' && hashScripts) {
                scriptHashes.add(`'${integrity}'`)
              }
            }
          })
        })
      }
    }
  })
})

const _vuAtk4kP56 = defineNitroPlugin((nitroApp) => {
  {

  }
})

const _2SuF5Z4EFQ = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (response, { event }) => {
    const rules = resolveSecurityRules(event)
    if (rules.enabled && rules.headers) {
      const headers = rules.headers
      if (headers.contentSecurityPolicy) {
        const csp = headers.contentSecurityPolicy
        const nonce = event.context.security?.nonce
        const scriptHashes = event.context.security?.hashes?.script
        const styleHashes = event.context.security?.hashes?.style
        headers.contentSecurityPolicy = updateCspVariables(csp, nonce, scriptHashes, styleHashes)
      }
    }
  })
})
function updateCspVariables(csp, nonce, scriptHashes, styleHashes) {
  const generatedCsp = Object.fromEntries(Object.entries(csp).map(([directive, value]) => {
    if (typeof value === 'boolean')
      return [directive, value]

    const sources = typeof value === 'string' ? value.split(' ').map(token => token.trim()).filter(token => token) : value
    const modifiedSources = sources.filter(source => !source.startsWith('\'nonce-') || source === '\'nonce-{{nonce}}\'').map((source) => {
      if (source === '\'nonce-{{nonce}}\'')
        return nonce ? `'nonce-${nonce}'` : ''
      else
        return source
    }).filter(source => source)
    if (directive === 'script-src' && scriptHashes)
      modifiedSources.push(...scriptHashes)

    if (directive === 'style-src' && styleHashes)
      modifiedSources.push(...styleHashes)

    return [directive, modifiedSources]
  }))
  return generatedCsp
}

const _4X4EAgaX7r = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const rules = resolveSecurityRules(event)
    if (!rules.enabled)
      return

    if (rules.sri || rules.headers && rules.headers.contentSecurityPolicy) {
      const sections = ['body', 'bodyAppend', 'bodyPrepend', 'head']
      const cheerios = event.context.security.cheerios
      for (const section of sections) {
        html[section] = cheerios[section].map(($) => {
          const html2 = $.html()
          return html2
        })
      }
    }
    if (rules.ssg && rules.ssg.meta && rules.headers && rules.headers.contentSecurityPolicy && true) {
      const csp = structuredClone(rules.headers.contentSecurityPolicy)
      csp['frame-ancestors'] = false
      const headerValue = headerStringFromObject('contentSecurityPolicy', csp)
      html.head.unshift(`<meta http-equiv="Content-Security-Policy" content="${headerValue}">`)
    }
  })
})

const _tQIhBZAj5s = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response, { event }) => {
    const rules = resolveSecurityRules(event)
    if (rules.enabled && rules.headers) {
      const headers = rules.headers
      Object.entries(headers).forEach(([header, value]) => {
        const headerName = getNameFromKey(header)
        if (value === false) {
          const { headers: standardHeaders } = getRouteRules(event)
          const standardHeaderValue = standardHeaders?.[headerName]
          const currentHeaderValue = getResponseHeader(event, headerName)
          if (standardHeaderValue === currentHeaderValue)
            removeResponseHeader(event, headerName)
        }
        else {
          const headerValue = headerStringFromObject(header, value)
          setResponseHeader(event, headerName, headerValue)
        }
      })
    }
  })
})

const _je9ZYHEDzJ = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('beforeResponse', (event) => {
    const rules = resolveSecurityRules(event)
    if (rules.enabled && rules.hidePoweredBy && !event.node.res.headersSent)
      removeResponseHeader(event, 'x-powered-by')
  })
})

const _jLaEDztMCY = defineNitroPlugin(async (nitroApp) => {
  {
    const prerenderedHeaders = {}
    nitroApp.hooks.hook('render:html', (_, { event }) => {
      const rules = resolveSecurityRules(event)
      if (rules.enabled && rules.ssg && rules.ssg.nitroHeaders) {
        const headers = getResponseHeaders(event)
        const path = event.path.split('?')[0]
        prerenderedHeaders[path] = headers
      }
    })
    nitroApp.hooks.hook('close', async () => {
      const headers = Object.fromEntries(
        Object.entries(prerenderedHeaders).map(([path, headers2]) => {
          const headersEntries = Object.entries(headers2).filter(([header]) => header !== 'x-nitro-prerender').map(([header, value]) => {
            if (Array.isArray(value))
              return [header, value.join(';')]
            else
              return [header, value]
          })
          return [path, Object.fromEntries(headersEntries)]
        }),
      )
      await useStorage('build:nuxt-security').setItem('headers.json', headers)
    })
  }
})

const plugins = [
  _E4a0OKWfBp,
  _f6lnQifluV,
  _eYQdyMXtmx,
  _U2iKtxI4eM,
  _fiFsCfFF8w,
  _1aV2C3zf84,
  _vuAtk4kP56,
  _2SuF5Z4EFQ,
  _4X4EAgaX7r,
  _tQIhBZAj5s,
  _je9ZYHEDzJ,
  _jLaEDztMCY,
]

const errorHandler = async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error)
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: '',
    // TODO: check and validate error.data for serialisation into query
    data: error.data,
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      '[nuxt]',
      '[request error]',
      error.unhandled && '[unhandled]',
      error.fatal && '[fatal]',
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`,
    ].filter(Boolean).join(' ')
    console.error(tags, `${errorObject.message}\n${stack.map(l => `  ${l.text}`).join('  \n')}`)
  }
  if (event.handled)
    return

  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage)
  if (isJsonRequest(event)) {
    setResponseHeader(event, 'Content-Type', 'application/json')
    return send(event, JSON.stringify(errorObject))
  }
  const reqHeaders = getRequestHeaders(event)
  const isRenderingError = event.path.startsWith('/__nuxt_error') || !!reqHeaders['x-nuxt-error']
  const res = isRenderingError
    ? null
    : await useNitroApp().localFetch(
      withQuery(joinURL(useRuntimeConfig(event).app.baseURL, '/__nuxt_error'), errorObject),
      {
        headers: { ...reqHeaders, 'x-nuxt-error': 'true' },
        redirect: 'manual',
      },
    ).catch(() => null)
  if (!res) {
    const { template } = await import('./_/error-500.mjs')
    if (event.handled)
      return

    setResponseHeader(event, 'Content-Type', 'text/html;charset=UTF-8')
    return send(event, template(errorObject))
  }
  const html = await res.text()
  if (event.handled)
    return

  for (const [header, value] of res.headers.entries())
    setResponseHeader(event, header, value)

  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText)
  return send(event, html)
}

const assets = {}

function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url))
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = { '/_nuxt/builds/meta': { maxAge: 31536000 }, '/_nuxt/builds': { maxAge: 1 }, '/_fonts': { maxAge: 31536000 }, '/_scripts': { maxAge: 31536000 }, '/_nuxt': { maxAge: 31536000 } }

function isPublicAssetURL(id = '') {
  if (assets[id])
    return true

  for (const base in publicAssetBases) {
    if (id.startsWith(base))
      return true
  }

  return false
}

function getAsset(id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(['HEAD', 'GET'])
const EncodingMap = { gzip: '.gz', br: '.br' }
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method))
    return

  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname)),
  )
  let asset
  const encodingHeader = String(
    getRequestHeader(event, 'accept-encoding') || '',
  )
  const encodings = [
    ...encodingHeader.split(',').map(e => EncodingMap[e.trim()]).filter(Boolean).sort(),
    '',
  ]
  if (encodings.length > 1)
    setResponseHeader(event, 'Vary', 'Accept-Encoding')

  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, `index.html${encoding}`)]) {
      const _asset = getAsset(_id)
      if (_asset) {
        asset = _asset
        id = _id
        break
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, 'Cache-Control')
      throw createError({
        statusMessage: `Cannot find static asset ${id}`,
        statusCode: 404,
      })
    }
    return
  }
  const ifNotMatch = getRequestHeader(event, 'if-none-match') === asset.etag
  if (ifNotMatch) {
    setResponseStatus(event, 304, 'Not Modified')
    return ''
  }
  const ifModifiedSinceH = getRequestHeader(event, 'if-modified-since')
  const mtimeDate = new Date(asset.mtime)
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, 'Not Modified')
    return ''
  }
  if (asset.type && !getResponseHeader(event, 'Content-Type'))
    setResponseHeader(event, 'Content-Type', asset.type)

  if (asset.etag && !getResponseHeader(event, 'ETag'))
    setResponseHeader(event, 'ETag', asset.etag)

  if (asset.mtime && !getResponseHeader(event, 'Last-Modified'))
    setResponseHeader(event, 'Last-Modified', mtimeDate.toUTCString())

  if (asset.encoding && !getResponseHeader(event, 'Content-Encoding'))
    setResponseHeader(event, 'Content-Encoding', asset.encoding)

  if (asset.size > 0 && !getResponseHeader(event, 'Content-Length'))
    setResponseHeader(event, 'Content-Length', asset.size)

  return readAsset(id)
})

const FILE_UPLOAD_HEADER = 'multipart/form-data'
const _iKJvaO = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event)
  if (rules.enabled && rules.requestSizeLimiter) {
    if (['POST', 'PUT', 'DELETE'].includes(event.node.req.method)) {
      const contentLengthValue = getRequestHeader(event, 'content-length')
      const contentTypeValue = getRequestHeader(event, 'content-type')
      const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER)
      const requestLimit = isFileUpload ? rules.requestSizeLimiter.maxUploadFileRequestInBytes : rules.requestSizeLimiter.maxRequestSizeInBytes
      if (Number.parseInt(contentLengthValue) >= requestLimit) {
        const payloadTooLargeError = {
          statusCode: 413,
          statusMessage: 'Payload Too Large',
        }
        if (rules.requestSizeLimiter.throwError === false)
          return payloadTooLargeError

        throw createError(payloadTooLargeError)
      }
    }
  }
})

const _3zI864 = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event)
  if (rules.enabled && rules.corsHandler) {
    const { corsHandler } = rules
    handleCors(event, corsHandler)
  }
})

const _JHrOUK = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event)
  if (rules.enabled && rules.allowedMethodsRestricter) {
    const { allowedMethodsRestricter } = rules
    const allowedMethods = allowedMethodsRestricter.methods
    if (allowedMethods !== '*' && !allowedMethods.includes(event.node.req.method)) {
      const methodNotAllowedError = {
        statusCode: 405,
        statusMessage: 'Method not allowed',
      }
      if (allowedMethodsRestricter.throwError === false)
        return methodNotAllowedError

      throw createError(methodNotAllowedError)
    }
  }
})

useStorage('#rate-limiter-storage')
const _O9OOp9 = defineEventHandler(async (event) => {
  {

  }
})

const _0weUqG = defineEventHandler(async (event) => {
  const rules = resolveSecurityRules(event)
  if (rules.enabled && rules.xssValidator) {
    const filterOpt = {
      ...rules.xssValidator,
      escapeHtml: void 0,
    }
    if (rules.xssValidator.escapeHtml === false)
      filterOpt.escapeHtml = value => value

    const xssValidator = new FilterXSS(filterOpt)
    if (event.node.req.socket.readyState !== 'readOnly') {
      if (rules.xssValidator.methods && rules.xssValidator.methods.includes(
        event.node.req.method,
      )) {
        const valueToFilter = event.node.req.method === 'GET'
          ? getQuery$1(event)
          : event.node.req.headers['content-type']?.includes(
            'multipart/form-data',
          )
            ? await readMultipartFormData(event)
            : await readBody(event)
        if (valueToFilter && Object.keys(valueToFilter).length) {
          if (valueToFilter.statusMessage && valueToFilter.statusMessage !== 'Bad Request')
            return

          const stringifiedValue = JSON.stringify(valueToFilter)
          const processedValue = xssValidator.process(
            JSON.stringify(valueToFilter),
          )
          if (processedValue !== stringifiedValue) {
            const badRequestError = {
              statusCode: 400,
              statusMessage: 'Bad Request',
            }
            if (rules.xssValidator.throwError === false)
              return badRequestError

            throw createError(badRequestError)
          }
        }
      }
    }
  }
})

const _3Fgx1A = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {}
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map(dir => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0
  if (!fsStorage && !httpStorage)
    throw new Error('IPX storage is not configured!')

  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage,
  }
  const ipx = createIPX(ipxOptions)
  const ipxHandler = createIPXH3Handler(ipx)
  return useBase(opts.baseURL, ipxHandler)
})

const _lazy_nc5p8V = () => import('./routes/api/auth/login.post.mjs')
const _lazy_Z3QEJK = () => import('./routes/api/pageview.mjs')
const _lazy_ePVjmx = () => import('./_/renderer.mjs').then((n) => { return n.r })

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/login', handler: _lazy_nc5p8V, lazy: true, middleware: false, method: 'post' },
  { route: '/api/pageview', handler: _lazy_Z3QEJK, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _iKJvaO, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _3zI864, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _JHrOUK, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _O9OOp9, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _0weUqG, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _3Fgx1A, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ePVjmx, lazy: true, middleware: false, method: undefined },
]

function createNitroApp() {
  const config = useRuntimeConfig()
  const hooks = createHooks()
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel('error', error, context).catch((_err) => {
      console.error('Error while capturing another error', _err)
    })
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors
      if (errors)
        errors.push({ error, context })

      if (context.event.waitUntil)
        context.event.waitUntil(promise)
    }
  }
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ['request'] })
      return errorHandler(error, event)
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook('request', event).catch((error) => {
        captureError(error, { event, tags: ['request'] })
      })
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook('beforeResponse', event, response).catch((error) => {
        captureError(error, { event, tags: ['request', 'response'] })
      })
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook('afterResponse', event, response).catch((error) => {
        captureError(error, { event, tags: ['request', 'response'] })
      })
    },
  })
  const router = createRouter$1({
    preemptive: true,
  })
  const localCall = createCall(toNodeListener(h3App))
  const _localFetch = createFetch(localCall, globalThis.fetch)
  const localFetch = (input, init) => _localFetch(input, init).then(
    response => normalizeFetchResponse(response),
  )
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL },
  })
  globalThis.$fetch = $fetch
  h3App.use(createRouteRulesHandler({ localFetch }))
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] }
      const envContext = event.node.req?.__unenv__
      if (envContext)
        Object.assign(event.context, envContext)

      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch })
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch,
      })
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises)
          event.context.nitro._waitUntilPromises = []

        event.context.nitro._waitUntilPromises.push(promise)
        if (envContext?.waitUntil)
          envContext.waitUntil(promise)
      }
      event.captureError = (error, context) => {
        captureError(error, { event, ...context })
      }
    }),
  )
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || '/')).replace(
        /\/+/g,
        '/',
      )
      h3App.use(middlewareBase, handler)
    }
    else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, '_'),
      )
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: 'nitro/routes',
          ...routeRules.cache,
        })
      }
      router.use(h.route, handler, h.method)
    }
  }
  h3App.use(config.app.baseURL, router.handler)
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError,
  }
  for (const plugin of plugins) {
    try {
      plugin(app)
    }
    catch (err) {
      captureError(err, { tags: ['plugin'] })
      throw err
    }
  }
  return app
}
const nitroApp = createNitroApp()
const useNitroApp = () => nitroApp

const localFetch = nitroApp.localFetch
const closePrerenderer = () => nitroApp.hooks.callHook('close')
trapUnhandledNodeErrors()

export { useRuntimeConfig as a, useStorage as b, closePrerenderer as c, getRouteRules as g, joinRelativeURL as j, localFetch as l, useNitroApp as u }
// # sourceMappingURL=runtime.mjs.map
