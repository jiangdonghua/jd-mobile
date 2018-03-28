/**
 * Created by Administrator on 2018/3/26.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

import axios from 'axios'
export function getClass() {
  const url=' http://datainfo.duapp.com/shopdata/getclass.php'
  const data = Object.assign({}, commonParams, {
    pcachetime: +new Date(),
    format: 'json'
  })
  return axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}

//
// export function getClass() {
//   const url=' http://datainfo.duapp.com/shopdata/getclass.php'
//
//   const data=Object.assign({},commonParams,{
//
//   })
//   return jsonp(url,data,options)
// }
