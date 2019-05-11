<template>
  <div style="padding: 0px; margin: 0px; width: 100%">
    <div class="student-percent">
      <div class="student-number">
        {{studentNumber}}
      </div>
    </div>
    <div class="student-count">
      <div class="student-count-my">
        <p class="student-count-numner">
          {{myStudent}}
        </p>
        <p>我的学员<i class="el-icon-arrow-right"></i></p>
      </div>
      <div class="student-count-my">
        <p class="student-count-numner">
          {{myStudent}}
        </p>
        <p>已成功转化<i class="el-icon-arrow-right"></i></p>
      </div>
    </div>
    <div class="student-list">
      <div class="student-li student-li-todayAdd" @click="$router.push({path: '/myStudent'})">
        <div class="student-li-left">
          <img src="../../assets/发布通知模块/图片_未被选择.png" alt="">
          <div>今日新增</div>
        </div>
        <div class="student-li-right">
          {{studentCount}}人 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="student-li student-li-todayNot" @click="$router.push({path: '/myStudent'})">
        <div class="student-li-left">
          <img src="../../assets/发布通知模块/图片_未被选择.png" alt="">
          <div>今日待沟通</div>
        </div>
        <div class="student-li-right">
          {{studentCount}}人 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="student-li student-li-todayOver" @click="$router.push({path: '/myStudent'})">
        <div class="student-li-left">
          <img src="../../assets/发布通知模块/图片_未被选择.png" alt="">
          <div>今日已沟通</div>
        </div>
        <div class="student-li-right">
          {{studentCount}}人 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="occupied"></div>
    <!--新增学员-->
    <div class="newNotive" :style="{'top': clientHeight + 'px'}">
      <router-link :to="{path: '/addStudent'}">
        <el-button type="primary" size="small" class="newNotive-btn"
                   :style="{'width': clientWidth+ 'px'}">新增咨询学员
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        studentNumber: '30%',
        myStudent: 100,
        studentCount: 17,
        clientHeight: 603,
        clientWidth: 342
      }
    },
    created() {
      this.clientHeight = document.documentElement.clientHeight - 64;
      this.clientWidth = document.documentElement.clientWidth - 32;
    }
  }
</script>

<style scoped lang="scss">
  .student-percent {
    width: 221px;
    height: 221px;
    text-align: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 5px auto;
  }

  .student-number {
    margin: 0 auto;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid #ddd;
    font-size: 28px;
    font-weight: bold;
    line-height: 120px;
  }

  .student-count {
    width: 100%;
    display: flex;
    justify-content: center;
    .student-count-my {
      width: 100px;
      text-align: center;
      font-size: 14px;
      color: #3B3E3DFF;
      .student-count-numner {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .student-list {
    width: 90%;
    margin: 10px auto;
    .student-li {
      width: 100%;
      height: 62px;
      display: flex;
      justify-content: space-between;
      line-height: 62px;
      border-radius: 8px;
      margin-top: 10px;
      .student-li-left {
        width: 200px;
        display: flex;
        font-size: 14px;
        font-weight: bold;
        img {
          width: 20px;
          height: 20px;
          margin: 21px;
          margin-right: 16px;
          vertical-align: middle;
        }
      }
      .student-li-right {
        font-size: 18px;
        font-weight: bold;
        margin-right: 18px;
      }
    }
    .student-li-todayAdd {
      background: #FFF3DE;
    }
    .student-li-todayNot {
      background: #FFE6E6;
    }
    .student-li-todayOver {
      background: #CBF2FF;
    }
  }

  .newNotive {
    height: 64px;
    font-size: 16px;
    /*padding: 10px 16px;*/
    position: fixed;
    background: #ffffff;
    left: 0;
    width: 100%;
    & .newNotive-btn {
      height: 44px;
      font-size: 16px;
      margin: 10px 16px;
    }
  }
</style>
