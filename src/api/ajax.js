import axios from 'axios'
//请求拦截器
import qs from 'qs'
axios.interceptors.request.use(config=>{
  const { data,method } = config
  if(method.toUpperCase() === 'POST'&&data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})
//响应拦截器
axios.interceptors.response.use(response=>{
  return response.data
},(error)=>{
  // console.log(error)
  return '失败'
})

export default axios