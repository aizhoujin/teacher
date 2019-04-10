<template>
  <div class="timeTable">
    <Calendar
      :markDateMore="selectArr"
      v-on:choseDay="clickDay"></Calendar>
  </div>
</template>

<script>
  import Calendar from 'vue-calendar-component'

  export default {
    name: "index",
    components: {
      Calendar
    },
    data() {
      return {
        selectArr: [{date:'2019/4/1',className:"mark1"}]
      }
    },
    methods: {
      clickDay(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
