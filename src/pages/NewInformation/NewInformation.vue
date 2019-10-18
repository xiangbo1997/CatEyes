<template>
  <div class="newContainer">
    <div>
      <ul class="newList">
        <div class="block">
          <li v-for="(item,index) in  newinformations" :key="index" class="demonstration">
            <img :src="item.newImg" alt />
            <div class="newText">
              <h3>{{item.newImgText}}</h3>
              <p>{{item.newImgContent}}</p>
              <div class="newFooter">
                <div>
                  <span>猫眼电影</span>
                  <span>10-16</span>
                </div>
                <div>318</div>
              </div>
            </div>
          </li>
          <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { newinformations } from '../../mock/data.json'
export default {
  data() {
    return {
      newinformations: []
    }
  },
  mounted() {
    this.newinformations = newinformations
  }
  // computed: {
  //   hothome() {
  //     //存储的是多个小数组，小数组的个数决定了有多少页
  //     let bigArr = []
  //     let smallArr = []
  //     //遍历数据，进行大数据的装载数据
  //     newinformations.forEach(item => {
  //       //小数组中没有数据，则把小数组添加到大数组中
  //       if (smallArr.length == 0) {
  //         bigArr.push(smallArr)
  //       }
  //       //向小数组添加数据
  //       smallArr.push(item)
  //       //判断，如果小数组中的数据个数为6的时候，重新下一次的添加数据（小数组重新添加到大的数组中，小数组继续添加数据）
  //       if (smallArr.length === 6) {
  //         smallArr = []
  //       }
  //     })
  //     return bigArr
  //   }
  // }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.newList
  font-size 16px
  color #999999
  margin-top 40px
  li
    display flex
    width 730px
    height 110px
    padding 30px 50px
    border-bottom 1px solid #e5e5e5
    img
      width 160px
      height 100px
    .newText
      h3
        font-size 16px
        margin 10px
        font-weight 700
        color #333
      p
        padding 0 10px 10px
        font-size 12px
        line-height 18px
        box-sizing border-box
        vertical-align middle
      .newFooter
        font-size 12px
        vertical-align middle
        display flex
        justify-content space-between
        span
          margin-left 10px
        p
          vertical-align middle
          text-align center
          // margin-left 100px
</style>