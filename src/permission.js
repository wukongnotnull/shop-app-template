// 设计路由守卫
import router from './router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'

// 全局路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.needAuth) {
    if (store.getters.token === undefined) {
      // 表示没有登录，需要跳转到登录页面
      router.push({ path: '/login' })
      Message('请先登录')
    } else {
      next()
      NProgress.done()
    }
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
