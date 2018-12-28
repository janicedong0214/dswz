import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store'
// import loading from './test/plugins/loading'
import router from './router'
import jsonp from './assets/js/plugins/jsonp'


Vue.config.productionTip = false
// Vue.use(loading)
Vue.use(ElementUI)
Vue.use(jsonp)

new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app')