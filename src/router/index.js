import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    
  },
  {
    path: '/transferencias',
    name: 'Transferencias',
    component: () => import(/* webpackChunkName: "Transferencias" */ '../views/Transferencias.vue')
  },
  {
    path: '/cartola',
    name: 'Cartola',
    component: () => import(/* webpackChunkName: "Cartola" */ '../views/Cartola.vue')
  },
  {
    path: '/transaccion',
    name: 'Transaccion',
    component: () => import(/* webpackChunkName: "Transaccion" */ '../views/Transaccion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
