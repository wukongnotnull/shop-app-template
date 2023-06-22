<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <ul style="list-style: none;font: 1px 'Microsoft YaHei';float: left;padding-inline-start:0px">
          <li style="display: inline;"><a href="/">悟空商城</a></li>
          <li style="display: inline;margin-left: 10px"><a href="#">XX-1</a></li>
          <li style="display: inline;margin-left: 10px"><a href="#">XX-2</a></li>
        </ul>
        <ul style="list-style: none;font-size: 1px;float: right;">
          <li style="display: inline;margin-right: 10px">
          <span v-if="token !== undefined">
            <el-tag type="danger" size="mini">{{ username }}</el-tag>&nbsp;&nbsp;
            <a href="#" @click="logout">退出</a>
          </span>
            <router-link to="/login" v-else>登录/注册</router-link>
          </li>
          <li style="display: inline;">
            <router-link to="/cart">购物车</router-link>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TopNavBar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      currentDate: new Date()
    }
  },
  computed: {
    ...mapGetters(['token', 'username'])
  },
  methods: {
    logout () {
      this.$store.dispatch('user/doLogout').then(() => {
        this.$message.info('成功退出')
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 0px;

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: rgba(153, 169, 191, 0.34);
}

.bg-purple {
  background: #7e7f7b;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
