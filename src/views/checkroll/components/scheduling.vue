<template>
  <div style="padding: 16px;height: 100%;background: #ffffff">
    <div class="class-data">
      <div class="class-data-top">
        <div class="class-data-img">
          <img src="../../../assets/2.jpg" alt="">
        </div>
        <div class="class-data-conent">
          <div class="class-name">{{classData.name}}</div>
          <div class="class-time">上课日期: {{$moment(new Date()).format('YYYY-MM-DD')}}</div>
        </div>
      </div>
      <div class="class-data-bottom">
        <div>老师: {{classData.assistantNames}}</div>
        <div>助教: {{classData.teachName}}</div>
      </div>
    </div>
    <div class="scheduling-data">
      <el-form :model="ruleForm"
               inline-message
               :rules="rules"
               ref="ruleForm"
               label-position="left"
               label-width="100px" class="demo-ruleForm">
        <el-form-item label="科目" prop="class">
          <el-select v-model="ruleForm.class" placeholder="请选择期望年级">
            <el-option v-for="(item,index) in subjectList" :key="index" :label="item.courseEntity.name"
                       :value="item.subjectId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间" prop="date1">
          <!--<el-input type="text" v-model="ruleForm.begin" @focus="openPicker(1)"></el-input>-->
          <div @click="openPicker(1)" style="width: 100%;height: 100%;min-height: 32px;">{{ruleForm.begin |
            formatDate}}
          </div>
          <mt-datetime-picker
            ref="begin"
            v-model="picker1"
            type="datetime"
            @confirm="handleConfirm('begin')">
          </mt-datetime-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="class" disabled>
          <div @click="openPicker(1)" style="width: 100%;height: 100%;min-height: 32px;">{{ruleForm.begin |
            formatDate}}
          </div>
        </el-form-item>
        <el-form-item label="上课教室" prop="class">
        </el-form-item>

      </el-form>

    </div>
  </div>
</template>

<script>
  import {subjectSelectorByClass} from '../../../api/timeTable'

  export default {
    name: "scheduling",
    data() {
      return {
        classData: this.$route.query,
        subjectList: [],
        ruleForm: {
          class: '',
          begin: null
        },
        rules: {
          class: [
            {required: true, message: '请选择科目', trigger: 'change'}
          ],
        },
        picker1: null
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

      // 选择日期确定之后
      handleConfirm(type) {
        console.log(this.picker1)
        this.ruleForm.begin = this.$moment(this.picker1).format('YYYY-MM-DD HH:mm');
      },

      // 打开日期选择器
      openPicker(type) {
        if (type == 1) {
          this.picker1 = this.$moment(new Date()).format('YYYY-MM-DD HH:mm');
          this.$refs.begin.open();
        }
      }
    },
    mounted() {
      console.log(this.classData);
      this.getClassSubject();
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
</style>
