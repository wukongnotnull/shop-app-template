import Cookies from 'js-cookie'
// 获得浏览器的 cookie 存储空间中的数据
export function getToken (tokenKey) {
  return Cookies.get(tokenKey)
}
// 设置浏览器的 cookie 存储空间中的数据
export function setToken (tokenKey, token) {
  return Cookies.set(tokenKey, token)
}
// 删除浏览器的 cookie 存储空间中的数据
export function removeToken (tokenKey) {
  return Cookies.remove(tokenKey)
}
