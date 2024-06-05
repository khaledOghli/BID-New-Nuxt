import type { SweetAlertOptions } from 'sweetalert2'
import type { useSweetAlert } from '~/plugins/sweetAlert'

declare module 'sweetalert2' {
  export * from 'sweetalert2'
  export { default } from 'sweetalert2'
}

declare module 'sweetalert2/dist/sweetalert2.js' {
  export * from 'sweetalert2'
  export { default } from 'sweetalert2'
}

declare module 'sweetalert2/dist/sweetalert2.all.js' {
  export * from 'sweetalert2'
  export { default } from 'sweetalert2'
}

declare module '#app' {
  interface NuxtApp {
    $useSweetAlert: typeof useSweetAlert
  }
}
declare function useNuxtApp(): NuxtApp

declare interface $useSweetAlert {
  (options: SweetAlertOptions): void
}

export default {}
// Repeat for other submodules if necessary
