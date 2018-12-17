export default{
    install(Vue, options) {
        Vue.$myName = 'testName'
        //添加全局属性方法
        Vue.myGlobalMethod = function(){

        }
        //添加全局资源：指令，过滤器，过度等
        Vue.directive('my-directive',{
            bind(el, binding, vnode, oldVnode){

            }
        })
        //通过全局minxin方法添加一些组件选项
        Vue.mixin({
            created:function(){

            }
        })
        //添加实例方法，绑定到原型上
        Vue.prototype.$myMethod = function(options){

        }
    }
}