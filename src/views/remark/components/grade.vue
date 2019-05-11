<template>
  <div class="grade">
    <div class="grade-detail">
      <li class="grade-li">
        <div class="grade-label">被点评人:</div>
        <div class="grade-person">
          <span>周瑾</span>
          <span>周瑾</span>
          <span>周瑾</span>
        </div>
      </li>
      <li class="grade-li">
        <div class="grade-label">班级:</div>
        <div class="grade-text">数学一班</div>
      </li>
      <li class="grade-li">
        <div class="grade-label">课程:</div>
        <div class="grade-text">数学</div>
      </li>
      <li class="grade-li">
        <div class="grade-label">老师:</div>
        <div class="grade-text">张敏</div>
      </li>
      <div style="height: 20px"></div>
      <li class="grade-li">
        <div class="grade-label">评价学员:</div>
      </li>
      <li class="grade-li">
        <div class="grade-label">注意力:</div>
        <div class="grade-text">
          <el-rate v-model="value1"></el-rate>
        </div>
      </li>
      <li class="grade-li">
        <div class="grade-label">上课表现:</div>
        <div class="grade-text">
          <el-rate v-model="value2"></el-rate>
        </div>
      </li>
      <li class="grade-li">
        <div class="grade-label">课堂评价:</div>
        <div class="grade-text">
          <el-rate v-model="value3"></el-rate>
        </div>
      </li>
      <li class="grade-li">
        <div class="grade-label">课堂评价:</div>
        <div class="grade-text">
          <el-rate v-model="value4"></el-rate>
        </div>
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
      <el-button type="primary">完成评价</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "grade",
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
      }
    }
  }
</script>

<style scoped lang="scss">
  .grade {
    width: calc(100% - 32px);
    margin: 0 auto;
    .grade-detail {
      width: 100%;
      .grade-li {
        width: 100%;
        display: flex;
        margin: 15px 0px;
        .grade-label {
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(70, 73, 72, 1);
          line-height: 20px;
          margin-right: 15px;
        }
        .grade-person {
          span {
            padding: 2px 5px;
            color: #40D2B4;
            font-size: 12px;
            border: 1px solid #40D2B4;
          }
        }
        .grade-text {
          color: #464948;
          font-size: 14px;
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
</style>
