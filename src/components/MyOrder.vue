<template>
  <div>
    订单组件 {{ islogin }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'
import router from '@/router'

export default {
  name: 'MyOrder',
  computed: {
    ...mapState(['islogin'])
  },
  beforeRouteEnter: (to, from, next) => {
    if (store.state.islogin === 1) {
      // 登录状态
      next()
    } else {
      // 未登录状态
      // 或者  next({ path: '/login' })
      router.push({ path: '/login' })
    }
  },
  beforeRouteLeave: (to, from, next) => {
    if (confirm('确定离开该页面吗？')) {
      next()
    }
  }
}
</script>

<style scoped>

</style>
