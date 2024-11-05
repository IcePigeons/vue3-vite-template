import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const myCustomTheme: any = {
  // 自定义主题配置
  light: {},
  dark: {},
};

//vuetify图标库设置
export default createVuetify({
  defaults: {
    global: {
      ripple: true, // 默认开启波纹效果
    },
    VSheet: {
      elevation: 4, //阴影深度
    },
  },
  theme: {
    defaultTheme: "light", // 默认主题
    themes: {
      myCustomTheme, // 自定义主题
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
