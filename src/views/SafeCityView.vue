<template>
  <div class="games-view">
    <HomeBanner title="ia et sécurite urbaine" />
    <BannerMenu v-show="store.isMenuVisible" />
    <AvatarModal title="Veuillez choisir votre avatar" v-if="store.isAvatarModalVisible"></AvatarModal>
    <div class="game-cards" v-show="!store.isAvatarModalVisible">
      <router-link to="/world1">
        <GameCard title="Vidéosurveillance algorithmique"
          description="Partie pour se concentrera sur l'utilisation de l'IA dans la vidéosurveillance, en explorant son fonctionnement, ses avantages et ses inconvénients."
          img_title='world1/world1.png' :rating=store.scoreWorld1 world_num='1' />
      </router-link>
      <router-link to="/world2">
        <GameCard title="Prédiction du crime"
          description="Abordons la cartographie prédictive du crime et les méthodes utilisées pour anticiper les crimes. Elle mettra également en lumière les défis liés à cette technologie."
          img_title='world2/world2.png' :rating=store.scoreWorld2 world_num='2' />
      </router-link>
      <router-link to="/world3">
        <GameCard title="Analyse statistique"
          description="Couvrons l'analyse statistique des tendances criminelles sur une longue période, en mettant l'accent sur les méthodologies d'analyse et l'importance des enquêtes de victimisation."
          img_title='world3/world3.png' :rating=store.scoreWorld3 world_num='3' />
      </router-link>
      <router-link to="/world4">
        <GameCard title="Contre-surveillance"
          description="Explorons les outils de protection de la vie privée et de contre-surveillance, mettant en évidence les limites de la vidéosurveillance et les moyens de protéger la vie privée des individus."
          img_title='world4/world4.png' :rating=store.scoreWorld4 world_num='4' />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeBanner from '@/components/menu/HomeBanner.vue';
import GameCard from '@/components/GameCard.vue';
import { useAlertsStore } from '@/store';
import BannerMenu from '@/components/menu/BannerMenu.vue';
import AvatarModal from '@/components/menu/AvatarModal.vue';

const store = useAlertsStore();

</script>

<style></style>