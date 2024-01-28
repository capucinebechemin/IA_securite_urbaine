import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GamesView from '../views/GamesView.vue'
import SafeCityView from '../views/SafeCityView.vue'
import World1View from '../views/World1View.vue'

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
  },
  {
    path: '/world1',
    name: 'world-1',
    component: World1View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router