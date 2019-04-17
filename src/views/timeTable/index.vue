<template>
  <div id="timeTable">
    <Calendar
      :markDateMore="selectArr"
      v-on:choseDay="clickDay"></Calendar>
    <div class="timeTable-title">
      <span class="timeTable-title-date">{{currentDate}}</span>
      <span> {{ courselist.length > 0 ? '(共' + courselist.length + '节课)' : ''}}</span>
    </div>
    <div class="timeTable-list">
      <li>
        <div class="timeTable-list-li-top">
          <div class="timeTable-list-li-top-img">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="timeTable-list-li-top-context">
            <div class="timeTable-list-li-top-context-name">42班</div>
            <div class="timeTable-list-li-top-context-text">
              <div>学生</div>
              <div class="line-back">
                <div class="line-color">28人</div>
              </div>
              <div style="color: #B5B6B6; font-size: 11px">48人</div>
            </div>
          </div>
          <div class="timeTable-list-li-top-btn">
            <div v-if="true" class="timeTable-list-li-top-btn-over">已上课</div>
            <div v-if="false" class="timeTable-list-li-top-btn-noover">未上课</div>
          </div>
        </div>
        <div class="timeTable-list-li-bottom">
          <div class="timeTable-list-li-bottom-title">上课时间：</div>
          <div class="timeTable-list-li-bottom-context">09:00-18:55</div>
          <div class="timeTable-list-li-bottom-title">教室：</div>
          <div class="timeTable-list-li-bottom-context">7#121</div>
        </div>
      </li>
      <li>
        <div class="timeTable-list-li-top">
          <div class="timeTable-list-li-top-img">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="timeTable-list-li-top-context">
            <div class="timeTable-list-li-top-context-name">42班</div>
            <div class="timeTable-list-li-top-context-text">
              <div>学生</div>
              <div class="line-back">
                <div class="line-color">28人</div>
              </div>
              <div style="color: #B5B6B6; font-size: 11px">48人</div>
            </div>
          </div>
          <div class="timeTable-list-li-top-btn">
            <div v-if="false" class="timeTable-list-li-top-btn-over">已上课</div>
            <div v-if="true" class="timeTable-list-li-top-btn-noover">未上课</div>
          </div>
        </div>
        <div class="timeTable-list-li-bottom">
          <div class="timeTable-list-li-bottom-title">上课时间：</div>
          <div class="timeTable-list-li-bottom-context">09:00-18:55</div>
          <div class="timeTable-list-li-bottom-title">教室：</div>
          <div class="timeTable-list-li-bottom-context">7#121</div>
        </div>
      </li>
    </div>
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
        selectArr: [{date: '2019/4/1', className: "mark"}, {date: '2019/4/30', className: "mark"}],
        currentDate: new Date().toLocaleDateString().replace(/\//ig, '-'),
        courselist: ['1']
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
  .timeTable-title {
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-indent: 5%;
    background: #F8F8F8;
    .timeTable-title-date {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .timeTable-list {
    background: #ffffff;
    min-height: 300px;
    margin: 0px;
    padding: 20px 0px;
    li {
      width: 90%;
      height: 121px;
      margin: 0px auto;
      margin-bottom: 20px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
      .timeTable-list-li-top {
        height: 71px;
        display: flex;
        .timeTable-list-li-top-img {
          width: 71px;
          height: 14px;
          img {
            width: 44px;
            height: 44px;
            margin: 14px;
            border-radius: 50%;
          }
        }
        .timeTable-list-li-top-context {
          width: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .timeTable-list-li-top-context-name {
            font-size: 14px;
          }
          .timeTable-list-li-top-context-text {
            display: flex;
            justify-content: space-around;
            font-size: 12px;
            .line-back{
              width: 120px;
              height: 17px;
              background: rgba(194, 138, 240, 0.15);
              position: relative;
              border-radius: 9px;
              .line-color{
                text-align: center;
                color: #fff;
                position: absolute;
                top: 0px;
                left: 0px;
                width: 60px;
                height: 17px;
                border-radius: 9px;
                background: rgba(194, 138, 240, 1);
              }
            }
          }
        }
        .timeTable-list-li-top-btn{
          width: 56px;
          height: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 71px;
          margin-left: 15px;
          div{
            text-align: center;
            font-size: 12px;
            border-radius: 12px;
          }
          .timeTable-list-li-top-btn-over{
            border: 1px solid #DCDCDC;
            color: #DCDCDC;
          }
          .timeTable-list-li-top-btn-noover{
            border: 1px solid #40D2B4;
            color: #40D2B4;
          }
        }
      }
      .timeTable-list-li-bottom{
        padding: 15px;
        display: flex;
        .timeTable-list-li-bottom-title{
          font-size: 14px;
          color: #464948;
          line-height: 20px;
        }
        .timeTable-list-li-bottom-context{
          font-size: 14px;
          color: #F5A623;
          margin-right: 10px;
          line-height: 20px;
        }
      }
    }
  }
</style>
