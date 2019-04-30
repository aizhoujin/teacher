import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// 我的课表
export const listByTeacher = (data) => {
  return request({
    url: `${baseUrl}/api/coursePlan/v1/listByTeacher`,
    method: 'get',
    params: data
  })
}

// 获取班级科目列表
export const subjectSelectorByClass = (data) => {
  return request({
    url: `${baseUrl}/api/class/v1/subjectSelectorByClass`,
    method: 'get',
    params: data
  })
}

