export default defineNuxtPlugin(async () => {
  const { data, refresh } = useFetch("/api", { key: "foo" });
  const loggedIn = useState("loggedIn", () => false);

  addRouteMiddleware(
    "auth",
    (to) => {
      if (!loggedIn.value && to.meta.auth) {
        return "/login";
      }
    },
    { global: true }
  );

  const currentRoute = useRoute();
  watch(loggedIn, async (isLoggedIn) => {
    if (isLoggedIn && currentRoute.path === "/login") {
      await navigateTo("/");
    }
  });

  return {
    provide: {
      data,
      refresh,
      loggedIn,
    },
  };
});
