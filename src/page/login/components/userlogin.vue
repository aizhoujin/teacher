<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off"
                placeholder="请输入用户名">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password"
                auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
      </el-input>
    </el-form-item>
    <!--<el-form-item prop="code">-->
      <!--<el-row :span="24">-->
        <!--<el-col :span="14">-->
          <!--<el-input size="small" @keyup.enter.native="handleLogin" :maxlength="code.len" v-model="loginForm.code"-->
                    <!--auto-complete="off" placeholder="请输入验证码">-->
            <!--<i slot="prefix" class="icon-yanzhengma"></i>-->
          <!--</el-input>-->
        <!--</el-col>-->
        <!--<el-col :span="10">-->
          <!--<div class="login-code">-->
            <!--<span class="login-code-img" @click="refreshCode" v-if="code.type == 'text'">{{code.value}}</span>-->
            <!--<img :src="code.src" class="login-code-img" @click="refreshCode" v-else/>-->
            <!--&lt;!&ndash; <i class="icon-shuaxin login-code-icon" @click="refreshCode"></i> &ndash;&gt;-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->

    <!--</el-form-item>-->
    <!--<el-checkbox v-model="checked">记住账号</el-checkbox>-->
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios'
  // import {isvalidUsername} from "@/util/validate";
  // import {randomLenNum} from "@/util/util";
  // import {mapGetters} from "vuex";
  import {userLogin} from "../../../api/user";
  import {baseUrl} from "../../../../static/config";

  export default {
    name: "userlogin",
    data() {
      // const validateUsername = (rule, value, callback) => {
      //   if (!isvalidUsername(value)) {
      //     callback(new Error("请输入正确的用户名"));
      //   } else {
      //     callback();
      //   }
      // };
      // const validateCode = (rule, value, callback) => {
      //   if (this.code.value != value) {
      //     this.loginForm.code = "";
      //     this.refreshCode();
      //     callback(new Error("请输入正确的验证码"));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        loginForm: {
          username: "admin",
          password: "123456",
          code: "",
          redomStr: ""
        },
        checked: false,
        code: {
          src: "",
          value: "",
          len: 4,
          type: "text"
        },
        loginRules: {
          username: [
            {required: true, trigger: "blur", message: '请输入用户名字'}
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 6, message: "密码长度最少为6位", trigger: "blur"}
          ],
          code: [
            {required: false, message: "请输入验证码", trigger: "blur"},
            {min: 4, max: 4, message: "验证码长度为4位", trigger: "blur"},
          ]
        },
        passwordType: "password"
      };
    },
    created() {
      // this.refreshCode();
    },
    mounted() {
    },
    computed: {
    },
    props: [],
    methods: {
      showPassword() {
        this.passwordType == ""
          ? (this.passwordType = "password")
          : (this.passwordType = "");
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            userLogin(this.loginForm).then(res => {
              console.log(res);
            })
            // axios({
            //   method: 'POST',
            //   // url: baseUrl + '/api/login',
            //   url: 'http://39.98.196.28:8080/wechat/api/login',
            //   params: {
            //     userName: '13800138001',
            //     password: '13800138001'
            //   }
            // }).then()
          }
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .login-form{
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    & .el-form-item{
      width: 90%;
    }
  }
  .login-submit{
    width: 100%;
  }
</style>
