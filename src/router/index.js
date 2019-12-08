import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('../views/Buy.vue')
  },
  {
    path: '/orderinfo',
    name: 'orderinfo',
    component: () => import('../views/OrderInfo.vue')
  },
  {
    path: '/search/product',
    name: 'product',
    component: () => import('../components/search/Product.vue')
  },
  {
    path: '/search/purchase',
    name: 'purchase',
    component: () => import('../components/search/Purchase.vue')
  },
  {
    path: '/search/customer',
    name: 'customer',
    component: () => import('../components/search/Customer.vue')
  },
  {
    path: '/search/partner',
    name: 'partner',
    component: () => import('../components/search/Partner.vue')
  },
 
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
