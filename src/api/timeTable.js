import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// 我的课表
export const listByTeacher = (data) => {
  return request({
    url: `${baseUrl}/api/coursePlan/v1/listByTeacher`,
    method: 'POST',
    params: data
  })
}

