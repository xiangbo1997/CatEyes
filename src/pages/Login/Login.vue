<template>
  <div class="wrap">
    <div>
<img class="imges" src="./image/logo.jpg" alt="">
    </div>
      
    <div class="content">
      <div class="left">
        <img class="imges2" src="./image/111.png" alt="">
      </div>
      <div class="right">
        <p>请登录:</p>
        <!-- <div>
        手机号:<input placeholder="手机号码" class="input1"/>
        </div>
      <div>
       密码:<input placeholder="密码" class="input2"/>
      </div> -->
      <form name="myForm" action="demo-form.php" onsubmit="return validateForm()">
        <div>
电话: <input type="text" name="phone" class="button1" v-model="input1"/>
        </div>
      <div>
密码: <input type="password" name="password" class="button2" v-model="input2"/>
      </div>
      
      <div class="btn">
<button @click.prevent="btn">登录</button>
      </div>
      
      </form>
      </div>
    </div>
  </div>
</template>
<script>
import {RECEIVE_PASSWORD,RECEIVE_PHONE} from "../../store/mutations-type.js"
import  {mapState} from "vuex"
let datas=require("./datas/data.json")
export default {
  data(){
    return{
     people:{},
     input1:"",
     input2:""
    }
  },
  mounted(){
        this.people=datas[0]
        
  },
  methods:{
  btn(){
   if (this.input1===this.people.phone&&this.input2===this.people.password) {
     window.localStorage["a"]=this.people.phone
    window.localStorage["b"]=this.people.password
    this.$store.commit(RECEIVE_PHONE,this.input1)
      this.$store.commit(RECEIVE_PASSWORD,this.input2)
     this.$router.push("/Profile")
   }

   
  //  console.log(this.data)
  //  console.log(this.input1)
  }
  },
  computed:{
    ...mapState(["phone","password"])
  }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 60%
  display flex
  flex-direction column
  .imges 
    width 150px
    height 100px
    margin-top 20px
    margin-left 110px
  .content
    display flex
    width 100% 
    .left
      width 50%
      .imges2
        margin-top -77px
    .right
      width 50%
      margin-top 10px
      text-align center
      .button1
        width 200px
        height 30px
        border 1px solid black
        margin-bottom 20px
      .button2
        width 200px
        height 30px
        border 1px solid 
      .btn
        margin-top 30px

      


    
      
     


</style>