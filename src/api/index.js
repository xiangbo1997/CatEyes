import ajax from './ajax'


//请求热播哦电影
export const reqHotMovies = ()=>{
  return ajax.get('https://douban.uieee.com/v2/movie/in_theaters')
}

//请求电影详情
export const reqMovieDetail = (id)=>{
  return ajax.get(`https://douban.uieee.com/v2/movie/subject/${id}`)
}

//搜索电影
export const reqSearchMovies = (searchText,searchNum) =>{
  return ajax.get(`https://douban.uieee.com/v2/book/search?q=${searchText}&count=${searchNum}`)
}


//搜索即将上映的电影
export const reqWillMovies = ()=>{
  return ajax.get('https://douban.uieee.com/v2/movie/coming_soon')
}


//请求票房搞得电影
export const reqPiaofangMovies = ()=>{
  return ajax.get('https://douban.uieee.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a')
}

//请求前100
export const reqHundredMovies = ()=>{
  return ajax.get('https://douban.uieee.com/v2/movie/top250')
}
//获取经典影片
export const getOldMovies = () => {
  

 let result= ajax.get('https://douban.uieee.com/v2/movie/top250')
 console.log(result)
 return result
 
}
//获取即将上映影片
export const getWillMovies = ()=>{
  return ajax.get('https://douban.uieee.com/v2/movie/coming_soon')

}
//获取热映影片
export const getNowMovies = ()=>{
  return ajax.get('https://douban.uieee.com/v2/movie/in_theatersasd')

}
