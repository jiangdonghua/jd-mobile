import Vue from 'vue'
import Router from 'vue-router'
import Classify from 'components/classify/classify'
import Home from 'components/home/home'
import More from 'components/more/more'
import ShopCar from 'components/shopCar/shopCar'
import UserCenter from 'components/userCenter/userCenter'
// import one from 'components/one/one.vue'
// import two from 'components/two/two.vue'
// import three from 'components/three/three.vue'
// import four from 'components/four/four.vue'
// import five from 'components/five/five.vue'

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
    // {path: '/', redirect: '/one'},
    // {path: '/one', component: one},
    // {path: '/two', component: two},
    // {path: '/three', component: three},
    // {path: '/four', component: four},
    // {path: '/five', component: five},
    {
      path:'/Classify/',
      component:Classify,
      //redirect: '/Classify/tab_1',
      children:[{
        path:'/',
        component:resolve=>require(['components/classify/tab_1'],resolve)
      },
        {
          path:'tab_1',
          name:'tab_1',
          component:resolve=>require(['components/classify/tab_1'],resolve)
        },
        {
          path:'tab_2',
          name:'tab_2',
          component:resolve=>require(['components/classify/tab_2'],resolve)
        },{
          path:'tab_3',
          name:'tab_3',
          component:resolve=>require(['components/classify/tab_3'],resolve)
        },{
          path:'tab_4',
          name:'tab_4',
          component:resolve=>require(['components/classify/tab_4'],resolve)
        },
        {
          path:'tab_5',
          name:'tab_5',
          component:resolve=>require(['components/classify/tab_5'],resolve)
        },{
          path:'tab_6',
          name:'tab_6',
          component:resolve=>require(['components/classify/tab_6'],resolve)
        },{
          path:'tab_7',
          name:'tab_7',
          component:resolve=>require(['components/classify/tab_7'],resolve)
        },{
          path:'tab_8',
          name:'tab_8',
          component:resolve=>require(['components/classify/tab_8'],resolve)
        },{
          path:'tab_9',
          name:'tab_9',
          component:resolve=>require(['components/classify/tab_9'],resolve)
        },{
          path:'tab_10',
          name:'tab_10',
          component:resolve=>require(['components/classify/tab_10'],resolve)
        },{
          path:'tab_11',
          name:'tab_11',
          component:resolve=>require(['components/classify/tab_11'],resolve)
        },
        {
          path:'tab_12',
          name:'tab_12',
          component:resolve=>require(['components/classify/tab_12'],resolve)
        },
        {
          path:'tab_13',
          name:'tab_13',
          component:resolve=>require(['components/classify/tab_13'],resolve)
        }]
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
