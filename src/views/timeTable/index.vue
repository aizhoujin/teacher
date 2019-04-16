<template>
  <div id="timeTable">
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
        selectArr: [{date: '2019/4/1', className: "mark"}, {date: '2019/4/30', className: "mark"}]
      }
    },
    methods: {
      clickDay(data) {
        console.log(data);
      }
    },
    mounted() {
      setTimeout(() => {
        let marks = document.querySelectorAll('.mark');
        for (let i = 0; i < marks.length; i++) {
          marks[i].innerHTML = marks[i].innerHTML + '<div class="markChild"></div>'
        }
        document.querySelectorAll('.mark').innerHTML = document.querySelectorAll('.mark').innerHTML + '<span style="color: red">1</span>';
      }, 1000)
    }
  }
</script>

<style scoped lang="scss">

</style>
