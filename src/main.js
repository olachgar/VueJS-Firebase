import Vue from 'vue'
import './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import VueRouter from 'vue-router'
import router from './router/router'
//import store from './store/index'
import Vuetify from 'vuetify'

import App from './App.vue'

Vue.use(Vuetify, {
  iconfont: 'fa' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
  //,store
}).$mount('#app')
