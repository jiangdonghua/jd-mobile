<template>
  <div class="home">
    <scroll ref="home"
            :data="imgsArr"
            :pullup="pullup"
            :beforeScroll="beforeScroll"
            :scrollToEnd="fetchImgsData"
            @beforeScroll="listScroll"
    >
      <div class="slide-wrapper">
        <slider>
          <div slot="slider-group" v-for="(item,index) in bannerList">
            <a href="###">
              <img :src="item.src" alt="">
            </a>
          </div>
        </slider>
      </div>
      <flex-box :enters="enters"></flex-box>
      <panel title="理财精选">
        <div slot="panel" class="panel-content">
          <dl v-for="item in items" :key="item.title" class="panel-item border-1px">
            <dt>{{ item.title }}<span>{{item.sub}}</span></dt>
            <dd>{{item.rate}}</dd>
            <dd>{{item.text}}</dd>
          </dl>
        </div>
      </panel>
      <panel title="众筹新品">
        <div slot="more" class="arrow">更多尖货</div>
        <div slot="panel" class="panel-content">
          <div class="pic-wrapper" ref="picWrapper">
            <ul class="pic-list" ref="picList">
              <li class="pic-item" v-for="pic in pics" ref="picItem">
                <img :src="pic.src">
              </li>
            </ul>
          </div>
        </div>
      </panel>
      <panel title="保险保障">
        <div slot="panel" class="panel-content">
          <div class="pic-wrapper" ref="spicWrapper">
            <ul class="pic-list" ref="spicList">
              <li class="pic-item" v-for="pic in safePics" ref="picItem">
                <img :src="pic.src">
              </li>
            </ul>
          </div>
          <div class="ad">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
          </div>
        </div>
      </panel>
      <panel title="新人特权">
        <div slot="panel" class="person-content">
            <div class="item-one">
              <h4>下载APP <span class="red">送888元礼包</span></h4>
              <p class="gray">新手专享</p>
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div class="item-two">
              <ul>
                <li>
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                  <h4 class="red">领128元新手礼包</h4>
                  <p class="gray">立即开通</p>
                </li>
                <li>
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
                  <h4>打白条<span class="red">享免息</span></h4>
                  <p class="gray">立即开通享豪礼</p>
                </li>
              </ul>
            </div>
        </div>
      </panel>
      <panel title="有车有钱">
        <div slot="panel" class="panel-content">
          <div class="hold car"><img src="//img12.360buyimg.com/jrpmobile/jfs/t17800/224/698056253/28974/d3ad0665/5aa0ec80N348451f8.png?width=375&height=233" alt=""></div>
          <div class="hold money">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
          </div>
        </div>
        <div slot="extent">
          <flex-box :enters="holdAll"></flex-box>
        </div>
      </panel>
      <my-footer></my-footer>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {getBanner, getGoods} from 'api/home'
  import {ERR_OK} from 'api/config'
  import Slider from 'components/common/slider/slider'
  import Scroll from 'components/common/scroll/scroll'
  import flexBox from 'components/common/flexbox/flexbox'
  import Panel from 'components/common/panel/panel'
  import MyFooter from 'components/common/footer/footer.vue'
  export default{
    data(){
      return {
        goodsList: [],
        column: 2,
        direction: 'column',
        pullup: true,
        hasMore: true,
        beforeScroll: true,
        imgsArr: [],
        fetchImgsArr: [],
        bannerList: [{
          href: "ious",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t15043/22/2700496190/48815/dc123010/5ab0e324Nebb21e1c.jpg?width=750&height=320",
        }, {
          href: "shopCar",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t19306/294/921741081/36893/92d382f1/5ab0e355N85137f3a.jpg?width=750&height=320"
        },
          {
            href: "shopCar",
            src: "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320"
          },
          {
            href: "more",
            src: "//img12.360buyimg.com/jrpmobile/jfs/t18847/279/921894012/50858/f5a64f65/5ab0e217Nb4ba0199.jpg?width=750&height=320"
          }],
        enters: [{
          href: "download",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
          title: "优惠券",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
          title: "领红包",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
          title: "抢钢镚",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
          title: "领京豆",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
          title: "白条提额",
        }],
        holdAll: [{
          href: "download",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
          title: "旅游",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
          title: "医美",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
          title: "房抵贷",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
          title: "驾校",
        }, {
          href: "home",
          img: "//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
          title: "分期用",
        }],
        items: [{
          title: "定期理财",
          sub: "90天可质押",
          rate: "5.50%",
          text: "历史年化结算利率",
        }, {
          title: "固收理财",
          sub: "理财推荐",
          rate: "5.8%",
          text: "综合年化收益率",
        }, {
          title: "基智账户",
          sub: "组合投资",
          rate: "8%-10%",
          text: "止盈年化收益率",
        }, {
          title: "小白基金",
          sub: "超短期",
          rate: "5.00%",
          text: "7日年化收益率",
        }],
        pics: [{
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421",
        }],
        safePics: [{
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
        }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260",
        },{
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
        }],
      }
    },
    created(){
      setTimeout(() => {
        this._getGoods()
        this._initPics(this.pics,this.$refs.picItem[0],10,this.$refs.picList,this.$refs.picWrapper)
        this._initPics(this.safePics,this.$refs.picItem[0],10,this.$refs.spicList,this.$refs.spicWrapper)
      }, 20)
      this.imgsArr = this.initImgsArr(0, 3)
      this.fetchImgsArr = this.initImgsArr(3, 20) // 模拟每次请求的新的图片的数据数据
    },
    methods: {
//      _getBanner(){
//        var that = this
//        const arr = []
//        getBanner().then((res) => {
//          res.forEach((item) => {
//            arr.push(JSON.parse(item.goodsBenUrl)[0])
//          })
//          return arr
//        })
//        that.$set(that.bannerList, 'data', arr)
//
//      },
      _getGoods(){
        var that = this
        getGoods().then((res) => {
          //  console.log(res)
          //this.goodsList = res
          //that.$set(that.goodsList, 'data', res)
          //console.log(this.goodsList.data)
        })

      },
      searchMore(){
      },
      listScroll(){
        this.$emit('listScroll')
      },
      // 假数据
      initImgsArr(n, m) { //num 图片数量
        var arr = []
        getGoods().then((res) => {
          this.goodsList = res

          for (var i = n; i < m; i++) {
            arr.push(this.goodsList.splice(n, m))
          }
        })
//        for (var i = n; i < m; i++) {
//          arr.push({ src: `./static/img/${i + 1}.jpg`, link: 'https://www.baidu.com', info: '一些图片描述文字' })
//        }
        return arr
      },

      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      },
      _initPics(resource,picWidth1,margin1,scrollBox,scrollWrapper){
        if (resource) {
          let picWidth = picWidth1.offsetWidth
          let margin = margin1
          let width1 = (picWidth + margin) * resource.length-margin
          scrollBox.style.width = width1 + 'px'
          if (!this.picScroll) {
            this.$nextTick(() => {
              this.picScroll = new BScroll(scrollWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              })
            })
          } else {
            this.picScroll.refresh()
          }
        }
      },

    },
    components: {
      Slider,
      Scroll,
      flexBox,
      Panel,
      MyFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/base"
  .home
    position: fixed
    width: 100%
    top: 50px
    bottom: 70px
    .slide-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .panel-content
      centerFlex(flex)
      flex-direction: row
      flex-wrap: wrap
      .panel-item
        position: relative
        width: 50%
        padding: 16px 0 16px 16px
        border-1px(#eee)
        &:before
          position: absolute
          top: 50%
          left: -1px
          display: block
          content: ''
          width: 1px
          height: 60px
          margin-top: -30px
          border-right: 1px solid #eee
        &:nth-child(2n+1)
          &:before
            display: none
        dt
          font-dpr(15px)
          padding: 10px 0
          color: #333

          span
            font-dpr(11px)
            margin-left: 4px
            color: #ff5155
            border: 1px solid #ff5155
            padding: 0px 3px
            box-sizing: border-box
            vertical-align: middle
            display: inline-block
            height: 14px
            line-height: 14px;
            margin-top: -4px
        dd
          &:nth-child(2)
            font-weight: 700
            font-dpr(22px)
            color: #ff5155
            no-wrap()
            margin-bottom 5px
          &:nth-child(3)
            font-dpr(12px)
            color: #999
            padding: 2px 0
            no-wrap()
      .pic-wrapper
        no-wrap()
        width: 100%
        margin-left: 16px
        margin-right:16px
        .pic-list
          font-size: 0

          .pic-item
            display: inline-block
            margin-right: 10px
            width-dpr(125px)
            img
              display: block
              width:100%
              height: auto

      .ad
        margin :20px 0
        img
          width :100%
      .hold
        list(1)
        width :50%
        img
          width :100%
    .person-content
      centerFlex(flex)
      flex-direction: row
      &>div
        list(1)
      .item-one
        padding:0 5px 10px 5px
        text-align :center
        border-right:1px solid #ddd
        overflow: hidden
        h4
          margin-top :28px
        img
          width: 80px
          height: 80px
          margin:10px 0
      h4
        font-dpr(14px)
        margin-bottom :10px
      .red
        color: #f00
      .gray
        color: #999
        font-dpr(14px)
      p
        font-dpr(14px)
      .item-two
        padding:0 5px 10px 5px
        ul
          width:100%
          li
            width: 100%
            padding:24px 14px 20px 14px
            text-align :left
            box-sizing: border-box
            &:first-child
              border-bottom :1px solid #ddd
            h4
              no-wrap()
              line-height:1em
              margin-top: 4px
            img
              width: 40px
              height: 40px
              float: right
              vertical-align :middle

    .arrow
      no-wrap()
      max-width: 40%;
      padding: 0 16px
      font-size: 14px
      color: #999
      height: 60px
      line-height: 60px
      margin-right: 16px
      background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
      background-size: 9px 14px
      position: absolute
      top: 0
      right: 0
</style>
