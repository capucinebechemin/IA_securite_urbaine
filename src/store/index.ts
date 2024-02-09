import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('alerts', {
  state: () => {
    return {
      isAvatarModalVisible: ref(false),
      avatarName: ref(""),
      avatarId: ref("1"),
    };
  },
  actions: {
    toggleAvatarModalVisible() {
      this.isAvatarModalVisible = !this.isAvatarModalVisible;
    },
    setAvatarName(name: string) {
      this.avatarName = name;
    },
    setAvatarId(id: string) {
      this.avatarId = id;
    },
  },
})