<template>
  <div>
    <!-- 开始时间 -->
    <mt-datetime-picker
      ref="picker1"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerValue1"
      @confirm="handleConfirm(1)">
    </mt-datetime-picker>

    <!-- 结束时间 -->
    <mt-datetime-picker
      ref="picker2"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerValue2"
      @confirm="handleConfirm(2)">
    </mt-datetime-picker>

    <!-- 时间框 -->
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

    <!-- 作业列表 -->
    <div class="bulletinList"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <li v-for="(item,index) in bulletinList" :key="item.id" @click="bulletinDetail(item.id)">
        <div class="bulletinList-title">
          {{item.title}}
        </div>
        <div class="bulletinList-context">
          {{item.content}}
        </div>
        <div class="bulletinList-basic">
          <div>
            发布人：{{item.createStaffEntity.infoEntity.realName}}
          </div>
          <div>{{item.createTime}}</div>
        </div>
        <div class="bulletinList-tag" v-show="item.status == 0"></div>
      </li>
      <div class="footLoading" v-loading="loading">{{footerText}}</div>
    </div>

    <!--布置作业-->
    <div class="occupied"></div>
    <div class="newNotive" :style="{'top': clientHeight + 'px'}">
      <router-link :to="{path: '/written', query: {type: 'seatwork'}}">
        <el-button type="primary" size="small" class="newNotive-btn"
                   :style="{'width': clientWidth+ 'px'}">布置作业
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  // import {DatetimePicker} from 'mint-ui'
  import {Toast} from 'mint-ui';
  import {homework} from "../../api/seatwork";
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
          "page": 1,
          "size": 10,
          "gtEquals": {}, //大于等于
          "ltEquals": {}, // 小于等于
          "empty": true
        },
        total: 0,
        allLoaded: true,
        clientHeight: 603,
        clientWidth: 342,
        loading: false,
        footerText: ''
      }
    },
    methods: {
      // 打开日期选择器
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

      // 日期选择确定
      handleConfirm(type) {
        if (type == 1) {
          this.pickerValue1 = new Date(this.pickerValue1).toLocaleDateString();
          this.dateFrom = this.pickerValue1;
        } else if (type == 2) {
          this.pickerValue2 = new Date(this.pickerValue2).toLocaleDateString();
          this.dateTo = this.pickerValue2;
        }
      },

      // 获取作业列表
      myGetBulletin() {
        homework(this.$store.state.user.userInfo.token, this.obj).then(res => {
          this.loading = false;
          let list = res.data.data.list;
          this.total = res.data.data.total;
          list.forEach(item => {
            this.bulletinList.push(item);
          })
        })
      },

      // 筛选时间
      dateFit() {
        if (this.pickerValue1 == '') {
          Toast('请选择开始时间')
        } else if (this.pickerValue2 == '') {
          Toast('请选择结束时间')
        } else {
          if (this.pickerValue1 <= this.pickerValue2) {
            this.obj.gtEquals.createTime = this.pickerValue1.replace('/', '-').replace('/', '-') + " 00:00";
            this.obj.ltEquals.createTime = this.pickerValue2.replace('/', '-').replace('/', '-') + "23:59";
            this.bulletinList = [];
            this.myGetBulletin();
          } else {
            this.$toast("结束时间不能小于开始时间");
          }
        }
      },

      // 去详情页
      bulletinDetail(id) {
        this.$router.push({
          path: '/bulletinDetail/' + id,
        })
      },

      // 上拉加载
      loadMore() {
        if (this.bulletinList.length >= (this.obj.page * this.obj.size)) {
          this.loading = true;
          this.obj.page++;
          this.myGetBulletin();
        }
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
      this.clientHeight = document.documentElement.clientHeight - 64;
      this.clientWidth = document.documentElement.clientWidth - 32;
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
</style>
