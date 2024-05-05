import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/mainPage/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'UserList',
      component: () => import('../views/sintonizeIt/UserList.vue')
    },
    {
      path: '/concerts',
      name: 'ConcertList',
      component: () => import('../views/tuneTogether/ConcertList.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/loginPage/LoginPage.vue')
    },
    {
      path: '/event-ticket',
      name: 'EventTicket',
      component: () => import('@/components/eventticket/EventTicket.vue')
    }
  ]
})

export default router;