<template>
  <div class="star-rating">
    <img v-for="star in rating" :key="star" :src="'/' + world_num + '/castle' + star + '.png'" class="star-img" :alt="title" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  rating: Number,
  world_num: String,
  title: String
});


const rating = 0;
const world_num = 'world1';
const title = '';

</script>

<style scoped>
.star-rating {
  display: flex;
  justify-content: space-around;
}

.star-img {
  width: 2rem;
  height: 2rem;
}
</style>
