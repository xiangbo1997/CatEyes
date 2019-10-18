<template>
  <div class="app">
    <div class="header-ho">
      <ul class="ulList">
        <li @click="cls='cls0'">
          <router-link to="/hotspot/hothome" class="active native">热点首页</router-link>
        </li>
        <li @click="cls='cls1'">
          <router-link to="/hotspot/newinformation" class="active">新闻资讯</router-link>
        </li>
        <li @click="cls='cls2'">
          <router-link to="/hotspot/trailer" class="active">预告片</router-link>
        </li>
        <li @click="cls='cls3'">
          <router-link to="/hotspot/picture" class="active">精彩图片</router-link>
        </li>
        <li @click="cls='cls4'">
          <router-link to="/hotspot/hotmusic" class="active">热门音乐</router-link>
        </li>
      </ul>
      <div class="star" :class="cls"></div>
    </div>
    <div class="container-hot">
 <router-view />
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      cls: ""
    };
  },
  methods: {
    handel1() {
      console.log;
      this.cls = "cls1";
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.app
  width 100%
  height 100%
  .header-ho
    // width 100%
    height 60px
    position relative
    background-color #000000
    .ulList
      height 100%
      display flex
      list-style none
      justify-content center
      align-items center
      li
        width 114px
        height 60px
        text-align center
        line-height 60px
    .star
      position absolute
      width 0
      height 0
      // transform translate(421px, -20px)
      left 34.5%
      top 40px
      border 10px solid rgba(0, 0, 0, 0)
      border-bottom 10px solid rgba(255, 255, 255, 1)
      &.cls0
        left 34.5%
      &.cls1      
        left 42%
      &.cls2
        left 49.5%
      &.cls3
        left 56.5%
      &.cls4
        left 64.5%
      // border-top 1px solid rgba(0,0,0,.5)
      // border-right 1px solid rgba(0,0,0,.5)
      // border-left 1px solid rgba(0,0,0,1)
      li
        width 144px
        height 100%
        line-height 60px
      .active
        text-decoration none
        color #999
        &.native
          color red
  .container-hot
    width 100%
    margin-top 60px        
</style>
