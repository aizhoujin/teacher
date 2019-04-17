<template>
  <div>
    <div class="checkroll-title">
      <div class="checkroll-title-top">
        今天您共有3节课
      </div>
      <div class="checkroll-title-bottom">
        {{toDay}} (周{{toWeek}})
      </div>
    </div>
    <div class="checkroll-class">
      <li class="checkroll-class-li">
        <div class="checkroll-class-li-top">
          <div class="checkroll-class-li-left">
            <div class="checkroll-class-li-top-img">
              <img src="../../assets/2.jpg" alt="">
            </div>
            <div class="checkroll-class-li-top-context">
              <div>
                <span>数学一班</span>
                <span>已上课</span>
              </div>
              <div>
                李敏老师
              </div>
            </div>
          </div>
          <div class="checkroll-class-li-right">
            20/30
          </div>

        </div>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        toDay: new Date().toLocaleDateString(),
        toWeek: "日一二三四五六".charAt(new Date().getDay())
      }
    }
  }
</script>

<style scoped lang="scss">
  .checkroll-title {
    background: linear-gradient(to right, #A496F0 0%, #D2AEEF 100%);
    height: 81px;
    text-align: center;
    color: #fff;
    .checkroll-title-top {
      height: 28px;
      line-height: 28px;
      padding-top: 15px;
      margin-bottom: 3px;
      font-size: 20px;
    }
    .checkroll-title-bottom {
      height: 20px;
      font-size: 14px;
    }
  }
  .checkroll-class{
    width: 100%;
    .checkroll-class-li{
      width: 90%;
      margin: 20px auto;
      background: #ffffff;
      box-shadow: 0px 5px 20px rgba(0,0,0,0.05);
      .checkroll-class-li-top{
        display: flex;
        justify-content: space-between;
        .checkroll-class-li-left{
          display: flex;
          .checkroll-class-li-top-img{
            img{
              width: 44px;
              height: 44px;
              margin: 15px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
</style>
