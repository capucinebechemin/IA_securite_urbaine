<template>
    <div class="world_page">
        <HomeBanner title="videosurveillance algorithmique" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <div v-for="i in 3" class="castles" :id="'w1-castle' + i + '-div'">
                <img :src="'/world1/castle' + i + '.png'" :alt="'world 1 castle ' + i" :data-index="i" :id="'w1-castle' + i"
                    @click="movePlayer('w1-castle' + i + '-div', i)">
                <img v-if="store.scoreWorld1[i - 1] > 3" src="/stars/star1.png" class="star-castle" />
            </div>
            <img :src="`/players/player${store.avatarId}.png`" alt="player" id="w1-player" class="player">
        </div>
        <RessourceModal v-if="store.isRessourceModalVisible" :subject="'videosurveillance'" world="world1">
        </RessourceModal>
        <Modals ref="modal" world="world1" :v-show="store.isModalsVisible"></Modals>
    </div>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/store';
import HomeBanner from '@/components/menu/HomeBanner.vue';
import BannerMenu from '@/components/menu/BannerMenu.vue';
import Modals from '@/components/Modals.vue';
import RessourceModal from '@/components/menu/RessourceModal.vue';
import { ref } from 'vue';


const store = useAlertsStore();

const nLevel = ref(1);
const modal = ref<any>(null);




function movePlayer(castleName: string, castleNumber: number) {
    if(castleNumber > 1 && store.scoreWorld1[castleNumber-2]<4) {
        return;
    }
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
        let element = castleName.replace(/[^\d]/g, '');
        nLevel.value = parseInt(element[1]);
        if (nLevel.value > 0) {
            modal.value?.launchLevel(nLevel.value, store.scoreWorld1[nLevel.value - 2], 1);
        }
    }, 1500);

}

</script>
