<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <AvatarModal title="Veuillez choisir votre avatar" v-if="store.isAvatarModalVisible"></AvatarModal>
    <div class="game-cards" v-show="!store.isAvatarModalVisible">
      <router-link to="/safecity"><GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='/mini_games/securite_urbaine.png'/></router-link>
      <router-link to="/"><GameCard title="Cartographie" description="Prochainement disponible !" img_title='/mini_games/cartographie.png' @click="store.toggleQuestionModalVisible"/></router-link>
      <router-link to="/"><GameCard title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='/mini_games/videosurveillance.png'/></router-link>
    </div>
    <QuestionModal :id=form.id 
      :question=form.question
      :answers=form.answers
      :textAnswer=form.textAnswer
      v-show="store.isQuestionModalVisible"></QuestionModal>
  </div>
</template>
  
<script setup lang="ts">
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';
  import AvatarModal from '@/components/AvatarModal.vue';
  import { useAlertsStore } from '@/store';
  import QuestionModal from '@/components/QuestionModal.vue';

  const store = useAlertsStore();

  const form = {
    "id": "2",
    "type": "question",
    "question": "Selon vous, quels sont les buts principaux de la vidéosurveillance ?",
    "answers": [
      { "id": 1, "answer": "A) Dissuader les comportements criminels par une présence visible.", "response": true},
      { "id": 2, "answer": "B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement.", "response": true},
      { "id": 3, "answer": "C) Analyser les tendances de circulation pour l'urbanisme.", "response": false},
      { "id": 4, "answer": "D) Fournir des données pour des études sociologiques." , "response": false},
    ],
    "textAnswer": "En effet, les bonnes réponses sont la A) et la B)"
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