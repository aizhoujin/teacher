import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// 我的公告
export const getBulletin = (data, query1) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/listMy`,
    method: 'POST',
    headers: {
      "from": "TEAW",
      "token": data,
      "Content-Type": "application/json;charset=UTF-8",
    },
    data:{query1}
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

