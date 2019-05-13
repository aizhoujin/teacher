<template>
  <div style="padding: 16px;height: 100%;background: #ffffff">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      style="background: #F7F8F8FF"
      @change="searchEvent"
      v-model="searchPerson">
    </el-input>
    <el-row style="margin: 16px 0px;font-size: 16px" v-if="!showPhone">通知对象</el-row>
    <el-collapse accordion v-model="activeNames">
      <el-collapse-item v-for="(item,index) in classPersonList" :key="index" id="linkmanList">
        <template slot="title">
          <div class="listTitle">
            <div class="list-portrait">{{item.classNo ? item.classNo + '班' : item.name}}</div>
            <div class="list-detail">
              <div>{{item.classNo ? item.classNo + '班' : item.name}}</div>
              <div class="list-detail-text">全班共{{item.applyList.length}}名同学</div>
            </div>
          </div>
        </template>
        <li v-if="!showPhone" class="class-detail">
          <div class="person-all">
            全选
          </div>
          <div class="person-check">
            <el-checkbox v-model="item.check" :checked="item.check" :key="item.id" class="person-check"
                         @change="checkAll(item.id)"></el-checkbox>
          </div>
        </li>
        <li v-if="item.applyList.length>0" v-for="(ite, ind) in item.applyList" :key="ind" class="class-detail">
          <div class="perosn-data">
            <div class="person-portrait">
              <img src="../assets/2.jpg" alt="">
            </div>
            <div class="person-name">
              {{ite.studentEntity ? ite.studentEntity.infoEntity.nickName: ''}}
              <!--{{ite.studentEntity.infoEntity.nickName}}-->
            </div>
          </div>
          <div class="person-check" v-if="!showPhone">
            <el-checkbox size="medium" v-model="ite.check" :key="ite.id" :checked="ite.check"
                         @change="checkAction(ite.id)"></el-checkbox>
          </div>
          <div class="person-check" v-if="showPhone">
            <i class="el-icon-phone"></i>
          </div>
        </li>

      </el-collapse-item>
    </el-collapse>
    <div style="height: 64px;"></div>
    <div class="person-footer" v-if="!showPhone">
      <el-button @click="$router.go(-1)">取消</el-button>
      <el-button type="primary" @click="selectPerson">确定</el-button>
    </div>
  </div>
</template>

<script>
  import {getClassPerson} from "../api/common";
  import {mapState} from 'vuex'

  export default {
    name: "person-list",
    data() {
      return {
        searchPerson: '',
        classPersonList: [],
        activeNames: []
      }
    },
    props: {
      showPhone: Boolean
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      // 获取班级列表数据
      getPersonData() {
        let obj = {
          teacherId: this.userInfo.userId
        }
        if (this.$store.state.person.classPersonList.length > 0) {
          this.classPersonList = this.$store.state.person.classPersonList;
        } else {
          this.$store.commit('loadChange', true);
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
        }

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
        let noticeNames = [];
        this.classPersonList.forEach((item, index) => {
          if (item.check) {
            classIds += (item.id + ',');
            noticeNames.push(item.name);
          } else {
            let classFlag = false;
            let listLi = item.applyList;
            for (let i = 0; i < listLi.length; i++) {
              if (listLi[i].check) {
                classFlag = true;
                personIds += (listLi[i].studentEntity.id + ',');
                noticeNames.push(listLi[i].studentEntity.infoEntity.realName);
              }
            }
            if (classFlag) {
              classIds += (item.id + ',');
            }
          }
        })
        this.$store.commit('classPersonListChange', this.classPersonList);
        this.$store.commit('classIdsChange', classIds.substring(0, classIds.length - 1));
        this.$store.commit('personIdsChange', personIds.substring(0, personIds.length - 1));
        this.$store.commit('noticeNamesChange', noticeNames);
        this.$router.go(-1);
      },

      // 搜索事件
      searchEvent() {

      }
    },
    mounted() {
      this.getPersonData();
    },
    created() {
    },
    watch: {
      showPhone(value, oldVal) {
      }
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
      overflow: hidden;
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
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    font-size: 14px;
    color: #717373FF;
    border-top: 0.5px solid #F2F2F2;
    .person-all {
      line-height: 50px;
    }
    .perosn-data {
      display: flex;
      line-height: 50px;
      .person-portrait {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 9px;
        background: #40D2B4;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
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
</style>
