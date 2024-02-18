<template>
  <div class="star-rating">
    <div v-for="star in rating" :key="star" >
      <img  v-if="Number(star)>3" :src="'stars/star' + world_num + '.png'" class="star-img" :alt="title" />
      <img  v-else :src="'stars/star' + world_num + '.png'" class="star-img no-star" :alt="title" />
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  rating: Array<Number>,
  world_num: String,
  title: String
});

const title = '';

</script>

<style scoped>
.star-rating {
  display: flex;
  justify-content: center;
}

.star-img {
  width: 3rem;
  height: 3rem;
  padding: 0 1rem;
}

.no-star {
  filter: grayscale(100%);
}
</style>
