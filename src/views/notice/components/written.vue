<template>
  <div>
    <div class="written">
      <input type="text" v-model="title" class="written-title" placeholder="标题">
    </div>
    <div class="addNotice" @click="addPerson">
      <div class="icon el-icon-plus"></div>
      <span v-if="classIds.length > 0">{{classIds}}</span>
      <span v-else>添加通知对象</span>
    </div>
    <div class="shipin" @click="shipin">点我录制视频</div>
    <div class="" @click="ting">停止</div>
    <div class="context">
      <textarea name="writtenContext" id="writtenContext" rows="35" placeholder="正文" v-model="context"></textarea>
    </div>
    <img :src="aaaa" alt="123123">
    {{aaaa}}
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getJdk} from '../../../api/common'

  export default {
    name: "written",
    data() {
      return {
        title: '',
        context: '',
        aaaa:'',
        bbbb:''
      }
    },
    computed: {
      ...mapState({
        classIds: state => state.person.classIds,
        personIds: state => state.person.personIds
      })
    },
    methods: {
      shipin() {
        // var _this = this;
        // wx.chooseImage({
        //   count: 1, // 默认9
        //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        //   success: function (res) {
        //     alert(res.localIds[0])
        //     var localIds = res.localIds;// 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        //     _this.aaaa = res.localIds[0];
        //   }
        // });
        wx.startRecord();
      },
      ting() {
        var _this = this;
        wx.stopRecord({
          success: function (res) {
            var localId = res.localId;
            console.log(res.localId);
            _this.bbbb = res.localId
          }
        });
      },
      addPerson() {
        this.$router.push({
          path: '/linkman',
        })
      }
    },
    created() {
      console.log(this.$store.state.person.classIds);
      getJdk().then(res => {
        console.log(123,res.data.data);
        let wxConfig = res.data.data;
        console.log(wxConfig.appId,wxConfig.timestamp,wxConfig.nonceStr,wxConfig.signature)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxConfig.appId, // 必填，公众号的唯一标识
          timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
          signature: wxConfig.signature,// 必填，签名
          jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表
        });

      })
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
</style>
