<template>
  <div id="app" v-loading="loading" element-loading-background="rgba(255, 255, 255, .9)">
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {tokenLogin} from './api/user'

  export default {
    name: 'App',
    data() {
      return {}
    },
    computed: {
      ...mapState({
        loading: state => state.common.loading
      }),
    },
    created() {
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
      this.$store.commit('getUserInfo', userInfo);
      // if (userInfo && userInfo.token){
      //   tokenLogin(userInfo.token).then(res => {
      //     console.log(res.data.code)
      //     if (res.data.code == 401) {
      //       window.localStorage.clear();
      //     } else if (res.data.code == 200 && res.data.msg == "请求成功") {
      //       this.$store.commit('getUserInfo', userInfo);
      //       this.$store.commit('loginState', true);
      //     }else {}
      //   })
      // }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
</style>
