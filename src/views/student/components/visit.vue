<template>
  <div class="visit">
    <div class="class-data">
      <div class="class-data-top">
        <div class="class-data-img">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="class-data-conent">
          <div class="class-name">瑾年</div>
          <div class="class-time">123123123</div>
        </div>
      </div>
      <div class="class-data-bottom">
        <div>意向级别: <i class="iconfont icon-tubiaozhizuomoban" style="color: #E6A619">高级</i></div>
        <div>跟进状态: <span style="color:#9013FE;">正在跟进</span></div>
      </div>
    </div>

    <div class="visit-title">
      回访记录
    </div>
    <div class="visit-list">
      <li class="visit-li">
        <div class="visit-head">
          <div class="visit-number">
            <div class="shaped">
              <div>1</div>
            </div>
            <div class="visit-numtext">第一次回访</div>
          </div>
          <div class="visit-date">
            2019-03-01 15:28
          </div>
        </div>
        <div class="nextVisit">
          下次回访: 2019-03-30
        </div>
        <div class="visit-conent">
          语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。
        </div>
      </li>
      <li class="visit-li">
        <div class="visit-head">
          <div class="visit-number">
            <div class="shaped">
              <div>1</div>
            </div>
            <div class="visit-numtext">第一次回访</div>
          </div>
          <div class="visit-date">
            2019-03-01 15:28
          </div>
        </div>
        <div class="nextVisit">
          下次回访: 2019-03-30
        </div>
        <div class="visit-conent">
          语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。
        </div>
      </li>
      <li class="visit-li">
        <div class="visit-head">
          <div class="visit-number">
            <div class="shaped">
              <div>1</div>
            </div>
            <div class="visit-numtext">第一次回访</div>
          </div>
          <div class="visit-date">
            2019-03-01 15:28
          </div>
        </div>
        <div class="nextVisit">
          下次回访: 2019-03-30
        </div>
        <div class="visit-conent">
          语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。
        </div>
      </li>
      <li class="visit-li">
        <div class="visit-head">
          <div class="visit-number">
            <div class="shaped">
              <div>1</div>
            </div>
            <div class="visit-numtext">第一次回访</div>
          </div>
          <div class="visit-date">
            2019-03-01 15:28
          </div>
        </div>
        <div class="nextVisit">
          下次回访: 2019-03-30
        </div>
        <div class="visit-conent">
          语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。
        </div>
      </li>

    </div>

    <div style="height: 64px;"></div>
    <div class="person-footer">
      <el-button type="primary" @click="$router.push({path: '/addVisit'})">新增回访记录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "visit",
    data() {
      return {
        classData: this.$route.query,
      }
    }
  }
</script>

<style scoped lang="scss">
  .visit {
    width: calc(100% - 32px);
    height: 100%;
    background: 100%;
    padding: 16px;
  }

  .class-data {
    width: 100%;
    height: 175px;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(255, 246, 255, 1) 0%, rgba(239, 242, 255, 1) 100%);
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    .class-data-top {
      width: 100%;
      display: flex;
      padding: 18px 0px 14px 0px;
      .class-data-img {
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          margin: 0px 23px 0px 27px;
        }
      }
      .class-data-conent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .class-name {
          font-size: 18px;
          font-weight: bold;
          color: rgba(31, 36, 35, 1);
          line-height: 25px;
          margin-bottom: 10px;
        }
        .class-time {
          color: rgba(113, 115, 115, 1);
          line-height: 17px;
          font-size: 12px;
        }
      }
    }
    .class-data-bottom {
      display: flex;
      justify-content: space-around;
      color: #464948;
      font-size: 14px;
      div {
        color: #464948;
        font-size: 14px;
      }
    }
  }

  .visit-title {
    color: #1F2423;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    margin: 20px 0px 14px 0px;
  }

  .visit-list {
    width: 100%;
    .visit-li {
      width: 100%;
      padding: 20px 0px;
      border-bottom: 1px solid #E5E5E5;
      .visit-head {
        display: flex;
        justify-content: space-between;
        .visit-number {
          display: flex;
          .shaped {
            width: 18px;
            height: 18px;
            background: #40D2B4;
            transform: rotate(-45deg);
            div {
              width: 18px;
              height: 18px;
              font-size: 11px;
              line-height: 18px;
              text-align: center;
              transform: rotate(45deg);
              color: #fff;
            }
          }
          .visit-numtext {
            color: #1F2423;
            font-size: 14px;
            line-height: 20px;
            font-weight: bold;
            margin-left: 10px;
          }
        }
        .visit-date {
          font-size: 12px;
          font-weight: 400;
          color: rgba(181, 182, 182, 1);
          line-height: 17px;
        }
      }
      .nextVisit {
        margin: 15px 0px 10px 0px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(181, 182, 182, 1);
        line-height: 17px;
      }
      .visit-conent {
        font-size: 14px;
        font-weight: 400;
        color: rgba(113, 115, 115, 1);
        line-height: 20px;
      }
    }
  }

  .person-footer {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #ffffff;
    line-height: 64px;
    height: 64px;
    z-index: 2000;
    .el-button {
      width: 100%;
      height: 44px;
      font-size: 16px;
      margin-top: 10px;
    }
  }
</style>
