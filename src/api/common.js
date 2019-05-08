import request from '@/router/axios'
import {baseUrl, base_baseUrl} from "../../static/config";

//  获取班级人员电话列表
export const getClassPerson = (data) => {
  return request({
    url: `${baseUrl}/api/class/v1/studentSelectorByTeacher`,
    // url: `${base_baseUrl}/api/class/v1/studentSelectorByTeacher`,
    method: 'POST',
    params: {
      teacherId: data.teacherId
    }
  })
}

// 获取微信jdk
export const getJdk = () => {
  return request({
    url: `${baseUrl}/api/wx/authJs`,
    method: 'get',
  })
}

// getSts
export const getSts = () => {
  return request({
    url: `${base_baseUrl}/sys/api/oss/sts`,
    method: 'get',
  })
}

//  获取班级人员列表
// export const getClassPerson1 = (data) => {
//   return request({
//     url: `${baseUrl}/api/class/v1/studentSelectorByClass`,
//     method: 'POST',
//     data: {
//       data
//     }
//   })
// }


