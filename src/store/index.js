import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "",
      token: "",
      isAdmin: false
    }
  },
  mutations: {
    setConnection(state, user) {
      state.user.id = user.id;
      state.user.token = user.token;
      state.user.isAdmin = user.isAdmin;
    }
  },
  getters: {
    getConnectionInfos: state => {
      return { user: state.user };
    }
  },
  actions: {},
  modules: {}
});
