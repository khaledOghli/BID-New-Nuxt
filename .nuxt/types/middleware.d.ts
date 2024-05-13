import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "guest"
declare module "../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@types+node@20.12.11_@unocss+reset@0.60.2_eslint@9.2.0_f_f4r6k7ylgqzaffobe3md2dvgtu/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}