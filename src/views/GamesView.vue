<template>
  <div class="games-view">
    <HomeBanner title="jeux" @open-modal-avatar="showModal = true; showGameCard = false" :player="avatar"/>
    <AvatarModal title="Veuillez choisir votre avatar" v-show="showModal" @close="showModal = false; ; showGameCard = true" @data="getData" :avatar="avatar"></AvatarModal>
    <div class="game-cards">
      <!-- <router-link to="/">Home</router-link> -->
      <GameCard v-show="showGameCard" title="IA et sécurité urbaine" description="Partez à la conquête des mondes en vous challangeant sur quatre thèmes !" img_title='securite_urbaine.png'/>
      <GameCard v-show="showGameCard" class="game-soon" title="Cartographie" description="Prochainement disponible !" img_title='cartographie.png'/>
      <GameCard v-show="showGameCard" class="game-soon" title="Simulateur vidéosurveillance" description="Prochainement disponible !" img_title='videosurveillance.png'/>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import HomeBanner from '@/components/HomeBanner.vue';
  import GameCard from '@/components/GameCard.vue';
  import AvatarModal from '@/components/AvatarModal.vue';
  
  @Options({
  components: {
    HomeBanner, GameCard, AvatarModal
  },
  data() {
    return {
      showModal: false,
      showGameCard: false,
      name: "",
      avatar: 1,
    }
  },
  methods: {
    getData(value: { name: string; avatar: string; }) {
      this.name = value.name;
      this.avatar = value.avatar;
    },
  },
  })

  export default class GamesView extends Vue {
vShow(vShow: any) {
throw new Error('Method not implemented.');
}
    showModal = false;
    showGameCard = true;
    name!: string;
    avatar!: number;
    getData: any;
  }
</script>

<style>
  .games-view{
    background: url('../assets/mini_games/games_bg.png');
    background-size: 100% auto;
    height: 100vh;
    width: 100wh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .game-cards{
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    .game-cards{
      flex-direction: column;
      align-items: center;
    }
    .games-view{
      background-size: auto 100%;
      height: auto;
    }
  }

  
</style>