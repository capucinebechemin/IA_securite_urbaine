<!-- Modal des avatars -->
<template>
  <Transition name="modal">
    <div class="card_modal">
      <div class="head_modal">
        <div class="title_modal">
          <h2>{{ title }}</h2>
        </div> <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleAvatarModal" />
      </div>
      <div class='main_avatar'>
        <h3>NOM</h3>
        <input type="text" class="field_avatar" name="name" id='name' v-model="name" required />
        <h3>AVATAR</h3>
        <div class="images_avatar">
          <img class='image_avatar' v-for="i in avatarNumber" :src="`/players/player${i}.png`" alt="avatar_card"
            @click="selectedAvatar = i" v-bind:class="{ checked_avatar: selectedAvatar == i }" />
        </div>
      </div>
      <div class='btn_submit_modal'>
        <button class="btn_avatar" @click="submit()">Choisir</button>
      </div>
    </div>
  </Transition>
</template>
  
<script setup lang="ts">
import { useAlertsStore } from '@/store';
import { ref } from 'vue';

const store = useAlertsStore();
const props = defineProps({
  title: String,
});

const name = ref(store.avatarName);
let avatarNumber: string[] = ["1", "2", "3", "4"];
const selectedAvatar = ref(store.avatarId);

const submit = () => {
  store.setAvatarId(selectedAvatar.value);
  store.setAvatarName(name.value);
  store.toggleAvatarModal();
}

</script>
  
<style scoped>
.field_avatar {
  display: inline-flex;
  text-align: center;
  margin: 0 auto;
  width: 30%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid black;
  font-size: 1.3rem;
  color: black;
  background: transparent;
  transition: border-color 0.2s;
  font-family: 'Roboto Mono', monospace;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown {
    cursor: text;
  }
}

.field_avatar:focus {
  filter: drop-shadow(0 2rem 2rem #638e99);
  border-bottom: 2px solid #638e99;
  color: #638e99;
  box-shadow: 0 8px 4px -4px #638e99d1;
}

.main_avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6vw;
  height: 55vh;

  .images_avatar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

  .image_avatar {
    border-radius: .5rem;
    max-width: 100%;
    height: 35vh;
    object-fit: cover;
    margin: 1vh 1vw;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 2rem white);

      ::before {
        filter: brightness(.5);
        top: -100%;
        left: 200%;
      }
    }

  }

  .checked_avatar {
    transform: scale(1.2);
    filter: drop-shadow(0 0 2rem white);

    ::before {
      filter: brightness(.5);
      top: -100%;
      left: 200%;
    }
  }

}

.btn_avatar {
  background-color: #88924b;
}
</style>
