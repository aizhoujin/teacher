<template>
  <div style="padding: 16px;">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="searchPerson">
    </el-input>
    <el-row style="margin: 16px 0px;font-size: 16px">通知对象</el-row>
    <el-collapse accordion>
      <el-collapse-item v-for="(item,index) in classPersonList" :key="index" id="linkmanList">
        <template slot="title">
          <div class="listTitle">
            <div class="list-portrait">{{item.classNo}}</div>
            <div>
              <div>{{item.classNo}} 班</div>
              <div></div>
            </div>
          </div>
        </template>
        <li v-for="(ite, ind) in item.applyList" :key="ind">
          {{ite.studentEntity.infoEntity.realName}}
        </li>
      </el-collapse-item>
    </el-collapse>
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
        classPersonList: []
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.user.userInfo
      }),
    },
    methods: {
      getPersonData() {
        this.$store.commit('loadChange', true)
        console.log(this.userInfo);
        let obj = {
          teacherId: this.userInfo.userId
        }
        getClassPerson(obj).then(res => {
          this.$store.commit('loadChange', false);
          console.log(res.data.data);
          this.classPersonList = res.data.data;
        }).catch(err => {

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
    .list-portrait {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #40D2B4;
      text-align: center;
      color: #fff;
    }
  }

</style>
