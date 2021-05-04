import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./index.css";

require('@/store/subscriber');


axios.defaults.baseURL = "/app/"

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  createApp(App).use(store).use(router).mount("#app");
})

