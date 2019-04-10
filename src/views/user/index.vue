<template>
  <div>
    <div class="user-head">
      <div class="user-head-back">
        <img src="../../assets/1.jpg" alt="">
      </div>
      <div class="user-head-portrait">
        <img src="../../assets/2.jpg" alt="">
      </div>
      <el-row style="margin: 15px auto; text-align: center; font-size: 16px;color: #464948;font-weight: 500">
        ZhouJIn
      </el-row>
    </div>
    <div class="#E5E5E5" style="width: 100%;height:5px;background: #F7F8F8"></div>
    <div class="userFunList">
      <li v-for="item in userFunList" @click="$router.push(item.path)">
        <div class="userFunList-left">
          <img :src="item.icon" alt="">
          <div>{{item.text}}</div>
        </div>
        <i class="userFunList-right el-icon-arrow-right"></i>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        userFunList: [
          {path: '/payroll', icon: require('../../assets/我的模块/查看工资单.png'), text: '查看工资单'},
          {path: '/changePassword', icon: require('../../assets/我的模块/修改密码.png'), text: '修改密码'},
          {path: '', icon: require('../../assets/我的模块/修改头像.png'), text: '修改头像'},
          {path: '', icon: require('../../assets/我的模块/退出登录.png'), text: '退出登录'},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-head-back {
    width: 100%;
    max-height: 220px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .user-head-portrait {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0px auto;
    margin-top: -45px;
    img {
      width: 90px;
      height: 90px;
    }
  }

  .userFunList {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 52px;
      /*line-height: 52px;*/
      .userFunList-left {
        width: 200px;
        height: 20px;
        display: flex;
        margin: 16px;
        font-size: 14px;
        line-height: 20px;
        img{
          width: 20px;
          height: 20px;
          margin-right: 16px;
        }
      }
      .userFunList-right {
        width: 20px;
        margin: 16px;
      }
    }
  }
</style>
