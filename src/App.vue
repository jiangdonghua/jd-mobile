<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <my-footer></my-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from 'components/common/header/header.vue'
  import MyFooter from 'components/common/footer/footer.vue'
  export default {
    name: 'app',
    components:{
      MyHeader,
      MyFooter
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
