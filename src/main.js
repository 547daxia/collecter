import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
<<<<<<< HEAD
import cheerio from 'cheerio'

Vue.prototype.$cheerio = cheerio
=======
>>>>>>> 404cf825afbd87d316794a456fcaa51139cc511d
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
