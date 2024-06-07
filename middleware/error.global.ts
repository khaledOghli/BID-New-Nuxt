export default defineNuxtRouteMiddleware((to) => {
  debugger;
  if ('middleware' in to.query) {
    return showError('error in middleware');
  }
});
