<!-- Modal des avatars -->
<template>
    <div v-show="store.isRessourceModalVisible" class="card_modal" :style="`--ressource-color: ${ressourceColor};`">
        <div class="head_modal">
            <div class="title_modal">
                <h2>Ressource</h2>
            </div>
            <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleRessourceModal()" />
        </div>
        <div class='main_modal'>
            <p>Voici des liens pour trouver plus d’informations</p>
            <div class="answers_question">
                <a v-for="ressource in getRessources(props.subject || '')" :key="ressource.title" :href="ressource.url"
                    class="answer_question">
                    {{ ressource.title }}
                </a>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { useAlertsStore } from '@/store';
import { onMounted, ref, watch } from 'vue';

// Import your data files for each world
import dataW1 from '@/data/world1.json';
import dataW2 from '@/data/world2.json';
import dataW3 from '@/data/world3.json';
import dataW4 from '@/data/world4.json';

const store = useAlertsStore();
const props = defineProps({
    subject: String,
    world: String
});
let data = ref();
let ressourceColor = ref("");

onMounted(() => {
    getRessources(props.subject || '');
});

watch(() => props.world, initWorld, { immediate: true });

function initWorld() {
    switch (props.world) {
        case "world1":
            data = dataW1;
            ressourceColor.value = "#638e99";
            break;
        case "world2":
            data = dataW2;
            ressourceColor.value = "#ddaa7c";
            break;
        case "world3":
            data = dataW3;
            ressourceColor.value = "#9b504f";
            break;
        case "world4":
            data = dataW4;
            ressourceColor.value = "#7f744b";
            break;
        default:
            console.error("Unknown world: ", props.world);
    }
}

function getRessources(subject: String) {
    return data.ressources;
}

</script>

<style scoped>
.main_modal {
    height: 65vh;
}

.answers_question {
    flex-wrap: wrap;
    overflow-y: auto;
    max-height: 55vh;
    padding: 0 0;
    margin: 0 4vw;
}


.answer_question {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: .7rem;
    height: 6vh;
    margin: .5vh .5vw;
    padding: 1vh 1vw;
    cursor: pointer;
    background-color: var(--ressource-color);
    transition: filter 0.3s ease, transform 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 2rem white);
        transform: translateY(-3px);

        ::before {
            filter: brightness(.5);
            top: -100%;
            left: 200%;
        }
    }

}
</style>
