<template>
    <div class="world_page">
        <HomeBanner title="Prédiction du crime" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w2-start" @click="movePlayer('w2-start')" class="start"></span>
            <div v-for="i in 3" class="castles" :id="'w2-castle' + i + '-div'">
                <img :src="'/world2/castle' + i + '.png'" :alt="'world 2 castle ' + i" :id="'w2-castle' + i"
                    @click="movePlayer('w2-castle' + i + '-div')">
                <img v-if="store.scoreWorld2[i - 1]>3" src="/stars/star2.png" class="star-castle" />
            </div>
            <img :src="`/players/player${store.avatarId}.png`" alt="w2-player" id="w2-player" class="player">
        </div>
        <Modals ref="modal" world="world2" :v-show="store.isModalsVisible"></Modals>
    </div>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/store';
import HomeBanner from '@/components/HomeBanner.vue';
import BannerMenu from '@/components/BannerMenu.vue';
import Modals from '@/components/Modals.vue';
import { ref } from 'vue';


const store = useAlertsStore();

const nLevel = ref(1);
const modal = ref<any>(null);

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
        } else if (castleName === 'w2-castle2') {
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
    setTimeout(() => {
        let element = castleName.replace(/[^\d]/g, '');
        nLevel.value = parseInt(element[1]); 
        if (nLevel.value > 0) {
            modal.value?.launchLevel(nLevel.value, store.scoreWorld2[nLevel.value - 2],2);
        }


    }, 1500);

}
</script>

<style>
#w2-start {
    top: 97%;
    left: 60%;
}

#w2-player {
    height: 10rem;
    top: 82%;
    left: 60%;
}

#w2-castle1-div {
    top: 65%;
    left: 72%;

    #w2-castle1 {
        height: 8rem;
    }
}

#w2-castle2-div {
    top: 40%;
    left: 82%;

    #w2-castle2 {
        height: 5rem;
    }
}

#w2-castle3-div {
    top: 20%;
    left: 85%;

    #w2-castle3 {
        height: 3rem;
    }
}

@media screen and (max-width: 900px) {

    #w2-start {
        top: 95%;
        left: 0;
    }

    #w2-player {
        top: 77%;
        left: 0;
    }

    #w2-castle1-div {
        height: 6rem;
        top: 65%;
        left: 50%;
    }

    #w2-castle2-div {
        top: 35%;
        left: 75%;
    }

    #w2-castle3-div {
        top: 25%;
        left: 90%;
    }
}</style>
