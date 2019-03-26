<template>
  <div style="padding: 16px;">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="searchPerson">
    </el-input>
    <el-row style="margin: 16px 0px;font-weight: bold;">通知对象</el-row>
    <el-collapse accordion>
      <el-collapse-item v-for="(item,index) in classPersonList" :key="index">
        <template slot="title">
          {{item.name}}
        </template>
        <li v-for="(ite, ind) in item.applyList" :key="index">
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
        console.log(this.userInfo);
        let obj = {
          teacherId: this.userInfo.userId
        }
        getClassPerson(obj).then(res => {
          console.log(res.data.data);
          this.classPersonList = res.data.data;
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

<style scoped>

</style>
