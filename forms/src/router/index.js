import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Home
  },
  {
    path: '/create',
    name: 'Создать схему',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/schemes',
    name: 'Мои схемы',
    component: () => import('../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
