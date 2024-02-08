import { createStore } from 'vuex'

export default createStore({
  state: {
    showAvatarModal: false,
  },
  getters: {
  },
  mutations: {
    showAvatarModal(state) {
      state.showAvatarModal = !state.showAvatarModal;
    }
  },
  actions: {
  },
  modules: {
  }
})
