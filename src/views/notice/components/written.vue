<template>
  <div>
    <!-- 发布通知页面 -->
    <div class="written">
      <input type="text" v-model="noticeText.title" @change="changeNoticeText" class="written-title" placeholder="标题">
    </div>
    <div class="addNotice" @click="addPerson">
      <div class="icon el-icon-plus"></div>
      <div v-if="classIds.length > 0" class="noticeList">
        <div v-for="item in noticeNames" class="noticeName">{{item}}</div>
      </div>
      <div class="noticeList" v-else>添加通知对象</div>
    </div>
    <div class="recordList">
      <li v-for="item in localIdsRecord">
        {{item}}
      </li>
    </div>
    <div class="localIdsImgList">
      <li v-for="item in localIdsImg">
        <img :src="item" alt="">
      </li>
    </div>
    <div class="context">
      <el-input
        type="textarea"
        style="border: none;"
        :rows="5"
        :autosize="{ minRows: 10}"
        placeholder="正文"
        @change="changeNoticeText"
        v-model="noticeText.content">
      </el-input>
    </div>

    <div class="jdkFun">
      <jdkFun :funType="quertType"></jdkFun>
    </div>
  </div>
</template>

<script>
  import jdkFun from '../../../components/jdkFunction'
  import {mapState} from 'vuex'
  import {getJdk} from '../../../api/common';
  import {MessageBox} from 'mint-ui'

  export default {
    name: "written",
    components: {
      jdkFun
    },
    data() {
      return {
        quertType: this.$route.query.type,
        noticeText: {
          title: this.$store.state.person.noticeTiceText.title,
          content: this.$store.state.person.noticeTiceText.content,
        },
      }
    },
    computed: {
      ...mapState({
        classIds: state => state.person.classIds,
        personIds: state => state.person.personIds,
        noticeNames: state => state.person.noticeNames,
        localIdsRecord: state => state.fun.localIdsRecord,
        localIdsImg: state => state.fun.localIdsImg
      })
    },
    methods: {
      // 添加通知对象
      addPerson() {
        this.$router.push({
          path: '/linkman',
        })
      },
      changeNoticeText() {
        this.$store.commit('noticeTiceTextChange', this.noticeText)
      }
    },
    mounted() {
    },
    created() {
    },
    // 导航离开该组件的对应路由时调用
    beforeRouteLeave(to, from, next) {
      if (to.path == '/linkman') {
        next();
      } else {
        MessageBox.confirm('离开当前页面后，将丢失现在已经编辑好的所有通知内容，确定要返回主页吗?').then(action => {
          this.$store.commit('clearState')
          next();
        });
      }
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

  .context {
    border: none;
    margin: 10px auto;
    & input {
      border: none !important;
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
    .noticeList {
      color: #B5B6B6;
      font-size: 14px;
      line-height: 20px;
      text-indent: 5px;
      width: calc(100% - 50px);
      margin-left: 5px;
      flex-wrap: nowrap;
      overflow-x: auto;
      /*text-overflow: ellipsis;*/
      white-space: nowrap;
    }

    .noticeName {
      display: inline-block;
      color: #40D2B4;
      text-align: center;
      padding: 1px;
      border: 1px solid #40D2B4;
      font-size: 12px;
      border-radius: 2px;
      margin: 0px 5px;
      height: 17px;
      line-height: 17px;
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

  .jdkFun {
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
  }

  .localIdsImgList {
    width: 92%;
    margin: 15px auto;
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
    li {
      width: 33.3%;
      height: 100px;
      margin-bottom: 5px;
      overflow: hidden;
      text-align: center;
      img {
        width: 100px;
        /*max-height: 100px;*/
        overflow-y: auto;
      }
    }
  }
</style>
