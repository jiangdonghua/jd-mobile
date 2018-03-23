<template>
  <div class="header">
    <div class="icon"></div>
    <h1 class="text" :title="title" v-text="title">{{title}}</h1>
    <router-link tag="div" to="/UserCenter" class="mine">
      <i class="icon-user"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    props: {
      title: {
        type: String,
        default: "新品上市"
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .header
    position: relative
    height: 50px
    text-align: center
    font-size: 0
    background: #484850
    line-height:50px
    .icon
      display: inline-block
      vertical-align: top
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
      margin-top: 9px
      border-radius :50%
      margin-left:-50px
    .text
      display: inline-block
      margin-top:3px
      font-dpr(18px)
      color: rgba(255, 255, 255, 0.8)
    .mine
      position: absolute
      right: 12px
      top:50%
      transform: translate(0, -50%)
      .icon-user
        display: block
        padding: 12px
        font-dpr(24px)
        color: rgba(255, 255, 255, 0.8)


</style>
