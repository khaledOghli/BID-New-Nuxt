// Specify the module for your composables
declare module '#app' {
  interface NuxtApp {
    $useLocaleDate: (date: Ref<Date> | Date, locale?: Ref<string>) => ComputedRef<string>
    $useLocaleDateWithTime: (
      date: Ref<Date> | Date,
      locale?: Ref<string>
    ) => ComputedRef<string>
    $useLocaleOnlyTime: (date: Ref<Date> | Date, locale?: Ref<string>) => ComputedRef<string>
    $getCurrentGMTOffset: () => string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $useLocaleDate: (date: Ref<Date> | Date, locale?: Ref<string>) => ComputedRef<string>
    $useLocaleDateWithTime: (
      date: Ref<Date> | Date,
      locale?: Ref<string>
    ) => ComputedRef<string>
    $useLocaleOnlyTime: (date: Ref<Date> | Date, locale?: Ref<string>) => ComputedRef<string>
    $getCurrentGMTOffset: () => string
  }
}
declare module '@nuxt/types' {
  interface Context {
    $useLocaleDate: (date: Ref<Date> | Date) => ComputedRef<string>
    $useLocaleDateWithTime: (date: Ref<Date> | Date) => ComputedRef<string>
    $useLocaleOnlyTime: (date: Ref<Date> | Date) => ComputedRef<string>
    $getCurrentGMTOffset: () => string
  }
}

// Ensure these types are included in the project
export { };
