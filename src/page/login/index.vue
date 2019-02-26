<template>
  <div>
    <mt-button type="primary" size="large" @click.native="login">登录</mt-button>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return{

      }
    },
    methods: {
      login() {
        this.$router.push({path: '/index'})
      }
    }
  }
</script>

<style scoped>

</style>
