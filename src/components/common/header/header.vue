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
    .text
      display: inline-block
      vertical-align: top
      line-height: 52px
      font-dpr(9px)
      color: rgba(255, 255, 255, 0.8)
    .mine
      position: absolute
      top:0
      right:0
      bottom:0
      .icon-user
        display: block
        padding: 12px
        font-dpr(12px)
        color: rgba(255, 255, 255, 0.8)


</style>
