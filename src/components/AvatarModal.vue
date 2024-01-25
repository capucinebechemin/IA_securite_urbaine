<!-- Modal des avatars -->
<template>
    <Transition name="modal">
        <div class="avatar_card" >
        <div class='main'>
        <div class="head">
            <div class="title"><h2>{{ title }}</h2></div> <img alt="Fermer" class="close" src='@/assets/buttons/close.png' @click="closeModal"/>
        </div>
        <p>NOM</p>
        <input>
        <p>AVATAR</p>
        <div class="images">
            <img class='card_image' :src="require(`@/assets/players/player1.png`)" alt="avatar_card" />
            <img class='card_image' :src="require(`@/assets/players/player2.png`)" alt="avatar_card" />
            <img class='card_image' :src="require(`@/assets/players/player3.png`)" alt="avatar_card" />
            <img class='card_image' :src="require(`@/assets/players/player4.png`)" alt="avatar_card" />
        </div>
        <div class='btn_submit'>
          <button>Choisir</button>
        </div>
        </div>
    </div>
    </Transition>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    props: {
      title: String
    },
    emits: ['close']
  })
  export default class AvatarModal extends Vue {
    title!: string;
    closeModal() {
      this.$emit('close');
    }
  }
  </script>
  
  <style scoped>

  .avatar_card{
    position: relative;
    user-select:none;
    height: 45rem;
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
      
      .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
       }

      .card_image {
        border-radius: .5rem;
        max-width: 100%;
        height: 25rem;
        object-fit: cover;
        margin: 10px;
        cursor: pointer;
        
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
  