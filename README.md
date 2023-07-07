### Nuxt 3.6.2 Issue

If you look at the `submit` function in _pages/login.vue_, you see that there is an `await refreshNuxtData` call. That should fire off a fetch request to _/api_ and proceed to set a logged in state which will cause the page to redirect. The redirect logic is in _plugins/auth.ts_, however I don't believe the executing code ever reaches that file.

The `ssr: false` configuration must be set for this issue to happen. Also a full server restart (CTRL-C) must happen to see the effect of changing this setting.

The offending commit appears to be from https://github.com/nuxt/nuxt/pull/21823.
