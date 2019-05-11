<template>
  <div>
    <div class="groupChat">
      <li class="groupChat-li" @click="goChatDetail('数学一班群')">
        <div class="groupChat-portrait">
          <el-badge :value="12" class="item groupChat-badge">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
            <img src="../../../assets/2.jpg" alt="">
          </el-badge>
        </div>
        <div class="groupChat-text">
          <div class="groupChat-text-top">
            <div class="groupChat-name">数学一班群</div>
            <div class="groupChat-date">11月14日</div>
          </div>
          <div class="groupChat-context">
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
    name: "groupchat-list",
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
  .groupChat {
    width: 100%;
    height: 100%;
    background: #fff;
    .groupChat-li {
      width: 100%;
      height: 71px;
      display: flex;
      .groupChat-portrait {
        width: 70px;
        height: 70px;
        .groupChat-badge {
          width: 44px;
          height: 44px;
          margin: 16px;
          margin-right: 10px;
          background: #E3E8EF;
          border-radius: 8px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: space-around;
          img {
            width: 10px;
            height: 10px;
            margin: 1px;
          }
        }
      }
      .groupChat-text {
        width: calc(100% - 70px);
        height: 70px;
        border-bottom: 1px #DDDFE1 solid;
        .groupChat-text-top {
          display: flex;
          padding-top: 14px;
          height: 22px;
          justify-content: space-between;
          padding-right: 14px;
          .groupChat-name {
            color: #2A2C2F;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
          }
          .groupChat-date {
            color: #A5A8AD;
            font-size: 11px;
            line-height: 22px;
          }
        }
        .groupChat-context {
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
