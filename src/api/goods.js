import request from '@/utils/request'

// 获得首页主体部分数据
export function getIndexMain () {
  return request({
    url: '/goods/main',
    method: 'get'
  })
}
