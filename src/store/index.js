import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { sessionModule } from "./modules/session";
import { gradesModule } from "./modules/grades";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    session: sessionModule,
    grades: gradesModule,
  },
});