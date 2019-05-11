<template>
  <div class="remark">
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
    <div class="remark-list">
      <li class="remark-li" @click="$router.push({path:'/classRemark'})">
        <div class="remark-top">
          <div class="remark-portrait">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="remark-text">
            <div class="remark-name">数学一班</div>
            <div class="remark-student">学员已点评 <span>20</span>/30</div>
          </div>
        </div>
        <div class="remark-bottom">
          <div class="remark-bottom-date">
            <i class="el-icon-time"></i>
            2019-03-11 09:00 - 14:00
          </div>
          <el-button size="mini" type="primary">去点评</el-button>
        </div>
      </li>
      <li class="remark-li" @click="$router.push({path:'/classRemark'})">
        <div class="remark-top">
          <div class="remark-portrait">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="remark-text">
            <div class="remark-name">数学一班</div>
            <div class="remark-student">学员已点评 <span>20</span>/30</div>
          </div>
        </div>
        <div class="remark-bottom">
          <div class="remark-bottom-date">
            <i class="el-icon-time"></i>
            2019-03-11 09:00 - 14:00
          </div>
          <el-button size="mini" type="primary">去点评</el-button>
        </div>
      </li>
      <li class="remark-li" @click="$router.push({path:'/classRemark'})">
        <div class="remark-top">
          <div class="remark-portrait">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="remark-text">
            <div class="remark-name">数学一班</div>
            <div class="remark-student">学员已点评 <span>20</span>/30</div>
          </div>
        </div>
        <div class="remark-bottom">
          <div class="remark-bottom-date">
            <i class="el-icon-time"></i>
            2019-03-11 09:00 - 14:00
          </div>
          <el-button size="mini" type="primary">去点评</el-button>
        </div>
      </li>
      <li class="remark-li" @click="$router.push({path:'/classRemark'})">
        <div class="remark-top">
          <div class="remark-portrait">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="remark-text">
            <div class="remark-name">数学一班</div>
            <div class="remark-student">学员已点评 <span>20</span>/30</div>
          </div>
        </div>
        <div class="remark-bottom">
          <div class="remark-bottom-date">
            <i class="el-icon-time"></i>
            2019-03-11 09:00 - 14:00
          </div>
          <el-button size="mini" type="primary">去点评</el-button>
        </div>
      </li>
      <li class="remark-li" @click="$router.push({path:'/classRemark'})">
        <div class="remark-top">
          <div class="remark-portrait">
            <img src="../../assets/2.jpg" alt="">
          </div>
          <div class="remark-text">
            <div class="remark-name">数学一班</div>
            <div class="remark-student">学员已点评 <span>20</span>/30</div>
          </div>
        </div>
        <div class="remark-bottom">
          <div class="remark-bottom-date">
            <i class="el-icon-time"></i>
            2019-03-11 09:00 - 14:00
          </div>
          <el-button size="mini" type="primary">去点评</el-button>
        </div>
      </li>

    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
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
        bulletinList: [],
        obj: {
          "gtEquals": {}, //大于等于
          "ltEquals": {}, // 小于等于
          "page": 1,
          "size": 10,
          "empty": true
        },
        total: 0,
        allLoaded: true
      }
    },
    methods: {
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
          console.log(this.pickerValue1)
          this.dateFrom = this.pickerValue1;
        } else if (type == 2) {
          this.pickerValue2 = new Date(this.pickerValue2).toLocaleDateString();
          this.dateTo = this.pickerValue2;
        }
      },
      myGetBulletin() {
        myGetBulletin(this.$store.state.user.userInfo.token, this.obj).then(res => {
          let list = res.data.data.list;
          this.total = res.data.data.total;
          list.forEach(item => {
            this.bulletinList.push(item);
          })
        })
      },
      dateFit() {
        if (this.pickerValue1 == '') {
          Toast('请选择开始时间')
        } else if (this.pickerValue2 == '') {
          Toast('请选择结束时间')
        } else {
          if (this.pickerValue1 < this.pickerValue2) {
            this.obj.gtEquals.createTime = this.pickerValue1.replace('/', '-').replace('/', '-');
            this.obj.ltEquals.createTime = this.pickerValue2.replace('/', '-').replace('/', '-');
            this.bulletinList = [];
            this.myGetBulletin();
          }
        }
        console.log(this.pickerValue2 > this.pickerValue1)
      },
      bulletinDetail(id) {
        console.log('id', id)
        this.$router.push({
          path: '/bulletinDetail/' + id,
        })
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    mounted() {
      this.bulletinList = [];
      this.myGetBulletin();
    },
    created() {

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

  .bulletinList {
    width: 100%;
    & li {
      margin: 16px;
      padding: 15px 0px;
      border-radius: 8px;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
      position: relative;
      & .bulletinList-title {
        /*width: 200px;*/
        margin: 15px 15px 10px 15px;
        font-size: 16px;
        color: #1F2423;
        font-weight: bold;
        text-align: left;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 24px;
      }
      & .bulletinList-context {
        margin: 10px 15px;
        text-align: left;
        font-size: 14px;
        color: #717373;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 21px;
      }
      & .bulletinList-basic {
        display: flex;
        margin: 10px 15px;
        justify-content: space-between;
        color: #B5B6B6;
        font-size: 12px;
        line-height: 17px;
      }
      & .bulletinList-tag {
        position: absolute;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        background: #F52B2B;
        top: 5px;
        left: 5px;
        box-shadow: 0px 1px 2px rgba(234, 52, 42, 0.3);
      }
    }

  }

  .remark-list {
    width: calc(100% - 32px);
    margin: 10px auto;
    .remark-li {
      width: 100%;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
      .remark-top {
        display: flex;
        border-bottom: 0.5px solid #F0F0F0;
        .remark-portrait {
          width: 75px;
          height: 75px;
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin: 15px;
          }
        }
        .remark-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .remark-name {
            color: #1F2423;
            font-size: 18px;
            line-height: 25px;
            font-weight: 500;
          }
          .remark-student {
            font-size: 12px;
            font-weight: 400;
            color: rgba(113, 115, 115, 1);
            line-height: 17px;
            span {
              color: #40D2B4;
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
      }
      .remark-bottom {
        display: flex;
        justify-content: space-between;
        .el-icon-time {
          line-height: 50px;
          margin-left: 15px;
        }
        .el-button {
          margin: 10px;
          margin-right: 15px;
        }
      }
    }
  }
</style>
