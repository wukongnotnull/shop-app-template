// 设计路由守卫

import router from 'router'
import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  var hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next()
    } else {

    }
  } else {
  }

})
