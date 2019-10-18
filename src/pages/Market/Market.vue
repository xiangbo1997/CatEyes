<template>
<div class="wrapper">
<ul class="wrap" > 
 <li @click.prevent="changeShow(index)" v-show="isShow" class="container"  v-for="(market,index) in markets" :key="index">
    <a href="/market/marketdetail" class="detail">
      <img :src="market.images" alt="" style="width:285px"/>
      <div class="alltest">
        <p class="test-top">{{market.content}}</p>
        <p class="number">
          <span>￥{{market.newPrice}}</span>
          <span class="content">￥{{market.oldPrice}}</span>
        </p>
      </div>
    </a>
  </li>
  <router-view></router-view>
</ul>
 
</div>


</template>
<script>
let datas=require("./datas/data.json")
export default {
  data(){
    return {
      markets:[],
      isShow:true
    }
  },
  watch:{
    $route(){
      // console.log(this.$route.path)
      if(this.$route.path==='/market'){
        this.isShow=true
      }
    }
  },

  mounted(){
    this.markets=datas
    // console.log(this.markets)
     // console.log(this.$router.history.current.path)
    //this.isShow=true
  },
  
  methods:{
    changeShow(i){
      this.isShow=!this.isShow
      // console.log(this.isShow)
      // console.log(this.$router.history.current.path)
      this.$router.push("/market/marketdetail?id="+i+'')
      //this.$router.replace("/market/detail?id="+i)
    }
  }
  
};
</script>
<style lang="stylus" rel='stylesheet/stylus' scoped>
.wrapper
  width 100%
  .wrap
    display flex
    flex-wrap wrap
    width 1000px
    margin 0 auto
    .container 
      width 300px
      height 353px
      text-align center
      .detail
        display block
        width 380px
        height 353px
        text-align center
        margin-top 10px
        img 
          width 285px
          height 285px
        .alltest
          width 380px
          height 68px
          .test-top
            text-align center
            font-size 24px
            font-weight bold 
          .number
            text-align center
            font-size 20px
            color red
            .content
              color #666
              text-decoration line-through 


</style>