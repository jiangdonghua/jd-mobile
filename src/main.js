// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import 'lib-flexible/flexible'
import 'common/stylus/index.styl'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastClick.attach(document.body);
  }, false);
}
Vue.use(VueLazyLoad,{
  loading:require('common/image/run.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
