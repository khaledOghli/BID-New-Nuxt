import 'vue-i18n';
import type { DefineDateTimeFormat, DefineLocaleMessage, DefineNumberFormat } from 'vue-i18n';

declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    [key: string]: string | DefineLocaleMessage
  }

  export interface DefineDateTimeFormat {
    [key: string]: Intl.DateTimeFormatOptions
  }

  export interface DefineNumberFormat {
    [key: string]: Intl.NumberFormatOptions
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: typeof import('vue-i18n').Translate
    $i18n: import('vue-i18n').I18n<DefineLocaleMessage, DefineDateTimeFormat, DefineNumberFormat>
  }
}
