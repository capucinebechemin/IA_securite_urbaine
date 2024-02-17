import { createRouter, createWebHistory } from 'vue-router'
import GamesView from '../views/GamesView.vue'
import SafeCityView from '../views/SafeCityView.vue'
import World1View from '../views/World1View.vue'
import World2View from '../views/World2View.vue'
import World3View from '../views/World3View.vue'
import World4View from '../views/World4View.vue'

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
    },
    {
      path: '/world2',
      name: 'world-2',
      component: World2View
    },
    {
      path: '/world3',
      name: 'world-3',
      component: World3View
    },
    {
      path: '/world4',
      name: 'world-4',
      component: World4View
    }
  ]
})

export default router
