<!-- Modal des phrases à trou -->
<template>
  <Transition name="modal">
    <div class="card_holysentence">
      <div class="head_modal">
        <div class="title_modal">
          <h2>{{ props.title }}</h2>
        </div> <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleHolySentenceModal" />
      </div>
      <div class='main_holysentence'>
        <p>Question</p>
        <div class="question_holysentence">
          {{ props.start_question }}
          <input type="text" class="field_holysentence" v-bind:class="{ field_good_answer: answerPage }"
            v-bind:readonly="answerPage" name="name" id='name' v-model="selectedAnswer" required>
          {{ props.end_question }}
        </div>
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
import { ref } from 'vue';
import { useAlertsStore } from '@/store';

const store = useAlertsStore();

const props = defineProps({
  id: { type: String, required: true },
  title: String,
  start_question: String,
  end_question: String,
  holy_word: String,
  textAnswer: String,
});

const data = ref({ questionId: null as String | null, selectedAnswer: [] as number[] });
const selectedAnswer = ref<string>("");
const answerPage = false;

const submit = () => {
  store.toggleHolySentenceModal;
}

</script>
  
<style scoped>
.card_holysentence {
  height: 80vh;
  width: 70vw;
  margin: 5vh auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: .7rem;
  backdrop-filter: blur(10px);

  .field_holysentence {
    display: inline-flex;
    text-align: center;
    margin: 0 auto;
    border: 0;
    outline: 0;
    min-width: 30%;
    max-width: 70%;
    border-bottom: 2px solid black;
    font-size: 1rem;
    color: black;
    background: transparent;
    transition: border-color 0.2s;
    font-family: 'Roboto Mono', monospace;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown {
      cursor: text;
    }
  }

  .field_holysentence:focus {
    filter: drop-shadow(0 2rem 2rem #638e99);
    border-bottom: 2px solid #638e99;
    color: #638e99;
    box-shadow: 0 8px 4px -4px #638e99d1;
  }

  .field_holysentence_good_answer {
    color: #88924b;
  }

  .field_holysentence_good_answer:focus {
    filter: drop-shadow(0 2rem 2rem #89924bb4);
    border-bottom: 2px solid #88924b;
    color: #88924b;
    box-shadow: 0 8px 4px -4px #88924b;
  }

  .field_holysentence_bad_answer {
    color: #BB5326;
  }

  .field_holysentence_bad_answer:focus {
    filter: drop-shadow(0 2rem 2rem #bb5326b8);
    border-bottom: 2px solid #BB5326;
    color: #BB5326;
    box-shadow: 0 8px 4px -4px #BB5326;
  }

  .main_holysentence {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6vw;
    height: 55vh;

    .question_holysentence {
      padding: 1vh 4vw;
      margin-top: auto;
      margin-bottom: auto;
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
  