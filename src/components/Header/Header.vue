<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-main">
        <img src="" alt="" class="box" v-if="phone!=='18341327249'">
        <div id="logo">
          <img src="./image/logo.jpg" alt  @click="$router.push('/perform')" />
        </div>
        <div id="city">
          <select>
            <option>北京</option>
            <option>山西</option>
            <option>上海</option>
            <option>湖南</option>
          </select>
        </div>
        <ul id="nav" @click="click">
          <router-link to="/msite">
            <li style="background-color:#fc3e00">首页</li>
          </router-link>
          <router-link to="/movies">
            <li :class="{cls1:$route.path==='/movies'}">电影</li>
          </router-link>
          <router-link to="/cinema">
            <li>影院</li>
          </router-link>
          
          <router-link to="/billboard">
            <li>榜单</li>
          </router-link>
          <router-link to="/hotspot">
            <li>热点</li>
          </router-link>
          <router-link to="/market">
            <li>商城</li>
          </router-link>
          <router-link to="/profile">
            <li>个人中心</li>
          </router-link>
          <router-link to="/login" id="myLogin">
            <li v-show="phone!=='18341327249'">{{phone==="18341327249"?"已登录":"登录"}}</li>
          </router-link>
        </ul>
        <!-- <div id="download">
          <a href="javascript:;">
            <img src="./image/phone.png" alt />
            <span>App下载</span>
            <span class="caret el-icon-caret-bottom"></span>
          </a>
        </div> -->
        <div id="search">
          <input class="text" placeholder="请输入内容" v-model="searchText" @keyup.13="searchMovies" />
          <div class="search-text"></div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { reqSearchMovies } from "../../api/index.js";
import { UPDATA_SEARCH_NAME } from "../../store/mutations-type";
import { throttle } from "../../utils/index.js";
import  {mapState} from "vuex"
export default {
  data() {
    return {
      searchText: ""
    };
  },

  methods: {
    click(e) {
      typeof e.target.parentNode.parentNode.children;
      const a = e.target.parentNode.parentNode.children;
      const b = [...a];
      b.map((item, index) => {
        item.firstChild.style.background = "white";
      });
      console.log((e.target.style.background = "#fc3e00"));
    },
    searchMovies() {
      this.$store.commit(UPDATA_SEARCH_NAME, this.searchText);
      if (this.$router.history.current.path !== "/query") {
        this.$router.push("/query");
      }
    }
    
  },
  mounted(){
      // this.phone=window.localStorage.getItem("a")
      // this.password=window.localStorage.getItem("b")
      // this.phone=window.localStorage.setItem("a")
      // this.password=window.localStorage.setItem("b")
      // console.log(this.phone)
      // console.log(this.password)
  },
  computed:{
    ...mapState(["phone","password"])
    
  }


  
};
</script>
<style lang="stylus">
.header
  width 100%
  height 80px
  background-color white
  border-bottom 1px #cccccc solid
  .header-inner
    display flex
    align-items center
    justify-content center
    .header-main
      display flex
      height 80px
      .box
        width 75px
        height 80px
        background-color white
        position absolute
        left 977px
      #logo
        width 133px
        height 100%
        img
          width 133px
          height 80px
      #city
        width 70px
        height 100%
        select
          width 70px
          height 80px
          font-size 15px
          border 0
      #nav
        height 100%
        width 540px
        display flex
        justify-content space-between
        :hover
          color #FFCC33
        #myLogin
          position relative
          z-index 199999
        li
          width 81px
          height 80px
          font-size 18px
          text-align center
          line-height 80px
          color black
          &.cls1
            background-color #fc3e00
      #download
        width 132px
        height 100%
        a
          width  132px
          height 80px
          display flex
          align-items center
          justify-content center    
      #search
        position relative
        width 220px
        height 100%
        .search-text
          width 40px
          height 40px
          background-color #ef4238
          background-image url('./image/search.png')
          background-repeat no-repeat
          position absolute
          left 324px
          top 21px
          border-radius 50%
        .text
          width 220px
          height 40px
          position absolute
          top 20px
          left 0
          border 1px #ccc solid 
          border-radius 50px
          outline none
          padding-left 18px
          margin-left 125px 
</style>