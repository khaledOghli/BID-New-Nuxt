import type { ToastProps } from 'primevue/toast';
import type { ToastServiceMethods } from 'primevue/toastservice';
import { useToast } from 'primevue/usetoast';

interface ToastOptionsInterface extends ToastProps {
  allwedMultiple?: boolean
  severity?: 'success' | 'info' | 'warn' | 'error'
  group?: string
  detail?: string
  summary?: string
  life?: number
}
export enum ToastPosition {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
  Center = 'center',
}

const defaultToastOptions: ToastOptionsInterface = {
  severity: 'error',
  summary: 'Oops...',
  detail: 'Something went wrong! Try again',
  life: 4000,
  allwedMultiple: false,
  position: 'top-right',
};

export function useToaster() {
  const toast = useToast() as ToastServiceMethods;
  return {
    add: (options: ToastOptionsInterface) => {
      if (options && options.allwedMultiple) {
        toast.add({ ...defaultToastOptions, ...options });
      }
      else {
        toast.removeAllGroups();
        toast.add({ ...defaultToastOptions, ...options });
      }
    },
    remove: (options: ToastOptionsInterface) => {
      toast.remove(options);
    },
    removeGroup: (group: string) => {
      toast.removeGroup(group);
    },
    removeAllGroups: () => {
      toast.removeAllGroups();
    },
  };
}
