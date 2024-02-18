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
   changeBackground();
   setRessourceVisible();
});

function changeBackground() {
   const body = document.querySelector('html');
   var html = document.getElementsByTagName("html")[0];

   if (router.currentRoute.value.path == '/' || router.currentRoute.value.path === '/safecity') {
      html.style.setProperty("background-image", "url('/mini_games/games_bg.png')");

   } else if (router.currentRoute.value.path == '/world1') {
      html.style.setProperty("background-image", "url('/world1/world1.png')");

   } else if (router.currentRoute.value.path == '/world2') {
      html.style.setProperty("background-image", "url('/world2/world2.png')");
      if (window.innerWidth <= 900) {
         html.style.setProperty("background-position-x", "80%");
      }
   } else if (router.currentRoute.value.path == '/world3') {
      html.style.setProperty("background-image", "url('/world3/world3.png')");
      if (window.innerWidth <= 900) {
         html.style.setProperty("background-position-x", "70%");
      }
   } else if (router.currentRoute.value.path == '/world4') {
      html.style.setProperty("background-image", "url('/world4/world4.png')");
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

<style>
@import url('https://fonts.cdnfonts.com/css/game');

html {
   right: 0;
   --main-bg-color: #0099ff;
   --main-transparent: rgba(255, 255, 255, 0.5);
   font-family: 'Roboto Mono', monospace;
   font-size: 1rem;
   background: url('/mini_games/games_bg.png') no-repeat center center fixed;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
   height: 100%;
}


a {
   color: black;
   text-decoration: none;
}
</style>
