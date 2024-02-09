<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <!-- <AvatarModal title="Veuillez choisir votre avatar" v-show="store.isAvatarModalVisible"></AvatarModal> -->
    <div class="game-cards" v-show="!store.isAvatarModalVisible">
      <router-link to="/safecity"><GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='/mini_games/securite_urbaine.png'/></router-link>
      <router-link to="/"><GameCard title="Cartographie" description="Prochainement disponible !" img_title='/mini_games/cartographie.png' @clisk="store.toggleAvatarModalVisible"/></router-link>
      <router-link to="/"><GameCard title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='/mini_games/videosurveillance.png'/></router-link>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';
  import AvatarModal from '@/components/AvatarModal.vue';
  import { useAlertsStore } from '@/store';

  const store = useAlertsStore();

</script>

<style>
  .game-cards{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  @media (max-width: 1255px) {
    .games-view{
      background-size: auto 100%;
      height: inherit;
    }
  }
  
</style>