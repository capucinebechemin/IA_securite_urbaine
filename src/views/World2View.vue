<template>
    <div class="world2_page">
        <HomeBanner title="Prédiction du crime" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w2-start" @click="movePlayer('w2-start')"></span>
            <img src='/world2/castle1.png' alt="world 2 castle 1" id="w2-castle1" @click="movePlayer('w2-castle1')">
            <img src='/world2/castle2.png' alt="world 2 castle 2" id="w2-castle2" @click="movePlayer('w2-castle2')">
            <img src='/world2/castle3.png' alt="world 2 castle 3" id="w2-castle3" @click="movePlayer('w2-castle3')">
            <img :src="`/players/player${store.avatarId}.png`" alt="w2-player" id="w2-player">
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
    var player = document.getElementById('w2-player');

    if (castle && player) {
        const castleStyle = window.getComputedStyle(castle);
        const playerStyle = window.getComputedStyle(player);

        const topValue = castleStyle.top;
        const leftValue = castleStyle.left;
        const heightValue = castleStyle.height;

        const topValueInPixels = parseInt(topValue, 10);
        const leftValueInPixels = parseInt(leftValue, 10);
        const heightValueInPixels = parseInt(heightValue, 10);

        if (castleName === 'w2-start') {
            player.style.setProperty('height', '10rem');
            var playerHeight = parseInt(playerStyle.height, 10)
            player.style.setProperty('top', `${topValueInPixels - playerHeight}px`);
            player.style.setProperty('left', leftValue);
        } else if(castleName === 'w2-castle2') {
            player.style.setProperty('height', `${heightValueInPixels + 30}px`);
            player.style.setProperty('top', "45%");
            player.style.setProperty('left', "80%");
            setTimeout(() => {
                var player = document.getElementById('w2-player');
                if (player) {
                    player.style.setProperty('top', `${topValueInPixels - 10}px`);
                    player.style.setProperty('left', `${leftValueInPixels - heightValueInPixels / 2}px`);
                }
            }, 1000);
        } else {
            player.style.setProperty('top', `${topValueInPixels - 10}px`);
            player.style.setProperty('height', `${heightValueInPixels + 30}px`);
            player.style.setProperty('left', `${leftValueInPixels - heightValueInPixels / 2}px`);
        }
    }

}
</script>

<style>

.world2_page {
    position: relative;
    height: 90vh;
}

#w2-start {
    position: absolute;
    width: 5rem;
    top: 97%;
    left: 60%;
    border-radius: 50%;
    border-style: solid;
    border-width: 1rem 0;
    color: rgba(255, 255, 255, 0.3);
    filter: drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.5));
}

#w2-player {
    position: absolute;
    height: 10rem;
    top: 82%;
    left: 60%;
    filter: drop-shadow(0 0 0.75rem white);
    transition: all 1s ease-in-out;
}

#w2-castle1 {
    position: absolute;
    animation: floating 2s ease-in-out 0s infinite;
    height: 8rem;
    top: 65%;
    left: 72%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w2-castle2 {
    position: absolute;
    animation: floating 2s ease-in-out 1s infinite;
    height: 5rem;
    top: 40%;
    left: 82%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w2-castle3 {
    position: absolute;
    animation: floating 2s ease-in-out 0.5s infinite;
    height: 3rem;
    top: 20%;
    left: 85%;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w2-start,
#w2-castle1,
#w2-castle2,
#w2-castle3,
#w2-player {
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
        background-position-x: 80% !important;
    }

    #w2-start {
        top: 100%;
        left: 5%;
    }

    #w2-player {
        top: 80%;
        left: 0;
    }

    #w2-castle1 {
        height: 6rem;
        top: 65%;
        left: 50%;
    }

    #w2-castle2 {
        top: 35%;
        left: 75%;
    }

    #w2-castle3 {
        top: 25%;
        left: 90%;
    }
}
</style>
