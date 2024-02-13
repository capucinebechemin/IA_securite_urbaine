<!-- Navbar de la page Jeux et page_mondes -->
<template>
  <div class="home_banner">
    <img alt="Menu" src='/menu/burger-bar.png' @click="store.toggleMenu"/>
    <h1>{{ title }}</h1>
    <div class="avatar-container">
      <img class='avatar-icon' alt="Avatar choisi" :src="`/players/player${store.avatarId}.png`" @click="store.toggleAvatarModalVisible"/>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { useAlertsStore } from '@/store';

  const store = useAlertsStore();

  const props = defineProps({
    title: String
  });
  
  const title = '';
  
</script>
  
<style scoped>
  .home_banner{
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 1rem 2rem;
    background: var(--main-transparent);
  }

  .avatar-container {
    width: 5rem; /* ou la taille que vous voulez */
    height: 5rem; /* la même que la largeur pour un cercle parfait */
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
  