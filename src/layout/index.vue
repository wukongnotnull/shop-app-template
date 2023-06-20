<template>
  <el-container>
    <!--    顶部导航-->
    <top-nav-comp/>
    <!--    头部部分-->
    <el-header>
      <NavBar/>
    </el-header>
    <!--    主体部分-->
    <el-main>
      <MainBar/>
    </el-main>
    <!--    底部部分-->
    <el-footer style="height: 160px;padding: 0">
      <FooterBar/>
    </el-footer>
  </el-container>
</template>

<script>
import TopNavComp from '@/components/TopNavComp'
import NavBar from '@/layout/NavBar'
import MainBar from '@/layout/MainBar'
import FooterBar from '@/layout/FooterBar'

export default {
  name: 'LayoutView',
  components: {
    TopNavComp,
    NavBar,
    MainBar,
    FooterBar
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
