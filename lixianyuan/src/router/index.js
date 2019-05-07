import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FIndex from '@/components/front/FIndex'
import MIndex from '@/components/after/MIndex'
import Carousel from '@/components/front/carousel/Carousel'

Vue.use(Router)

export default new Router({
  mode: 'history',//vue去掉访问路径中的'#'(hash模式),在router目录下的index.js开启history模式，history模式使用 history.pushState API 来完成 URL 跳转而无须重新加载页面
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/findex',
      name: 'FIndex',
      component: FIndex
    },{
      path: '/mindex',
      name: 'MIndex',
      component: MIndex
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    }
  ]
})
