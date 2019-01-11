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


//elementUI组件测试
// import Index from './test/elementUI/Index.vue'



Vue.config.productionTip = false
// Vue.use(loading)
Vue.use(ElementUI)
Vue.use(jsonp)
Vue.use(VueAwesomeSwiper)

new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app')