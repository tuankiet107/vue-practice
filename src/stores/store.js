import Vue from "vue";
import Vuex from "vuex";
import productModule from "./modules/blog.module";
import router from "../router/index";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    auth: "123",
    bashUrlServer: "http://localhost:3000/",
  },
  getters: {
    bashUrlServer(state) {
      return state.bashUrlServer;
    },
  },
  mutations: {},
  actions: {
    directHome() {
      router.push({
        name: "HomeComponent",
      });
    },
    directLogin() {
      router.push({
        name: "LoginComponent",
      });
    },
  },
  modules: {
    product: {
      ...productModule,
    },
  },
});
