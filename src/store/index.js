import { createStore } from 'vuex'

export default createStore({
  state: {
    open: false,
  },
  getters: {
  },
  mutations: {
    isOpen(state) {
      state.open = !state.open
    },
  },
  actions: {
    
  },
  modules: {
  }
})
