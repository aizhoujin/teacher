import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// login页登录
export const userLogin = (data) => {
  return request({
    url: `${baseUrl}/api/login`,
    method: 'post',
    headers: {
      "from": "TEAW"
    },
    params: {
      userName: data.username,
      password: data.password
    }
  })
}


// app进入时使用token登录
export const tokenLogin = (data) => {
  return request({
    url: `${baseUrl}/api/loginByToken`,
    method: "POST",
    headers: {
      token: data
    }
  })
}

// 修改密码
export const changePassword = (data) => {
  return request({
    url: `${baseUrl}/api/account/v1/changePassword`,
    method: "post",
    params: data
  })
}

// 获取工资
export const getPayroll = (data) => {
  return request({
    url: `${baseUrl}/api/wages/v1/detailMy`,
    method: "post",
    params: data
  })
}


// 获取工资
export const confirmPayroll = (data) => {
  return request({
    url: `${baseUrl}/api/wages/v1/confirm`,
    method: "post",
    params: {
      recordId: data
    }
  })
}


