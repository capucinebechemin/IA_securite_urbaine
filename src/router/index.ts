import { createRouter, createWebHistory } from 'vue-router'
import GamesView from '../views/GamesView.vue'
import SafeCityView from '../views/SafeCityView.vue'

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
    }
  ]
})

export default router
