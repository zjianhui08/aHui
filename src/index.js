import Vue from 'vue'
import App from './compontents/app.vue'
import './rem'
import '../assets/style.styl'
import Router from 'vue-router' 
import router from './compontents/config/router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import '../css/iconfont/iconfont.css'
import {store} from './compontents/vuex/store'
import 'default-passive-events'
Vue.prototype.$axios = axios
Vue.use(Router)
Vue.use(MintUI)
 new Vue({
  router,
  store,
  render(h) {
    return h(App)
  }
}).$mount('#root')

