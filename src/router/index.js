import Vue from 'vue'
import Router from 'vue-router'
import Classify from 'components/classify/classify'
import Home from 'components/home/home'
import More from 'components/more/more'
import ShopCar from 'components/shopCar/shopCar'
import UserCenter from 'components/userCenter/userCenter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      component:Home
    },
    {
      path:'/Classify',
      component:Classify
    },
    {
      path:'/ShopCar',
      component:ShopCar
    },
    {
      path:'/UserCenter',
      component:UserCenter
    },
    {
      path:'/More',
      component:More
    }
  ]
})
