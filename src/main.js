import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Axios from 'axios'
import vuetify from './plugins/vuetify'
Vue.prototype.$axios = Axios
Vue.prototype.HTTP = '/api'
Vue.prototype.HOST = '/ap'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
