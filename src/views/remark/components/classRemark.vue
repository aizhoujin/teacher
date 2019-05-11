<template>
  <div class="classRemark">
    <div class="personList">
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">

          </div>
          <div class="person-name">
            <el-checkbox v-model="checked">全选</el-checkbox>
          </div>
        </div>
        <el-button size="mini" type="primary" @click="$router.push({path: '/grade'})">去点评</el-button>
      </li>
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="person-name">
            <el-checkbox v-model="checked">瑾年</el-checkbox>
          </div>
        </div>
        <el-button size="mini" type="primary" @click="$router.push({path: '/grade'})">去点评</el-button>
      </li>
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="person-name">
            <el-checkbox v-model="checked">瑾年</el-checkbox>
          </div>
        </div>
        <el-button size="mini" type="primary" @click="$router.push({path: '/grade'})">去点评</el-button>
      </li>
      <li class="person-li">
        <div class="person-conent">
          <div class="person-li-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="person-name">
            <el-checkbox v-model="checked">瑾年</el-checkbox>
          </div>
        </div>
        <el-button size="mini" type="primary" @click="$router.push({path: '/grade'})">去点评</el-button>
      </li>
    </div>

    <div class="remark-title">
      课堂总结:
    </div>
    <div class="remark-summary">
      <el-input
        type="textarea"
        class="remark-summary"
        :autosize="{ minRows: 10, maxRows: 15}"
        placeholder="在这里输入对本节课程的总结"
        v-model="content">
      </el-input>
    </div>

    <div style="height: 64px;"></div>
    <div class="person-footer">
      <el-button type="primary">完成点评</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "class-remark",
    data() {
      return {
        checked: '',
        content: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .classRemark {
    width: calc(100% - 32px);
    height: 100%;
    margin: 0 auto;
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
          }

        }
        .el-button {
          margin: 20px 0px;
        }
      }

    }
    .remark-title {
      color: #464948;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin: 15px 0px;
    }
    .remark-summary {
      background: #FAFAFA;
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
