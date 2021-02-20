import { createApp } from "vue";

import { App, router } from "./app";
import store from "./store";

import "./registerServiceWorker";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
