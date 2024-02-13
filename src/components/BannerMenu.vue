<template>
    <ul class="menu">
        <li v-for="link in links" :key="link.id">
            <a :href="link.url">
                <img class='menu-icon' :alt="link.id.toString()" :src="link.img" />
                {{ link.label }}
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">

    const links = [
                { id: 1, label: 'Home', url: '/', img: "/mini_games/games_bg.png" },
                { id: 2, label: 'IA et sécurité urbaine', url: '/safecity', img: '/mini_games/securite_urbaine.png'},
                { id: 3, label: 'Cartographie', url: '/cartographie', img: '/mini_games/cartographie.png'},
                { id: 4, label: 'Video surveillance', url: '/videosurveillance', img: '/mini_games/videosurveillance.png'},
                { id: 5, label: 'Contact', url: '/', img: '/menu/contact.jpeg'},
            ];
</script>

<style scoped>
.menu {
    list-style: none;
	display: flex;
	flex-direction: column;
	position: absolute;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    padding-inline-start: 0;
    margin-block-start: 0;
}

li {
    top:0;
    left: 0;
    cursor: pointer;
    margin: 1vh 3vh;
    padding: 2.5vh 1rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    border-radius: 5px;
    box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.8) inset,
        3px 5px 10px 0 rgba(0, 0, 0, 0.1);
    text-decoration: none;
    will-change: color, text-shadow, font-size;
    transition: ease all 0.3s;
    &:hover {
        transform: scale(1.1);
        background: rgba(255, 255, 255, 0.8);
    }
  }
  a{
    display: flex;
    align-items: center;
  }
  .menu-icon {
    width: 10vh;
    height: 10vh;
    margin: 0 2rem;
    border-radius: 50%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (max-width: 880px) {
    .menu{
        font-size: 0.75rem;
    }
    li {
        padding: 1rem 0;
        width: 86vw;
    }
    .menu-icon {
        width: 2.5rem;
        height: 2.5rem;
    }
  }

</style>
