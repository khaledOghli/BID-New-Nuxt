import type { NuxtModule, RuntimeConfig } from 'nuxt/schema';

declare module 'nuxt/schema' {
  interface NuxtConfig {
    ['vueuse']?: typeof import('@vueuse/nuxt').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['fonts']?: typeof import('@nuxt/fonts').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['fontMetrics']?: typeof import('@nuxtjs/fontaine').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['unocss']?: typeof import('@unocss/nuxt').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['image']?: typeof import('@nuxt/image').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['pinia']?: typeof import('@pinia/nuxt').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['colorMode']?: typeof import('@nuxtjs/color-mode').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['eslint']?: typeof import('@nuxt/eslint').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['primevue']?: typeof import('nuxt-primevue').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['icon']?: typeof import('nuxt-icon').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['i18n']?: typeof import('@nuxtjs/i18n').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['cookieControl']?: typeof import('@dargmuesli/nuxt-cookie-control').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['lodash']?: typeof import('nuxt-lodash').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['viewport']?: typeof import('nuxt-viewport').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['nuxtIcons']?: typeof import('nuxt-icons').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['webVitals']?: typeof import('@nuxtjs/web-vitals').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['time']?: typeof import('nuxt-time').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['scripts']?: typeof import('@nuxt/scripts').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['unlazy']?: typeof import('@unlazy/nuxt').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['security']?: typeof import('nuxt-security').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['devtools']?: typeof import('@nuxt/devtools').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ['telemetry']?: typeof import('@nuxt/telemetry').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ['@vueuse/nuxt', Exclude<NuxtConfig['vueuse'], boolean>] | ['@nuxt/fonts', Exclude<NuxtConfig['fonts'], boolean>] | ['@nuxtjs/fontaine', Exclude<NuxtConfig['fontMetrics'], boolean>] | ['@unocss/nuxt', Exclude<NuxtConfig['unocss'], boolean>] | ['@nuxt/image', Exclude<NuxtConfig['image'], boolean>] | ['@pinia/nuxt', Exclude<NuxtConfig['pinia'], boolean>] | ['@nuxtjs/color-mode', Exclude<NuxtConfig['colorMode'], boolean>] | ['@nuxt/eslint', Exclude<NuxtConfig['eslint'], boolean>] | ['nuxt-primevue', Exclude<NuxtConfig['primevue'], boolean>] | ['nuxt-icon', Exclude<NuxtConfig['icon'], boolean>] | ['@nuxtjs/i18n', Exclude<NuxtConfig['i18n'], boolean>] | ['@dargmuesli/nuxt-cookie-control', Exclude<NuxtConfig['cookieControl'], boolean>] | ['nuxt-lodash', Exclude<NuxtConfig['lodash'], boolean>] | ['nuxt-viewport', Exclude<NuxtConfig['viewport'], boolean>] | ['nuxt-icons', Exclude<NuxtConfig['nuxtIcons'], boolean>] | ['@nuxtjs/web-vitals', Exclude<NuxtConfig['webVitals'], boolean>] | ['nuxt-time', Exclude<NuxtConfig['time'], boolean>] | ['@nuxt/scripts', Exclude<NuxtConfig['scripts'], boolean>] | ['@unlazy/nuxt', Exclude<NuxtConfig['unlazy'], boolean>] | ['nuxt-security', Exclude<NuxtConfig['security'], boolean>] | ['@nuxt/devtools', Exclude<NuxtConfig['devtools'], boolean>] | ['@nuxt/telemetry', Exclude<NuxtConfig['telemetry'], boolean>])[]
  }
  interface RuntimeConfig {
    'app': {
      baseURL: string

      buildAssetsDir: string

      cdnURL: string
    }

    'nuxt-scripts': {
      version: string
    }

    'private': {
      basicAuth: boolean
    }

    'security': {
      headers: {
        crossOriginResourcePolicy: string

        crossOriginOpenerPolicy: string

        crossOriginEmbedderPolicy: string

        contentSecurityPolicy: {
          'base-uri': Array<string>

          'font-src': Array<string>

          'form-action': Array<string>

          'frame-ancestors': Array<string>

          'img-src': Array<string>

          'object-src': Array<string>

          'script-src-attr': Array<string>

          'style-src': Array<string>

          'script-src': Array<string>

          'upgrade-insecure-requests': boolean
        }

        originAgentCluster: string

        referrerPolicy: string

        strictTransportSecurity: {
          maxAge: number

          includeSubdomains: boolean
        }

        xContentTypeOptions: string

        xDNSPrefetchControl: string

        xDownloadOptions: string

        xFrameOptions: string

        xPermittedCrossDomainPolicies: string

        xXSSProtection: string

        permissionsPolicy: {
          'camera': Array<any>

          'display-capture': Array<any>

          'fullscreen': Array<any>

          'geolocation': Array<any>

          'microphone': Array<any>
        }
      }

      requestSizeLimiter: {
        maxRequestSizeInBytes: number

        maxUploadFileRequestInBytes: number

        throwError: boolean
      }

      rateLimiter: {
        tokensPerInterval: number

        interval: number

        headers: boolean

        driver: {
          name: string
        }

        throwError: boolean
      }

      xssValidator: {
        methods: Array<string>

        throwError: boolean
      }

      corsHandler: {
        origin: string

        methods: Array<string>

        preflight: {
          statusCode: number
        }
      }

      allowedMethodsRestricter: {
        methods: string

        throwError: boolean
      }

      hidePoweredBy: boolean

      enabled: boolean

      csrf: boolean

      nonce: boolean

      removeLoggers: {
        external: Array<any>

        consoleType: Array<string>

        include: Array<{

        }>

        exclude: Array<{

        }>
      }

      ssg: {
        meta: boolean

        hashScripts: boolean

        hashStyles: boolean

        nitroHeaders: boolean

        exportToPresets: boolean
      }

      sri: boolean
    }
  }
  interface PublicRuntimeConfig {
    'baseUrl': string

    'primevue': {
      usePrimeVue: boolean

      resolvePath: any

      cssLayerOrder: string

      importPT: any

      options: {
        ripple: boolean
      }

      components: Array<{

      }>

      directives: Array<{

      }>

      composables: Array<{

      }>

      config: Array<{

      }>

      services: Array<any>

      styles: Array<{

      }>

      injectStylesAsString: Array<any>

      injectStylesAsStringToTop: Array<string>
    }

    'i18n': {
      baseUrl: string

      defaultLocale: string

      defaultDirection: string

      strategy: string

      lazy: boolean

      rootRedirect: any

      routesNameSeparator: string

      defaultLocaleRouteNameSuffix: string

      skipSettingLocaleOnNavigate: boolean

      differentDomains: boolean

      trailingSlash: boolean

      configLocales: Array<{

      }>

      locales: {
        en: {
          domain: any
        }

        ar: {
          domain: any
        }
      }

      detectBrowserLanguage: {
        alwaysRedirect: boolean

        cookieCrossOrigin: boolean

        cookieDomain: any

        cookieKey: string

        cookieSecure: boolean

        fallbackLocale: string

        redirectOn: string

        useCookie: boolean
      }

      experimental: {
        localeDetector: string

        switchLocalePathLinkSSR: boolean

        autoImportTranslationFunctions: boolean
      }
    }

    'nuxt-scripts': {
      defaultScriptOptions: {
        trigger: string
      }
    }

    'unlazy': {
      ssr: boolean

      placeholderSize: number
    }

    'cookieControl': {
      barPosition: string

      closeModalOnClickOutside: boolean

      colors: {
        barBackground: string

        barButtonBackground: string

        barButtonColor: string

        barButtonHoverBackground: string

        barButtonHoverColor: string

        barTextColor: string

        checkboxActiveBackground: string

        checkboxActiveCircleBackground: string

        checkboxDisabledBackground: string

        checkboxDisabledCircleBackground: string

        checkboxInactiveBackground: string

        checkboxInactiveCircleBackground: string

        controlButtonBackground: string

        controlButtonHoverBackground: string

        controlButtonIconColor: string

        controlButtonIconHoverColor: string

        focusRingColor: string

        modalBackground: string

        modalButtonBackground: string

        modalButtonColor: string

        modalButtonHoverBackground: string

        modalButtonHoverColor: string

        modalOverlay: string

        modalOverlayOpacity: number

        modalTextColor: string

        modalUnsavedColor: string
      }

      cookies: {
        necessary: Array<any>

        optional: Array<any>
      }

      cookieExpiryOffsetMs: number

      cookieNameIsConsentGiven: string

      cookieNameCookiesEnabledIds: string

      cookieOptions: {
        path: string

        sameSite: string

        secure: any
      }

      isAcceptNecessaryButtonEnabled: boolean

      isControlButtonEnabled: boolean

      isCookieIdVisible: boolean

      isCssEnabled: boolean

      isCssPonyfillEnabled: boolean

      isDashInDescriptionEnabled: boolean

      isIframeBlocked: boolean

      isModalForced: boolean

      locales: Array<string>

      localeTexts: {
        en: {
          accept: string

          acceptAll: string

          bannerDescription: string

          bannerTitle: string

          close: string

          cookiesFunctional: string

          cookiesNecessary: string

          cookiesOptional: string

          decline: string

          declineAll: string

          here: string

          iframeBlocked: string

          manageCookies: string

          save: string

          settingsUnsaved: string
        }

        fr: {
          accept: string

          acceptAll: string

          bannerDescription: string

          bannerTitle: string

          close: string

          cookiesFunctional: string

          cookiesNecessary: string

          cookiesOptional: string

          decline: string

          declineAll: string

          here: string

          iframeBlocked: string

          manageCookies: string

          save: string

          settingsUnsaved: string
        }

        ar: {
          accept: string

          acceptAll: string

          bannerDescription: string

          bannerTitle: string

          close: string

          cookiesFunctional: string

          cookiesNecessary: string

          cookiesOptional: string

          decline: string

          declineAll: string

          here: string

          iframeBlocked: string

          manageCookies: string

          save: string

          settingsUnsaved: string
        }
      }
    }
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $config: RuntimeConfig
  }
}
