import DefaultTheme from "vitepress/theme";
import TestUI from "@t-ui/components";
import "@t-ui/theme-chalk/index.scss"; // 引入样式文件
import Preview from "./preview/index.vue";
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "./index.css";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(TestUI);
    app.use(hljsVuePlugin);
    app.component("preview", Preview);
  },
};
