//引入mutation type
import {GETMOVIE} from './mutations-type'

//引入 发送请求的方法 
import { reqMovieDetail } from "../api/index.js";

//包含多个间接修改状态数据的方法的对象     一般异步的方法都放在这
export default {
   async getmovie({commit},id){
    // 发送请求获取数据
    let  result = await reqMovieDetail(id)
      if(result){
        commit(GETMOVIE,result)
      }
    }
   
   }
