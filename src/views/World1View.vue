<template>
    <div class="world1_page">
        <HomeBanner title="videosurveillance algorithmique"/>
        <div class="game_zone">
            <img src="../assets/world1/castle1.png" alt="castle1" class="castle1">
            <img src="../assets/world1/castle2.png" alt="castle2" class="castle2">
            <img src="../assets/world1/castle3.png" alt="castle3" class="castle3">
            <img src="../assets/players/player1.png" alt="player" class="player">
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import HomeBanner from '@/components/HomeBanner.vue';

    @Options({
        components: {
            HomeBanner
        },
    })

    export default class World1View extends Vue {
    }
</script>

<style>
    html{
        background: url('../assets/world1/world1.png') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .world1_page{
        position: relative;
        height: 90vh;
    }

    .player{
        position: absolute;
        height: 10rem;
        bottom: 0%;
        right: 35%;
        filter: drop-shadow(0 0 0.75rem white);
    }

    .castle1{
        position: absolute;
        animation: floating 2s ease-in-out 0s infinite;
        height: 8rem;
        top: 55%;
        left: 50%;
        filter: drop-shadow(0 0 0.5rem crimson);
    }
    .castle2{
        position: absolute;
        animation: floating 2s ease-in-out 1s infinite;
        height: 5rem;
        top: 30%;
        left: 35%;
        filter: drop-shadow(0 0 0.5rem crimson);
    }
    .castle3{
        position: absolute;
        animation: floating 2s ease-in-out 0.5s infinite;
        height: 3rem;
        top: 15%;
        left: 27%;
        filter: drop-shadow(0 0 0.5rem crimson);
    }

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, -10px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    @media screen and (max-width: 900px) {
        
        .player{
            bottom: 5%;
            right: 0;
        }
        .castle1{
            height: 6rem;
            top: 60%;
            left: 55%;
        }
        .castle2{
            top: 45%;
            left: 35%;
        }
        .castle3{
            top: 35%;
            left: 10%;
        }
    }
</style>
