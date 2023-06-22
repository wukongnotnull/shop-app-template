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
      //  每次请求都要携带 token 进行身份验证
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

// response interceptor
/**
 * If you want to get http information such as headers or status
 * Please return  response => response
 */

/**
 * Determine the request status by custom code
 * Here is just an example
 * You can also judge the status by HTTP Status Code
 */
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
