// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //element-ui组件
import 'element-ui/lib/theme-chalk/index.css'// element-ui组件
import axios from 'axios' 
import qs from '../node_modules/qs'

import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图
import 'swiper/dist/css/swiper.css' //轮播图

Vue.config.productionTip = false

Vue.use(ElementUI);//使用 element-ui

Vue.use(VueAwesomeSwiper);//使用 轮播图
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  axios,
  qs
})
