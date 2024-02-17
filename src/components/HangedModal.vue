<!-- Modal des phrases à trou -->
<template>
    <Transition name="modal">
        <div class="card_modal">
            <div class="head_modal">
                <div class="title_modal">
                    <h2>{{ props.title }}</h2>
                </div> <img alt="Fermer" class="close_modal" src='/buttons/close.png' @click="store.toggleHangedModal" />
            </div>
            <div class='main_modal'>
                <p>Question</p>
                <div class="container_hanged">
                    <div class="question_hanged">
                        {{ props.start_question }}
                        <input type="text" class="field_input" v-bind:class="{ field_input_good_answer: answerPage }"
                            v-bind:readonly="answerPage" name="name" id='name' v-model="selectedAnswer" required>
                        {{ props.end_question }}
                    </div>
                    <div class="drawing_hanged">
                        <input type="text" class="field_input" v-for="l in props.word" :v-model="l" readonly>
                        <!-- <div v-for="l in props.word">{{ l }}</div> -->
                    </div>
                </div>
                <div class="letters_hanged">
                    <button v-for="   a, index    in    alphabet   " class="letter_hanged" @click="clickLetter(index)"
                        :class="{ letter_checked_hanged: !a.clickable }" :disabled=!a.clickable>{{
                            a.letter }}</button>
                </div>
                <div class="text_answer_modal" v-show="answerPage">Réponse : {{ textAnswer }}</div>
            </div>
            <div class='btn_submit_modal'>
                <button class="btn_previous" @click="submit" v-show="!answerPage">Précédent</button>
                <button class="btn_next" @click="submit" v-show="!answerPage">Suivant</button>
                <button class="btn_return" @click="submit" v-show="answerPage">Retour</button>
            </div>
        </div>
    </Transition>
</template>
    
<script setup lang="ts">
import { ref } from 'vue';
import { useAlertsStore } from '@/store';

const store = useAlertsStore();

const props = defineProps({
    id: { type: String, required: true },
    title: String,
    start_question: String,
    end_question: String,
    word: String,
    textAnswer: String,
});

const alphabet = ref([
    { "letter": "A", "clickable": true },
    { "letter": "B", "clickable": true },
    { "letter": "C", "clickable": true },
    { "letter": "D", "clickable": true },
    { "letter": "E", "clickable": true },
    { "letter": "F", "clickable": true },
    { "letter": "G", "clickable": true },
    { "letter": "H", "clickable": true },
    { "letter": "I", "clickable": true },
    { "letter": "J", "clickable": true },
    { "letter": "K", "clickable": true },
    { "letter": "L", "clickable": true },
    { "letter": "M", "clickable": true },
    { "letter": "N", "clickable": true },
    { "letter": "O", "clickable": true },
    { "letter": "P", "clickable": true },
    { "letter": "Q", "clickable": true },
    { "letter": "R", "clickable": true },
    { "letter": "S", "clickable": true },
    { "letter": "T", "clickable": true },
    { "letter": "U", "clickable": true },
    { "letter": "V", "clickable": true },
    { "letter": "W", "clickable": true },
    { "letter": "X", "clickable": true },
    { "letter": "Y", "clickable": true },
    { "letter": "Z", "clickable": true },
]);


const data = ref({ questionId: null as String | null, selectedAnswer: [] as number[] });
const selectedAnswer = ref<string>("");
const answerPage = false;

const clickLetter = (index: number) => {
    alphabet.value[index].clickable = false;

    // alphabet[index].letter
}

const submit = () => {
    store.toggleHangedModal();
}

</script>
    
<style scoped>
.container_hanged {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 0 4vw;
}

.question_hanged {
    width: 50%;
}

.drawing_hanged {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.letters_hanged {
    margin: auto auto;
}

.letter_hanged {
    padding: 1vh 1vw;
    margin: .5vh .5vw;
}

.letter_checked_hanged {
    background-color: #638e99;
}
</style>
    