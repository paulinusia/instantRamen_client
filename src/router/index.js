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
    path: '/customers',
    name: 'customers',
    component: () => import('../views/CustomerAll.vue')
  },
  {
    path: '/customer/:customerID',
    name: 'customer',
    component: () => import('../views/CustomerIndividual.vue')
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
    name: 'searchcustomer',
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
