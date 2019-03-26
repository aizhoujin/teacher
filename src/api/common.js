import request from '@/router/axios'
import {baseUrl,base_baseUrl} from "../../static/config";

//  获取班级人员列表
export const getClassPerson = (data) => {
  return request({
    url: `${base_baseUrl}/api/class/v1/studentSelectorByTeacher`,
    // url: `${base_baseUrl}/api/class/v1/studentSelectorByTeacher`,
    method: 'POST',
    params: {
      teacherId: data.teacherId
    }
  })
}



