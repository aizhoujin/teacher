<template>
  <div>
    <div class="checkroll-title">
      <div class="checkroll-title-top">
        今天您共有{{currentData.length}}节课
      </div>
      <div class="checkroll-title-bottom">
        {{toDay}} (周{{toWeek}})
      </div>
    </div>
    <div class="checkroll-class">
      <li v-if="currentData.length > 0" class="checkroll-class-li" v-for="(item,index) in currentData" :key="index">
        <div class="checkroll-class-li-top">
          <div class="checkroll-class-li-left">
            <div class="checkroll-class-li-top-img">
              <img src="../../assets/2.jpg" alt="">
            </div>
            <div class="checkroll-class-li-top-context">
              <div class="checkroll-class-class">
                <span class="checkroll-class-class-name">{{item.classEntity.name}}</span>
                <span class="checkroll-class-class-action">已上课</span>
              </div>
              <div class="checkroll-class-class-teacher">
                {{item.teacherEntity.infoEntity.realName}}老师
              </div>
            </div>
          </div>
          <div class="checkroll-class-li-right">
            <div class="checkroll-class-li-right-number">20</div>
            <div class="checkroll-class-li-right-count">/30</div>
          </div>

        </div>
        <div class="checkroll-class-li-bottom">
          <div><i class="el-icon-time"></i>{{item.beginTime | time}}</div>
          <div><i class="el-icon-location"></i>综合大楼一教室</div>
        </div>
      </li>
      <div class="time-empty" v-if="currentData.length == 0">今天没有课程哦!</div>
    </div>
    <!--发布通知-->
    <div class="occupied"></div>
    <div class="newNotive" :style="{'top': clientHeight + 'px'}">
      <router-link :to="{path: '/temporary'}">
        <el-button type="primary" size="small" class="newNotive-btn"
                   :style="{'width': clientWidth+ 'px'}">临时排课
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {listByTeacher} from '../../api/timeTable'

  export default {
    name: "index",
    data() {
      return {
        toDay: new Date().toLocaleDateString(),
        toWeek: "日一二三四五六".charAt(new Date().getDay()),
        clientHeight: 603,
        clientWidth: 342,
        currentData: [],
      }
    },
    methods: {
      // 获取今天的课表
      getCurrent() {
        let date = new Date();
        let begin = this.$moment(date).format('YYYY-MM-DD');
        let end = this.$moment(date).add(1, "days").format("YYYY-MM-DD");
        let obj = {
          begin: begin,
          end: end
        };
        this.currentData = [];
        listByTeacher(obj).then(res => {
          if (res.data.code == 200 && res.data.data.length > 0) {
            this.currentData = res.data.data;
          }
        })
      }
    },
    created() {
      this.clientHeight = document.documentElement.clientHeight - 64;
      this.clientWidth = document.documentElement.clientWidth - 32;
      this.getCurrent();
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
  .checkroll-title {
    background: linear-gradient(to right, #A496F0 0%, #D2AEEF 100%);
    height: 81px;
    text-align: center;
    color: #fff;
    .checkroll-title-top {
      height: 28px;
      line-height: 28px;
      padding-top: 15px;
      margin-bottom: 3px;
      font-size: 20px;
    }
    .checkroll-title-bottom {
      height: 20px;
      font-size: 14px;
    }
  }

  .checkroll-class {
    width: 100%;
    .checkroll-class-li {
      width: 90%;
      margin: 20px auto;
      background: #ffffff;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
      .checkroll-class-li-top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f0f0f0;
        .checkroll-class-li-left {
          display: flex;
          .checkroll-class-li-top-img {
            img {
              width: 44px;
              height: 44px;
              margin: 15px;
              border-radius: 50%;
            }
          }
          .checkroll-class-li-top-context {
            .checkroll-class-class {
              margin-top: 15px;
              .checkroll-class-class-name {
                width: 75px;
                height: 25px;
                color: #1F2423;
                font-size: 18px;
                font-weight: bold;
              }
              .checkroll-class-class-action {
                width: 36px;
                color: #9A9A9A;
                border-radius: 2px;
                font-size: 12px;
                padding: 5px 2px;
                background-color: #eeeeee;
              }
              .active {
                color: #E09721;
                background-color: #FFF6E4;
              }
            }
            .checkroll-class-class-teacher {
              color: #717373;
              font-size: 14px;
            }
          }

        }
        .checkroll-class-li-right {
          display: flex;
          margin: 15px;
          .checkroll-class-li-right-number {
            color: #FF6868;
            font-size: 18px;
          }
          .checkroll-class-li-right-count {
            color: #717373;
            font-size: 14px;
            margin-top: 5px;
          }
        }
      }
      .checkroll-class-li-bottom {
        display: flex;
        height: 50px;
        line-height: 50px;
        justify-content: space-around;
        font-size: 14px;
        color: #464948;
        i {
          color: #40D2B4;
          margin: 0px 5px;
          font-size: 16px;
        }
      }
    }
  }

  .newNotive {
    height: 64px;
    font-size: 16px;

    /*padding: 10px 16px;*/
    position: fixed;
    left: 0;
    width: 100%;
    & .newNotive-btn {
      height: 44px;
      font-size: 16px;
      margin: 10px 16px;
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
