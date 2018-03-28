<template>
  <section class="classify">
    <v-nav></v-nav>
    <v-swiper></v-swiper>
  </section>
</template>

<script type="text/ecmascript-6">
  import Loading from 'components/common/loading/loading'
  import vSwiper  from './swiper.vue'
  import vNav  from './nav.vue'
  export default{
      name:'classify',
    data(){
      return {
      }
    },
    created(){

    },
    mounted(){
    },
    computed: {
    },
    methods: {
    },
    watch:{
        '$route'(to,from){
            console.log(to)
          console.log(from)
        }
    },
    components:{
      Loading,
      vSwiper,
      vNav
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/base"



</style>
