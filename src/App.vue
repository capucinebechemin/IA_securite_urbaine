<template>
   <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router';
import { watch } from 'vue';

watch(router.currentRoute, () => {
   changeBackground();
});

function changeBackground() {
   const body = document.querySelector('html');
   var html = document.getElementsByTagName("html")[0];

   if (router.currentRoute.value.path == '/' || router.currentRoute.value.path === 'safecity') {
      html.style.setProperty("background-image", "url('/mini_games/games_bg.png')");
   } else if (router.currentRoute.value.path == '/world1') {
      console.log('world1');
      html.style.setProperty("background-image", "url('/world1/world1.png')");
   }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/game');

html {
   right: 0;
   --main-bg-color: #0099ff;
   --main-transparent: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(122, 183, 225, 0.5) 100%);
   font-family: "Game", sans-serif;
   background: url('/mini_games/games_bg.png') no-repeat center center fixed;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
}

a {
   color: black;
   text-decoration: none;
}
</style>
