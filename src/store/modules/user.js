import { getToken, removeToken, setToken } from '@/utils/auth'
import { login, logout } from '@/api/user'

const getDefaultState = () => {
  return {
    // 0 表示未登录状态， 1 表示登录状态
    token: getToken('apifoxToken'), // 从浏览器 cookie 存储空间中获得
    username: getToken('usernameKey')
  }
}

const state = getDefaultState()

// 只做 编写对 state 中的属性进行赋值方法，有点类似Java 中 setter 方法
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  // 用户登录
  doLogin ({ commit }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      // 使用 用户名和密码 调用 api 中的登录接口
      login({
        username,
        password
      })
        .then(response => {
          const { data } = response
          // 存入 state 数据仓库
          commit('SET_TOKEN', data.data.apifoxToken)
          commit('SET_USERNAME', data.data.username)
          // 存入 cookie 存储空间
          setToken('apifoxToken', data.data.apifoxToken)
          setToken('usernameKey', data.data.username)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 用户退出
  doLogout ({
    commit,
    getters
  }) {
    return new Promise((resolve, reject) => {
      // 发送 api 请求
      logout(getters.token).then(() => {
        // 清空 cookie 存储空间
        removeToken('apifoxToken')
        removeToken('usernameKey')
        // 清空（重置） state
        commit('RESET_STATE')
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },
  // 重置cookie中 和state 中的 token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      // cookie
      removeToken()
      // state
      commit('RESET_STATE')
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
