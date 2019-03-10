import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/Login'
import Main from './pages/Main'
import Test from './Test'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Main',
            component: Main,
            redirect: '/index',
            children:[
                {
                    path: '/index',
                    name: 'index',
                    //这种方式不写后缀名，会报错
                    component: ()=>import('./pages/Index.vue')
                },
                {
                    path:'/cart',
                    name:'cart',
                    component: ()=>import('./pages/Cart.vue')
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/test',
            name:'/test',
            component:Test
        }
    ]
})