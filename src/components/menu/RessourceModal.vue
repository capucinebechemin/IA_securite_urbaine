<!-- Modal des avatars -->
<template>
    <div v-show="store.isRessourceModalVisible" class="card_modal">
        <div class="head_modal">
            <div class="title_modal">
                <h2>Ressource</h2>
            </div> 
            <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleRessourceModal" />
        </div>
        <div class='main_modal'>
            <p>Voici des liens pour trouver plus d’informations</p>
            <div class="answers_question">
                <a v-for="ressource in getRessources(props.subject || '')" :key="ressource.title" :href="ressource.url" class="answer_question">
                    {{ ressource.title }}
                </a>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { useAlertsStore } from '@/store';
import { onMounted } from 'vue';

const store = useAlertsStore();
const props = defineProps({
    subject: String
});

onMounted(() => {
    getRessources(props.subject || '');
});

function getRessources(subject: String) {
    //TODO : Remplacer par les données du JSON
    if (subject === "videosurveillance") {
        return [
            { title: "Ressource 1", url: "https://www.google.com" },
            { title: "Ressource 2", url: "https://www.google.com" },
            { title: "Ressource 3", url: "https://www.google.com" },
            { title: "Ressource 4", url: "https://www.google.com" },
            { title: "Ressource 5", url: "https://www.google.com" },
        ]
    }
}

</script>

<style scoped>
.answers_question {
    flex-wrap: wrap;
}
.answer_question{
    flex-basis: 40%;
}
</style>
