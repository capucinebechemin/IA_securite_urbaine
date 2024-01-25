import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GamesView from '../views/GamesView.vue'
import SafeCityView from '../views/SafeCityView.vue'

const routes: Array<RouteRecordRaw> = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router