<template>
  <el-menu
    router
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/">
      首页
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">电子产品</template>
      <el-menu-item index="/phone">手机</el-menu-item>
      <el-menu-item index="/computer">电脑</el-menu-item>
      <el-menu-item index="/ipad">平板</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">路由器</template>
        <el-menu-item index="/redmirouter">红米路由器</el-menu-item>
        <el-menu-item index="/qianrouter">千兆路由器</el-menu-item>
        <el-menu-item index="5grouter">5G 路由器</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="/about">关于公司</el-menu-item>
    <el-menu-item index=""><a href="https://wukongnotnull.com">外链</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-header, .el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 20px;
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
