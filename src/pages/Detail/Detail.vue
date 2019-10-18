<template>
  <div  class="container">
    <DetailHeader v-show="showDetail" :movie="movie"/>
    <div v-show="showDetail"  class="introduce">
      <!-- 默认选中第一个  value="first"  first为第一个选项卡的名字 -->
      <el-tabs class="switchTab" :value="value">
        <el-tab-pane label="介绍" name="first" class="first">
          <div class="cont">
            <div class="first-title">
              <span></span>剧情简介
            </div>
            <p class="text">{{movie.content}}</p>
          </div>
          <div class="actors">
            <div class="second-title">
              <span></span>
              演职人员
              <i class="all" @click="value='second'">
                <a class="allText" >全部</a>>
              </i>
            </div>
            <div class="actor">
              <div class="actor-header">
                <div>导演</div>
                <div>演员</div>
              </div>
              <ul class="actor-ul">
                <div class="director">
                  <a href>
                    <img
                      src="https://p0.meituan.net/movie/bb97b91028fd1f2926c09ed5b775b21a38905.jpg@128w_170h_1e_1c"
                      alt
                    />
                    <p>
      乔什·库雷
    </p>
                  </a>
                </div>
                <li class="actor-item">
                  <a href>
                    <img
                      src="https://p0.meituan.net/moviemachine/7d4edd5f01400879de3785ee1e024f99141062.jpg@128w_170h_1e_1c"
                      alt
                    />
                    <p>
      汤姆·汉克斯
    </p>
                    <p class="small">饰：胡迪（配音）Woody (voice)</p>
                  </a>
                </li>
                <li class="actor-item">
                  <a href>
                    <img
                      src="https://p0.meituan.net/moviemachine/7d4edd5f01400879de3785ee1e024f99141062.jpg@128w_170h_1e_1c"
                      alt
                    />
                    <p>饺子</p>
                    <p class="small">饰：儿童哪吒</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="picture">
            <div class="first-title" @click="value='fourth'">
              <span></span>图集
              <i class="all">
                <a class="allText">全部</a>>
              </i>
            </div>
            <div class="album">
              <div class="img1">
                <img
                  src="https://p0.meituan.net/movie/38eaf73f7715ac005f362f5f5cf191ba49180.jpg@465w_258h_1e_1c"
                  alt
                />
              </div>
              <div class="rightImg">
                <div class="img2">
                  <img
                    src="https://p0.meituan.net/movie/cb8b4957baa05bdf106cce7ab86d1bc734881.jpg@126w_126h_1e_1c"
                    alt
                  />
                </div>
                <div class="img3">
                  <img
                    src="https://p0.meituan.net/movie/cb8b4957baa05bdf106cce7ab86d1bc734881.jpg@126w_126h_1e_1c"
                    alt
                  />
                </div>
                <div class="img4">
                  <img
                    src="https://p0.meituan.net/movie/cb8b4957baa05bdf106cce7ab86d1bc734881.jpg@126w_126h_1e_1c"
                    alt
                  />
                </div>
                <div class="img5">
                  <img
                    src="https://p0.meituan.net/movie/cb8b4957baa05bdf106cce7ab86d1bc734881.jpg@126w_126h_1e_1c"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="hotRatings">
            <div class="first-title">
              <span></span>热门短评
              <i class="all">
                <div class="writeRating">写短评</div>
              </i>
            </div>
            <div class="comment-list-container">
              <ul>
                <li>
                  <div class="left">
                    <div class="portrait">
                      <img src="https://img.meituan.net/avatar/89128a742598be3a1f37a25c7b9009853869.jpg@100w_100h_1e_1c" alt />
                    </div>
                    <!-- <i class="icon-level-4"></i> -->
                  </div>
                  <div class="right">
                    <div class="main-header">
                      <div class="user">
                        <span class="name">AAAA杨嘉</span>
                        <span class="tag">购</span>
                      </div>
                      <div class="score">
                        <div class="time">
                          <span>09-30</span>
                          <!-- <ul>
                          <li></li>
                          </ul>-->
                        </div>
                        <div class="approve">
                          <i class="icon-dianzan"></i>
                          <span class="num">37496</span>
                        </div>
                      </div>
                    </div>
                    <div class="comment-content">
                      今天从上午9点10分一直泡在电影院到4点多，没有专门坑队，袁泉的冷静，乘务组的专业，欧豪的成长。
                    </div>
                  </div>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="演职人员" name="second" class="second">
          <ul class="second-list">
            <li class="ector">
              <div class="second-type">
                导演
                <span class="type-number">(1)</span>
              </div>
              <div class="second-img">
                <img
                  src="https://p0.meituan.net/movie/c047a7f5444ba9bef44044da352cb3ba114816.jpg@128w_170h_1e_1c"
                  alt
                />
              </div>
              <div class="info">
                <a href>饺子</a>
              </div>
            </li>
            <div class="actorList">
              <i>
                <div class="second-type">
                演员
                <span class="type-number">(24)</span>
              </div>
              </i>
              <ul>
                <li class="second-item">               
                <div class="second-img">
                  <img
                    src="https://p1.meituan.net/movie/c43af5e137d4f2bde72e635bfc16dbdc32830.jpg@128w_170h_1e_1c"
                    alt
                  />
                </div>
                <div class="info">
                  <a href>蒂姆·波顿</a>
                  <div>饰：饰：霍尔特·法瑞尔 Holt Farrier</div>
                </div>
              </li>
              <li class="second-item">                
                <div class="second-img">
                  <img
                    src="https://p1.meituan.net/moviemachine/05881cc4e6967bc98312b67a5f9213a240977.jpg@128w_170h_1e_1c"
                    alt
                  />
                </div>
                <div class="info">
                  <a href>丹尼·德维托</a>
                  <div>饰：麦克斯·美第奇 Max Medici</div>
                </div>
              </li>
              <li class="second-item">                
                <div class="second-img">
                  <img
                    src="https://p1.meituan.net/moviemachine/05881cc4e6967bc98312b67a5f9213a240977.jpg@128w_170h_1e_1c"
                    alt
                  />
                </div>
                <div class="info">
                  <a href>饺子</a>
                  <div>饰：刘长健</div>
                </div>
              </li>
              <li class="second-item">
                <div class="second-img">
                  <img
                    src="https://p1.meituan.net/movie/c43af5e137d4f2bde72e635bfc16dbdc32830.jpg@128w_170h_1e_1c"
                    alt
                  />
                </div>
                <div class="info">
                  <a href>饺子</a>
                  <div>饰：刘长健</div>
                </div>
              </li>
              <li class="second-item">
                <div class="second-img">
                  <img
                    src="https://p1.meituan.net/movie/c43af5e137d4f2bde72e635bfc16dbdc32830.jpg@128w_170h_1e_1c"
                    alt
                  />
                </div>
                <div class="info">
                  <a href>饺子</a>
                  <div>饰：刘长健</div>
                </div>
              </li>
              <li class="second-item">
                <div class="second-img">
                  <img
                    src="https://p1.meituan.net/movie/c43af5e137d4f2bde72e635bfc16dbdc32830.jpg@128w_170h_1e_1c"
                    alt
                  />
                </div>
                <div class="info">
                  <a href>饺子</a>
                  <div>饰：刘长健</div>
                </div>
              </li>
              </ul>
            </div>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="奖项" name="third" disabled>奖项</el-tab-pane>
        <el-tab-pane label="图集" name="fourth" class="fourth">
          <th>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
          </th>
          <th>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
            <td>
              <li>
              <img
                src="https://p0.meituan.net/movie/2e51405b0d686489c510c762efed640898498.jpg@106w_106h_1e_1c"
                alt
              />
            </li>
            </td>
          </th>
        </el-tab-pane>
      </el-tabs>
      <div class="module">
        <div class="module1">
          <div class="module1-title">
            <div class="first-title">
              <span></span>相关资讯
            </div>
          </div>
          <div class="mod-content">
            <div class="news-list">
              <div class="news-item">
                <div class="news-img">
                  <img
                    src="https://p1.meituan.net/movie/a061f0cbc5e796b7132aa9658f9f1215652104.jpg@140w_86h_1e_1c"
                    alt
                  />
                </div>
                <div class="news-main">
                  <div class="news-title">
                    <a href>《中国机长》票房破22亿曝全新特辑，揭秘万米高空的平凡英雄</a>
                  </div>
                  <div class="news-info">
                    <span>猫眼电影</span>
                    <span class="icon-yanjing">7587</span>
                    <span class="icon-xiaoxi">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="module1">
          <div class="module1-title">
            <div class="first-title">
              <span></span>相关电影
            </div>
          </div>
          <div class="mod-content">
            <div class="related-movies">
              <ul class="movie-list">
                <li class="movie-item">
                  <img
                    src="https://p1.meituan.net/movie/f04be2732cd0cc16952be782c412bbda7730519.jpg@106w_145h_1e_1c"
                    alt
                  />
                  <p class="movie-name">关云长</p>
                  <p class="move-score">暂无评分</p>
                </li>
                <li class="movie-item">
                  <img
                    src="https://p1.meituan.net/movie/f04be2732cd0cc16952be782c412bbda7730519.jpg@106w_145h_1e_1c"
                    alt
                  />
                  <p>关云长</p>
                  <p>暂无评分</p>
                </li>
                <li class="movie-item">
                  <img
                    src="https://p1.meituan.net/movie/f04be2732cd0cc16952be782c412bbda7730519.jpg@106w_145h_1e_1c"
                    alt
                  />
                  <p>关云长</p>
                  <p>暂无评分</p>
                </li>
                <li class="movie-item">
                  <img
                    src="https://p1.meituan.net/movie/f04be2732cd0cc16952be782c412bbda7730519.jpg@106w_145h_1e_1c"
                    alt
                  />
                  <p>关云长</p>
                  <p>暂无评分</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="holder">
      
      <router-view></router-view>
     </div> 
    
  </div>
</template>
<script>
import DetailHeader from '../../components/DetailHeader/DetailHeader.vue'
// import { reqMovieDetail } from "../../api/index.js";
import datas from "./data/data.json";
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['showDetail'])
  },
  components:{
    DetailHeader
  }, 
   mounted(){


    this.movie = datas
  },
  data(){
    return {
      value : 'first',
      movie:{}
    }
},
watch:{
  $router(){
    console.log(this.$router)
  }
}
  
  }
 

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container
  width 100%
  height 100%
  .introduce
    display flex
    width 100%
    height 100%
    margin-top 50px
    margin-left 30px
    .switchTab
      width 55%
      .first
        .cont
          margin-bottom 30px
          .first-title
            margin 20px 10px
            font-size 20px
            span
              display inline-block
              width 5px
              height 18px
              background-color red
              margin-right 5px
              vertical-align middle
          .text
            font-size 14px
            color #666
            line-height 25px
        .actors
          margin-bottom 20px
          .second-title
            span
              display inline-block
              width 5px
              height 18px
              background-color red
              margin-right 5px
              vertical-align middle
            .all
              margin-left 590px
              font-size 14px
              color #ccc
              .allText
                margin-right 6px
          .actor
            .actor-header
              width 200px
              display flex
              justify-content space-between
              margin-bottom 20px
            .actor-ul
              display flex
              .director
                width 130px
                margin-right 40px
                p
                  text-align center
                  color black
                  margin-top 10px
              .actor-item
                width 130px
                margin-right 20px
                p
                  text-align center
                  color black
                  margin-top 10px
                  &.small
                    font-size 14px
                    color #666
        .picture
          margin-bottom 30px
          .first-title
            margin 10px 10px
            font-size 20px
            position relative
            .all
              position absolute
              width 50px
              height 40px
              top 0
              right 0px
              margin auto
              font-size 14px
              color #ccc
              .allText
                margin-right 6px
            span
              display inline-block
              width 5px
              height 18px
              background-color red
              margin-right 5px
              vertical-align middle
          .album
            display flex
            .img1
              margin-right 5px
              img
                width 439px
                height 250px
            .rightImg
              display flex
              flex-wrap wrap
              img
                width 90px
                height 121px
                margin 3px
        .hotRatings
          margin-bottom 30px
          li
            margin-bottom 5px
          .first-title
            margin 20px 10px
            font-size 20px
            position relative
            .all
              position absolute
              width 50px
              height 40px
              top 0
              right 0px
              margin auto
              font-size 14px
              .writeRating
                text-align center
                line-height 30px
                width 58px
                height 30px
                border 1px solid red
                color red
                border-radius 30px
            span
              display inline-block
              width 5px
              height 18px
              background-color red
              margin-right 5px
              vertical-align middle
          .comment-list-container
            // color red
            li
              display flex
              width 100%
              height 270px
              .left
                margin-right 20px
                .portrait
                  img
                    width 50px
                    height 50px
                    border-radius 50%
              .right
                height 150px
                border-bottom 1px solid #666
                .main-header
                  margin-bottom 20px
                  .user
                    font-size 16px
                    margin-bottom 8px
                    .tag
                      margin-left 5px
                      font-size 12px
                      color rgba(0, 0, 200, 0.5)
                      width 30px
                      height 50px
                      border 1px solid rgba(0, 0, 200, 0.5)
                      border-radius 2px
                  .score
                    display flex
                    justify-content space-between
                    .time
                      span
                        color #666
                .comment-content
                  color #666
                  font-size 14px
                  line-height 24px
      .second
        width 800px
        .second-list
          .ector
            width 100px
            text-align center
            img
              margin 8px
          .actorList 
            margin 8px 
            padding-top 10px          
            ul
              margin-top 10px
              width 100%
              .second-item
                float left
                margin 7px
                height 200px
                width 15% 
              img
                width 100%
              .second-type
              width 100px
              margin-bottom 8px
              text-align center
              .second-img
                width 130px
                margin 8px
              .info
                margin-bottom 8px
                width 130px
                text-align center
                div
                  margin-top 5px
                  color #666
                  font-size 14px
                a
                  display block
                  color black
                
      .fourth
        width 100%
        display flex
        flex-wrap wrap
        th
          td
            padding 12px
    .module
      margin-left 100px
      width 40%
      margin-bottom 30px
      .module1
        width 100%
        .module1-title
          .first-title
            margin 20px 10px
            font-size 20px
            span
              display inline-block
              width 5px
              height 18px
              background-color red
              margin-right 5px
              vertical-align middle
        .mod-content
          width 100%
          margin-left 15px
          .news-list
            .news-item
              display flex
              .news-img
                margin-right 8px
              .news-main
                width 230px
                .news-title
                  color black
                  margin-bottom 35px
                .news-info
                  color rgba(0, 0, 0, 0.5)
                  span
                    margin 3px
          .related-movies
            .movie-list
              width 100%
              display flex
              flex-wrap wrap
              .movie-item
                width 110px
                margin 5px
                img
                  width 100%
                p
                  width 100%
                  text-align center
                  font-size 14px
                // .movie-name
                .move-score
                  color yellow
</style>