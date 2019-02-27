<template>
  <div>
    <div class="login-logo">
      <img src="../../assets/Logo.png" alt="logo">
    </div>
    <div class="login-title">科技改变教育</div>
    <div class="login-main">
      <input type="text" placeholder="用户名">
      <br/>
      <br/>
      <input type="password" placeholder="密码">
      <mt-button type="primary" style="margin-top: 50px;background: #40D2B4" size="large" @click.native="login">登录
      </mt-button>
    </div>
    <div class="login-footer">
      <span>忘记密码{{userInfo}}</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"

  export default {
    name: "index",
    data() {
      return {}
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      login() {
        this.$router.push({path: '/index'})
      }
    }
  }
</script>

<style scoped>
  .login-logo {
    margin: 30px auto;
  }

  .login-logo img {
    width: 60px;
  }

  .login-title {
    margin: 20px auto;
    font-size: 16px;
  }

  .login-main {
    width: 100%;
  }

  .login-main input {
    width: 80%;
    height: 24px;
    margin: 0 auto;
    border-radius: 4px;
    background: #fff;
    border: none;
    padding: 6px;
  }

  .login-footer {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
  }
</style>
