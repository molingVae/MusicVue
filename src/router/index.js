import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import ListCate from "@/pages/listcate"
import Ucenter from "@/pages/ucenter"
import Search from "@/pages/search"

import HotList from '../pages/music_list/hot_list'
import KingList from '../pages/music_list/king_list'
import NewList from '../pages/music_list/news_list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:"/home",
      component: Index,
      children:[
        {
          path:"home",
          component:Home,
          redirect:"/home/hot",
          children: [
            {
              path:"hot",
              name: HotList
            } ,{
              path:"king",
              name: KingList
            } ,{
              path:"news",
              name: NewList
            }
          ]
        },
        {
          path:"artists",
          component:Artists
        },
        {
          path:"listcate",
          component:ListCate
        },
        {
          path:"ucenter",
          component:Ucenter
        },
        {
          path:"search",
          component:Search
        }
      ]
    }
  ]
})
