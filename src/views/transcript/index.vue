<template>
  <div class="transcript">
    <mt-datetime-picker
      ref="picker1"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerValue1"
      @confirm="handleConfirm(1)">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerValue2"
      @confirm="handleConfirm(2)">
    </mt-datetime-picker>
    <div class="date">
      <div class="date-select">
        <div class="date-from" @click="openPicker(1)">{{dateFrom}}</div>
        <div class="date-Line">--</div>
        <div class="date-to" @click="openPicker(2)">{{dateTo}}</div>
      </div>
      <div class="date-fit" @click="dateFit">
        <span>筛选</span>
        <img src="../../assets/icon_学校公告/筛选.png">
      </div>
    </div>

    <div class="subject-list">
      <div class="subject-li">
        <div class="subject-radio">
          <el-radio v-model="radio"></el-radio>
        </div>
        <div class="subject-content">
          <div class="subject-name">期中考试（语文）</div>
          <div class="subject-sub">科目： 语文</div>
          <div class="subject-dete">
            <i class="el-icon-time" style="color: #40D2B4"></i>
            考试时间：2019-04-06
          </div>
        </div>
      </div>
      <div class="subject-li">
        <div class="subject-radio">
          <el-radio v-model="radio"></el-radio>
        </div>
        <div class="subject-content">
          <div class="subject-name">期中考试（语文）</div>
          <div class="subject-sub">科目： 语文</div>
          <div class="subject-dete">
            <i class="el-icon-time" style="color: #40D2B4"></i>
            考试时间：2019-04-06
          </div>
        </div>
      </div>
      <div class="subject-li">
        <div class="subject-radio">
          <el-radio v-model="radio"></el-radio>
        </div>
        <div class="subject-content">
          <div class="subject-name">期中考试（语文）</div>
          <div class="subject-sub">科目： 语文</div>
          <div class="subject-dete">
            <i class="el-icon-time" style="color: #40D2B4"></i>
            考试时间：2019-04-06
          </div>
        </div>
      </div>
      <div class="subject-li">
        <div class="subject-radio">
          <el-radio v-model="radio"></el-radio>
        </div>
        <div class="subject-content">
          <div class="subject-name">期中考试（语文）</div>
          <div class="subject-sub">科目： 语文</div>
          <div class="subject-dete">
            <i class="el-icon-time" style="color: #40D2B4"></i>
            考试时间：2019-04-06
          </div>
        </div>
      </div>
    </div>
    <div style="height: 64px;"></div>
    <div class="person-footer">
      <el-button type="primary" @click="$router.push({path: '/selectClass'})">录入成绩</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        dateFrom: "开始时间",
        dateTo: "结束时间",
        pickerValue1: '',
        pickerValue2: '',
        radio: ''
      }
    },
    methods: {
      dateFit(){

      },
      openPicker(type) {
        if (type == 1) {
          this.pickerValue1 = new Date();
          this.$refs.picker1.open();
        } else if (type == 2) {
          this.pickerValue2 = new Date();
          this.$refs.picker2.open();
        } else {
        }
      },
      handleConfirm(type) {
        if (type == 1) {
          this.pickerValue1 = new Date(this.pickerValue1).toLocaleDateString();
          this.dateFrom = this.pickerValue1;
        } else if (type == 2) {
          this.pickerValue2 = new Date(this.pickerValue2).toLocaleDateString();
          this.dateTo = this.pickerValue2;
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .transcript {
    width: calc(100% - 32px);
    margin: 0 auto;
    .date {
      border-radius: 8px;
      border: 1px solid #F2F2F2;
      margin: 16px 0px;
      display: flex;
      justify-content: space-around;
      color: #ABAEB3;
      font-size: 14px;
      height: 36px;
      & > div {
        height: 20px;
        margin: 8px 0px;
        line-height: 20px;
      }
      & .date-select {
        width: 70%;
        display: flex;
        & .date-from {
          width: 35%;
          text-align: center;
        }
        & .date-Line {
          width: 15%;
          text-align: center;
        }
        & .date-to {
          width: 35%;
          text-align: center;
        }
      }
      & .date-fit {
        width: 20%;
        display: flex;
        & span {
          width: 33px;
        }
        & img {
          margin: 0px 2px;
          width: 16px;
          height: 16px;
        }
      }
    }

    .subject-list {
      width: 100%;
      .subject-li {
        width: 100%;
        display: flex;
        .subject-radio {
          width: 26px;
        }
        .subject-content {
          width: calc(100% - 26px);
          background: #fff;
          .subject-name {
            height: 25px;
            font-size: 18px;
            font-weight: 500;
            color: rgba(31, 36, 35, 1);
            line-height: 25px;
            margin: 20px;
            margin-bottom: 10px;
          }
          .subject-sub {
            height: 17px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(113, 115, 115, 1);
            line-height: 17px;
            margin: 0px 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #F0F0F0;
          }
          .subject-dete {
            height: 50px;
            line-height: 50px;
            margin: 0px 20px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(70, 73, 72, 1);
          }
        }
      }
    }
  }

  .person-footer {
    display: flex;
    width: calc(100% - 32px);
    margin: 0 16px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #ffffff;
    line-height: 64px;
    height: 64px;
    z-index: 2000;
    .el-button {
      width: 100%;
      height: 44px;
      font-size: 16px;
      margin-top: 10px;
    }
  }
</style>
