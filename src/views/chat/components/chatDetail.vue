<template>
  <div>
    <div class="chatDateil">
      <li class="chatDateil-li">
        <div class="chatDateil-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="chatDateil-text">
          AntV是什么?
        </div>
      </li>
      <li class="chatDateil-li-my">
        <div class="chatDateil-text">
          AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
          方便、专业可靠、无限可能的数据可视化最佳实践。
        </div>
        <div class="chatDateil-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
      </li>


      <li class="chatDateil-li">
        <div class="chatDateil-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="chatDateil-text">
          AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
          方便、专业可靠、无限可能的数据可视化最佳实践。
        </div>
      </li>
      <li class="chatDateil-li-my">
        <div class="chatDateil-text">
          AntV是什么?
        </div>
        <div class="chatDateil-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
      </li>
    </div>

    <div class="chatFun">
      <chatFun></chatFun>
    </div>
  </div>
</template>

<script>
  import chatFun from '../../../components/chatFun';

  export default {
    name: "chat-detail",
    components: {
      chatFun
    },
    data() {
      return {
        title: this.$route.query.title,
      }
    },
    mounted() {
      if (this.title) {
        window.document.title = this.title;
      }
    }
  }
</script>

<style scoped lang="scss">
  .chatDateil {
    width: calc(100% - 14px);
    margin: 0 auto;
    height: 100%;
    background: #F9F9F9;
    .chatDateil-li {
      width: 100%;
      display: flex;
      justify-content: left;
      padding: 7px 0px;
      .chatDateil-portrait {
        width: 44px;
        height: 44px;
        margin: 6px;
        img {
          width: 44px;
          height: 44px;
          border-radius: 8px;
        }
      }
      .chatDateil-text {
        vertical-align: middle;
        position: relative;
        max-width: calc(100% - 150px);
        min-height: 22px;
        background: #fff;
        border-radius: 5px;
        margin: 6px 0px;
        margin-left: 10px;
        color: #2A2C2F;
        padding: 11px;
        font-size: 16px;
        font-weight: 500;
      }
      .chatDateil-text::after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-right-color: #fff;
        top: 16px;
        left: -14px;
      }
    }
    .chatDateil-li-my {
      width: 100%;
      display: flex;
      padding: 7px 0px;
      justify-content: flex-end;
      .chatDateil-portrait {
        width: 44px;
        height: 44px;
        margin: 6px;
        img {
          width: 44px;
          height: 44px;
          border-radius: 8px;
        }
      }
      .chatDateil-text {
        position: relative;
        max-width: calc(100% - 150px);
        min-height: 22px;
        background: #40D2B4;
        border-radius: 5px;
        margin: 6px 0px;
        margin-right: 10px;
        color: #fff;
        padding: 11px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
      }
      .chatDateil-text::after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-left-color: #40D2B4;
        top: 16px;
        right: -14px;
      }
    }
  }

  .chatFun {
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
</style>
