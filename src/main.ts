import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { setupPlugins } from "./plugins";

import "@/assets/style/index.css";
const app = createApp(App);
app.use(router);
setupPlugins(app);
app.mount("#app");
