<template>
  <div id="timeTable">
    <Calendar
      :markDateMore="selectArr"
      v-on:changeMonth="changeMonth"
      v-on:choseDay="clickDay"></Calendar>
    <div class="timeTable-title">
      <span class="timeTable-title-date">{{currentDate | date}}</span>
      <span> {{ cueentData.length > 0 ? '(共' + cueentData.length + '节课)' : ''}}</span>
    </div>
    <div class="timeTable-list">
      <li v-for="(item,index) in cueentData" v-if="cueentData.length > 0">
        <div class="timeTable-list-li-top">
          <div class="timeTable-list-li-top-img">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="timeTable-list-li-top-context">
            <div class="timeTable-list-li-top-context-name">{{item.classEntity.name}}</div>
            <div class="timeTable-list-li-top-context-text">
              <div>学生</div>
              <div class="line-back">
                <div class="line-color" :style="{'width': (item.stuSign/item.stuNum*100) + '%'}">{{item.stuSign}}人</div>
              </div>
              <div style="color: #B5B6B6; font-size: 11px">{{item.stuNum}}人</div>
            </div>
          </div>
          <div class="timeTable-list-li-top-btn">
            <div v-if="item.status == 1" class="timeTable-list-li-top-btn-over">已上课</div>
            <div v-if="item.status != 1" class="timeTable-list-li-top-btn-noover">未上课</div>
          </div>
        </div>
        <div class="timeTable-list-li-bottom">
          <div class="timeTable-list-li-bottom-title">上课时间：</div>
          <div class="timeTable-list-li-bottom-context">{{item.beginTime | time}} - {{item.beginTime | time}}</div>
          <div class="timeTable-list-li-bottom-title">教室：</div>
          <div class="timeTable-list-li-bottom-context">{{item.classroomEntity.name}}</div>
        </div>
      </li>
      <div class="time-empty" v-if="cueentData.length == 0">今天没有课程哦!</div>
    </div>
  </div>
</template>

<script>
  import Calendar from 'vue-calendar-component';
  import {listByTeacher} from '../../api/timeTable'

  export default {
    name: "index",
    components: {
      Calendar
    },
    data() {
      return {
        selectArr: [],
        cueentData: [],
        monthData: [],
        currentDate: new Date().toLocaleDateString(),
        courselist: ['1']
      }
    },
    methods: {
      // 切换天
      clickDay(data) {
        this.currentDate = data;
        this.getCueentData();

      },
      // 切换月份
      changeMonth(data) {
        this.getTimeTable(data);
      },

      // 获取数据
      getTimeTable(data) {
        let markChilds = document.querySelectorAll('.markChild');
        for (let i = 0; i < markChilds.length; i++) {
          markChilds[i].innerHTML = '';
        }
        let date = data ? new Date(data) : new Date(this.currentDate);
        let begin = date.getFullYear() + "-" + (date.getMonth() + 1) + '-01';
        let end = date.getFullYear() + "-" + (date.getMonth() + 2) + '-01';
        let obj = {
          begin: begin,
          end: end
        };
        listByTeacher(obj).then(res => {
          let data = res.data.data;
          this.monthData = res.data.data;
          this.getCueentData();
          let arr = [];
          this.selectArr = [];
          if (res.data.code == 200 && data.length > 0) {
            data.forEach((item, index) => {
              this.selectArr.push({date: item.beginTime, className: 'mark'});
            });
            this.changeMark();
          }
        })
      },

      // 更新视图上的红点
      changeMark() {
        setTimeout(() => {
          let marks = document.querySelectorAll('.mark');
          for (let i = 0; i < marks.length; i++) {
            let odiv = document.createElement('div');
            odiv.className = 'markChild';
            marks[i].appendChild(odiv);
          }
        }, 1000);
      },

      // 获取当前选择日期的详细数据
      getCueentData() {
        this.cueentData = [];
        let startData = new Date(this.currentDate).getTime();
        let endData = new Date(this.currentDate).getTime() + 24 * 60 * 60 * 1000;
        this.monthData.forEach((item, index) => {
          let itemDate = new Date(item.beginTime).getTime();
          if (startData <= itemDate && itemDate < endData) {
            this.cueentData.push(item);
          }
        })
      }
    },
    mounted() {
      this.getTimeTable();
    },

    // 过滤器
    filters: {
      date: (value) => {
        return value.replace(/\//ig, '-');
      },
      time: (value) => {
        let data = new Date(value);
        let hh = data.getHours() >= 10 ? data.getHours() : '0' + data.getHours();
        let mm = data.getMinutes() >= 10 ? data.getMinutes() : '0' + data.getMinutes();
        return hh + ":" + mm
      }
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
    min-height: 500px;
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
            .line-back {
              width: 120px;
              height: 17px;
              background: rgba(194, 138, 240, 0.15);
              position: relative;
              border-radius: 9px;
              .line-color {
                text-align: center;
                color: #fff;
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 17px;
                border-radius: 9px;
                background: rgba(194, 138, 240, 1);
              }
            }
          }
        }
        .timeTable-list-li-top-btn {
          width: 56px;
          height: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 71px;
          margin-left: 15px;
          div {
            text-align: center;
            font-size: 12px;
            border-radius: 12px;
          }
          .timeTable-list-li-top-btn-over {
            border: 1px solid #DCDCDC;
            color: #DCDCDC;
          }
          .timeTable-list-li-top-btn-noover {
            border: 1px solid #40D2B4;
            color: #40D2B4;
          }
        }
      }
      .timeTable-list-li-bottom {
        padding: 15px;
        display: flex;
        .timeTable-list-li-bottom-title {
          font-size: 14px;
          color: #464948;
          line-height: 20px;
        }
        .timeTable-list-li-bottom-context {
          font-size: 14px;
          color: #F5A623;
          margin-right: 10px;
          line-height: 20px;
        }
      }
    }
  }

  .time-empty {
    width: 100%;
    text-align: center;
    margin: 30px auto;
    font-size: 14px;
    color: #717373;
  }
</style>
