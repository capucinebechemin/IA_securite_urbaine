<template>
    <div class="world4_page">
        <HomeBanner title="Protection de la vie privée et contre-surveillance" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w4-start" @click="movePlayer('w4-start')" class="start"></span>
            <img src='/world4/castle1.png' alt="world 4 castle 1" id="w4-castle1" class="castles" @click="movePlayer('w4-castle1')">
            <img src='/world4/castle2.png' alt="world 4 castle 2" id="w4-castle2" class="castles" @click="movePlayer('w4-castle2')">
            <img src='/world4/castle3.png' alt="world 4 castle 3" id="w4-castle3" class="castles" @click="movePlayer('w4-castle3')">
            <img :src="`/players/player${store.avatarId}.png`" alt="w4-player" id="w4-player" class="player">
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
#w4-start {
    top: 90%;
    left: 10%;
}

#w4-player {
    height: 10rem;
    top: 75%;
    left: 10%;
}

#w4-castle1 {
    height: 8rem;
    top: 50%;
    left: 25%;
}

#w4-castle2 {
    height: 7rem;
    top: 52%;
    left: 70%;
}

#w4-castle3 {
    height: 5rem;
    top: 45%;
    left: 60%;
}

@media screen and (max-width: 900px) {

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
