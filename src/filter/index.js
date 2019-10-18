
export const searchMovie = (searchName,movies)=>{

  return movies.filter((movie,index)=>{
    if(!searchName){
      return movie
    }
    return movie.title.includes(searchName)
  })

}