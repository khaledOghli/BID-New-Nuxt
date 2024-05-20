import Swal from 'sweetalert2';
import type { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import { defineNuxtPlugin } from '#app';

// Define default options for SweetAlert
const defaultSwalOptions: SweetAlertOptions = {
  position: 'center',
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong! Try again',
  showConfirmButton: true,
  showCancelButton: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
  showLoaderOnConfirm: true,
  showCloseButton: false,
  buttonsStyling: true,
  confirmButtonColor: '#3d88fc',
  cancelButtonColor: '#7c7c7c',
  denyButtonColor: '#fc2134',
  // customClass: {
  //   confirmButton: 'btn-primary',
  //   denyButton: 'btn-light',
  //   cancelButton: 'btn-light',
  // },
  confirmButtonText: 'OK',
};

// Define callback types for SweetAlert actions
type ConfirmCallback = () => void;
type DismissedCallback = () => void;
type DeniedCallback = () => void;

/**
 * A utility function to display a SweetAlert modal.
 * @param options - The options for configuring the SweetAlert modal.
 * @param confirmCallback - Callback function to execute when the modal is confirmed.
 * @param dismissedCallback - Callback function to execute when the modal is dismissed.
 * @param deniedCallback - Callback function to execute when the modal is denied.
 */
const useSweetAlert = (
  options: SweetAlertOptions,
  confirmCallback?: ConfirmCallback,
  dismissedCallback?: DismissedCallback,
  deniedCallback?: DeniedCallback
) => {
  // Define a preConfirm function that resolves after a short delay
  const preConfirm = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  };

  // Merge default options with provided options and display the SweetAlert modal
  Swal.fire(Object.assign({}, defaultSwalOptions, options, { preConfirm })).then(
    (result: SweetAlertResult) => {
      // Execute appropriate callback based on modal result
      if (result.isConfirmed && confirmCallback) confirmCallback();
      else if (result.isDismissed && dismissedCallback) dismissedCallback();
      else if (result.isDenied && deniedCallback) deniedCallback();
    }
  );
};

export default defineNuxtPlugin((nuxtApp) => {
  // Make SweetAlert2 and the custom function available globally
  nuxtApp.provide('swal', Swal);
  nuxtApp.provide('useSweetAlert', useSweetAlert);
});
