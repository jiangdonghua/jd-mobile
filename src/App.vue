<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <my-nav></my-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from 'components/common/header/header.vue'
  import MyNav from 'components/common/nav/nav.vue'

  export default {
    name: 'app',
    components:{
      MyHeader,
      MyNav,

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";


  .load {
    font-size: 4px; /*no*/
  }

  .font
    font-dpr(30px)




</style>
