import request from '@/router/axios'
import {baseUrl} from "../../static/config";

// 我的公告列表
export const homework = (data, obj) => {
  return request({
    url: `${baseUrl}/api/homework/v1/list`,
    method: 'POST',
    data:{obj}
  })
}


