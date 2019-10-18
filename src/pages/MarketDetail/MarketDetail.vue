<template>
<div>
<ul class="wrap">
<li>
  <div class="wrap-top">首页<span>>商城>{{obj.content}}</span></div>
  <div class="top">
   <div class="top-left">
      <div class="top-left-top">
        <img :src="obj.images" alt=""/>
      </div>
      <div class="top-left-down">
        <img :src="obj.images" alt=""/>
        
      </div>
   </div>
   <div class="top-right">
     <h3>{{obj.content}}</h3>
     <div class="top-right-box">
       <span class="red">￥{{obj.newPrice}}</span>
       <span class="gray">￥{{obj.olbPrice}}</span>
     </div>
     <p class="p-serve">服务： 正版授权《售后服务》</p>
     <p class="p-tick">说明：该商品由第三方卖家提供</p>
     <button>立即抢购</button>
   </div>
  </div>
  <div class="down">
    <div class="down-content">图文详情</div>
    <div class="box">
      <p>商品名称:{{obj.content}}</p>
      <p>数量:1个</p>
      <p>价格:159</p>
      <p>品牌:航海王</p>
      <p>产地:广东省</p>
    </div>
     
     <div class="down-collect">
      <p class="down-bottom-content">本产品由尚硅谷提供服务 并发货</p>
      <img :src="obj.imgs" alt="">
     </div>
      
   
  </div>
</li>
</ul>
</div>

</template>
<script>
let datas=require("../Market/datas/data.json")
export default{
  data(){
    return {
      details:[],
      obj:{}
    }
  },
  mounted(){
    this.details=datas
    //console.log(this.details)
    //console.log(this.$router.history.current.query.id)
    this.details[this.$router.history.current.query.id]
    this.obj=this.details[this.$router.history.current.query.id]
  //   this.obj= this.details.filter((item,index)=>{
  //  if (index===this.$router.history.current.query.id) {
  //    return item
  //  }
  //   })
    //console.log(this.details[this.$router.history.current.query.id])
  
  }

 }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.wrap
  width 70%
  display flex
  flex-wrap wrap
  margin 0 auto
  .wrap-top
    width 100%
    border-bottom 1px solid #666
    margin-bottom 30px
    padding-bottom 10px
    span 
      color #666
  .top
    display flex
    .top-left
      .top-left-down
        display flex
        justify-content space-between
        img 
          width 60px
          height 60px
    .top-right
      margin-left 50px
      h3
        font-size 28px
        font-weight bold
        margin-bottom 20px
      .top-right-box
        height 50px
        width 270px
        background-color #ccc
        margin-bottom 30px
        .red
          color red
          font-size 30px
          text-align center
          line-height 50px
          margin-left 20px
        .gray
          color white
          text-decoration line-through
          font-size 20px
          text-align center
          line-height 50px
          margin-left 20px
      .p-serve
        font-size 12px
        color gray
        margin-bottom 30px
      .p-tick
        margin-bottom 30px
        font-size 12px
        color orange 
      button 
        color white
        width 200px
        height 40px
        font-size 20px
        text-align center
        line-height 40px
        border-radius 24px 28px 24px 28px
        background-color red
        outline none
        border 2px solid red
  .down
    width 100% 
    .down-content
      margin-top 50px
      padding-bottom 10px
      font-size 18px
      color red
      border-bottom 1px solid #ccc
    .box
      margin-top 20px 
      width 100%
      height 100px
      background-color pink
      display flex
      flex-direction column
      justify-content space-around
      margin-bottom 30px
    .down-collect
      margin-left 30px
      .down-bottom-content
        font-size 20px
        font-weight bold
        margin-left 150px


  


     
      

</style>