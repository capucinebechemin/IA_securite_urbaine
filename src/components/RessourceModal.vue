<!-- Modal des avatars -->
<template>
    <Transition name="modal">
        <div class="card_modal">
            <div class="head_modal">
                <div class="title_modal">
                    <h2>Ressource</h2>
                </div>
                <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleRessourceModal" />
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
    </Transition>
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

onMounted(() => {
    getRessources(props.subject || '');
});

watch(() => props.world, initWorld, { immediate: true });

function initWorld() {
    switch (props.world) {
        case "world1":
            data = dataW1;
            break;
        case "world2":
            data = dataW2;
            break;
        case "world3":
            data = dataW3;
            break;
        case "world4":
            data = dataW4;
            break;
        default:
            console.error("Unknown world: ", props.world);
    }
}

function getRessources(subject: String) {
    //TODO : Remplacer par les données du JSON
    return data.ressources;
    // if (subject === "videosurveillance") {
    //     return [
    //         { title: "Ressource 1", url: "https://www.google.com" },
    //         { title: "Ressource 2", url: "https://www.google.com" },
    //         { title: "Ressource 3", url: "https://www.google.com" },
    //         { title: "Ressource 4", url: "https://www.google.com" },
    //         { title: "Ressource 5", url: "https://www.google.com" },
    //     ]
    // }
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
    flex-basis: 42%;
}
</style>
