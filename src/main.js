import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App";
import { Tab, Tabs, Toast } from "vant";
import "./assets/styles/base.scss";

Vue.use(Tab)
  .use(Tabs)
  .use(Toast);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
