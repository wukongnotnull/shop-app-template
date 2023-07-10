import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'
//  对 axios 进行二次封装

// 创建一个 axios 实例 ，命名为 service
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 请求发送前，做些事情
    if (store.getters.token) {
      //  请求携带 token 进行身份验证
      // ['X-Token']  是一个自定义的 请求头参数
      config.headers.apifoxToken = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Message({
        message: '请求失败',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error('请求失败'))
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
