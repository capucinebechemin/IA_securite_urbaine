<!-- Modal des avatars -->
<template>
    <Transition name="modal">
        <div class="question_card" >
        <div class='main'>
        <div class="head">
            <div class="title"><h2>MINI JEUX N°1</h2></div> <img alt="Fermer" class="close" src='/buttons/close.png' @click="store.toggleQuestionModalVisible"/>
        </div>
        <p>Question</p>
        <!-- <div class="question">{{ props.question }}</div>> -->
        <div class="question">{{ form.question }}</div>>
        <p>Choix multiple</p>
        <div class="answers">
            <div class="answer"  v-for="answer in form.answers" :key="answer.id" @click="clickAnswer(answer.id)"  v-bind:class="{checked:selectedAnswer.includes(answer.id)}">{{ answer.answer }}</div>
        </div>
        <div class="dropzone">
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
            <div class="drop"></div>
        </div>
        <!-- <div class="text_answer" v-show="textAnswer!=null">Réponse : {{ props.textAnswer }}</div>> -->
        <div class='btn_submit'>
          <button>Précédent</button>
          <button>Suivant</button>
        </div>
        </div>
    </div>
    </Transition>
  </template>
  
  <script setup lang="ts">
  import { useAlertsStore } from '@/store';
  import { ref } from 'vue';

  const store = useAlertsStore();

  // const props = defineProps({
  //     id: {type : String, required : true},
  //     question: String,
  //     answers: Array,
  //     textAnswer: String,
  // });

  const form = {
    "id": "1",
    "type": "draganddrop",
    "question": "Selon vous, quels sont les buts principaux de la vidéosurveillance ?",
    "answers": [
      { "id": "1", "answer": "A) Dissuader les comportements criminels par une présence visible.", "response": true},
      { "id": "2", "answer": "B) Identifier a posteriori les auteurs/autrices d’infractions pour réprimander plus facilement.", "response": true},
      { "id": "3", "answer": "C) Analyser les tendances de circulation pour l'urbanisme.", "response": false},
      { "id": "4", "answer": "D) Fournir des données pour des études sociologiques." , "response": false},
    ],
    "textAnswer": "En effet, les bonnes réponses sont la A) et la B)"
  };

  const data = ref({ questionId: null as string | null, selectedAnswer: [] as number[]});
  let selectedAnswer: string[] = [];

  const clickAnswer = (a: string) => {
    if(selectedAnswer.includes(a)){
      selectedAnswer = selectedAnswer.filter((answer)=>answer!==a);
    }else{
      selectedAnswer.push(a);
    }
  }

  </script>
  
  <style scoped>

  .question_card{
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
      }
      .answers {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 3rem;
        margin-right: 3rem;
       }

      .answer {
        width: 22%;
        border-radius: .7rem;
        height: 7rem;
        margin: .5rem;
        cursor: pointer;
        padding:.3rem;
        
        &:hover{
        outline: 1px solid #ffffff44;
        box-shadow: 0 7px 50px 10px #000000aa;
        transform: scale(1.015);
        filter: brightness(1.3);
        ::before{
            filter: brightness(.5);
            top: -100%;
            left: 200%;
        }
        }

      }

      .dropzone {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 3rem;
        margin-right: 3rem;
       }

      .drop {
        width: 22%;
        border-radius: .7rem;
        height: 7rem;
        margin: .5rem;
        padding:.3rem;
        background-color: rgba(255, 255, 255, 0.3);
      }

      .checked{
        border-bottom: 1px solid #ffffff44;
        box-shadow: 0 7px 50px 10px #000000aa;
        transform: scale(1.015);
        filter: brightness(1.3);
        ::before{
            filter: brightness(.5);
            top: -100%;
            left: 200%;
        }
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
  