import request from '@/utils/request'

// 获得首页主体部分数据
export function getIndexMain () {
  return request({
    url: '/goods/main',
    method: 'get'
  })
}

// 根据 id 获得指定商品详情
export function getGoodsById (id) {
  return request({
    url: '/goods/id/' + id,
    method: 'get'
  })
}
