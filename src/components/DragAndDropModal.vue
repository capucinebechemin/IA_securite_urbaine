<!-- Modal des avatars -->
<template>
  <Transition name="modal">
    <div class="question_card">
      <div class="head">
        <div class="title">
          <h2>MINI JEU N°1</h2>
        </div> <img alt="Fermer" class="close" src='/buttons/close.png' @click="store.toggleDragAndDropModal" />
      </div>
      <div class='main'>
        <p>Question</p>
        <div class="question">{{ form.question }}</div>
        <p v-show="form.answers.length > 4">Choix multiple</p>
        <p v-show="form.answers.length <= 4">Classement</p>
        <draggable v-model="form.answers" group="answer" class="answers" item-key="id" :move="onMove">
          <template #item="{ element }">
            <div class="answer" :key="element.id">{{ element.answer }}</div>
          </template>
        </draggable>
        <draggable v-model="selectedAnswer" group="answer"
          v-bind:class="{ dropzone: form.type == 'jeu_selection', classementzone: form.type == 'jeu_classement' }"
          item-key="id">
          <template #item="{ element, index }">
            <div class="drop" :key="element.id"
              v-bind:class="{ [`classement${index + 1}`]: form.type == 'jeu_classement' }">
              {{ element.answer }}</div>
          </template>
        </draggable>
        <div class="text_answer" v-show="answerPage">Réponse : {{ textAnswer }}</div>
      </div>
      <div class='btn_submit'>
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
  question: String,
  answers: Array,
  textAnswer: String,
});

const form = {
  "id": "1",
  "type": "jeu_classement",
  "question": "Selon vous, quels sont les buts principaux de la vidéosurveillance ?",
  "answers": [
    { "id": "1", "answer": "A) Dissuader les comportements criminels par une présence visible.", "response": true },
    { "id": "2", "answer": "B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement.", "response": true },
    { "id": "3", "answer": "C) Analyser les tendances de circulation pour l'urbanisme.", "response": false },
    { "id": "4", "answer": "D) Fournir des données pour des études sociologiques.", "response": false },
  ],
  "textAnswer": "En effet, les bonnes réponses sont la A) et la B)"
};

// const form = {
//   "id": "1",
//   "type": "jeu_selection",
//   "question": "Selon vous, quels sont les buts principaux de la vidéosurveillance ?",
//   "answers": [
//     { "id": "1", "answer": "A) Dissuader les comportements criminels par une présence visible.", "response": true },
//     { "id": "2", "answer": "B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement.", "response": true },
//     { "id": "3", "answer": "C) Analyser les tendances de circulation pour l'urbanisme.", "response": false },
//     { "id": "4", "answer": "D) Fournir des données pour des études sociologiques.", "response": false },
//     { "id": "5", "answer": "A) Dissuader les comportements criminels par une présence visible.", "response": true },
//     { "id": "6", "answer": "B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement.", "response": true },
//     { "id": "7", "answer": "C) Analyser les tendances de circulation pour l'urbanisme.", "response": false },
//     { "id": "8", "answer": "D) Fournir des données pour des études sociologiques.", "response": false },
//   ],
//   "textAnswer": "En effet, les bonnes réponses sont la A) et la B)"
// };

const drag = ref(false)
const data = ref({ questionId: null as string | null, selectedAnswer: [] as number[] });
const selectedAnswer = ref([]);
const answerPage = false;

function onMove() {
  if (selectedAnswer.value.length == 4) return false
};

</script>
  
<style scoped>
.question_card {
  height: 80vh;
  width: 70vw;
  margin: 5vh auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: .7rem;
  backdrop-filter: blur(10px);

  .head {
    display: flex;
    align-items: center;
    padding: 2vh 2vw;
  }

  .title {
    text-align: center;
    flex: 1;
  }

  .close:hover {
    cursor: pointer;
    box-shadow: 0 7px 20px 5px white;
    border-radius: .7rem;
    backdrop-filter: blur(7px);
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6vw;
    height: 58vh;

    .question {
      max-height: 10vh;
      padding: 1vh 4vw;
      display: flex;
      align-items: center;
    }

    .answers {
      padding: 0 4vw;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;
      min-height: 16vh;
    }

    .answer {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 7.5vw;
      height: 13vh;
      border-radius: .7rem;
      margin: .5vh .5vw;
      padding: 1vh 1vw;
      font-size: 0.8rem;
      background-color: #638e995d;

      &:hover {
        background-color: #638e9937;
      }
    }

    .dropzone {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;
      margin: 1vh 4vw;
      min-height: 16vh;
      outline: .3vh dashed white;
      border-radius: .7rem;
    }

    .classementzone {
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

    .classement1::after,
    .classement2::after,
    .classement3::after {
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

    .classement1::after {
      left: 9.8vw;
    }

    .classement2::after {
      left: 20.3vw;
    }

    .classement3::after {
      left: 30.8vw;
    }

    .drop {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 7.5vw;
      height: 13vh;
      border-radius: .7rem;
      margin: .5vh .5vw;
      padding: 1vh 1vw;
      font-size: .8rem;
      background-color: #638e995d;

      &:hover {
        background-color: #638e9937;
      }

      &:hover::after {
        background-color: transparent;
      }

    }

  }

  .text_answer {
    max-height: 7vh;
    margin: 2vh 0;
    color: #638e99;
  }

  .btn_submit {
    display: flex;
    justify-content: center;
    margin: 2vh 0;

    .btn_previous {
      background-color: black;
    }

    .btn_next {
      background-color: #638e99;
    }

    .btn_return {
      background-color: black;
    }

    button {
      width: 6rem;
      height: 5vh;
      border: none;
      color: white;
      font-size: 1rem;
      font-family: 'Roboto Mono', monospace;
      margin: .5vh 1vw;
      cursor: pointer;
      box-shadow: 0 7px 20px 5px white;
      border-radius: .7rem;
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
      overflow: hidden;
      transition: .5s all;

      &:hover {
        border: 1px solid #ffffff44;
        box-shadow: 0 7px 50px 10px white;
        transform: scale(1.015);
        filter: brightness(1.3);

        ::before {
          filter: brightness(.5);
          top: -100%;
          left: 200%;
        }
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

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
