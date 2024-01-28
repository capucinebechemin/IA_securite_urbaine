<template>
  <div class="games-view">
    <HomeBanner title="ia et sécurite urbaine"/>
    <div class="game-cards">
      <router-link to="/world1">
        <GameCard title="Vidéosurveillance algorithmique" description="Partie pour se concentrera sur l'utilisation de l'IA dans la vidéosurveillance, en explorant son fonctionnement, ses avantages et ses inconvénients." img_title='world1/world1.png' :rating=rating world_num='world1' />
      </router-link>
      <GameCard title="Prédiction du crime" description="Abordons la cartographie prédictive du crime et les méthodes utilisées pour anticiper les crimes. Elle mettra également en lumière les défis liés à cette technologie." img_title='world1/world1.png'/>
      <GameCard title="Analyse statistique et criminalité" description="Couvrons l'analyse statistique des tendances criminelles sur une longue période, en mettant l'accent sur les méthodologies d'analyse et l'importance des enquêtes de victimisation." img_title='world1/world1.png'/>
      <GameCard title="Protection de la vie privée et contre-surveillance" description="Explorons les outils de protection de la vie privée et de contre-surveillance, mettant en évidence les limites de la vidéosurveillance et les moyens de protéger la vie privée des individus." img_title='world1/world1.png'/>
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

  export default class SafeCityView extends Vue {
    rating = 3;
  }
</script>

<style>
  
</style>