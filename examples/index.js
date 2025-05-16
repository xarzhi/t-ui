import { createApp } from "vue";
import App from "./app.vue";
import TestUI from '@t-ui/components'

const app = createApp(App);
app.use(TestUI)
app.mount("#app");