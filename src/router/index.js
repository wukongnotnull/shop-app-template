import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/sub/AboutView.vue'
import IntroView from '../views/sub/IntroView.vue'
import OrganizationView from '../views/sub/OrganizationView.vue'
import NewsCenterView from '../views/sub/NewsCenterView.vue'
import GoodsCenterView from '@/views/sub/GoodsCenterView'
import StuStyleView from '@/views/sub/StuStyleView'
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import MyDetail from '@/components/MyDetail'
import MyCart from '@/components/MyCart'
import MyOrder from '@/components/MyOrder'
import IndexView from '@/views/IndexView'
import MainView from '@/views/sub/MainView'
import GoodsDetailView from '@/views/GoodsDetailView'
import OrderConfirmView from '@/views/OrderConfirmView'
import CashierMainView from '@/views/CashierMainView'

Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    children: [
      {
        path: '/',
        name: 'main',
        component: MainView
      },
      {
        path: 'intro',
        name: 'intro',
        component: IntroView
      },
      {
        path: 'organization',
        name: 'organization',
        component: OrganizationView
      },
      {
        path: '/newscenter',
        name: 'newscenter',
        component: NewsCenterView
      },
      {
        path: '/goodscenter',
        name: 'goodscenter',
        component: GoodsCenterView,
        children: [
          {
            path: 'mydetail',
            name: 'mydetail',
            component: MyDetail
          },
          {
            path: 'mycart',
            name: 'mycart',
            component: MyCart,
            meta: {
              needAuth: true
            }
          },
          {
            path: 'myorder',
            name: 'myorder',
            component: MyOrder
          }
        ]
      },
      {
        path: '/stustyle',
        name: 'stustyle',
        component: StuStyleView
      },

      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/goods/:goods_id',
    name: 'goodsdetail',
    component: GoodsDetailView
  },
  {
    path: '/orderconfirm',
    name: 'orderconfirm',
    component: OrderConfirmView,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/cashiermain',
    name: 'cashiermain',
    component: CashierMainView,
    meta: {
      needAuth: true
    }
  }
]
// 创建的路由实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
