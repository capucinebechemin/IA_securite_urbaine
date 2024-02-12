<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <AvatarModal title="Veuillez choisir votre avatar" v-if="store.isAvatarModalVisible"></AvatarModal>
    <div class="game-cards" v-show="!store.isAvatarModalVisible">
      <router-link to="/safecity"><GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='/mini_games/securite_urbaine.png'/></router-link>
      <router-link to="/"><GameCard title="Cartographie" description="Prochainement disponible !" img_title='/mini_games/cartographie.png' @click="store.toggleHolySentenceModalVisible"/></router-link>
      <router-link to="/"><GameCard title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='/mini_games/videosurveillance.png'/></router-link>
    </div>
    <HolySentenceModal 
    :id=form.id 
    :start_question=form.start_question
    :end_question=form.end_question
    :holy_word=form.holy_word
    correctAnswer="[]"
    :textAnswer=form.textAnswer
    v-show="store.isHolySentenceModalVisible"></HolySentenceModal>
  </div>
</template>
  
<script setup lang="ts">
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';
  import AvatarModal from '@/components/AvatarModal.vue';
  import { useAlertsStore } from '@/store';
  import HolySentenceModal from '@/components/HolySentenceModal.vue';

  const store = useAlertsStore();

  const form = {
    "id": "3",
    "type": "holysentence",
    "start_question": "Selon vous, quels sont les buts principaux de la ",
    "end_question": " ?",
    "holy_word": "vidéosurveillance",
    "textAnswer": "En effet, la bonne réponse est la VIDEOSURVEILLANCE"
  };

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