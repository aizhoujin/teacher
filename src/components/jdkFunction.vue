<template>
  <div>
    <!--<input type="file" style="/* visibility: hidden */" capture="camera" accept="video/*" name="" value="">-->
    <div @click="chooseImage">点我选择图片</div>
    <div @click="startRecord">点我开始录音</div>
    <div @click="stopRecord">点我停止录音</div>
    <div @click="playVoice">点我播放录音</div>
  </div>
</template>

<script>
  import {getJdk} from '../api/common'

  export default {
    name: "jdk-function",
    data() {
      return {
        localIdRecord: null
      }
    },
    methods: {
      // 选择图片
      chooseImage() {

      },

      // 开始录音
      startRecord() {
        wx.startRecord();
      },

      // 结束录音
      stopRecord() {
        var _this = this;
        wx.stopRecord({
          success: function (res) {
            var localId = res.localId;
            _this.localIdRecord = res.localId;
          }
        });
      },

      // 播放录音
      playVoice() {
        var _this = this;
        wx.playVoice({
          localId: _this.localIdRecord // 需要播放的音频的本地ID，由stopRecord接口获得
        });
      }
    },
    mounted() {
      // 获取wx jdk
      getJdk().then(res => {
        return;
        let wxConfig = res.data.data;
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxConfig.appId, // 必填，公众号的唯一标识
          timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
          signature: wxConfig.signature,// 必填，签名
          jsApiList: ['chooseImage','startRecord','stopRecord','playVoice'] // 必填，需要使用的JS接口列表
        });
      })
    }
  }
</script>

<style scoped>

</style>
