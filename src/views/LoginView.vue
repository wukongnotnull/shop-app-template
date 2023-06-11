<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="8">
      <div class="grid-content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'LoginView',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({ doLoginM: 'doLogin' }),
    doLogin () {
      if (this.form.username === 'admin' && this.form.password === 'admin') {
        // 用户名和密码正确，修改 state 中的 islogin
        this.doLoginM()
        this.$router.push({ path: '/' })
      } else {
        console.log('用户名或密码错误')
      }
    }
  }
}
</script>

<style scoped>

</style>
