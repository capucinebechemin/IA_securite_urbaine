<!-- Navbar de la page Jeux et page_mondes -->
<template>
    <div class="home_banner">
      <img alt="Menu" src='@/assets/burger-bar.png'/>
      <h1>{{ title }}</h1>
      <img class='avatar-icon' alt="Avatar choisi" src='@/assets/avatar1.png'/>
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

  .avatar-icon {
    max-height: 100%;
    max-width: 100%;
  }
  </style>
  