import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import ui from './ui';
Vue.use(Vuex);

const modules = {
  ui
};

export default new Vuex.Store({
  modules,
  plugins: [createPersistedState()]
});