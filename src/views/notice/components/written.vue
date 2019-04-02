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
    <div class="context">
      <textarea name="writtenContext" id="writtenContext" rows="35" placeholder="正文" v-model="context"></textarea>
    </div>

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
        alert(1);
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
        // res.data = {"code":200,"data":{"appId":"wx02851d92795b0639","nonceStr":"gSb8JAyCOsUynFBJ","signature":"247e973fc85fad8c711ea1c3431b8a4ccddcbde3","timestamp":1554135644,"url":"http:\/\/tea.wechat.xiaoxunbang.com\/"},"msg":"\u8BF7\u6C42\u6210\u529F"}
        let wxConfig = res.data.data;
        console.log(wxConfig.appId,wxConfig.timestamp,wxConfig.nonceStr,wxConfig.signature)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxConfig.appId, // 必填，公众号的唯一标识
          timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
          signature: wxConfig.signature,// 必填，签名
          jsApiList: [] // 必填，需要使用的JS接口列表
        });
        // wx.getLocation({
        //   type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        //   success: function (res) {
        //     var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        //     var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        //     var speed = res.speed; // 速度，以米/每秒计
        //     var accuracy = res.accuracy; // 位置精度
        //     console.log(res)
        //   }
        // });
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
