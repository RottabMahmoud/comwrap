import Vuex from "vuex";
import Vue from "vue";
import employees from "./modules/employees";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    employees,
  },
});
