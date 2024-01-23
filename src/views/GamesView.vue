<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <div class="game-cards">
      <!-- <router-link to="/">Home</router-link> -->
      <GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='jeu-1.png'/>
      <GameCard class="game-soon" title="Cartographie" description="Prochainement disponible !" img_title='jeu-2.png'/>
      <GameCard class="game-soon" title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='jeu-3.png'/>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';

  @Options({
  components: {
    HomeBanner, GameCard
  },
  })

  export default class GamesView extends Vue {}
</script>

<style>
  .games-view{
    background: url('../assets/fond_jeux.png');
    background-size: 100% auto;
    height: 100vh;
    width: 100wh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .game-cards{
    display: flex;
    justify-content: space-around;
    height: 35rem;
  }
</style>