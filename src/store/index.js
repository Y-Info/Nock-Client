import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      token: null,
      isAdmin: false,
      buildingId: null
    }
  },
  mutations: {
    setConnection(state, user) {
      state.user.id = user.id;
      state.user.token = user.token;
      state.user.isAdmin = user.isAdmin;
      state.user.buildingId = user.buildingId;
    }
  },
  getters: {
    getConnectionInfos: state => {
      return { user: state.user };
    },
    getUserInfo: state => {
      return { user: state.user };
    }
  },
  actions: {},
  modules: {}
});
