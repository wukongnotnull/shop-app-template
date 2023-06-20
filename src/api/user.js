import request from '@/utils/request'
// 登录
export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}
// 退出
export function logout (token) {
  return request({
    url: '/logout',
    method: 'get',
    data: token
  })
}
