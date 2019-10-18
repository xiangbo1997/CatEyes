<template>
  <div class="billoard">
    <Nav/>
    <div class="content">
      <div class="wrapper">
        <div class="main">
          <p>2019-10-16
            <a href="javascript:;">已更新</a>
          </p>
          <p>榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
          <ul class="movie-content">
            <li class="movie" v-for="(movie,index) in movies" :key="index" >
              <div class="icon">
                {{index+1}}
              </div>
              <div class="movieImg" @click="showDetail(movie.id)">
                <img :src="movie.images.large" alt="">
              </div>
              <div class="text">
                <div class="text-left">
                  <p class="movie-title" @click="showDetail(movie.id)">{{movie.title}}</p>
                  <p class="movie-cast">主演：<span v-for="(cast,index) in movie.casts" :key="index">{{cast.name}},</span></p>
                  <p class="movie-time">上映时间:{{movie.mainland_pubdate}}</p>
                </div>
                <div class="text-right">{{movie.rating.average}}</div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {reqHotMovies} from '../../api/index'
import datas from './datas.json'
export default {
  data(){
    return{
      movies:[]
    }
  },
  async mounted(){
    // const movies = await reqHotMovies()


    const a = datas.subjects.sort((m1,m2)=>{
      return m2.rating.average-m1.rating.average
    })
    this.movies = a
  
  },
  methods:{
    showDetail(id){
      console.log(id)
      this.$router.push(`/detail?id=${id}`)
    }
  }
}
</script>
<style lang="stylus">
.billoard
  width 100%
  margin 0 auto
  .content
    width 100%
    .wrapper
      width 100%
      .main
        width 950px
        margin 0 auto 
        display flex
        flex-direction column
        align-items center
        font-size 12px
        p:nth-child(2)
          margin 17px 0 0 0 
        .movie-content
          width 100%
          margin-top 40px
          li:nth-child(1)
            .icon
              background red
          li:nth-child(2)
            .icon
              background orange
          li:nth-child(3)
            .icon
              background orange
          .movie
            margin-bottom 30px
            width 100%
            display flex
            justify-content flex-start
            .text
              width 680px
              height 220px
              margin-left 30px
              display flex
              align-items center
              border-bottom  1px solid #e5e5e5
              .text-left
                width 420px
                .movie-title
                  font-size 26px
                  color #333
                  display block
                  width 420px
                .movie-cast
                  margin-top 18px
                  font-size 16px
                .movie-time
                  margin-top 8px
                  color #999
                  font-size 16px
              .text-right
                width 260px
                height 56px
                font-size 30px
                font-weight 700
                color orange 
                padding 33px 0 0 190px
            .icon
              width 50px
              height 50px
              margin auto 0
              background #999
              padding 16px 0 16px 18px 
              font-size 20px
              font-weight 700
              color white
              box-sizing border-box
            img 
              width 160px
              height 220px
              margin-left 30px
            

</style>