import request from '@/router/axios'
import {baseUrl} from "../../static/config";

export const getBulletin = (data) => {
  return request({
    url: `${baseUrl}/api/affiche/v1/listMy`,
    method: 'post',
    headers: {
      "from": "STUW",
    },
  })
}
