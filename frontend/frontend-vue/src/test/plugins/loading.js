//loading.js
import LoadingComponent from '../keepAlive/Loading.vue'

let $vm

export default {
    install(Vue){
        if(!$vm){
            const LoadingPlugin = Vue.extend(LoadingComponent);
            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });
            document.body.appendChild($vm.$el)
        }
        $vm.show = false;
        let loading = {
            show(text){
                $vm.show = true;
                $vm.text = text;
            },
            hide(){
                $vm.show = false;
            }
        }
        if(!Vue.$loading){
            Vue.$loading = loading;
        }

        Vue.mixin({
            created(){
                this.$loading = Vue.$loading;
            }
        })
    }
}