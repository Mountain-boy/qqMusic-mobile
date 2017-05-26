// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';

import vueAxios from 'vue-axios'
Vue.use(vueAxios,axios)

Vue.config.productionTip = false

import '@/assets/index.css'
import tools from '@/assets/js/tools'
Vue.prototype.tools = tools;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
