<template>
  <div class="shopContainer">
    <div class="shopHeader">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 4"></el-step>
      </el-steps>
    </div>
    <div class="shopBottom">
      <div class="shopLeft">
        <div class="shopSeat">
          <div>
            <span class="shopImg1"></span>
            <span>可选座位</span>
          </div>
          <div>
            <span class="shopImg2"></span>
            <span>已售座位</span>
          </div>
          <div>
            <span class="shopImg3"></span>
            <span>已选座位</span>
          </div>
          <div>
            <span class="shopImg4"></span>
            <span>情侣座位</span>
          </div>
        </div>
        <div class="screenContext">
          <div class="screenText">银幕中央</div>
          <div class="secreenLine"></div>
        </div>
        <div class="ticket">
          <div class="ticketLeft">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
          <div class="ticketRight">
            <div class="tickeOne">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </div>
            <div class="tickeTwo">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
             
            </div>
          </div>
        </div>
      </div>
      <div class="shopPay"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shopContainer
  width 100%
  height 100%
    .el-steps
      width 100%
      height 100%
  .shopBottom
    margin auto
    width 80%
    height 700px
    border 1px solid red
    margin-top 50px
    .shopLeft
      width 70%
      height 100%
      padding 30px
      box-sizing border-box
      border 1px solid green
      .shopSeat
        display flex
        justify-content space-around
        div
          width 110px
          height 26px
          display flex
          .shopImg1
            display inline-block
            width 35px
            height 24px
            cpolor #666666
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAY9JREFUSA3tVs1qg0AQ3l1/i5eCFC8+QSC0+BQ999QeC32t9lLovac8RQwk6BOUXLzVitFE0/mEDVIiJsbkUgeM7jjzfd/OjpvlrGZhGL6uVqvnsix5zX3yoxBia5rm22g0etkL5vt+WRTFtm8DJrDrpKI+wExJXd3VyzMw/1axf5YDpe6IqRSPUJZlGdQdmN4eBixgAps4nmRGRUyOCTneXddlnHOWJEkv5CAFFjCBTeOP2Wz2CXI+nU7vqZkmnudVAXBuNptKpWVZGHa2OI4ZdTPTNK3CIB42n89TarYHQWpuHcfJoEqaqqqViFNKDhKUV5ICGxy2bQt6d4cfU1EUQ5LKO4KQ3NWQW5+MxAEXCbraNZd8can7QHypSrOh1EOpz1YBtQkZOw+2zK67V1teI7FhGGy9XjfpavWDWNf1xrhGYtpTGa5z2f/6jmkZFPwff0VR1H0xj1yL5XKJhv3hQRDoaZriILClKz8S5+hwIk3ptHNTHTtowBeLxXWe5/2d8vZIoi4X4/H4myZY/AJMWAAq2pF/7QAAAABJRU5ErkJggg==')
            background-repeat no-repeat
            margin-right 5px
          .shopImg2
            display inline-block
            width 35px
            height 24px
            cpolor #666666
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAeRJREFUSA3tlr9Lw0AUx99dmyZtpRbBX6AOoiAG1KF1EXFUcBMEHRX/LV0EFyfBUhwFJwWdXC2CIKKIttU0TXLPd6kJaaFQz3bSB0kud+99P3ePl7swiNjZ4uz+h+PueAgs0v3rZowBpjXtYPXydi8QiwcN+ZTQlbEBFmNd5YKHyM4fXncJEYJ5FCxX2m2o1JearVlsAkcn0et2CD7NmVt6nMPdu0Up97rGrdY9X1NqFxbN7UDYBxfzs0XO4HCqPwVxzuH6uQIVxw18lJ9VWsDNSwU0EpfaQoijYt48kYKskDfXBIri0mgWaNy3Z8uBUtmC3FAm7GuMdH5HBLh4fIPpbBJGUrofKKjv6qlsuQgbHBnMj/cZdgCVHoNJzS8IyxWdk1o8bSFAi/EQKoclYzitySwvcCbQoKJrTCkSnCAvh4JVzaXlGdHVfAtxYDoCJsPiUgWoxv2DVTP347j/VP84ZaoBfy/VTT8C0bQ5KKDmefBiqe1etB+D3JvbWVvwZCYFj582xan9jSCdEhMZox0X2oKzehzk1Sv7Y8WFLMaR48PTZ93pVUpbde8rNaBjuMpuN83EXUnYVEJIx2e91bHb7/SNWOn08KBfslSBrLA8l9WNhNq30+Hs7Fqdr4/OlNnxsfcFxEaatII5mN4AAAAASUVORK5CYII=')
            background-repeat no-repeat
            margin-right 5px
          .shopImg3
            display inline-block
            width 35px
            height 24px
            cpolor #666666
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAoxJREFUSA3Fls9LFGEYx78z7rq7WuEiQqEVi1SHwjrVSU9aghURJYa2UUgd+nEuKAg6dK7cQ6FSCYrdosK/oFupFF46CLkFBZm7s+K4P2benmfGHRx3t5nZXdln2Zl5n3me5/O+z/vMMyNhk0RfY0zL4qrQIW1SV3wpyRA+P8ZfRTGcD+bLX/CZoeF9kMiwqiIEpJXvuEZBLbANwSutNpRXIFH+tmbRBq7qMh2CWeDLoxjgnV1bNlLu4Ob+di5txuTYQ+O4lPc0wEOjmNGAicZmUpMmEQfYoVLhGMmflOo6gGPrGiYHx/CW40oE7dUFZpojPDJR6RTNcgVo2mvuj6n1flxeJGALENy54SuAv0tQJR3nZR042hBGOg9lkwAZcpFRlXuSPY1H4JODho+eoxj0zFhQ1tLCgrsgU5Ufk2kQpIkEthJkSg9VomvparuDeye+4vjuqOFDaYVsVZAtTICYoeK3bHbOg66227hw8AmWlE+Y/T3t7EAWrsFXDk+he//dgqCdrbcI+tSAxuZ7sK4lC2yKKVyD6+UGnG1/jL7IIytOZ+tNXDz0jKCfEZs/CTWXsO45Xdha5v+MXy4M4HrHO5yK3Iegn5L5RdARxFOzBO0hKD0GHsQ1OKurePHlDG50vEdv5IGBiKfmMDLX7RnKzq5TzcYMf07whT8fsJj4iFiZUI7lesVszJLV1wh+2hxUcPS04go4Ba41A5dMNXceLUONnVpfWUJdb6P1F3UvCea3ybpS1MedkvpwKFzatCTYHwL4v11Ssz2uFbiOwT8yCjy+ecvfAJU7q8Cq9PAN6r8ljQ8BQbOgOt5eoZpTD7Sjxah4/u4dnETTDj88vPq9T3A1C/mcH0p/P7R/ODnAZaZCuGEAAAAASUVORK5CYII=')
            background-repeat no-repeat
            margin-right 5px
          .shopImg4
            display inline-block
            width 35px
            height 24px
            cpolor #666666
            background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAaCAYAAAAOl/o1AAAAAXNSR0IArs4c6QAAAfFJREFUWAntmM1qwkAQxzffKV4KEiTgK0iLvkTPPbWv0lN76JMUeu/Jp1BB8Q2KHrzVSkg0pvNPWVnXpD25CWsG8jGThM3/t7uTzRhMsNFo9EzuU5ZljhDW9tQwjC2Jex0MBi+FIglIkqYp8VBri8Uiw6baoBWaRRim6NALOaZ5FBIva3cOrdAsCrNFp6rzMAyravqk3cNwGI/HDyAWxzHb7/cnN+oWgEZohWbS/sj15UAoMKTAW7fbZZRo2Gaz0RoKYEAjtEIz+e+TyeQDUAxKKnc0j4b9fj+/AcHdbpfTa7VacM9uy+Uyb0PV1Fmv18z3feY4v+mD9LPpdBpRkr03idJNp9OJQYubbds5HB2nDsRjmnAY0Azt7XbbpGu3Nu18y7I8DoMfcRMeVmGqRga0QJPY+VwfGBCoq0NS5Rcu/dgAkUZALYAgqfLEKr2fcrcWQJSr/qPBZqUqwWlGSANEIiC5tRghTVKVeqVObmlSxYoOS3cVq9UgCHIm+Ic6t/2npxSI53lsu0WFTS8DENd1S0WVAqG1PcN2adYkVanHawFEeqfKXJpOFuohn6vVqtJkgd9/lSWAIuJU9ccH5NuYz+duFEUoEGW0HZXkix7UNUYwIqoaBnmZjBxjNptdJ0mif3W5oEfpq2P2er0vGhDpD2q0q+oG3RT9AAAAAElFTkSuQmCC')
            background-repeat no-repeat
            margin-right 5px
          span
            font-size 16px
            padding-top 5px
      .screenContext
        margin auto
        margin 40px
        width  70%
        position relative
        .screenText
          position absolute
          left 250px
          top 40px

        .secreenLine
          
          height 4px
          width 100%
         
          margin-left 50px
          background-color red

</style>
