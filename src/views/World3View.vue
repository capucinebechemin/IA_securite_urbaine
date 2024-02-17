<template>
    <div class="world3_page">
        <HomeBanner title="Analyse statistique et criminalité" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w3-start" @click="movePlayer('w3-start')"></span>
            <img src='/world3/castle1.png' alt="world 3 castle 1" id="w3-castle1" @click="movePlayer('w3-castle1')">
            <img src='/world3/castle2.png' alt="world 3 castle 2" id="w3-castle2" @click="movePlayer('w3-castle2')">
            <img src='/world3/castle3.png' alt="world 3 castle 3" id="w3-castle3" @click="movePlayer('w3-castle3')">
            <img :src="`/players/player${store.avatarId}.png`" alt="w3-player" id="w3-player">
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
    var player = document.getElementById('w3-player');

    if (castle && player) {
        const castleStyle = window.getComputedStyle(castle);
        const playerStyle = window.getComputedStyle(player);

        const topValue = castleStyle.top;
        const leftValue = castleStyle.left;
        const heightValue = castleStyle.height;

        const topValueInPixels = parseInt(topValue, 10);
        const leftValueInPixels = parseInt(leftValue, 10);
        const heightValueInPixels = parseInt(heightValue, 10);

        if (castleName === 'w3-start') {
            player.style.setProperty('height', '10rem');
            var playerHeight = parseInt(playerStyle.height, 10)
            player.style.setProperty('top', `${topValueInPixels - playerHeight}px`);
            player.style.setProperty('left', leftValue);
        } else {
            player.style.setProperty('top', `${topValueInPixels + 10}px`);
            player.style.setProperty('height', `${heightValueInPixels + 30}px`);
            player.style.setProperty('left', `${leftValueInPixels + heightValueInPixels / 2}px`);
        }
    }

}
</script>

<style>

.world3_page {
    position: relative;
    height: 90vh;
}

#w3-start {
    position: absolute;
    width: 5rem;
    top: 100%;
    left: 57%;
    border-radius: 50%;
    border-style: solid;
    border-width: 1rem 0;
    color: rgba(255, 255, 255, 0.3);
    filter: drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.5));
}

#w3-player {
    position: absolute;
    height: 10rem;
    top: 85%;
    left: 57%;
    filter: drop-shadow(0 0 0.75rem white);
    transition: all 1s ease-in-out;
}

#w3-castle1 {
    position: absolute;
    animation: floating 2s ease-in-out 0s infinite;
    height: 7rem;
    top: 65%;
    left: 55%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w3-castle2 {
    position: absolute;
    animation: floating 2s ease-in-out 1s infinite;
    height: 5rem;
    top: 50%;
    left: 60%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w3-castle3 {
    position: absolute;
    animation: floating 2s ease-in-out 0.5s infinite;
    height: 3rem;
    top: 35%;
    left: 65%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w3-start,
#w3-castle1,
#w3-castle2,
#w3-castle3,
#w3-player {
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
        background-position-x: 70% !important;
    }

    #w3-start {
        top: 95%;
        left: 20%;
    }

    #w3-player {
        top: 75%;
        left: 20%;
    }

    #w3-castle1 {
        top: 60%;
        left: 25%;
    }

    #w3-castle2 {
        top: 43%;
        left: 35%;
    }

    #w3-castle3 {
        top: 30%;
        left: 45%;
    }
}
</style>
