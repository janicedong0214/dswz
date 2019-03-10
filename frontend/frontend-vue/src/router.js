import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index';
import Cart from './pages/Cart';
import Test from './test/sass/test';
Vue.use(Router);

export default new Router({
    mode: 'history',
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
        },
        {
            path:'/test',
            name:'/test',
            component:Test
        }
    ]
})