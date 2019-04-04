<template>
  <div style="width: 100%">
    <!--<input type="file" style="/* visibility: hidden */" capture="camera" accept="video/*" name="" value="">-->
    <!--<div @click="chooseImage">点我选择图片</div>-->
    <!--<div @click="startRecord">点我开始录音</div>-->
    <!--<div @click="stopRecord">点我停止录音</div>-->
    <!--<div @click="playVoice">点我播放录音</div>-->
    <div class="funicon">
      <div v-for="(item, index) in funIcon" :key="index" class="funicon-icon">
        <img v-if="selectFunIco.indexOf(item.id) == -1" :src="item.icon" @click="funIconEvent(item.id)">
        <img v-else :src="item.iconActive" alt="">
      </div>
      <div style="height: 24px;width: 80px;text-align: center">
        <el-button size="mini" type="primary">发布</el-button>
      </div>
    </div>
    <div class="record">
      <div class="record-time">
        {{recordTime}} S
      </div>
      <div class="record-mian">
        <i class="el-icon-error"></i>
        <div class="record-mian-fun" @click="startRecord">
          <div class="con">
            <div class="percent-circle percent-circle-left">
              <div class="left-content"></div>
            </div>
            <div class="percent-circle percent-circle-right">
              <div class="right-content"></div>
            </div>
            <div class="text-circle">
              <img :src="recordImg" alt="">
            </div>
          </div>
        </div>
        <i class="el-icon-success" style="color: #40D2B4"></i>
      </div>
      <div class="record-text">
        {{recordText}}
      </div>

    </div>
  </div>
</template>

<script>
  import {getJdk} from '../api/common'

  var leftContent = document.getElementsByClassName(".left-content")[0];
  var rightContent = document.getElementsByClassName(".right-content")[0];
  var textCircle = document.getElementsByClassName(".text-circle")[0];

  //先是leftContent旋转角度从0增加到180度，
  //然后是rightContent旋转角度从0增加到180度
  var angle = 0;

  var leftContent = document.querySelector(".left-content");
  var rightContent = document.querySelector(".right-content");
  var textCircle = document.querySelector(".text-circle");

  //先是leftContent旋转角度从0增加到180度，
  //然后是rightContent旋转角度从0增加到180度
  // var angle = 0;
  //
  // var timerId = setInterval(function(){
  //   angle += 30;
  //   if(angle > 360){
  //     clearInterval(timerId);
  //   }else{
  //     if(angle > 180){
  //       rightContent.setAttribute('style', 'transform: rotate('+(angle-180)+'deg)');
  //     }else{
  //       leftContent.setAttribute('style', 'transform: rotate('+angle+'deg)');
  //     }
  //     setPercent(angle);
  //
  //   }
  // },500);
  //
  // function setPercent(angle){
  //   textCircle.innerHTML = parseInt(angle*100/360) +'%';
  // }


  export default {
    name: "jdk-function",
    data() {
      return {
        localIdRecord: null,
        funIcon: [
          {id: 1, icon: require('../assets/发布通知模块/语音_未被选择.png'), iconActive: require('../assets/发布通知模块/语音 _被选择.png')},
          {id: 2, icon: require('../assets/发布通知模块/图片_未被选择.png'), iconActive: require('../assets/发布通知模块/图片_被选择.png')},
          {id: 3, icon: require('../assets/发布通知模块/视频_未被选择.png'), iconActive: require('../assets/发布通知模块/视频_被选择.png')},
        ],
        selectFunIco: [],
        timeCircle: null,
        recordTime: 0,
        recordImg: require('../assets/发布通知模块/语音录入/点击录音.png'),
        recordText: '点击录音',
      }
    },
    methods: {
      // 画圆
      circle() {
        var angle = 0;
        var timeM = 0;
        this.timeCircle = setInterval(function () {
          if (angle >= 360) {
            clearInterval(this.timeCircle)
          } else {
            angle += 0.6;
            timeM += 1;
            if (timeM == 10){
              timeM = 0;
              this.recordTime++;
            }
            var leftContent = document.getElementsByClassName('left-content')[0];
            var rightContent = document.getElementsByClassName('right-content')[0];
            if (angle < 180) {
              rightContent.setAttribute('style', 'transform: rotate(' + angle + 'deg)');
            } else {
              leftContent.setAttribute('style', 'transform: rotate(' + (angle - 180) + 'deg)');
            }
          }
        }, 100)
      },


      // 选择图片
      chooseImage() {

      },

      // 开始录音
      startRecord() {
        wx.startRecord();
        this.circle();
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
      },

      funIconEvent(type) {
        if (type == 1) {
          // this.startRecord();
        }
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
          jsApiList: ['chooseImage', 'startRecord', 'stopRecord', 'playVoice'] // 必填，需要使用的JS接口列表
        });
      })
    }
  }
</script>

<style scoped lang="scss">
  .funicon {
    width: 100%;
    display: flex;
    height: 48px;
    justify-content: flex-end;
    line-height: 48px;
    .funicon-icon {
      width: 48px;
      text-align: center;
      img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
      }
    }
  }

  .record {
    width: 100%;
    height: 258px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .record-time, .record-text {
      height: 48px;
      line-height: 48px;
    }
    .record-mian {
      display: flex;
      justify-content: center;
      .record-mian-fun {
        width: 78px;
        height: 78px;
        border: 0.5px solid #EBEDED;
        border-radius: 50%;
        img {
          margin: 21px;
          width: 36px;
          height: 36px;
        }
      }
      i {
        font-size: 30px;
        margin: 0px 25px;
        line-height: 78px;
        color: #EBEDED;
      }
    }
  }

  .con {
    position: relative;
    display: inline-block;
    height: 70px;
    width: 70px;
    margin: 4px;
    border-radius: 50%;
    background: #40D2B4;
  }

  .percent-circle {
    position: absolute;
    height: 100%;
    overflow: hidden;
  }

  .percent-circle-right {
    right: 0;
    width: 35px;
  }

  .percent-circle-right .right-content {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transform-origin: left center;
    transform: rotate(0deg);
    background: #fff;
  }

  .percent-circle-left {
    width: 35px;
  }

  .percent-circle-left .left-content {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transform-origin: right center;
    transform: rotate(0deg);
    background: #fff;
  }

  .text-circle {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80%;
    left: 10%;
    top: 10%;
    border-radius: 100%;
    background: #fff;
    color: #fff;
  }


</style>
