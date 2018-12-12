<template>
    <div>
        <hr>
        <h3>Test</h3>
        <button @click="sub">-</button>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{ count }}</span>
        <p class="todoList">TodoList: </p>
        <ul>
            <li v-for="(item,index) in todos" :key="index">{{item.id}}、  {{item.text}}</li>
        </ul>
        <label>
            <span>Select by Id: </span>&nbsp;&nbsp;&nbsp;
            <input type="text" v-model="todoId"/>&nbsp;&nbsp;&nbsp;
            <button @click="getList">search</button>
            <p>{{ todoItem }}</p>
        </label>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        props:['data'],
        data() {
            return {
                todoId: '',
                todoItem:''
            }
        },
        computed:{
            ...mapState({
            count(){
                return this.$store.state.count
            },
            todos(){
                return this.$store.getters.doneTodos
            }
        })},
        methods: {
            getList() {
                this.todoItem = this.$store.getters.getTodoById(parseInt(String(this.todoId).trim()))
            },
            ...mapActions({
                sub: 'decrementAction'//等价于this.sub()=this.$store.dispatch('decrementAction')
            })
        },
    }
</script>

<style scoped>
    li{
        list-style: none;
        text-align: left;
        margin: 10px 30%;
    }
    .todoList{
        text-align: left;
        margin-left: 32%;
        font-weight: 600;
    }
</style>