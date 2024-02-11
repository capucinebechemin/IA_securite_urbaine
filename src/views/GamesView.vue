<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <AvatarModal title="Veuillez choisir votre avatar" v-if="store.isAvatarModalVisible"></AvatarModal>
    <div class="game-cards" v-show="!store.isAvatarModalVisible">
      <router-link to="/safecity"><GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='/mini_games/securite_urbaine.png'/></router-link>
      <router-link to="/"><GameCard title="Cartographie" description="Prochainement disponible !" img_title='/mini_games/cartographie.png' @click="store.toggleDragAndDropModalVisible"/></router-link>
      <router-link to="/"><GameCard title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='/mini_games/videosurveillance.png'/></router-link>
    </div>
    <DragAndDropModal id="1" question="Selon vous, quels sont les buts principaux de la vidéosurveillance ?" 
      answers="A) Dissuader les comportements criminels par une présence visible."
      answer2="B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement."
      answer3="C) Analyser les tendances de circulation pour l'urbanisme."
      answer4="D) Fournir des données pour des études sociologiques." 
      correctAnswer="[]"
      textAnswer="En effet, les bonnes réponses sont la A)"
      v-show="store.isDragAndDropModalVisible" @close="store.toggleDragAndDropModalVisible"></DragAndDropModal>
  </div>
</template>
  
<script setup lang="ts">
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';
  import QuestionModal from '@/components/QuestionModal.vue';
  import DragAndDropModal from '@/components/DragAndDropModal.vue';
  import AvatarModal from '@/components/AvatarModal.vue';

  import { useAlertsStore } from '@/store';

  const store = useAlertsStore();

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