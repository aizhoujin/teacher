<template>
  <div style="background: #FFFFFF">
    <div class="home-head">
      <div class="home-head-switcher">
        <span>切换</span>
        <i class="el-icon-sort" style="transform: rotate(90deg)"></i>
      </div>
      <div class="home-head-search">
        <el-input :placeholder="userInfo.company.name" v-model="homeSchool"></el-input>
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
    <div class="home-bulletin">
      <el-badge :value="3" class="item">
        <i><b>学校公告 &nbsp;</b></i>
      </el-badge>
      <div class="home-bulletin-text">
        Ant Design是一个服务于企业及产品企业Ant Design
      </div>
      <div class="home-bulletin-more">更多</div>
    </div>
    <div class="home-nav">
      <li v-for="item in homeNav">
        <div>
          <img :src="item.img">
        </div>
        <p>{{item.title}}</p>
      </li>
    </div>
    <div class="home-nav-mini">
      <li v-for="item in homeNavMini">
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
  import {getBulletin,detailMy} from "../../api/home";
  import axios from 'axios'
  import {mapState} from 'vuex'
  // import qs from 'qs'
  // const Qs require('qs');

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
          {'title': '我的课表', img: require('../../assets/icon_首页/金刚区/我的课表.png')},
          {'title': '上课点名', img: require('../../assets/icon_首页/金刚区/上课点名.png')},
          {'title': '发布作业', img: require('../../assets/icon_首页/金刚区/发布作业.png')},
          {'title': '意向学员', img: require('../../assets/icon_首页/金刚区/意向学员.png')},
        ],
        homeNavMini: [
          {'title': '发布通知', 'text': '发布学生通知', 'img': require('../../assets/icon_首页/小金刚区/发布通知.png')},
          {'title': '录入成绩单', 'text': '学员学习成绩单', 'img': require('../../assets/icon_首页/小金刚区/录入成绩单.png')},
          {'title': '班级电话簿', 'text': '学员联系电话', 'img': require('../../assets/icon_首页/小金刚区/班级电话.png')},
          {'title': '上课点评', 'text': '查看学生点评', 'img': require('../../assets/icon_首页/小金刚区/上课点评.png')}
        ],
        homeSchool: '',
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      getBulletin() {
        let token = this.userInfo.token;
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
        // obj = Qs.stringify(obj)
        // axios({
        //   method: 'post',
        //   url: 'http://tea.ngrok.eanfang.net:89/wechat/api/affiche/v1/listMy',
        //   headers: {
        //     "from": "TEAW",
        //     "token": token,
        //     "Content-Type": "application/json;charset=UTF-8",
        //   },
        //   data: {
        //     id: '1'
        //   },
        // })


        // axios.post()



        // obj = JSON.stringify(obj)
       //
       // axios.post(`http://tea.ngrok.eanfang.net:89/wechat/api/affiche/v1/listMy`, qs.stringify(obj)).then()

        getBulletin(token,obj).then(res => {
          console.log(res);
        })

        let id = '1097141187560603648'
        detailMy(token, id).then()

       // axios.post(
       //   `http://tea.ngrok.eanfang.net:89/wechat/api/affiche/v1/listMy`,{
       //     data: obj,
       //     headers: {
       //       "from": "TEAW",
       //       "token": token,
       //       "Content-Type": "application/json;charset=UTF-8",
       //     }
       //   }
       // )

      }
    },
    mounted() {
      this.getBulletin();
    }
  }
</script>

<style scoped lang="scss">
  .home-head {
    width: 100%;
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


</style>
