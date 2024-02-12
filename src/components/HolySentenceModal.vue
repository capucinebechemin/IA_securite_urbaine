<!-- Modal des phrases à trou -->
<template>
    <Transition name="modal">
        <div class="holysentence_card" >
        <div class='main'>
        <div class="head">
            <div class="title"><h2>MINI JEUX N°1</h2></div> <img alt="Fermer" class="close" src='/buttons/close.png' @click="store.toggleHolySentenceModalVisible"/>
        </div>
        <p>Question</p>
        <div class="question">
            {{ props.start_question }}
            <input type="text" class="form_field" name="name" id='name' v-model="selectedAnswer" required>
            {{ props.end_question }}
        </div>
        <div class="text_answer" v-show="textAnswer!=null">Réponse : {{ textAnswer }}</div>>
        <div class='btn_submit'>
            <button @click="submit">Précédent</button>
          <button @click="submit">Suivant</button>
        </div>
        </div>
    </div>
    </Transition>
  </template>
  
  <script setup lang="ts">
  import { ref , defineEmits } from 'vue';
  import { useAlertsStore } from '@/store';

  const store = useAlertsStore();

    const emit = defineEmits();
    const props = defineProps({
        id: {type : String, required : true },
        start_question: String,
        end_question: String,
        holy_word: String,
        textAnswer: String,
    });

    const form = {
        "id": "3",
        "type": "holysentence",
        "start_question": "Selon vous, quels sont les buts principaux de la ",
        "end_question": " ?",
        "holy_word": "vidéosurveillance",
        "textAnswer": "En effet, la bonne réponse est la VIDEOSURVEILLANCE"
    };

    const data = ref({ questionId: null as String | null, selectedAnswer: [] as number[]});
    const selectedAnswer = ref<string>("");

    const submit = () => {
        store.toggleHolySentenceModalVisible;
    }
  
  </script>
  
  <style scoped>

  .holysentence_card{
    position: relative;
    user-select:none;
    height: auto;
    width: 70rem;
    margin: 2rem auto;
    border: 1px solid #ffffff22;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 153, 255, 0.3) 100%);
    box-shadow: 0 7px 20px 5px #00000088;
    border-radius: .7rem;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: .5s all;
    
    input{
        font-family: 'Game', sans-serif;
    }

    .form_field {
        display: inline-flex;
        text-align: center;
        margin: 0 auto;
        width: 30%;
        border: 0;
        outline: 0;
        border-bottom: 2px solid black;
        font-size: 1.3rem;
        color: black;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
        color: transparent;
        }

        &:placeholder-shown {
        cursor: text;
        }
    }

    .form_field:focus {
        filter: drop-shadow(0 2rem 2rem white);
        border-bottom: 2px solid white;
        color: white;
        box-shadow: 0 8px 4px -4px rgba(255, 255, 255, 0.5);
    }
    .head{
        display: flex; 
        align-items: center; 
        justify-content: space-between;
    }
    .title{
        text-align: center;
        flex: 1;
    }

    .close:hover{
        cursor: pointer;
    }

    .main{
      display: flex;
      flex-direction: column;
      padding: 1rem;

      .question {
        margin: 10px;
        padding-left: 3rem;
        margin-top: 12%;
        margin-bottom: 12%;
      }

        .text_answer{
            margin: 2rem 2rem 0 0;
            color: rgb(63, 120, 63);
        }
        
    }

    .btn_submit {
        display:flex;
        justify-content: center;
        
        button {
            margin:20px;
            width: 150px;
            height: 50px;
            border: none;
            border-radius: 25px;
            background-color: black;
            color: white;
            font-size: 20px;
            font-weight: bold;
            margin: 10px;
            cursor: pointer;
            font-family: 'Game', sans-serif;
            box-shadow: 0 7px 20px 5px white;
            border-radius: .7rem;
            backdrop-filter: blur(7px);
            -webkit-backdrop-filter: blur(7px);
            overflow: hidden;
            transition: .5s all;

            &:hover{
                border: 1px solid #ffffff44;
                box-shadow: 0 7px 50px 10px white;
                transform: scale(1.015);
                filter: brightness(1.3);
                ::before{
                    filter: brightness(.5);
                    top: -100%;
                    left: 200%;
                }
                }
        }
    }

    ::before{
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
  