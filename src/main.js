import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import './plugins/element.js'
import store from './store'

Vue.config.productionTip = false
// 配置后端的全局域名
axios.defaults.baseURL = 'https://mock.apifox.cn/m1/971845-0-default'

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.needAuth) {
    if (store.state.islogin === 1) {
      // 登录状态
      next()
    } else {
      // 未登录状态,跳转到登录页面
      router.push({ path: '/login' })
    }
  }
  next()
})

// axios挂载到Vue原型对象中,实现数据共享,节约内存空间
Vue.prototype.$axios = axios

// 创建 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
