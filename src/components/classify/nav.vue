<template>
  <nav class="navScroll">
    <div class="nav-wrapper" ref="navWrapper">
      <ul class="nav-list" ref="navList">
        <li v-for="(item,index) in classItem" ref="iconItem" @click="selectCategory(index,$event)"
            :key="index" :class="{'current':currentIndex===index}" class="icon-item">
          <i class="icon" :class="iconFont[item.classID]" :title="item.className"></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  import {getClass} from 'api/classify'
  import BScroll from 'better-scroll'
  import VueRouter from 'vue-router'
  export default{
    name: 'classify-nav',
    data(){
      return {
        classItem: {},
        currentIndex: 0
      }
    },
    created(){
      this._getClass()
    },
    mounted(){
      this.$nextTick(() => {
        this._getClass()
        // 初始化，保证刷新页面后内容区和导航键一致
        this._initPages()
      })
      // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
      this.$root.eventHub.$on('slideTab', this.slideTab);
    },
    computed: {
      iconFont(){
        let icon, iconName = []
        this.classItem.forEach((item) => {
//             if(item.icon==='&#xe670;'){
//                 return iconName[item.classID]='icon-yundong'
//             }
          switch (item.icon) {
            case '&#xe670;':
              return iconName[item.classID] = 'icon-txu'
              break;
            case "&#xe666;":
              return iconName[item.classID] = 'icon-lianyiqun'
              break;
            case "&#xe674;":
              return iconName[item.classID] = 'icon-nanshangyi'
              break;
            case "&#xe67d;":
              return iconName[item.classID] = 'icon-nvxie'
              break;
            case "&#xe66e;":
              return iconName[item.classID] = 'icon-piyi'
              break;
            case "&#xe66d;":
              return iconName[item.classID] = 'icon-nvshangyi'
              break;
            case "&#xe677;":
              return iconName[item.classID] = 'icon-waitao'
              break;
            case "&#xe672;":
              return iconName[item.classID] = 'icon-xiangbao'
              break;
            case "&#xe664;":
              return iconName[item.classID] = 'icon-piyi'
              break;
            case "&#xe675;":
              return iconName[item.classID] = 'icon-xinpin'
              break;
            case "&#xe673;":
              return iconName[item.classID] = 'icon-xiangbao'
              break;
            case "&#xe665;":
              return iconName[item.classID] = 'icon-nanshangyi'
              break;
            case "&#xe679;":
              return iconName[item.classID] = 'icon-txu'
              break;
            default:
              return iconName[item.classID] = 'icon-waitao'
          }
        })
        return iconName
      },

    },
    methods: {
      _getClass(){
        getClass().then((res) => {
          this.classItem = res
          this._initPics(this.classItem, document.querySelector(".icon-item"), 10, this.$refs.navList, this.$refs.navWrapper)
        })
      },
      _initPics(resource, picWidth1, margin1, scrollBox, scrollWrapper){

        if (resource && picWidth1) {
          let picWidth = picWidth1.getBoundingClientRect().width
          console.log(picWidth)
          let margin = margin1
          let width1 = (picWidth + margin) * resource.length + 64
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
      _initPages(){
        this.currentIndex = this.$route.path === '/classify/tab_1' ? 0 : this.$route.path === '/classify/tab_2' ? 1 : this.$route.path === '/classify/tab_3' ? 2 : this.$route.path === '/classify/tab_4' ? 3 : this.$route.path === 'classify/tab_5' ? 4 : this.$route.path === 'classify/tab_6' ? 5 : this.$route.path === '/classify/tab_7' ? 6 : this.$route.path === '/classify/tab_8' ? 7 : this.$route.path === '/classify/tab_9' ? 8 : this.$route.path === '/classify/tab_10' ? 9 : this.$route.path === '/classify/tab_11' ? 10 : this.$route.path === '/classify/tab_12' ? 11 : this.$route.path === '/classify/tab_13' ? 12 : 0;
        this.$root.eventHub.$emit('changeTab', this.currentIndex)

      },
      //点击切换
      selectCategory(index, event){
//        if (!event._constructed) {
//          return;
//        }
        this.currentIndex = index
        //击导航按钮时向swiper组件发射index
        this.$root.eventHub.$emit('changeTab',index)
      },
      slideTab(index){
          console.log("接受的index",index,this.currentIndex)
        this.currentIndex=index
        if(this.currentIndex<8){
          this.picScroll.scrollTo(this.currentIndex*(-document.querySelector(".icon-item").offsetWidth),0)
        }

        let router = new VueRouter();
        let href = index === 0 ? 'classify/tab_1' : index === 1 ? 'classify/tab_2' : index === 2 ? 'classify/tab_3' : index === 3 ? 'classify/tab_4' : index === 4 ? 'classify/tab_5' : index === 5 ? 'classify/tab_6' : index === 6 ? 'classify/tab_7' : index === 7 ? 'classify/tab_8' : index === 8 ? 'classify/tab_9' : index === 9 ? 'classify/tab_10' : index === 10 ? 'classify/tab_11' : index === 11 ? 'classify/tab_12' : index === 12 ? 'classify/tab_13' : 'classify/tab_1';
        // 利用路由的push方法更新路径地址
        router.push(href)
      },

    },
    watch: {
      '$route'(to, from){
        console.log(to)
        console.log(from)
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/base"
  .navScroll
    .nav-wrapper
      no-wrap()
      width: 100%
      box-sizing: border-box
      .nav-list
        font-size: 0
        padding:10px
        display :table
        .icon-item
          display: inline-block
          margin-right: 10px /*no*/
          text-align :center
          width-dpr(40px) /*no*/
          font-dpr(24px)
          &.current
            color: red
          &:last-child
            margin: 0
</style>
