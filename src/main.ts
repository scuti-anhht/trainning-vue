import { createApp } from "vue";
import AppVue from "./App.vue";

import "./assets/main.css";
import router from "./routers";

const app = createApp(AppVue);
app.use(router);
app.mount("#app");
