<template>
   <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { watch } from 'vue';
import { useAlertsStore } from '@/store';

const store = useAlertsStore();

watch(router.currentRoute, () => {
  console.log('change route bg')
   changeBackground();
   setRessourceVisible();
});

function changeBackground() {
   const body = document.querySelector('html');
   var html = document.getElementsByTagName("html")[0]

   if (router.currentRoute.value.path == '/' || router.currentRoute.value.path === '/safecity') {
      html.style.setProperty("background-color", "rgb(217,217,217)");
      html.style.setProperty("background-image", "none");
   } else if (router.currentRoute.value.path == '/world1') {
      html.style.setProperty("background-image", "url('/world1/world1.webp')");
      html.style.setProperty("--button-color", "#88924b");
      html.style.setProperty("--answer-color", "#638e99");
      html.style.setProperty("--answer-transparent-color", "#638e998d");
   } else if (router.currentRoute.value.path == '/world2') {
      html.style.setProperty("background-image", "url('/world2/world2.webp')");
      html.style.setProperty("--button-color", "#be7f55");
      html.style.setProperty("--answer-color", "#ddaa7c");
      html.style.setProperty("--answer-transparent-color", "#ddaa7c8d");
      if (window.innerWidth <= 900) {
         html.style.setProperty("background-position-x", "80%");
      }
   } else if (router.currentRoute.value.path == '/world3') {
      html.style.setProperty("background-image", "url('/world3/world3.webp')");
      html.style.setProperty("--button-color", "#1c4a62");
      html.style.setProperty("--answer-color", "#9b504f");
      html.style.setProperty("--answer-transparent-color", "#9b504f8d");
      if (window.innerWidth <= 900) {
         html.style.setProperty("background-position-x", "70%");
      }
   } else if (router.currentRoute.value.path == '/world4') {
      html.style.setProperty("background-image", "url('/world4/world4.webp')");
      html.style.setProperty("--button-color", "#4e7781");
      html.style.setProperty("--answer-color", "#7f744b");
      html.style.setProperty("--answer-transparent-color", "#7f744b8d");
      if (window.innerWidth <= 900) {
         html.style.setProperty("background-position-x", "15%");
      }
   }
}

function setRessourceVisible() {
   if (router.currentRoute.value.path == '/' || router.currentRoute.value.path == '/safecity') {
      store.isRessourceVisible = false;
   } else {
      store.isRessourceVisible = true;
   }
}
</script>

<style src="../public/styles/global.css"></style>
