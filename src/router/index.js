import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '@/layout'
import MainView from '@/views/sub/MainView'
import PhoneView from '@/views/sub/PhoneView'
import CoumputerView from '@/views/sub/CoumputerView'
import RedMiRouterView from '@/views/sub/RedMiRouterView'
import LoginView from '@/views/login'
import GoodsDetailView from '@/views/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    children: [
      {
        path: '',
        name: 'main',
        component: MainView
      },
      {
        path: 'phone',
        name: 'phone',
        component: PhoneView
      },
      {
        path: 'computer',
        name: 'computer',
        component: CoumputerView
      },
      {
        path: 'redmirouter',
        name: 'redmirouter',
        component: RedMiRouterView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/goodsdetail/:goodsId',
    name: 'goodsdetail',
    component: GoodsDetailView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart'),
    meta: { needAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
