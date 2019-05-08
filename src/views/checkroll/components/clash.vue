<template>
  <div>
    <div class="clash">
      <div class="clash-title">当前课程</div>
      <div class="clash-ui" v-for="(item,index) in newClash" :key="index">
        <div class="clash-li">
          <div class="clash-li-label">当前排课时间:</div>
          <div class="clash-li-value">{{item.beginTime}}</div>
        </div>
        <div class="clash-li">
          <div class="clash-li-label">当前班级:</div>
          <div class="clash-li-value" :class="{'clashActive': item.clashType == 0}">{{item.classEntity.name}}</div>
        </div>
        <div class="clash-li">
          <div class="clash-li-label">当前教室:</div>
          <div class="clash-li-value" :class="{'clashActive': item.clashType == 1}">{{item.classroomEntity.name}}</div>
        </div>
        <div class="clash-li">
          <div class="clash-li-label">当前老师:</div>
          <div class="clash-li-value" :class="{'clashActive': item.clashType == 2}">
            {{item.teacherEntity.infoEntity.realName}}
          </div>
        </div>
      </div>
    </div>

    <div class="clash">
      <div class="clash-title">冲突课程</div>
      <div class="clash-ui" v-for="(item,index) in oldClash" :key="index">
        <div class="clash-li">
          <div class="clash-li-label">当前排课时间:</div>
          <div class="clash-li-value">{{item.beginTime}}</div>
        </div>
        <div class="clash-li">
          <div class="clash-li-label">当前班级:</div>
          <div class="clash-li-value" :class="{'clashActive': item.clashType == 0}">{{item.classEntity.name}}</div>
        </div>
        <div class="clash-li">
          <div class="clash-li-label">当前教室:</div>
          <div class="clash-li-value" :class="{'clashActive': item.clashType == 1}">{{item.classroomEntity.name}}</div>
        </div>
        <div class="clash-li">
          <div class="clash-li-label">当前老师:</div>
          <div class="clash-li-value" :class="{'clashActive': item.clashType == 2}">
            {{item.teacherEntity.infoEntity.realName}}
          </div>
        </div>
      </div>
    </div>

    <div class="clash">
      <div class="clash-title">解决冲突</div>
      <div class="clash-ui">
        <el-radio-group v-model="radio">
          <el-radio label="覆盖">覆盖</el-radio>
        </el-radio-group>
      </div>
    </div>

    <div style="height: 64px;"></div>
    <div class="person-footer">
      <el-button type="primary">取消排课</el-button>
      <el-button type="primary">去上课点名</el-button>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import {mapState} from 'vuex';

  export default {
    name: "clash",
    data() {
      return {
        oldClash: [],
        newClash: [],
        radio: '覆盖'
      }
    },
    computed: {
      ...mapState({
        clashData: state => state.checkroll.clashData,
      })
    },
    mounted() {
      console.log(this.clashData)
      if (this.clashData.oldClash) {
        this.oldClash = this.clashData.oldClash;
        this.newClash = this.clashData.newClash;
      } else {
        Toast('冲突数据丢失，请重新排课');
        this.$router.push({path: '/temporary'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .clash {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-bottom: 10px solid #FAFAFA;
    .clash-title {
      height: 22px;
      margin: 0px 16px;
      padding: 15px 0px 0px 0px;
      font-weight: bold;
      color: #1F2423;
      font-size: 16px;
    }
    .clash-ui {
      margin: 15px 16px;
      .clash-li {
        width: 100%;
        display: flex;
        height: 40px;
        line-height: 40px;
        color: #464948;
        font-size: 14px;
        .clash-li-label {
          width: 100px;
        }
        .clash-li-value {
          margin-left: 30px;
        }
      }
    }
  }
  .person-footer {
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #ffffff;
    line-height: 64px;
    height: 64px;
    z-index: 3000;
    .el-button {
      width: 161px;
      height: 44px;
      font-size: 16px;
    }
  }

  .clashActive {
    color: #FE4A60;
  }
</style>
