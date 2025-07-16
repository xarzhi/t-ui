import { createApp } from "vue";
import App from "./app.vue";
import TestUI from '@t-ui/components'
import '@t-ui/theme-chalk/index.scss'


// import "../dist/theme-chalk/style.css"
// import TestUI from "../dist/es";
const app = createApp(App);
app.use(TestUI)
app.mount("#app");