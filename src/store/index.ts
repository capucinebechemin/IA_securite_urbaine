import { createStore } from 'vuex'

export default createStore({
  state: {
    isDragAndDropModalVisible: false
  },
  getters: {
  },
  mutations: {
    toggleDragAndDropModal(state) {
      state.isDragAndDropModalVisible = !state.isDragAndDropModalVisible;
    }
  },
  actions: {
  },
  modules: {
  }
})
