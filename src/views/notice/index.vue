<template>
  <div>
    <div class="notice" :style="{'max-height': clientHeight + 'px'}">
      <!-- 通知列表 -->
      <li class="notice-list" v-for="(item,index) in noticeList" :key="item.id">
        <div class="notice-list-time">{{item.beginTime}}</div>
        <div class="notice-list-main">
          <div class="notice-list-title">
            {{item.title}}
          </div>
          <div class="notice-list-grade">
            <span>35班</span>
          </div>
          <div class="notice-list-detail">
            <div class="notice-list-person">
              <img src="" alt="">
            </div>
            <div class="notice-list-text"  @click="goPath(item.id)">
              <span>查看阅读详情</span> <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </li>
    </div>
    <div v-if="noticeList.length == 0" style="width: 100%;text-align: center; margin: 20px auto;">暂无通知!</div>


    <!--发布通知-->
    <div class="occupied"></div>
    <div class="newNotive" :style="{'top': clientHeight + 'px'}">
      <router-link :to="{path: '/written'}">
        <el-button type="primary" size="small" class="newNotive-btn"
                   :style="{'width': clientWidth+ 'px'}">发布新通知
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {getBulletin} from '../../api/notice'

  export default {
    name: "index",
    data() {
      return {
        obj: {
          "gtEquals": {}, //大于等于
          "ltEquals": {}, // 小于等于
          "page": 1,
          "size": 10,
          "empty": true
        },
        noticeList: [],
        clientHeight: 603,
        clientWidth: 342
      }
    },
    methods: {
      getNotice() {
        this.$store.commit('loadChange', true);
        let token = this.$store.state.user.userInfo.token;
        getBulletin(token, this.obj).then(res => {
          this.$store.commit('loadChange', false);
          let data = res.data.data;
          console.log(data.list);
          this.noticeList = this.noticeList.concat(data.list);
        }).catch(err => {
          this.$store.commit('loadChange', false);
        })
      },
      goPath(id){
        this.$router.push({
          path: '/noticeDetail/' + id
        })
      }
    },
    created() {
      this.getNotice();
      this.clientHeight = document.documentElement.clientHeight - 64;
      this.clientWidth = document.documentElement.clientWidth - 32;
    }
  }
</script>

<style scoped lang="scss">
  .notice {
    width: 100%;
    overflow-y: auto;
    & .notice-list {
      width: 100%;
      & .notice-list-time {
        text-align: center;
        margin: 15px auto;
        color: #ABAEB3;
        font-size: 12px;
        line-height: 17px;
      }
      & .notice-list-main {
        padding: 1px 0px;
        margin: 11px 15px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
        & .notice-list-title {
          margin: 12px 15px 10px 15px;
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
        & .notice-list-grade {
          margin: 12px 15px;
          & span {
            border: 1px solid #40D2B4;
            border-radius: 2px;
            font-size: 12px;
            line-height: 17px;
            color: #40D2B4;
            padding: 0px 5px;
          }
        }
        & .notice-list-detail {
          margin: 25px 15px 15px 15px;
          display: flex;
          justify-content: space-between;
          & .notice-list-text {
            color: #717373;
            font-size: 14px;
            line-height: 20px;
          }
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
</style>
