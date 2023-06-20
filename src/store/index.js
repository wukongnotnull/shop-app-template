import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import user from '@/store/modules/user'
import goods from '@/store/modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    user,
    goods
  }
})
