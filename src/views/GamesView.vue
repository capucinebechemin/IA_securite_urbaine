<template>
  <div class="games-view">
    <HomeBanner title="jeux"/>
    <div class="game-cards">
      <router-link to="/safecity"><GameCard title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='mini_games/securite_urbaine.png'/></router-link>
      <router-link to="/"><GameCard title="Cartographie" description="Prochainement disponible !" img_title='mini_games/cartographie.png' @click="showQuestionModal = true;"/></router-link>
      <router-link to="/"><GameCard title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='mini_games/videosurveillance.png'/></router-link>
    </div>
    <DragAndDropModal id="1" question="Selon vous, quels sont les buts principaux de la vidéosurveillance ?" 
      answers="A) Dissuader les comportements criminels par une présence visible."
      answer2="B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement."
      answer3="C) Analyser les tendances de circulation pour l'urbanisme."
      answer4="D) Fournir des données pour des études sociologiques." 
      correctAnswer="[]"
      textAnswer="En effet, les bonnes réponses sont la A)"
      v-show="showQuestionModal" @close="showQuestionModal = false;" @data="getData"></DragAndDropModal>
  </div>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';
  import QuestionModal from '@/components/QuestionModal.vue';
  import DragAndDropModal from '@/components/DragAndDropModal.vue';

  @Options({
  components: {
    HomeBanner, GameCard, QuestionModal, DragAndDropModal
  },
  data() {
    return {
      showQuestionModal: false,
      questionId: "",
      selectedAnswer: [],
    }
  },
  methods: {
    getData(value: { questionId: string; selectedAnswer: [number]; }) {
      this.questionId = value.questionId;
      this.selectedAnswer = value.selectedAnswer;
    },
  },
  })

  export default class GamesView extends Vue {
    showQuestionModal = false;
    questionId!: string;
    selectedAnswer!: [number];
    getData!: any;
  }
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