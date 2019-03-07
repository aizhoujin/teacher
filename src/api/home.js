import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// 老师端端通知 列表
export const getBulletin = (data, query1) => {
  return request({
    url: `${baseUrl}/api/inform/v1/list`,
    method: 'POST',
    headers: {
      "from": "TEAW",
      "token": data,
      "Content-Type": "application/json;charset=UTF-8",
    },
    data:{query1}
  })
}

// 我的公告列表
export const myGetBulletin = (data, obj) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/listMy`,
    method: 'POST',
    headers: {
      "from": "TEAW",
      "token": data,
      "Content-Type": "application/json;charset=UTF-8",
    },
    data:{obj}
  })
}

// 标记已读
// export const detailMy = (data,id) => {
//   return request({
//     url: `${baseUrl}/api/affiche/v1/detailMy`,
//     method: 'POST',
//     headers: {
//       "from": "STUW",
//       "token": data,
//       // "Content-Type": "application/json;charset=UTF-8",
//     },
//     params:{
//       id: '1097141187560603648'
//     }
//   })
// }

export const detailMy = (data) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/detailMy`,
    method: 'post',
    headers: {
      "from": "TEAW",
      "token": data,
      "Content-Type": "application/json;charset=UTF-8",
    },
    params: {
      id: "1097141187560603648"
    }
  })
}

