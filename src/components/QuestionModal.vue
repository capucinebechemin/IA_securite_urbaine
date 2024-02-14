<!-- Modal des avatars -->
<template>
  <Transition name="modal">
    <div class="question_card">
      <div class="head">
        <div class="title">
          <h2>MINI JEU N°1</h2>
        </div> <img alt="Fermer" class="close" src='/buttons/close.png' @click="store.toggleQuestionModal" />
      </div>
      <div class='main'>
        <p>Question</p>
        <div class="question">{{ props.question }}</div>
        <p>Choix multiple</p>
        <div class="answers">
          <div class="answer" v-for="answer in form.answers" @click="clickAnswer(answer.id)"
            v-bind:class="{ checked: selectedAnswer.includes(answer.id) }">
            {{ answer.answer }}</div>
        </div>
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
import { ref } from 'vue';
import { useAlertsStore } from '@/store';

const store = useAlertsStore();

const props = defineProps({
  id: { type: String, required: true },
  question: String,
  answers: Array,
  textAnswer: String,
});

const form = {
  "id": "2",
  "type": "question",
  "question": "Selon vous, quels sont les buts principaux de la vidéosurveillance ?",
  "answers": [
    { "id": 1, "answer": "A) Dissuader les comportements criminels par une présence visible.", "response": true },
    { "id": 2, "answer": "B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement.", "response": true },
    { "id": 3, "answer": "C) Analyser les tendances de circulation pour l'urbanisme.", "response": false },
    { "id": 4, "answer": "D) Fournir des données pour des études sociologiques.", "response": false },
  ],
  "textAnswer": "En effet, les bonnes réponses sont la A) et la B)"
};

const data = ref({ questionId: null as String | null, selectedAnswer: [] as number[] });
const selectedAnswer = ref<number[]>([]);
const answerPage = false;

const clickAnswer = (a: number) => {
  const index = selectedAnswer.value.indexOf(a);
  if (index !== -1) {
    selectedAnswer.value.splice(index, 1);
  } else {
    selectedAnswer.value.push(a);
  }
}

const submit = () => {
  store.toggleQuestionModal;
}

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
    padding: 0 10vw;
    height: 55vh;

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
      align-items: center;
      max-height: 40vh;
    }

    .answer {
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: .7rem;
      height: 6vh;
      margin: .5vh .5vw;
      padding: 1vh 1vw;
      cursor: pointer;
      background-color: #638e995d;
      transition: filter 0.3s ease, transform 0.3s ease;

      &:hover {
        filter: drop-shadow(0 0 2rem white);
        transform: translateY(-3px);

        ::before {
          filter: brightness(.5);
          top: -100%;
          left: 200%;
        }
      }

    }

    .checked {
      outline: 2px solid black;
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