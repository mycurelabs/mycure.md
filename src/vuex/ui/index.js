
const state = {
  scrollTop: 0,
  visitorCountry: ''
}

const getters = {
  scrollTop: (s) => s.scrollTop
}

const actions = {
}

const mutations = {
  setScrollTop: (s, val) => s.scrollTop = val,
  setVisitorCountry: (s, val) => s.visitorCountry = val
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}