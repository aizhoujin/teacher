import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// 老师端端通知 列表
export const getBulletin = (token, data) => {
  return request({
    url: `${baseUrl}/api/inform/v1/list`,
    method: 'POST',
    headers: {
      "from": "TEAW",
      "token": token,
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data
  })
}


// 老师端通知详情
export const noticeDetail = (token, data) => {
  return request({
    url: `${baseUrl}/api/inform/v1/detail`,
    method: 'POST',
    headers: {
      "from": "TEAW",
      "token": token,
      "Content-Type": "application/json;charset=UTF-8",
    },
    params: {
      id: data
    }
  })
}


// 老师端新增通知
export const noticeAdd = (data) => {
  return request({
    url: `${baseUrl}/api/inform/v1/add`,
    method: 'POST',
    data: data
  })
}


// 老师端布置作业
export const homeworkAdd = (data) => {
  return request({
    url: `${baseUrl}/api/homework/v1/add`,
    method: 'POST',
    data: data
  })
}

