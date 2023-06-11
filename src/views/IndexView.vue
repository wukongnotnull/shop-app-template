<template>
  <div>
    <!--    顶部导航-->
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">logo</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <router-link to="/login">
            <el-button type="primary" size="mini">登录</el-button>
          </router-link>
          <router-link to="/register">
            <el-button type="success" size="mini">注册</el-button>
          </router-link>
          <span v-if="islogin===1">
            <el-button type="danger" @click="logout">退出</el-button>
            <el-tag>登录成功</el-tag>
          </span>
          <span v-else>未登录，请登录</span>
        </div>
      </el-col>
    </el-row>
    <el-container>

      <!--          网页头部 -->
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">手机</template>
            <el-menu-item index="2-1">
              <router-link to="/intro">苹果手机</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/organization">华为手机</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/newscenter">小米手机</router-link>
            </el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <router-link to="/goodscenter">笔记本</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/stustyle">平板</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/about">公司介绍</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <!--        网页主体-->
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <!--        网页尾部-->
        <!--        <img src="./assets/footer.png" alt="" width="100%">-->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'MainView',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    ...mapState(['islogin'])
  },
  methods: {
    ...mapMutations(['doLogout']),
    logout () {
      console.log('进入logout')
      this.doLogout()
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

:last-child {
  margin-bottom: 0;
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
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

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
  line-height: 16px;
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
