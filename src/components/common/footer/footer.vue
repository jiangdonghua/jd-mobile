<template>
    <Panel title="公司信息" class="footer">
      <div slot="panel">
        <ul class="content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
            </li>
            <li class="ca">
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                    <p>客户端</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                    <p>触屏版</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                    <p>电脑版</p>
                </div>
            </li>
            <li class="border-1px">Copyright © 2004-2017 京东JD.com 版权所有</li>
            <li class="border-1px">投资有风险，购买需谨慎</li>
            <li class="border-1px">京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
      </div>
    </Panel>
</template>

<script>
import Panel from "components/common/panel/panel"
export default {
    components: {Panel}
}
</script>

<style coped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/base"
  .footer
    margin-bottom: 100px
    &>h4
      display: none
    .content
        background: #F5F5F5
        centerFlex(flex)
        flex-direction: row
        flex-wrap: wrap
        width: 100%
        text-align: center
        color: #999
        font-dpr(12px)
        li
          width :100%
          >img
            width: 100%
        .ca
          display: flex

          margin-bottom :10px
          div
            flex:1
            width :33.3333%
            text-align: center
            box-sizing: border-box
            padding-top: 20px
            img
              width-dpr(45px)
            p
              font-dpr(13px)
              text-align: center
              display: block
              color: #999
              margin-top: 12px
              white-space: nowrap
              text-overflow: ellipsis
              overflow: hidden
        li:nth-child(n+3)
          padding: 24px 0
          height: 38px
          line-height: 1em
          border-1px(#ccc)
        li:last-child
          border-none()



</style>
