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

// 我的公告详情，标记已读
export const detailMy = (token,id) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/detailMy`,
    method: 'post',
    headers: {
      "from": "TEAW",
      "token": token,
      "Content-Type": "application/json;charset=UTF-8",
    },
    params: {
      id: id
    }
  })
}

