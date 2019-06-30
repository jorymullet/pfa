import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Clone from '../static/plugins/clone'
import IsFormReady from '../static/plugins/is-form-ready'

Vue.use(Clone)
Vue.use(IsFormReady)

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
