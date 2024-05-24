import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "home" | "internal" | "admin" | "auth"
declare module "../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12.12_@unocss+reset_h7mcoc2ebmazgsca6qpbz5rcxi/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}