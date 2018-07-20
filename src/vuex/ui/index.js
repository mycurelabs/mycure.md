
const state = {
  scrollTop: 0
};

const getters = {
  scrollTop: (s) => s.scrollTop
};

const actions = {
};

const mutations = {
  setScrollTop: (s, val) => s.scrollTop = val
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
