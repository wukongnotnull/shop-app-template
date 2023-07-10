<template>
  <div>
    <!--    顶部导航-->
    <top-nav-bar/>
    <!--    商品详情部分-->
    <el-row :gutter="20">
      <el-col :span="3" :offset="3">
        <div class="grid-content">
          <img src="../../assets/logo.png" alt="" width="100" height="100">
        </div>
      </el-col>
      <el-col :span="12" :offset="3">
        <div class="grid-content">
          <el-input placeholder="请输入商品" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div style="margin-top: 10px">
            <el-button round>搜索商城</el-button>
            <el-button type="primary" round>搜索本店</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--    第一行布局 左边是轮播图 右边是商品选项-->
    <el-row>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content">
          <div class="block">
            <el-carousel>
              <el-carousel-item v-for="(item,index) in goods_detail.detail_carousal_imgs" :key="index"
                                style="background-color: white">
                <img :src="item.imgs_url" alt="" width="95%" height="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content" style="text-align: left">
          <h1>{{ goods_detail.goods_name }}</h1>
          <div>{{ goods_detail.goods_abstract }}
          </div>
          <div style="color: red">{{ goods_detail.goods_store_name }} <br>{{ goods_detail.real_price }} 元
            {{ goods_detail.original_price }} 元
          </div>
          <div style="margin-top: 10px">选择规格</div>
          <div>
            <el-radio-group v-model="radio1" size="medium">
              <!--  规格单选按钮  -->
              <el-radio-button v-for="(item ,index) in goods_detail.dimensions " :key="index"
                               :label="item.dimension_attr"></el-radio-button>
            </el-radio-group>
          </div>
          数量：
          <el-input-number style="margin-top: 10px" v-model="num" size="small" @change="handleChange" :min="1" :max="10"
                           label="描述文字"></el-input-number>
          <div>
            <el-button-group style="margin-top: 10px">
              <router-link to="/buynow">
                <el-button type="danger">立即购买</el-button>
              </router-link>
              <router-link to="/cart">
                <el-button type="warning">加入购物车</el-button>
              </router-link>
            </el-button-group>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <!--    第二行布局  宝贝详情 和宝贝评价-->
    <desc-and-comment :send-comments="goods_detail.goods_comments" :send-desc="goods_detail.goods_full_desc"/>
  </div>

</template>

<script>
import TopNavBar from '@/components/TopNavComp'
import { getGoodsById } from '@/api/goods'
import DescAndComment from '@/views/detail/DescAndComment'

export default {
  name: 'GoodsDetailView',
  components: {
    TopNavBar,
    DescAndComment
  },
  data () {
    return {
      input3: '',
      input: '',
      radio2: '',
      num: 1,
      activeName: 'first',
      radio1: '12GB+512GB+冰雾白',
      goods_detail: null
      // comments 用于传入子组件
      // comments: null,
      // full_desc: null
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  created () {
    // 根据 id 获得商品详情
    const id = this.$route.params.goodsId
    console.log('id 为', id)
    getGoodsById(id)
      .then(response => {
        console.log('根据 id 获得商品详情')
        console.log(response.data)
        this.goods_detail = response.data.result
        // this.comments = response.data.result.goods_comments
        // this.full_desc = response.data.result.goods_full_desc
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.el-select .el-input {
  width: 30%;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-row {
  margin-bottom: 6px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 1px;
  min-height: 1px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
