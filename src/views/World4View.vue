<template>
    <div class="world_page">
        <HomeBanner title="Protection de la vie privée et contre-surveillance" />
        <BannerMenu v-show="store.isMenuVisible" />
        <div class="game_zone">
            <div v-for="i in 3" class="castles" :id="'w4-castle' + i + '-div'">
                <img :src="'/world4/castle' + i + '.png'" :alt="'world 4 castle ' + i" :id="'w4-castle' + i"
                    @click="movePlayer('w4-castle' + i + '-div', i)">
                <img v-if="store.scoreWorld3[i - 1]>3" src="/stars/star4.png" class="star-castle" />
            </div>
            <img :src="`/players/player${store.avatarId}.png`" alt="w4-player" id="w4-player" class="player">
        </div>
        <RessourceModal v-if="store.isRessourceModalVisible" :subject="'videosurveillance'" world="world4">
        </RessourceModal>
        <Modals ref="modal" world="world4" :v-show="store.isModalsVisible"></Modals>
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

function movePlayer(castleName: string, castleNumber: number) {
    if(castleNumber > 1 && store.scoreWorld4[castleNumber-2]<4) {
        return;
    }
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
    setTimeout(() => {
        let element = castleName.replace(/[^\d]/g, '');
        nLevel.value = parseInt(element[1]);
        if (nLevel.value > 0) {
            modal.value?.launchLevel(nLevel.value, store.scoreWorld4[nLevel.value - 2], 4);
        }
    }, 1500);

}
</script>
