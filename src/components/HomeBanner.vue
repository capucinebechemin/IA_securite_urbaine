<!-- Navbar de la page Jeux et page_mondes -->
<template>
    <div class="home_banner">
      <img alt="Menu" src='@/assets/menu/burger-bar.png'/>
      <h1>{{ title }}</h1>
      <div class="image-container">
        <img class='avatar-icon' alt="Avatar choisi" src='@/assets/players/player1.png'/>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  
  @Options({
    props: {
      title: String
    }
  })
  export default class HomeBanner extends Vue {
    title!: string
  }
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

  .image-container {
  width: 5rem; /* ou la taille que vous voulez */
  height: 5rem; /* la même que la largeur pour un cercle parfait */
  border-radius: 50%;
  overflow: hidden;
}
  .image-container .avatar-icon {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  </style>
  