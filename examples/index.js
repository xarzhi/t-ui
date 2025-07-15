import { createApp } from "vue";
import App from "./app.vue";
// import TestUI from '@t-ui/components'

import TestUI from "../dist/es";
import "../dist/theme-chalk/style.css"
const app = createApp(App);
app.use(TestUI)
app.mount("#app");