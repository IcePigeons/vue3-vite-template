import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // 注册路由
import { createPinia } from "pinia"; // 注册pinia

// Vuetify
import { registerPlugins } from "./plugins/index";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
//注册插件
registerPlugins(app);

app.use(router).use(vuetify).use(createPinia()).mount("#app");
