<template>
  <div class="video-container">
    <div class="video-header">
      <div class="video-main">
        <video width="730" height="450" controls autoplay :src="currentVideo">
          
        </video>
        <div class="currentText">{{currentTitle}}</div>
        <ul class="video-list">
          <span class="text">相关视频({{movies.length}})</span>
          <li @click="changeVideo(index)" v-for="(movie,index) in movies" :key="index" class="video-item">
            <div class="item-left">
              <img :src="movie.img" alt=""/>
            </div>
            <div class="item-right">
              <div class="right-title">{{movie.title}}</div>
              <div class="right-num">浏览量:{{movie.num}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="video-footer"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      movies:[
        {
          video:"http://preview.ewang.com/movie/videos/854x480c9815f0c289f422f8e87716ab7339097.mp4",
          img:"https://p0.meituan.net/movie/61a3c7d1bc3d6ebe1fb84ad26eacf94d20743.jpg@138w_78h_1e_1c",
          title:"终极预告片",
          num:7771
        },
        {
          video:"http://preview.ewang.com/movie/videos/888x4809946dfb95c0b439b84533b4262f9d74d.mp4",
          img:"https://p0.meituan.net/movie/2b372a9184606d6362619c89a4f29d1c4652125.jpg@138w_78h_1e_1c",
          title:"在现极致催眠术",
          num:12961
        },
        {
          video:"http://preview.ewang.com/movie/videos/854x48051f9bac3c85b4c9e84099db44788c18f.mp4",
          img:"https://p0.meituan.net/movie/0816a758a19c1fc12e37b6c748aa14b01404999.png@138w_78h_1e_1c",
          title:"先导预告片",
          num:5512
        },
        {
          video:"http://preview.ewang.com/movie/videos/854x4803a638901c77e4a74840bfd69bbc83cf8.mp4",
          img:"https://p0.meituan.net/movie/051871a1b875639966c8db8ad996bff9139995.jpg@138w_78h_1e_1c",
          title:"无坚不摧特辑",
          num:232158
        },
        
      ],
    currentVideo:"http://preview.ewang.com/movie/videos/854x480c9815f0c289f422f8e87716ab7339097.mp4",
    currentTitle:"终极预告片"
    }
  },

  methods:{
    changeVideo(index){
      this.currentVideo = this.movies[index].video
      this.currentTitle = this.movies[index].title
    }
  }
}
</script>
<style lang="stylus">
.video-container
  .video-header
    height 550px
    background #26282b;
    .video-main 
      width 1200px
      margin 0 auto
      display flex
      position relative
      .currentText
        position absolute
        top 466px
        left 10px
        color white
        font-size 16px
      .video-list
        width 400px
        height 450px
        overflow hidden
        background #26282b
        padding 22px 5px 15px 20px
        .text
          font-size 14px
          color white
          display block
          height 41px
          line-height 41px
        .video-item
          width 425px
          height 94px
          background #1a1b1e
          display flex
          .item-left
            width 142px
            height 82px
            background blue
            margin 3px 4px 0 7px
            img 
              width 100%
              height 100%
          .item-right
            width 270px
            height 88px
            margin 3px 4px 0 8px
            box-sizing border-box
            padding 19px 0 0 10px
            .right-num
              margin-top 10px
              color #666
            .right-title
              color white

  .video-footer
    height 80px  
    background gray 
</style>