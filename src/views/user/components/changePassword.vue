<template>
  <div>
    <el-form :model="ruleForm2" label-position="top" :rules="rules2" ref="ruleForm2" label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="原密码" prop="oldpass">
        <el-input type="password" v-model="ruleForm2.oldpass" autocomplete="off" placeholder="请输入原密码"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请再次输入原密码"></el-input>
      </el-form-item>
      <div style="font-size: 14px; color: #B5B6B6">密码为6-20位，必须包含英文字母、数字</div>
      <el-form-item class="pass-sub">
        <el-button type="primary" @click="submitForm('ruleForm2')">确认修改</el-button>
        <el-button type='info' @click="resetForm('ruleForm2');$router.go(-1)">取消修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {changePassword} from "../../../api/user";
  import {Toast} from 'mint-ui'

  export default {
    name: "change-password",
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          oldpass: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'},
            {min: 6, message: "密码长度最少为6位", trigger: "blur"}
          ],
          checkPass: [
            {min: 6, message: "密码长度最少为6位", trigger: "blur"},
            {validator: validatePass2, trigger: 'blur'},
          ],
          oldpass: [
            {validator: validatePass, trigger: 'blur'},
            {min: 6, message: "密码长度最少为6位", trigger: "blur"}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let obj = {
              old: this.ruleForm2.oldpass,
              pwd: this.ruleForm2.pass
            }
            changePassword(obj).then(res => {
              if (res.data.code == 200 && res.data.msg == '请求成功') {
                Toast('密码修改成功');
                window.localStorage.clear();
                setTimeout(() => {
                  window.location.reload();
                }, 1000)
              }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  .demo-ruleForm {
    width: 90%;
    margin: 5px auto;
  }

  .pass-sub {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .el-button {
      font-size: 20px;
      height: 44px;
      width: 100%;
      margin: 0px;
      margin-bottom: 15px;
    }
  }
</style>
