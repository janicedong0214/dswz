import Vue from 'vue'
import Router from 'vue-router'
import Tab11 from './test/keepAlive/Tab11'
import Index from './test/keepAlive/index';
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'Index',
            component:Index
        },
        {
            path:'/Tab11',
            name:'/Tab11',
            component:Tab11
        }
    ]
})