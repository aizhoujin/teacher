<template>
  <div>
    <div class="addressList">
      <li class="addressList-li" @click="goChatDetail('瑾年')">
        <div class="addressList-portrait">
          <div class="addressList-badge">
            <img src="../../../assets/2.jpg" alt="">
          </div>
        </div>
        <div class="addressList-text">
          瑾年
        </div>
      </li>

    </div>
  </div>
</template>

<script>
  export default {
    name: "address-list",
    data() {
      return {}
    },
    methods: {
      goChatDetail() {
        this.$router.push({path: '/index/chat/chatDetail', query: {'title': '数学一班群'}})
      }
    }
  }
</script>

<style scoped lang="scss">
  .addressList {
    width: 100%;
    height: 100%;
    background: #fff;
    .addressList-li {
      width: 100%;
      height: 71px;
      display: flex;
      .addressList-portrait {
        width: 70px;
        height: 70px;
        .addressList-badge {
          width: 44px;
          height: 44px;
          margin: 16px;
          margin-right: 10px;
          img {
            width: 44px;
            height: 44px;
            border-radius: 8px;
          }
        }
      }
      .addressList-text {
        width: calc(100% - 70px);
        height: 70px;
        line-height: 70px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px #DDDFE1 solid;
      }
    }
  }
</style>
