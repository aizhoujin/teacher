<template>
  <div style="background: #FFFFFF">
    <div class="home-head">
      <div class="home-head-switcher">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            切换<i class="el-icon-sort" style="transform: rotate(90deg)"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="home-head-search">
        <el-input :placeholder="userInfo ? userInfo.company.name : '邯郸计算机培训学院'" v-model="homeSchool"></el-input>
      </div>
    </div>
    <div class="home-swiper">
      <el-carousel
        indicator-position="outside"
        height="160px"
        arrow="never">
        <el-carousel-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-bulletin" @click="toBulletin">
      <el-badge :hidden="unread.length == 0" :value="unread.length" class="item">
        <i><b>学校公告 &nbsp;</b></i>
      </el-badge>
      <div class="home-bulletin-text">
        <transition name="el-fade-in-linear" v-for="(item,index) in (bulletin&&bulletin.list ? bulletin.list: [])"
                    :key="index">
          <li v-show="index == showIndex">
            {{item.title}}
          </li>
        </transition>
      </div>
      <div class="home-bulletin-more">更多</div>
    </div>
    <div class="home-nav">
      <li v-for="item in homeNav" @click="$router.push({path: item.path})">
        <div>
          <img :src="item.img">
        </div>
        <p>{{item.title}}</p>
      </li>
    </div>
    <div class="home-nav-mini">
      <li v-for="item in homeNavMini" :key="item.title" @click="$router.push({path: item.path})">
        <div class="home-nav-mini-left">
          <img :src="item.img">
        </div>
        <div class="home-nav-mini-right">
          <p class="home-nav-mini-right-title">{{item.title}}</p>
          <p class="home-nav-mini-right-text">{{item.text}}</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
  import {myGetBulletin, detailMy} from "../../api/home";
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "index",
    data() {
      return {
        swiperList: [
          require('../../assets/Banner.png'),
          require('../../assets/Banner.png'),
          require('../../assets/Banner.png')
        ],
        homeNav: [
          {'title': '我的课表', path: '/timeTable', img: require('../../assets/icon_首页/金刚区/我的课表.png')},
          {'title': '上课点名', path: '/checkroll', img: require('../../assets/icon_首页/金刚区/上课点名.png')},
          {'title': '发布作业', path: '/seatwork', img: require('../../assets/icon_首页/金刚区/发布作业.png')},
          {'title': '意向学员', path: '/student', img: require('../../assets/icon_首页/金刚区/意向学员.png')},
        ],
        homeNavMini: [
          {'title': '发布通知', 'text': '发布学生通知', path: '/notice', 'img': require('../../assets/icon_首页/小金刚区/发布通知.png')},
          {
            'title': '录入成绩单',
            'text': '学员学习成绩单',
            path: '/transcript',
            'img': require('../../assets/icon_首页/小金刚区/录入成绩单.png')
          },
          {'title': '班级电话簿', 'text': '学员联系电话', path: '/phone', 'img': require('../../assets/icon_首页/小金刚区/班级电话.png')},
          {'title': '上课点评', 'text': '查看学生点评', path: '/remark', 'img': require('../../assets/icon_首页/小金刚区/上课点评.png')}
        ],
        homeSchool: '',
        unread: [],
        bulletin: [],
        showIndex: 0
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo,
        loginState: state => state.user.loginState
      }),
    },
    methods: {
      getBulletin() {
        let token = this.userInfo.token;
        console.log(this.userInfo.token);
        let obj = {
          "between": {},
          "equals": {},
          "groupBy": [],
          "gt": {},
          "gtEquals": {},
          "isIn": {},
          "isNull": {},
          "like": {},
          "lt": {},
          "ltEquals": {},
          "notBetween": {},
          "notEquals": {},
          "notIn": {},
          "notLike": {},
          "notNull": {},
          "orderBy": {},
          "page": 1,
          "size": 10,
          "empty": true
        }
        myGetBulletin(token, obj).then(res => {
          let data = res.data.data;
          this.unread = [];
          this.bulletin = data;

          if (data && data.list && data.list.length > 0) {
            setInterval(() => {
              if (this.showIndex >= data.list.length - 1) {
                this.showIndex = 0;
              } else {
                this.showIndex++;
              }
            }, 3000)
            data.list.forEach((item, index) => {
              if (item.status == 0) {
                this.unread.push(item);
              }
            })
          }

        })
          .catch(err => {
            this.unread = [];
          })
        let id = '1097141187560603648'
        // detailMy(token, id).then()
      },
      toBulletin() {
        this.$router.push({
          path: '/bulletin'
        })
      }
    },
    mounted() {
      this.getBulletin();
    },
    watch: {
      loginState(val, oldVal) {
        console.log(val, oldVal);
        if (val) {
          this.getBulletin();
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-head {
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding-top: 5px;
    line-height: 42px;
    & .home-head-switcher {
      width: 15%;
      text-align: left;
      white-space: nowrap;
    }
    & .home-head-search {
      width: 75%;
    }
  }

  .home-swiper {
    width: 100%;
    & img {
      width: 100%;
    }
  }

  .home-bulletin {
    margin: 5px auto;
    padding-left: 5px;
    width: 90%;
    background: #F8F8FC;
    border-radius: 4px;
    line-height: 32px;
    height: 32px;
    display: flex;
    justify-content: space-around;
    & .home-bulletin-text {
      width: 65%;
      padding-left: 5px;
      padding-right: 5px;
      color: #BABDC5;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }
    & .home-bulletin-more {
      width: 10%;
      white-space: nowrap;
      font-size: 12px;
      color: #BABDC5;
      height: 20px;
      line-height: 20px;
      margin-top: 6px;
      border-left: 1px solid #BABDC5;
      padding-left: 3px;
    }
  }

  .home-nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    & li {
      list-style: none;
      width: 20%;
      text-align: center;
      & div {
        width: 60%;
        margin: 5px 20%;
        height: 48px;
        line-height: 48px;
        & img {
          width: 80%;
          text-align: center;
          vertical-align: bottom;
        }
      }
      & p {
        font-size: 13px;
        color: #626468;
      }
    }
  }

  .home-nav-mini {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 5px 0px;
    & li {
      width: 45%;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      height: 80px;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
      & .home-nav-mini-left {
        width: 40%;
        height: 80px;
        text-align: right;
        & img {
          width: 50px;
          height: 50px;
          margin-top: 15px;
        }
      }
      & .home-nav-mini-right {
        width: 55%;
        font-size: 12px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & p {
          text-indent: 5px;
          margin: 0;
        }
        & .home-nav-mini-right-title {
          font-weight: bold;
          font-size: 14px;
        }
        & .home-nav-mini-right-text {
          color: #C3C3C3;
          font-size: 11px;
        }
      }
    }
  }

  .transition-box {
    width: 200px;
    height: 10px;
    border-radius: 4px;
    background-color: #409EFF;
  }


</style>
