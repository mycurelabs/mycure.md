import {
  searchDoctor
} from '../../mycure/user';

const state = {
  searchResults: []
};

const getters = {
  scrollTop: (s) => s.scrollTop
};

const actions = {
  searchDoctor: async ({commit}, query) => {
    try {
      return await searchDoctor(query);
    } catch (e) {
      throw e;
    }
  }
};

const mutations = {
  setSearchResults: (s, val) => s.searchResults = val
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
