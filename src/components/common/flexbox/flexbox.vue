<template>
<section class="flexBox">
  <div v-for="item in enters" :key="item.img" class="item">
    <router-link :to="{name:item.href}">
      <img :src="item.img" :alt="item.title">
      <h4>{{item.title}}</h4>
    </router-link>
  </div>
</section>
</template>

<script type="text/ecmascript-6">

    export default{
        props:{
            enters:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
.flexBox
  centerFlex(flex)
  background :#fff
  padding:20px 0 10px 0
  .item
    list(1)
    img
      display: inline-block
      width 50px
      height:50px
    h4
      font-dpr(13px)
      margin-top: 10px
      color: #666
</style>
