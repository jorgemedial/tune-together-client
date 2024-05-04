import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/mainPage/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sintonizeIt',
      name: 'sintonizeIt',
      component: () => import('../views/sintonizeIt/UserList.vue')
    },
    {
      path: '/tuneTogether',
      name: 'tuneTogether',
      component: () => import('../views/tuneTogether/ConcertList.vue')
    }
  ]
})

export default router
