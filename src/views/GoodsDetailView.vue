<template>
  <el-container>
    <el-header>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple">
            <router-link to="/">logo</router-link>
          </div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple">搜索框</div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light">按钮</div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <!--        -->
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="3" :xl="1">
          <div class="grid-content bg-purple">
            <div class="demo-image">
              <div class="block">
                <span class="demonstration"></span>
                <el-image
                  style="width: 300px; height: 300px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="fit"></el-image>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="9" :xl="11">
          <div class="grid-content bg-purple-light">
            <h1>商品名称</h1>
            <!--              价格 描述介绍 选择数量 购买按钮 加入购物车按钮-->
            <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
              <el-form-item label="商品价格:">
                <span>300$</span>
              </el-form-item>
              <el-form-item label="商品描述:">
                <span>该商品怎么好</span>
              </el-form-item>
              <el-form-item label="商品数量:">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"
                                 label="描述文字"></el-input-number>
              </el-form-item>
              <el-row>
                <router-link to="/orderconfirm">
                  <el-button>立即购买</el-button>
                </router-link>

                <!--        加入购物车 消息提示效果-->
                <template>
                  <el-button :plain="true" @click="open">加入购物车</el-button>
                </template>

              </el-row>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <br>
      <!--        -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="商品详情" name="first">商品详情</el-tab-pane>
        <el-tab-pane label="商品评价" name="second">商品评价</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'GoodsDetailView',
  data () {
    return {
      activeName: 'first',
      num: 1,
      goods_id: null,
      goods: null,
      goods_buy: {
        price: null,
        desc: null,
        num: null
      }
    }
  },
  methods: {
    // 加入购物车按钮 消息提示效果
    open () {
      if (this.$store.state.islogin === 1) {
        this.$message('成功加入购物车')
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    // 从后端： 根据 goods_id 查询指定商品详情
    getGoodsById () {
      this.$axios({
        method: 'get',
        // 路径变量传参
        url: `/goods/${this.goods_id}`,
        params: {}
      }).then(res => {
        console.log(res.data.data)
        this.goods = res.data.data
      })
    }
  },
  created () {
    this.goods_id = this.$route.params.goods_id
    this.getGoodsById()
  }
}
</script>

<style scoped>
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
  border-radius: 4px;
  min-height: 36px;
}

</style>
