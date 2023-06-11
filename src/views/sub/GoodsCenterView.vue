<template>
  <div>
    <el-row>
      <el-button type="primary">
        <router-link to="/goodscenter/mydetail">商品详情</router-link>
      </el-button>
      <el-button type="success">
        <router-link to="/goodscenter/mycart">购物车</router-link>
      </el-button>
      <el-button type="success">
        <router-link to="/goodscenter/myorder">订单信息</router-link>
      </el-button>
    </el-row>
    <el-row>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'GoodsCenterView',
  data () {
    return {}
  },
  methods: {
    getAllPosts () {
      this.$axios.get('/posts')
        .then(res => console.log(res))
    },
    getPostById () {
      this.$axios({
        method: 'get',
        url: '/posts',
        params: {
          id: 1
        }
      }).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.getAllPosts()
    this.getPostById()
  }
}
</script>

<style scoped>

</style>
