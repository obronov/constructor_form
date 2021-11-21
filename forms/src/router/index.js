import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta: {
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/create.vue'),
    meta: {
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/schemes',
    name: 'schemes',
    component: () => import('../views/schemes.vue'),
    meta: {
      middleware: [
        auth
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store,
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
