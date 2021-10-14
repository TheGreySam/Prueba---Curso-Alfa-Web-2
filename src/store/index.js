import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { moduloSesion } from "./modules/sesion";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moduloSesion,
  },
});
