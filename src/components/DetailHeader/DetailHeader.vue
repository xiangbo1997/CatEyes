<template>  
  <div>
      <el-dialog
        class="dialog"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
        >
        <!-- <span v-if="value!==0||value!=='null'" class="number">{{value==='null'?'':`${value}分，${texts[value-1]}`}}</span> -->
        <span v-if="value!==0" class="number">{{value===0?'':`${value}分，${texts[value-1]}`}}</span>
        <!-- 评分 -->
        <el-rate v-model="value"></el-rate>
        <!-- <el-rate v-model="value" show-text :texts="texts" @change="changeValue"></el-rate> -->
        <!-- clearable @blur="textarea===''" @clear="textarea===''" -->
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="markSure" :disabled="value?false:true">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 详情 -->
      <div class="context">
        <div class="left">
          <img
            class="bigImg"
            :src="myMovie.image"
            alt
          />
        </div>
        <div class="title">
          <div class="cinemaName">
            <p>双子杀手</p>
            <p>Gemini killer</p>
          </div>
          <div class="typeItem">
            <p>{{myMovie.tags}}</p>
            <p>日本 / {{myMovie.durations}}</p>
            <p>{{myMovie.pubdates}}</p>
            <div class="btns">
              <div class="top-btn">
                <el-button class="love" @click="wantView">
                  <!-- 想看、已想看 -->
                  <span :class="view"></span>
                  {{value>0 ? '看过':  content}}
                </el-button>
                <el-button class="score" @click="dialogVisible = true">
                  <span class="el-icon-star-off" @click="dialogVisible = true"></span>
                  {{value?`${value}分,${texts[value-1]}`:'评分'}}
                </el-button>
              </div>
              <el-button type="danger" class="bottom-btn" @click="toTitck" v-if="this.$route.fullPath!=='/detail/ticket'"><slot name="goTick">特惠购票</slot></el-button>
              <el-button type="danger" class="bottom-btn" v-show="this.$route.fullPath==='/detail/ticket'">查看电影详情</el-button>
            </div>
          </div>
        </div>
        <ul class="ratings">
          <li>
            <div class="small">用户评分</div>
            <div class="ratingScore">
              <div>{{myMovie.score}}</div>
              <div class="small">
                <p>126.6万人评分</p>
              </div>
            </div>
          </li>
          <li>
            <div class="small">累计票房</div>
            <div>25.18亿</div>
          </li>
        </ul>
      </div>
  </div>

</template>
<script>
let  datas = require ('./data/data.json')
import { UPDATE_SHOWDETAIL } from "../../store/mutations-type.js";
export default {
   data() {
    return {
      myMovie: {},
      wantSee:false,
      dialogVisible: false,
      value: null,
      textarea: '',
      texts:['极差', '失望', '一般', '满意', '惊喜'],
      content:'想看',
      view:'el-icon-view',
      idWant:true,
      star:0,

    };
  },
  // props:["movie"],
  mounted(){
    this.myMovie = datas
    console.log(this.$route)
  },
  methods:{
    changeValue(e){
      console.log(e)
      // e就是当前星星改变时我们所设置的分数
      this.value = e
      if(this.content === '想看'|| this.content === '已想看'){
        
          this.content = '看过'
        
      }
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.value = 0
            this.textarea = ''
            done();
          })
          .catch(_ => {});
      },
    wantView(){
      this.wantSee = !this.wantSee
      if(this.content ==='想看'){
        this.content = '已想看'
      }else if(this.content === '已想看'){
        this.content ='想看'
      }else{
        this.value = 0
      }
      
    },
    markSure(){
      this.dialogVisible = false 
      this.textarea=''
    },
    toTitck(){
      this.$router.push('/detail/ticket')
      this.$store.commit(UPDATE_SHOWDETAIL,false)
    }

    },
    watch:{
    value(){
      this.wantView()
      
    },
    content(){
      if(this.content === '想看'){
        this.view = 'el-icon-view'
      }if(this.content === '已想看'){
        this.view = 'el-icon-s-flag'
      }else if(this.content === '看过'){
        this.view = 'el-icon-s-management'
      }
    }
  },
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>

.el-dialog
  height 300px
  border-radius 50px
  border 10px solid #999
  .number
    font-size 20px
    color yellow
  .el-input
    margin-top 8px
.context
  width 100%
  height 380px
  position relative
  background-color #392f59
  background-image linear-gradient(to bottom right, purple 5%, #392f59)
  .left
    width 300px
    height 370px
    position absolute
    top 60px
    left 50px
    .bigImg
      width 240px
      height 330px
      border 5px solid white
      box-shadow 0px 8px 1px rgba(111,30,111,.5)
  .title
    width 900px
    height 150px
    padding 50px 330px
    p
      color white
    .cinemaName
      font-size 28px
      margin-bottom 20px
    .typeItem
      p
        margin-bottom 10px
      .btns
        margin-top 80px
        display flex
        flex-direction column
        .top-btn
          margin-bottom 10px
        .love
          width 100px
          background-color rgba(0, 0, 0, 0.5)
        .score
          width 100px
          background-color rgba(0, 0, 0, 0.5)
          color #2ab744
        .bottom-btn
          width 220px
  .ratings
    width 150px
    height 150px
    color white
    position absolute
    left 630px
    font-size 20px
    .ratingScore
      display flex
    div
      margin 6px
    .small
      font-size 12px
</style>