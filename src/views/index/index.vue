<template>
  <div>
    <mt-switch v-model="value"></mt-switch>
    <mt-switch v-model="value">开关</mt-switch>
    <mt-button type="primary" size="large">这里是主页</mt-button>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return{
        value: false
      }
    }
  }
</script>

<style scoped>

</style>
