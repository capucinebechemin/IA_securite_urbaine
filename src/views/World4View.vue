<template>
    <div class="world4_page">
        <HomeBanner title="Protection de la vie privée et contre-surveillance" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w4-start" @click="movePlayer('w4-start')"></span>
            <img src='/world4/castle1.png' alt="world 4 castle 1" id="w4-castle1" @click="movePlayer('w4-castle1')">
            <img src='/world4/castle2.png' alt="world 4 castle 2" id="w4-castle2" @click="movePlayer('w4-castle2')">
            <img src='/world4/castle3.png' alt="world 4 castle 3" id="w4-castle3" @click="movePlayer('w4-castle3')">
            <img :src="`/players/player${store.avatarId}.png`" alt="w4-player" id="w4-player">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/store';
import HomeBanner from '@/components/HomeBanner.vue';
import BannerMenu from '@/components/BannerMenu.vue';

const store = useAlertsStore();

function movePlayer(castleName: string) {
    var castle = document.getElementById(castleName);
    var player = document.getElementById('w4-player');

    if (castle && player) {
        const castleStyle = window.getComputedStyle(castle);
        const playerStyle = window.getComputedStyle(player);

        const topValue = castleStyle.top;
        const leftValue = castleStyle.left;
        const heightValue = castleStyle.height;

        const topValueInPixels = parseInt(topValue, 10);
        const leftValueInPixels = parseInt(leftValue, 10);
        const heightValueInPixels = parseInt(heightValue, 10);

        if (castleName === 'w4-start') {
            player.style.setProperty('height', '10rem');
            var playerHeight = parseInt(playerStyle.height, 10)
            player.style.setProperty('top', `${topValueInPixels - playerHeight}px`);
            player.style.setProperty('left', leftValue);
        } else {
            player.style.setProperty('top', `${topValueInPixels + 5}px`);
            player.style.setProperty('height', `${heightValueInPixels + 30}px`);
            player.style.setProperty('left', `${leftValueInPixels + heightValueInPixels / 2}px`);
        }
    }

}
</script>

<style>

.world4_page {
    position: relative;
    height: 90vh;
}

#w4-start {
    position: absolute;
    width: 5rem;
    top: 95%;
    left: 15%;
    border-radius: 50%;
    border-style: solid;
    border-width: 1rem 0;
    color: rgba(255, 255, 255, 0.3);
    filter: drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.5));
}

#w4-player {
    position: absolute;
    height: 10rem;
    top: 75%;
    left: 15%;
    filter: drop-shadow(0 0 0.75rem white);
    transition: all 1s ease-in-out;
}

#w4-castle1 {
    position: absolute;
    animation: floating 2s ease-in-out 0s infinite;
    height: 8rem;
    top: 55%;
    left: 20%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w4-castle2 {
    position: absolute;
    animation: floating 2s ease-in-out 1s infinite;
    height: 7rem;
    top: 52%;
    left: 70%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w4-castle3 {
    position: absolute;
    animation: floating 2s ease-in-out 0.5s infinite;
    height: 5rem;
    top: 45%;
    left: 55%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w4-start,
#w4-castle1,
#w4-castle2,
#w4-castle3,
#w4-player {
    cursor: pointer;
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

    html{
        background-position-x: 15% !important;
    }

    h1 {
        font-size: 1rem;
    }

    #w4-start {
        top: 100%;
        left: 0;
    }
    
    #w4-player {
        top: 80%;
        left: 0;
    }

    #w4-castle1 {
        height: 7rem;
        top: 70%;
        left: 15%;
    }

    #w4-castle2 {
        height: 6rem;
        top: 60%;
        left: 35%;
    }

    #w4-castle3 {
        top: 50%;
        left: 55%;
    }
}
</style>
