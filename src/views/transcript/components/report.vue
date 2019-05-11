<template>
  <div class="report">
    <div class="call-data">
      <div class="call-data-top">
        <div class="call-data-img">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="call-data-conent">
          <div class="call-name">{{}}</div>
        </div>
      </div>
      <div class="call-data-bottom">
        <div><i class="el-icon-location" style="margin-right: 10px"></i>科目: {{}}</div>
        <div><i class="el-icon-time" style="margin-right: 10px"></i>考试时间: {{}}</div>
      </div>
    </div>
    <div class="personList">
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">

          </div>
          <div class="person-name">
            <h4>学员姓名</h4>
          </div>
          <div class="person-report">
            <h4>录入成绩</h4>
          </div>
        </div>
        <div class="person-view">
          <h4>查看</h4>
        </div>
      </li>
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="person-name">
            周瑾
          </div>
          <div class="person-report">
            <el-input v-model="report"></el-input>
          </div>
        </div>
        <div class="person-view" @click="$router.push({path: '/chart'})">
          <i class="el-icon-view"></i>
        </div>
      </li>
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="person-name">
            周瑾
          </div>
          <div class="person-report">
            <el-input v-model="report"></el-input>
          </div>
        </div>
        <div class="person-view" @click="$router.push({path: '/chart'})">
          <i class="el-icon-view"></i>
        </div>
      </li>
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="person-name">
            周瑾
          </div>
          <div class="person-report">
            <el-input v-model="report"></el-input>
          </div>
        </div>
        <div class="person-view" @click="$router.push({path: '/chart'})">
          <i class="el-icon-view"></i>
        </div>
      </li>
    </div>
    <div style="height: 64px;"></div>
    <div class="person-footer">
      <el-button type="primary">提交成绩</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "report",
    data() {
      return {
        report: 90,
      }
    }
  }
</script>

<style scoped lang="scss">
  .report {
    width: calc(100% - 32px);
    margin: 0 auto;
    .call-data {
      width: 100%;
      height: 114px;
      border-radius: 8px;
      background: linear-gradient(315deg, rgba(255, 231, 141, 1) 0%, rgba(255, 138, 72, 1) 100%);
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
      .call-data-top {
        width: 100%;
        display: flex;
        padding: 18px 0px 14px 0px;
        .call-data-img {
          img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            margin: 0px 23px 0px 27px;
          }
        }
        .call-data-conent {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .call-name {
            font-size: 20px;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 25px;
          }
          .call-time {
            color: #FFFFFF;
            line-height: 17px;
            font-size: 12px;
          }
        }
      }
      .call-data-bottom {
        display: flex;
        color: #464948;
        font-size: 14px;
        div {
          width: 45%;
          text-indent: 20px;
          color: #FFFFFF;
          font-size: 14px;
        }
      }
    }
    .personList {
      width: 100%;
      .person-li {
        display: flex;
        justify-content: space-between;
        .person-conent {
          display: flex;
          height: 64px;
          .person-li-portrait {
            width: 55px;
            height: 65px;
            img {
              width: 32px;
              height: 32px;
              margin: 16px 0px;
              border-radius: 50%;
            }
          }
          .person-name {
            line-height: 64px;
            width: 80px;
          }
          .person-report {
            line-height: 64px;
            margin-left: 30px;
            width: 65px;
          }
        }
        .person-view {
          width: 50px;
          height: 64px;
          line-height: 64px;
          text-align: center;
        }
        .el-button {
          margin: 20px 0px;
        }
      }

    }
    .person-footer {
      display: flex;
      width: calc(100% - 32px);
      position: fixed;
      bottom: 0px;
      left: 0px;
      background: #ffffff;
      line-height: 64px;
      height: 64px;
      z-index: 2000;
      margin: 0px 16px;
      .el-button {
        width: 100%;
        height: 44px;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
</style>
