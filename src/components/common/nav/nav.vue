<template>
  <div class="nav">
    <router-link tag="div" class="tab-item" to="/Home">
      <div class="center">
        <i class="icon icon-home"></i>
        <span class="tab-link">首页</span>
      </div>

    </router-link>
    <router-link tag="div" class="tab-item" to="/Classify/">
      <div class="center">
        <i class="icon icon-classify"></i>
        <span class="tab-link">分类</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/ShopCar">
      <div class="center">
        <i class="icon icon-shopping_cart"></i>
        <span class="tab-link">购物车</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/UserCenter">
      <div class="center">
        <i class="icon icon-user"></i>
        <span class="tab-link">我的秀</span>
      </div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/More">
      <div class="center">
        <i class="icon icon-more"></i>
        <span class="tab-link">更多</span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/base.styl"
  @import "~common/stylus/mixin.styl"
  .nav
    position: absolute
    bottom: 0
    left: 0
    display: flex
    height: 70px
    width: 100%

    .tab-item
      position: relative
      background: #484850
      flex: 1
      text-align: center
      border-top: 2px solid #484850
      .center
        width: 100%
        center()
        .icon
          font-dpr(16px)
          color: rgba(255, 255, 255, 0.8)
        .tab-link
          display: block
          color: #fff
          opacity: 0.8
          padding-top: 5px
          font-dpr(14px)

    .tab-item.router-link-active

      border-top: 2px solid #a90506
</style>
