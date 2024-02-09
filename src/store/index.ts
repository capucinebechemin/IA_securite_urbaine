import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('alerts', {
  state: () => {
    return {
      isQuestionModalVisible: ref(false),
    };
  },
  actions: {
    toggleQuestionModalVisible() {
      this.isQuestionModalVisible = !this.isQuestionModalVisible;
    }
  },
})