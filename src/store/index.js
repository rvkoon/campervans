import Vue from "vue";
import Vuex from "vuex";
import campervans from "./modules/campervans";
import createLogger from "vuex/dist/logger";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    campervans,
  },
  strict: debug,
  plugins: [createLogger()],
});

export default store;
