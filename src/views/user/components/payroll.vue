<template>
  <div>
    <div class="payroll-head">
      <span>2019年03月</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <div class="payroll-counnt">
      <div class="payroll-count-title">实发金额</div>
      <div class="payroll-count-number">90,000.00</div>
      <el-button type="primary" style="width: 212px; height: 40px;font-size: 20px;">确认无误</el-button>
      <div class="payroll-count-hint">如工资发放无误，请操作确认</div>
      <div class="chain">
        <div class="chain-li">
          <div class="chain-li-top"></div>
          <div class="chain-li-bottom"></div>
          <div class="chain-li-line"></div>
        </div>
        <div class="chain-li">
          <div class="chain-li-top"></div>
          <div class="chain-li-bottom"></div>
          <div class="chain-li-line"></div>
        </div>
      </div>
    </div>
    <div class="payroll-detail">
      <div class="payroll-detail-title">工资详情</div>
      <div class="payroll-detail-list">
        <div class="payroll-detail-list-li">
          <div>绩效</div>
          <div>1000.00</div>
        </div>
        <div class="payroll-detail-list-li">
          <div>绩效</div>
          <div>1000.00</div>
        </div>
        <div class="payroll-detail-list-li">
          <div>绩效</div>
          <div>1000.00</div>
        </div>
        <div class="payroll-detail-list-li">
          <div>绩效</div>
          <div>1000.00</div>
        </div>
        <div class="payroll-detail-list-li">
          <div>绩效</div>
          <div>1000.00</div>
        </div>
        <div class="payroll-detail-list-li">
          <div>绩效</div>
          <div>1000.00</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "payroll",
  }
</script>

<style scoped lang="scss">
  .payroll-head {
    width: 100%;
    height: 137px;
    color: #fff;
    font-size: 20px;
    padding-top: 21px;
    text-align: center;
  }

  .payroll-counnt {
    width: 90%;
    height: 235px;
    margin: 0 auto;
    margin-top: -70px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .payroll-counnt {
    text-align: center;
    position: relative;
    .payroll-count-title {
      color: #1F2423;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
      padding-top: 30px;
    }
    .payroll-count-number {
      color: #1F2423;
      font-size: 36px;
      font-weight: bold;
      height: 50px;
      line-height: 50px;
      margin: 7px 0px 15px 0px;
    }
    .payroll-count-hint {
      margin-top: 10px;
      height: 20px;
      line-height: 20px;
      color: #717373;
      font-size: 14px;
    }
    .chain {
      position: absolute;
      bottom: -25px;
      left: 10%;
      width: 80%;
      display: flex;
      justify-content: space-between;
      .chain-li {
        .chain-li-top {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #656565;
          z-index: 9;
        }
        .chain-li-line {
          width: 12px;
          height: 40px;
          background-color: #D8D8D8;
          border-radius: 7px;
          margin-left: 3px;
          margin-top: -12px;
          z-index: 10;
        }
        .chain-li-bottom {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #656565;
          margin-top: -50px;
          z-index: 9;
        }
      }
    }
  }

  .payroll-detail {
    border-radius: 8px;
    background-color: #ffffff;
    width: 90%;
    margin: 10px auto;
    padding-top: 20px;
    .payroll-detail-title {
      width: 100%;
      text-align: center;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
    }
    .payroll-detail-list{
      padding-bottom: 10px;
      min-height: 200px;
      .payroll-detail-list-li{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #EBEDED;
      }
    }
  }
</style>
