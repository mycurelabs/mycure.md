import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import ui from './ui';
// import user from './user';
Vue.use(Vuex);

const modules = {
  ui
  // user
};

export const cookieStore = new Vuex.Store({
  state: {
    browserID: null
  },
  mutations: {
    storeID: (state, payload) => {
      state.browserID = payload;
    }
  },
  actions: {
    storeID ({ commit }, payload) {
      commit('storeID', payload);
    },
    async getID ( context ) {
      const result = this.state.browserID;
      return result;
    }
  },
  plugins: [createPersistedState()]

});

export default new Vuex.Store({
  modules,
  plugins: [createPersistedState()]
});
