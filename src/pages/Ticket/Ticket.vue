<template>
  <div>
    <DetailHeader slot="goTick" ></DetailHeader>
    <div class="classify">
      <ul class="list-ul">
            <li class="type">
              <div class="text">日期:</div>
              <ul>
                <li v-for="(data,index) in datas" :key="index" @click="select($event,datas)">
                  <a href="javascript:;">{{data}}</a>
                </li>
              </ul>
            </li>
            <li class="type">
              <div class="text">品牌:</div>
              <ul>
                <li v-for="(brand,index) in Brand" :key="index" @click="select($event,Brand)">
                  <a href="javascript:;">{{brand}}</a>
                </li>
              </ul>
            </li>
            <li class="type">
              <div class="text">行政区:</div>
              <ul>
                <li v-for="(local,index) in locals" :key="index" @click="select($event,locals)">
                  <a href="javascript:;">{{local}}</a>
                </li>
              </ul>
            </li>
            <li class="type">
              <div class="text">特殊厅:</div>
              <ul>
                <li v-for="(spacel,index) in spacels" :key="index" @click="select($event,spacels)">
                  <a href="javascript:;">{{spacel}}</a>
                </li>
              </ul>
            </li>
          </ul>
    </div>
    <ul class="buyTicket">
      <div class="title">
        <div></div>
        <span>电影列表</span>
      </div>
      <li class="ticket-item" v-show="Brand[1]">        
        <p class="cinema">万达影城</p> 
        <div class="Address">
          <span>地址：朝阳区大屯里金泉购物中心318号楼4层</span> 
          <span class="price"> <span class="red">￥64</span>起</span>
          <el-button type="danger" round class="btn" size="mini">选座购票</el-button>          
        </div> 
        
      </li>
     <li class="ticket-item" v-show="Brand[5]">        
        <p class="cinema">金泉港IMAX国际影城</p> 
        <div class="Address">
          <span>地址：朝阳区大屯里金泉购物中心318号楼4层</span> 
          <span class="price"> <span class="red">￥64</span>起</span>
          <el-button type="danger" round class="btn" size="mini">选座购票</el-button>          
        </div> 
        
      </li>
    </ul>
  </div>
</template>
<script>
import DetailHeader from "../../components/DetailHeader/DetailHeader.vue";
export default {
  components: {
    DetailHeader
  },
  data() {
    return {
      datas: [
        "今天",
        "周六 10月19",
        "周日 10月20",
        "周一 10月21",
        "周二 10月22",
        "周三 10月23",
        "周四 10月24",        
      ],
      Brand: [
        "全部",
        "万达影城",
        "大地影院",
        "成龙国际影城",
        "保利国际影城",
        "博纳国际影城",
        "CGV影城",
        "华谊兄弟影院",
        "星美国际影城",
        "东都影城",
        "万达影城",
        "百老汇影城"
      ],
      locals:[
        "全部",
        "地铁附近",
        "朝阳区",
        "海淀区",
        "丰台区",
        "大兴区",
        "东城区",
        "昌平区",
        "西城区",
        "房山区",
        "通州区",
        "顺义区",
        "怀柔区",
        "密云区",
        "门头沟区"
      ],
      spacels:[
        "全部",
        "IMAX厅",
        "儿童厅",
        "4D厅",
        "4K厅",
        "巨幕厅",
      ],
      chose:''
    };
  },
  methods:{
    // 点击改变样式
    choseColor(){
      console.log(1)
      let {chose} = this
      if(chose === ''){
        chose = 'colorChange'
      } else if(chose === 'colorChange'){
        chose = ''
      }
      this.chose = chose;
    },
    select(e, type) {
      const chindren = e.target.parentNode.parentNode.children;
      for (let i = 0; i < chindren.length; i++) {
        chindren[i].style.background = "white";
      }
      e.target.parentNode.style.background = "#f34d41";
      this.moviesArea = e.target.innerText;
    }
  },
  watch:{
    $route(){
      console.log(this.$route.path)
      if(this.$route.path === '/detail'){
        this.$store.commit('UPDATE_SHOWDETAIL',true)
      }else if(this.$route.path === '/detail/ticket'){
        this.$store.commit('UPDATE_SHOWDETAIL',false)
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.classify
  width 90%
  margin 0 5%
  height 300px
  border 1px solid #999
  box-sizing border-box
  padding 0 20px
  margin-top 30px
  .list-ul
    width 100%
    height 100%
    .type
      font-size 14px
      position relative
      height 74px
      border-bottom 1px dashed #999
      &:last-child
        border none
      .text
        color #999
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
          width 49px
          padding 6px 35px
          white-space nowrap
          &:first-child
            width 11px
            margin-left 9px
            border-radius 10px
            background-color red
        .colorChange
          width 11px
          margin-left 9px
          border-radius 10px
          background-color red
          a
            14px
            color #333
.buyTicket
  width 90%
  margin 30px 5%
  .title
    display flex
    div 
      width 5px
      height 20px
      background-color red
      margin-right 5px
    span 
      font-size 20px
      font-weight 700  
      margin-bottom 15px 
  .ticket-item
    height 60px
    width 100% 
    border-bottom 1px dashed #999
    margin 10px 0
    .cinema
      font-size 16px
      color #333 
    .Address
      font-size 14px
      color #999
      margin 10px 0
      position relative 
      .price
        float right
        margin-right 100px 
        font-size 16px
        font-weight 700
        .red
          color red 
          margin-right 5px
      .btn
        position absolute
        right 0
        bottom -7px
        font-size 14px            
</style>