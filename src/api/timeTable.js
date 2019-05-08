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

// 获取班级教室列表
export const getClassRoomList = (data) => {
  return request({
    url: `${baseUrl}/api/classroom/v1/selector`,
    method: 'post',
    data: data
  })
}

// 老师快速排课接口
export const createByPlan = (data) => {
  return request({
    url: `${baseUrl}/api/coursePlan/v1/createByPlan`,
    method: 'post',
    data: data
  })
}
