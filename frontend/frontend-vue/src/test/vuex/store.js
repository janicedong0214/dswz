import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        todos:[
            { id: 1, text: '111111111111', done: true },
            { id: 2, text: '22222222222', done: false },
            { id: 3, text: '33333333333', done: true },
            { id: 5, text: '55555555555', done: false },
            { id: 4, text: '44444444444', done: true },
            { id: 6, text: '66666666666', done: false }
        ]
    },
    getters: {
        doneTodos: state =>(state.todos.filter(todo => todo.done)),
        //返回函数
        getTodoById: (state)=>(id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    //操作store的数据
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    },
    //提交mutation
    //可以包含异步操作
    actions: {
        //context参数跟store实例类似，不是store实例本身
        increment(context){
            context.commit('increment')
        },
        decrementAction(context) {
            context.commit('decrement')
        }
    }
})
export default store;