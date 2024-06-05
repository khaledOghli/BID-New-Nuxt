declare module 'vue' {
  interface ComponentCustomProperties {
    // $t is for i18n
    $t: (key: string) => string
  }
}
export {}
