import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "t-ui",
  base: "/t-ui/",
  description: "一个简单的vue3组件库",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button/index" },
    ],
    sidebar: {
      "/components/": [
        {
          text: "基本",
          items: [
            {
              text: "Button 按钮",
              link: "/components/button/index",
            },
            {
              text: "Message 消息提示",
              link: "/components/message/index",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
