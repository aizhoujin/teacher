<template>
  <div>
    <!-- 发布通知页面 -->
    <div class="written">
      <input type="text" v-model="title" class="written-title" placeholder="标题">
    </div>
    <div class="addNotice" @click="addPerson">
      <div class="icon el-icon-plus"></div>
      <span v-if="classIds.length > 0">{{classIds}}</span>
      <span v-else>添加通知对象</span>
    </div>
    <div class="jdkFun">
      <jdkFun></jdkFun>
    </div>
  </div>
</template>

<script>
  import jdkFun from '../../../components/jdkFunction'
  import {mapState} from 'vuex'
  import {getJdk} from '../../../api/common'

  export default {
    name: "written",
    components: {
      jdkFun
    },
    data() {
      return {
        title: '',
        context: '',
      }
    },
    computed: {
      ...mapState({
        classIds: state => state.person.classIds,
        personIds: state => state.person.personIds
      })
    },
    methods: {
      addPerson() {
        this.$router.push({
          path: '/linkman',
        })
      }
    },
    created() {
      console.log(this.$store.state.person.classIds);
    }
  }
</script>

<style scoped lang="scss">
  .written {
    width: 92%;
    margin: 15px auto;
    height: 100%;
    & .written-title {
      width: 100%;
      border: 0 none !important;
      outline: none;
      font-size: 16px;
      background: none;
      padding: 4px 2px;
    }
  }

  .addNotice {
    width: 92%;
    display: flex;
    margin: 15px auto;
    & .icon {
      width: 20px;
      height: 20px;
      background: #40d2b4;
      color: #fff;
      border-radius: 2px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
    & span {
      color: #B5B6B6;
      font-size: 14px;
      line-height: 20px;
      text-indent: 5px;
    }
  }

  .context {
    width: 92%;
    margin: 15px auto;
    & #writtenContext {
      width: 100%;
      border: 0 none !important;
      outline: none;
      font-size: 14px;
    }
  }
  .jdkFun{
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
</style>
