<template>
  <el-row :gutter="20" style="margin-top: 40px;">
    <el-col :span="10" :offset="7">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h1>悟空商城</h1>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch="stretch">
          <!--        登录标签面板-->
          <el-tab-pane label="登录" name="first">
            <div class="grid-content">
              <el-form ref="form" :model="login" label-width="80px">
                <el-form-item label="用户名">
                  <el-input v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="login.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onLogin">登录</el-button>
                  <el-button @click="goBack">返回</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <!--        注册标签面板-->
          <el-tab-pane label="注册" name="second">
            <div class="grid-content">
              <el-form ref="form" :model="register" label-width="80px">
                <el-form-item label="用户名">
                  <el-input v-model="register.username"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="register.email"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="register.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="再次密码">
                  <el-input v-model="register.repassword" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onRegister">注册</el-button>
                  <el-button @click="goBack">返回</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { register } from '@/api/user'

export default {
  name: 'LoginView',
  data () {
    return {
      activeName: 'first',
      login: {
        username: '',
        password: ''
      },
      register: {
        username: '',
        email: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    goBack () {
      this.$router.push({ path: '/' })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    // 进行登录判断
    onLogin () {
      // 该用户存在，登录成功 ,跳转到首页
      this.$store.dispatch('user/doLogin', this.login)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(error => {
        // 该用户不存在，登录失败，挑出一个提示框告知，登录失败
          this.$message('用户名或者密码错误，请重新登录')
          console.log(error)
        })
    },
    // 进行注册操作
    onRegister () {
      const {
        username,
        email,
        password
      } = this.register
      // 注册就是添加用户，不涉及到state ，直接调用前端api
      register({
        username,
        email,
        password
      })
        .then(response => {
          console.log(response.data)
          if (response.data.status === 200) {
            // this.$router.push({ name: 'login' })
            this.$message.success('注册成功，请登录')
          } else {
            this.$message.error('注册失败')
          }
        })
        .catch(error => {
          console.log(error)
        })
      console.log('注册中')
    }
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

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
