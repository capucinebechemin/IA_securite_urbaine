import { createRouter, createWebHistory } from 'vue-router'
import GamesView from '../views/GamesView.vue'
import SafeCityView from '../views/SafeCityView.vue'
import World1View from '../views/World1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GamesView
    },
    {
      path: '/safecity',
      name: 'safe-city',
      component: SafeCityView
    },
    {
      path: '/world1',
      name: 'world-1',
      component: World1View
    }
  ]
})

export default router
