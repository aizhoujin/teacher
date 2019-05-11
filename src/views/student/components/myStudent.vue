<template>
  <div class="myStudent">
    <div class="search">
      <el-input type="text" v-model="searchVal" class="searchInput" placeholder="请输入学员姓名、电话进行搜索"
                suffix-icon="el-icon-search"></el-input>
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        状态<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="myStudent-list">
      <li class="myStudent-li" @click="$router.push({path: '/visit'})">
        <div class="li-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="li-detail">
          <div class="li-detail-name">瑾年</div>
          <div class="li-detail-number">123123123</div>
        </div>
        <div class="li-phone">
          <div>
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="li-action" style="color: #40D2B4">
          待回访
        </div>
      </li>
<li class="myStudent-li" @click="$router.push({path: '/visit'})">
        <div class="li-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="li-detail">
          <div class="li-detail-name">瑾年</div>
          <div class="li-detail-number">123123123</div>
        </div>
        <div class="li-phone">
          <div>
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="li-action" style="color: #40D2B4">
          待回访
        </div>
      </li>
<li class="myStudent-li" @click="$router.push({path: '/visit'})">
        <div class="li-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="li-detail">
          <div class="li-detail-name">瑾年</div>
          <div class="li-detail-number">123123123</div>
        </div>
        <div class="li-phone">
          <div>
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="li-action" style="color: #40D2B4">
          待回访
        </div>
      </li>
<li class="myStudent-li" @click="$router.push({path: '/visit'})">
        <div class="li-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="li-detail">
          <div class="li-detail-name">瑾年</div>
          <div class="li-detail-number">123123123</div>
        </div>
        <div class="li-phone">
          <div>
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="li-action" style="color: #40D2B4">
          待回访
        </div>
      </li>
<li class="myStudent-li" @click="$router.push({path: '/visit'})">
        <div class="li-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="li-detail">
          <div class="li-detail-name">瑾年</div>
          <div class="li-detail-number">123123123</div>
        </div>
        <div class="li-phone">
          <div>
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="li-action" style="color: #40D2B4">
          待回访
        </div>
      </li>
<li class="myStudent-li" @click="$router.push({path: '/visit'})">
        <div class="li-portrait">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="li-detail">
          <div class="li-detail-name">瑾年</div>
          <div class="li-detail-number">123123123</div>
        </div>
        <div class="li-phone">
          <div>
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="li-action" style="color: #40D2B4">
          待回访
        </div>
      </li>

    </div>
  </div>
</template>

<script>
  export default {
    name: "my-student",
    data() {
      return {
        searchVal: '',
        action: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .myStudent {
    width: calc(100% - 32px);
    height: 100%;
    margin: 0 auto;
    .search {
      display: flex;
      justify-content: space-between;
      margin: 15px 0px;
      .searchInput {
        width: calc(100% - 80px);
      }
      .el-dropdown-link {
        width: 60px;
        line-height: 32px;
      }
    }
    .myStudent-list {
      width: 100%;
      .myStudent-li {
        width: 100%;
        height: 32px;
        line-height: 32px;
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #F2F2F2;
        .li-portrait {
          width: 32px;
          height: 32px;
          margin-right: 10px;
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }
        .li-detail {
          width: calc(100% - 200px);
          .li-detail-name {
            font-size: 14px;
            line-height: 20px;
            color: #1F2423;
          }
          .li-detail-number {
            font-size: 12px;
            line-height: 12px;
            color: #717373;
          }
        }
        .li-phone {
          width: 70px;
          div {
            margin: 6px 0px;
            width: 24px;
            height: 24px;
            background: #40D2B4;
            border-radius: 50%;
            text-align: center;
            line-height: 24px;
            i {
              font-size: 16px;
              color: white;
            }
          }

        }
        .li-action {
          width: 70px;
          font-size: 14px;
          line-height: 32px;
        }
      }
    }
  }
</style>
