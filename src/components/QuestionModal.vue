<!-- Modal des avatars -->
<template>
    <Transition name="modal">
        <div class="question_card" >
        <div class='main'>
        <div class="head">
            <div class="title"><h2>MINI JEUX N°1</h2></div> <img alt="Fermer" class="close" src='@/assets/buttons/close.png' @click="closeModal"/>
        </div>
        <p>Question</p>
        <div class="question">{{ props.question }}</div>
        <p>Choix multiple</p>
        <div class="answers">
            <div class="answer" @click="clickAnswer(1)"  v-bind:class="{checked:selectedAnswer.includes(1)}">{{ props.answer1 }}</div>
            <div class="answer" @click="clickAnswer(2)"  v-bind:class="{checked:selectedAnswer.includes(2)}">{{ props.answer2 }}</div>
            <div class="answer" @click="clickAnswer(3)"  v-bind:class="{checked:selectedAnswer.includes(3)}">{{ props.answer3 }}</div>
            <div class="answer" @click="clickAnswer(4)"  v-bind:class="{checked:selectedAnswer.includes(4)}">{{ props.answer4 }}</div>
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

    const emit = defineEmits();
    const props = defineProps({
        id: {type : String, required : true },
        question: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
        correctAnswer: [Number],
        textAnswer: String,
    });

    const data = ref({ questionId: null as String | null, selectedAnswer: [] as number[]});
    const tewtAnswer = '';
    const textAnswer = tewtAnswer;
    let selectedAnswer: number[] = [];

    const triggerCustomEvent = () => {
      data.value.questionId = props.id; 
      data.value.selectedAnswer = selectedAnswer; 

      emit('close', data.value);
    };

    const clickAnswer = (a: number) => {
      if(selectedAnswer.includes(a)){
        selectedAnswer = selectedAnswer.filter((answer: number)=>answer!==a);
      }else{
        selectedAnswer.push(a);
      }
    }
    
    const closeModal= ()=> {
      emit('close');      
    }
    const submit = () => {
        alert(selectedAnswer);
        emit('data', {
            questionId: props.id,
            selectedAnswer: selectedAnswer,
        });
        emit('close');
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
        flex-direction: column;
        align-items: flex-start;
       }

      .answer {
        width: 90%;
        border-radius: .7rem;
        max-width: 100%;
        height: auto;
        margin: 10px;
        margin-left: 3rem;
        margin-right: 3rem;
        cursor: pointer;
        padding:.3rem;
        
        &:hover{
        border: 1px solid #ffffff44;
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
  