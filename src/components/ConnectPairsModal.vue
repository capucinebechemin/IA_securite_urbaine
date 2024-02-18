<template>
    <div class="card_modal">
        <div class="head_modal">
            <div class="title_modal">
                <h2>{{ props.title }}</h2>
            </div> <img alt="Fermer" class="close_modal" src='/buttons/close.png'
                @click="store.toggleConnectPairsModal()" />
        </div>
        <div class='main_modal'>
            <p>Connect the pairs:</p>
            <div class="items-container">
                <!-- Items for the first group -->
                <div class="items-group">
                    <div :ref="setRef(item.item1)" v-for="(item, index) in items" :key="'item1-' + item.item1" class="item"
                        @click="selectItem(item.item1, 'item1')">
                        {{ item.item1 }}
                    </div>
                </div>

                <!-- SVG container for drawing lines -->
                <svg class="lines-container" ref="svg">
                    <line v-for="(line, index) in lines" :key="index" :x1="line.x1" :y1="line.y1" :x2="line.x2"
                        :y2="line.y2" stroke="black" />
                </svg>

                <!-- Items for the second group -->
                <div class="items-group">
                    <div :ref="setRef(item.item2)" v-for="(item, index) in items" :key="'item2-' + item.item2" class="item"
                        @click="selectItem(item.item2, 'item2')">
                        {{ item.item2 }}
                    </div>
                </div>
            </div>
        </div>
        <div class='btn_submit_modal'>
            <button class="btn_previous" @click="previous" v-show="!answerPage">Précédent</button>
            <button class="btn_next" @click="checkAnswer" v-show="!answerPage">Suivant</button>
            <button class="btn_return" @click="submit" v-show="answerPage">Retour</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useAlertsStore } from '@/store';
import { ref } from 'vue';
import type { PairItem } from '@/class/ConnectPairs';

const answerPage = false;

const store = useAlertsStore();
store.isModalsVisible = true;
store.isConnectPairsModalVisible = true;

const props = defineProps({
    id: String,
    next: { type: Function, required: true },
    previous: { type: Function, required: true },
    addPoint: { type: Function, required: true },
    title: String,
    answers: Array<PairItem>
});

const svg = ref(null);
const lines = ref([]);
const itemRefs = ref({});
const selectedItems = ref({ item1: null, item2: null });
//A sauvegarder dans le cookie
const connections = ref([]);
// TODO : Remplacer avec les données du JSON
const items = ref([
    { item1: 'Item 1A', item2: 'Item 1B' },
    { item1: 'Item 4A', item2: 'Item 4B' },
    { item1: 'Item 5A', item2: 'Item 5B' },
    { item1: 'Item 3A', item2: 'Item 3B' },
    { item1: 'Item 2A', item2: 'Item 2B' }
]);

const setRef = (itemName) => {
    return (el) => {
        if (el) {
            itemRefs.value[itemName] = el;
        }
    };
};

const selectItem = (selectedItem, group) => {
    selectedItems.value[group] = selectedItem;

    if (selectedItems.value.item1 && selectedItems.value.item2) {
        drawLine(selectedItems.value.item1, selectedItems.value.item2);

        connections.value.push({ item1: selectedItems.value.item1, item2: selectedItems.value.item2 });

        selectedItems.value = { item1: null, item2: null };
    }
};

const drawLine = (item1Label, item2Label) => {
    const item1Element = itemRefs.value[item1Label];
    const item2Element = itemRefs.value[item2Label];
    console.log(item1Element, item2Element);

    if (item1Element && item2Element) {
        const svgRect = svg.value.getBoundingClientRect();
        const item1Rect = item1Element.getBoundingClientRect();
        const item2Rect = item2Element.getBoundingClientRect();

        const x1 = item1Rect.right - svgRect.left;
        const y1 = item1Rect.top + item1Rect.height / 2 - svgRect.top;
        const x2 = item2Rect.left - svgRect.left;
        const y2 = item2Rect.top + item2Rect.height / 2 - svgRect.top;

        lines.value.push({ x1, y1, x2, y2 });
    }
};


const previous = () => {
    store.toggleConnectPairsModal();
    props.previous();
}

const submit = () => {
    store.toggleConnectPairsModal();
    checkAnswer();
    props.next();
}

const checkAnswer = () => {
    let score = 0;

    connections.value.forEach(connection => {
        if (items.value.some(item =>
            (item.item1 === connection.item1 && item.item2 === connection.item2) ||
            (item.item1 === connection.item2 && item.item2 === connection.item1)
        )) {
            score++;
        }
    });

    if (score == items.value.length)
        props.addPoint(1);

    connections.value = [];
};




</script>
  
<style scoped>
.items-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin: 20px 0;
}

.items-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    margin: 10px 0;
    padding: 8px 16px;
    background-color: #e9e9e9;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.item:hover {
    background-color: #d0d0d0;
}

.lines-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>

  