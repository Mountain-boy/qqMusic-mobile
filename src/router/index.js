import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/vivw/home'

import Toplist from '@/vivw/toplist'
import Search from '@/vivw/searchPage'
import Listinfo from '@/vivw/listinfo'
import PlayPage from '@/vivw/playPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/toplist',
      name: 'Toplist',
      component: Toplist
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/listinfo/:id',
      name: 'Listinfo',
      component: Listinfo
    },
    {
      path: '/playPage/:id',
      name: 'playPage',
      component: PlayPage
    }
  ]
})
