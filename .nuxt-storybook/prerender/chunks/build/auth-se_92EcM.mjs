import { t as useCookie, v as defineStore } from './server.mjs';

function useAuthStorage({
  authTokenKey,
  authUserKey
} = {
  authTokenKey: "auth.token",
  authUserKey: "auth.user"
}) {
  const user = useCookie(authUserKey);
  const token = useCookie(authTokenKey);
  const store = (newToken, newUser) => {
    token.value = newToken;
    user.value = newUser;
  };
  const clear = () => {
    user.value = null;
    token.value = "";
  };
  return {
    store,
    clear,
    user,
    token
  };
}
const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    const {
      token,
      user
    } = useAuthStorage();
    return {
      loggedIn: !!token.value,
      user: user.value,
      loading: false
    };
  },
  actions: {
    logout() {
      const {
        clear
      } = useAuthStorage();
      clear();
      this.loggedIn = false;
      this.user = null;
    }
  }
});

export { useAuthStorage as a, useAuthStore as u };
//# sourceMappingURL=auth-se_92EcM.mjs.map
