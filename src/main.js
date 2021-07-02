import Vue from "vue";
import Campervans from "./pages/campervans";
import store from "./store";
import "tailwindcss/tailwind.css";
import "./common/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(Campervans),
}).$mount("#app");
