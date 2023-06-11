<template>
  <el-row>
    <el-col :span="4" v-for="(o, index) in goodsList" :key="index" :offset="index > 0 ? 0 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="o.thumbnailUrl"
             class="image">
        <div style="padding: 5px;">
          <span>{{ o.goods_name }}</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">
              <router-link :to="{name: 'goodsdetail',params: {goods_id: o.goods_id}}">进入</router-link>
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'PhoneColumn',
  data () {
    return {
      goodsList: null,
      currentDate: new Date()
    }
  },
  methods: {
    // 获得商品列表
    getProductList () {
      this.$axios({
        method: 'get',
        url: '/goods'
      }).then(res => {
        console.log(res.data.data.goods)
        this.goodsList = res.data.data.goods
      })
    }
  },
  created () {
    this.getProductList()
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
