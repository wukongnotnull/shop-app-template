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
              <el-carousel-item v-for="item in imgList" :key="item" style="background-color: white">
                <img :src="item" alt="" width="100%" height="100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content" style="text-align: left">
          <h1>Redmi Note 12T Pro</h1>
          <div>【512GB版本米金兑券立省100元】天玑 8200-Ultra 旗舰芯｜ LCD 护眼屏｜ 12GB + 512GB 超大存储｜ 5080mAh 超大电量 + 67W 旗舰闪充｜ 6400万像素快拍相机｜
            潮流小立边设计｜ 小金刚品质 坚固耐用
          </div>
          <div style="color: red">小米自营 <br>1799 元1899 元</div>
          <div style="margin-top: 10px">选择版本</div>
          <div>
            <el-radio-group v-model="radio1" size="medium">
              <el-radio-button label="12GB+512GB"></el-radio-button>
              <el-radio-button label="80GB+128GB" style="margin-left: 10px"></el-radio-button>
              <el-radio-button label="80GB+256GB"></el-radio-button>
              <el-radio-button label="12GB+256GB" style="margin-left: 10px"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 10px">选择颜色</div>
          <div>
            <el-radio-group v-model="radio2" size="medium">
              <el-radio-button label="冰雾白"></el-radio-button>
              <el-radio-button label="碳纤黑" style="margin-left: 10px"></el-radio-button>
              <br>
              <el-radio-button label="晴海蓝"></el-radio-button>
            </el-radio-group>
          </div>
          数量：
          <el-input-number style="margin-top: 10px" v-model="num" size="small" @change="handleChange" :min="1" :max="10"
                           label="描述文字"></el-input-number>
          <div>
            <el-button-group style="margin-top: 10px">
              <el-button type="danger">立即购买</el-button>
              <el-button type="warning">加入购物车</el-button>
            </el-button-group>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <!--    第二行布局  宝贝详情 和宝贝评价-->
    <el-row>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="宝贝详情" name="first">
              <div style="height: 400px">宝贝详情。。。。。</div>
            </el-tab-pane>
            <el-tab-pane label="宝贝评价" name="second">
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
              <div>宝贝评价。。。。</div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import TopNavBar from '@/components/TopNavComp'

export default {
  name: 'GoodsDetailView',
  components: {
    TopNavBar
  },
  data () {
    return {
      input3: '',
      input: '',
      radio2: '',
      num: 1,
      activeName: 'second',
      radio1: '12GB+512GB',
      imgList: [
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.69956639.png',
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.69331585.png',
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.74731516.png',
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1685341970.71616051.png'
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
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
