<template>
  <div>
    <person-list :showPhone="showPhone"></person-list>
  </div>
</template>

<script>
  import personList from '../../components/personList'

  export default {
    name: "phone",
    components: {
      personList
    },
    data() {
      return {
        showPhone: false
      }
    },
    mounted() {
      this.showPhone = true;
    }
  }
</script>

<style scoped>

</style>
