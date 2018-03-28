<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper/dist/js/swiper.min'
  import 'swiper/dist/css/swiper.min.css'
  import tab_1 from 'components/classify/tab_1.vue'
  import tab_2 from 'components/classify/tab_2.vue'
  import tab_3 from 'components/classify/tab_3.vue'
  import tab_4 from 'components/classify/tab_4.vue'
  import tab_5 from 'components/classify/tab_5.vue'
  import tab_6 from 'components/classify/tab_6.vue'
  import tab_7 from 'components/classify/tab_7.vue'
  import tab_8 from 'components/classify/tab_8.vue'
  import tab_9 from 'components/classify/tab_9.vue'
  import tab_10 from 'components/classify/tab_10.vue'
  import tab_11 from 'components/classify/tab_11.vue'
  import tab_12 from 'components/classify/tab_12.vue'
  import tab_13 from 'components/classify/tab_13.vue'

  export default{
    data(){
      return {
        list: [
          {path: '/classify/tab_1', component: tab_1},
          {path: '/classify/tab_2', component: tab_2},
          {path: '/classify/tab_3', component: tab_3},
          {path: '/classify/tab_4', component: tab_4},
          {path: '/classify/tab_5', component: tab_5},
          {path: '/classify/tab_6', component: tab_6},
          {path: '/classify/tab_7', component: tab_7},
          {path: '/classify/tab_8', component: tab_8},
          {path: '/classify/tab_9', component: tab_9},
          {path: '/classify/tab_10', component: tab_10},
          {path: '/classify/tab_11', component: tab_11},
          {path: '/classify/tab_12', component: tab_12},
          {path: '/classify/tab_13', component: tab_13}
        ]
      }
    },
    created(){

    },
    mounted(){
      this.$nextTick(() => {

        var mySwiper = new Swiper('.swiper-container', {
          initialSlide: this.$route.path === '/classify/tab_1' ? 0 : this.$route.path === '/classify/tab_2' ? 1 : this.$route.path === '/classify/tab_3' ? 2 : this.$route.path === '/classify/tab_4' ? 3 : this.$route.path === '/classify/tab_5' ? 4 : this.$route.path === '/classify/tab_6' ? 5 : this.$route.path === '/classify/tab_7' ? 6 : this.$route.path === '/classify/tab_8' ? 7 : this.$route.path === '/classify/tab_9' ? 8 : this.$route.path === '/tab_10' ? 9 : this.$route.path === '/tab_11' ? 10 : this.$route.path === '/classify/tab_12' ? 11 : this.$route.path === '/classify/tab_13' ? 12 : 0
        });
        mySwiper.on('slideChange',()=>{// 监控滑动后当前页面的索引，将索引发射到导航组件
          // 左右滑动时将当前slide的索引发送到nav组件
            this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex)
        });
        //console.log(this.$route.path)
        this.$root.eventHub.$on('changeTab',(index)=>{
            mySwiper.slideTo(index,300,false)
        })

      })
    },
    methods: {
    },
    watch: {
      '$route'(to, from){
        console.log(to)
        console.log(from)
      }
    },
    components: {
      tab_1,
      tab_2,
      tab_3,
      tab_4,
      tab_5,
      tab_6,
      tab_7,
      tab_8,
      tab_9,
      tab_10,
      tab_11,
      tab_12,
      tab_13,
      //解决Failed to mount component: template or render function not defined.
//      'tab_1':require('./tab_1.vue').default,
//      'tab_2':require('./tab_2.vue').default,
//      'tab_3':require('./tab_3.vue').default,
//      'tab_4':require('./tab_4.vue').default,
//      'tab_5':require('./tab_5.vue').default,
//      'tab_6':require('./tab_6.vue').default,
//      'tab_7':require('./tab_7.vue').default,
//      'tab_8':require('./tab_8.vue').default,
//      'tab_9':require('./tab_9.vue').default,
//      'tab_10':require('./tab_10.vue').default,
//      'tab_11':require('./tab_11.vue').default,
//      'tab_12':require('./tab_12.vue').default,
//      'tab_13':require('./tab_13.vue').default
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper-slide
    min-height 500px
</style>
