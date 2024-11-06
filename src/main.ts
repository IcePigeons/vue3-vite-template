import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // 注册路由
import { createPinia } from "pinia"; // 注册pinia
import i18n from "./locales";
import { registerPlugins } from "./plugins/index";

const app = createApp(App);
//注册vuetify插件
registerPlugins(app);

app.use(router).use(i18n).use(createPinia()).mount("#app");
