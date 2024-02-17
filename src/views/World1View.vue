<template>
    <div class="world_page">
        <HomeBanner title="videosurveillance algorithmique" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w1-start" class="start" @click="movePlayer('w1-start')"></span>
            <img src="/world1/castle1.png" alt="world 1 castle 1" id="w1-castle1" class="castles" @click="movePlayer('w1-castle1')">
            <img src="/world1/castle2.png" alt="wordl 1 castle 2" id="w1-castle2" class="castles" @click="movePlayer('w1-castle2')">
            <img src="/world1/castle3.png" alt="world 1 castle 3" id="w1-castle3" class="castles" @click="movePlayer('w1-castle3')">
            <img :src="`/players/player${store.avatarId}.png`" alt="player" id="w1-player" class="player">
        </div>

        <Modals ref="modal" world="world1" :v-show="store.isModalsVisible"></Modals>

    </div>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/store';
import HomeBanner from '@/components/HomeBanner.vue';
import BannerMenu from '@/components/BannerMenu.vue';
import Modals from '@/components/Modals.vue';
import { ref} from 'vue';

const store = useAlertsStore();

const nLevel = ref(1);
const modal = ref<any>(null);

function movePlayer(castleName: string) {
    var castle = document.getElementById(castleName);
    var player = document.getElementById('w1-player');

    if (castle && player) {
        const castleStyle = window.getComputedStyle(castle);
        const playerStyle = window.getComputedStyle(player);

        const topValue = castleStyle.top;
        const leftValue = castleStyle.left;
        const heightValue = castleStyle.height;

        const topValueInPixels = parseInt(topValue, 10);
        const leftValueInPixels = parseInt(leftValue, 10);
        const heightValueInPixels = parseInt(heightValue, 10);

        if (castleName === 'w1-start') {
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

    setTimeout(() => {
        nLevel.value = parseInt(castleName.charAt(castleName.length - 1));
        if(nLevel.value>0){
            modal.value?.launchLevel(nLevel.value, store.scoreWorld1[nLevel.value-2]);
        }
        
    }, 1500);

}
 
</script>

<style>

.world_page {
    position: relative;
    height: 90vh;
}

.start {
    position: absolute;
    width: 5rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 1rem 0;
    color: rgba(255, 255, 255, 0.3);
    filter: drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.5));
}

#w1-start {
    top: 95%;
    left: 60%;
}

.player { 
    position: absolute;
    height: 10rem;
    filter: drop-shadow(0 0 0.75rem white);
    transition: all 1s ease-in-out;
}

#w1-player {
    top: 80%;
    left: 60%;
}

.castles{
    position: absolute;
    animation: floating 2s ease-in-out 0s infinite;
    filter: drop-shadow(0 0 0.5rem crimson);
}

#w1-castle1 {
    height: 8rem;
    top: 55%;
    left: 50%;
}

#w1-castle2 {
    height: 5rem;
    top: 30%;
    left: 37%;
}

#w1-castle3 {
    height: 3rem;
    top: 15%;
    left: 30%;
}

.start, .castles, .player {
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

    #w1-start {
        top: 95%;
        left: 80%;
    }

    #w1-player {
        top: 70%;
        left: 80%;
    }

    #w1-castle1 {
        height: 6rem;
        top: 60%;
        left: 55%;
    }

    #w1-castle2 {
        top: 45%;
        left: 35%;
    }

    #w1-castle3 {
        top: 35%;
        left: 10%;
    }
}
</style>
