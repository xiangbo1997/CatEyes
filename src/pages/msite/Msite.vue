<template>
  <div class="container">
    <div class="main">
      <div class="main-inner">
        <div class="main-header">
          正在热映（69部）
          <a href="javascript:;" @click="goTo2('/movies')">全部></a>
        </div>
        <div class="main-content">
          <li
            v-for="(item,index) in hotMovies"
            :key="index"
            class="content-list"
            @click="goTo('/Detail',item.id)"
          >
            <a href="javascript:;">
              <img src="./image/film.jpg" alt />
            </a>
            <a href="javascript:;">购票</a>
          </li>
        </div>
      </div>
      <div class="main-inner future">
        <div style="color:" class="main-header">
          即将上映（133部）
          <a href="javascript:;" @click="goTo2('/movies')">全部></a>
        </div>
        <div class="main-content">
          <li
            v-for="(item,index) in hotMovies"
            :key="index"
            class="content-list"
            @click="goTo('/Detail',item.id)"
          >
            <a href="javascript:;">
              <img src="./image/film.jpg" alt />
            </a>
            <a href="javascript:;">预售</a>
          </li>
        </div>
      </div>
      <div class="main-inner">
        <div class="main-header">
          热播电影
          <span>(爱情 喜剧 动作 动画 惊悚)</span>
          <a href="javascript:;" @click="goTo2('/movies')">全部></a>
        </div>
        <div class="main-content">
          <li
            v-for="(item,index) in hotMovies"
            :key="index"
            class="content-list"
            @click="goTo('/Detail',item.id)"
          >
            <a href="javascript:;">
              <img src="./image/film.jpg" alt />
            </a>
            <a hre="javascript:;">购票</a>
          </li>
        </div>
      </div>
    </div>
    <div class="aside">
      <div class="panel-top">
        <span class="panel-red">今日票房</span>
        <div class="panel-a">
          <ul class="panel-inner">
            <li class="inner-top">
              <img class="ranking-img" src="./image/top.jpg" />
              <div class="panel-inner-right">
                <a href style="color:black">
                  <p class="top">中国机长</p>
                  <p class="bottom">3013.33万</p>
                </a>
              </div>
            </li>
            <li v-for="(item2,index2) in newHartFilms"
            :key="index2">
              <i class="li-left" style="color:red" >{{index2+2}}</i>
              <a href style="color:black">
                <span>{{item2.title}}</span>
                <span class="li-right">{{item2.rating.average}}</span>
              </a>
            </li>   
          </ul>
        </div>
        <div class="panel-b">
          <h3>今日开盘</h3>
          <span>
            <p>
              9576.26万
              <a href>查看更多></a>
            </p>
          </span>
          <p class="time">北京时间：2019.10.17.23.56.20</p>
          <p class="time-bottom">猫眼专业版实时票房数据</p>
        </div>
      </div>
      <div class="panel-bottom">
        <span class="panel-red">Top 100</span>
        <div class="panel-a">
          <ul class="panel-inner">
            <li class="inner-top">
              <img class="ranking-img" src="./image/top.jpg" />
              <div class="panel-inner-right">
                <a href style="color:black">
                  <p class="top">霸王别挤</p>
                  <p class="bottom">3013.33万</p>
                </a>
              </div>
            </li>
            <li class="top" v-for="(item2,index2) in newHartFilms"
            :key="index2">
              <i class="li-left" style="color:red">{{index2+2}}</i>
              <a href style="color:black">
                <span>{{item2.title}}</span>
                <span class="li-right">{{item2.rating.average}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入api
/* eslint-disable */
//import { reqHotMovies, reqHundredMovies } from "../../api";
import tops from './tops.json';
import datas from "./datas.json";
export default {
  data() {
    return {
      hotPlayMovies: [],
      hotMovies: [],
      newHartFilms:[]
    };
  },

  methods: {
    //实现跳转一级路由--详情页
    goTo(el, id) {
      console.log(id);
      if (el === "/Detail") {
        console.log(el + "?id=" + id);
        const vvv = el + "?id=" + id;
        this.$router.push(vvv);
      } else {
        this.$router.push(el);
      }
    },
    //实现跳转一级路由--电影页
    goTo2(movies) {
      this.$router.push("/movies");
    }
  },

  mounted() {
    //获取电影详情
    //  const result = await reqHotMovies()
    //console.log(datas)
    this.hotPlayMovies = datas.subjects;
    //console.log(this.hotPlayMovies)
    this.hotMovies = this.hotPlayMovies.filter((item, index) => {
      if (index < 8) {
        return item;
      }
    });
    console.log(this.hotMovies)
   // console.log(tops)
    this.chartFilms = tops.subjects
    //console.log(this.chartFilms)
    this.newHartFilms= this.chartFilms.filter((item2,index2)=>{
      if (index2 <=8) {
        return item2
      }
    })
    //console.log(this.newHartFilms)
  }
};
</script>
<style lang='stylus' erl="stylesheet/stylue">
.content
  width 100%
  .container
    position relative
    width 1200px
    height 100%
    margin 0px auto
    .main
      width 837px
      .main-inner
        width 750px
        height 618px
        margin 45px 0 0
        .main-header
          width 750px
          height 26px
          color red
          font-size 26px
          margin 0 55px
          span
            font-size 10px
          a
            margin 0 37px
            float right
        .main-content
          width 750px
          height 567px
          margin 40px
          display flex
          flex-wrap wrap
          justify-content space-evenly
          .content-list
            height 261px
            :hover
              box-shadow 1px 1px 20px 13px #ccc
            img
              width 160px
              height 220px
              display block
            a
              width 160px
              height 39px
              display block
              border 1px #ccc solid
              text-align center
              line-height 39px
              font-size 20px
              color red
              margin-bottom 185px
              &:hover
                background-color red
                color white
    .aside
      position absolute
      top 0
      right 0
      width 360px
      height 1965px
      .panel-top
        position absolute
        width 360px
        height 464px
        .panel-red
          position relative
          top 45px
          left 10px
          color red
          font-size 26px
        .panel-a
          position relative
          top 80px
          width 360px
          height 415px
          .panel-inner
            width 100%
            .inner-top
              position relative
              top 0
              left 10px
            .ranking-img
              width 120px
              height 80px
            .panel-inner-right
              float right
              width 238px
              height 78px
              .top
                margin 15px 10px
                font-size 25px
              .bottom
                margin 15px 10px
                font-size 15px
                color red
          li
            width 100%
            margin 10px 0
            text-align center
            display flex
            justify-content space-between
            .li-left
              width 20px
              display inline-block
              margin-left 10px
            .li-right
              color red
          span
            margin 0 30px
        .panel-b
          width 360px
          height 120px
          h3
            width 40px
            height 103px
            font-size 25px
            text-align center
            background-color red
            color white
          span
            float right
            width 290px
            height 40px
            margin-top -85px
            margin-right 0
            color red
            a
              margin 0 110px
              color red
          .time
            float right
            margin-top -55px
            margin-right 65px
            color #6666
          .time-bottom
            float right
            margin-top -20px
            color #6666
      .panel-bottom
        width 100%
        position relative
        top 650px
        right 0
        .panel-red
          position relative
          top 45px
          left 10px
          color #CCCC00
          font-size 26px
        .panel-a
          position relative
          top 80px
          width 360px
          height 415px
          .panel-inner
            width 100%
            .inner-top
              position relative
              top 0
              left 10px
            .ranking-img
              width 120px
              height 80px
            .panel-inner-right
              float right
              width 238px
              height 78px
              .top
                margin 15px 10px
                font-size 25px
              .bottom
                margin 15px 10px
                font-size 15px
                color #CCCC00
          li
            margin 10px 0
            text-align center
            display flex
            justify-content space-between
            .li-left
              display inline-block
              width 20px
              margin-left 10px
            .li-right
              color #ffb438
          span
            margin 0 45px
</style>