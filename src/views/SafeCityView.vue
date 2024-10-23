<template>
  <div class="games-view">
    <HomeBanner title="ia et sécurite urbaine" />
    <BannerMenu v-show="store.isMenuVisible" />
    <div class="game-cards" v-show="!store.isAvatarModalVisible">
      <router-link to="/world1">
        <GameCard title="Vidéosurveillance algorithmique"
          description="Utilisons l'IA dans la vidéosurveillance : fonctionnement, avantages et inconvénients."
          img_title='world1/world1.webp' :rating=store.scoreWorld1 world_num='1' />
      </router-link>
      <router-link to="/world2">
        <GameCard title="Prédiction du crime"
          description="Abordons la cartographie prédictive du crime et les méthodes utilisées pour anticiper les crimes."
          img_title='world2/world2.webp' :rating=store.scoreWorld2 world_num='2' />
      </router-link>
      <router-link to="/world3">
        <GameCard title="Analyse statistique"
          description="Couvrons l'analyse statistique des tendances criminelles sur une longue période, en mettant l'accent sur les méthodologies d'analyse et l'importance des enquêtes de victimisation."
          img_title='world3/world3.webp' :rating=store.scoreWorld3 world_num='3' />
      </router-link>
      <router-link to="/world4">
        <GameCard title="Contre-surveillance"
          description="Explorons les outils de contre-surveillance, mettant en évidence les limites de la vidéosurveillance et les moyens de protéger la vie privée des individus."
          img_title='world4/world4.webp' :rating=store.scoreWorld4 world_num='4' />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeBanner from '@/components/menu/HomeBanner.vue';
import GameCard from '@/components/GameCard.vue';
import { useAlertsStore } from '@/store';
import BannerMenu from '@/components/menu/BannerMenu.vue';

const store = useAlertsStore();

</script>

<style></style>