<template>
  <div>
    <div class="chatList">
      <li class="chatList-li" @click="goChatDetail('瑾年')">
        <div class="chatlist-portrait">
          <el-badge :value="12" class="item chatList-badge">
            <img src="../../../assets/2.jpg" alt="">
          </el-badge>
        </div>
        <div class="chatList-text">
          <div class="chatList-text-top">
            <div class="chatList-name">瑾年</div>
            <div class="chatList-date">11月14日</div>
          </div>
          <div class="chatList-context">
            AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单
            方便、专业可靠、无限可能的数据可视化最佳实践。
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chat-list",
    data() {
      return {}
    },
    methods: {
      goChatDetail() {
        this.$router.push({path: '/index/chat/chatDetail', query: {'title': '瑾年'}})
      }
    }
  }
</script>

<style scoped lang="scss">
  .chatList {
    width: 100%;
    height: 100%;
    background: #fff;
    .chatList-li {
      width: 100%;
      height: 71px;
      display: flex;
      .chatlist-portrait {
        width: 70px;
        height: 70px;
        .chatList-badge {
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
      .chatList-text {
        width: calc(100% - 70px);
        height: 70px;
        border-bottom: 1px #DDDFE1 solid;
        .chatList-text-top {
          display: flex;
          padding-top: 14px;
          height: 22px;
          justify-content: space-between;
          padding-right: 14px;
          .chatList-name {
            color: #2A2C2F;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
          }
          .chatList-date {
            color: #A5A8AD;
            font-size: 11px;
            line-height: 22px;
          }
        }
        .chatList-context {
          margin-top: 5px;
          font-size: 12px;
          color: #7E7F85;
          width: calc(100% - 14px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
