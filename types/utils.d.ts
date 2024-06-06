declare module 'vue' {
  interface ComponentCustomProperties {
    useSwal: () => any
    useToaster: () => any
    useLocaleDate: (date: Date) => string
    useLocaleOnlyTime: (date: Date) => string
    useLocaleDateWithTime: (date: Date) => string
    getCurrentGMTOffset: () => string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $useSwal: () => any
    $useToaster: () => any
    $useLocaleDate: (date: Date) => string
    $useLocaleOnlyTime: (date: Date) => string
    $useLocaleDateWithTime: (date: Date) => string
    $getCurrentGMTOffset: () => string
  }
  interface Context {
    $useSwal: () => any
    $useToaster: () => any
    $useLocaleDate: (date: Date) => string
    $useLocaleOnlyTime: (date: Date) => string
    $useLocaleDateWithTime: (date: Date) => string
    $getCurrentGMTOffset: () => string
  }
}

declare global {
  interface Window {
    $useSwal: () => any
    $useToaster: () => any
    $useLocaleDate: (date: Date) => string
    $useLocaleOnlyTime: (date: Date) => string
    $useLocaleDateWithTime: (date: Date) => string
    $getCurrentGMTOffset: () => string
  }
}
export { };
