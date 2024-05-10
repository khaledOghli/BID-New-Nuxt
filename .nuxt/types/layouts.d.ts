import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "home" | "internal"
declare module "../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@unocss+reset@0.59.4_eslint@9.2.0_floating-vue@5.2.2_rol_6xwg5e3mlwjpm2w3deshjg65ru/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}