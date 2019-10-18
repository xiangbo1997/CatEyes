<template>
  <div class="wrap">
   <div class="container">
   <div class="left">
     <h1>个人中心</h1>
   </div>
   <div class="right">

     <div class="all">
      <div class="box">
<!-- 昵称：<el-input v-model="input" placeholder="请输入内容" style="width:100px" value="10"></el-input> -->
昵称:<input style="text" :value="value"/>
     </div>

     <div class="box">
性别：<el-radio v-model="radio" label="1">男</el-radio>
       <el-radio v-model="radio" label="2">女</el-radio>
     </div>
     
     <div class="box">
       <span class="demonstration">出生日期</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="选择日期">
    </el-date-picker>
     </div>

     <div class="box">
      工作过的城市：<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
     </div>

     <div class="box">
个性签名：<el-input v-model="input1" placeholder="请输入内容" style="width:300px"></el-input>
     </div>
     </div>

     
       
   </div>
   </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
const cityOptions = ['上海', '北京', '广州', '深圳','长春', '吉林', '四平', '辽源','通化', '松原', '白城', '沈阳','大连', '鞍山', '抚顺', '锦州'];
export default {
  data() {
      return {
        value:"",
       radio: '1',
        value2: '',
        input:"",
        input1:"",
         checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
        
      };
    },
     methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    },
    mounted(){
      this.value=window.localStorage.getItem("a")
      
      console.log(this.value)
      if(!this.value){
        this.$router.push("/msite")
      }
    },
    computed:{
    ...mapState(["phone","password"])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  .container
    width 60%
    height 800px
    border 1px solid #ccc
    margin-top 30px
    display flex
  .left
    width 20%
    height 100%
    background-color #f4f3f4
    border-right 1px solid #ccc
    h1
      font-size 28px
      text-align center
      padding-top 30px
      color red
  .right
    width 80%
    height 100%
    .all
      margin 90px 60px 10px
      .box
        margin-bottom 20px 
    
</style>