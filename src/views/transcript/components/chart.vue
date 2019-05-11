<template>
  <div class="chart">
    <div class="chart-hade">
      <div class="chart-detail">
        <div class="chart-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="chart-name">瑾年</div>
      </div>
      <div class="clas-class">数学一班</div>
    </div>
    <div class="chart-report">
      <div class="chart-jub">数学</div>
      <div class="chart-date">考试时间: 2019-04-15</div>
      <div class="chart-jub">98分</div>
    </div>
    <div class="chart-title">该科成绩波动曲线图</div>

    <div id="lineCanvas" style="width: 100%;height: 400px"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "chart",
    data() {
      return {
        lineCanvas: null,
      }
    },
    methods: {
      initEcharts() {
        this.lineCanvas = echarts.init(document.getElementById('lineCanvas'));
        var option = {
          xAxis: {
            type: 'category',
            data: ['4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [78, 60, 90, 110, 50, 130, 150],
            type: 'line'
          }],
          color: '#40D2B4',
        };
        this.lineCanvas.setOption(option);
      }
    },
    mounted() {
      this.initEcharts();
    }
  }
</script>

<style scoped lang="scss">
  .chart {
    width: calc(100% - 32px);
    margin: 0 auto;
    .chart-hade {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .chart-detail {
        display: flex;
        .chart-portrait {
          width: 65px;
          height: 65px;
          img {
            width: 32px;
            height: 32px;
            margin: 16px;
            border-radius: 50%;
          }
        }
        .chart-name {
          padding-top: 26px;
          width: 56px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(70, 73, 72, 1);
          line-height: 20px;
        }
      }
      .clas-class {
        padding-top: 25px;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(70, 73, 72, 1);
        line-height: 22px;
      }
    }
    .chart-report {
      display: flex;
      justify-content: space-between;
      background: rgba(239, 246, 254, 1);
      border-radius: 8px;
      height: 54px;
      line-height: 54px;
      .chart-jub {
        height: 25px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(70, 73, 72, 1);
        margin: 0px 10px;
      }
      .chart-date {
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(70, 73, 72, 1);
      }
    }
    .chart-title {
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(70, 73, 72, 1);
      line-height: 22px;
      margin-top: 30px;
    }
  }
</style>
