<template>
  <div class="addStudent">
    <el-form :model="ruleForm"
             inline-message
             :rules="rules"
             ref="ruleForm"
             label-position="left"
             label-width="100px" class="demo-ruleForm">
      <el-form-item label="学员姓名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入学员姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="身份证号" prop="idNumber">
        <el-input v-model="ruleForm.idNumber" placeholder="18位身份证号码"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请填写学员联系电话"></el-input>
      </el-form-item>
      <div class="#E5E5E5" style="width: 100%;height: 10px;background: #F7F8F8"></div>
      <el-form-item label="期望年级" prop="class">
        <el-select v-model="ruleForm.class" placeholder="请选择期望年级">
          <el-option label="一年级" value="1"></el-option>
          <el-option label="二年级" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要负责人" prop="principal">
        <el-input v-model="ruleForm.principal" placeholder="请填写学员主要负责人姓名"></el-input>
      </el-form-item>
      <el-form-item label="招生来源" prop="source">
        <el-select v-model="ruleForm.source" placeholder="请选择招生来源">
          <el-option label="A老师" value="A"></el-option>
          <el-option label="B老师" value="B"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="意向级别" prop="rank">
        <el-select v-model="ruleForm.rank" placeholder="请选择意向级别">
          <el-option label="A老师" value="A"></el-option>
          <el-option label="B老师" value="B"></el-option>
        </el-select>
      </el-form-item>
      <div class="#E5E5E5" style="width: 100%;height:10px;background: #F7F8F8"></div>
      <el-form-item label="首次咨询时间">
        <el-select v-model="ruleForm.date" placeholder="请选择首次咨询时间">
          <el-option label="A老师" value="A"></el-option>
          <el-option label="B老师" value="B"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="下次咨询时间">
        <el-select v-model="ruleForm.nextDate" placeholder="请选择首次咨询时间">
          <el-option label="A老师" value="A"></el-option>
          <el-option label="B老师" value="B"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="咨询方式">
        <el-select v-model="ruleForm.consultingWay" placeholder="请选择咨询方式">
          <el-option label="A老师" value="A"></el-option>
          <el-option label="B老师" value="B"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="咨询课程">
        <el-select v-model="ruleForm.consultingClass" placeholder="请选择咨询课程">
          <el-option label="A老师" value="A"></el-option>
          <el-option label="B老师" value="B"></el-option>
        </el-select>
      </el-form-item>
      <div class="#E5E5E5" style="width: 100%;height: 10px;background: #F7F8F8"></div>
      <el-form-item label-position="top" label="咨询备注信息" style="border-bottom: none !important;">
      </el-form-item>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 10}"
        placeholder="在这里输入回访内容"
        v-model="ruleForm.content">
      </el-input>
    </el-form>
    <!--新增学员-->
    <div class="occupied"></div>
    <div class="newNotive" :style="{'top': clientHeight + 'px'}">
      <!--<router-link :to="{path: '/addStudent'}">-->
        <el-button type="primary" size="small" class="newNotive-btn"
                   :style="{'width': clientWidth+ 'px'}">提交
        </el-button>
      <!--</router-link>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "add-student",
    data() {
      return {
        ruleForm: {
          name: '',
          idNumber: null,
          region: '',
          phone: '',
          class: '',
          principal: '',
          type: [],
          resource: '',
          desc: '',
          firstDate: '',
          nextDate: '',
          consultingWay: '',
          consultingClass: '',
          content: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'blur'}
          ],
          idNumber: [
            {required: true, message: '请输入18位身份证号码', trigger: 'blur'},
            {min: 18, max: 18, message: '请输入18位身份证号码', trigger: 'blur'},
          ],
          region: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          phone: [
            {required: true, message: '请填写学员联系电话', trigger: 'blur'}
          ],
          class: [
            {required: true, message: '请选择期望年级', trigger: 'change'}
          ],
          principal: [
            {required: true, message: '请填写主要负责人', trigger: 'blur'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          source: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ],
          rank: [
            {required: true, message: '请选择意向级别', trigger: 'blur'}
          ]
        },
        clientHeight: 603,
        clientWidth: 342
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created() {
      this.clientHeight = document.documentElement.clientHeight - 64;
      this.clientWidth = document.documentElement.clientWidth - 32;
    }
  }
</script>

<style scoped lang="scss">
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
