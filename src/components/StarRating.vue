<template>
  <div class="star-rating">
    <img v-for="star in rating" :key="star" :src="getImagePath(star)" class="star-img" :alt="title" />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    props: {
      rating: Number,
      world_num: String,
      title: String
    }
  })
  export default class StarRating extends Vue {
    rating!: number;
    world_num!: string;
    title!: string;

    getImagePath(star: number) {
      return require(`@/assets/${this.world_num}/castle${star}.png`);
    }
  }
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
