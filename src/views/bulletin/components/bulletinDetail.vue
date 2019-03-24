<template>
  <div class="detail">
    <div class="detail-title">
      {{detail.title}}
    </div>
    <div class="detail-basic">
      <div>
        发布人：{{detail.createStaffEntity ? detail.createStaffEntity.infoEntity.realName : ''}}
      </div>
      <div>{{detail.createTime}}</div>
    </div>
    <div class="detail-text">
      {{detail.content}}
      <!--<img src="osspath" alt="">-->
      <!--<img :src="'http://biz.ngrok.eanfang.net:89/sys/api/oss/url?token=' + token + '&ossPath=test/456.png'" alt="">-->

      <!--<img src="http://api.xiaoxunbang.com/sys/api/oss/url?token=fcebec45-098d-443d-921e-fe7a8e26a07c&ossPath=test/222.png" alt="">-->
      <!--<img-->
      <!--src="http://api.xiaoxunbang.com/sys/api/oss/url?token=fcebec45-098d-443d-921e-fe7a8e26a07c&ossPath=test/222.png"-->
      <!--alt="">-->
    </div>
  </div>
</template>

<script>
  import {detailMy} from '../../../api/home'
  import axios from 'axios'

  export default {
    name: "bulletin-detail",
    data() {
      return {
        detail: {},
        osspath: null,
        token: null
      }
    },
    created() {
      let token = this.$store.state.user.userInfo.token;
      let id = this.$route.params.id;
      detailMy(token, id).then(res => {
        if (res.data.code == 200) {
          console.log(res.data.data)
          this.detail = res.data.data;
        }
      })
      this.token = this.$store.state.user.userInfo.token;
      // this.osspath = 'http://tea.ngrok.eanfang.net:89/sys/api/oss/url?token=' + this.$store.state.user.userInfo.token + '&ossPath=456.png'
      // this.osspath  = axios.get()
    }
  }
</script>

<style scoped>
  .detail-title {
    margin: 15px 15px 10px 15px;
    font-size: 16px;
    color: #1F2423;
    font-weight: bold;
    text-align: left;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 24px;
  }

  .detail-basic {
    display: flex;
    margin: 10px 15px;
    justify-content: space-between;
    color: #B5B6B6;
    font-size: 12px;
    line-height: 17px;
  }

  .detail {
    padding-bottom: 16px;
  }

  .detail-text {
    margin: 10px 15px;
    color: #464948;
    font-size: 14px;
    line-height: 21px;
  }
</style>
