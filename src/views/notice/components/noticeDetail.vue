<template>
  <div class="noticeDetail">
    <!-- 通知详情 -->
    <div class="detail-title">
      {{detail.title}}
    </div>
    <div class="detail-content">
      {{detail.content}}
    </div>
  </div>
</template>

<script>
  import {noticeDetail} from "../../../api/notice";

  export default {
    name: "notice-detail",
    data() {
      return {
        detail: {},
        classList: []
      }
    },
    methods: {
      getNoticeDetail() {
        let token = this.$store.state.user.userInfo.token;
        let id = this.$route.params.id;
        this.classList = [];
        noticeDetail(token, id).then(res => {
          if (res.data.code == 200) {
            this.detail = res.data.data;
            let personList = res.data.data.inform2userList;
            let empty = [];
            if (personList.length > 0) {
              personList.forEach((item, index) => {
                if (empty.indexOf(item.classId) == -1) {
                  let obj = {
                    classId: item.classId,
                    className: item.mainClassEntity.name,
                    child: [],
                  };
                  obj.child.push(item);
                  this.classList.push(obj);
                } else {
                  let ind = empty.indexOf(item.classId);
                  this.classList[ind].child.push(item)
                }
              })
            }
          }
        })
      }
    },
    created() {
      this.getNoticeDetail();
    }
  }
</script>

<style scoped lang="scss">
  .noticeDetail {
    width: calc(100% - 32px);
    margin: 0 auto;
  }

  .detail-title {
    margin: 15px 0px 10px 0px;
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

  .detail-content {

  }
</style>
