import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //vuetify自动引入插件
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //兼容src目录下的文件夹可通过@/xxxx/xxxx引入
    },
  },
});
