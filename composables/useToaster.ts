import { useToast } from 'primevue/usetoast'
import type { ToastServiceMethods } from 'primevue/toastservice'
import type { ToastProps } from 'primevue/toast'

interface ToastOptionsInterface extends ToastProps {
  allwedMultiple?: boolean
  severity?: 'success' | 'info' | 'warn' | 'error'
  group?: string
  detail?: string
  summary?: string
  life?: number
}
// const defaultToastMessage: ToastMessageOptions = {
//   severity: 'error',
//   summary: 'Oops...',
//   detail: 'Something went wrong! Try again',
//   life: 4000,
// };
const defaultToastOptions: ToastOptionsInterface = {
  severity: 'error',
  summary: 'Oops...',
  detail: 'Something went wrong! Try again',
  life: 4000,
  allwedMultiple: false,
  position: 'top-right',
}

export function useToaster(options: ToastOptionsInterface) {
  const toast = useToast() as ToastServiceMethods
  return {
    add: (options: ToastOptionsInterface) => {
      if (options && options.allwedMultiple) {
        toast.add({ ...defaultToastOptions, ...options })
      }
      else {
        toast.removeAllGroups()
        toast.add({ ...defaultToastOptions, ...options })
      }
    },
    remove: (options: ToastOptionsInterface) => {
      toast.remove(options)
    },
    removeGroup: (group: string) => {
      toast.removeGroup(group)
    },
    removeAllGroups: () => {
      toast.removeAllGroups()
    },
  }
}
