<template>
    <div class="menu">
        <ul>
            <li v-for="link in links" :key="link.id">
                <a :href="link.url">
                    <img class='menu-icon' :alt="link.id" :src="require(`@/assets/${link.img}`)" />
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class BannerMenu extends Vue {
    data() {
        return {
            links: [
                { id: 1, label: 'Home', url: '/', img: "mini_games/games_bg.png" },
                { id: 2, label: 'IA et sécurité urbaine', url: '/safecity', img: 'mini_games/securite_urbaine.png'},
                { id: 3, label: 'Cartographie', url: '/cartographie', img: 'mini_games/cartographie.png'},
                { id: 4, label: 'Video surveillance', url: '/videosurveillance', img: 'mini_games/videosurveillance.png'},
                { id: 5, label: 'Contact', url: '/', img: 'menu/contact.jpeg'},
            ]
        };
    }
}
</script>

<style scoped>
.menu {
	display: flex;
	flex-direction: column;
	position: absolute;
    top : 0;
    left : 0;
    width: 50%;
    margin-top: 5rem;
    z-index: 1;
}
ul {
    list-style: none;
}
li {
    cursor: pointer;
    margin: 1vh 0;
    padding: 2.5vh 1rem;
    width: 80%;
    background: rgba(255, 255, 255, 0.3);
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
    width: 100%;
  }
  .menu-icon {
    width: 5rem;
    height: 5rem;
    margin: 0 2rem;
    border-radius: 50%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (max-width: 880px) {
    .menu{
        font-size: 0.75rem;
        width: 100%;
    }
    li {
        padding: 1rem 0;
    }
    .menu-icon {
        width: 2.5rem;
        height: 2.5rem;
    }


  }

</style>
