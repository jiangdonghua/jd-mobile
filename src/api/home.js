/**
 * Created by Administrator on 2017/11/16.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getBanner() {
  const url='http://datainfo.duapp.com/shopdata/getBanner.php'

  const data=Object.assign({},commonParams,{

  })
  return jsonp(url,data,options)
}



  export function getGoods() {
    const url='http://datainfo.duapp.com/shopdata/getGoods.php'

    const data=Object.assign({},commonParams,{

    })
    return jsonp(url,data,options)
  }
