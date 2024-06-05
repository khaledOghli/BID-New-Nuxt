import type { NavigationGuard } from 'vue-router'

export type MiddlewareKey = 'auth' | 'guest'
declare module '../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12.12_@unocss+reset_h7mcoc2ebmazgsca6qpbz5rcxi/node_modules/nuxt/dist/pages/runtime/composables' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}
