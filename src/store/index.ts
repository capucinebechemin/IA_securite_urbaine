import { createStore } from 'vuex';

export default createStore({
  state: {
    isAvatarModalVisible: false,
  },
  getters: {
  },
  mutations: {
    isAvatarModalVisible(state) {
      state.isAvatarModalVisible = !state.isAvatarModalVisible;
    }
  },
  actions: {
  },
  modules: {
  }
})