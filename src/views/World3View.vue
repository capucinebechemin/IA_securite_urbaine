<template>
    <div class="world_page">
        <HomeBanner title="Analyse statistique et criminalité" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <span id="w3-start" @click="movePlayer('w3-start')" class="start"></span>
            <div v-for="i in 3" class="castles" :id="'w3-castle' + i + '-div'">
                <img :src="'/world3/castle' + i + '.png'" :alt="'world 3 castle ' + i" :id="'w3-castle' + i"
                    @click="movePlayer('w3-castle' + i + '-div')">
                <img v-if="store.scoreWorld3[i - 1]>3" src="/stars/star3.png" class="star-castle" />
            </div>
            <img :src="`/players/player${store.avatarId}.png`" alt="w3-player" id="w3-player" class="player">
        </div>
        <RessourceModal :subject="'videosurveillance'" ></RessourceModal>
        <Modals ref="modal" world="world3" :v-show="store.isModalsVisible"></Modals>
    </div>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/store';
import HomeBanner from '@/components/menu/HomeBanner.vue';
import BannerMenu from '@/components/menu/BannerMenu.vue';
import RessourceModal from '@/components/menu/RessourceModal.vue';
import Modals from '@/components/Modals.vue';
import { ref } from 'vue';


const store = useAlertsStore();

const nLevel = ref(1);
const modal = ref<any>(null);

function movePlayer(castleName: string) {
    if(castleName != "w3-castle" + nLevel.value + "-div") {
        return;
    }
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
    setTimeout(() => {
        let element = castleName.replace(/[^\d]/g, '');
        nLevel.value = parseInt(element[1]); 
        if (nLevel.value > 0) {
            modal.value?.launchLevel(nLevel.value, store.scoreWorld3[nLevel.value - 2],3);
        }
    }, 1500);

}
</script>

<style>
#w3-start {
    top: 100%;
    left: 57%;
}

#w3-player {
    height: 10rem;
    top: 85%;
    left: 57%;
}

#w3-castle1-div {
    top: 65%;
    left: 55%;

    #w3-castle1 {
        height: 7rem;
    }
}

#w3-castle2-div {
    top: 50%;
    left: 60%;

    #w3-castle2 {
        height: 5rem;
    }
}

#w3-castle3-div {
    top: 35%;
    left: 65%;

    #w3-castle3 {
        height: 3rem;
    }
}

@media screen and (max-width: 900px) {

    #w3-start {
        top: 95%;
        left: 20%;
    }

    #w3-player {
        top: 75%;
        left: 20%;
    }

    #w3-castle1-div {
        top: 60%;
        left: 25%;
    }

    #w3-castle2-div {
        top: 43%;
        left: 35%;
    }

    #w3-castle3-div {
        top: 30%;
        left: 45%;
    }
}</style>
