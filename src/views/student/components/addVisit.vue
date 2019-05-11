<template>
  <div style="padding: 16px;height: 100%;background: #ffffff">
    <div class="class-data">
      <div class="class-data-top">
        <div class="class-data-img">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="class-data-conent">
          <div class="class-name">瑾年</div>
          <div class="class-time">123123123</div>
        </div>
      </div>
      <div class="class-data-bottom">
        <div>意向级别: <i class="iconfont icon-tubiaozhizuomoban" style="color: #E6A619">高级</i></div>
        <div>跟进状态: <span style="color:#9013FE;">正在跟进</span></div>
      </div>
    </div>
    <div class="scheduling-data">
      <el-form-item label="沟通结果">
        <el-radio-group v-model="ruleForm.clash" style="padding-left: 15px;">
          <el-radio :label="1">检测</el-radio>
          <el-radio :label="0">跳过</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form :model="ruleForm"
               inline-message
               :rules="rules"
               ref="ruleForm"
               label-position="left"
               label-width="100px" class="demo-ruleForm">
        <el-form-item label="回访方式" prop="class">
          <el-select v-model="ruleForm.class" placeholder="请选择期望年级">
            <el-option v-for="(item,index) in subjectList" :key="index" :label="item.courseEntity.name"
                       :value="item.courseId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="意向级别" prop="class">
          <el-select v-model="ruleForm.class" placeholder="请选择期望年级">
            <el-option v-for="(item,index) in subjectList" :key="index" :label="item.courseEntity.name"
                       :value="item.courseId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跟进状态" prop="class">
          <el-select v-model="ruleForm.class" placeholder="请选择期望年级">
            <el-option v-for="(item,index) in subjectList" :key="index" :label="item.courseEntity.name"
                       :value="item.courseId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="本次回访时间" prop="beginTime">
          <div @click="openPicker(1)" class="dateValue" style="width: 100%;height: 100%;min-height: 32px;"
               placeholder="请选择开始时间">{{
            ruleForm.beginTime |
            formatDate}}
          </div>
          <mt-datetime-picker
            ref="begin"
            v-model="picker1"
            type="datetime"
            @confirm="handleConfirm('begin')">
          </mt-datetime-picker>
        </el-form-item>
        <el-form-item label="下次回访时间" prop="beginTime">
          <div @click="openPicker(1)" class="dateValue" style="width: 100%;height: 100%;min-height: 32px;"
               placeholder="请选择开始时间">{{
            ruleForm.beginTime |
            formatDate}}
          </div>
          <mt-datetime-picker
            ref="begin"
            v-model="picker1"
            type="datetime"
            @confirm="handleConfirm('begin')">
          </mt-datetime-picker>
        </el-form-item>
        <el-form-item label-position="top" label="回访内容" style="border-bottom: none !important;">
        </el-form-item>
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 10}"
          placeholder="在这里输入回访内容"
          v-model="ruleForm.content">
        </el-input>
      </el-form>
    </div>
    <div style="height: 64px;"></div>
    <div class="person-footer">
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';
  import {subjectSelectorByClass, getClassRoomList, createByPlan} from '../../../api/timeTable'

  export default {
    name: "add-visit",
    data() {
      return {
        classData: this.$route.query,
        subjectList: [],
        classRoomlist: [],
        ruleForm: {
          class: '',
          beginTime: null,
          endTime: null,
          duration: '',
          clash: 1,
          classroomId: '',
          content: ''
        },
        rules: {
          class: [
            {required: true, message: '请选择科目', trigger: 'change'}
          ],
          beginTime: [
            {required: true, message: '请选择开始时间', trigger: 'change'}
          ],
          date2: [
            {required: true, message: '请选结束时间', trigger: 'change'}
          ],
          duration: [{
            required: true, message: '请选择课程时长', trigger: 'change'
          }],
          classroomId: [{
            required: true, message: '请选择教室', trigger: 'change'
          }]
        },
        picker1: null,
        durationTimeList: [
          {label: '45分钟', value: 45},
          {label: '60分钟', value: 60},
          {label: '75分钟', value: 75},
        ]
      }
    },
    methods: {
      // 获取班级科目列表
      getClassSubject() {
        let obj = {
          classId: this.classData.id
        };
        this.subjectList = [];
        subjectSelectorByClass(obj).then(res => {
          if (res.data.code == 200 && res.data.data.list) {
            this.subjectList = res.data.data.list;
          }
        })
      },

      // 获取教室列表
      getClassRoom() {
        this.classRoomlist = [];
        let obj = {
          "equals": {
            "companyId": this.$store.state.user.userInfo.company.companyId
          },
          "like": {
            "name": "教室"
          }
        }
        getClassRoomList(obj).then(res => {
          if (res.data.code == 200 && res.data.data.list) {
            this.classRoomlist = res.data.data.list;
          }
        })
      },

      // 选择日期确定之后
      handleConfirm(type) {
        this.ruleForm.beginTime = this.$moment(this.picker1).format('YYYY-MM-DD HH:mm');
        if (this.ruleForm.duration) {
          this.ruleForm.endTime = this.$moment(this.ruleForm.beginTime).add(this.ruleForm.duration, 'm').format('YYYY-MM-DD HH:mm')
        }
      },

      // 打开日期选择器
      openPicker(type) {
        if (type == 1) {
          if (this.ruleForm.beginTime == null) {
            this.picker1 = this.$moment(new Date()).format('YYYY-MM-DD HH:mm');
          }
          this.$refs.begin.open();
        }
      },

      // 课程时长选择
      duraChange() {
        if (this.ruleForm.beginTime) {
          this.ruleForm.endTime = this.$moment(this.ruleForm.beginTime).add(this.ruleForm.duration, 'm').format('YYYY-MM-DD HH:mm')
        }
      },

      // 检查冲突
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            let obj = {
              classId: this.classData.id,
              planType: 0,
              planBegin: this.$moment(this.ruleForm.beginTime).format('YYYY-MM-DD'),
              planEnd: this.$moment(this.ruleForm.endTime).format('YYYY-MM-DD'),
              planCount: 1,
              teacherId: this.$store.state.user.userInfo.userId,
              assistantIds: '',
              classroomId: this.ruleForm.classroomId,
              courseId: this.ruleForm.class,
              beginTime: this.ruleForm.beginTime,
              endTime: this.ruleForm.endTime,
              duration: this.ruleForm.duration,
              clash: this.ruleForm.clash
            }
            console.log(obj);
            createByPlan(obj).then(res => {
              if (res.data.code == 200) {
                if (res.data.data.newClash && res.data.data.newClash.length > 0) {
                  // MessageBox({
                  //   title: '提示',
                  //   message: '检测到存在冲突课程，是否解决冲突?',
                  //   showCancelButton: true
                  // });
                  MessageBox.confirm('检测到存在冲突课程，是否解决冲突?').then(action => {
                    let clash = {
                      newClash: res.data.data.newClash,
                      oldClash: res.data.data.oldClash
                    }
                    this.$store.commit('clashDateChange', clash);
                    this.$router.push({path: '/clash'})
                  });
                } else {
                  console.log('排课成功');
                  this.$store.commit('callDataChange', obj);
                  this.$router.push({path: '/checkName'});
                }
              }
            })
          } else {
            return false;
          }
        });
      },
    },
    mounted() {
      console.log(this.classData);
      this.getClassSubject();
      this.getClassRoom();
    },
    filters: {
      formatDate: (value) => {
        if (value != null) {
          let date = new Date(value);
          let hh = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
          let mm = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
          return hh + ":" + mm
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .class-data {
    width: 100%;
    height: 175px;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(255, 246, 255, 1) 0%, rgba(239, 242, 255, 1) 100%);
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
    .class-data-top {
      width: 100%;
      display: flex;
      padding: 18px 0px 14px 0px;
      .class-data-img {
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          margin: 0px 23px 0px 27px;
        }
      }
      .class-data-conent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .class-name {
          font-size: 18px;
          font-weight: bold;
          color: rgba(31, 36, 35, 1);
          line-height: 25px;
          margin-bottom: 10px;
        }
        .class-time {
          color: rgba(113, 115, 115, 1);
          line-height: 17px;
          font-size: 12px;
        }
      }
    }
    .class-data-bottom {
      display: flex;
      justify-content: space-around;
      color: #464948;
      font-size: 14px;
      div {
        color: #464948;
        font-size: 14px;
      }
    }
  }

  .scheduling-data {
    margin-top: 10px;
  }

  .demo-ruleForm {
    width: 90%;
    margin: 5px auto;
    .el-form-item {
      border-bottom: 1px solid #E5E5E5;
      margin: 0px;
      padding: 8px 0px;
      /*background: #fff;*/
    }
  }

  .newNotive {
    height: 64px;
    font-size: 16px;
    /*padding: 10px 16px;*/
    position: fixed;
    background: #ffffff;
    left: 0;
    width: 100%;
    & .newNotive-btn {
      height: 44px;
      font-size: 16px;
      margin: 10px 16px;
    }
  }

  .person-footer {
    display: flex;
    width: calc(100% - 32px);
    margin: 0 16px;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #ffffff;
    line-height: 64px;
    height: 64px;
    z-index: 2000;
    .el-button {
      width: 100%;
      height: 44px;
      font-size: 16px;
    }
  }

  .dateValue {
    padding-left: 13px;
    font-size: 13px;
  }
</style>
