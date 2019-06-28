import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FIndex from '@/components/front/FIndex'
import MIndex from '@/components/after/MIndex'
import Carousel from '@/components/front/carousel/Carousel'
import Header from '@/components/front/header/Header'
import Footer from '@/components/front/footer/Footer'
import LeaveMsg from '@/components/front/leavemsg/LeaveMsg'
import ShowMsg from '@/components/front/leavemsg/ShowMsg'
import Gossip from '@/components/front/xysy/Gossip'
import Picture from '@/components/front/photo/Picture'
import NoteShare from '@/components/front/share/NoteShare'
import ResourceShare from '@/components/front/share/ResourceShare'
import About from '@/components/front/about/About'
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
    },{
      path: '/header',
      name: 'Header',
      component: Header
    },{
      path: '/footer',
      name: 'Footer',
      component: Footer
    },{
    	path: '/leaveMsg',
    	name: '/LeaveMsg',
    	component: LeaveMsg
    },{
    	path: '/showMsg',
    	name: '/ShowMsg',
    	component: ShowMsg
    },{
    	path: '/gossip',
    	name: '/Gossip',
    	component: Gossip
    },{
    	path: '/picture',
    	name: '/Picture',
    	component: Picture
    },{
    	path: '/noteShare',
    	name: '/NoteShare',
    	component: NoteShare
    },{
    	path: '/resourceShare',
    	name: '/ResourceShare',
    	component: ResourceShare
    },{
    	path: '/about',
    	name: '/About',
    	component: About
    }
    
  ]
})
