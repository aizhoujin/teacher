<template>
  <div class="selectClass">
    <div class="class-list">
      <div class="class-li">
        <div class="class-left">
          <div class="class-portrait">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="class-content">
            <div class="class-name">数学一班</div>
            <div class="class-number">学员人数： <span>20</span></div>
          </div>
        </div>
        <el-button type="primary" size="mini" @click="$router.push({path: '/report'})">去录入</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "select-class"
  }
</script>

<style scoped lang="scss">
  .selectClass {
    width: calc(100% - 32px);
    margin: 0 auto;
    .class-list {
      width: 100%;
      .class-li {
        margin: 20px 0px;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
        .class-left {
          display: flex;

          .class-portrait {
            width: 75px;
            height: 75px;
            img {
              width: 44px;
              height: 44px;
              margin: 15px;
              margin-right: 10px;
              border-radius: 50%;
            }
          }
          .class-content {
            .class-name {
              height: 25px;
              font-size: 18px;
              font-weight: 500;
              color: rgba(31, 36, 35, 1);
              line-height: 25px;
              margin-top: 15px;
            }
            .class-number{
              color: #717373;
              height:17px;
              font-size:12px;
              span{
                color: #40D2B4;
                font-size: 14px;
              }
            }
          }
        }
        .el-button{
          margin: 20px 10px;
        }
      }
    }

  }
</style>
