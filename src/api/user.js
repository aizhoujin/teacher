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
