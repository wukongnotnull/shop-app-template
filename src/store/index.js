import Vuex from 'vuex'
import Vue from 'vue'
import state from '@/store/state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  getters: {
    newNum (state) {
      return state.num + '美元'
    }
  },
  mutations: {
    getAdd (state) {
      state.num++
    },
    doLogin (state) {
      state.islogin = 1
      localStorage.setItem('islogin', 1)
    },
    doLogout (state) {
      state.islogin = 0
      localStorage.removeItem('islogin')
    }
  },
  actions: {
    getAddAction (context) {
      setTimeout(() => {
        context.commit('getAdd')
      }, 1000)
    }
  }
})

export default store
