import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import loading from './test/plugins/loading'
import router from './router'

Vue.config.productionTip = false
Vue.use(loading)

Vue.use(ElementUI)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

//vue实例中$el会把挂载的真实DOM覆盖
//合并options
