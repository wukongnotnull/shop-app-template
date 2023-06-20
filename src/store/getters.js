//  getters  有点类似 filter 和 computed 选项
const getters = {
  // 来自 user 模块
  token: (state) => state.user.token,
  username: (state) => state.user.username,
  // 来自 goods 模块
  goodsInfo: (state) => state.goods.goodsInfo
}
export default getters
