/* global localStorage*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ELEMENT from 'element-ui'
import AxiosMockAdapter from 'axios-mock-adapter'

window.axiosMock = window.axiosMock || new AxiosMockAdapter(axios, { delayResponse: 1000 })

import util from './utils/'
import config from './config/'

import Toolbar from './components/toolbar.vue'

Vue.use(VueRouter)
Vue.use(ELEMENT)
Vue.component('el-toolbar', Toolbar)

import routes from './router/'
import main from './views/main.vue'

axios.defaults.baseURL =  '/'
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

if (window.env === 'dev') {
  Vue.config.devtools = true
}
const routerConfig = {
  mode: 'hash',
  routes: routes
}
const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
  util.title(to.meta.title)
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

window.app = new Vue({
  el: '#app',
  router: router,
  render: h => h(main)
})

axiosMock.onAny().passThrough()
