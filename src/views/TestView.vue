<template>
    <Modals />
    <Modals ref="modal" world="world1"></Modals>
</template>

<script setup lang="ts">
import Modals from '@/components/Modals.vue';
import { useAlertsStore } from '@/store';

const store = useAlertsStore();

store.toggleModals();
</script>