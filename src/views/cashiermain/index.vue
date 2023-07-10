<template>
  <el-container>
    <el-header>收银台</el-header>
    <el-main>
      <div>商品信息：xxxx</div>
      <div>订单金额：</div>
      <div>付款方式：银行卡或者支付宝</div>
      <div class="demo-input-suffix">
        支付密码：
        <el-input
          type="password"
          v-model="input2" size="small">
        </el-input>
      </div>
      <div><el-button type="success">确认</el-button></div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'CashierMainView',
  data () {
    return {
      input2: ''
    }
  },
  methods: {},
  created () {
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
