import { createApp } from "vue";

import { store } from "@app/store";
import { App, router } from "./app";

import "./register-service-worker";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
