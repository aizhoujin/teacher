import request from '@/router/axios'
import {baseUrl} from "../../static/config";

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
