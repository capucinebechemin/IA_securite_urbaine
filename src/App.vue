<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/game');

 html{
    font-family: 'Comic Sans MS';
    --main-bg-color: #0099ff;
    --main-transparent: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(122, 183, 225, 0.5) 100%);
    font-family: 'Game', sans-serif;
    background: url('/mini_games/games_bg.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
 }
 a{
    color: black;
    text-decoration: none;
 }
</style>
