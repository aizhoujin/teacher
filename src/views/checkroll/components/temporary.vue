<template>
  <div style="padding: 16px;height: 100%;background: #ffffff">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      style="background: #F7F8F8FF"
      @change="searchEvent"
      v-model="searchPerson">
    </el-input>
    <el-row style="margin: 16px 0px;font-size: 12px;color: #F75E70;">选择班级，进行快速排课</el-row>
    <div class="class-list">
      <li class="class-li" v-for="(item,index) in classPersonList" :key="index" @click="selectClass(item)">
        <div class="class-li-left">
          <div class="class-li-left-img">
            <img src="../../../assets/2.jpg" alt="">
          </div>
          <div class="class-li-left-conent">
            <div class="class-name">{{item.name}}</div>
            <div class="class-course">课程：{{item.courseEntity.name}}</div>
          </div>
        </div>
        <div class="class-right">
          <div>
            {{item.applyList.length}}
          </div>
        </div>
      </li>
    </div>
    <!--<div style="height: 64px;"></div>-->
    <!--<div class="person-footer">-->
    <!--<el-button @click="$router.go(-1)">取消</el-button>-->
    <!--<el-button type="primary" @click="selectPerson">确定</el-button>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {getClassPerson} from "../../../api/common";
  import {mapState} from 'vuex'

  export default {
    name: "temporary",
    data() {
      return {
        searchPerson: '',
        classPersonList: [],
        activeNames: []
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      // 获取班级列表数据
      getPersonData() {
        this.$store.commit('loadChange', true)
        let obj = {
          teacherId: this.userInfo.userId
        }
        getClassPerson(obj).then(res => {
          this.$store.commit('loadChange', false);
          let data = res.data.data;
          data.forEach((item, index) => {
            item.check = false;
            if (item.applyList.length > 0) {
              for (let i = 0; i < item.applyList.length; i++) {
                item.applyList[i].check = false;
                item.applyList[i].id = item.applyList[i].id.toString();
              }
            }
          })
          this.classPersonList = data;
        }).catch(err => {

        })
      },

      // 全选操作
      checkAll(checkId) {
        this.classPersonList.forEach((item, index) => {
          if (item.id == checkId) {
            item.applyList.forEach((ite, ind) => {
              ite.check = item.check;
            })
          }
        })
      },

      // 单选操作
      checkAction(checkId) {
        for (let i = 0; i < this.classPersonList.length; i++) {
          let listLi = this.classPersonList[i].applyList;
          let checkAllFlag = true;
          for (let j = 0; j < listLi.length; j++) {
            let appLi = listLi[j];
            if (appLi.check == false) {
              checkAllFlag = false;
            }
          }
          this.classPersonList[i].check = checkAllFlag;
        }
      },

      // 选择人员之后的操作
      selectPerson() {
        let classIds = '';
        let personIds = '';
        this.classPersonList.forEach((item, index) => {
          if (item.check) {
            classIds += (item.id + ',');
          } else {
            let classFlag = false;
            let listLi = item.applyList;
            for (let i = 0; i < listLi.length; i++) {
              if (listLi[i].check) {
                classFlag = true;
                personIds += (listLi[i].studentId + ',');
              }
            }
            if (classFlag) {
              classIds += (item.id + ',');
            }
          }
        })
        this.$store.commit('classIdsChange', classIds.substring(0, classIds.length - 1));
        this.$store.commit('personIdsChange', personIds.substring(0, personIds.length - 1));
        this.$router.go(-1);
      },

      // 搜索事件
      searchEvent() {

      },

      // 展开收起
      collapseChange() {
      },

      // 选择班级
      selectClass(data) {
        let selectData = data;
        selectData.assistantNames = (data.classSubjectEntity && data.classSubjectEntity.assistantNames) ? data.classSubjectEntity.assistantNames : '';
        selectData.teacherName = data.mainTeacherEntity.infoEntity.realName;
        this.$router.push({
          path: '/scheduling',
          query: selectData
        })
      }
    },
    mounted() {
      this.getPersonData();
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  .listTitle {
    display: flex;
    padding: 15px 0px;
    padding-right: -15px;
    .list-portrait {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #40D2B4;
      text-align: center;
      color: #fff;
    }
    .list-detail {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & div {
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        color: #464948FF;
      }
      .list-detail-text {
        font-size: 14px;
        color: #717373FF;
      }
    }
  }

  .class-detail {
    display: flex;
    justify-content: space-between;
    height: 50px;
    font-size: 14px;
    color: #717373FF;
    .perosn-data {
      display: flex;
      line-height: 50px;
      .person-portrait {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 9px;
        background: #40D2B4;
      }
    }
  }

  .person-check {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  .class-list {
    width: 100%;
    .class-li {
      display: flex;
      height: 74px;
      justify-content: space-between;
      border-bottom: 0.5px solid #F2F2F2;
      .class-li-left {
        display: flex;
        .class-li-left-img {
          width: 59px;
          img {
            width: 44px;
            height: 44px;
            margin: 15px;
            margin-left: 0px;
            border-radius: 50%;
          }
        }
      }
      .class-li-left-conent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .class-name {
          color: #464948;
          font-size: 16px;
          line-height: 22px;
          font-weight: bold;
        }
        .class-course {
          font-size: 14px;
          line-height: 20px;
          color: #717373;
        }
      }
      .class-right {
        line-height: 74px;
        div {
          width: 36px;
          height: 36px;
          margin: 19px 0px 19px 19px;
          text-align: center;
          line-height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(116, 235, 219, 1) 0%, rgba(64, 210, 180, 1) 100%);
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
</style>
