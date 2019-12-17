import Vue from 'vue'
import App from './App.vue'
import '../public/rem'
import router from './router'
import axios from 'axios'

import Element from 'element-ui'
Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
