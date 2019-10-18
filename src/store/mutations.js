import { UPDATA_SEARCH_NAME } from './mutations-type'
import {RECEIVE_PASSWORD,RECEIVE_PHONE} from "./mutations-type.js"



export default{
  [UPDATA_SEARCH_NAME](state,searchName){
    state.searchName = searchName
  },
   //更新电话
   [RECEIVE_PHONE](state,phone){
    state.phone=phone
  },
  //更新密码
  [RECEIVE_PASSWORD](state,passeword){
state.password=passeword
  }
}