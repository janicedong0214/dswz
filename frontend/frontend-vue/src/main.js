import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store'
// import loading from './test/plugins/loading'
import router from './router'
import jsonp from './plugins/jsonp'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import moment from 'moment'
import utils from '@/assets/js/plugins/tools'
import axios from 'axios'

//引入mock.js
require('./mock.js')

// Vue.use(loading)
Vue.use(ElementUI);
Vue.use(jsonp);
Vue.use(VueAwesomeSwiper)
Vue.prototype.$moment = moment;
Vue.prototype.$utils = utils;
Vue.prototype.$axios = axios;

new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app')