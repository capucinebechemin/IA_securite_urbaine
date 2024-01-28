<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <div class="game-cards">
      <router-link to="/safecity"><GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='mini_games/securite_urbaine.png'/></router-link>
      <router-link to="/"><GameCard title="Cartographie" description="Prochainement disponible !" img_title='mini_games/cartographie.png'/></router-link>
      <router-link to="/"><GameCard title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='mini_games/videosurveillance.png'/></router-link>
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
  .game-cards{
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 1255px) {
    .games-view{
      background-size: auto 100%;
      height: inherit;
    }
    .game-cards{
      flex-direction: column;
      align-items: center;
    }
  }

  
</style>