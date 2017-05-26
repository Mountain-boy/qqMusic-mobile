import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/vivw/home'

import Toplist from '@/vivw/toplist'
import Search from '@/vivw/searchPage'

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
    }
  ]
})
