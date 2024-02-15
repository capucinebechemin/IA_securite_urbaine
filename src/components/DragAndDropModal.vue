<!-- Modal du jeu glisser-déposer -->
<template>
  <Transition name="modal">
    <div class="card_drag_and_drop">
      <div class="head_modal">
        <div class="title_modal">
          <h2>{{ props.title }}</h2>
        </div> <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleDragAndDropModal" />
      </div>
      <div class='main_drag_and_drop'>
        <p>Question</p>
        <div class="question_modal">{{ props.question }}</div>
        <p>Classement</p>
        <draggable v-model="answers" group="answer" class="answers_drag_and_drop" item-key="id" :move="onMove">
          <template #item="{ element }">
            <div class="answer_drag_and_drop" :key="element.id">{{ element.answer }}</div>
          </template>
        </draggable>
        <draggable v-model="selectedAnswer" group="answer" class="classement_drag_and_drop" item-key="id">
          <template #item="{ element, index }">
            <div class="drop" :key="element.id" v-bind:class="{ [`classement${index + 1}_drag_and_drop`]: true }">
              {{ element.answer }}</div>
          </template>
        </draggable>
        <div class="text_answer_modal" v-show="answerPage">Réponse : {{ textAnswer }}</div>
      </div>
      <div class='btn_submit_modal'>
        <button class="btn_previous" @click="submit" v-show="!answerPage">Précédent</button>
        <button class="btn_next" @click="submit" v-show="!answerPage">Suivant</button>
        <button class="btn_return" @click="submit" v-show="answerPage">Retour</button>
      </div>
    </div>
  </Transition>
</template>
  
<script setup lang="ts">
import { useAlertsStore } from '@/store';
import { ref } from 'vue';
import draggable from 'vuedraggable';

const store = useAlertsStore();

const props = defineProps({
  id: { type: String, required: true },
  title: String,
  question: String,
  answers: Array,
  textAnswer: String,
});

const data = ref({ questionId: null as string | null, selectedAnswer: [] as number[] });
const selectedAnswer = ref([]);
const answerPage = false;
const answers = ref(props.answers);

function onMove() {
  if (selectedAnswer.value.length == 4) return false
};

const submit = () => {
  store.toggleDragAndDropModal;
}

</script>
  
<style scoped>
.card_drag_and_drop {
  height: 80vh;
  width: 70vw;
  margin: 5vh auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: .7rem;
  backdrop-filter: blur(10px);

  .main_drag_and_drop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6vw;
    height: 55vh;

    .answers_drag_and_drop {
      padding: 0 4vw;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;
      min-height: 16vh;
    }

    .answer_drag_and_drop {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 9.5vw;
      height: 13vh;
      border-radius: .7rem;
      margin: .5vh .5vw;
      padding: 1vh 1vw;
      font-size: 0.8rem;
      background-color: #638e995d;

      &:hover {
        filter: drop-shadow(0 0 2rem white);
        transform: translateY(-3px);


      }
    }

    .classement_drag_and_drop {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;
      position: relative;
      margin: 1vh 4vw;
      height: 16vh;
      outline: .3vh dashed white;
      border-radius: .7rem;
    }

    .classement1_drag_and_drop::after,
    .classement2_drag_and_drop::after,
    .classement3_drag_and_drop::after {
      content: '';
      position: absolute;
      top: 50%;
      border: .5vw solid transparent;
      border-right-color: white;
      transform: translateY(-50%);
    }

    .sortable-chosen::after {
      border-right-color: transparent;
    }

    .classement1_drag_and_drop::after {
      left: 11.8vw;
    }

    .classement2_drag_and_drop::after {
      left: 24.2vw;
    }

    .classement3_drag_and_drop::after {
      left: 36.8vw;
    }

    .drop {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 9.5vw;
      height: 13vh;
      border-radius: .7rem;
      margin: .5vh .5vw;
      padding: 1vh 1vw;
      font-size: .8rem;
      background-color: #638e995d;

      &:hover {
        background-color: #638e9949;
      }

      &:hover::after {
        background-color: transparent;
      }

    }

  }

  ::before {
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    transform: translate(-50%, -50%) rotate(-45deg);
    transition: .7s all;
  }
}
</style>
