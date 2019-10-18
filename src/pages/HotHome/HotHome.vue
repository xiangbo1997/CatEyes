<template>
  <div class="appLeft">
    <div class="left">
      <div class="header-top">
        <h1>最新资讯</h1>
        <div class="headerRight">
          <a href @click="$router.push('/hotspot/newinformation')">
            <span>全部</span>
            <span>></span>
          </a>
        </div>
      </div>
      <div class="section">
        <ul class="hotList">
          <li v-for="(item,index) in hothome" :key="index">
            <a href>
              <img :src="item.hotLeftImg" />
              <p>{{item.hotImgText}}</p>
            </a>
            <div class="itemFooter">
              <p>猫眼电影</p>
              <span>{{item.hotCore}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="header-right">热门资讯</div>
      <div class="hotImge">
        <a href="javascript">
          <img
            class="hotImgeIcon"
            src="https://p1.meituan.net/movie/2d4bcb47a6fefdad480645429c2bb7fe221148.jpg@120w_72h_1e_1c"
            alt
          />
          <span class="text">1</span>
        </a>
        <p>
          <a href="javascript:;">海王里的湄拉只有86斤，身高1米75，这身材不科学啊</a>
        </p>
      </div>
      <ul class="hotList">
        <li>
          <div>
            <i class="hotNumber">2</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <i class="hotNumber">3</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>4</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>5</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>6</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>7</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>8</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>9</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i>10</i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>

        <li>
          <div>
            <i></i>
            <p>
              <a href="javascript:;">《蜘蛛侠：平行宇宙》今日上映口碑炸裂，9+超高能评分席卷全国！</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {hothome} from '../../mock/data.json'
import Vue from 'vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hothome:[]
    }
  },
  // computed: {
  //   ...mapState(['hothome'])
  // },
  mounted() {
    this.hothome = hothome
    // console.log(this)
    //this.$store.dispatch('getHot')
    // this.$store.dispatch('getHot')
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.appLeft
  width 100%
  display flex
  justify-content space-around
  .left
    width 65%
    height 26px
    .header-top
      width 100%
      height 26px
      margin-top 40px
      padding 20px 0
      display flex
      justify-content space-between
      h1
        color #ef4238
        font-size 26px
      .headerRight
        text-align center
        line-height 26px
        a
          color #ef4238
    .section
      width 100%
      .hotList
        width 100%
        display flex
        justify-content space-between
        flex-wrap wrap
        li
          width 30%
          magin-right 10px
          a
            p
              font-size 14px
            img
              width 230px
              height 129px
          .itemFooter
            display flex
            justify-content space-between
            font-size 14px
            padding 5px 0
  .right
    width 30%
    .header-right
      font-size 26px
      color #ef4238
      margin-top 40px
      padding 20px 0
    .hotImge
      color #333
      display flex
      a
        height 68px
        display inline-block
        font-size 14px
        position relative
        img
          width 120px
          height 68px
        .text
          width 18px
          height 18px
          display inline-block
          position absolute
          background-color red
          left 0
          bottom 0
          text-align center
      p
        margin-left 10px
    .hotList
      margin-top 15px
      li
        padding 10px 0
        box-sizing border-box
        // background-color yellow
        div
          display flex
          i
            color #999999
            &.hotNumber
              color #ef4238
          p
            margin-left 20px
            font-size 14px
              a
                &:hover
                  color #ef4238
</style>