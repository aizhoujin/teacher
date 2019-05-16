<template>
  <div>
    <div class="call-data">
      <div class="call-data-top">
        <div class="call-data-img">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="call-data-conent">
          <div class="call-name">{{}}</div>
        </div>
      </div>
      <div class="call-data-bottom">
        <div><i class="el-icon-time" style="margin-right: 10px"></i>老师: {{}}</div>
        <div><i class="el-icon-location" style="margin-right: 10px"></i>助教: {{}}</div>
      </div>
    </div>
    <div class="call-search">
      <el-input type="text" suffix-icon="el-icon-search"></el-input>
    </div>
    <div class="call-title">
      <div class="call-title-text">
        <div>班级学员</div>
      </div>
    </div>
    <div class="call-list">
      <el-table
        :data="personList"
        :max-height="tableHeight"
        style="width: 100%">
        <el-table-column
          label="班级学员">
          <template slot-scope="scope">
            <div class="person">
              <div class="portrait">
                <img src="../../../assets/2.jpg" alt="">
              </div>
              <div class="name">{{scope.row.studentEntity.infoEntity.realName}}</div>
            </div>
          </template>

        </el-table-column>
        <el-table-column
          width="75">
          <template slot="header" slot-scope="scope">
            <el-checkbox v-model="checkAll">全选</el-checkbox>
          </template>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.isCq">签到</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          label="缺勤原因">
          <template slot-scope="scope">
            <el-select :disabled="scope.row.isCq" size="mini" v-model="scope.row.absenteeismCause" placeholder="请选择">
              <el-option
                v-for="item in absenteeismCause"
                :key="item.cValue"
                :label="item.cKey"
                :value="item.cValue">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          min-width="40"
          align="center"
          label="余课">
          <template slot-scope="scope">
            {{scope.row.remainCount}}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          min-width="40"
          label="缺勤">
        </el-table-column>
      </el-table>
    </div>
    <div class="call-title">
      <div class="call-title-text">
        <div>课堂备注</div>
      </div>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 10}"
      placeholder="在这里输入回访内容"
      v-model="content">
    </el-input>
    <div style="height: 64px;"></div>
    <div class="app-footer">
      <el-button type="primary" @click="beginAttend">开始上课</el-button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {getcheckPersonList} from '../../../api/timeTable';

  export default {
    name: "checkroll",
    data() {
      return {
        personList: [],
        absenteeismCause: [],
        checkAll: true,
        content: '',
        tableHeight: 603,
      }
    },
    computed: {
      ...mapState({
        callData: state => state.checkroll.callData
      })
    },
    methods: {
      // 获取学员列表
      getPersonList() {
        let obj = {
          classId: "1125233822854545408"
        };
        getcheckPersonList(obj).then(res => {
          if (res.data.code == 200 && res.data.data.list) {
            this.personList = res.data.data.list;
            this.personList.forEach((item => {
              // item.isCq = true;
              item.absenteeismCause = '';
            }))
          }
        })
      },

      // 开始上课
      beginAttend() {

      }
    },
    mounted() {
      this.tableHeight = document.documentElement.clientHeight - 400;
      this.getPersonList();
      window.localStorage.getItem('classify') ? this.absenteeismCause = JSON.parse(window.localStorage.getItem('classify')).absenteeismCause : [];
    }
  }
</script>

<style scoped lang="scss">
  .call-data {
    width: 100%;
    height: 114px;
    border-radius: 8px;
    background: linear-gradient(315deg, rgba(255, 231, 141, 1) 0%, rgba(255, 138, 72, 1) 100%);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
    .call-data-top {
      width: 100%;
      display: flex;
      padding: 18px 0px 14px 0px;
      .call-data-img {
        img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin: 0px 23px 0px 27px;
        }
      }
      .call-data-conent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .call-name {
          font-size: 20px;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 25px;
        }
        .call-time {
          color: #FFFFFF;
          line-height: 17px;
          font-size: 12px;
        }
      }
    }
    .call-data-bottom {
      display: flex;
      color: #464948;
      font-size: 14px;
      div {
        width: 45%;
        text-indent: 20px;
        color: #FFFFFF;
        font-size: 14px;
      }
    }
  }

  .call-search {
    margin: 15px 16px;
    height: 32px;
  }

  .call-title {
    position: relative;
    margin: 15px 24px;
    height: 32px;
    .call-title-text {
      position: absolute;
      transform: skewX(-30deg);
      width: 105px;
      height: 32px;
      line-height: 32px;
      background: linear-gradient(315deg, rgba(79, 136, 246, 1) 0%, rgba(29, 103, 212, 1) 100%);
      border-radius: 4px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      div {
        position: absolute;
        transform: skewX(30deg);
        left: 0px;
        top: 0px;
        width: 100%;
        text-align: center;
      }
    }
  }

  .person {
    display: flex;
    .portrait {
      width: 32px;
      height: 32px;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    .name {
      line-height: 32px;
      margin-left: 5px;
      color: #464948;
      font-size: 14px;
      width: 60px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .call-list {
    & .el-input__inner {
      padding: 0px 10px !important;
    }
  }
</style>
