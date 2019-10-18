<template>
  <div class="warp">
    <div class="nav">
      <a href="javascript:;" class="item" @click="nowMovie" :class="classNow">正在热映</a>
      <a href="javascript:;" class="item" @click="willMovie" :class="classWill">即将上映</a>
      <a href="javascript:;" class="item" @click="oldMovie" :class="classOld">经典影片</a>
    </div>
    <div class="triangle" :class="classA"></div>
    <div class="container">
      <div class="container-center">
        <div class="classify">
          <ul class="list-ul">
            <li class="type">
              <div class="text">类型：</div>
              <ul>
                <li v-for="(type,index) in types" :key="index" @click="selectType($event,type)">
                  <a href="javascript:;" :class="{cls1:isShow}">{{type}}</a>
                </li>
              </ul>
            </li>
            <li class="type">
              <div class="text">区域：</div>
              <ul>
                <li v-for="(area,index) in areas" :key="index" @click="selectArea($event,area)">
                  <a href="javascript:;">{{area}}</a>
                </li>
              </ul>
            </li>
            <li class="type">
              <div class="text">年代：</div>
              <ul>
                <li v-for="(year,index) in years" :key="index" @click="selectYears($event,year)">
                  <a href="javascript:;">{{year}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="movies-warp">
          <div class="movies-header">
            <div class="control-group" >
              <div class="circle" @click="hotSort">
                <img src="./moviesList/imgs/123.png" alt v-if="selected==H" />
              </div>
              <span>按热门排序</span>
            </div>
            <div class="control-group" >
              <div class="circle" @click="yearSort">
                <img src="./moviesList/imgs/123.png" alt v-if="selected==Y" />
              </div>
              <span>按时间排序</span>
            </div>
            <div class="control-group" >
              <div class="circle" @click="scoreSort">
                <img src="./moviesList/imgs/123.png" alt v-if="selected==S" />
              </div>
              <span>按评价排序</span>
            </div>
          </div>
          <div class="movies-list">
            <MoviesList :typeMovies="typeMovies" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import now from "./datas/nowMovie.json";
import old from "./datas/oldMovie.json";
// import will from './datas/willMovie.json'
// let json = require('./datas/nowMovie.json')

import MoviesList from "./moviesList";
//引入接口

//引入接口文件
import { getOldMovies, getNowMovies, getWillMovies } from "../../api";
export default {
  data() {
    return {
      isShow:false,
      H: "H",
      Y: "Y",
      S: "S",
      selected: "H",
      types: [
        "全部",
        "爱情",
        "喜剧",
        "动画",
        "剧情",
        "恐怖",
        "惊悚",
        "科幻",
        "动作",
        "悬疑",
        "犯罪",
        "冒险",
        "战争",
        "奇幻",
        "运动",
        "家庭",
        "古装",
        "武侠",
        "西部",
        "历史",
        "传记",
        "歌舞",
        "黑色电影",
        "短片",
        "纪录片",
        "其他"
      ],
      areas: [
        "全部",
        "大陆",
        "美国",
        "韩国",
        "日本",
        "中国香港",
        "中国台湾",
        "泰国",
        "印度",
        "法国",
        "英国",
        "俄罗斯",
        "意大利",
        "西班牙",
        "德国",
        "波兰",
        "澳大利亚",
        "伊朗",
        "其他"
      ],
      years: [
        "全部",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2000-2010",
        "90年代",
        "80年代",
        "70年代",
        "更早"
      ],
      classA: "",
      classNow: "active",
      classWill: "",
      classOld: "",
      typeMovies: [],
      moviesType: "全部",
      moviesYears: "全部",
      moviesArea: "全部",
      moviesTime: null,
      active: true,
      sort: "",
      isActive: false
    };
  },
  async mounted() {

    console.log(this)
    this.moviesTime = getNowMovies;
    const result = await getNowMovies();
    console.log(result);
    if (result === "失败") {
      console.log(now);
      this.typeMovies = now.subjects;
    } else {
      this.typeMovies = result.subjects;
    }

  
  },

  components: {
    MoviesList
  },
  methods: {
    hotSort() {
      this.selected = "H";

      this.getMoviesList();
    },
    yearSort() {
      this.selected = "Y";
      this.getMoviesList();
    },
    scoreSort() {
      this.selected = "S";
      this.getMoviesList();
    },
    nowMovie() {
      this.classA = "";
      this.classNow = "active";
      this.classWill = "";
      this.classOld = "";
      this.moviesTime = getNowMovies;
      this.getMoviesList();

      // this.typeMovies=result
    },
    willMovie() {
      this.classA = "now";
      this.classNow = "";
      this.classWill = "active";
      this.classOld = "";
      this.moviesTime = getWillMovies;
      this.getMoviesList();

      // this.typeMovies=result
    },
    oldMovie() {
      this.classA = "old";
      this.classNow = "";
      this.classWill = "";
      this.classOld = "active";
      this.moviesTime = getOldMovies;
      this.getMoviesList();

      // this.typeMovies=result
    },
    selectType(e, type) {
      this.isShow=!this.isShow
      let id 
      if(id){
        clearTimeout(id)
      }else{
        id =setTimeout(() => {
         const chindren = e.target.parentNode.parentNode.children;
      for (let i = 0; i < chindren.length; i++) {
        chindren[i].style.background = "white";
        // chindren[i].style.color = '#333'
      }

      e.target.parentNode.style.background = "#f34d41";
      // e.target.parentNode.style.color = 'white'
      this.moviesType = e.target.innerText;

      //  @click="selectArea"
      this.getMoviesList();
        
      },200);
     
      }
      
    },
    selectArea(e, type) {
      // console.log(e.target.parentNode.parentNode.children);
      const chindren = e.target.parentNode.parentNode.children;
      for (let i = 0; i < chindren.length; i++) {
        chindren[i].style.background = "white";
        // chindren[i].style.color = '#333'
      }

      e.target.parentNode.style.background = "#f34d41";
      this.moviesArea = e.target.innerText;
      this.getMoviesList();
    },
    selectYears(e, type) {
      // console.log(e.target.parentNode.parentNode.children);
      const chindren = e.target.parentNode.parentNode.children;
      for (let i = 0; i < chindren.length; i++) {
        chindren[i].style.background = "white";
        // chindren[i].style.color = '#333'
      }

      e.target.parentNode.style.background = "#f34d41";
      this.moviesYears = e.target.innerText;
      this.getMoviesList();
    },

    //调用的总函数
    async getMoviesList() {
      //时间
      let getMovies = await this.moviesTime();
      if (getMovies === "失败") {
        //getOldMovies, getNowMovies, getWillMovies
        if (this.moviesTime === getOldMovies) {
          getMovies = old;
        }
        if (this.moviesTime === getNowMovies) {
          getMovies = now;
          console.log(getMovies.subjects,'内部')
        }
        if (this.moviesTime === getWillMovies) {
          getMovies = will;
        }
      }
      
      let movieArry = [...getMovies.subjects];
     
      //类型关键词
      let FirstMovieArry = movieArry.filter((item, index) => {
        // console.log(this.moviesType)
        if (this.moviesType === "全部") {
          return item;
        } else {
         
          if (
            item.genres.find(type => {
              if (type === this.moviesType) {
                return true;
              }
            })
          ) {
            return item;
          }
        }
        // console.log(item,'一次判断后')

        // if (this.moviesYears === "全部") {
        //   return item;
        // } else {
        //   if (item.year === this.moviesYears) {
        //     return item;
        //   }
        // }

        // if (this.moviesArea === "全部") {
        //   return item;
        // } else {
        //   if (item.pubdates[0].includes(this.moviesArea)) {
        //     return item;
        //   }
        // }
      });

      // console.log(FirstMovieArry, "一次判断后-----");
      let SecondMovieArry = FirstMovieArry.filter(item => {
        if (this.moviesYears === "全部") {
          return item;
        } else {
          console.log(this.moviesYears)
          if (item.year === this.moviesYears) {
            return item;
          }
        }
      });

      // console.log(SecondMovieArry, "二次判断后-----");
      let threeMovieArry =SecondMovieArry.filter(item => {
        
        if (this.moviesArea === "全部") {
          return item;
        } else {
          if (item.pubdates[0].includes(this.moviesArea)) {
            // console.log(item,'地区')
            return item;
          }
        }

      })
      //  console.log(threeMovieArry, "三次判断后-----");
      
      
      
      if (this.selected === "H") {
        threeMovieArry.sort((p1, p2) => {
          return p2.rating.average - p1.rating.average;
        });
      }
      if (this.selected === "Y") {
        threeMovieArry.sort((p1, p2) => {
          return p2.year - p1.year;
        });
      }
      if (this.selected === "S") {
        threeMovieArry.sort((p1, p2) => {
          return p2.rating.star - p1.rating.star;
        });
      }
      
      
      this.typeMovies = [...threeMovieArry];
      console.log(this.typeMovies)
      console.log(threeMovieArry, "-------过滤后");
    }
  }
};
</script>
<style lang='stylus' scoped>
.warp
  width 100%
  height 100%
  position relative
  .nav
    width 100%
    height 60px
    background-color #47464a
    text-align center
    line-height 60px
    color #999
    .item
      font-size 16px
      padding 0 40px
      &:hover
        color white
      &.active
        color red
  .triangle
    width 0
    height 0
    border 16px solid transparent
    border-bottom 16px solid white
    position absolute
    left 39.5%
    top 34px
    z-index 10
  .now
    left 49%
  .old
    left 58.5%
  .container
    width 100%
    // height 3000px // 撑开
    // background-color yellow
    .container-center
      width 90%
      height 100%
      // background-color green
      margin 0 auto
      padding 40px 0
      .classify
        width 100%
        height 225px
        border 1px solid #999
        box-sizing border-box
        padding 0 20px
        .list-ul
          width 100%
          height 100%
          .type
            position relative
            height 74px
            border-bottom 1px solid #999
            &:last-child
              border none
            .text
              // height 24px
              // width 36px
              color #999
              // font-size 14px
              // line-height 24px
              position absolute
              left 0px
              top 20px
            ul
              float left
              display flex
              align-items center
              flex-wrap wrap
              width 100%
              padding-left 40px
              margin-top 15px
              li
                width 46px
                padding 6px 9px
                white-space nowrap
                border-radius 40%
                a
                  font-size 14px
                  color #333
                  padding 5px
                  &:hover
                    color #f34d41
      .movies-warp
        margin-top 30px
        width 100%
        // background-color yellow
        .movies-header
          width 100%
          height 30px
          .control-group
            float left
            padding 0 10px
            .circle
              float left
              width 16px
              height 16px
              margin-right 5px
              border-radius 50%
              border 1px solid #999
              img
                width 100%
                height 100%
        .movies-list
          width 100%
          // background-color green
</style>