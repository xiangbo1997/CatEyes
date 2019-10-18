<template>
  <div class="nav-wrapper">
    <div class="nav">
      <a class="item" @click="nowMovie" :class="classNow">正在热映</a>
      <a class="item" @click="willMovie" :class="classWill">即将上映</a>
      <a class="item" @click="oldMovie" :class="classOld">经典影片</a>
    </div>
    <div class="triangle" :class="classA"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      classA:'',
      classNow:'active',
      classWill:'',
      classOld:''
    };
  },
   methods: {
    nowMovie() {
      this.classA=''
      this.classNow='active';
      this.classWill=''
      this.classOld =''
      
    },
    willMovie() {
      this.classA='now'
      this.classNow='';
      this.classWill='active'
      this.classOld =''
    },
    oldMovie() {
      this.classA='old'
       this.classNow='';
      this.classWill=''
      this.classOld ='active'
    }
  }
};
</script>
<style lang="stylus">
.nav-wrapper
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
</style>