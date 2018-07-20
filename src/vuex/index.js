import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import ui from './ui';
import user from './user';
Vue.use(Vuex);

const modules = {
  ui,
  user
};

export default new Vuex.Store({
  modules,
  plugins: [createPersistedState()]
});
