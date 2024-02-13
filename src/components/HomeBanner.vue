<!-- Navbar de la page Jeux et page_mondes -->
<template>
  <div class="home_banner">
    <img class="menu-icon" alt="Menu" src='/menu/burger-bar.png' @click="store.toggleMenu"/>
    <h1>{{ title }}</h1>
    <div class="avatar-container">
      <img class='avatar-icon' alt="Avatar choisi" :src="`/players/player${store.avatarId}.png`" @click="store.toggleAvatarModal"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAlertsStore } from '@/store';

  const store = useAlertsStore();

  const props = defineProps({
    title: String
  });
  
</script>
  
<style scoped>
  .home_banner{
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4vh;
    padding: 1rem 2rem;
    background: var(--main-transparent);
  }

  .menu-icon:hover {
    cursor: pointer;
  }

  .avatar-container {
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar-container .avatar-icon {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 1255px) {
    .home_banner{
      font-size: 0.75rem;
      text-align: center;
    }
  }
  </style>
  