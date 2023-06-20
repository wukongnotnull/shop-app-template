# shop-fe-vue2


## 项目介绍
该项目是基于 Vue2.x  + ElementUI2.x 的电商前端项目，该项目包含游客首页（前台）和管理员首页（后台）。
该项目实现了一般电商的基础功能，方便大家以该项目作为模板，进行二次开发。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# api 设计
```javascript
// 电商网站模拟数据
module.exports =
  {
    // 电商首页
    shop_home: {
      // 首页轮播图
      goods_carousal: [
        {
          // 轮播图编号
          id: '1',
          // 轮播图来源
          img_url: 'http://',
          // 轮播图超链接
          href: 'http://'
        }
      ],
      // 首页商品专栏集合
      goods_columns: [
        {
          // 专栏编号
          col_id: 1,
          // 专栏名称
          col_name: '',
          // 专栏中包含的卡片
          col_cards: [
            // 某某商品
            {
              // 卡片编号
              card_id: 1,
              // 商品 id
              goods_id: 1,
              //  某商品缩略图
              goods_thumb: '',
              //  商品名称
              goods_name: '',
              // 商品摘要
              goods_abstract: '',
              // 商品真实价
              real_price: 100,
              // 商品原价
              original_price: 200
            }
          ]
        }
      ]
    },
    //  商品详情页
    goods_detail: {
      // 商品 id
      goods_id: 1,
      //  商品详情轮播图
      goods_detail_slides: [
        {
          // 商品详情轮播图编号
          id: 1,
          // 轮播图来源
          detail_img_url: 'http://',
          // 轮播图超链接
          href: 'http://'
        }
      ],
      //  商品名称
      goods_name: '',
      // 商品摘要
      goods_abstract: '',
      // 商品真实价
      real_price: 100,
      // 商品原价
      original_price: 200,
      // 卖家
      seller: {
        seller_id: 1,
        seller_name: '小米自营'
      },
      // 商品属性
      goods_attrs: {
        colors: [
          '',
          '',
          ''
        ],
        versions: [
          '',
          '',
          '',
          ''
        ]
      },
      // 商品具体描述
      goods_desc: {},
      // 商品评价
      goods_praise: [
        {
          praise_id: 1,
          praise_avatar: '',
          praise_username: '',
          praise_content: '',
          praise_date: ''
        }
      ]
    }
  }

```
