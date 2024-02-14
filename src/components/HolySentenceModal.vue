<!-- Modal des phrases à trou -->
<template>
  <Transition name="modal">
    <div class="holysentence_card">
      <div class="head">
        <div class="title">
          <h2>MINI JEU N°1</h2>
        </div> <img alt="Fermer" class="close" src='/buttons/close.png' @click="store.toggleHolySentenceModal" />
      </div>
      <div class='main'>
        <p>Question</p>
        <div class="question">
          {{ props.start_question }}
          <input type="text" class="form_field" v-bind:class="{ form_field_good_answer: answerPage }"
            v-bind:readonly="answerPage" name="name" id='name' v-model="selectedAnswer" required>
          {{ props.end_question }}
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
.holysentence_card {
  height: 80vh;
  width: 70vw;
  margin: 5vh auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: .7rem;
  backdrop-filter: blur(10px);

  .form_field {
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

  .form_field:focus {
    filter: drop-shadow(0 2rem 2rem #638e99);
    border-bottom: 2px solid #638e99;
    color: #638e99;
    box-shadow: 0 8px 4px -4px #638e99d1;
  }

  .form_field_good_answer {
    color: #88924b;
  }

  .form_field_good_answer:focus {
    filter: drop-shadow(0 2rem 2rem #89924bb4);
    border-bottom: 2px solid #88924b;
    color: #88924b;
    box-shadow: 0 8px 4px -4px #88924b;
  }

  .form_field_bad_answer {
    color: #BB5326;
  }

  .form_field_bad_answer:focus {
    filter: drop-shadow(0 2rem 2rem #bb5326b8);
    border-bottom: 2px solid #BB5326;
    color: #BB5326;
    box-shadow: 0 8px 4px -4px #BB5326;
  }

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
      padding: 1vh 4vw;
      margin-top: auto;
      margin-bottom: auto;
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
  