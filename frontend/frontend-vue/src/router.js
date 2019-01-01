import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index';
import Cart from './pages/Cart';
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'Index',
            component:Index
        },
        {
            path:'/cart',
            name:'/cart',
            component:Cart
        }
    ]
})