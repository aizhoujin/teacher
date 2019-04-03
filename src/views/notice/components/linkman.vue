<template>
  <div>
    <!-- 人员列表 -->
    <person-list></person-list>
  </div>
</template>

<script>
  import personList from '../../../components/personList'

  export default {
    name: "linkman",
    components: {
      personList
    }
  }
</script>

<style scoped>

</style>
