<template>
  <div class="query-wrap">
    <div class="query-main">
      <ul class="query-list">
        <li class="query-item" v-for="(movie,index) in movies" :key="index" >
          <div @click="toDetail(movie.id)" class="query-img"><img :src="movie.images.large" alt=""/></div>
          <div class="query-title"><p>{{movie.title}}</p></div>
          <div class="query-english">{{movie.original_title}}</div>
          <div class="query-info">
            <p class="info-rating">{{movie.rating.average}}</p>
            <p class="info-class"><span v-for="(genre,index) in movie.genres" :key="index">{{genre}}</span>,</p>
            <p class="info-time">{{movie.pubdates[0]}}</p>
          </div>
        </li>
        
      </ul>
    </div>
  </div>  
</template>
<script>
import {reqHotMovies} from '../../api/index.js'
import datas from './datas.json'
import  { mapState } from 'vuex'
import {searchMovie} from '../../filter/index.js'
export default {
  data(){
    return {
      movies:[]
    }
  },
  computed:{
    ...mapState(['searchName'])
  },
  async mounted(){
    // const movies = await reqHotMovies()
    // if(movies){
    //   this.movies = movies.subjects
    // }else{
      this.movies = datas.subjects
    // }
    
    
    console.log(searchMovie(this.searchName,this.movies))
    this.movies = searchMovie(this.searchName,this.movies)
  },
  watch:{
    searchName(){
      console.log(this.searchName)
      this.movies = searchMovie(this.searchName,this.movies)
    }
  },
  methods:{
    toDetail(id){
      this.$router.push(`/detail?id=${id}`)
    }
  }
}
</script>
<style lang="stylus">
.query-wrap
  width 100%
  .query-main
    width 980px
    margin 0 auto
    .query-list
      width 980px
      display flex
      flex-wrap wrap
      .query-item
        width 460px
        height 220px
        margin 30px 0 0 30px
        display flex
        position relative
        .query-img
          width 162px
          height 222px
          background red
          margin-right 20px
          img 
            width 100%
            height 100%
        .query-title
          font-size 26px
          height 35px
          margin-top 27px
        .query-english
          height 18px
          font-size 14px
          color #999
          position absolute
          left 184px
          top 60px
        .query-info
          width 280px
          height 134px
          position absolute
          right 0
          bottom 0
          border-bottom solid #e5e5e5 1px
          .info-rating
            font-size 26px
            color #ffb400
            margin 10px 0 13px 0
          .info-class
            font-size 16px
            color #333
            margin-top 5px
          .info-time
            font-size 16px
            color #999
            margin-top 5px
</style>