<template>
  <div id="app">
    <div class="header">
      <Header />
      1231233
    </div>
    <div class="content">
      <router-view />

      <footer id="msit-footer">
        <p class="friendly-links">
          关于猫眼 :
          <a href="http://ir.maoyan.com/s/index.php#pageScroll0">关于我们</a>
          <span></span>
          <a href="http://ir.maoyan.com/s/index.php#pageScroll1">管理团队</a>
          <span></span>
          <a href="http://ir.maoyan.com/s/index.php#pageScroll2">投资者关系</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          友情链接 :
          <a href="http://www.meituan.com">美团网</a>
          <span></span>
          <a href="http://www.gewara.com">格瓦拉</a>
          <span></span>
          <a href="http://i.meituan.com/client">美团下载</a>
          <span></span>
          <a href="https://www.huanxi.com">欢喜首映</a>
        </p>
        <p class="friendly-links">
          商务合作邮箱：v@maoyan.com
          客服电话：10105335
          违法和不良信息举报电话：4006018900
        </p>
        <p class="friendly-links">
          用户投诉邮箱：tousujubao@meituan.com
          舞弊线索举报邮箱：wubijubao@maoyan.com
        </p>
        <p class="friendly-links credentials">
          <a href="/about/licence/1" target="_blank">中华人民共和国增值电信业务经营许可证 京B2-20190350</a>
          <span></span>
          <a href="/about/licence/4" target="_blank">营业性演出许可证 京演（机构）（2019）4094号</a>
        </p>
        <p class="friendly-links credentials">
          <a href="/about/licence/3" target="_blank">广播电视节目制作经营许可证 （京）字第08478号</a>
          <span></span>
          <a href="/about/licence/2" target="_blank">网络文化经营许可证 京网文（2019）3837-369号</a>
        </p>
        <p class="friendly-links credentials">
          <a href="/rules/agreement" target="_blank">猫眼用户服务协议</a>
          <span></span>
          <a href="/rules/rule" target="_blank">猫眼平台交易规则总则</a>
          <span></span>
          <a href="/rules/privacy" target="_blank">隐私政策</a>
        </p>
        <p class="friendly-links credentials">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102003232"
            target="_blank"
          >
            京公网安备
            11010102003232号
          </a>
        </p>
        <p>北京猫眼文化传媒有限公司</p>
        <p>
          ©2016
          猫眼电影 maoyan.com
        </p>
        <img src="http://p0.meituan.net/moviemachine/e54374ccf134d1f7b2c5b075a74fca525326.png" />
        <img src="http://p1.meituan.net/moviemachine/805f605d5cf1b1a02a4e3a5e29df003b8376.png" />
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  


};
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
  position relative
  border-top 1px solid #ccc//新增
  .header
    position fixed
    z-index 999
  .content
    margin-top 80px
    width 100%
    #msit-footer
      width 100%
      height 374px
      background #262426
      text-align center
      a
        color #ef4238
      p
        color #cccccc
      .friendly-links a
        color red
        margin 0 7px
      .friendly-links
        margin 20px 7px
      img
        margin 10px
</style>
