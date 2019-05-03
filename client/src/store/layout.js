export default {
  state: {
    layout: 'default-layout'
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload
    }
  },
  actions: {},
  getters: {
    layout(state) {
      return state.layout
    }
  }
}