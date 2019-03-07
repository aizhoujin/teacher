<template>
  <div>
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
      <div class="date-fit">
        <span>筛选</span>
        <img src="../../assets/icon_学校公告/筛选.png">
      </div>
    </div>
    <div class="bulletinList">
      <li v-for="(item,index) in bulletinList">
        <div class="bulletinList-title">
          {{item.title}}
        </div>
      </li>
    </div>
  </div>
</template>

<script>
  // import {DatetimePicker} from 'mint-ui'
  import {myGetBulletin} from "../../api/home";
  import {mapState} from "vuex";

  export default {
    name: "index",
    data() {
      return {
        dateFrom: "开始时间",
        dateTo: "结束时间",
        pickerValue1: '',
        pickerValue2: '',
        bulletinList:[],
        obj: {
          "page": 1,
          "size": 10,
          "empty": true
        }
      }
    },
    methods: {
      openPicker(type) {
        if (type == 1) {
          this.$refs.picker1.open();
        } else if (type == 2) {
          this.$refs.picker2.open();
        } else {
        }
      },
      handleConfirm(type) {
        if (type == 1) {
          this.pickerValue1 = new Date(this.pickerValue1).toLocaleDateString();
          console.log(this.pickerValue1)
          this.dateFrom = this.pickerValue1;
        } else if (type == 2) {
          this.pickerValue2 = new Date(this.pickerValue2).toLocaleDateString();
          this.dateTo = this.pickerValue2;
        }
      },
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    mounted() {
      this.bulletinList = [];
      myGetBulletin(this.userInfo.token,this.obj).then(res => {
        let list = res.data.data.list;
        list.forEach(item => {
          this.bulletinList.push(item);
        })
      })
    },
    created() {
      this.pickerValue1 = new Date();
      this.pickerValue2 = new Date();
    }
  }
</script>

<style scoped lang="scss">
  .date {
    border-radius: 8px;
    border: 1px solid #F2F2F2;
    margin: 16px;
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
</style>
