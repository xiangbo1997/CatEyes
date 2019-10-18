import { RECEIVE_PASSWORD,RECEIVE_PHONE,GETMOVIE,UPDATE_SHOWDETAIL,UPDATA_SEARCH_NAME } from './mutations-type'


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
  },
  [GETMOVIE](state,movie){
    state.movie = movie
  },
  [UPDATE_SHOWDETAIL](state,isShow){
    state.showDetail = isShow
  }
}