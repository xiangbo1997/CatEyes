<template>
  <div>
    <ul class="img-list" v-if="typeMovies.length">
      <li class="movie" v-for="(movie,index) in  isChange?typeMovies:movies" :key="index" @click="goTodetail(movie.id)">
        <a >
          <div class="img-box"> <img :src="movie.images.large" v-if="movie.images"  alt/></div>
         
          <!-- <img src="C:\Users\33013\Desktop\集体项目\catEys\src\pages\Movies\moviesList/imgs/loading.gif'" v-else alt/>
          {{movie.images?movie.images.large:'./imgs/loading.gif'}} -->
          <p class="movie-name">{{movie.title}}</p>
        </a>
        <p class="grade">暂无评分</p>
      </li>
    </ul>
    <div v-if="!typeMovies.length">没有数据</div>
    <div class="pagination">
      <el-pagination 
      background 
      layout="prev, pager, next" 
      :total="typeMovies?typeMovies.length:20" class="page" 
      :page-size='10'
       @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>

export default {
      data () {
        return {
          
          // moveObj:{},
          movies:[],
          isChange:true
        };
      },
  
  props:{
      typeMovies:Array
  },
  components: {},
  mounted(){
    
    
    // console.log(this.typeMovies.subjects[0].images.large);
    console.log(this.typeMovies,this.typeMovies[0],'-------------------------------')
    
  },

 
  methods:{
    handleCurrentChange(){
      console.log(123456)
      this.movies =  this.typeMovies.filter((item,index)=>{
            if(index>18){
              return item
            }
        })
        this.isChange=!this.isChange
        console.log(this.movies)
    },

    goTodetail(id){
        console.log(id)
        this.$router.push('/detail?id='+id)
    }
  }
};
</script>
<style lang='stylus' scoped>
.img-list
  width 100%
  padding-top 30px
  height 100%
  overflow hidden
  .movie
    width 160px
    margin 0 31.7px 30px 0
    text-align center
    float left
    .img-box
      width 160px
      height 220px
      background-color yellow 
      img
        width 160px
        height 220px
      .movie-name
        margin-top 5px
        color #333
      .grade
        margin-top 10px
        color #ffb400
.pagination
  height 32px
  width 30%
  margin 0 auto
  // background-color yellow
  

</style>