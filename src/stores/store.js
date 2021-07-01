import Vue from "vue";
import Vuex from "vuex";
import blogModule from "./modules/blog.module";
// import router from "../router/index";
Vue.use(Vuex);
export default new Vuex.Store({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    blog: {
      ...blogModule,
    },
  },
});
