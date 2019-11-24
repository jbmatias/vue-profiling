import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/bootstrap-vue/'

Vue.config.productionTip = false
Vue.component('NavBar', require('./components/nav.vue').default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
