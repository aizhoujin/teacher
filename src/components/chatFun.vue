<template>
  <div style="width: 100%">
    <input hidden ref="videoEvent" type="file" style="/* visibility: hidden */" capture="camera" accept="video/*"
           name="videoEvent"
           value="" @change="videoChange($event)" id="videoEvent">
    <!--<div @click="chooseImage">点我选择图片</div>-->
    <!--<div @click="startRecord">点我开始录音</div>-->
    <!--<div @click="stopRecord">点我停止录音</div>-->
    <!--<div @click="playVoice">点我播放录音</div>-->
    <div class="funicon">
      <!--<div class="funicon-icon">-->
      <!--<img src="../assets/发布通知模块/键盘/default.png">-->
      <!--</div>-->
      <div class="funicon-list">
        <div v-for="(item, index) in funIcon" :key="index" class="funicon-icon" @click="funIconEvent(item.id)">
          <img v-if="selectFunIco.indexOf(item.id) == -1" :src="item.icon">
          <img v-else :src="item.iconActive" alt="">
        </div>
      </div>
      <div>
        <el-input type="text" v-model="text"></el-input>
      </div>
      <div style="height: 24px;width: 80px;text-align: center">
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="record" v-if="selectFunIco.indexOf(1) != -1">
      <div class="record-time">
        {{recordTime}} S
      </div>
      <div class="record-mian">
        <i class="el-icon-error" @click="recordOver(0)"></i>
        <div class="record-mian-fun" @click="recordEvent">
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
        <i class="el-icon-success" @click="recordOver(1)" style="color: #40D2B4"></i>
      </div>
      <div class="record-text">
        {{recordText}}
      </div>
    </div>
  </div>
</template>

<script>
  import {getJdk, getSts} from '../api/common';
  import axios from 'axios';
  import {base_baseUrl, baseUrl} from "../../static/config";

  export default {
    name: "chat-function",
    data() {
      return {
        localIdRecord: null,
        localIdsImg: [],
        localIdsRecord: [],
        videoValue: null,
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
        recordState: 1,
        angle: 0,
        timeM: 0,
        serverId: null,
        stsData: {},
        text: ''
      }
    },
    watch: {},
    methods: {
      videoChange(e) {
        console.log(e);
        var file = e.target.files[0];
        let storeAs = 'upload-file';
        getSts().then(res => {
          console.log(res.data.data);
          if (res.data.code == 200) {
            console.log(res.data.data);
            this.stsData = res.data.data;
            let result = res.data.data;
            let client = new OSS.Wrapper({
              accessKeyId: result.sts.accessKeyId,
              accessKeySecret: result.sts.accessKeySecret,
              stsToken: result.sts.securityToken,
              region: result.region,
              bucket: result.bucket
            })
            console.log(client)
            //storeAs表示上传的object name , file表示上传的文件
            let url = client.signatureUrl('upload-file');
            console.log(url)
            // client.list({
            //   'max-keys': 10
            // }).then(function (result) {
            //   console.log(result);
            // }).catch(function (err) {
            //   console.log(err);
            // });
            // client.multipartUpload(storeAs, file).then(function (result) {
            //   console.log(result);
            //
            //   let resdow = client.signatureUrl('test/download_file',{
            //     expires: 3600,
            //     response: {
            //       'content-disposition': 'attachment; filename="' + 'download_file' + '"'
            //     }
            //   })
            //
            //   console.log(resdow);
            //   window.location = resdow;
            // }).catch(function (err) {
            //   console.log(err);
            // });

          }
        })

        // OSS.urllib.request(base_baseUrl + '/sys/api/oss/sts', {method: 'GET'}, (err, response) => {
        //   console.log(err, response);
        //   if (err) {
        //     return alert(err);
        //   }
        //   try {
        //     // result = JSON.parse(response);
        //   } catch (e) {
        //     console.log(e)
        //     return alert('parse sts response info error: ' + e.message);
        //   }
        //   console.log(result)
        // })

        // const uploadFileClient = new OSS({
        //   region: this.stsData.region,
        //   accessKeyId: this.stsData.sts.accessKeyId,
        //   accessKeySecret: this.stsData.sts.accessKeySecret,
        //   stsToken: this.stsData.sts.securityToken,
        //   bucket: this.stsData.bucket,
        // });
        // console.log(uploadFileClient);
        // uploadFileClient.multipartUpload('aaa.mp4', formdata).then(function (result) {
        //   console.log(result);
        // }).catch(function (err) {
        //   console.log(err);
        // });

        // this.doUpload(formdata);
      },
      doUpload(formdata) {
        let _this = this;
        // axios.get('/teacher/doUpload', formdata).then(res => {
        //   if (res.data.success) {
        //     console.log('上传成功');
        //   } else {
        //     console.log('上传失败');
        //   }
        // }).catch(err => {
        //   console.log(err);
        // })
        console.log(this.stsData)

        // uploadFileClient
        //   .put('eee', formdata)
        //   .then((res) => {
        //     console.log(res)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
      },
      recordOver(type) {
        if (this.localIdRecord == null) {
          return;
        }
        let _this = this;
        this.recordTime = 0;
        this.recordImg = require('../assets/发布通知模块/语音录入/点击录音.png');
        this.recordText = '点击录音';
        this.recordState = 1;
        if (type == 1) {
          this.localIdsRecord.push(this.localIdRecord);
          this.$store.commit('localIdsRecordChange', this.localIdsRecord);
          // wx.uploadVoice({
          //   localId: _this.localIdRecord, // 需要上传的音频的本地ID，由stopRecord接口获得
          //   isShowProgressTips: 1, // 默认为1，显示进度提示
          //   success: function (res) {
          //     _this.serverId = res.serverId; // 返回音频的服务器端ID
          //     _this.downloadVoice();
          //   }
          // });
        }
        this.localIdRecord = null;
      },
      downloadVoice() {
        let _this = this;
        wx.downloadVoice({
          serverId: _this.serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function (res) {
            console.log(res);
            var localId = res.localId; // 返回音频的本地ID
          }
        });
      },


      // 画圆
      circle(empty) {
        let _this = this;
        if (!empty) {
          this.angle = 0;
          this.timeM = 0;
          this.recordTime = 0;
        }
        var leftContent = document.getElementsByClassName('left-content')[0];
        var rightContent = document.getElementsByClassName('right-content')[0];
        leftContent.style.transform = 'rotate(0deg)';
        rightContent.style.transform = 'rotate(0deg)';
        clearInterval(_this.timeCircle);
        this.timeCircle = setInterval(function () {
          if (_this.angle >= 360) {
            clearInterval(_this.timeCircle)
          } else {
            _this.angle += 0.6;
            _this.timeM += 1;
            if (_this.timeM == 10) {
              _this.timeM = 0;
              _this.recordTime++;
            }
            if (_this.angle < 180) {
              rightContent.setAttribute('style', 'transform: rotate(' + _this.angle + 'deg)');
            } else {
              leftContent.setAttribute('style', 'transform: rotate(' + (_this.angle - 180) + 'deg)');
            }
          }
        }, 100)
      },


      // 选择图片
      chooseImage() {
        let _this = this;
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            _this.localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            _this.$store.commit('localIdsImgChange', res.localIds);
          }
        });
      },

      // 开始录音
      startRecord() {
        wx.startRecord();
        this.circle();
      },

      // 结束录音
      stopRecord() {
        var _this = this;
        clearInterval(_this.timeCircle);
        wx.stopRecord({
          success: function (res) {
            var localId = res.localId;
            _this.localIdRecord = res.localId;
            console.log(res);
          }
        });
      },

      // 监听录音是否播放完毕
      voicePlayEnd() {
        let _this = this;
        wx.onVoicePlayEnd({
          success: function (res) {
            var localId = res.localId;// 返回音频的本地ID
            clearInterval(_this.timeCircle);
            _this.recordImg = require('../assets/发布通知模块/语音录入/点击播放.png');
            _this.recordText = '点击播放';
            _this.recordState = 3;
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

      // 停止播放录音
      stopVoice() {
        var _this = this;
        wx.stopVoice({
          localId: _this.localIdRecord // 需要停止的音频的本地ID，由stopRecord接口获得
        });
      },

      // 录音一套
      recordEvent() {
        let _this = this;
        if (this.recordState == 1) {
          this.startRecord();
          this.recordImg = require('../assets/发布通知模块/语音录入/录音中.png');
          this.recordText = '点击暂停';
          this.recordState = 2;
        } else if (this.recordState == 2) {
          this.stopRecord();
          this.recordImg = require('../assets/发布通知模块/语音录入/点击播放.png');
          this.recordText = '点击播放';
          this.recordState = 3;
        } else if (this.recordState == 3) {
          this.voicePlayEnd();
          this.playVoice();
          this.recordImg = require('../assets/发布通知模块/语音录入/播放中.png')
          this.recordState = 4;
          this.recordText = '播放中';
          this.circle();
        } else if (this.recordState == 4) {
          clearInterval(_this.timeCircle);
          this.stopVoice();
          this.recordImg = require('../assets/发布通知模块/语音录入/点击播放.png');
          this.recordText = '点击播放';
          this.recordState = 3;
        }
        // else if (this.recordState == 5) {
        //   this.playVoice();
        //   this.recordImg = require('../assets/发布通知模块/语音录入/播放中.png')
        //   this.recordState = 4;
        //   this.recordText = '播放中';
        //   this.circle(true);
        // }
      },

      // 功能按钮
      funIconEvent(type) {
        console.log(this.selectFunIco.indexOf(type));
        if (type == 1) {
          // this.startRecord();
          if (this.selectFunIco.indexOf(1) == -1) {
            this.selectFunIco.push(1);
          } else {
            this.selectFunIco.splice(this.selectFunIco.indexOf(type), 1)
          }
        } else if (type == 2) {
          this.chooseImage();
        } else if (type == 3) {
          this.$refs.videoEvent.click();
        }
      },

      // getSts
      getStsEvent() {
        getSts().then(res => {
          console.log(res);
          if (res.data.code == 200) {
            console.log(res.data.data);
            this.stsData = res.data.data;
          }
        })
      }
    },
    mounted() {
      // this.getStsEvent();
      this.videoValue = 0;
      setInterval(function () {
        this.videoValue++;
      }, 500)
      // 获取wx jdk
      getJdk().then(res => {
        let wxConfig = res.data.data;
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: wxConfig.appId, // 必填，公众号的唯一标识
          timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
          nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
          signature: wxConfig.signature,// 必填，签名
          jsApiList: ['chooseImage', 'startRecord', 'stopRecord', 'playVoice', 'pauseVoice', 'onVoicePlayEnd', 'stopVoice'] // 必填，需要使用的JS接口列表
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
    justify-content: space-between;
    line-height: 48px;
    .funicon-list {
      display: flex;
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
  }

  .record {
    width: 100%;
    height: 258px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
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
    height: 110%;
    width: 110%;
    left: -5%;
    top: -5%;
    border: 0.5px solid #EBEDED;
    border-radius: 100%;
    background: #fff;
    color: #fff;
  }


</style>
